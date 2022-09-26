function SD(){import("data:text/javascript,")}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/*!
 * Vue.js v2.7.10
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */var en=Object.freeze({}),Ue=Array.isArray;function Ie(i){return i==null}function V(i){return i!=null}function ut(i){return i===!0}function u0(i){return i===!1}function No(i){return typeof i=="string"||typeof i=="number"||typeof i=="symbol"||typeof i=="boolean"}function pt(i){return typeof i=="function"}function Lt(i){return i!==null&&typeof i=="object"}var Gu=Object.prototype.toString;function nn(i){return Gu.call(i)==="[object Object]"}function h0(i){return Gu.call(i)==="[object RegExp]"}function Wm(i){var e=parseFloat(String(i));return e>=0&&Math.floor(e)===e&&isFinite(i)}function kc(i){return V(i)&&typeof i.then=="function"&&typeof i.catch=="function"}function f0(i){return i==null?"":Array.isArray(i)||nn(i)&&i.toString===Gu?JSON.stringify(i,null,2):String(i)}function co(i){var e=parseFloat(i);return isNaN(e)?i:e}function Cn(i,e){for(var t=Object.create(null),n=i.split(","),s=0;s<n.length;s++)t[n[s]]=!0;return e?function(r){return t[r.toLowerCase()]}:function(r){return t[r]}}Cn("slot,component",!0);var d0=Cn("key,ref,slot,slot-scope,is");function ei(i,e){if(i.length){var t=i.indexOf(e);if(t>-1)return i.splice(t,1)}}var p0=Object.prototype.hasOwnProperty;function Bt(i,e){return p0.call(i,e)}function gs(i){var e=Object.create(null);return function(n){var s=e[n];return s||(e[n]=i(n))}}var m0=/-(\w)/g,ts=gs(function(i){return i.replace(m0,function(e,t){return t?t.toUpperCase():""})}),g0=gs(function(i){return i.charAt(0).toUpperCase()+i.slice(1)}),_0=/\B([A-Z])/g,Oo=gs(function(i){return i.replace(_0,"-$1").toLowerCase()});function v0(i,e){function t(n){var s=arguments.length;return s?s>1?i.apply(e,arguments):i.call(e,n):i.call(e)}return t._length=i.length,t}function y0(i,e){return i.bind(e)}var $m=Function.prototype.bind?y0:v0;function Uc(i,e){e=e||0;for(var t=i.length-e,n=new Array(t);t--;)n[t]=i[t+e];return n}function ot(i,e){for(var t in e)i[t]=e[t];return i}function jm(i){for(var e={},t=0;t<i.length;t++)i[t]&&ot(e,i[t]);return e}function At(i,e,t){}var Xo=function(i,e,t){return!1},qm=function(i){return i};function ns(i,e){if(i===e)return!0;var t=Lt(i),n=Lt(e);if(t&&n)try{var s=Array.isArray(i),r=Array.isArray(e);if(s&&r)return i.length===e.length&&i.every(function(l,c){return ns(l,e[c])});if(i instanceof Date&&e instanceof Date)return i.getTime()===e.getTime();if(!s&&!r){var o=Object.keys(i),a=Object.keys(e);return o.length===a.length&&o.every(function(l){return ns(i[l],e[l])})}else return!1}catch{return!1}else return!t&&!n?String(i)===String(e):!1}function Xm(i,e){for(var t=0;t<i.length;t++)if(ns(i[t],e))return t;return-1}function Ua(i){var e=!1;return function(){e||(e=!0,i.apply(this,arguments))}}function x0(i,e){return i===e?i===0&&1/i!==1/e:i===i||e===e}var df="data-server-rendered",pl=["component","directive","filter"],Ym=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],fn={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:Xo,isReservedAttr:Xo,isUnknownElement:Xo,getTagNamespace:At,parsePlatformTagName:qm,mustUseProp:Xo,async:!0,_lifecycleHooks:Ym},b0=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function Km(i){var e=(i+"").charCodeAt(0);return e===36||e===95}function yi(i,e,t,n){Object.defineProperty(i,e,{value:t,enumerable:!!n,writable:!0,configurable:!0})}var S0=new RegExp("[^".concat(b0.source,".$_\\d]"));function M0(i){if(!S0.test(i)){var e=i.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var w0="__proto__"in{},rn=typeof window<"u",kt=rn&&window.navigator.userAgent.toLowerCase(),vr=kt&&/msie|trident/.test(kt),yr=kt&&kt.indexOf("msie 9.0")>0,Vu=kt&&kt.indexOf("edge/")>0;kt&&kt.indexOf("android")>0;var T0=kt&&/iphone|ipad|ipod|ios/.test(kt);kt&&/chrome\/\d+/.test(kt);kt&&/phantomjs/.test(kt);var pf=kt&&kt.match(/firefox\/(\d+)/),zc={}.watch,Zm=!1;if(rn)try{var mf={};Object.defineProperty(mf,"passive",{get:function(){Zm=!0}}),window.addEventListener("test-passive",null,mf)}catch{}var Yo,Fo=function(){return Yo===void 0&&(!rn&&typeof global<"u"?Yo=global.process&&global.process.env.VUE_ENV==="server":Yo=!1),Yo},za=rn&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function Zs(i){return typeof i=="function"&&/native code/.test(i.toString())}var ko=typeof Symbol<"u"&&Zs(Symbol)&&typeof Reflect<"u"&&Zs(Reflect.ownKeys),uo;typeof Set<"u"&&Zs(Set)?uo=Set:uo=function(){function i(){this.set=Object.create(null)}return i.prototype.has=function(e){return this.set[e]===!0},i.prototype.add=function(e){this.set[e]=!0},i.prototype.clear=function(){this.set=Object.create(null)},i}();var Qr=null;function Mi(i){i===void 0&&(i=null),i||Qr&&Qr._scope.off(),Qr=i,i&&i._scope.on()}var sn=function(){function i(e,t,n,s,r,o,a,l){this.tag=e,this.data=t,this.children=n,this.text=s,this.elm=r,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=l,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(i.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),i}(),qi=function(i){i===void 0&&(i="");var e=new sn;return e.text=i,e.isComment=!0,e};function Ws(i){return new sn(void 0,void 0,void 0,String(i))}function Bc(i){var e=new sn(i.tag,i.data,i.children&&i.children.slice(),i.text,i.elm,i.context,i.componentOptions,i.asyncFactory);return e.ns=i.ns,e.isStatic=i.isStatic,e.key=i.key,e.isComment=i.isComment,e.fnContext=i.fnContext,e.fnOptions=i.fnOptions,e.fnScopeId=i.fnScopeId,e.asyncMeta=i.asyncMeta,e.isCloned=!0,e}var E0=0,wi=function(){function i(){this.id=E0++,this.subs=[]}return i.prototype.addSub=function(e){this.subs.push(e)},i.prototype.removeSub=function(e){ei(this.subs,e)},i.prototype.depend=function(e){i.target&&i.target.addDep(this)},i.prototype.notify=function(e){for(var t=this.subs.slice(),n=0,s=t.length;n<s;n++)t[n].update()},i}();wi.target=null;var Pa=[];function xr(i){Pa.push(i),wi.target=i}function br(){Pa.pop(),wi.target=Pa[Pa.length-1]}var Jm=Array.prototype,Ba=Object.create(Jm),C0=["push","pop","shift","unshift","splice","sort","reverse"];C0.forEach(function(i){var e=Jm[i];yi(Ba,i,function(){for(var n=[],s=0;s<arguments.length;s++)n[s]=arguments[s];var r=e.apply(this,n),o=this.__ob__,a;switch(i){case"push":case"unshift":a=n;break;case"splice":a=n.slice(2);break}return a&&o.observeArray(a),o.dep.notify(),r})});var gf=Object.getOwnPropertyNames(Ba),Qm={},Wu=!0;function Ti(i){Wu=i}var A0={notify:At,depend:At,addSub:At,removeSub:At},_f=function(){function i(e,t,n){if(t===void 0&&(t=!1),n===void 0&&(n=!1),this.value=e,this.shallow=t,this.mock=n,this.dep=n?A0:new wi,this.vmCount=0,yi(e,"__ob__",this),Ue(e)){if(!n)if(w0)e.__proto__=Ba;else for(var s=0,r=gf.length;s<r;s++){var o=gf[s];yi(e,o,Ba[o])}t||this.observeArray(e)}else for(var a=Object.keys(e),s=0;s<a.length;s++){var o=a[s];is(e,o,Qm,void 0,t,n)}}return i.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)Jn(e[t],!1,this.mock)},i}();function Jn(i,e,t){if(!(!Lt(i)||Pn(i)||i instanceof sn)){var n;return Bt(i,"__ob__")&&i.__ob__ instanceof _f?n=i.__ob__:Wu&&(t||!Fo())&&(Ue(i)||nn(i))&&Object.isExtensible(i)&&!i.__v_skip&&(n=new _f(i,e,t)),n}}function is(i,e,t,n,s,r){var o=new wi,a=Object.getOwnPropertyDescriptor(i,e);if(!(a&&a.configurable===!1)){var l=a&&a.get,c=a&&a.set;(!l||c)&&(t===Qm||arguments.length===2)&&(t=i[e]);var u=!s&&Jn(t,!1,r);return Object.defineProperty(i,e,{enumerable:!0,configurable:!0,get:function(){var f=l?l.call(i):t;return wi.target&&(o.depend(),u&&(u.dep.depend(),Ue(f)&&tg(f))),Pn(f)&&!s?f.value:f},set:function(f){var d=l?l.call(i):t;if(!!x0(d,f)){if(c)c.call(i,f);else{if(l)return;if(!s&&Pn(d)&&!Pn(f)){d.value=f;return}else t=f}u=!s&&Jn(f,!1,r),o.notify()}}}),o}}function $u(i,e,t){if(!ju(i)){var n=i.__ob__;return Ue(i)&&Wm(e)?(i.length=Math.max(i.length,e),i.splice(e,1,t),n&&!n.shallow&&n.mock&&Jn(t,!1,!0),t):e in i&&!(e in Object.prototype)?(i[e]=t,t):i._isVue||n&&n.vmCount?t:n?(is(n.value,e,t,void 0,n.shallow,n.mock),n.dep.notify(),t):(i[e]=t,t)}}function eg(i,e){if(Ue(i)&&Wm(e)){i.splice(e,1);return}var t=i.__ob__;i._isVue||t&&t.vmCount||ju(i)||!Bt(i,e)||(delete i[e],t&&t.dep.notify())}function tg(i){for(var e=void 0,t=0,n=i.length;t<n;t++)e=i[t],e&&e.__ob__&&e.__ob__.dep.depend(),Ue(e)&&tg(e)}function ng(i){return R0(i,!0),yi(i,"__v_isShallow",!0),i}function R0(i,e){ju(i)||Jn(i,e,Fo())}function ju(i){return!!(i&&i.__v_isReadonly)}function Pn(i){return!!(i&&i.__v_isRef===!0)}function Hc(i,e,t){Object.defineProperty(i,t,{enumerable:!0,configurable:!0,get:function(){var n=e[t];if(Pn(n))return n.value;var s=n&&n.__ob__;return s&&s.dep.depend(),n},set:function(n){var s=e[t];Pn(s)&&!Pn(n)?s.value=n:e[t]=n}})}var Qt,I0=function(){function i(e){e===void 0&&(e=!1),this.active=!0,this.effects=[],this.cleanups=[],!e&&Qt&&(this.parent=Qt,this.index=(Qt.scopes||(Qt.scopes=[])).push(this)-1)}return i.prototype.run=function(e){if(this.active){var t=Qt;try{return Qt=this,e()}finally{Qt=t}}},i.prototype.on=function(){Qt=this},i.prototype.off=function(){Qt=this.parent},i.prototype.stop=function(e){if(this.active){var t=void 0,n=void 0;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].teardown();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){var s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}},i}();function L0(i,e){e===void 0&&(e=Qt),e&&e.active&&e.effects.push(i)}function P0(i){var e=i._provided,t=i.$parent&&i.$parent._provided;return t===e?i._provided=Object.create(t):e}var vf=gs(function(i){var e=i.charAt(0)==="&";i=e?i.slice(1):i;var t=i.charAt(0)==="~";i=t?i.slice(1):i;var n=i.charAt(0)==="!";return i=n?i.slice(1):i,{name:i,once:t,capture:n,passive:e}});function Gc(i,e){function t(){var n=t.fns;if(Ue(n))for(var s=n.slice(),r=0;r<s.length;r++)Ei(s[r],null,arguments,e,"v-on handler");else return Ei(n,null,arguments,e,"v-on handler")}return t.fns=i,t}function ig(i,e,t,n,s,r){var o,a,l,c;for(o in i)a=i[o],l=e[o],c=vf(o),Ie(a)||(Ie(l)?(Ie(a.fns)&&(a=i[o]=Gc(a,r)),ut(c.once)&&(a=i[o]=s(c.name,a,c.capture)),t(c.name,a,c.capture,c.passive,c.params)):a!==l&&(l.fns=a,i[o]=l));for(o in e)Ie(i[o])&&(c=vf(o),n(c.name,e[o],c.capture))}function gi(i,e,t){i instanceof sn&&(i=i.data.hook||(i.data.hook={}));var n,s=i[e];function r(){t.apply(this,arguments),ei(n.fns,r)}Ie(s)?n=Gc([r]):V(s.fns)&&ut(s.merged)?(n=s,n.fns.push(r)):n=Gc([s,r]),n.merged=!0,i[e]=n}function D0(i,e,t){var n=e.options.props;if(!Ie(n)){var s={},r=i.attrs,o=i.props;if(V(r)||V(o))for(var a in n){var l=Oo(a);yf(s,o,a,l,!0)||yf(s,r,a,l,!1)}return s}}function yf(i,e,t,n,s){if(V(e)){if(Bt(e,t))return i[t]=e[t],s||delete e[t],!0;if(Bt(e,n))return i[t]=e[n],s||delete e[n],!0}return!1}function N0(i){for(var e=0;e<i.length;e++)if(Ue(i[e]))return Array.prototype.concat.apply([],i);return i}function qu(i){return No(i)?[Ws(i)]:Ue(i)?sg(i):void 0}function Dr(i){return V(i)&&V(i.text)&&u0(i.isComment)}function sg(i,e){var t=[],n,s,r,o;for(n=0;n<i.length;n++)s=i[n],!(Ie(s)||typeof s=="boolean")&&(r=t.length-1,o=t[r],Ue(s)?s.length>0&&(s=sg(s,"".concat(e||"","_").concat(n)),Dr(s[0])&&Dr(o)&&(t[r]=Ws(o.text+s[0].text),s.shift()),t.push.apply(t,s)):No(s)?Dr(o)?t[r]=Ws(o.text+s):s!==""&&t.push(Ws(s)):Dr(s)&&Dr(o)?t[r]=Ws(o.text+s.text):(ut(i._isVList)&&V(s.tag)&&Ie(s.key)&&V(e)&&(s.key="__vlist".concat(e,"_").concat(n,"__")),t.push(s)));return t}function O0(i,e){var t=null,n,s,r,o;if(Ue(i)||typeof i=="string")for(t=new Array(i.length),n=0,s=i.length;n<s;n++)t[n]=e(i[n],n);else if(typeof i=="number")for(t=new Array(i),n=0;n<i;n++)t[n]=e(n+1,n);else if(Lt(i))if(ko&&i[Symbol.iterator]){t=[];for(var a=i[Symbol.iterator](),l=a.next();!l.done;)t.push(e(l.value,t.length)),l=a.next()}else for(r=Object.keys(i),t=new Array(r.length),n=0,s=r.length;n<s;n++)o=r[n],t[n]=e(i[o],o,n);return V(t)||(t=[]),t._isVList=!0,t}function F0(i,e,t,n){var s=this.$scopedSlots[i],r;s?(t=t||{},n&&(t=ot(ot({},n),t)),r=s(t)||(pt(e)?e():e)):r=this.$slots[i]||(pt(e)?e():e);var o=t&&t.slot;return o?this.$createElement("template",{slot:o},r):r}function k0(i){return ja(this.$options,"filters",i)||qm}function xf(i,e){return Ue(i)?i.indexOf(e)===-1:i!==e}function U0(i,e,t,n,s){var r=fn.keyCodes[e]||t;return s&&n&&!fn.keyCodes[e]?xf(s,n):r?xf(r,i):n?Oo(n)!==e:i===void 0}function z0(i,e,t,n,s){if(t&&Lt(t)){Ue(t)&&(t=jm(t));var r=void 0,o=function(l){if(l==="class"||l==="style"||d0(l))r=i;else{var c=i.attrs&&i.attrs.type;r=n||fn.mustUseProp(e,c,l)?i.domProps||(i.domProps={}):i.attrs||(i.attrs={})}var u=ts(l),h=Oo(l);if(!(u in r)&&!(h in r)&&(r[l]=t[l],s)){var f=i.on||(i.on={});f["update:".concat(l)]=function(d){t[l]=d}}};for(var a in t)o(a)}return i}function B0(i,e){var t=this._staticTrees||(this._staticTrees=[]),n=t[i];return n&&!e||(n=t[i]=this.$options.staticRenderFns[i].call(this._renderProxy,this._c,this),rg(n,"__static__".concat(i),!1)),n}function H0(i,e,t){return rg(i,"__once__".concat(e).concat(t?"_".concat(t):""),!0),i}function rg(i,e,t){if(Ue(i))for(var n=0;n<i.length;n++)i[n]&&typeof i[n]!="string"&&bf(i[n],"".concat(e,"_").concat(n),t);else bf(i,e,t)}function bf(i,e,t){i.isStatic=!0,i.key=e,i.isOnce=t}function G0(i,e){if(e&&nn(e)){var t=i.on=i.on?ot({},i.on):{};for(var n in e){var s=t[n],r=e[n];t[n]=s?[].concat(s,r):r}}return i}function og(i,e,t,n){e=e||{$stable:!t};for(var s=0;s<i.length;s++){var r=i[s];Ue(r)?og(r,e,t):r&&(r.proxy&&(r.fn.proxy=!0),e[r.key]=r.fn)}return n&&(e.$key=n),e}function V0(i,e){for(var t=0;t<e.length;t+=2){var n=e[t];typeof n=="string"&&n&&(i[e[t]]=e[t+1])}return i}function W0(i,e){return typeof i=="string"?e+i:i}function ag(i){i._o=H0,i._n=co,i._s=f0,i._l=O0,i._t=F0,i._q=ns,i._i=Xm,i._m=B0,i._f=k0,i._k=U0,i._b=z0,i._v=Ws,i._e=qi,i._u=og,i._g=G0,i._d=V0,i._p=W0}function Xu(i,e){if(!i||!i.length)return{};for(var t={},n=0,s=i.length;n<s;n++){var r=i[n],o=r.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,(r.context===e||r.fnContext===e)&&o&&o.slot!=null){var a=o.slot,l=t[a]||(t[a]=[]);r.tag==="template"?l.push.apply(l,r.children||[]):l.push(r)}else(t.default||(t.default=[])).push(r)}for(var c in t)t[c].every($0)&&delete t[c];return t}function $0(i){return i.isComment&&!i.asyncFactory||i.text===" "}function ho(i){return i.isComment&&i.asyncFactory}function eo(i,e,t,n){var s,r=Object.keys(t).length>0,o=e?!!e.$stable:!r,a=e&&e.$key;if(!e)s={};else{if(e._normalized)return e._normalized;if(o&&n&&n!==en&&a===n.$key&&!r&&!n.$hasNormal)return n;s={};for(var l in e)e[l]&&l[0]!=="$"&&(s[l]=j0(i,t,l,e[l]))}for(var c in t)c in s||(s[c]=q0(t,c));return e&&Object.isExtensible(e)&&(e._normalized=s),yi(s,"$stable",o),yi(s,"$key",a),yi(s,"$hasNormal",r),s}function j0(i,e,t,n){var s=function(){var r=Qr;Mi(i);var o=arguments.length?n.apply(null,arguments):n({});o=o&&typeof o=="object"&&!Ue(o)?[o]:qu(o);var a=o&&o[0];return Mi(r),o&&(!a||o.length===1&&a.isComment&&!ho(a))?void 0:o};return n.proxy&&Object.defineProperty(e,t,{get:s,enumerable:!0,configurable:!0}),s}function q0(i,e){return function(){return i[e]}}function X0(i){var e=i.$options,t=e.setup;if(t){var n=i._setupContext=Y0(i);Mi(i),xr();var s=Ei(t,null,[i._props||ng({}),n],i,"setup");if(br(),Mi(),pt(s))e.render=s;else if(Lt(s))if(i._setupState=s,s.__sfc){var o=i._setupProxy={};for(var r in s)r!=="__sfc"&&Hc(o,s,r)}else for(var r in s)Km(r)||Hc(i,s,r)}}function Y0(i){return{get attrs(){if(!i._attrsProxy){var e=i._attrsProxy={};yi(e,"_v_attr_proxy",!0),Ha(e,i.$attrs,en,i,"$attrs")}return i._attrsProxy},get listeners(){if(!i._listenersProxy){var e=i._listenersProxy={};Ha(e,i.$listeners,en,i,"$listeners")}return i._listenersProxy},get slots(){return Z0(i)},emit:$m(i.$emit,i),expose:function(e){e&&Object.keys(e).forEach(function(t){return Hc(i,e,t)})}}}function Ha(i,e,t,n,s){var r=!1;for(var o in e)o in i?e[o]!==t[o]&&(r=!0):(r=!0,K0(i,o,n,s));for(var o in i)o in e||(r=!0,delete i[o]);return r}function K0(i,e,t,n){Object.defineProperty(i,e,{enumerable:!0,configurable:!0,get:function(){return t[n][e]}})}function Z0(i){return i._slotsProxy||lg(i._slotsProxy={},i.$scopedSlots),i._slotsProxy}function lg(i,e){for(var t in e)i[t]=e[t];for(var t in i)t in e||delete i[t]}function J0(i){i._vnode=null,i._staticTrees=null;var e=i.$options,t=i.$vnode=e._parentVnode,n=t&&t.context;i.$slots=Xu(e._renderChildren,n),i.$scopedSlots=t?eo(i.$parent,t.data.scopedSlots,i.$slots):en,i._c=function(r,o,a,l){return Ga(i,r,o,a,l,!1)},i.$createElement=function(r,o,a,l){return Ga(i,r,o,a,l,!0)};var s=t&&t.data;is(i,"$attrs",s&&s.attrs||en,null,!0),is(i,"$listeners",e._parentListeners||en,null,!0)}var Vc=null;function Q0(i){ag(i.prototype),i.prototype.$nextTick=function(e){return Yu(e,this)},i.prototype._render=function(){var e=this,t=e.$options,n=t.render,s=t._parentVnode;s&&e._isMounted&&(e.$scopedSlots=eo(e.$parent,s.data.scopedSlots,e.$slots,e.$scopedSlots),e._slotsProxy&&lg(e._slotsProxy,e.$scopedSlots)),e.$vnode=s;var r;try{Mi(e),Vc=e,r=n.call(e._renderProxy,e.$createElement)}catch(o){ss(o,e,"render"),r=e._vnode}finally{Vc=null,Mi()}return Ue(r)&&r.length===1&&(r=r[0]),r instanceof sn||(r=qi()),r.parent=s,r}}function Pl(i,e){return(i.__esModule||ko&&i[Symbol.toStringTag]==="Module")&&(i=i.default),Lt(i)?e.extend(i):i}function ey(i,e,t,n,s){var r=qi();return r.asyncFactory=i,r.asyncMeta={data:e,context:t,children:n,tag:s},r}function ty(i,e){if(ut(i.error)&&V(i.errorComp))return i.errorComp;if(V(i.resolved))return i.resolved;var t=Vc;if(t&&V(i.owners)&&i.owners.indexOf(t)===-1&&i.owners.push(t),ut(i.loading)&&V(i.loadingComp))return i.loadingComp;if(t&&!V(i.owners)){var n=i.owners=[t],s=!0,r=null,o=null;t.$on("hook:destroyed",function(){return ei(n,t)});var a=function(h){for(var f=0,d=n.length;f<d;f++)n[f].$forceUpdate();h&&(n.length=0,r!==null&&(clearTimeout(r),r=null),o!==null&&(clearTimeout(o),o=null))},l=Ua(function(h){i.resolved=Pl(h,e),s?n.length=0:a(!0)}),c=Ua(function(h){V(i.errorComp)&&(i.error=!0,a(!0))}),u=i(l,c);return Lt(u)&&(kc(u)?Ie(i.resolved)&&u.then(l,c):kc(u.component)&&(u.component.then(l,c),V(u.error)&&(i.errorComp=Pl(u.error,e)),V(u.loading)&&(i.loadingComp=Pl(u.loading,e),u.delay===0?i.loading=!0:r=setTimeout(function(){r=null,Ie(i.resolved)&&Ie(i.error)&&(i.loading=!0,a(!1))},u.delay||200)),V(u.timeout)&&(o=setTimeout(function(){o=null,Ie(i.resolved)&&c(null)},u.timeout)))),s=!1,i.loading?i.loadingComp:i.resolved}}function cg(i){if(Ue(i))for(var e=0;e<i.length;e++){var t=i[e];if(V(t)&&(V(t.componentOptions)||ho(t)))return t}}var ny=1,ug=2;function Ga(i,e,t,n,s,r){return(Ue(t)||No(t))&&(s=n,n=t,t=void 0),ut(r)&&(s=ug),iy(i,e,t,n,s)}function iy(i,e,t,n,s){if(V(t)&&V(t.__ob__)||(V(t)&&V(t.is)&&(e=t.is),!e))return qi();Ue(n)&&pt(n[0])&&(t=t||{},t.scopedSlots={default:n[0]},n.length=0),s===ug?n=qu(n):s===ny&&(n=N0(n));var r,o;if(typeof e=="string"){var a=void 0;o=i.$vnode&&i.$vnode.ns||fn.getTagNamespace(e),fn.isReservedTag(e)?r=new sn(fn.parsePlatformTagName(e),t,n,void 0,void 0,i):(!t||!t.pre)&&V(a=ja(i.$options,"components",e))?r=Rf(a,t,i,n,e):r=new sn(e,t,n,void 0,void 0,i)}else r=Rf(e,t,i,n);return Ue(r)?r:V(r)?(V(o)&&hg(r,o),V(t)&&sy(t),r):qi()}function hg(i,e,t){if(i.ns=e,i.tag==="foreignObject"&&(e=void 0,t=!0),V(i.children))for(var n=0,s=i.children.length;n<s;n++){var r=i.children[n];V(r.tag)&&(Ie(r.ns)||ut(t)&&r.tag!=="svg")&&hg(r,e,t)}}function sy(i){Lt(i.style)&&Va(i.style),Lt(i.class)&&Va(i.class)}function ss(i,e,t){xr();try{if(e)for(var n=e;n=n.$parent;){var s=n.$options.errorCaptured;if(s)for(var r=0;r<s.length;r++)try{var o=s[r].call(n,i,e,t)===!1;if(o)return}catch(a){Sf(a,n,"errorCaptured hook")}}Sf(i,e,t)}finally{br()}}function Ei(i,e,t,n,s){var r;try{r=t?i.apply(e,t):i.call(e),r&&!r._isVue&&kc(r)&&!r._handled&&(r.catch(function(o){return ss(o,n,s+" (Promise/async)")}),r._handled=!0)}catch(o){ss(o,n,s)}return r}function Sf(i,e,t){if(fn.errorHandler)try{return fn.errorHandler.call(null,i,e,t)}catch(n){n!==i&&Mf(n)}Mf(i)}function Mf(i,e,t){if(rn&&typeof console<"u")console.error(i);else throw i}var Wc=!1,$c=[],jc=!1;function Ko(){jc=!1;var i=$c.slice(0);$c.length=0;for(var e=0;e<i.length;e++)i[e]()}var Kr;if(typeof Promise<"u"&&Zs(Promise)){var ry=Promise.resolve();Kr=function(){ry.then(Ko),T0&&setTimeout(At)},Wc=!0}else if(!vr&&typeof MutationObserver<"u"&&(Zs(MutationObserver)||MutationObserver.toString()==="[object MutationObserverConstructor]")){var Zo=1,oy=new MutationObserver(Ko),wf=document.createTextNode(String(Zo));oy.observe(wf,{characterData:!0}),Kr=function(){Zo=(Zo+1)%2,wf.data=String(Zo)},Wc=!0}else typeof setImmediate<"u"&&Zs(setImmediate)?Kr=function(){setImmediate(Ko)}:Kr=function(){setTimeout(Ko,0)};function Yu(i,e){var t;if($c.push(function(){if(i)try{i.call(e)}catch(n){ss(n,e,"nextTick")}else t&&t(e)}),jc||(jc=!0,Kr()),!i&&typeof Promise<"u")return new Promise(function(n){t=n})}var ay="2.7.10",Tf=new uo;function Va(i){return Da(i,Tf),Tf.clear(),i}function Da(i,e){var t,n,s=Ue(i);if(!(!s&&!Lt(i)||Object.isFrozen(i)||i instanceof sn)){if(i.__ob__){var r=i.__ob__.dep.id;if(e.has(r))return;e.add(r)}if(s)for(t=i.length;t--;)Da(i[t],e);else if(Pn(i))Da(i.value,e);else for(n=Object.keys(i),t=n.length;t--;)Da(i[n[t]],e)}}var ly=0,Ku=function(){function i(e,t,n,s,r){L0(this,Qt&&!Qt._vm?Qt:e?e._scope:void 0),(this.vm=e)&&r&&(e._watcher=this),s?(this.deep=!!s.deep,this.user=!!s.user,this.lazy=!!s.lazy,this.sync=!!s.sync,this.before=s.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++ly,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new uo,this.newDepIds=new uo,this.expression="",pt(t)?this.getter=t:(this.getter=M0(t),this.getter||(this.getter=At)),this.value=this.lazy?void 0:this.get()}return i.prototype.get=function(){xr(this);var e,t=this.vm;try{e=this.getter.call(t,t)}catch(n){if(this.user)ss(n,t,'getter for watcher "'.concat(this.expression,'"'));else throw n}finally{this.deep&&Va(e),br(),this.cleanupDeps()}return e},i.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},i.prototype.cleanupDeps=function(){for(var e=this.deps.length;e--;){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},i.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():wy(this)},i.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||Lt(e)||this.deep){var t=this.value;if(this.value=e,this.user){var n='callback for watcher "'.concat(this.expression,'"');Ei(this.cb,this.vm,[e,t],this.vm,n)}else this.cb.call(this.vm,e,t)}}},i.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},i.prototype.depend=function(){for(var e=this.deps.length;e--;)this.deps[e].depend()},i.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&ei(this.vm._scope.effects,this),this.active){for(var e=this.deps.length;e--;)this.deps[e].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},i}();function cy(i){i._events=Object.create(null),i._hasHookEvent=!1;var e=i.$options._parentListeners;e&&fg(i,e)}var fo;function uy(i,e){fo.$on(i,e)}function hy(i,e){fo.$off(i,e)}function fy(i,e){var t=fo;return function n(){var s=e.apply(null,arguments);s!==null&&t.$off(i,n)}}function fg(i,e,t){fo=i,ig(e,t||{},uy,hy,fy,i),fo=void 0}function dy(i){var e=/^hook:/;i.prototype.$on=function(t,n){var s=this;if(Ue(t))for(var r=0,o=t.length;r<o;r++)s.$on(t[r],n);else(s._events[t]||(s._events[t]=[])).push(n),e.test(t)&&(s._hasHookEvent=!0);return s},i.prototype.$once=function(t,n){var s=this;function r(){s.$off(t,r),n.apply(s,arguments)}return r.fn=n,s.$on(t,r),s},i.prototype.$off=function(t,n){var s=this;if(!arguments.length)return s._events=Object.create(null),s;if(Ue(t)){for(var r=0,o=t.length;r<o;r++)s.$off(t[r],n);return s}var a=s._events[t];if(!a)return s;if(!n)return s._events[t]=null,s;for(var l,c=a.length;c--;)if(l=a[c],l===n||l.fn===n){a.splice(c,1);break}return s},i.prototype.$emit=function(t){var n=this,s=n._events[t];if(s){s=s.length>1?Uc(s):s;for(var r=Uc(arguments,1),o='event handler for "'.concat(t,'"'),a=0,l=s.length;a<l;a++)Ei(s[a],n,r,n,o)}return n}}var Xi=null;function dg(i){var e=Xi;return Xi=i,function(){Xi=e}}function py(i){var e=i.$options,t=e.parent;if(t&&!e.abstract){for(;t.$options.abstract&&t.$parent;)t=t.$parent;t.$children.push(i)}i.$parent=t,i.$root=t?t.$root:i,i.$children=[],i.$refs={},i._provided=t?t._provided:Object.create(null),i._watcher=null,i._inactive=null,i._directInactive=!1,i._isMounted=!1,i._isDestroyed=!1,i._isBeingDestroyed=!1}function my(i){i.prototype._update=function(e,t){var n=this,s=n.$el,r=n._vnode,o=dg(n);n._vnode=e,r?n.$el=n.__patch__(r,e):n.$el=n.__patch__(n.$el,e,t,!1),o(),s&&(s.__vue__=null),n.$el&&(n.$el.__vue__=n);for(var a=n;a&&a.$vnode&&a.$parent&&a.$vnode===a.$parent._vnode;)a.$parent.$el=a.$el,a=a.$parent},i.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},i.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){wn(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;t&&!t._isBeingDestroyed&&!e.$options.abstract&&ei(t.$children,e),e._scope.stop(),e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),wn(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function gy(i,e,t){i.$el=e,i.$options.render||(i.$options.render=qi),wn(i,"beforeMount");var n;n=function(){i._update(i._render(),t)};var s={before:function(){i._isMounted&&!i._isDestroyed&&wn(i,"beforeUpdate")}};new Ku(i,n,At,s,!0),t=!1;var r=i._preWatchers;if(r)for(var o=0;o<r.length;o++)r[o].run();return i.$vnode==null&&(i._isMounted=!0,wn(i,"mounted")),i}function _y(i,e,t,n,s){var r=n.data.scopedSlots,o=i.$scopedSlots,a=!!(r&&!r.$stable||o!==en&&!o.$stable||r&&i.$scopedSlots.$key!==r.$key||!r&&i.$scopedSlots.$key),l=!!(s||i.$options._renderChildren||a),c=i.$vnode;i.$options._parentVnode=n,i.$vnode=n,i._vnode&&(i._vnode.parent=n),i.$options._renderChildren=s;var u=n.data.attrs||en;i._attrsProxy&&Ha(i._attrsProxy,u,c.data&&c.data.attrs||en,i,"$attrs")&&(l=!0),i.$attrs=u,t=t||en;var h=i.$options._parentListeners;if(i._listenersProxy&&Ha(i._listenersProxy,t,h||en,i,"$listeners"),i.$listeners=i.$options._parentListeners=t,fg(i,t,h),e&&i.$options.props){Ti(!1);for(var f=i._props,d=i.$options._propKeys||[],g=0;g<d.length;g++){var m=d[g],p=i.$options.props;f[m]=nh(m,p,e,i)}Ti(!0),i.$options.propsData=e}l&&(i.$slots=Xu(s,n.context),i.$forceUpdate())}function pg(i){for(;i&&(i=i.$parent);)if(i._inactive)return!0;return!1}function Zu(i,e){if(e){if(i._directInactive=!1,pg(i))return}else if(i._directInactive)return;if(i._inactive||i._inactive===null){i._inactive=!1;for(var t=0;t<i.$children.length;t++)Zu(i.$children[t]);wn(i,"activated")}}function mg(i,e){if(!(e&&(i._directInactive=!0,pg(i)))&&!i._inactive){i._inactive=!0;for(var t=0;t<i.$children.length;t++)mg(i.$children[t]);wn(i,"deactivated")}}function wn(i,e,t,n){n===void 0&&(n=!0),xr();var s=Qr;n&&Mi(i);var r=i.$options[e],o="".concat(e," hook");if(r)for(var a=0,l=r.length;a<l;a++)Ei(r[a],i,t||null,i,o);i._hasHookEvent&&i.$emit("hook:"+e),n&&Mi(s),br()}var qn=[],Ju=[],Wa={},qc=!1,Qu=!1,$s=0;function vy(){$s=qn.length=Ju.length=0,Wa={},qc=Qu=!1}var gg=0,Xc=Date.now;if(rn&&!vr){var Dl=window.performance;Dl&&typeof Dl.now=="function"&&Xc()>document.createEvent("Event").timeStamp&&(Xc=function(){return Dl.now()})}var yy=function(i,e){if(i.post){if(!e.post)return 1}else if(e.post)return-1;return i.id-e.id};function xy(){gg=Xc(),Qu=!0;var i,e;for(qn.sort(yy),$s=0;$s<qn.length;$s++)i=qn[$s],i.before&&i.before(),e=i.id,Wa[e]=null,i.run();var t=Ju.slice(),n=qn.slice();vy(),My(t),by(n),za&&fn.devtools&&za.emit("flush")}function by(i){for(var e=i.length;e--;){var t=i[e],n=t.vm;n&&n._watcher===t&&n._isMounted&&!n._isDestroyed&&wn(n,"updated")}}function Sy(i){i._inactive=!1,Ju.push(i)}function My(i){for(var e=0;e<i.length;e++)i[e]._inactive=!0,Zu(i[e],!0)}function wy(i){var e=i.id;if(Wa[e]==null&&!(i===wi.target&&i.noRecurse)){if(Wa[e]=!0,!Qu)qn.push(i);else{for(var t=qn.length-1;t>$s&&qn[t].id>i.id;)t--;qn.splice(t+1,0,i)}qc||(qc=!0,Yu(xy))}}function Ty(i){var e=i.$options.provide;if(e){var t=pt(e)?e.call(i):e;if(!Lt(t))return;for(var n=P0(i),s=ko?Reflect.ownKeys(t):Object.keys(t),r=0;r<s.length;r++){var o=s[r];Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(t,o))}}}function Ey(i){var e=_g(i.$options.inject,i);e&&(Ti(!1),Object.keys(e).forEach(function(t){is(i,t,e[t])}),Ti(!0))}function _g(i,e){if(i){for(var t=Object.create(null),n=ko?Reflect.ownKeys(i):Object.keys(i),s=0;s<n.length;s++){var r=n[s];if(r!=="__ob__"){var o=i[r].from;if(o in e._provided)t[r]=e._provided[o];else if("default"in i[r]){var a=i[r].default;t[r]=pt(a)?a.call(e):a}}}return t}}function eh(i,e,t,n,s){var r=this,o=s.options,a;Bt(n,"_uid")?(a=Object.create(n),a._original=n):(a=n,n=n._original);var l=ut(o._compiled),c=!l;this.data=i,this.props=e,this.children=t,this.parent=n,this.listeners=i.on||en,this.injections=_g(o.inject,n),this.slots=function(){return r.$slots||eo(n,i.scopedSlots,r.$slots=Xu(t,n)),r.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return eo(n,i.scopedSlots,this.slots())}}),l&&(this.$options=o,this.$slots=this.slots(),this.$scopedSlots=eo(n,i.scopedSlots,this.$slots)),o._scopeId?this._c=function(u,h,f,d){var g=Ga(a,u,h,f,d,c);return g&&!Ue(g)&&(g.fnScopeId=o._scopeId,g.fnContext=n),g}:this._c=function(u,h,f,d){return Ga(a,u,h,f,d,c)}}ag(eh.prototype);function Cy(i,e,t,n,s){var r=i.options,o={},a=r.props;if(V(a))for(var l in a)o[l]=nh(l,a,e||en);else V(t.attrs)&&Cf(o,t.attrs),V(t.props)&&Cf(o,t.props);var c=new eh(t,o,s,n,i),u=r.render.call(null,c._c,c);if(u instanceof sn)return Ef(u,t,c.parent,r);if(Ue(u)){for(var h=qu(u)||[],f=new Array(h.length),d=0;d<h.length;d++)f[d]=Ef(h[d],t,c.parent,r);return f}}function Ef(i,e,t,n,s){var r=Bc(i);return r.fnContext=t,r.fnOptions=n,e.slot&&((r.data||(r.data={})).slot=e.slot),r}function Cf(i,e){for(var t in e)i[ts(t)]=e[t]}function $a(i){return i.name||i.__name||i._componentTag}var th={init:function(i,e){if(i.componentInstance&&!i.componentInstance._isDestroyed&&i.data.keepAlive){var t=i;th.prepatch(t,t)}else{var n=i.componentInstance=Ay(i,Xi);n.$mount(e?i.elm:void 0,e)}},prepatch:function(i,e){var t=e.componentOptions,n=e.componentInstance=i.componentInstance;_y(n,t.propsData,t.listeners,e,t.children)},insert:function(i){var e=i.context,t=i.componentInstance;t._isMounted||(t._isMounted=!0,wn(t,"mounted")),i.data.keepAlive&&(e._isMounted?Sy(t):Zu(t,!0))},destroy:function(i){var e=i.componentInstance;e._isDestroyed||(i.data.keepAlive?mg(e,!0):e.$destroy())}},Af=Object.keys(th);function Rf(i,e,t,n,s){if(!Ie(i)){var r=t.$options._base;if(Lt(i)&&(i=r.extend(i)),typeof i=="function"){var o;if(Ie(i.cid)&&(o=i,i=ty(o,r),i===void 0))return ey(o,e,t,n,s);e=e||{},sh(i),V(e.model)&&Ly(i.options,e);var a=D0(e,i);if(ut(i.options.functional))return Cy(i,a,e,t,n);var l=e.on;if(e.on=e.nativeOn,ut(i.options.abstract)){var c=e.slot;e={},c&&(e.slot=c)}Ry(e);var u=$a(i.options)||s,h=new sn("vue-component-".concat(i.cid).concat(u?"-".concat(u):""),e,void 0,void 0,void 0,t,{Ctor:i,propsData:a,listeners:l,tag:s,children:n},o);return h}}}function Ay(i,e){var t={_isComponent:!0,_parentVnode:i,parent:e},n=i.data.inlineTemplate;return V(n)&&(t.render=n.render,t.staticRenderFns=n.staticRenderFns),new i.componentOptions.Ctor(t)}function Ry(i){for(var e=i.hook||(i.hook={}),t=0;t<Af.length;t++){var n=Af[t],s=e[n],r=th[n];s!==r&&!(s&&s._merged)&&(e[n]=s?Iy(r,s):r)}}function Iy(i,e){var t=function(n,s){i(n,s),e(n,s)};return t._merged=!0,t}function Ly(i,e){var t=i.model&&i.model.prop||"value",n=i.model&&i.model.event||"input";(e.attrs||(e.attrs={}))[t]=e.model.value;var s=e.on||(e.on={}),r=s[n],o=e.model.callback;V(r)?(Ue(r)?r.indexOf(o)===-1:r!==o)&&(s[n]=[o].concat(r)):s[n]=o}var Py=At,In=fn.optionMergeStrategies;function Yc(i,e){if(!e)return i;for(var t,n,s,r=ko?Reflect.ownKeys(e):Object.keys(e),o=0;o<r.length;o++)t=r[o],t!=="__ob__"&&(n=i[t],s=e[t],Bt(i,t)?n!==s&&nn(n)&&nn(s)&&Yc(n,s):$u(i,t,s));return i}function Kc(i,e,t){return t?function(){var s=pt(e)?e.call(t,t):e,r=pt(i)?i.call(t,t):i;return s?Yc(s,r):r}:e?i?function(){return Yc(pt(e)?e.call(this,this):e,pt(i)?i.call(this,this):i)}:e:i}In.data=function(i,e,t){return t?Kc(i,e,t):e&&typeof e!="function"?i:Kc(i,e)};function Dy(i,e){var t=e?i?i.concat(e):Ue(e)?e:[e]:i;return t&&Ny(t)}function Ny(i){for(var e=[],t=0;t<i.length;t++)e.indexOf(i[t])===-1&&e.push(i[t]);return e}Ym.forEach(function(i){In[i]=Dy});function Oy(i,e,t,n){var s=Object.create(i||null);return e?ot(s,e):s}pl.forEach(function(i){In[i+"s"]=Oy});In.watch=function(i,e,t,n){if(i===zc&&(i=void 0),e===zc&&(e=void 0),!e)return Object.create(i||null);if(!i)return e;var s={};ot(s,i);for(var r in e){var o=s[r],a=e[r];o&&!Ue(o)&&(o=[o]),s[r]=o?o.concat(a):Ue(a)?a:[a]}return s};In.props=In.methods=In.inject=In.computed=function(i,e,t,n){if(!i)return e;var s=Object.create(null);return ot(s,i),e&&ot(s,e),s};In.provide=Kc;var Fy=function(i,e){return e===void 0?i:e};function ky(i,e){var t=i.props;if(!!t){var n={},s,r,o;if(Ue(t))for(s=t.length;s--;)r=t[s],typeof r=="string"&&(o=ts(r),n[o]={type:null});else if(nn(t))for(var a in t)r=t[a],o=ts(a),n[o]=nn(r)?r:{type:r};i.props=n}}function Uy(i,e){var t=i.inject;if(!!t){var n=i.inject={};if(Ue(t))for(var s=0;s<t.length;s++)n[t[s]]={from:t[s]};else if(nn(t))for(var r in t){var o=t[r];n[r]=nn(o)?ot({from:r},o):{from:o}}}}function zy(i){var e=i.directives;if(e)for(var t in e){var n=e[t];pt(n)&&(e[t]={bind:n,update:n})}}function rs(i,e,t){if(pt(e)&&(e=e.options),ky(e),Uy(e),zy(e),!e._base&&(e.extends&&(i=rs(i,e.extends,t)),e.mixins))for(var n=0,s=e.mixins.length;n<s;n++)i=rs(i,e.mixins[n],t);var r={},o;for(o in i)a(o);for(o in e)Bt(i,o)||a(o);function a(l){var c=In[l]||Fy;r[l]=c(i[l],e[l],t,l)}return r}function ja(i,e,t,n){if(typeof t=="string"){var s=i[e];if(Bt(s,t))return s[t];var r=ts(t);if(Bt(s,r))return s[r];var o=g0(r);if(Bt(s,o))return s[o];var a=s[t]||s[r]||s[o];return a}}function nh(i,e,t,n){var s=e[i],r=!Bt(t,i),o=t[i],a=Lf(Boolean,s.type);if(a>-1){if(r&&!Bt(s,"default"))o=!1;else if(o===""||o===Oo(i)){var l=Lf(String,s.type);(l<0||a<l)&&(o=!0)}}if(o===void 0){o=By(n,s,i);var c=Wu;Ti(!0),Jn(o),Ti(c)}return o}function By(i,e,t){if(!!Bt(e,"default")){var n=e.default;return i&&i.$options.propsData&&i.$options.propsData[t]===void 0&&i._props[t]!==void 0?i._props[t]:pt(n)&&Zc(e.type)!=="Function"?n.call(i):n}}var Hy=/^\s*function (\w+)/;function Zc(i){var e=i&&i.toString().match(Hy);return e?e[1]:""}function If(i,e){return Zc(i)===Zc(e)}function Lf(i,e){if(!Ue(e))return If(e,i)?0:-1;for(var t=0,n=e.length;t<n;t++)if(If(e[t],i))return t;return-1}var mi={enumerable:!0,configurable:!0,get:At,set:At};function ih(i,e,t){mi.get=function(){return this[e][t]},mi.set=function(s){this[e][t]=s},Object.defineProperty(i,t,mi)}function Gy(i){var e=i.$options;if(e.props&&Vy(i,e.props),X0(i),e.methods&&Xy(i,e.methods),e.data)Wy(i);else{var t=Jn(i._data={});t&&t.vmCount++}e.computed&&qy(i,e.computed),e.watch&&e.watch!==zc&&Yy(i,e.watch)}function Vy(i,e){var t=i.$options.propsData||{},n=i._props=ng({}),s=i.$options._propKeys=[],r=!i.$parent;r||Ti(!1);var o=function(l){s.push(l);var c=nh(l,e,t,i);is(n,l,c),l in i||ih(i,"_props",l)};for(var a in e)o(a);Ti(!0)}function Wy(i){var e=i.$options.data;e=i._data=pt(e)?$y(e,i):e||{},nn(e)||(e={});var t=Object.keys(e),n=i.$options.props;i.$options.methods;for(var s=t.length;s--;){var r=t[s];n&&Bt(n,r)||Km(r)||ih(i,"_data",r)}var o=Jn(e);o&&o.vmCount++}function $y(i,e){xr();try{return i.call(e,e)}catch(t){return ss(t,e,"data()"),{}}finally{br()}}var jy={lazy:!0};function qy(i,e){var t=i._computedWatchers=Object.create(null),n=Fo();for(var s in e){var r=e[s],o=pt(r)?r:r.get;n||(t[s]=new Ku(i,o||At,At,jy)),s in i||vg(i,s,r)}}function vg(i,e,t){var n=!Fo();pt(t)?(mi.get=n?Pf(e):Df(t),mi.set=At):(mi.get=t.get?n&&t.cache!==!1?Pf(e):Df(t.get):At,mi.set=t.set||At),Object.defineProperty(i,e,mi)}function Pf(i){return function(){var t=this._computedWatchers&&this._computedWatchers[i];if(t)return t.dirty&&t.evaluate(),wi.target&&t.depend(),t.value}}function Df(i){return function(){return i.call(this,this)}}function Xy(i,e){i.$options.props;for(var t in e)i[t]=typeof e[t]!="function"?At:$m(e[t],i)}function Yy(i,e){for(var t in e){var n=e[t];if(Ue(n))for(var s=0;s<n.length;s++)Jc(i,t,n[s]);else Jc(i,t,n)}}function Jc(i,e,t,n){return nn(t)&&(n=t,t=t.handler),typeof t=="string"&&(t=i[t]),i.$watch(e,t,n)}function Ky(i){var e={};e.get=function(){return this._data};var t={};t.get=function(){return this._props},Object.defineProperty(i.prototype,"$data",e),Object.defineProperty(i.prototype,"$props",t),i.prototype.$set=$u,i.prototype.$delete=eg,i.prototype.$watch=function(n,s,r){var o=this;if(nn(s))return Jc(o,n,s,r);r=r||{},r.user=!0;var a=new Ku(o,n,s,r);if(r.immediate){var l='callback for immediate watcher "'.concat(a.expression,'"');xr(),Ei(s,o,[a.value],o,l),br()}return function(){a.teardown()}}}var Zy=0;function Jy(i){i.prototype._init=function(e){var t=this;t._uid=Zy++,t._isVue=!0,t.__v_skip=!0,t._scope=new I0(!0),t._scope._vm=!0,e&&e._isComponent?Qy(t,e):t.$options=rs(sh(t.constructor),e||{},t),t._renderProxy=t,t._self=t,py(t),cy(t),J0(t),wn(t,"beforeCreate",void 0,!1),Ey(t),Gy(t),Ty(t),wn(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}function Qy(i,e){var t=i.$options=Object.create(i.constructor.options),n=e._parentVnode;t.parent=e.parent,t._parentVnode=n;var s=n.componentOptions;t.propsData=s.propsData,t._parentListeners=s.listeners,t._renderChildren=s.children,t._componentTag=s.tag,e.render&&(t.render=e.render,t.staticRenderFns=e.staticRenderFns)}function sh(i){var e=i.options;if(i.super){var t=sh(i.super),n=i.superOptions;if(t!==n){i.superOptions=t;var s=ex(i);s&&ot(i.extendOptions,s),e=i.options=rs(t,i.extendOptions),e.name&&(e.components[e.name]=i)}}return e}function ex(i){var e,t=i.options,n=i.sealedOptions;for(var s in t)t[s]!==n[s]&&(e||(e={}),e[s]=t[s]);return e}function _t(i){this._init(i)}Jy(_t);Ky(_t);dy(_t);my(_t);Q0(_t);function tx(i){i.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=Uc(arguments,1);return n.unshift(this),pt(e.install)?e.install.apply(e,n):pt(e)&&e.apply(null,n),t.push(e),this}}function nx(i){i.mixin=function(e){return this.options=rs(this.options,e),this}}function ix(i){i.cid=0;var e=1;i.extend=function(t){t=t||{};var n=this,s=n.cid,r=t._Ctor||(t._Ctor={});if(r[s])return r[s];var o=$a(t)||$a(n.options),a=function(c){this._init(c)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=rs(n.options,t),a.super=n,a.options.props&&sx(a),a.options.computed&&rx(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,pl.forEach(function(l){a[l]=n[l]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=ot({},a.options),r[s]=a,a}}function sx(i){var e=i.options.props;for(var t in e)ih(i.prototype,"_props",t)}function rx(i){var e=i.options.computed;for(var t in e)vg(i.prototype,t,e[t])}function ox(i){pl.forEach(function(e){i[e]=function(t,n){return n?(e==="component"&&nn(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),e==="directive"&&pt(n)&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function Nf(i){return i&&($a(i.Ctor.options)||i.tag)}function Jo(i,e){return Ue(i)?i.indexOf(e)>-1:typeof i=="string"?i.split(",").indexOf(e)>-1:h0(i)?i.test(e):!1}function Of(i,e){var t=i.cache,n=i.keys,s=i._vnode;for(var r in t){var o=t[r];if(o){var a=o.name;a&&!e(a)&&Qc(t,r,n,s)}}}function Qc(i,e,t,n){var s=i[e];s&&(!n||s.tag!==n.tag)&&s.componentInstance.$destroy(),i[e]=null,ei(t,e)}var Ff=[String,RegExp,Array],ax={name:"keep-alive",abstract:!0,props:{include:Ff,exclude:Ff,max:[String,Number]},methods:{cacheVNode:function(){var i=this,e=i.cache,t=i.keys,n=i.vnodeToCache,s=i.keyToCache;if(n){var r=n.tag,o=n.componentInstance,a=n.componentOptions;e[s]={name:Nf(a),tag:r,componentInstance:o},t.push(s),this.max&&t.length>parseInt(this.max)&&Qc(e,t[0],t,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var i in this.cache)Qc(this.cache,i,this.keys)},mounted:function(){var i=this;this.cacheVNode(),this.$watch("include",function(e){Of(i,function(t){return Jo(e,t)})}),this.$watch("exclude",function(e){Of(i,function(t){return!Jo(e,t)})})},updated:function(){this.cacheVNode()},render:function(){var i=this.$slots.default,e=cg(i),t=e&&e.componentOptions;if(t){var n=Nf(t),s=this,r=s.include,o=s.exclude;if(r&&(!n||!Jo(r,n))||o&&n&&Jo(o,n))return e;var a=this,l=a.cache,c=a.keys,u=e.key==null?t.Ctor.cid+(t.tag?"::".concat(t.tag):""):e.key;l[u]?(e.componentInstance=l[u].componentInstance,ei(c,u),c.push(u)):(this.vnodeToCache=e,this.keyToCache=u),e.data.keepAlive=!0}return e||i&&i[0]}},lx={KeepAlive:ax};function cx(i){var e={};e.get=function(){return fn},Object.defineProperty(i,"config",e),i.util={warn:Py,extend:ot,mergeOptions:rs,defineReactive:is},i.set=$u,i.delete=eg,i.nextTick=Yu,i.observable=function(t){return Jn(t),t},i.options=Object.create(null),pl.forEach(function(t){i.options[t+"s"]=Object.create(null)}),i.options._base=i,ot(i.options.components,lx),tx(i),nx(i),ix(i),ox(i)}cx(_t);Object.defineProperty(_t.prototype,"$isServer",{get:Fo});Object.defineProperty(_t.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}});Object.defineProperty(_t,"FunctionalRenderContext",{value:eh});_t.version=ay;var ux=Cn("style,class"),hx=Cn("input,textarea,option,select,progress"),fx=function(i,e,t){return t==="value"&&hx(i)&&e!=="button"||t==="selected"&&i==="option"||t==="checked"&&i==="input"||t==="muted"&&i==="video"},yg=Cn("contenteditable,draggable,spellcheck"),dx=Cn("events,caret,typing,plaintext-only"),px=function(i,e){return qa(e)||e==="false"?"false":i==="contenteditable"&&dx(e)?e:"true"},mx=Cn("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),eu="http://www.w3.org/1999/xlink",rh=function(i){return i.charAt(5)===":"&&i.slice(0,5)==="xlink"},xg=function(i){return rh(i)?i.slice(6,i.length):""},qa=function(i){return i==null||i===!1};function gx(i){for(var e=i.data,t=i,n=i;V(n.componentInstance);)n=n.componentInstance._vnode,n&&n.data&&(e=kf(n.data,e));for(;V(t=t.parent);)t&&t.data&&(e=kf(e,t.data));return _x(e.staticClass,e.class)}function kf(i,e){return{staticClass:oh(i.staticClass,e.staticClass),class:V(i.class)?[i.class,e.class]:e.class}}function _x(i,e){return V(i)||V(e)?oh(i,ah(e)):""}function oh(i,e){return i?e?i+" "+e:i:e||""}function ah(i){return Array.isArray(i)?vx(i):Lt(i)?yx(i):typeof i=="string"?i:""}function vx(i){for(var e="",t,n=0,s=i.length;n<s;n++)V(t=ah(i[n]))&&t!==""&&(e&&(e+=" "),e+=t);return e}function yx(i){var e="";for(var t in i)i[t]&&(e&&(e+=" "),e+=t);return e}var xx={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},bx=Cn("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),lh=Cn("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),bg=function(i){return bx(i)||lh(i)};function Sx(i){if(lh(i))return"svg";if(i==="math")return"math"}var Qo=Object.create(null);function Mx(i){if(!rn)return!0;if(bg(i))return!1;if(i=i.toLowerCase(),Qo[i]!=null)return Qo[i];var e=document.createElement(i);return i.indexOf("-")>-1?Qo[i]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:Qo[i]=/HTMLUnknownElement/.test(e.toString())}var tu=Cn("text,number,password,search,email,tel,url");function wx(i){if(typeof i=="string"){var e=document.querySelector(i);return e||document.createElement("div")}else return i}function Tx(i,e){var t=document.createElement(i);return i!=="select"||e.data&&e.data.attrs&&e.data.attrs.multiple!==void 0&&t.setAttribute("multiple","multiple"),t}function Ex(i,e){return document.createElementNS(xx[i],e)}function Cx(i){return document.createTextNode(i)}function Ax(i){return document.createComment(i)}function Rx(i,e,t){i.insertBefore(e,t)}function Ix(i,e){i.removeChild(e)}function Lx(i,e){i.appendChild(e)}function Px(i){return i.parentNode}function Dx(i){return i.nextSibling}function Nx(i){return i.tagName}function Ox(i,e){i.textContent=e}function Fx(i,e){i.setAttribute(e,"")}var kx=Object.freeze({__proto__:null,createElement:Tx,createElementNS:Ex,createTextNode:Cx,createComment:Ax,insertBefore:Rx,removeChild:Ix,appendChild:Lx,parentNode:Px,nextSibling:Dx,tagName:Nx,setTextContent:Ox,setStyleScope:Fx}),Ux={create:function(i,e){js(e)},update:function(i,e){i.data.ref!==e.data.ref&&(js(i,!0),js(e))},destroy:function(i){js(i,!0)}};function js(i,e){var t=i.data.ref;if(!!V(t)){var n=i.context,s=i.componentInstance||i.elm,r=e?null:s,o=e?void 0:s;if(pt(t)){Ei(t,n,[r],n,"template ref function");return}var a=i.data.refInFor,l=typeof t=="string"||typeof t=="number",c=Pn(t),u=n.$refs;if(l||c){if(a){var h=l?u[t]:t.value;e?Ue(h)&&ei(h,s):Ue(h)?h.includes(s)||h.push(s):l?(u[t]=[s],Uf(n,t,u[t])):t.value=[s]}else if(l){if(e&&u[t]!==s)return;u[t]=o,Uf(n,t,r)}else if(c){if(e&&t.value!==s)return;t.value=r}}}}function Uf(i,e,t){var n=i._setupState;n&&Bt(n,e)&&(Pn(n[e])?n[e].value=t:n[e]=t)}var _i=new sn("",{},[]),Nr=["create","activate","update","remove","destroy"];function Ni(i,e){return i.key===e.key&&i.asyncFactory===e.asyncFactory&&(i.tag===e.tag&&i.isComment===e.isComment&&V(i.data)===V(e.data)&&zx(i,e)||ut(i.isAsyncPlaceholder)&&Ie(e.asyncFactory.error))}function zx(i,e){if(i.tag!=="input")return!0;var t,n=V(t=i.data)&&V(t=t.attrs)&&t.type,s=V(t=e.data)&&V(t=t.attrs)&&t.type;return n===s||tu(n)&&tu(s)}function Bx(i,e,t){var n,s,r={};for(n=e;n<=t;++n)s=i[n].key,V(s)&&(r[s]=n);return r}function Hx(i){var e,t,n={},s=i.modules,r=i.nodeOps;for(e=0;e<Nr.length;++e)for(n[Nr[e]]=[],t=0;t<s.length;++t)V(s[t][Nr[e]])&&n[Nr[e]].push(s[t][Nr[e]]);function o(L){return new sn(r.tagName(L).toLowerCase(),{},[],void 0,L)}function a(L,M){function C(){--C.listeners===0&&l(L)}return C.listeners=M,C}function l(L){var M=r.parentNode(L);V(M)&&r.removeChild(M,L)}function c(L,M,C,O,B,$,z){if(V(L.elm)&&V($)&&(L=$[z]=Bc(L)),L.isRootInsert=!B,!u(L,M,C,O)){var D=L.data,k=L.children,Z=L.tag;V(Z)?(L.elm=L.ns?r.createElementNS(L.ns,Z):r.createElement(Z,L),_(L),g(L,k,M),V(D)&&p(L,M),d(C,L.elm,O)):ut(L.isComment)?(L.elm=r.createComment(L.text),d(C,L.elm,O)):(L.elm=r.createTextNode(L.text),d(C,L.elm,O))}}function u(L,M,C,O){var B=L.data;if(V(B)){var $=V(L.componentInstance)&&B.keepAlive;if(V(B=B.hook)&&V(B=B.init)&&B(L,!1),V(L.componentInstance))return h(L,M),d(C,L.elm,O),ut($)&&f(L,M,C,O),!0}}function h(L,M){V(L.data.pendingInsert)&&(M.push.apply(M,L.data.pendingInsert),L.data.pendingInsert=null),L.elm=L.componentInstance.$el,m(L)?(p(L,M),_(L)):(js(L),M.push(L))}function f(L,M,C,O){for(var B,$=L;$.componentInstance;)if($=$.componentInstance._vnode,V(B=$.data)&&V(B=B.transition)){for(B=0;B<n.activate.length;++B)n.activate[B](_i,$);M.push($);break}d(C,L.elm,O)}function d(L,M,C){V(L)&&(V(C)?r.parentNode(C)===L&&r.insertBefore(L,M,C):r.appendChild(L,M))}function g(L,M,C){if(Ue(M))for(var O=0;O<M.length;++O)c(M[O],C,L.elm,null,!0,M,O);else No(L.text)&&r.appendChild(L.elm,r.createTextNode(String(L.text)))}function m(L){for(;L.componentInstance;)L=L.componentInstance._vnode;return V(L.tag)}function p(L,M){for(var C=0;C<n.create.length;++C)n.create[C](_i,L);e=L.data.hook,V(e)&&(V(e.create)&&e.create(_i,L),V(e.insert)&&M.push(L))}function _(L){var M;if(V(M=L.fnScopeId))r.setStyleScope(L.elm,M);else for(var C=L;C;)V(M=C.context)&&V(M=M.$options._scopeId)&&r.setStyleScope(L.elm,M),C=C.parent;V(M=Xi)&&M!==L.context&&M!==L.fnContext&&V(M=M.$options._scopeId)&&r.setStyleScope(L.elm,M)}function x(L,M,C,O,B,$){for(;O<=B;++O)c(C[O],$,L,M,!1,C,O)}function w(L){var M,C,O=L.data;if(V(O))for(V(M=O.hook)&&V(M=M.destroy)&&M(L),M=0;M<n.destroy.length;++M)n.destroy[M](L);if(V(M=L.children))for(C=0;C<L.children.length;++C)w(L.children[C])}function y(L,M,C){for(;M<=C;++M){var O=L[M];V(O)&&(V(O.tag)?(S(O),w(O)):l(O.elm))}}function S(L,M){if(V(M)||V(L.data)){var C,O=n.remove.length+1;for(V(M)?M.listeners+=O:M=a(L.elm,O),V(C=L.componentInstance)&&V(C=C._vnode)&&V(C.data)&&S(C,M),C=0;C<n.remove.length;++C)n.remove[C](L,M);V(C=L.data.hook)&&V(C=C.remove)?C(L,M):M()}else l(L.elm)}function I(L,M,C,O,B){for(var $=0,z=0,D=M.length-1,k=M[0],Z=M[D],j=C.length-1,ne=C[0],he=C[j],xe,X,Te,be,Me=!B;$<=D&&z<=j;)Ie(k)?k=M[++$]:Ie(Z)?Z=M[--D]:Ni(k,ne)?(v(k,ne,O,C,z),k=M[++$],ne=C[++z]):Ni(Z,he)?(v(Z,he,O,C,j),Z=M[--D],he=C[--j]):Ni(k,he)?(v(k,he,O,C,j),Me&&r.insertBefore(L,k.elm,r.nextSibling(Z.elm)),k=M[++$],he=C[--j]):Ni(Z,ne)?(v(Z,ne,O,C,z),Me&&r.insertBefore(L,Z.elm,k.elm),Z=M[--D],ne=C[++z]):(Ie(xe)&&(xe=Bx(M,$,D)),X=V(ne.key)?xe[ne.key]:N(ne,M,$,D),Ie(X)?c(ne,O,L,k.elm,!1,C,z):(Te=M[X],Ni(Te,ne)?(v(Te,ne,O,C,z),M[X]=void 0,Me&&r.insertBefore(L,Te.elm,k.elm)):c(ne,O,L,k.elm,!1,C,z)),ne=C[++z]);$>D?(be=Ie(C[j+1])?null:C[j+1].elm,x(L,be,C,z,j,O)):z>j&&y(M,$,D)}function N(L,M,C,O){for(var B=C;B<O;B++){var $=M[B];if(V($)&&Ni(L,$))return B}}function v(L,M,C,O,B,$){if(L!==M){V(M.elm)&&V(O)&&(M=O[B]=Bc(M));var z=M.elm=L.elm;if(ut(L.isAsyncPlaceholder)){V(M.asyncFactory.resolved)?W(L.elm,M,C):M.isAsyncPlaceholder=!0;return}if(ut(M.isStatic)&&ut(L.isStatic)&&M.key===L.key&&(ut(M.isCloned)||ut(M.isOnce))){M.componentInstance=L.componentInstance;return}var D,k=M.data;V(k)&&V(D=k.hook)&&V(D=D.prepatch)&&D(L,M);var Z=L.children,j=M.children;if(V(k)&&m(M)){for(D=0;D<n.update.length;++D)n.update[D](L,M);V(D=k.hook)&&V(D=D.update)&&D(L,M)}Ie(M.text)?V(Z)&&V(j)?Z!==j&&I(z,Z,j,C,$):V(j)?(V(L.text)&&r.setTextContent(z,""),x(z,null,j,0,j.length-1,C)):V(Z)?y(Z,0,Z.length-1):V(L.text)&&r.setTextContent(z,""):L.text!==M.text&&r.setTextContent(z,M.text),V(k)&&V(D=k.hook)&&V(D=D.postpatch)&&D(L,M)}}function R(L,M,C){if(ut(C)&&V(L.parent))L.parent.data.pendingInsert=M;else for(var O=0;O<M.length;++O)M[O].data.hook.insert(M[O])}var U=Cn("attrs,class,staticClass,staticStyle,key");function W(L,M,C,O){var B,$=M.tag,z=M.data,D=M.children;if(O=O||z&&z.pre,M.elm=L,ut(M.isComment)&&V(M.asyncFactory))return M.isAsyncPlaceholder=!0,!0;if(V(z)&&(V(B=z.hook)&&V(B=B.init)&&B(M,!0),V(B=M.componentInstance)))return h(M,C),!0;if(V($)){if(V(D))if(!L.hasChildNodes())g(M,D,C);else if(V(B=z)&&V(B=B.domProps)&&V(B=B.innerHTML)){if(B!==L.innerHTML)return!1}else{for(var k=!0,Z=L.firstChild,j=0;j<D.length;j++){if(!Z||!W(Z,D[j],C,O)){k=!1;break}Z=Z.nextSibling}if(!k||Z)return!1}if(V(z)){var ne=!1;for(var he in z)if(!U(he)){ne=!0,p(M,C);break}!ne&&z.class&&Va(z.class)}}else L.data!==M.text&&(L.data=M.text);return!0}return function(M,C,O,B){if(Ie(C)){V(M)&&w(M);return}var $=!1,z=[];if(Ie(M))$=!0,c(C,z);else{var D=V(M.nodeType);if(!D&&Ni(M,C))v(M,C,z,null,null,B);else{if(D){if(M.nodeType===1&&M.hasAttribute(df)&&(M.removeAttribute(df),O=!0),ut(O)&&W(M,C,z))return R(C,z,!0),M;M=o(M)}var k=M.elm,Z=r.parentNode(k);if(c(C,z,k._leaveCb?null:Z,r.nextSibling(k)),V(C.parent))for(var j=C.parent,ne=m(C);j;){for(var he=0;he<n.destroy.length;++he)n.destroy[he](j);if(j.elm=C.elm,ne){for(var xe=0;xe<n.create.length;++xe)n.create[xe](_i,j);var X=j.data.hook.insert;if(X.merged)for(var Te=1;Te<X.fns.length;Te++)X.fns[Te]()}else js(j);j=j.parent}V(Z)?y([M],0,0):V(M.tag)&&w(M)}}return R(C,z,$),C.elm}}var Gx={create:Nl,update:Nl,destroy:function(e){Nl(e,_i)}};function Nl(i,e){(i.data.directives||e.data.directives)&&Vx(i,e)}function Vx(i,e){var t=i===_i,n=e===_i,s=zf(i.data.directives,i.context),r=zf(e.data.directives,e.context),o=[],a=[],l,c,u;for(l in r)c=s[l],u=r[l],c?(u.oldValue=c.value,u.oldArg=c.arg,Or(u,"update",e,i),u.def&&u.def.componentUpdated&&a.push(u)):(Or(u,"bind",e,i),u.def&&u.def.inserted&&o.push(u));if(o.length){var h=function(){for(var f=0;f<o.length;f++)Or(o[f],"inserted",e,i)};t?gi(e,"insert",h):h()}if(a.length&&gi(e,"postpatch",function(){for(var f=0;f<a.length;f++)Or(a[f],"componentUpdated",e,i)}),!t)for(l in s)r[l]||Or(s[l],"unbind",i,i,n)}var Wx=Object.create(null);function zf(i,e){var t=Object.create(null);if(!i)return t;var n,s;for(n=0;n<i.length;n++){if(s=i[n],s.modifiers||(s.modifiers=Wx),t[$x(s)]=s,e._setupState&&e._setupState.__sfc){var r=s.def||ja(e,"_setupState","v-"+s.name);typeof r=="function"?s.def={bind:r,update:r}:s.def=r}s.def=s.def||ja(e.$options,"directives",s.name)}return t}function $x(i){return i.rawName||"".concat(i.name,".").concat(Object.keys(i.modifiers||{}).join("."))}function Or(i,e,t,n,s){var r=i.def&&i.def[e];if(r)try{r(t.elm,i,t,n,s)}catch(o){ss(o,t.context,"directive ".concat(i.name," ").concat(e," hook"))}}var jx=[Ux,Gx];function Bf(i,e){var t=e.componentOptions;if(!(V(t)&&t.Ctor.options.inheritAttrs===!1)&&!(Ie(i.data.attrs)&&Ie(e.data.attrs))){var n,s,r,o=e.elm,a=i.data.attrs||{},l=e.data.attrs||{};(V(l.__ob__)||ut(l._v_attr_proxy))&&(l=e.data.attrs=ot({},l));for(n in l)s=l[n],r=a[n],r!==s&&Hf(o,n,s,e.data.pre);(vr||Vu)&&l.value!==a.value&&Hf(o,"value",l.value);for(n in a)Ie(l[n])&&(rh(n)?o.removeAttributeNS(eu,xg(n)):yg(n)||o.removeAttribute(n))}}function Hf(i,e,t,n){n||i.tagName.indexOf("-")>-1?Gf(i,e,t):mx(e)?qa(t)?i.removeAttribute(e):(t=e==="allowfullscreen"&&i.tagName==="EMBED"?"true":e,i.setAttribute(e,t)):yg(e)?i.setAttribute(e,px(e,t)):rh(e)?qa(t)?i.removeAttributeNS(eu,xg(e)):i.setAttributeNS(eu,e,t):Gf(i,e,t)}function Gf(i,e,t){if(qa(t))i.removeAttribute(e);else{if(vr&&!yr&&i.tagName==="TEXTAREA"&&e==="placeholder"&&t!==""&&!i.__ieph){var n=function(s){s.stopImmediatePropagation(),i.removeEventListener("input",n)};i.addEventListener("input",n),i.__ieph=!0}i.setAttribute(e,t)}}var qx={create:Bf,update:Bf};function Vf(i,e){var t=e.elm,n=e.data,s=i.data;if(!(Ie(n.staticClass)&&Ie(n.class)&&(Ie(s)||Ie(s.staticClass)&&Ie(s.class)))){var r=gx(e),o=t._transitionClasses;V(o)&&(r=oh(r,ah(o))),r!==t._prevClass&&(t.setAttribute("class",r),t._prevClass=r)}}var Xx={create:Vf,update:Vf},Ol="__r",Fl="__c";function Yx(i){if(V(i[Ol])){var e=vr?"change":"input";i[e]=[].concat(i[Ol],i[e]||[]),delete i[Ol]}V(i[Fl])&&(i.change=[].concat(i[Fl],i.change||[]),delete i[Fl])}var po;function Kx(i,e,t){var n=po;return function s(){var r=e.apply(null,arguments);r!==null&&Sg(i,s,t,n)}}var Zx=Wc&&!(pf&&Number(pf[1])<=53);function Jx(i,e,t,n){if(Zx){var s=gg,r=e;e=r._wrapper=function(o){if(o.target===o.currentTarget||o.timeStamp>=s||o.timeStamp<=0||o.target.ownerDocument!==document)return r.apply(this,arguments)}}po.addEventListener(i,e,Zm?{capture:t,passive:n}:t)}function Sg(i,e,t,n){(n||po).removeEventListener(i,e._wrapper||e,t)}function kl(i,e){if(!(Ie(i.data.on)&&Ie(e.data.on))){var t=e.data.on||{},n=i.data.on||{};po=e.elm||i.elm,Yx(t),ig(t,n,Jx,Sg,Kx,e.context),po=void 0}}var Qx={create:kl,update:kl,destroy:function(i){return kl(i,_i)}},ea;function Wf(i,e){if(!(Ie(i.data.domProps)&&Ie(e.data.domProps))){var t,n,s=e.elm,r=i.data.domProps||{},o=e.data.domProps||{};(V(o.__ob__)||ut(o._v_attr_proxy))&&(o=e.data.domProps=ot({},o));for(t in r)t in o||(s[t]="");for(t in o){if(n=o[t],t==="textContent"||t==="innerHTML"){if(e.children&&(e.children.length=0),n===r[t])continue;s.childNodes.length===1&&s.removeChild(s.childNodes[0])}if(t==="value"&&s.tagName!=="PROGRESS"){s._value=n;var a=Ie(n)?"":String(n);eb(s,a)&&(s.value=a)}else if(t==="innerHTML"&&lh(s.tagName)&&Ie(s.innerHTML)){ea=ea||document.createElement("div"),ea.innerHTML="<svg>".concat(n,"</svg>");for(var l=ea.firstChild;s.firstChild;)s.removeChild(s.firstChild);for(;l.firstChild;)s.appendChild(l.firstChild)}else if(n!==r[t])try{s[t]=n}catch{}}}}function eb(i,e){return!i.composing&&(i.tagName==="OPTION"||tb(i,e)||nb(i,e))}function tb(i,e){var t=!0;try{t=document.activeElement!==i}catch{}return t&&i.value!==e}function nb(i,e){var t=i.value,n=i._vModifiers;if(V(n)){if(n.number)return co(t)!==co(e);if(n.trim)return t.trim()!==e.trim()}return t!==e}var ib={create:Wf,update:Wf},sb=gs(function(i){var e={},t=/;(?![^(]*\))/g,n=/:(.+)/;return i.split(t).forEach(function(s){if(s){var r=s.split(n);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e});function Ul(i){var e=Mg(i.style);return i.staticStyle?ot(i.staticStyle,e):e}function Mg(i){return Array.isArray(i)?jm(i):typeof i=="string"?sb(i):i}function rb(i,e){var t={},n;if(e)for(var s=i;s.componentInstance;)s=s.componentInstance._vnode,s&&s.data&&(n=Ul(s.data))&&ot(t,n);(n=Ul(i.data))&&ot(t,n);for(var r=i;r=r.parent;)r.data&&(n=Ul(r.data))&&ot(t,n);return t}var ob=/^--/,$f=/\s*!important$/,jf=function(i,e,t){if(ob.test(e))i.style.setProperty(e,t);else if($f.test(t))i.style.setProperty(Oo(e),t.replace($f,""),"important");else{var n=ab(e);if(Array.isArray(t))for(var s=0,r=t.length;s<r;s++)i.style[n]=t[s];else i.style[n]=t}},qf=["Webkit","Moz","ms"],ta,ab=gs(function(i){if(ta=ta||document.createElement("div").style,i=ts(i),i!=="filter"&&i in ta)return i;for(var e=i.charAt(0).toUpperCase()+i.slice(1),t=0;t<qf.length;t++){var n=qf[t]+e;if(n in ta)return n}});function Xf(i,e){var t=e.data,n=i.data;if(!(Ie(t.staticStyle)&&Ie(t.style)&&Ie(n.staticStyle)&&Ie(n.style))){var s,r,o=e.elm,a=n.staticStyle,l=n.normalizedStyle||n.style||{},c=a||l,u=Mg(e.data.style)||{};e.data.normalizedStyle=V(u.__ob__)?ot({},u):u;var h=rb(e,!0);for(r in c)Ie(h[r])&&jf(o,r,"");for(r in h)s=h[r],s!==c[r]&&jf(o,r,s==null?"":s)}}var lb={create:Xf,update:Xf},wg=/\s+/;function Tg(i,e){if(!(!e||!(e=e.trim())))if(i.classList)e.indexOf(" ")>-1?e.split(wg).forEach(function(n){return i.classList.add(n)}):i.classList.add(e);else{var t=" ".concat(i.getAttribute("class")||""," ");t.indexOf(" "+e+" ")<0&&i.setAttribute("class",(t+e).trim())}}function Eg(i,e){if(!(!e||!(e=e.trim())))if(i.classList)e.indexOf(" ")>-1?e.split(wg).forEach(function(s){return i.classList.remove(s)}):i.classList.remove(e),i.classList.length||i.removeAttribute("class");else{for(var t=" ".concat(i.getAttribute("class")||""," "),n=" "+e+" ";t.indexOf(n)>=0;)t=t.replace(n," ");t=t.trim(),t?i.setAttribute("class",t):i.removeAttribute("class")}}function Cg(i){if(!!i){if(typeof i=="object"){var e={};return i.css!==!1&&ot(e,Yf(i.name||"v")),ot(e,i),e}else if(typeof i=="string")return Yf(i)}}var Yf=gs(function(i){return{enterClass:"".concat(i,"-enter"),enterToClass:"".concat(i,"-enter-to"),enterActiveClass:"".concat(i,"-enter-active"),leaveClass:"".concat(i,"-leave"),leaveToClass:"".concat(i,"-leave-to"),leaveActiveClass:"".concat(i,"-leave-active")}}),Ag=rn&&!yr,Gs="transition",zl="animation",Na="transition",Xa="transitionend",nu="animation",Rg="animationend";Ag&&(window.ontransitionend===void 0&&window.onwebkittransitionend!==void 0&&(Na="WebkitTransition",Xa="webkitTransitionEnd"),window.onanimationend===void 0&&window.onwebkitanimationend!==void 0&&(nu="WebkitAnimation",Rg="webkitAnimationEnd"));var Kf=rn?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(i){return i()};function Ig(i){Kf(function(){Kf(i)})}function Yi(i,e){var t=i._transitionClasses||(i._transitionClasses=[]);t.indexOf(e)<0&&(t.push(e),Tg(i,e))}function Xn(i,e){i._transitionClasses&&ei(i._transitionClasses,e),Eg(i,e)}function Lg(i,e,t){var n=Pg(i,e),s=n.type,r=n.timeout,o=n.propCount;if(!s)return t();var a=s===Gs?Xa:Rg,l=0,c=function(){i.removeEventListener(a,u),t()},u=function(h){h.target===i&&++l>=o&&c()};setTimeout(function(){l<o&&c()},r+1),i.addEventListener(a,u)}var cb=/\b(transform|all)(,|$)/;function Pg(i,e){var t=window.getComputedStyle(i),n=(t[Na+"Delay"]||"").split(", "),s=(t[Na+"Duration"]||"").split(", "),r=Zf(n,s),o=(t[nu+"Delay"]||"").split(", "),a=(t[nu+"Duration"]||"").split(", "),l=Zf(o,a),c,u=0,h=0;e===Gs?r>0&&(c=Gs,u=r,h=s.length):e===zl?l>0&&(c=zl,u=l,h=a.length):(u=Math.max(r,l),c=u>0?r>l?Gs:zl:null,h=c?c===Gs?s.length:a.length:0);var f=c===Gs&&cb.test(t[Na+"Property"]);return{type:c,timeout:u,propCount:h,hasTransform:f}}function Zf(i,e){for(;i.length<e.length;)i=i.concat(i);return Math.max.apply(null,e.map(function(t,n){return Jf(t)+Jf(i[n])}))}function Jf(i){return Number(i.slice(0,-1).replace(",","."))*1e3}function iu(i,e){var t=i.elm;V(t._leaveCb)&&(t._leaveCb.cancelled=!0,t._leaveCb());var n=Cg(i.data.transition);if(!Ie(n)&&!(V(t._enterCb)||t.nodeType!==1)){for(var s=n.css,r=n.type,o=n.enterClass,a=n.enterToClass,l=n.enterActiveClass,c=n.appearClass,u=n.appearToClass,h=n.appearActiveClass,f=n.beforeEnter,d=n.enter,g=n.afterEnter,m=n.enterCancelled,p=n.beforeAppear,_=n.appear,x=n.afterAppear,w=n.appearCancelled,y=n.duration,S=Xi,I=Xi.$vnode;I&&I.parent;)S=I.context,I=I.parent;var N=!S._isMounted||!i.isRootInsert;if(!(N&&!_&&_!=="")){var v=N&&c?c:o,R=N&&h?h:l,U=N&&u?u:a,W=N&&p||f,L=N&&pt(_)?_:d,M=N&&x||g,C=N&&w||m,O=co(Lt(y)?y.enter:y),B=s!==!1&&!yr,$=ch(L),z=t._enterCb=Ua(function(){B&&(Xn(t,U),Xn(t,R)),z.cancelled?(B&&Xn(t,v),C&&C(t)):M&&M(t),t._enterCb=null});i.data.show||gi(i,"insert",function(){var D=t.parentNode,k=D&&D._pending&&D._pending[i.key];k&&k.tag===i.tag&&k.elm._leaveCb&&k.elm._leaveCb(),L&&L(t,z)}),W&&W(t),B&&(Yi(t,v),Yi(t,R),Ig(function(){Xn(t,v),z.cancelled||(Yi(t,U),$||(Ng(O)?setTimeout(z,O):Lg(t,r,z)))})),i.data.show&&(e&&e(),L&&L(t,z)),!B&&!$&&z()}}}function Dg(i,e){var t=i.elm;V(t._enterCb)&&(t._enterCb.cancelled=!0,t._enterCb());var n=Cg(i.data.transition);if(Ie(n)||t.nodeType!==1)return e();if(V(t._leaveCb))return;var s=n.css,r=n.type,o=n.leaveClass,a=n.leaveToClass,l=n.leaveActiveClass,c=n.beforeLeave,u=n.leave,h=n.afterLeave,f=n.leaveCancelled,d=n.delayLeave,g=n.duration,m=s!==!1&&!yr,p=ch(u),_=co(Lt(g)?g.leave:g),x=t._leaveCb=Ua(function(){t.parentNode&&t.parentNode._pending&&(t.parentNode._pending[i.key]=null),m&&(Xn(t,a),Xn(t,l)),x.cancelled?(m&&Xn(t,o),f&&f(t)):(e(),h&&h(t)),t._leaveCb=null});d?d(w):w();function w(){x.cancelled||(!i.data.show&&t.parentNode&&((t.parentNode._pending||(t.parentNode._pending={}))[i.key]=i),c&&c(t),m&&(Yi(t,o),Yi(t,l),Ig(function(){Xn(t,o),x.cancelled||(Yi(t,a),p||(Ng(_)?setTimeout(x,_):Lg(t,r,x)))})),u&&u(t,x),!m&&!p&&x())}}function Ng(i){return typeof i=="number"&&!isNaN(i)}function ch(i){if(Ie(i))return!1;var e=i.fns;return V(e)?ch(Array.isArray(e)?e[0]:e):(i._length||i.length)>1}function Qf(i,e){e.data.show!==!0&&iu(e)}var ub=rn?{create:Qf,activate:Qf,remove:function(i,e){i.data.show!==!0?Dg(i,e):e()}}:{},hb=[qx,Xx,Qx,ib,lb,ub],fb=hb.concat(jx),db=Hx({nodeOps:kx,modules:fb});yr&&document.addEventListener("selectionchange",function(){var i=document.activeElement;i&&i.vmodel&&uh(i,"input")});var Og={inserted:function(i,e,t,n){t.tag==="select"?(n.elm&&!n.elm._vOptions?gi(t,"postpatch",function(){Og.componentUpdated(i,e,t)}):ed(i,e,t.context),i._vOptions=[].map.call(i.options,Ya)):(t.tag==="textarea"||tu(i.type))&&(i._vModifiers=e.modifiers,e.modifiers.lazy||(i.addEventListener("compositionstart",pb),i.addEventListener("compositionend",id),i.addEventListener("change",id),yr&&(i.vmodel=!0)))},componentUpdated:function(i,e,t){if(t.tag==="select"){ed(i,e,t.context);var n=i._vOptions,s=i._vOptions=[].map.call(i.options,Ya);if(s.some(function(o,a){return!ns(o,n[a])})){var r=i.multiple?e.value.some(function(o){return nd(o,s)}):e.value!==e.oldValue&&nd(e.value,s);r&&uh(i,"change")}}}};function ed(i,e,t){td(i,e),(vr||Vu)&&setTimeout(function(){td(i,e)},0)}function td(i,e,t){var n=e.value,s=i.multiple;if(!(s&&!Array.isArray(n))){for(var r,o,a=0,l=i.options.length;a<l;a++)if(o=i.options[a],s)r=Xm(n,Ya(o))>-1,o.selected!==r&&(o.selected=r);else if(ns(Ya(o),n)){i.selectedIndex!==a&&(i.selectedIndex=a);return}s||(i.selectedIndex=-1)}}function nd(i,e){return e.every(function(t){return!ns(t,i)})}function Ya(i){return"_value"in i?i._value:i.value}function pb(i){i.target.composing=!0}function id(i){!i.target.composing||(i.target.composing=!1,uh(i.target,"input"))}function uh(i,e){var t=document.createEvent("HTMLEvents");t.initEvent(e,!0,!0),i.dispatchEvent(t)}function su(i){return i.componentInstance&&(!i.data||!i.data.transition)?su(i.componentInstance._vnode):i}var mb={bind:function(i,e,t){var n=e.value;t=su(t);var s=t.data&&t.data.transition,r=i.__vOriginalDisplay=i.style.display==="none"?"":i.style.display;n&&s?(t.data.show=!0,iu(t,function(){i.style.display=r})):i.style.display=n?r:"none"},update:function(i,e,t){var n=e.value,s=e.oldValue;if(!n!=!s){t=su(t);var r=t.data&&t.data.transition;r?(t.data.show=!0,n?iu(t,function(){i.style.display=i.__vOriginalDisplay}):Dg(t,function(){i.style.display="none"})):i.style.display=n?i.__vOriginalDisplay:"none"}},unbind:function(i,e,t,n,s){s||(i.style.display=i.__vOriginalDisplay)}},gb={model:Og,show:mb},Fg={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function ru(i){var e=i&&i.componentOptions;return e&&e.Ctor.options.abstract?ru(cg(e.children)):i}function kg(i){var e={},t=i.$options;for(var n in t.propsData)e[n]=i[n];var s=t._parentListeners;for(var n in s)e[ts(n)]=s[n];return e}function sd(i,e){if(/\d-keep-alive$/.test(e.tag))return i("keep-alive",{props:e.componentOptions.propsData})}function _b(i){for(;i=i.parent;)if(i.data.transition)return!0}function vb(i,e){return e.key===i.key&&e.tag===i.tag}var yb=function(i){return i.tag||ho(i)},xb=function(i){return i.name==="show"},bb={name:"transition",props:Fg,abstract:!0,render:function(i){var e=this,t=this.$slots.default;if(!!t&&(t=t.filter(yb),!!t.length)){var n=this.mode,s=t[0];if(_b(this.$vnode))return s;var r=ru(s);if(!r)return s;if(this._leaving)return sd(i,s);var o="__transition-".concat(this._uid,"-");r.key=r.key==null?r.isComment?o+"comment":o+r.tag:No(r.key)?String(r.key).indexOf(o)===0?r.key:o+r.key:r.key;var a=(r.data||(r.data={})).transition=kg(this),l=this._vnode,c=ru(l);if(r.data.directives&&r.data.directives.some(xb)&&(r.data.show=!0),c&&c.data&&!vb(r,c)&&!ho(c)&&!(c.componentInstance&&c.componentInstance._vnode.isComment)){var u=c.data.transition=ot({},a);if(n==="out-in")return this._leaving=!0,gi(u,"afterLeave",function(){e._leaving=!1,e.$forceUpdate()}),sd(i,s);if(n==="in-out"){if(ho(r))return l;var h,f=function(){h()};gi(a,"afterEnter",f),gi(a,"enterCancelled",f),gi(u,"delayLeave",function(d){h=d})}}return s}}},Ug=ot({tag:String,moveClass:String},Fg);delete Ug.mode;var Sb={props:Ug,beforeMount:function(){var i=this,e=this._update;this._update=function(t,n){var s=dg(i);i.__patch__(i._vnode,i.kept,!1,!0),i._vnode=i.kept,s(),e.call(i,t,n)}},render:function(i){for(var e=this.tag||this.$vnode.data.tag||"span",t=Object.create(null),n=this.prevChildren=this.children,s=this.$slots.default||[],r=this.children=[],o=kg(this),a=0;a<s.length;a++){var l=s[a];l.tag&&l.key!=null&&String(l.key).indexOf("__vlist")!==0&&(r.push(l),t[l.key]=l,(l.data||(l.data={})).transition=o)}if(n){for(var c=[],u=[],a=0;a<n.length;a++){var l=n[a];l.data.transition=o,l.data.pos=l.elm.getBoundingClientRect(),t[l.key]?c.push(l):u.push(l)}this.kept=i(e,null,c),this.removed=u}return i(e,null,r)},updated:function(){var i=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";!i.length||!this.hasMove(i[0].elm,e)||(i.forEach(Mb),i.forEach(wb),i.forEach(Tb),this._reflow=document.body.offsetHeight,i.forEach(function(t){if(t.data.moved){var n=t.elm,s=n.style;Yi(n,e),s.transform=s.WebkitTransform=s.transitionDuration="",n.addEventListener(Xa,n._moveCb=function r(o){o&&o.target!==n||(!o||/transform$/.test(o.propertyName))&&(n.removeEventListener(Xa,r),n._moveCb=null,Xn(n,e))})}}))},methods:{hasMove:function(i,e){if(!Ag)return!1;if(this._hasMove)return this._hasMove;var t=i.cloneNode();i._transitionClasses&&i._transitionClasses.forEach(function(s){Eg(t,s)}),Tg(t,e),t.style.display="none",this.$el.appendChild(t);var n=Pg(t);return this.$el.removeChild(t),this._hasMove=n.hasTransform}}};function Mb(i){i.elm._moveCb&&i.elm._moveCb(),i.elm._enterCb&&i.elm._enterCb()}function wb(i){i.data.newPos=i.elm.getBoundingClientRect()}function Tb(i){var e=i.data.pos,t=i.data.newPos,n=e.left-t.left,s=e.top-t.top;if(n||s){i.data.moved=!0;var r=i.elm.style;r.transform=r.WebkitTransform="translate(".concat(n,"px,").concat(s,"px)"),r.transitionDuration="0s"}}var Eb={Transition:bb,TransitionGroup:Sb};_t.config.mustUseProp=fx;_t.config.isReservedTag=bg;_t.config.isReservedAttr=ux;_t.config.getTagNamespace=Sx;_t.config.isUnknownElement=Mx;ot(_t.options.directives,gb);ot(_t.options.components,Eb);_t.prototype.__patch__=rn?db:At;_t.prototype.$mount=function(i,e){return i=i&&rn?wx(i):void 0,gy(this,i,e)};rn&&setTimeout(function(){fn.devtools&&za&&za.emit("init",_t)},0);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hh="144",Ts={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cb=0,rd=1,Ab=2,zg=1,Rb=2,Zr=3,os=0,dn=1,Ln=2,xi=0,Js=1,od=2,ad=3,ld=4,Ib=5,Vs=100,Lb=101,Pb=102,cd=103,ud=104,Db=200,Nb=201,Ob=202,Fb=203,Bg=204,Hg=205,kb=206,Ub=207,zb=208,Bb=209,Hb=210,Gb=0,Vb=1,Wb=2,ou=3,$b=4,jb=5,qb=6,Xb=7,Gg=0,Yb=1,Kb=2,Dn=0,Zb=1,Jb=2,Qb=3,eS=4,tS=5,Vg=300,or=301,ar=302,au=303,lu=304,ml=306,lr=1e3,cn=1001,Ka=1002,Rt=1003,cu=1004,uu=1005,Wt=1006,Wg=1007,Sr=1008,as=1009,nS=1010,iS=1011,$g=1012,sS=1013,Vi=1014,vi=1015,cr=1016,rS=1017,oS=1018,Qs=1020,aS=1021,lS=1022,bn=1023,cS=1024,uS=1025,Ki=1026,ur=1027,hS=1028,fS=1029,dS=1030,pS=1031,mS=1033,Bl=33776,Hl=33777,Gl=33778,Vl=33779,hd=35840,fd=35841,dd=35842,pd=35843,gS=36196,md=37492,gd=37496,_d=37808,vd=37809,yd=37810,xd=37811,bd=37812,Sd=37813,Md=37814,wd=37815,Td=37816,Ed=37817,Cd=37818,Ad=37819,Rd=37820,Id=37821,Ld=36492,mo=2300,hr=2301,Wl=2302,Pd=2400,Dd=2401,Nd=2402,_S=2500,vS=1,jg=2,Ci=3e3,Je=3001,yS=3200,xS=3201,fh=0,bS=1,$n="srgb",Wi="srgb-linear",$l=7680,SS=519,hu=35044,Od="300 es",fu=1035;class _s{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fd=1234567;const to=Math.PI/180,go=180/Math.PI;function pn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]).toLowerCase()}function Et(i,e,t){return Math.max(e,Math.min(t,i))}function dh(i,e){return(i%e+e)%e}function MS(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function wS(i,e,t){return i!==e?(t-i)/(e-i):0}function no(i,e,t){return(1-t)*i+t*e}function TS(i,e,t,n){return no(i,e,1-Math.exp(-t*n))}function ES(i,e=1){return e-Math.abs(dh(i,e*2)-e)}function CS(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function AS(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function RS(i,e){return i+Math.floor(Math.random()*(e-i+1))}function IS(i,e){return i+Math.random()*(e-i)}function LS(i){return i*(.5-Math.random())}function PS(i){i!==void 0&&(Fd=i);let e=Fd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function DS(i){return i*to}function NS(i){return i*go}function du(i){return(i&i-1)===0&&i!==0}function qg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Za(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function OS(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function nt(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var FS=Object.freeze({__proto__:null,DEG2RAD:to,RAD2DEG:go,generateUUID:pn,clamp:Et,euclideanModulo:dh,mapLinear:MS,inverseLerp:wS,lerp:no,damp:TS,pingpong:ES,smoothstep:CS,smootherstep:AS,randInt:RS,randFloat:IS,randFloatSpread:LS,seededRandom:PS,degToRad:DS,radToDeg:NS,isPowerOfTwo:du,ceilPowerOfTwo:qg,floorPowerOfTwo:Za,setQuaternionFromProperEuler:OS,normalize:nt,denormalize:Yn});class se{constructor(e=0,t=0){se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hn{constructor(){hn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],m=s[0],p=s[3],_=s[6],x=s[1],w=s[4],y=s[7],S=s[2],I=s[5],N=s[8];return r[0]=o*m+a*x+l*S,r[3]=o*p+a*w+l*I,r[6]=o*_+a*y+l*N,r[1]=c*m+u*x+h*S,r[4]=c*p+u*w+h*I,r[7]=c*_+u*y+h*N,r[2]=f*m+d*x+g*S,r[5]=f*p+d*w+g*I,r[8]=f*_+d*y+g*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=h*m,e[1]=(s*c-u*n)*m,e[2]=(a*n-s*o)*m,e[3]=f*m,e[4]=(u*t-s*l)*m,e[5]=(s*r-a*t)*m,e[6]=d*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),s=this.elements,r=s[0],o=s[3],a=s[6],l=s[1],c=s[4],u=s[7];return s[0]=t*r+n*l,s[3]=t*o+n*c,s[6]=t*a+n*u,s[1]=-n*r+t*l,s[4]=-n*o+t*c,s[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Xg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _o(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Oa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const jl={[$n]:{[Wi]:Zi},[Wi]:{[$n]:Oa}},gn={legacyMode:!0,get workingColorSpace(){return Wi},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(jl[e]&&jl[e][t]!==void 0){const n=jl[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},Yg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xt={r:0,g:0,b:0},_n={h:0,s:0,l:0},na={h:0,s:0,l:0};function ql(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function ia(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class Le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Wi){return this.r=e,this.g=t,this.b=n,gn.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Wi){if(e=dh(e,1),t=Et(t,0,1),n=Et(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ql(o,r,e+1/3),this.g=ql(o,r,e),this.b=ql(o,r,e-1/3)}return gn.toWorkingColorSpace(this,s),this}setStyle(e,t=$n){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,gn.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,gn.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,gn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,gn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=$n){const n=Yg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return gn.fromWorkingColorSpace(ia(this,xt),e),Et(xt.r*255,0,255)<<16^Et(xt.g*255,0,255)<<8^Et(xt.b*255,0,255)<<0}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Wi){gn.fromWorkingColorSpace(ia(this,xt),t);const n=xt.r,s=xt.g,r=xt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Wi){return gn.fromWorkingColorSpace(ia(this,xt),t),e.r=xt.r,e.g=xt.g,e.b=xt.b,e}getStyle(e=$n){return gn.fromWorkingColorSpace(ia(this,xt),e),e!==$n?`color(${e} ${xt.r} ${xt.g} ${xt.b})`:`rgb(${xt.r*255|0},${xt.g*255|0},${xt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(_n),_n.h+=e,_n.s+=t,_n.l+=n,this.setHSL(_n.h,_n.s,_n.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_n),e.getHSL(na);const n=no(_n.h,na.h,t),s=no(_n.s,na.s,t),r=no(_n.l,na.l,t);return this.setHSL(n,s,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Le.NAMES=Yg;let Cs;class Kg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Cs===void 0&&(Cs=_o("canvas")),Cs.width=e.width,Cs.height=e.height;const n=Cs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Cs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_o("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zi(t[n]/255)*255):t[n]=Zi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Zg{constructor(e=null){this.isSource=!0,this.uuid=pn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Xl(s[o].image)):r.push(Xl(s[o]))}else r=Xl(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Xl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Kg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kS=0;class Ht extends _s{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,n=cn,s=cn,r=Wt,o=Sr,a=bn,l=as,c=1,u=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=pn(),this.name="",this.source=new Zg(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new hn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lr:e.x=e.x-Math.floor(e.x);break;case cn:e.x=e.x<0?0:1;break;case Ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lr:e.y=e.y-Math.floor(e.y);break;case cn:e.y=e.y<0?0:1;break;case Ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=Vg;class et{constructor(e=0,t=0,n=0,s=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],m=l[2],p=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+m)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,y=(d+1)/2,S=(_+1)/2,I=(u+f)/4,N=(h+m)/4,v=(g+p)/4;return w>y&&w>S?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=I/n,r=N/n):y>S?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=I/s,r=v/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=N/r,s=v/r),this.set(n,s,r,t),this}let x=Math.sqrt((p-g)*(p-g)+(h-m)*(h-m)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(h-m)/x,this.z=(f-u)/x,this.w=Math.acos((c+d+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ai extends _s{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new Ht(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Wt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Zg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jg extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class US extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class En{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],m=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=m;return}if(h!==m||l!==f||c!==d||u!==g){let p=1-a;const _=l*f+c*d+u*g+h*m,x=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const S=Math.sqrt(w),I=Math.atan2(S,_*x);p=Math.sin(p*I)/S,a=Math.sin(a*I)/S}const y=a*x;if(l=l*p+f*y,c=c*p+d*y,u=u*p+g*y,h=h*p+m*y,p===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*s-a*n,u=l*n+a*t-r*s,h=l*s+r*n-o*t,f=-r*t-o*n-a*s;return this.x=c*l+f*-r+u*-a-h*-o,this.y=u*l+f*-o+h*-r-c*-a,this.z=h*l+f*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yl.copy(this).projectOnVector(e),this.sub(Yl)}reflect(e){return this.sub(Yl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yl=new P,kd=new En;class vs{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<s&&(s=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,s),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<s&&(s=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,s),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)Oi.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Oi)}else n.boundingBox===null&&n.computeBoundingBox(),Kl.copy(n.boundingBox),Kl.applyMatrix4(e.matrixWorld),this.union(Kl);const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fr),sa.subVectors(this.max,Fr),As.subVectors(e.a,Fr),Rs.subVectors(e.b,Fr),Is.subVectors(e.c,Fr),ri.subVectors(Rs,As),oi.subVectors(Is,Rs),Fi.subVectors(As,Is);let t=[0,-ri.z,ri.y,0,-oi.z,oi.y,0,-Fi.z,Fi.y,ri.z,0,-ri.x,oi.z,0,-oi.x,Fi.z,0,-Fi.x,-ri.y,ri.x,0,-oi.y,oi.x,0,-Fi.y,Fi.x,0];return!Zl(t,As,Rs,Is,sa)||(t=[1,0,0,0,1,0,0,0,1],!Zl(t,As,Rs,Is,sa))?!1:(ra.crossVectors(ri,oi),t=[ra.x,ra.y,ra.z],Zl(t,As,Rs,Is,sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Oi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Un=[new P,new P,new P,new P,new P,new P,new P,new P],Oi=new P,Kl=new vs,As=new P,Rs=new P,Is=new P,ri=new P,oi=new P,Fi=new P,Fr=new P,sa=new P,ra=new P,ki=new P;function Zl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ki.fromArray(i,r);const a=s.x*Math.abs(ki.x)+s.y*Math.abs(ki.y)+s.z*Math.abs(ki.z),l=e.dot(ki),c=t.dot(ki),u=n.dot(ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const zS=new vs,Ud=new P,oa=new P,Jl=new P;class Mr{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zS.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Jl.subVectors(e,this.center);const t=Jl.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.add(Jl.multiplyScalar(s/n)),this.radius+=s}return this}union(e){return this.center.equals(e.center)===!0?oa.set(0,0,1).multiplyScalar(e.radius):oa.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Ud.copy(e.center).add(oa)),this.expandByPoint(Ud.copy(e.center).sub(oa)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new P,Ql=new P,aa=new P,ai=new P,ec=new P,la=new P,tc=new P;class gl{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.direction).multiplyScalar(t).add(this.origin),zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ql.copy(e).add(t).multiplyScalar(.5),aa.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(Ql);const r=e.distanceTo(t)*.5,o=-this.direction.dot(aa),a=ai.dot(this.direction),l=-ai.dot(aa),c=ai.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const m=1/u;h*=m,f*=m,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),s&&s.copy(aa).multiplyScalar(f).add(Ql),d}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const n=zn.dot(this.direction),s=zn.dot(zn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||n!==n)&&(n=r),(o<s||s!==s)&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,n,s,r){ec.subVectors(t,e),la.subVectors(n,e),tc.crossVectors(ec,la);let o=this.direction.dot(tc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ai.subVectors(this.origin,e);const l=a*this.direction.dot(la.crossVectors(ai,la));if(l<0)return null;const c=a*this.direction.dot(ec.cross(ai));if(c<0||l+c>o)return null;const u=-a*ai.dot(tc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,s,r,o,a,l,c,u,h,f,d,g,m,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=s,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=d,_[7]=g,_[11]=m,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Ls.setFromMatrixColumn(e,0).length(),r=1/Ls.setFromMatrixColumn(e,1).length(),o=1/Ls.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,m=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-m*c,t[9]=-a*l,t[2]=m-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,m=c*h;t[0]=f+m*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=m+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,m=c*h;t[0]=f-m*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=m-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,m=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+m,t[1]=l*h,t[5]=m*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=m-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-m*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+m,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=m*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(BS,e,HS)}lookAt(e,t,n){const s=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),li.crossVectors(n,Zt),li.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),li.crossVectors(n,Zt)),li.normalize(),ca.crossVectors(Zt,li),s[0]=li.x,s[4]=ca.x,s[8]=Zt.x,s[1]=li.y,s[5]=ca.y,s[9]=Zt.y,s[2]=li.z,s[6]=ca.z,s[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],m=n[6],p=n[10],_=n[14],x=n[3],w=n[7],y=n[11],S=n[15],I=s[0],N=s[4],v=s[8],R=s[12],U=s[1],W=s[5],L=s[9],M=s[13],C=s[2],O=s[6],B=s[10],$=s[14],z=s[3],D=s[7],k=s[11],Z=s[15];return r[0]=o*I+a*U+l*C+c*z,r[4]=o*N+a*W+l*O+c*D,r[8]=o*v+a*L+l*B+c*k,r[12]=o*R+a*M+l*$+c*Z,r[1]=u*I+h*U+f*C+d*z,r[5]=u*N+h*W+f*O+d*D,r[9]=u*v+h*L+f*B+d*k,r[13]=u*R+h*M+f*$+d*Z,r[2]=g*I+m*U+p*C+_*z,r[6]=g*N+m*W+p*O+_*D,r[10]=g*v+m*L+p*B+_*k,r[14]=g*R+m*M+p*$+_*Z,r[3]=x*I+w*U+y*C+S*z,r[7]=x*N+w*W+y*O+S*D,r[11]=x*v+w*L+y*B+S*k,r[15]=x*R+w*M+y*$+S*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],m=e[7],p=e[11],_=e[15];return g*(+r*l*h-s*c*h-r*a*f+n*c*f+s*a*d-n*l*d)+m*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+p*(+t*c*h-t*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+_*(-s*a*u-t*l*h+t*a*f+s*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],m=e[13],p=e[14],_=e[15],x=h*p*c-m*f*c+m*l*d-a*p*d-h*l*_+a*f*_,w=g*f*c-u*p*c-g*l*d+o*p*d+u*l*_-o*f*_,y=u*m*c-g*h*c+g*a*d-o*m*d-u*a*_+o*h*_,S=g*h*l-u*m*l-g*a*f+o*m*f+u*a*p-o*h*p,I=t*x+n*w+s*y+r*S;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/I;return e[0]=x*N,e[1]=(m*f*r-h*p*r-m*s*d+n*p*d+h*s*_-n*f*_)*N,e[2]=(a*p*r-m*l*r+m*s*c-n*p*c-a*s*_+n*l*_)*N,e[3]=(h*l*r-a*f*r-h*s*c+n*f*c+a*s*d-n*l*d)*N,e[4]=w*N,e[5]=(u*p*r-g*f*r+g*s*d-t*p*d-u*s*_+t*f*_)*N,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*_-t*l*_)*N,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*d+t*l*d)*N,e[8]=y*N,e[9]=(g*h*r-u*m*r-g*n*d+t*m*d+u*n*_-t*h*_)*N,e[10]=(o*m*r-g*a*r+g*n*c-t*m*c-o*n*_+t*a*_)*N,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*d-t*a*d)*N,e[12]=S*N,e[13]=(u*m*s-g*h*s+g*n*f-t*m*f-u*n*p+t*h*p)*N,e[14]=(g*a*s-o*m*s-g*n*l+t*m*l+o*n*p-t*a*p)*N,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*f+t*a*f)*N,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,m=o*u,p=o*h,_=a*h,x=l*c,w=l*u,y=l*h,S=n.x,I=n.y,N=n.z;return s[0]=(1-(m+_))*S,s[1]=(d+y)*S,s[2]=(g-w)*S,s[3]=0,s[4]=(d-y)*I,s[5]=(1-(f+_))*I,s[6]=(p+x)*I,s[7]=0,s[8]=(g+w)*N,s[9]=(p-x)*N,s[10]=(1-(f+m))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Ls.set(s[0],s[1],s[2]).length();const o=Ls.set(s[4],s[5],s[6]).length(),a=Ls.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],vn.copy(this);const c=1/r,u=1/o,h=1/a;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=u,vn.elements[5]*=u,vn.elements[6]*=u,vn.elements[8]*=h,vn.elements[9]*=h,vn.elements[10]*=h,t.setFromRotationMatrix(vn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o){const a=this.elements,l=2*r/(t-e),c=2*r/(n-s),u=(t+e)/(t-e),h=(n+s)/(n-s),f=-(o+r)/(o-r),d=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,s,r,o){const a=this.elements,l=1/(t-e),c=1/(n-s),u=1/(o-r),h=(t+e)*l,f=(n+s)*c,d=(o+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ls=new P,vn=new Ve,BS=new P(0,0,0),HS=new P(1,1,1),li=new P,ca=new P,Zt=new P,zd=new Ve,Bd=new En;class Uo{constructor(e=0,t=0,n=0,s=Uo.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bd.setFromEuler(this),this.setFromQuaternion(Bd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Uo.DefaultOrder="XYZ";Uo.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class ph{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let GS=0;const Hd=new P,Ps=new En,Bn=new Ve,ua=new P,kr=new P,VS=new P,WS=new En,Gd=new P(1,0,0),Vd=new P(0,1,0),Wd=new P(0,0,1),$S={type:"added"},$d={type:"removed"};class ct extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DefaultUp.clone();const e=new P,t=new Uo,n=new En,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new hn}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=ct.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ct.DefaultMatrixWorldAutoUpdate,this.layers=new ph,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(Gd,e)}rotateY(e){return this.rotateOnAxis(Vd,e)}rotateZ(e){return this.rotateOnAxis(Wd,e)}translateOnAxis(e,t){return Hd.copy(e).applyQuaternion(this.quaternion),this.position.add(Hd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gd,e)}translateY(e){return this.translateOnAxis(Vd,e)}translateZ(e){return this.translateOnAxis(Wd,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ua.copy(e):ua.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(kr,ua,this.up):Bn.lookAt(ua,kr,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),Ps.setFromRotationMatrix(Bn),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent($S)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($d)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent($d)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,e,VS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,WS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}ct.DefaultUp=new P(0,1,0);ct.DefaultMatrixAutoUpdate=!0;ct.DefaultMatrixWorldAutoUpdate=!0;const yn=new P,Hn=new P,nc=new P,Gn=new P,Ds=new P,Ns=new P,jd=new P,ic=new P,sc=new P,rc=new P;class jn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),yn.subVectors(e,t),s.cross(yn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){yn.subVectors(s,t),Hn.subVectors(n,t),nc.subVectors(e,t);const o=yn.dot(yn),a=yn.dot(Hn),l=yn.dot(nc),c=Hn.dot(Hn),u=Hn.dot(nc),h=o*c-a*a;if(h===0)return r.set(-2,-1,-1);const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Gn),Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getUV(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Gn),l.set(0,0),l.addScaledVector(r,Gn.x),l.addScaledVector(o,Gn.y),l.addScaledVector(a,Gn.z),l}static isFrontFacing(e,t,n,s){return yn.subVectors(n,t),Hn.subVectors(e,t),yn.cross(Hn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),yn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return jn.getUV(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Ds.subVectors(s,n),Ns.subVectors(r,n),ic.subVectors(e,n);const l=Ds.dot(ic),c=Ns.dot(ic);if(l<=0&&c<=0)return t.copy(n);sc.subVectors(e,s);const u=Ds.dot(sc),h=Ns.dot(sc);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ds,o);rc.subVectors(e,r);const d=Ds.dot(rc),g=Ns.dot(rc);if(g>=0&&d<=g)return t.copy(r);const m=d*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ns,a);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return jd.subVectors(r,s),a=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(jd,a);const _=1/(p+m+f);return o=m*_,a=f*_,t.copy(n).addScaledVector(Ds,o).addScaledVector(Ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let jS=0;class Nn extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=pn(),this.name="",this.type="Material",this.blending=Js,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Bg,this.blendDst=Hg,this.blendEquation=Vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ou,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=SS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$l,this.stencilZFail=$l,this.stencilZPass=$l,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(n.blending=this.blending),this.side!==os&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class un extends Nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new P,ha=new se;class qt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=hu,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ha.fromBufferAttribute(this,t),ha.applyMatrix3(e),this.setXY(t,ha.x,ha.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Qg extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class e_ extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Xt extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let qS=0;const ln=new Ve,oc=new ct,Os=new P,Jt=new vs,Ur=new vs,Mt=new P;class mn extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=pn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xg(e)?e_:Qg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new hn().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,n){return ln.makeTranslation(e,t,n),this.applyMatrix4(ln),this}scale(e,t,n){return ln.makeScale(e,t,n),this.applyMatrix4(ln),this}lookAt(e){return oc.lookAt(e),oc.updateMatrix(),this.applyMatrix4(oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Xt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ur.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(Jt.min,Ur.min),Jt.expandByPoint(Mt),Mt.addVectors(Jt.max,Ur.max),Jt.expandByPoint(Mt)):(Jt.expandByPoint(Ur.min),Jt.expandByPoint(Ur.max))}Jt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Mt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Mt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Mt.fromBufferAttribute(a,c),l&&(Os.fromBufferAttribute(e,c),Mt.add(Os)),s=Math.max(s,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let U=0;U<a;U++)c[U]=new P,u[U]=new P;const h=new P,f=new P,d=new P,g=new se,m=new se,p=new se,_=new P,x=new P;function w(U,W,L){h.fromArray(s,U*3),f.fromArray(s,W*3),d.fromArray(s,L*3),g.fromArray(o,U*2),m.fromArray(o,W*2),p.fromArray(o,L*2),f.sub(h),d.sub(h),m.sub(g),p.sub(g);const M=1/(m.x*p.y-p.x*m.y);!isFinite(M)||(_.copy(f).multiplyScalar(p.y).addScaledVector(d,-m.y).multiplyScalar(M),x.copy(d).multiplyScalar(m.x).addScaledVector(f,-p.x).multiplyScalar(M),c[U].add(_),c[W].add(_),c[L].add(_),u[U].add(x),u[W].add(x),u[L].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let U=0,W=y.length;U<W;++U){const L=y[U],M=L.start,C=L.count;for(let O=M,B=M+C;O<B;O+=3)w(n[O+0],n[O+1],n[O+2])}const S=new P,I=new P,N=new P,v=new P;function R(U){N.fromArray(r,U*3),v.copy(N);const W=c[U];S.copy(W),S.sub(N.multiplyScalar(N.dot(W))).normalize(),I.crossVectors(v,W);const M=I.dot(u[U])<0?-1:1;l[U*4]=S.x,l[U*4+1]=S.y,l[U*4+2]=S.z,l[U*4+3]=M}for(let U=0,W=y.length;U<W;++U){const L=y[U],M=L.start,C=L.count;for(let O=M,B=M+C;O<B;O+=3)R(n[O+0]),R(n[O+1]),R(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),m=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,m),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let m=0,p=l.length;m<p;m++){a.isInterleavedBufferAttribute?d=l[m]*a.data.stride+a.offset:d=l[m]*u;for(let _=0;_<u;_++)f[g++]=c[d++]}return new qt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mn,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const qd=new Ve,Fs=new gl,ac=new Mr,ci=new P,ui=new P,hi=new P,lc=new P,cc=new P,uc=new P,fa=new P,da=new P,pa=new P,ma=new se,ga=new se,_a=new se,hc=new P,va=new P;class It extends ct{constructor(e=new mn,t=new un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ac.copy(n.boundingSphere),ac.applyMatrix4(r),e.ray.intersectsSphere(ac)===!1)||(qd.copy(r).invert(),Fs.copy(e.ray).applyMatrix4(qd),n.boundingBox!==null&&Fs.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,d=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(s))for(let m=0,p=d.length;m<p;m++){const _=d[m],x=s[_.materialIndex],w=Math.max(_.start,g.start),y=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let S=w,I=y;S<I;S+=3){const N=a.getX(S),v=a.getX(S+1),R=a.getX(S+2);o=ya(this,x,e,Fs,l,c,u,h,f,N,v,R),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),p=Math.min(a.count,g.start+g.count);for(let _=m,x=p;_<x;_+=3){const w=a.getX(_),y=a.getX(_+1),S=a.getX(_+2);o=ya(this,s,e,Fs,l,c,u,h,f,w,y,S),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,p=d.length;m<p;m++){const _=d[m],x=s[_.materialIndex],w=Math.max(_.start,g.start),y=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let S=w,I=y;S<I;S+=3){const N=S,v=S+1,R=S+2;o=ya(this,x,e,Fs,l,c,u,h,f,N,v,R),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let _=m,x=p;_<x;_+=3){const w=_,y=_+1,S=_+2;o=ya(this,s,e,Fs,l,c,u,h,f,w,y,S),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function XS(i,e,t,n,s,r,o,a){let l;if(e.side===dn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side!==Ln,a),l===null)return null;va.copy(a),va.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(va);return c<t.near||c>t.far?null:{distance:c,point:va.clone(),object:i}}function ya(i,e,t,n,s,r,o,a,l,c,u,h){ci.fromBufferAttribute(s,c),ui.fromBufferAttribute(s,u),hi.fromBufferAttribute(s,h);const f=i.morphTargetInfluences;if(r&&f){fa.set(0,0,0),da.set(0,0,0),pa.set(0,0,0);for(let g=0,m=r.length;g<m;g++){const p=f[g],_=r[g];p!==0&&(lc.fromBufferAttribute(_,c),cc.fromBufferAttribute(_,u),uc.fromBufferAttribute(_,h),o?(fa.addScaledVector(lc,p),da.addScaledVector(cc,p),pa.addScaledVector(uc,p)):(fa.addScaledVector(lc.sub(ci),p),da.addScaledVector(cc.sub(ui),p),pa.addScaledVector(uc.sub(hi),p)))}ci.add(fa),ui.add(da),hi.add(pa)}i.isSkinnedMesh&&(i.boneTransform(c,ci),i.boneTransform(u,ui),i.boneTransform(h,hi));const d=XS(i,e,t,n,ci,ui,hi,hc);if(d){a&&(ma.fromBufferAttribute(a,c),ga.fromBufferAttribute(a,u),_a.fromBufferAttribute(a,h),d.uv=jn.getUV(hc,ci,ui,hi,ma,ga,_a,new se)),l&&(ma.fromBufferAttribute(l,c),ga.fromBufferAttribute(l,u),_a.fromBufferAttribute(l,h),d.uv2=jn.getUV(hc,ci,ui,hi,ma,ga,_a,new se));const g={a:c,b:u,c:h,normal:new P,materialIndex:0};jn.getNormal(ci,ui,hi,g.normal),d.face=g}return d}class wr extends mn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(h,2));function g(m,p,_,x,w,y,S,I,N,v,R){const U=y/N,W=S/v,L=y/2,M=S/2,C=I/2,O=N+1,B=v+1;let $=0,z=0;const D=new P;for(let k=0;k<B;k++){const Z=k*W-M;for(let j=0;j<O;j++){const ne=j*U-L;D[m]=ne*x,D[p]=Z*w,D[_]=C,c.push(D.x,D.y,D.z),D[m]=0,D[p]=0,D[_]=I>0?1:-1,u.push(D.x,D.y,D.z),h.push(j/N),h.push(1-k/v),$+=1}}for(let k=0;k<v;k++)for(let Z=0;Z<N;Z++){const j=f+Z+O*k,ne=f+Z+O*(k+1),he=f+(Z+1)+O*(k+1),xe=f+(Z+1)+O*k;l.push(j,ne,xe),l.push(ne,he,xe),z+=6}a.addGroup(d,z,R),d+=z,f+=$}}static fromJSON(e){return new wr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Dt(i){const e={};for(let t=0;t<i.length;t++){const n=fr(i[t]);for(const s in n)e[s]=n[s]}return e}function YS(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}const t_={clone:fr,merge:Dt};var KS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends Nn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=KS,this.fragmentShader=ZS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fr(e.uniforms),this.uniformsGroups=YS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class n_ extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Nt extends n_{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=go*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return go*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(to*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ks=90,Us=1;class JS extends ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const s=new Nt(ks,Us,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new P(1,0,0)),this.add(s);const r=new Nt(ks,Us,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new P(-1,0,0)),this.add(r);const o=new Nt(ks,Us,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new P(0,1,0)),this.add(o);const a=new Nt(ks,Us,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new P(0,-1,0)),this.add(a);const l=new Nt(ks,Us,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new P(0,0,1)),this.add(l);const c=new Nt(ks,Us,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new P(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[s,r,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Dn,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,s),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class i_ extends Ht{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:or,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class QS extends Ai{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new i_(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new wr(5,5,5),r=new Qn({name:"CubemapFromEquirect",uniforms:fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:xi});r.uniforms.tEquirect.value=t;const o=new It(s,r),a=t.minFilter;return t.minFilter===Sr&&(t.minFilter=Wt),new JS(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const fc=new P,eM=new P,tM=new hn;class pi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=fc.subVectors(n,t).cross(eM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(fc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||tM.getNormalMatrix(e),s=this.coplanarPoint(fc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zs=new Mr,xa=new P;class mh{constructor(e=new pi,t=new pi,n=new pi,s=new pi,r=new pi,o=new pi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],d=n[9],g=n[10],m=n[11],p=n[12],_=n[13],x=n[14],w=n[15];return t[0].setComponents(a-s,h-l,m-f,w-p).normalize(),t[1].setComponents(a+s,h+l,m+f,w+p).normalize(),t[2].setComponents(a+r,h+c,m+d,w+_).normalize(),t[3].setComponents(a-r,h-c,m-d,w-_).normalize(),t[4].setComponents(a-o,h-u,m-g,w-x).normalize(),t[5].setComponents(a+o,h+u,m+g,w+x).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),zs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSprite(e){return zs.center.set(0,0,0),zs.radius=.7071067811865476,zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(xa.x=s.normal.x>0?e.max.x:e.min.x,xa.y=s.normal.y>0?e.max.y:e.min.y,xa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(xa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function s_(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function nM(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,u){const h=c.array,f=c.usage,d=i.createBuffer();i.bindBuffer(u,d),i.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,d=u.updateRange;i.bindBuffer(h,c),d.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,s(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class er extends mn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],m=[],p=[];for(let _=0;_<u;_++){const x=_*f-o;for(let w=0;w<c;w++){const y=w*h-r;g.push(y,-x,0),m.push(0,0,1),p.push(w/a),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let x=0;x<a;x++){const w=x+c*_,y=x+c*(_+1),S=x+1+c*(_+1),I=x+1+c*_;d.push(w,y,I),d.push(y,S,I)}this.setIndex(d),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(m,3)),this.setAttribute("uv",new Xt(p,2))}static fromJSON(e){return new er(e.width,e.height,e.widthSegments,e.heightSegments)}}var iM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,sM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,oM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cM="vec3 transformed = vec3( position );",uM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hM=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,fM=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,dM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_M=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,bM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,SM=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,MM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,wM=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,TM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,EM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,CM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RM="gl_FragColor = linearToOutputTexel( gl_FragColor );",IM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LM=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,PM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,DM=`#ifdef USE_ENVMAP
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
#endif`,NM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,OM=`#ifdef USE_ENVMAP
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
#endif`,FM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,UM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BM=`#ifdef USE_GRADIENTMAP
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
}`,HM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,GM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,$M=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,jM=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,qM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,YM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,ZM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,JM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,QM=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ew=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,nw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,rw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ow=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,pw=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,mw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,gw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,_w=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Sw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Mw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,ww=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Tw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ew=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Aw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Iw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ow=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fw=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,kw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Uw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Bw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hw=`#ifdef USE_SKINNING
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
#endif`,Gw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ww=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$w=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,qw=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Xw=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Yw=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Kw=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Zw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Jw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Qw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,eT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nT=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,iT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sT=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,rT=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,oT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,aT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,lT=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dT=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,pT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,gT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_T=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,vT=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,ST=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,wT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,ET=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,AT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RT=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,LT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,PT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ze={alphamap_fragment:iM,alphamap_pars_fragment:sM,alphatest_fragment:rM,alphatest_pars_fragment:oM,aomap_fragment:aM,aomap_pars_fragment:lM,begin_vertex:cM,beginnormal_vertex:uM,bsdfs:hM,iridescence_fragment:fM,bumpmap_pars_fragment:dM,clipping_planes_fragment:pM,clipping_planes_pars_fragment:mM,clipping_planes_pars_vertex:gM,clipping_planes_vertex:_M,color_fragment:vM,color_pars_fragment:yM,color_pars_vertex:xM,color_vertex:bM,common:SM,cube_uv_reflection_fragment:MM,defaultnormal_vertex:wM,displacementmap_pars_vertex:TM,displacementmap_vertex:EM,emissivemap_fragment:CM,emissivemap_pars_fragment:AM,encodings_fragment:RM,encodings_pars_fragment:IM,envmap_fragment:LM,envmap_common_pars_fragment:PM,envmap_pars_fragment:DM,envmap_pars_vertex:NM,envmap_physical_pars_fragment:jM,envmap_vertex:OM,fog_vertex:FM,fog_pars_vertex:kM,fog_fragment:UM,fog_pars_fragment:zM,gradientmap_pars_fragment:BM,lightmap_fragment:HM,lightmap_pars_fragment:GM,lights_lambert_fragment:VM,lights_lambert_pars_fragment:WM,lights_pars_begin:$M,lights_toon_fragment:qM,lights_toon_pars_fragment:XM,lights_phong_fragment:YM,lights_phong_pars_fragment:KM,lights_physical_fragment:ZM,lights_physical_pars_fragment:JM,lights_fragment_begin:QM,lights_fragment_maps:ew,lights_fragment_end:tw,logdepthbuf_fragment:nw,logdepthbuf_pars_fragment:iw,logdepthbuf_pars_vertex:sw,logdepthbuf_vertex:rw,map_fragment:ow,map_pars_fragment:aw,map_particle_fragment:lw,map_particle_pars_fragment:cw,metalnessmap_fragment:uw,metalnessmap_pars_fragment:hw,morphcolor_vertex:fw,morphnormal_vertex:dw,morphtarget_pars_vertex:pw,morphtarget_vertex:mw,normal_fragment_begin:gw,normal_fragment_maps:_w,normal_pars_fragment:vw,normal_pars_vertex:yw,normal_vertex:xw,normalmap_pars_fragment:bw,clearcoat_normal_fragment_begin:Sw,clearcoat_normal_fragment_maps:Mw,clearcoat_pars_fragment:ww,iridescence_pars_fragment:Tw,output_fragment:Ew,packing:Cw,premultiplied_alpha_fragment:Aw,project_vertex:Rw,dithering_fragment:Iw,dithering_pars_fragment:Lw,roughnessmap_fragment:Pw,roughnessmap_pars_fragment:Dw,shadowmap_pars_fragment:Nw,shadowmap_pars_vertex:Ow,shadowmap_vertex:Fw,shadowmask_pars_fragment:kw,skinbase_vertex:Uw,skinning_pars_vertex:zw,skinning_vertex:Bw,skinnormal_vertex:Hw,specularmap_fragment:Gw,specularmap_pars_fragment:Vw,tonemapping_fragment:Ww,tonemapping_pars_fragment:$w,transmission_fragment:jw,transmission_pars_fragment:qw,uv_pars_fragment:Xw,uv_pars_vertex:Yw,uv_vertex:Kw,uv2_pars_fragment:Zw,uv2_pars_vertex:Jw,uv2_vertex:Qw,worldpos_vertex:eT,background_vert:tT,background_frag:nT,cube_vert:iT,cube_frag:sT,depth_vert:rT,depth_frag:oT,distanceRGBA_vert:aT,distanceRGBA_frag:lT,equirect_vert:cT,equirect_frag:uT,linedashed_vert:hT,linedashed_frag:fT,meshbasic_vert:dT,meshbasic_frag:pT,meshlambert_vert:mT,meshlambert_frag:gT,meshmatcap_vert:_T,meshmatcap_frag:vT,meshnormal_vert:yT,meshnormal_frag:xT,meshphong_vert:bT,meshphong_frag:ST,meshphysical_vert:MT,meshphysical_frag:wT,meshtoon_vert:TT,meshtoon_frag:ET,points_vert:CT,points_frag:AT,shadow_vert:RT,shadow_frag:IT,sprite_vert:LT,sprite_frag:PT},ce={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new hn},uv2Transform:{value:new hn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new hn}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new hn}}},Rn={basic:{uniforms:Dt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Dt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Le(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Dt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Dt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Dt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Le(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Dt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Dt([ce.points,ce.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Dt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Dt([ce.common,ce.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Dt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Dt([ce.sprite,ce.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new hn},t2D:{value:null}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},cube:{uniforms:Dt([ce.envmap,{opacity:{value:1}}]),vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Dt([ce.common,ce.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Dt([ce.lights,ce.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Rn.physical={uniforms:Dt([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new se(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};function DT(i,e,t,n,s,r){const o=new Le(0);let a=s===!0?0:1,l,c,u=null,h=0,f=null;function d(m,p){let _=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=e.get(x));const w=i.xr,y=w.getSession&&w.getSession();y&&y.environmentBlendMode==="additive"&&(x=null),x===null?g(o,a):x&&x.isColor&&(g(x,1),_=!0),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ml)?(c===void 0&&(c=new It(new wr(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:fr(Rn.cube.uniforms),vertexShader:Rn.cube.vertexShader,fragmentShader:Rn.cube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,I,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,(u!==x||h!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,h=x.version,f=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new It(new er(2,2),new Qn({name:"BackgroundMaterial",uniforms:fr(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||h!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,h=x.version,f=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,p){t.buffers.color.setClear(m.r,m.g,m.b,p,r)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),a=p,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,g(o,a)},render:d}}function NT(i,e,t,n){const s=i.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null);let c=l,u=!1;function h(C,O,B,$,z){let D=!1;if(o){const k=m($,B,O);c!==k&&(c=k,d(c.object)),D=_(C,$,B,z),D&&x(C,$,B,z)}else{const k=O.wireframe===!0;(c.geometry!==$.id||c.program!==B.id||c.wireframe!==k)&&(c.geometry=$.id,c.program=B.id,c.wireframe=k,D=!0)}z!==null&&t.update(z,34963),(D||u)&&(u=!1,v(C,O,B,$),z!==null&&i.bindBuffer(34963,t.get(z).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(C){return n.isWebGL2?i.bindVertexArray(C):r.bindVertexArrayOES(C)}function g(C){return n.isWebGL2?i.deleteVertexArray(C):r.deleteVertexArrayOES(C)}function m(C,O,B){const $=B.wireframe===!0;let z=a[C.id];z===void 0&&(z={},a[C.id]=z);let D=z[O.id];D===void 0&&(D={},z[O.id]=D);let k=D[$];return k===void 0&&(k=p(f()),D[$]=k),k}function p(C){const O=[],B=[],$=[];for(let z=0;z<s;z++)O[z]=0,B[z]=0,$[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:B,attributeDivisors:$,object:C,attributes:{},index:null}}function _(C,O,B,$){const z=c.attributes,D=O.attributes;let k=0;const Z=B.getAttributes();for(const j in Z)if(Z[j].location>=0){const he=z[j];let xe=D[j];if(xe===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(xe=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(xe=C.instanceColor)),he===void 0||he.attribute!==xe||xe&&he.data!==xe.data)return!0;k++}return c.attributesNum!==k||c.index!==$}function x(C,O,B,$){const z={},D=O.attributes;let k=0;const Z=B.getAttributes();for(const j in Z)if(Z[j].location>=0){let he=D[j];he===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(he=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(he=C.instanceColor));const xe={};xe.attribute=he,he&&he.data&&(xe.data=he.data),z[j]=xe,k++}c.attributes=z,c.attributesNum=k,c.index=$}function w(){const C=c.newAttributes;for(let O=0,B=C.length;O<B;O++)C[O]=0}function y(C){S(C,0)}function S(C,O){const B=c.newAttributes,$=c.enabledAttributes,z=c.attributeDivisors;B[C]=1,$[C]===0&&(i.enableVertexAttribArray(C),$[C]=1),z[C]!==O&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,O),z[C]=O)}function I(){const C=c.newAttributes,O=c.enabledAttributes;for(let B=0,$=O.length;B<$;B++)O[B]!==C[B]&&(i.disableVertexAttribArray(B),O[B]=0)}function N(C,O,B,$,z,D){n.isWebGL2===!0&&(B===5124||B===5125)?i.vertexAttribIPointer(C,O,B,z,D):i.vertexAttribPointer(C,O,B,$,z,D)}function v(C,O,B,$){if(n.isWebGL2===!1&&(C.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const z=$.attributes,D=B.getAttributes(),k=O.defaultAttributeValues;for(const Z in D){const j=D[Z];if(j.location>=0){let ne=z[Z];if(ne===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(ne=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(ne=C.instanceColor)),ne!==void 0){const he=ne.normalized,xe=ne.itemSize,X=t.get(ne);if(X===void 0)continue;const Te=X.buffer,be=X.type,Me=X.bytesPerElement;if(ne.isInterleavedBufferAttribute){const de=ne.data,Oe=de.stride,ee=ne.offset;if(de.isInstancedInterleavedBuffer){for(let J=0;J<j.locationSize;J++)S(j.location+J,de.meshPerAttribute);C.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let J=0;J<j.locationSize;J++)y(j.location+J);i.bindBuffer(34962,Te);for(let J=0;J<j.locationSize;J++)N(j.location+J,xe/j.locationSize,be,he,Oe*Me,(ee+xe/j.locationSize*J)*Me)}else{if(ne.isInstancedBufferAttribute){for(let de=0;de<j.locationSize;de++)S(j.location+de,ne.meshPerAttribute);C.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let de=0;de<j.locationSize;de++)y(j.location+de);i.bindBuffer(34962,Te);for(let de=0;de<j.locationSize;de++)N(j.location+de,xe/j.locationSize,be,he,xe*Me,xe/j.locationSize*de*Me)}}else if(k!==void 0){const he=k[Z];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(j.location,he);break;case 3:i.vertexAttrib3fv(j.location,he);break;case 4:i.vertexAttrib4fv(j.location,he);break;default:i.vertexAttrib1fv(j.location,he)}}}}I()}function R(){L();for(const C in a){const O=a[C];for(const B in O){const $=O[B];for(const z in $)g($[z].object),delete $[z];delete O[B]}delete a[C]}}function U(C){if(a[C.id]===void 0)return;const O=a[C.id];for(const B in O){const $=O[B];for(const z in $)g($[z].object),delete $[z];delete O[B]}delete a[C.id]}function W(C){for(const O in a){const B=a[O];if(B[C.id]===void 0)continue;const $=B[C.id];for(const z in $)g($[z].object),delete $[z];delete B[C.id]}}function L(){M(),u=!0,c!==l&&(c=l,d(c.object))}function M(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:L,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:U,releaseStatesOfProgram:W,initAttributes:w,enableAttribute:y,disableUnusedAttributes:I}}function OT(i,e,t,n){const s=n.isWebGL2;let r;function o(c){r=c}function a(c,u){i.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,d;if(s)f=i,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](r,c,u,h),t.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=l}function FT(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(N){if(N==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),f=i.getParameter(35660),d=i.getParameter(3379),g=i.getParameter(34076),m=i.getParameter(34921),p=i.getParameter(36347),_=i.getParameter(36348),x=i.getParameter(36349),w=f>0,y=o||e.has("OES_texture_float"),S=w&&y,I=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:w,floatFragmentTextures:y,floatVertexTextures:S,maxSamples:I}}function kT(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new pi,a=new hn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,d){const g=h.length!==0||f||n!==0||s;return s=f,t=u(h,d,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,f,d){const g=h.clippingPlanes,m=h.clipIntersection,p=h.clipShadows,_=i.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const x=r?0:n,w=x*4;let y=_.clippingState||null;l.value=y,y=u(g,f,w,d);for(let S=0;S!==w;++S)y[S]=t[S];_.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const m=h!==null?h.length:0;let p=null;if(m!==0){if(p=l.value,g!==!0||p===null){const _=d+m*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<_)&&(p=new Float32Array(_));for(let w=0,y=d;w!==m;++w,y+=4)o.copy(h[w]).applyMatrix4(x,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function UT(i){let e=new WeakMap;function t(o,a){return a===au?o.mapping=or:a===lu&&(o.mapping=ar),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===au||a===lu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new QS(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class gh extends n_{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const qs=4,Xd=[.125,.215,.35,.446,.526,.582],Gi=20,dc=new gh,Yd=new Le;let pc=null;const Ui=(1+Math.sqrt(5))/2,Bs=1/Ui,Kd=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Ui,Bs),new P(0,Ui,-Bs),new P(Bs,0,Ui),new P(-Bs,0,Ui),new P(Ui,Bs,0),new P(-Ui,Bs,0)];class Zd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){pc=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ep(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pc),e.scissorTest=!1,ba(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===or||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pc=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:cr,format:bn,encoding:Ci,depthBuffer:!1},s=Jd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jd(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zT(r)),this._blurMaterial=BT(r,e,t)}return s}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,dc)}_sceneToCubeUV(e,t,n,s){const a=new Nt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Yd),u.toneMapping=Dn,u.autoClear=!1;const d=new un({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),g=new It(new wr,d);let m=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,m=!0):(d.color.copy(Yd),m=!0);for(let _=0;_<6;_++){const x=_%3;x===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):x===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const w=this._cubeSize;ba(s,x*w,_>2?w:0,w,w),u.setRenderTarget(s),m&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===or||e.mapping===ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ep()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new It(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ba(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,dc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Kd[(s-1)%Kd.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new It(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Gi-1),m=r/g,p=isFinite(r)?1+Math.floor(u*m):Gi;p>Gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Gi}`);const _=[];let x=0;for(let N=0;N<Gi;++N){const v=N/m,R=Math.exp(-v*v/2);_.push(R),N===0?x+=R:N<p&&(x+=2*R)}for(let N=0;N<_.length;N++)_[N]=_[N]/x;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:w}=this;f.dTheta.value=g,f.mipInt.value=w-n;const y=this._sizeLods[s],S=3*y*(s>w-qs?s-w+qs:0),I=4*(this._cubeSize-y);ba(t,S,I,3*y,2*y),l.setRenderTarget(t),l.render(h,dc)}}function zT(i){const e=[],t=[],n=[];let s=i;const r=i-qs+1+Xd.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-qs?l=Xd[o-i+qs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,m=3,p=2,_=1,x=new Float32Array(m*g*d),w=new Float32Array(p*g*d),y=new Float32Array(_*g*d);for(let I=0;I<d;I++){const N=I%3*2/3-1,v=I>2?0:-1,R=[N,v,0,N+2/3,v,0,N+2/3,v+1,0,N,v,0,N+2/3,v+1,0,N,v+1,0];x.set(R,m*g*I),w.set(f,p*g*I);const U=[I,I,I,I,I,I];y.set(U,_*g*I)}const S=new mn;S.setAttribute("position",new qt(x,m)),S.setAttribute("uv",new qt(w,p)),S.setAttribute("faceIndex",new qt(y,_)),e.push(S),s>qs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Jd(i,e,t){const n=new Ai(i,e,t);return n.texture.mapping=ml,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ba(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function BT(i,e,t){const n=new Float32Array(Gi),s=new P(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_h(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Qd(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_h(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function ep(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function _h(){return`

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
	`}function HT(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===au||l===lu,u=l===or||l===ar;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Zd(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new Zd(i));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function GT(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function VT(i,e,t,n){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const d=h.morphAttributes;for(const g in d){const m=d[g];for(let p=0,_=m.length;p<_;p++)e.update(m[p],34962)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let m=0;if(d!==null){const x=d.array;m=d.version;for(let w=0,y=x.length;w<y;w+=3){const S=x[w+0],I=x[w+1],N=x[w+2];f.push(S,I,I,N,N,S)}}else{const x=g.array;m=g.version;for(let w=0,y=x.length/3-1;w<y;w+=3){const S=w+0,I=w+1,N=w+2;f.push(S,I,I,N,N,S)}}const p=new(Xg(f)?e_:Qg)(f,1);p.version=m;const _=r.get(h);_&&e.remove(_),r.set(h,p)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function WT(i,e,t,n){const s=n.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,d){i.drawElements(r,d,a,f*l),t.update(d,r,1)}function h(f,d,g){if(g===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,d,a,f*l,g),t.update(d,r,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function $T(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function jT(i,e){return i[0]-e[0]}function qT(i,e){return Math.abs(e[1])-Math.abs(i[1])}function XT(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,o=new et,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=g!==void 0?g.length:0;let p=r.get(u);if(p===void 0||p.count!==m){let O=function(){M.dispose(),r.delete(u),u.removeEventListener("dispose",O)};p!==void 0&&p.texture.dispose();const w=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,I=u.morphAttributes.position||[],N=u.morphAttributes.normal||[],v=u.morphAttributes.color||[];let R=0;w===!0&&(R=1),y===!0&&(R=2),S===!0&&(R=3);let U=u.attributes.position.count*R,W=1;U>e.maxTextureSize&&(W=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const L=new Float32Array(U*W*4*m),M=new Jg(L,U,W,m);M.type=vi,M.needsUpdate=!0;const C=R*4;for(let B=0;B<m;B++){const $=I[B],z=N[B],D=v[B],k=U*W*4*B;for(let Z=0;Z<$.count;Z++){const j=Z*C;w===!0&&(o.fromBufferAttribute($,Z),L[k+j+0]=o.x,L[k+j+1]=o.y,L[k+j+2]=o.z,L[k+j+3]=0),y===!0&&(o.fromBufferAttribute(z,Z),L[k+j+4]=o.x,L[k+j+5]=o.y,L[k+j+6]=o.z,L[k+j+7]=0),S===!0&&(o.fromBufferAttribute(D,Z),L[k+j+8]=o.x,L[k+j+9]=o.y,L[k+j+10]=o.z,L[k+j+11]=D.itemSize===4?o.w:1)}}p={count:m,texture:M,size:new se(U,W)},r.set(u,p),u.addEventListener("dispose",O)}let _=0;for(let w=0;w<d.length;w++)_+=d[w];const x=u.morphTargetsRelative?1:1-_;f.getUniforms().setValue(i,"morphTargetBaseInfluence",x),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let m=n[u.id];if(m===void 0||m.length!==g){m=[];for(let y=0;y<g;y++)m[y]=[y,0];n[u.id]=m}for(let y=0;y<g;y++){const S=m[y];S[0]=y,S[1]=d[y]}m.sort(qT);for(let y=0;y<8;y++)y<g&&m[y][1]?(a[y][0]=m[y][0],a[y][1]=m[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(jT);const p=u.morphAttributes.position,_=u.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const S=a[y],I=S[0],N=S[1];I!==Number.MAX_SAFE_INTEGER&&N?(p&&u.getAttribute("morphTarget"+y)!==p[I]&&u.setAttribute("morphTarget"+y,p[I]),_&&u.getAttribute("morphNormal"+y)!==_[I]&&u.setAttribute("morphNormal"+y,_[I]),s[y]=N,x+=N):(p&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),_&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),s[y]=0)}const w=u.morphTargetsRelative?1:1-x;f.getUniforms().setValue(i,"morphTargetBaseInfluence",w),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function YT(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const r_=new Ht,o_=new Jg,a_=new US,l_=new i_,tp=[],np=[],ip=new Float32Array(16),sp=new Float32Array(9),rp=new Float32Array(4);function Tr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=tp[s];if(r===void 0&&(r=new Float32Array(s),tp[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function _l(i,e){let t=np[e];t===void 0&&(t=new Int32Array(e),np[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function KT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ZT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2fv(this.addr,e),Vt(t,e)}}function JT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;i.uniform3fv(this.addr,e),Vt(t,e)}}function QT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4fv(this.addr,e),Vt(t,e)}}function eE(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,n))return;rp.set(n),i.uniformMatrix2fv(this.addr,!1,rp),Vt(t,n)}}function tE(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,n))return;sp.set(n),i.uniformMatrix3fv(this.addr,!1,sp),Vt(t,n)}}function nE(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,n))return;ip.set(n),i.uniformMatrix4fv(this.addr,!1,ip),Vt(t,n)}}function iE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function sE(i,e){const t=this.cache;Gt(t,e)||(i.uniform2iv(this.addr,e),Vt(t,e))}function rE(i,e){const t=this.cache;Gt(t,e)||(i.uniform3iv(this.addr,e),Vt(t,e))}function oE(i,e){const t=this.cache;Gt(t,e)||(i.uniform4iv(this.addr,e),Vt(t,e))}function aE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function lE(i,e){const t=this.cache;Gt(t,e)||(i.uniform2uiv(this.addr,e),Vt(t,e))}function cE(i,e){const t=this.cache;Gt(t,e)||(i.uniform3uiv(this.addr,e),Vt(t,e))}function uE(i,e){const t=this.cache;Gt(t,e)||(i.uniform4uiv(this.addr,e),Vt(t,e))}function hE(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||r_,s)}function fE(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||a_,s)}function dE(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||l_,s)}function pE(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||o_,s)}function mE(i){switch(i){case 5126:return KT;case 35664:return ZT;case 35665:return JT;case 35666:return QT;case 35674:return eE;case 35675:return tE;case 35676:return nE;case 5124:case 35670:return iE;case 35667:case 35671:return sE;case 35668:case 35672:return rE;case 35669:case 35673:return oE;case 5125:return aE;case 36294:return lE;case 36295:return cE;case 36296:return uE;case 35678:case 36198:case 36298:case 36306:case 35682:return hE;case 35679:case 36299:case 36307:return fE;case 35680:case 36300:case 36308:case 36293:return dE;case 36289:case 36303:case 36311:case 36292:return pE}}function gE(i,e){i.uniform1fv(this.addr,e)}function _E(i,e){const t=Tr(e,this.size,2);i.uniform2fv(this.addr,t)}function vE(i,e){const t=Tr(e,this.size,3);i.uniform3fv(this.addr,t)}function yE(i,e){const t=Tr(e,this.size,4);i.uniform4fv(this.addr,t)}function xE(i,e){const t=Tr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function bE(i,e){const t=Tr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function SE(i,e){const t=Tr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ME(i,e){i.uniform1iv(this.addr,e)}function wE(i,e){i.uniform2iv(this.addr,e)}function TE(i,e){i.uniform3iv(this.addr,e)}function EE(i,e){i.uniform4iv(this.addr,e)}function CE(i,e){i.uniform1uiv(this.addr,e)}function AE(i,e){i.uniform2uiv(this.addr,e)}function RE(i,e){i.uniform3uiv(this.addr,e)}function IE(i,e){i.uniform4uiv(this.addr,e)}function LE(i,e,t){const n=e.length,s=_l(t,n);i.uniform1iv(this.addr,s);for(let r=0;r!==n;++r)t.setTexture2D(e[r]||r_,s[r])}function PE(i,e,t){const n=e.length,s=_l(t,n);i.uniform1iv(this.addr,s);for(let r=0;r!==n;++r)t.setTexture3D(e[r]||a_,s[r])}function DE(i,e,t){const n=e.length,s=_l(t,n);i.uniform1iv(this.addr,s);for(let r=0;r!==n;++r)t.setTextureCube(e[r]||l_,s[r])}function NE(i,e,t){const n=e.length,s=_l(t,n);i.uniform1iv(this.addr,s);for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||o_,s[r])}function OE(i){switch(i){case 5126:return gE;case 35664:return _E;case 35665:return vE;case 35666:return yE;case 35674:return xE;case 35675:return bE;case 35676:return SE;case 5124:case 35670:return ME;case 35667:case 35671:return wE;case 35668:case 35672:return TE;case 35669:case 35673:return EE;case 5125:return CE;case 36294:return AE;case 36295:return RE;case 36296:return IE;case 35678:case 36198:case 36298:case 36306:case 35682:return LE;case 35679:case 36299:case 36307:return PE;case 35680:case 36300:case 36308:case 36293:return DE;case 36289:case 36303:case 36311:case 36292:return NE}}class FE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=mE(t.type)}}class kE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=OE(t.type)}}class UE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const mc=/(\w+)(\])?(\[|\.)?/g;function op(i,e){i.seq.push(e),i.map[e.id]=e}function zE(i,e,t){const n=i.name,s=n.length;for(mc.lastIndex=0;;){const r=mc.exec(n),o=mc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){op(t,c===void 0?new FE(a,i,e):new kE(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new UE(a),op(t,h)),t=h}}}class Fa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);zE(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function ap(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let BE=0;function HE(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function GE(i){switch(i){case Ci:return["Linear","( value )"];case Je:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function lp(i,e,t){const n=i.getShaderParameter(e,35713),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+HE(i.getShaderSource(e),o)}else return s}function VE(i,e){const t=GE(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function WE(i,e){let t;switch(e){case Zb:t="Linear";break;case Jb:t="Reinhard";break;case Qb:t="OptimizedCineon";break;case eS:t="ACESFilmic";break;case tS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function $E(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Jr).join(`
`)}function jE(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qE(i,e){const t={},n=i.getProgramParameter(e,35721);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Jr(i){return i!==""}function cp(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function up(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const XE=/^[ \t]*#include +<([\w\d./]+)>/gm;function pu(i){return i.replace(XE,YE)}function YE(i,e){const t=ze[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return pu(t)}const KE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hp(i){return i.replace(KE,ZE)}function ZE(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fp(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function JE(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zg?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Rb?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zr&&(e="SHADOWMAP_TYPE_VSM"),e}function QE(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case or:case ar:e="ENVMAP_TYPE_CUBE";break;case ml:e="ENVMAP_TYPE_CUBE_UV";break}return e}function eC(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ar:e="ENVMAP_MODE_REFRACTION";break}return e}function tC(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Gg:e="ENVMAP_BLENDING_MULTIPLY";break;case Yb:e="ENVMAP_BLENDING_MIX";break;case Kb:e="ENVMAP_BLENDING_ADD";break}return e}function nC(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function iC(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=JE(t),c=QE(t),u=eC(t),h=tC(t),f=nC(t),d=t.isWebGL2?"":$E(t),g=jE(r),m=s.createProgram();let p,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(Jr).join(`
`),p.length>0&&(p+=`
`),_=[d,g].filter(Jr).join(`
`),_.length>0&&(_+=`
`)):(p=[fp(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jr).join(`
`),_=[d,fp(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Dn?WE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.encodings_pars_fragment,VE("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Jr).join(`
`)),o=pu(o),o=cp(o,t),o=up(o,t),a=pu(a),a=cp(a,t),a=up(a,t),o=hp(o),a=hp(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===Od?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Od?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=x+p+o,y=x+_+a,S=ap(s,35633,w),I=ap(s,35632,y);if(s.attachShader(m,S),s.attachShader(m,I),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m),i.debug.checkShaderErrors){const R=s.getProgramInfoLog(m).trim(),U=s.getShaderInfoLog(S).trim(),W=s.getShaderInfoLog(I).trim();let L=!0,M=!0;if(s.getProgramParameter(m,35714)===!1){L=!1;const C=lp(s,S,"vertex"),O=lp(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,35715)+`

Program Info Log: `+R+`
`+C+`
`+O)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(U===""||W==="")&&(M=!1);M&&(this.diagnostics={runnable:L,programLog:R,vertexShader:{log:U,prefix:p},fragmentShader:{log:W,prefix:_}})}s.deleteShader(S),s.deleteShader(I);let N;this.getUniforms=function(){return N===void 0&&(N=new Fa(s,m)),N};let v;return this.getAttributes=function(){return v===void 0&&(v=qE(s,m)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=BE++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=I,this}let sC=0;class rC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new oC(e),t.set(e,n)),n}}class oC{constructor(e){this.id=sC++,this.code=e,this.usedTimes=0}}function aC(i,e,t,n,s,r,o){const a=new ph,l=new rC,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v,R,U,W,L){const M=W.fog,C=L.geometry,O=v.isMeshStandardMaterial?W.environment:null,B=(v.isMeshStandardMaterial?t:e).get(v.envMap||O),$=!!B&&B.mapping===ml?B.image.height:null,z=g[v.type];v.precision!==null&&(d=s.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const D=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,k=D!==void 0?D.length:0;let Z=0;C.morphAttributes.position!==void 0&&(Z=1),C.morphAttributes.normal!==void 0&&(Z=2),C.morphAttributes.color!==void 0&&(Z=3);let j,ne,he,xe;if(z){const Oe=Rn[z];j=Oe.vertexShader,ne=Oe.fragmentShader}else j=v.vertexShader,ne=v.fragmentShader,l.update(v),he=l.getVertexShaderID(v),xe=l.getFragmentShaderID(v);const X=i.getRenderTarget(),Te=v.alphaTest>0,be=v.clearcoat>0,Me=v.iridescence>0;return{isWebGL2:u,shaderID:z,shaderName:v.type,vertexShader:j,fragmentShader:ne,defines:v.defines,customVertexShaderID:he,customFragmentShaderID:xe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,instancing:L.isInstancedMesh===!0,instancingColor:L.isInstancedMesh===!0&&L.instanceColor!==null,supportsVertexTextures:f,outputEncoding:X===null?i.outputEncoding:X.isXRRenderTarget===!0?X.texture.encoding:Ci,map:!!v.map,matcap:!!v.matcap,envMap:!!B,envMapMode:B&&B.mapping,envMapCubeUVHeight:$,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===bS,tangentSpaceNormalMap:v.normalMapType===fh,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Je,clearcoat:be,clearcoatMap:be&&!!v.clearcoatMap,clearcoatRoughnessMap:be&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:be&&!!v.clearcoatNormalMap,iridescence:Me,iridescenceMap:Me&&!!v.iridescenceMap,iridescenceThicknessMap:Me&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Js,alphaMap:!!v.alphaMap,alphaTest:Te,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!C.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!M,useFog:v.fog===!0,fogExp2:M&&M.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:L.isSkinnedMesh===!0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:Z,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:v.toneMapped?i.toneMapping:Dn,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ln,flipSided:v.side===dn,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const R=[];if(v.shaderID?R.push(v.shaderID):(R.push(v.customVertexShaderID),R.push(v.customFragmentShaderID)),v.defines!==void 0)for(const U in v.defines)R.push(U),R.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(_(R,v),x(R,v),R.push(i.outputEncoding)),R.push(v.customProgramCacheKey),R.join()}function _(v,R){v.push(R.precision),v.push(R.outputEncoding),v.push(R.envMapMode),v.push(R.envMapCubeUVHeight),v.push(R.combine),v.push(R.vertexUvs),v.push(R.fogExp2),v.push(R.sizeAttenuation),v.push(R.morphTargetsCount),v.push(R.morphAttributeCount),v.push(R.numDirLights),v.push(R.numPointLights),v.push(R.numSpotLights),v.push(R.numSpotLightMaps),v.push(R.numHemiLights),v.push(R.numRectAreaLights),v.push(R.numDirLightShadows),v.push(R.numPointLightShadows),v.push(R.numSpotLightShadows),v.push(R.numSpotLightShadowsWithMaps),v.push(R.shadowMapType),v.push(R.toneMapping),v.push(R.numClippingPlanes),v.push(R.numClipIntersection),v.push(R.depthPacking)}function x(v,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.map&&a.enable(4),R.matcap&&a.enable(5),R.envMap&&a.enable(6),R.lightMap&&a.enable(7),R.aoMap&&a.enable(8),R.emissiveMap&&a.enable(9),R.bumpMap&&a.enable(10),R.normalMap&&a.enable(11),R.objectSpaceNormalMap&&a.enable(12),R.tangentSpaceNormalMap&&a.enable(13),R.clearcoat&&a.enable(14),R.clearcoatMap&&a.enable(15),R.clearcoatRoughnessMap&&a.enable(16),R.clearcoatNormalMap&&a.enable(17),R.iridescence&&a.enable(18),R.iridescenceMap&&a.enable(19),R.iridescenceThicknessMap&&a.enable(20),R.displacementMap&&a.enable(21),R.specularMap&&a.enable(22),R.roughnessMap&&a.enable(23),R.metalnessMap&&a.enable(24),R.gradientMap&&a.enable(25),R.alphaMap&&a.enable(26),R.alphaTest&&a.enable(27),R.vertexColors&&a.enable(28),R.vertexAlphas&&a.enable(29),R.vertexUvs&&a.enable(30),R.vertexTangents&&a.enable(31),R.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.physicallyCorrectLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.specularIntensityMap&&a.enable(15),R.specularColorMap&&a.enable(16),R.transmission&&a.enable(17),R.transmissionMap&&a.enable(18),R.thicknessMap&&a.enable(19),R.sheen&&a.enable(20),R.sheenColorMap&&a.enable(21),R.sheenRoughnessMap&&a.enable(22),R.decodeVideoTexture&&a.enable(23),R.opaque&&a.enable(24),v.push(a.mask)}function w(v){const R=g[v.type];let U;if(R){const W=Rn[R];U=t_.clone(W.uniforms)}else U=v.uniforms;return U}function y(v,R){let U;for(let W=0,L=c.length;W<L;W++){const M=c[W];if(M.cacheKey===R){U=M,++U.usedTimes;break}}return U===void 0&&(U=new iC(i,R,v,r),c.push(U)),U}function S(v){if(--v.usedTimes===0){const R=c.indexOf(v);c[R]=c[c.length-1],c.pop(),v.destroy()}}function I(v){l.remove(v)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:y,releaseProgram:S,releaseShaderCache:I,programs:c,dispose:N}}function lC(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function cC(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function dp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function pp(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,f,d,g,m,p){let _=i[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:m,group:p},i[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=d,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=m,_.group=p),e++,_}function a(h,f,d,g,m,p){const _=o(h,f,d,g,m,p);d.transmission>0?n.push(_):d.transparent===!0?s.push(_):t.push(_)}function l(h,f,d,g,m,p){const _=o(h,f,d,g,m,p);d.transmission>0?n.unshift(_):d.transparent===!0?s.unshift(_):t.unshift(_)}function c(h,f){t.length>1&&t.sort(h||cC),n.length>1&&n.sort(f||dp),s.length>1&&s.sort(f||dp)}function u(){for(let h=e,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function uC(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new pp,i.set(n,[o])):s>=r.length?(o=new pp,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function hC(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Le};break;case"SpotLight":t={position:new P,direction:new P,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function fC(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let dC=0;function pC(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function mC(i,e){const t=new hC,n=fC(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new P);const r=new P,o=new Ve,a=new Ve;function l(u,h){let f=0,d=0,g=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let m=0,p=0,_=0,x=0,w=0,y=0,S=0,I=0,N=0,v=0;u.sort(pC);const R=h!==!0?Math.PI:1;for(let W=0,L=u.length;W<L;W++){const M=u[W],C=M.color,O=M.intensity,B=M.distance,$=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)f+=C.r*O*R,d+=C.g*O*R,g+=C.b*O*R;else if(M.isLightProbe)for(let z=0;z<9;z++)s.probe[z].addScaledVector(M.sh.coefficients[z],O);else if(M.isDirectionalLight){const z=t.get(M);if(z.color.copy(M.color).multiplyScalar(M.intensity*R),M.castShadow){const D=M.shadow,k=n.get(M);k.shadowBias=D.bias,k.shadowNormalBias=D.normalBias,k.shadowRadius=D.radius,k.shadowMapSize=D.mapSize,s.directionalShadow[m]=k,s.directionalShadowMap[m]=$,s.directionalShadowMatrix[m]=M.shadow.matrix,y++}s.directional[m]=z,m++}else if(M.isSpotLight){const z=t.get(M);z.position.setFromMatrixPosition(M.matrixWorld),z.color.copy(C).multiplyScalar(O*R),z.distance=B,z.coneCos=Math.cos(M.angle),z.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),z.decay=M.decay,s.spot[_]=z;const D=M.shadow;if(M.map&&(s.spotLightMap[N]=M.map,N++,D.updateMatrices(M),M.castShadow&&v++),s.spotLightMatrix[_]=D.matrix,M.castShadow){const k=n.get(M);k.shadowBias=D.bias,k.shadowNormalBias=D.normalBias,k.shadowRadius=D.radius,k.shadowMapSize=D.mapSize,s.spotShadow[_]=k,s.spotShadowMap[_]=$,I++}_++}else if(M.isRectAreaLight){const z=t.get(M);z.color.copy(C).multiplyScalar(O),z.halfWidth.set(M.width*.5,0,0),z.halfHeight.set(0,M.height*.5,0),s.rectArea[x]=z,x++}else if(M.isPointLight){const z=t.get(M);if(z.color.copy(M.color).multiplyScalar(M.intensity*R),z.distance=M.distance,z.decay=M.decay,M.castShadow){const D=M.shadow,k=n.get(M);k.shadowBias=D.bias,k.shadowNormalBias=D.normalBias,k.shadowRadius=D.radius,k.shadowMapSize=D.mapSize,k.shadowCameraNear=D.camera.near,k.shadowCameraFar=D.camera.far,s.pointShadow[p]=k,s.pointShadowMap[p]=$,s.pointShadowMatrix[p]=M.shadow.matrix,S++}s.point[p]=z,p++}else if(M.isHemisphereLight){const z=t.get(M);z.skyColor.copy(M.color).multiplyScalar(O*R),z.groundColor.copy(M.groundColor).multiplyScalar(O*R),s.hemi[w]=z,w++}}x>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ce.LTC_FLOAT_1,s.rectAreaLTC2=ce.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ce.LTC_HALF_1,s.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=g;const U=s.hash;(U.directionalLength!==m||U.pointLength!==p||U.spotLength!==_||U.rectAreaLength!==x||U.hemiLength!==w||U.numDirectionalShadows!==y||U.numPointShadows!==S||U.numSpotShadows!==I||U.numSpotMaps!==N)&&(s.directional.length=m,s.spot.length=_,s.rectArea.length=x,s.point.length=p,s.hemi.length=w,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=S,s.pointShadowMap.length=S,s.spotShadow.length=I,s.spotShadowMap.length=I,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=S,s.spotLightMatrix.length=I+N-v,s.spotLightMap.length=N,s.numSpotLightShadowsWithMaps=v,U.directionalLength=m,U.pointLength=p,U.spotLength=_,U.rectAreaLength=x,U.hemiLength=w,U.numDirectionalShadows=y,U.numPointShadows=S,U.numSpotShadows=I,U.numSpotMaps=N,s.version=dC++)}function c(u,h){let f=0,d=0,g=0,m=0,p=0;const _=h.matrixWorldInverse;for(let x=0,w=u.length;x<w;x++){const y=u[x];if(y.isDirectionalLight){const S=s.directional[f];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),f++}else if(y.isSpotLight){const S=s.spot[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),g++}else if(y.isRectAreaLight){const S=s.rectArea[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(_),a.identity(),o.copy(y.matrixWorld),o.premultiply(_),a.extractRotation(o),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){const S=s.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(_),d++}else if(y.isHemisphereLight){const S=s.hemi[p];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:s}}function mp(i,e){const t=new mC(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(h){n.push(h)}function a(h){s.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function gC(i,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new mp(i,e),t.set(r,[l])):o>=a.length?(l=new mp(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class _C extends Nn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vC extends Nn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new P,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xC=`uniform sampler2D shadow_pass;
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
}`;function bC(i,e,t){let n=new mh;const s=new se,r=new se,o=new et,a=new _C({depthPacking:xS}),l=new vC,c={},u=t.maxTextureSize,h={0:dn,1:os,2:Ln},f=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:yC,fragmentShader:xC}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new mn;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new It(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zg,this.render=function(y,S,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const N=i.getRenderTarget(),v=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),U=i.state;U.setBlending(xi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);for(let W=0,L=y.length;W<L;W++){const M=y[W],C=M.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",M,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;s.copy(C.mapSize);const O=C.getFrameExtents();if(s.multiply(O),r.copy(C.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/O.x),s.x=r.x*O.x,C.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/O.y),s.y=r.y*O.y,C.mapSize.y=r.y)),C.map===null){const $=this.type!==Zr?{minFilter:Rt,magFilter:Rt}:{};C.map=new Ai(s.x,s.y,$),C.map.texture.name=M.name+".shadowMap",C.camera.updateProjectionMatrix()}i.setRenderTarget(C.map),i.clear();const B=C.getViewportCount();for(let $=0;$<B;$++){const z=C.getViewport($);o.set(r.x*z.x,r.y*z.y,r.x*z.z,r.y*z.w),U.viewport(o),C.updateMatrices(M,$),n=C.getFrustum(),w(S,I,C.camera,M,this.type)}C.isPointLightShadow!==!0&&this.type===Zr&&_(C,I),C.needsUpdate=!1}p.needsUpdate=!1,i.setRenderTarget(N,v,R)};function _(y,S){const I=e.update(m);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Ai(s.x,s.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(S,null,I,f,m,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(S,null,I,d,m,null)}function x(y,S,I,N,v,R){let U=null;const W=I.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(W!==void 0?U=W:U=I.isPointLight===!0?l:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0){const L=U.uuid,M=S.uuid;let C=c[L];C===void 0&&(C={},c[L]=C);let O=C[M];O===void 0&&(O=U.clone(),C[M]=O),U=O}return U.visible=S.visible,U.wireframe=S.wireframe,R===Zr?U.side=S.shadowSide!==null?S.shadowSide:S.side:U.side=S.shadowSide!==null?S.shadowSide:h[S.side],U.alphaMap=S.alphaMap,U.alphaTest=S.alphaTest,U.clipShadows=S.clipShadows,U.clippingPlanes=S.clippingPlanes,U.clipIntersection=S.clipIntersection,U.displacementMap=S.displacementMap,U.displacementScale=S.displacementScale,U.displacementBias=S.displacementBias,U.wireframeLinewidth=S.wireframeLinewidth,U.linewidth=S.linewidth,I.isPointLight===!0&&U.isMeshDistanceMaterial===!0&&(U.referencePosition.setFromMatrixPosition(I.matrixWorld),U.nearDistance=N,U.farDistance=v),U}function w(y,S,I,N,v){if(y.visible===!1)return;if(y.layers.test(S.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&v===Zr)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,y.matrixWorld);const W=e.update(y),L=y.material;if(Array.isArray(L)){const M=W.groups;for(let C=0,O=M.length;C<O;C++){const B=M[C],$=L[B.materialIndex];if($&&$.visible){const z=x(y,$,N,I.near,I.far,v);i.renderBufferDirect(I,null,W,z,y,B)}}}else if(L.visible){const M=x(y,L,N,I.near,I.far,v);i.renderBufferDirect(I,null,W,M,y,null)}}const U=y.children;for(let W=0,L=U.length;W<L;W++)w(U[W],S,I,N,v)}}function SC(i,e,t){const n=t.isWebGL2;function s(){let F=!1;const fe=new et;let Y=null;const ve=new et(0,0,0,0);return{setMask:function(_e){Y!==_e&&!F&&(i.colorMask(_e,_e,_e,_e),Y=_e)},setLocked:function(_e){F=_e},setClear:function(_e,qe,St,gt,ii){ii===!0&&(_e*=gt,qe*=gt,St*=gt),fe.set(_e,qe,St,gt),ve.equals(fe)===!1&&(i.clearColor(_e,qe,St,gt),ve.copy(fe))},reset:function(){F=!1,Y=null,ve.set(-1,0,0,0)}}}function r(){let F=!1,fe=null,Y=null,ve=null;return{setTest:function(_e){_e?Te(2929):be(2929)},setMask:function(_e){fe!==_e&&!F&&(i.depthMask(_e),fe=_e)},setFunc:function(_e){if(Y!==_e){if(_e)switch(_e){case Gb:i.depthFunc(512);break;case Vb:i.depthFunc(519);break;case Wb:i.depthFunc(513);break;case ou:i.depthFunc(515);break;case $b:i.depthFunc(514);break;case jb:i.depthFunc(518);break;case qb:i.depthFunc(516);break;case Xb:i.depthFunc(517);break;default:i.depthFunc(515)}else i.depthFunc(515);Y=_e}},setLocked:function(_e){F=_e},setClear:function(_e){ve!==_e&&(i.clearDepth(_e),ve=_e)},reset:function(){F=!1,fe=null,Y=null,ve=null}}}function o(){let F=!1,fe=null,Y=null,ve=null,_e=null,qe=null,St=null,gt=null,ii=null;return{setTest:function(ft){F||(ft?Te(2960):be(2960))},setMask:function(ft){fe!==ft&&!F&&(i.stencilMask(ft),fe=ft)},setFunc:function(ft,kn,on){(Y!==ft||ve!==kn||_e!==on)&&(i.stencilFunc(ft,kn,on),Y=ft,ve=kn,_e=on)},setOp:function(ft,kn,on){(qe!==ft||St!==kn||gt!==on)&&(i.stencilOp(ft,kn,on),qe=ft,St=kn,gt=on)},setLocked:function(ft){F=ft},setClear:function(ft){ii!==ft&&(i.clearStencil(ft),ii=ft)},reset:function(){F=!1,fe=null,Y=null,ve=null,_e=null,qe=null,St=null,gt=null,ii=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,m=[],p=null,_=!1,x=null,w=null,y=null,S=null,I=null,N=null,v=null,R=!1,U=null,W=null,L=null,M=null,C=null;const O=i.getParameter(35661);let B=!1,$=0;const z=i.getParameter(7938);z.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(z)[1]),B=$>=1):z.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),B=$>=2);let D=null,k={};const Z=i.getParameter(3088),j=i.getParameter(2978),ne=new et().fromArray(Z),he=new et().fromArray(j);function xe(F,fe,Y){const ve=new Uint8Array(4),_e=i.createTexture();i.bindTexture(F,_e),i.texParameteri(F,10241,9728),i.texParameteri(F,10240,9728);for(let qe=0;qe<Y;qe++)i.texImage2D(fe+qe,0,6408,1,1,0,6408,5121,ve);return _e}const X={};X[3553]=xe(3553,3553,1),X[34067]=xe(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Te(2929),l.setFunc(ou),ue(!1),Pe(rd),Te(2884),oe(xi);function Te(F){f[F]!==!0&&(i.enable(F),f[F]=!0)}function be(F){f[F]!==!1&&(i.disable(F),f[F]=!1)}function Me(F,fe){return d[F]!==fe?(i.bindFramebuffer(F,fe),d[F]=fe,n&&(F===36009&&(d[36160]=fe),F===36160&&(d[36009]=fe)),!0):!1}function de(F,fe){let Y=m,ve=!1;if(F)if(Y=g.get(fe),Y===void 0&&(Y=[],g.set(fe,Y)),F.isWebGLMultipleRenderTargets){const _e=F.texture;if(Y.length!==_e.length||Y[0]!==36064){for(let qe=0,St=_e.length;qe<St;qe++)Y[qe]=36064+qe;Y.length=_e.length,ve=!0}}else Y[0]!==36064&&(Y[0]=36064,ve=!0);else Y[0]!==1029&&(Y[0]=1029,ve=!0);ve&&(t.isWebGL2?i.drawBuffers(Y):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Y))}function Oe(F){return p!==F?(i.useProgram(F),p=F,!0):!1}const ee={[Vs]:32774,[Lb]:32778,[Pb]:32779};if(n)ee[cd]=32775,ee[ud]=32776;else{const F=e.get("EXT_blend_minmax");F!==null&&(ee[cd]=F.MIN_EXT,ee[ud]=F.MAX_EXT)}const J={[Db]:0,[Nb]:1,[Ob]:768,[Bg]:770,[Hb]:776,[zb]:774,[kb]:772,[Fb]:769,[Hg]:771,[Bb]:775,[Ub]:773};function oe(F,fe,Y,ve,_e,qe,St,gt){if(F===xi){_===!0&&(be(3042),_=!1);return}if(_===!1&&(Te(3042),_=!0),F!==Ib){if(F!==x||gt!==R){if((w!==Vs||I!==Vs)&&(i.blendEquation(32774),w=Vs,I=Vs),gt)switch(F){case Js:i.blendFuncSeparate(1,771,1,771);break;case od:i.blendFunc(1,1);break;case ad:i.blendFuncSeparate(0,769,0,1);break;case ld:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Js:i.blendFuncSeparate(770,771,1,771);break;case od:i.blendFunc(770,1);break;case ad:i.blendFuncSeparate(0,769,0,1);break;case ld:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,S=null,N=null,v=null,x=F,R=gt}return}_e=_e||fe,qe=qe||Y,St=St||ve,(fe!==w||_e!==I)&&(i.blendEquationSeparate(ee[fe],ee[_e]),w=fe,I=_e),(Y!==y||ve!==S||qe!==N||St!==v)&&(i.blendFuncSeparate(J[Y],J[ve],J[qe],J[St]),y=Y,S=ve,N=qe,v=St),x=F,R=null}function ye(F,fe){F.side===Ln?be(2884):Te(2884);let Y=F.side===dn;fe&&(Y=!Y),ue(Y),F.blending===Js&&F.transparent===!1?oe(xi):oe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);const ve=F.stencilWrite;c.setTest(ve),ve&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Se(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Te(32926):be(32926)}function ue(F){U!==F&&(F?i.frontFace(2304):i.frontFace(2305),U=F)}function Pe(F){F!==Cb?(Te(2884),F!==W&&(F===rd?i.cullFace(1029):F===Ab?i.cullFace(1028):i.cullFace(1032))):be(2884),W=F}function Ee(F){F!==L&&(B&&i.lineWidth(F),L=F)}function Se(F,fe,Y){F?(Te(32823),(M!==fe||C!==Y)&&(i.polygonOffset(fe,Y),M=fe,C=Y)):be(32823)}function tt(F){F?Te(3089):be(3089)}function Xe(F){F===void 0&&(F=33984+O-1),D!==F&&(i.activeTexture(F),D=F)}function A(F,fe){D===null&&Xe();let Y=k[D];Y===void 0&&(Y={type:void 0,texture:void 0},k[D]=Y),(Y.type!==F||Y.texture!==fe)&&(i.bindTexture(F,fe||X[F]),Y.type=F,Y.texture=fe)}function b(){const F=k[D];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function T(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function te(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(F){ne.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),ne.copy(F))}function me(F){he.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),he.copy(F))}function Re(F,fe){let Y=h.get(fe);Y===void 0&&(Y=new WeakMap,h.set(fe,Y));let ve=Y.get(F);ve===void 0&&(ve=i.getUniformBlockIndex(fe,F.name),Y.set(F,ve))}function We(F,fe){const ve=h.get(fe).get(F);u.get(F)!==ve&&(i.uniformBlockBinding(fe,ve,F.__bindingPointIndex),u.set(F,ve))}function lt(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},D=null,k={},d={},g=new WeakMap,m=[],p=null,_=!1,x=null,w=null,y=null,S=null,I=null,N=null,v=null,R=!1,U=null,W=null,L=null,M=null,C=null,ne.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Te,disable:be,bindFramebuffer:Me,drawBuffers:de,useProgram:Oe,setBlending:oe,setMaterial:ye,setFlipSided:ue,setCullFace:Pe,setLineWidth:Ee,setPolygonOffset:Se,setScissorTest:tt,activeTexture:Xe,bindTexture:A,unbindTexture:b,compressedTexImage2D:q,texImage2D:te,texImage3D:le,updateUBOMapping:Re,uniformBlockBinding:We,texStorage2D:Ce,texStorage3D:T,texSubImage2D:ie,texSubImage3D:ae,compressedTexSubImage2D:pe,scissor:ge,viewport:me,reset:lt}}function MC(i,e,t,n,s,r,o){const a=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,h=s.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,b){return _?new OffscreenCanvas(A,b):_o("canvas")}function w(A,b,q,ie){let ae=1;if((A.width>ie||A.height>ie)&&(ae=ie/Math.max(A.width,A.height)),ae<1||b===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const pe=b?Za:Math.floor,Ce=pe(ae*A.width),T=pe(ae*A.height);m===void 0&&(m=x(Ce,T));const te=q?x(Ce,T):m;return te.width=Ce,te.height=T,te.getContext("2d").drawImage(A,0,0,Ce,T),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Ce+"x"+T+")."),te}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function y(A){return du(A.width)&&du(A.height)}function S(A){return a?!1:A.wrapS!==cn||A.wrapT!==cn||A.minFilter!==Rt&&A.minFilter!==Wt}function I(A,b){return A.generateMipmaps&&b&&A.minFilter!==Rt&&A.minFilter!==Wt}function N(A){i.generateMipmap(A)}function v(A,b,q,ie,ae=!1){if(a===!1)return b;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let pe=b;return b===6403&&(q===5126&&(pe=33326),q===5131&&(pe=33325),q===5121&&(pe=33321)),b===33319&&(q===5126&&(pe=33328),q===5131&&(pe=33327),q===5121&&(pe=33323)),b===6408&&(q===5126&&(pe=34836),q===5131&&(pe=34842),q===5121&&(pe=ie===Je&&ae===!1?35907:32856),q===32819&&(pe=32854),q===32820&&(pe=32855)),(pe===33325||pe===33326||pe===33327||pe===33328||pe===34842||pe===34836)&&e.get("EXT_color_buffer_float"),pe}function R(A,b,q){return I(A,q)===!0||A.isFramebufferTexture&&A.minFilter!==Rt&&A.minFilter!==Wt?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function U(A){return A===Rt||A===cu||A===uu?9728:9729}function W(A){const b=A.target;b.removeEventListener("dispose",W),M(b),b.isVideoTexture&&g.delete(b)}function L(A){const b=A.target;b.removeEventListener("dispose",L),O(b)}function M(A){const b=n.get(A);if(b.__webglInit===void 0)return;const q=A.source,ie=p.get(q);if(ie){const ae=ie[b.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&C(A),Object.keys(ie).length===0&&p.delete(q)}n.remove(A)}function C(A){const b=n.get(A);i.deleteTexture(b.__webglTexture);const q=A.source,ie=p.get(q);delete ie[b.__cacheKey],o.memory.textures--}function O(A){const b=A.texture,q=n.get(A),ie=n.get(b);if(ie.__webglTexture!==void 0&&(i.deleteTexture(ie.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++)i.deleteFramebuffer(q.__webglFramebuffer[ae]),q.__webglDepthbuffer&&i.deleteRenderbuffer(q.__webglDepthbuffer[ae]);else{if(i.deleteFramebuffer(q.__webglFramebuffer),q.__webglDepthbuffer&&i.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&i.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let ae=0;ae<q.__webglColorRenderbuffer.length;ae++)q.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(q.__webglColorRenderbuffer[ae]);q.__webglDepthRenderbuffer&&i.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ae=0,pe=b.length;ae<pe;ae++){const Ce=n.get(b[ae]);Ce.__webglTexture&&(i.deleteTexture(Ce.__webglTexture),o.memory.textures--),n.remove(b[ae])}n.remove(b),n.remove(A)}let B=0;function $(){B=0}function z(){const A=B;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),B+=1,A}function D(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.encoding),b.join()}function k(A,b){const q=n.get(A);if(A.isVideoTexture&&tt(A),A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){const ie=A.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(q,A,b);return}}t.activeTexture(33984+b),t.bindTexture(3553,q.__webglTexture)}function Z(A,b){const q=n.get(A);if(A.version>0&&q.__version!==A.version){be(q,A,b);return}t.activeTexture(33984+b),t.bindTexture(35866,q.__webglTexture)}function j(A,b){const q=n.get(A);if(A.version>0&&q.__version!==A.version){be(q,A,b);return}t.activeTexture(33984+b),t.bindTexture(32879,q.__webglTexture)}function ne(A,b){const q=n.get(A);if(A.version>0&&q.__version!==A.version){Me(q,A,b);return}t.activeTexture(33984+b),t.bindTexture(34067,q.__webglTexture)}const he={[lr]:10497,[cn]:33071,[Ka]:33648},xe={[Rt]:9728,[cu]:9984,[uu]:9986,[Wt]:9729,[Wg]:9985,[Sr]:9987};function X(A,b,q){if(q?(i.texParameteri(A,10242,he[b.wrapS]),i.texParameteri(A,10243,he[b.wrapT]),(A===32879||A===35866)&&i.texParameteri(A,32882,he[b.wrapR]),i.texParameteri(A,10240,xe[b.magFilter]),i.texParameteri(A,10241,xe[b.minFilter])):(i.texParameteri(A,10242,33071),i.texParameteri(A,10243,33071),(A===32879||A===35866)&&i.texParameteri(A,32882,33071),(b.wrapS!==cn||b.wrapT!==cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,10240,U(b.magFilter)),i.texParameteri(A,10241,U(b.minFilter)),b.minFilter!==Rt&&b.minFilter!==Wt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(b.type===vi&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===cr&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(i.texParameterf(A,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function Te(A,b){let q=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",W));const ie=b.source;let ae=p.get(ie);ae===void 0&&(ae={},p.set(ie,ae));const pe=D(b);if(pe!==A.__cacheKey){ae[pe]===void 0&&(ae[pe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ae[pe].usedTimes++;const Ce=ae[A.__cacheKey];Ce!==void 0&&(ae[A.__cacheKey].usedTimes--,Ce.usedTimes===0&&C(b)),A.__cacheKey=pe,A.__webglTexture=ae[pe].texture}return q}function be(A,b,q){let ie=3553;b.isDataArrayTexture&&(ie=35866),b.isData3DTexture&&(ie=32879);const ae=Te(A,b),pe=b.source;if(t.activeTexture(33984+q),t.bindTexture(ie,A.__webglTexture),pe.version!==pe.__currentVersion||ae===!0){i.pixelStorei(37440,b.flipY),i.pixelStorei(37441,b.premultiplyAlpha),i.pixelStorei(3317,b.unpackAlignment),i.pixelStorei(37443,0);const Ce=S(b)&&y(b.image)===!1;let T=w(b.image,Ce,!1,u);T=Xe(b,T);const te=y(T)||a,le=r.convert(b.format,b.encoding);let ge=r.convert(b.type),me=v(b.internalFormat,le,ge,b.encoding,b.isVideoTexture);X(ie,b,te);let Re;const We=b.mipmaps,lt=a&&b.isVideoTexture!==!0,F=pe.__currentVersion===void 0||ae===!0,fe=R(b,T,te);if(b.isDepthTexture)me=6402,a?b.type===vi?me=36012:b.type===Vi?me=33190:b.type===Qs?me=35056:me=33189:b.type===vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Ki&&me===6402&&b.type!==$g&&b.type!==Vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Vi,ge=r.convert(b.type)),b.format===ur&&me===6402&&(me=34041,b.type!==Qs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Qs,ge=r.convert(b.type))),F&&(lt?t.texStorage2D(3553,1,me,T.width,T.height):t.texImage2D(3553,0,me,T.width,T.height,0,le,ge,null));else if(b.isDataTexture)if(We.length>0&&te){lt&&F&&t.texStorage2D(3553,fe,me,We[0].width,We[0].height);for(let Y=0,ve=We.length;Y<ve;Y++)Re=We[Y],lt?t.texSubImage2D(3553,Y,0,0,Re.width,Re.height,le,ge,Re.data):t.texImage2D(3553,Y,me,Re.width,Re.height,0,le,ge,Re.data);b.generateMipmaps=!1}else lt?(F&&t.texStorage2D(3553,fe,me,T.width,T.height),t.texSubImage2D(3553,0,0,0,T.width,T.height,le,ge,T.data)):t.texImage2D(3553,0,me,T.width,T.height,0,le,ge,T.data);else if(b.isCompressedTexture){lt&&F&&t.texStorage2D(3553,fe,me,We[0].width,We[0].height);for(let Y=0,ve=We.length;Y<ve;Y++)Re=We[Y],b.format!==bn?le!==null?lt?t.compressedTexSubImage2D(3553,Y,0,0,Re.width,Re.height,le,Re.data):t.compressedTexImage2D(3553,Y,me,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?t.texSubImage2D(3553,Y,0,0,Re.width,Re.height,le,ge,Re.data):t.texImage2D(3553,Y,me,Re.width,Re.height,0,le,ge,Re.data)}else if(b.isDataArrayTexture)lt?(F&&t.texStorage3D(35866,fe,me,T.width,T.height,T.depth),t.texSubImage3D(35866,0,0,0,0,T.width,T.height,T.depth,le,ge,T.data)):t.texImage3D(35866,0,me,T.width,T.height,T.depth,0,le,ge,T.data);else if(b.isData3DTexture)lt?(F&&t.texStorage3D(32879,fe,me,T.width,T.height,T.depth),t.texSubImage3D(32879,0,0,0,0,T.width,T.height,T.depth,le,ge,T.data)):t.texImage3D(32879,0,me,T.width,T.height,T.depth,0,le,ge,T.data);else if(b.isFramebufferTexture){if(F)if(lt)t.texStorage2D(3553,fe,me,T.width,T.height);else{let Y=T.width,ve=T.height;for(let _e=0;_e<fe;_e++)t.texImage2D(3553,_e,me,Y,ve,0,le,ge,null),Y>>=1,ve>>=1}}else if(We.length>0&&te){lt&&F&&t.texStorage2D(3553,fe,me,We[0].width,We[0].height);for(let Y=0,ve=We.length;Y<ve;Y++)Re=We[Y],lt?t.texSubImage2D(3553,Y,0,0,le,ge,Re):t.texImage2D(3553,Y,me,le,ge,Re);b.generateMipmaps=!1}else lt?(F&&t.texStorage2D(3553,fe,me,T.width,T.height),t.texSubImage2D(3553,0,0,0,le,ge,T)):t.texImage2D(3553,0,me,le,ge,T);I(b,te)&&N(ie),pe.__currentVersion=pe.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Me(A,b,q){if(b.image.length!==6)return;const ie=Te(A,b),ae=b.source;if(t.activeTexture(33984+q),t.bindTexture(34067,A.__webglTexture),ae.version!==ae.__currentVersion||ie===!0){i.pixelStorei(37440,b.flipY),i.pixelStorei(37441,b.premultiplyAlpha),i.pixelStorei(3317,b.unpackAlignment),i.pixelStorei(37443,0);const pe=b.isCompressedTexture||b.image[0].isCompressedTexture,Ce=b.image[0]&&b.image[0].isDataTexture,T=[];for(let Y=0;Y<6;Y++)!pe&&!Ce?T[Y]=w(b.image[Y],!1,!0,c):T[Y]=Ce?b.image[Y].image:b.image[Y],T[Y]=Xe(b,T[Y]);const te=T[0],le=y(te)||a,ge=r.convert(b.format,b.encoding),me=r.convert(b.type),Re=v(b.internalFormat,ge,me,b.encoding),We=a&&b.isVideoTexture!==!0,lt=ae.__currentVersion===void 0||ie===!0;let F=R(b,te,le);X(34067,b,le);let fe;if(pe){We&&lt&&t.texStorage2D(34067,F,Re,te.width,te.height);for(let Y=0;Y<6;Y++){fe=T[Y].mipmaps;for(let ve=0;ve<fe.length;ve++){const _e=fe[ve];b.format!==bn?ge!==null?We?t.compressedTexSubImage2D(34069+Y,ve,0,0,_e.width,_e.height,ge,_e.data):t.compressedTexImage2D(34069+Y,ve,Re,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?t.texSubImage2D(34069+Y,ve,0,0,_e.width,_e.height,ge,me,_e.data):t.texImage2D(34069+Y,ve,Re,_e.width,_e.height,0,ge,me,_e.data)}}}else{fe=b.mipmaps,We&&lt&&(fe.length>0&&F++,t.texStorage2D(34067,F,Re,T[0].width,T[0].height));for(let Y=0;Y<6;Y++)if(Ce){We?t.texSubImage2D(34069+Y,0,0,0,T[Y].width,T[Y].height,ge,me,T[Y].data):t.texImage2D(34069+Y,0,Re,T[Y].width,T[Y].height,0,ge,me,T[Y].data);for(let ve=0;ve<fe.length;ve++){const qe=fe[ve].image[Y].image;We?t.texSubImage2D(34069+Y,ve+1,0,0,qe.width,qe.height,ge,me,qe.data):t.texImage2D(34069+Y,ve+1,Re,qe.width,qe.height,0,ge,me,qe.data)}}else{We?t.texSubImage2D(34069+Y,0,0,0,ge,me,T[Y]):t.texImage2D(34069+Y,0,Re,ge,me,T[Y]);for(let ve=0;ve<fe.length;ve++){const _e=fe[ve];We?t.texSubImage2D(34069+Y,ve+1,0,0,ge,me,_e.image[Y]):t.texImage2D(34069+Y,ve+1,Re,ge,me,_e.image[Y])}}}I(b,le)&&N(34067),ae.__currentVersion=ae.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function de(A,b,q,ie,ae){const pe=r.convert(q.format,q.encoding),Ce=r.convert(q.type),T=v(q.internalFormat,pe,Ce,q.encoding);n.get(b).__hasExternalTextures||(ae===32879||ae===35866?t.texImage3D(ae,0,T,b.width,b.height,b.depth,0,pe,Ce,null):t.texImage2D(ae,0,T,b.width,b.height,0,pe,Ce,null)),t.bindFramebuffer(36160,A),Se(b)?f.framebufferTexture2DMultisampleEXT(36160,ie,ae,n.get(q).__webglTexture,0,Ee(b)):i.framebufferTexture2D(36160,ie,ae,n.get(q).__webglTexture,0),t.bindFramebuffer(36160,null)}function Oe(A,b,q){if(i.bindRenderbuffer(36161,A),b.depthBuffer&&!b.stencilBuffer){let ie=33189;if(q||Se(b)){const ae=b.depthTexture;ae&&ae.isDepthTexture&&(ae.type===vi?ie=36012:ae.type===Vi&&(ie=33190));const pe=Ee(b);Se(b)?f.renderbufferStorageMultisampleEXT(36161,pe,ie,b.width,b.height):i.renderbufferStorageMultisample(36161,pe,ie,b.width,b.height)}else i.renderbufferStorage(36161,ie,b.width,b.height);i.framebufferRenderbuffer(36160,36096,36161,A)}else if(b.depthBuffer&&b.stencilBuffer){const ie=Ee(b);q&&Se(b)===!1?i.renderbufferStorageMultisample(36161,ie,35056,b.width,b.height):Se(b)?f.renderbufferStorageMultisampleEXT(36161,ie,35056,b.width,b.height):i.renderbufferStorage(36161,34041,b.width,b.height),i.framebufferRenderbuffer(36160,33306,36161,A)}else{const ie=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ae=0;ae<ie.length;ae++){const pe=ie[ae],Ce=r.convert(pe.format,pe.encoding),T=r.convert(pe.type),te=v(pe.internalFormat,Ce,T,pe.encoding),le=Ee(b);q&&Se(b)===!1?i.renderbufferStorageMultisample(36161,le,te,b.width,b.height):Se(b)?f.renderbufferStorageMultisampleEXT(36161,le,te,b.width,b.height):i.renderbufferStorage(36161,te,b.width,b.height)}}i.bindRenderbuffer(36161,null)}function ee(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),k(b.depthTexture,0);const ie=n.get(b.depthTexture).__webglTexture,ae=Ee(b);if(b.depthTexture.format===Ki)Se(b)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ie,0,ae):i.framebufferTexture2D(36160,36096,3553,ie,0);else if(b.depthTexture.format===ur)Se(b)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ie,0,ae):i.framebufferTexture2D(36160,33306,3553,ie,0);else throw new Error("Unknown depthTexture format")}function J(A){const b=n.get(A),q=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");ee(b.__webglFramebuffer,A)}else if(q){b.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(36160,b.__webglFramebuffer[ie]),b.__webglDepthbuffer[ie]=i.createRenderbuffer(),Oe(b.__webglDepthbuffer[ie],A,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=i.createRenderbuffer(),Oe(b.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function oe(A,b,q){const ie=n.get(A);b!==void 0&&de(ie.__webglFramebuffer,A,A.texture,36064,3553),q!==void 0&&J(A)}function ye(A){const b=A.texture,q=n.get(A),ie=n.get(b);A.addEventListener("dispose",L),A.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=b.version,o.memory.textures++);const ae=A.isWebGLCubeRenderTarget===!0,pe=A.isWebGLMultipleRenderTargets===!0,Ce=y(A)||a;if(ae){q.__webglFramebuffer=[];for(let T=0;T<6;T++)q.__webglFramebuffer[T]=i.createFramebuffer()}else{if(q.__webglFramebuffer=i.createFramebuffer(),pe)if(s.drawBuffers){const T=A.texture;for(let te=0,le=T.length;te<le;te++){const ge=n.get(T[te]);ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Se(A)===!1){const T=pe?b:[b];q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,q.__webglMultisampledFramebuffer);for(let te=0;te<T.length;te++){const le=T[te];q.__webglColorRenderbuffer[te]=i.createRenderbuffer(),i.bindRenderbuffer(36161,q.__webglColorRenderbuffer[te]);const ge=r.convert(le.format,le.encoding),me=r.convert(le.type),Re=v(le.internalFormat,ge,me,le.encoding),We=Ee(A);i.renderbufferStorageMultisample(36161,We,Re,A.width,A.height),i.framebufferRenderbuffer(36160,36064+te,36161,q.__webglColorRenderbuffer[te])}i.bindRenderbuffer(36161,null),A.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Oe(q.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(ae){t.bindTexture(34067,ie.__webglTexture),X(34067,b,Ce);for(let T=0;T<6;T++)de(q.__webglFramebuffer[T],A,b,36064,34069+T);I(b,Ce)&&N(34067),t.unbindTexture()}else if(pe){const T=A.texture;for(let te=0,le=T.length;te<le;te++){const ge=T[te],me=n.get(ge);t.bindTexture(3553,me.__webglTexture),X(3553,ge,Ce),de(q.__webglFramebuffer,A,ge,36064+te,3553),I(ge,Ce)&&N(3553)}t.unbindTexture()}else{let T=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?T=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(T,ie.__webglTexture),X(T,b,Ce),de(q.__webglFramebuffer,A,b,36064,T),I(b,Ce)&&N(T),t.unbindTexture()}A.depthBuffer&&J(A)}function ue(A){const b=y(A)||a,q=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ie=0,ae=q.length;ie<ae;ie++){const pe=q[ie];if(I(pe,b)){const Ce=A.isWebGLCubeRenderTarget?34067:3553,T=n.get(pe).__webglTexture;t.bindTexture(Ce,T),N(Ce),t.unbindTexture()}}}function Pe(A){if(a&&A.samples>0&&Se(A)===!1){const b=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],q=A.width,ie=A.height;let ae=16384;const pe=[],Ce=A.stencilBuffer?33306:36096,T=n.get(A),te=A.isWebGLMultipleRenderTargets===!0;if(te)for(let le=0;le<b.length;le++)t.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+le,36161,null),t.bindFramebuffer(36160,T.__webglFramebuffer),i.framebufferTexture2D(36009,36064+le,3553,null,0);t.bindFramebuffer(36008,T.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,T.__webglFramebuffer);for(let le=0;le<b.length;le++){pe.push(36064+le),A.depthBuffer&&pe.push(Ce);const ge=T.__ignoreDepthValues!==void 0?T.__ignoreDepthValues:!1;if(ge===!1&&(A.depthBuffer&&(ae|=256),A.stencilBuffer&&(ae|=1024)),te&&i.framebufferRenderbuffer(36008,36064,36161,T.__webglColorRenderbuffer[le]),ge===!0&&(i.invalidateFramebuffer(36008,[Ce]),i.invalidateFramebuffer(36009,[Ce])),te){const me=n.get(b[le]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,me,0)}i.blitFramebuffer(0,0,q,ie,0,0,q,ie,ae,9728),d&&i.invalidateFramebuffer(36008,pe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),te)for(let le=0;le<b.length;le++){t.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+le,36161,T.__webglColorRenderbuffer[le]);const ge=n.get(b[le]).__webglTexture;t.bindFramebuffer(36160,T.__webglFramebuffer),i.framebufferTexture2D(36009,36064+le,3553,ge,0)}t.bindFramebuffer(36009,T.__webglMultisampledFramebuffer)}}function Ee(A){return Math.min(h,A.samples)}function Se(A){const b=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function tt(A){const b=o.render.frame;g.get(A)!==b&&(g.set(A,b),A.update())}function Xe(A,b){const q=A.encoding,ie=A.format,ae=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===fu||q!==Ci&&(q===Je?a===!1?e.has("EXT_sRGB")===!0&&ie===bn?(A.format=fu,A.minFilter=Wt,A.generateMipmaps=!1):b=Kg.sRGBToLinear(b):(ie!==bn||ae!==as)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",q)),b}this.allocateTextureUnit=z,this.resetTextureUnits=$,this.setTexture2D=k,this.setTexture2DArray=Z,this.setTexture3D=j,this.setTextureCube=ne,this.rebindTextures=oe,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Se}function wC(i,e,t){const n=t.isWebGL2;function s(r,o=null){let a;if(r===as)return 5121;if(r===rS)return 32819;if(r===oS)return 32820;if(r===nS)return 5120;if(r===iS)return 5122;if(r===$g)return 5123;if(r===sS)return 5124;if(r===Vi)return 5125;if(r===vi)return 5126;if(r===cr)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===aS)return 6406;if(r===bn)return 6408;if(r===cS)return 6409;if(r===uS)return 6410;if(r===Ki)return 6402;if(r===ur)return 34041;if(r===hS)return 6403;if(r===lS)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===fu)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===fS)return 36244;if(r===dS)return 33319;if(r===pS)return 33320;if(r===mS)return 36249;if(r===Bl||r===Hl||r===Gl||r===Vl)if(o===Je)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Bl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Hl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Gl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Vl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Bl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Hl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Gl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Vl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===hd||r===fd||r===dd||r===pd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===hd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===fd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===dd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===pd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===gS)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===md||r===gd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===md)return o===Je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===gd)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===_d||r===vd||r===yd||r===xd||r===bd||r===Sd||r===Md||r===wd||r===Td||r===Ed||r===Cd||r===Ad||r===Rd||r===Id)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===_d)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===vd)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===yd)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===xd)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===bd)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Sd)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Md)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===wd)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Td)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ed)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Cd)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ad)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Rd)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Id)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ld)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ld)return o===Je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Qs?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class TC extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $i extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const EC={type:"move"};class gc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,n);if(c.joints[m.jointName]===void 0){const x=new $i;x.matrixAutoUpdate=!1,x.visible=!1,c.joints[m.jointName]=x,c.add(x)}const _=c.joints[m.jointName];p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(EC)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}}class CC extends Ht{constructor(e,t,n,s,r,o,a,l,c,u){if(u=u!==void 0?u:Ki,u!==Ki&&u!==ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ki&&(n=Vi),n===void 0&&u===ur&&(n=Qs),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Rt,this.minFilter=l!==void 0?l:Rt,this.flipY=!1,this.generateMipmaps=!1}}class AC extends _s{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=null,c=null,u=null,h=null,f=null,d=null;const g=t.getContextAttributes();let m=null,p=null;const _=[],x=[],w=new Nt;w.layers.enable(1),w.viewport=new et;const y=new Nt;y.layers.enable(2),y.viewport=new et;const S=[w,y],I=new TC;I.layers.enable(1),I.layers.enable(2);let N=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let k=_[D];return k===void 0&&(k=new gc,_[D]=k),k.getTargetRaySpace()},this.getControllerGrip=function(D){let k=_[D];return k===void 0&&(k=new gc,_[D]=k),k.getGripSpace()},this.getHand=function(D){let k=_[D];return k===void 0&&(k=new gc,_[D]=k),k.getHandSpace()};function R(D){const k=x.indexOf(D.inputSource);if(k===-1)return;const Z=_[k];Z!==void 0&&Z.dispatchEvent({type:D.type,data:D.inputSource})}function U(){s.removeEventListener("select",R),s.removeEventListener("selectstart",R),s.removeEventListener("selectend",R),s.removeEventListener("squeeze",R),s.removeEventListener("squeezestart",R),s.removeEventListener("squeezeend",R),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",W);for(let D=0;D<_.length;D++){const k=x[D];k!==null&&(x[D]=null,_[D].disconnect(k))}N=null,v=null,e.setRenderTarget(m),f=null,h=null,u=null,s=null,p=null,z.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){r=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(D){l=D},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return d},this.getSession=function(){return s},this.setSession=async function(D){if(s=D,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",R),s.addEventListener("selectstart",R),s.addEventListener("selectend",R),s.addEventListener("squeeze",R),s.addEventListener("squeezestart",R),s.addEventListener("squeezeend",R),s.addEventListener("end",U),s.addEventListener("inputsourceschange",W),g.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,k),s.updateRenderState({baseLayer:f}),p=new Ai(f.framebufferWidth,f.framebufferHeight,{format:bn,type:as,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let k=null,Z=null,j=null;g.depth&&(j=g.stencil?35056:33190,k=g.stencil?ur:Ki,Z=g.stencil?Qs:Vi);const ne={colorFormat:32856,depthFormat:j,scaleFactor:r};u=new XRWebGLBinding(s,t),h=u.createProjectionLayer(ne),s.updateRenderState({layers:[h]}),p=new Ai(h.textureWidth,h.textureHeight,{format:bn,type:as,depthTexture:new CC(h.textureWidth,h.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const he=e.properties.get(p);he.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await s.requestReferenceSpace(a),z.setContext(s),z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function W(D){for(let k=0;k<D.removed.length;k++){const Z=D.removed[k],j=x.indexOf(Z);j>=0&&(x[j]=null,_[j].dispatchEvent({type:"disconnected",data:Z}))}for(let k=0;k<D.added.length;k++){const Z=D.added[k];let j=x.indexOf(Z);if(j===-1){for(let he=0;he<_.length;he++)if(he>=x.length){x.push(Z),j=he;break}else if(x[he]===null){x[he]=Z,j=he;break}if(j===-1)break}const ne=_[j];ne&&ne.dispatchEvent({type:"connected",data:Z})}}const L=new P,M=new P;function C(D,k,Z){L.setFromMatrixPosition(k.matrixWorld),M.setFromMatrixPosition(Z.matrixWorld);const j=L.distanceTo(M),ne=k.projectionMatrix.elements,he=Z.projectionMatrix.elements,xe=ne[14]/(ne[10]-1),X=ne[14]/(ne[10]+1),Te=(ne[9]+1)/ne[5],be=(ne[9]-1)/ne[5],Me=(ne[8]-1)/ne[0],de=(he[8]+1)/he[0],Oe=xe*Me,ee=xe*de,J=j/(-Me+de),oe=J*-Me;k.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(oe),D.translateZ(J),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const ye=xe+J,ue=X+J,Pe=Oe-oe,Ee=ee+(j-oe),Se=Te*X/ue*ye,tt=be*X/ue*ye;D.projectionMatrix.makePerspective(Pe,Ee,Se,tt,ye,ue)}function O(D,k){k===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(k.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(s===null)return;I.near=y.near=w.near=D.near,I.far=y.far=w.far=D.far,(N!==I.near||v!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),N=I.near,v=I.far);const k=D.parent,Z=I.cameras;O(I,k);for(let ne=0;ne<Z.length;ne++)O(Z[ne],k);I.matrixWorld.decompose(I.position,I.quaternion,I.scale),D.matrix.copy(I.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale);const j=D.children;for(let ne=0,he=j.length;ne<he;ne++)j[ne].updateMatrixWorld(!0);Z.length===2?C(I,w,y):I.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return I},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(D){h!==null&&(h.fixedFoveation=D),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=D)};let B=null;function $(D,k){if(c=k.getViewerPose(l||o),d=k,c!==null){const Z=c.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let j=!1;Z.length!==I.cameras.length&&(I.cameras.length=0,j=!0);for(let ne=0;ne<Z.length;ne++){const he=Z[ne];let xe=null;if(f!==null)xe=f.getViewport(he);else{const Te=u.getViewSubImage(h,he);xe=Te.viewport,ne===0&&(e.setRenderTargetTextures(p,Te.colorTexture,h.ignoreDepthValues?void 0:Te.depthStencilTexture),e.setRenderTarget(p))}let X=S[ne];X===void 0&&(X=new Nt,X.layers.enable(ne),X.viewport=new et,S[ne]=X),X.matrix.fromArray(he.transform.matrix),X.projectionMatrix.fromArray(he.projectionMatrix),X.viewport.set(xe.x,xe.y,xe.width,xe.height),ne===0&&I.matrix.copy(X.matrix),j===!0&&I.cameras.push(X)}}for(let Z=0;Z<_.length;Z++){const j=x[Z],ne=_[Z];j!==null&&ne!==void 0&&ne.update(j,k,l||o)}B&&B(D,k),d=null}const z=new s_;z.setAnimationLoop($),this.setAnimationLoop=function(D){B=D},this.dispose=function(){}}}function RC(i,e){function t(m,p){m.fogColor.value.copy(p.color),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,_,x,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),c(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,w)):p.isMeshMatcapMaterial?(s(m,p),d(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?a(m,p,_,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===dn&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===dn&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const y=i.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let x;p.map?x=p.map:p.specularMap?x=p.specularMap:p.displacementMap?x=p.displacementMap:p.normalMap?x=p.normalMap:p.bumpMap?x=p.bumpMap:p.roughnessMap?x=p.roughnessMap:p.metalnessMap?x=p.metalnessMap:p.alphaMap?x=p.alphaMap:p.emissiveMap?x=p.emissiveMap:p.clearcoatMap?x=p.clearcoatMap:p.clearcoatNormalMap?x=p.clearcoatNormalMap:p.clearcoatRoughnessMap?x=p.clearcoatRoughnessMap:p.iridescenceMap?x=p.iridescenceMap:p.iridescenceThicknessMap?x=p.iridescenceThicknessMap:p.specularIntensityMap?x=p.specularIntensityMap:p.specularColorMap?x=p.specularColorMap:p.transmissionMap?x=p.transmissionMap:p.thicknessMap?x=p.thicknessMap:p.sheenColorMap?x=p.sheenColorMap:p.sheenRoughnessMap&&(x=p.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix));let w;p.aoMap?w=p.aoMap:p.lightMap&&(w=p.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uv2Transform.value.copy(w.matrix))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function a(m,p,_,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=x*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w;p.map?w=p.map:p.alphaMap&&(w=p.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uvTransform.value.copy(w.matrix))}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===dn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function d(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function IC(i,e,t,n){let s={},r={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function l(x,w){const y=w.program;n.uniformBlockBinding(x,y)}function c(x,w){let y=s[x.id];y===void 0&&(g(x),y=u(x),s[x.id]=y,x.addEventListener("dispose",p));const S=w.program;n.updateUBOMapping(x,S);const I=e.render.frame;r[x.id]!==I&&(f(x),r[x.id]=I)}function u(x){const w=h();x.__bindingPointIndex=w;const y=i.createBuffer(),S=x.__size,I=x.usage;return i.bindBuffer(35345,y),i.bufferData(35345,S,I),i.bindBuffer(35345,null),i.bindBufferBase(35345,w,y),y}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const w=s[x.id],y=x.uniforms,S=x.__cache;i.bindBuffer(35345,w);for(let I=0,N=y.length;I<N;I++){const v=y[I];if(d(v,I,S)===!0){const R=v.value,U=v.__offset;typeof R=="number"?(v.__data[0]=R,i.bufferSubData(35345,U,v.__data)):(v.value.isMatrix3?(v.__data[0]=v.value.elements[0],v.__data[1]=v.value.elements[1],v.__data[2]=v.value.elements[2],v.__data[3]=v.value.elements[0],v.__data[4]=v.value.elements[3],v.__data[5]=v.value.elements[4],v.__data[6]=v.value.elements[5],v.__data[7]=v.value.elements[0],v.__data[8]=v.value.elements[6],v.__data[9]=v.value.elements[7],v.__data[10]=v.value.elements[8],v.__data[11]=v.value.elements[0]):R.toArray(v.__data),i.bufferSubData(35345,U,v.__data))}}i.bindBuffer(35345,null)}function d(x,w,y){const S=x.value;if(y[w]===void 0)return typeof S=="number"?y[w]=S:y[w]=S.clone(),!0;if(typeof S=="number"){if(y[w]!==S)return y[w]=S,!0}else{const I=y[w];if(I.equals(S)===!1)return I.copy(S),!0}return!1}function g(x){const w=x.uniforms;let y=0;const S=16;let I=0;for(let N=0,v=w.length;N<v;N++){const R=w[N],U=m(R);if(R.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=y,N>0){I=y%S;const W=S-I;I!==0&&W-U.boundary<0&&(y+=S-I,R.__offset=y)}y+=U.storage}return I=y%S,I>0&&(y+=S-I),x.__size=y,x.__cache={},this}function m(x){const w=x.value,y={boundary:0,storage:0};return typeof w=="number"?(y.boundary=4,y.storage=4):w.isVector2?(y.boundary=8,y.storage=8):w.isVector3||w.isColor?(y.boundary=16,y.storage=12):w.isVector4?(y.boundary=16,y.storage=16):w.isMatrix3?(y.boundary=48,y.storage=48):w.isMatrix4?(y.boundary=64,y.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),y}function p(x){const w=x.target;w.removeEventListener("dispose",p);const y=o.indexOf(w.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function _(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:_}}function LC(){const i=_o("canvas");return i.style.display="block",i}function c_(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:LC(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,s=i.stencil!==void 0?i.stencil:!0,r=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let h=null,f=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ci,this.physicallyCorrectLights=!1,this.toneMapping=Dn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let p=!1,_=0,x=0,w=null,y=-1,S=null;const I=new et,N=new et;let v=null,R=e.width,U=e.height,W=1,L=null,M=null;const C=new et(0,0,R,U),O=new et(0,0,R,U);let B=!1;const $=new mh;let z=!1,D=!1,k=null;const Z=new Ve,j=new se,ne=new P,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function xe(){return w===null?W:1}let X=t;function Te(E,G){for(let K=0;K<E.length;K++){const H=E[K],Q=e.getContext(H,G);if(Q!==null)return Q}return null}try{const E={alpha:!0,depth:n,stencil:s,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${hh}`),e.addEventListener("webglcontextlost",Re,!1),e.addEventListener("webglcontextrestored",We,!1),e.addEventListener("webglcontextcreationerror",lt,!1),X===null){const G=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&G.shift(),X=Te(G,E),X===null)throw Te(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let be,Me,de,Oe,ee,J,oe,ye,ue,Pe,Ee,Se,tt,Xe,A,b,q,ie,ae,pe,Ce,T,te,le;function ge(){be=new GT(X),Me=new FT(X,be,i),be.init(Me),T=new wC(X,be,Me),de=new SC(X,be,Me),Oe=new $T,ee=new lC,J=new MC(X,be,de,ee,Me,T,Oe),oe=new UT(m),ye=new HT(m),ue=new nM(X,Me),te=new NT(X,be,ue,Me),Pe=new VT(X,ue,Oe,te),Ee=new YT(X,Pe,ue,Oe),ae=new XT(X,Me,J),b=new kT(ee),Se=new aC(m,oe,ye,be,Me,te,b),tt=new RC(m,ee),Xe=new uC,A=new gC(be,Me),ie=new DT(m,oe,de,Ee,u,o),q=new bC(m,Ee,Me),le=new IC(X,Oe,Me,de),pe=new OT(X,be,Oe,Me),Ce=new WT(X,be,Oe,Me),Oe.programs=Se.programs,m.capabilities=Me,m.extensions=be,m.properties=ee,m.renderLists=Xe,m.shadowMap=q,m.state=de,m.info=Oe}ge();const me=new AC(m,X);this.xr=me,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const E=be.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=be.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(R,U,!1))},this.getSize=function(E){return E.set(R,U)},this.setSize=function(E,G,K){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}R=E,U=G,e.width=Math.floor(E*W),e.height=Math.floor(G*W),K!==!1&&(e.style.width=E+"px",e.style.height=G+"px"),this.setViewport(0,0,E,G)},this.getDrawingBufferSize=function(E){return E.set(R*W,U*W).floor()},this.setDrawingBufferSize=function(E,G,K){R=E,U=G,W=K,e.width=Math.floor(E*K),e.height=Math.floor(G*K),this.setViewport(0,0,E,G)},this.getCurrentViewport=function(E){return E.copy(I)},this.getViewport=function(E){return E.copy(C)},this.setViewport=function(E,G,K,H){E.isVector4?C.set(E.x,E.y,E.z,E.w):C.set(E,G,K,H),de.viewport(I.copy(C).multiplyScalar(W).floor())},this.getScissor=function(E){return E.copy(O)},this.setScissor=function(E,G,K,H){E.isVector4?O.set(E.x,E.y,E.z,E.w):O.set(E,G,K,H),de.scissor(N.copy(O).multiplyScalar(W).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(E){de.setScissorTest(B=E)},this.setOpaqueSort=function(E){L=E},this.setTransparentSort=function(E){M=E},this.getClearColor=function(E){return E.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(E=!0,G=!0,K=!0){let H=0;E&&(H|=16384),G&&(H|=256),K&&(H|=1024),X.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",We,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),Xe.dispose(),A.dispose(),ee.dispose(),oe.dispose(),ye.dispose(),Ee.dispose(),te.dispose(),le.dispose(),Se.dispose(),me.dispose(),me.removeEventListener("sessionstart",qe),me.removeEventListener("sessionend",St),k&&(k.dispose(),k=null),gt.stop()};function Re(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function We(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const E=Oe.autoReset,G=q.enabled,K=q.autoUpdate,H=q.needsUpdate,Q=q.type;ge(),Oe.autoReset=E,q.enabled=G,q.autoUpdate=K,q.needsUpdate=H,q.type=Q}function lt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function F(E){const G=E.target;G.removeEventListener("dispose",F),fe(G)}function fe(E){Y(E),ee.remove(E)}function Y(E){const G=ee.get(E).programs;G!==void 0&&(G.forEach(function(K){Se.releaseProgram(K)}),E.isShaderMaterial&&Se.releaseShaderCache(E))}this.renderBufferDirect=function(E,G,K,H,Q,we){G===null&&(G=he);const De=Q.isMesh&&Q.matrixWorld.determinant()<0,Fe=o0(E,G,K,H,Q);de.setMaterial(H,De);let Ne=K.index;const Ze=K.attributes.position;if(Ne===null){if(Ze===void 0||Ze.count===0)return}else if(Ne.count===0)return;let $e=1;H.wireframe===!0&&(Ne=Pe.getWireframeAttribute(K),$e=2),te.setup(Q,H,Fe,K,Ne);let je,dt=pe;Ne!==null&&(je=ue.get(Ne),dt=Ce,dt.setIndex(je));const Pi=Ne!==null?Ne.count:Ze.count,Ss=K.drawRange.start*$e,Ms=K.drawRange.count*$e,An=we!==null?we.start*$e:0,Ke=we!==null?we.count*$e:1/0,ws=Math.max(Ss,An),vt=Math.min(Pi,Ss+Ms,An+Ke)-1,an=Math.max(0,vt-ws+1);if(an!==0){if(Q.isMesh)H.wireframe===!0?(de.setLineWidth(H.wireframeLinewidth*xe()),dt.setMode(1)):dt.setMode(4);else if(Q.isLine){let si=H.linewidth;si===void 0&&(si=1),de.setLineWidth(si*xe()),Q.isLineSegments?dt.setMode(1):Q.isLineLoop?dt.setMode(2):dt.setMode(3)}else Q.isPoints?dt.setMode(0):Q.isSprite&&dt.setMode(4);if(Q.isInstancedMesh)dt.renderInstances(ws,an,Q.count);else if(K.isInstancedBufferGeometry){const si=Math.min(K.instanceCount,K._maxInstanceCount);dt.renderInstances(ws,an,si)}else dt.render(ws,an)}},this.compile=function(E,G){function K(H,Q,we){H.transparent===!0&&H.side===Ln?(H.side=dn,H.needsUpdate=!0,qo(H,Q,we),H.side=os,H.needsUpdate=!0,qo(H,Q,we),H.side=Ln):qo(H,Q,we)}f=A.get(E),f.init(),g.push(f),E.traverseVisible(function(H){H.isLight&&H.layers.test(G.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),f.setupLights(m.physicallyCorrectLights),E.traverse(function(H){const Q=H.material;if(Q)if(Array.isArray(Q))for(let we=0;we<Q.length;we++){const De=Q[we];K(De,E,H)}else K(Q,E,H)}),g.pop(),f=null};let ve=null;function _e(E){ve&&ve(E)}function qe(){gt.stop()}function St(){gt.start()}const gt=new s_;gt.setAnimationLoop(_e),typeof self<"u"&&gt.setContext(self),this.setAnimationLoop=function(E){ve=E,me.setAnimationLoop(E),E===null?gt.stop():gt.start()},me.addEventListener("sessionstart",qe),me.addEventListener("sessionend",St),this.render=function(E,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(G),G=me.getCamera()),E.isScene===!0&&E.onBeforeRender(m,E,G,w),f=A.get(E,g.length),f.init(),g.push(f),Z.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),$.setFromProjectionMatrix(Z),D=this.localClippingEnabled,z=b.init(this.clippingPlanes,D,G),h=Xe.get(E,d.length),h.init(),d.push(h),ii(E,G,0,m.sortObjects),h.finish(),m.sortObjects===!0&&h.sort(L,M),z===!0&&b.beginShadows();const K=f.state.shadowsArray;if(q.render(K,E,G),z===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),ie.render(h,E),f.setupLights(m.physicallyCorrectLights),G.isArrayCamera){const H=G.cameras;for(let Q=0,we=H.length;Q<we;Q++){const De=H[Q];ft(h,E,De,De.viewport)}}else ft(h,E,G);w!==null&&(J.updateMultisampleRenderTarget(w),J.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(m,E,G),te.resetDefaultState(),y=-1,S=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,d.pop(),d.length>0?h=d[d.length-1]:h=null};function ii(E,G,K,H){if(E.visible===!1)return;if(E.layers.test(G.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(G);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||$.intersectsSprite(E)){H&&ne.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Z);const De=Ee.update(E),Fe=E.material;Fe.visible&&h.push(E,De,Fe,K,ne.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Oe.render.frame&&(E.skeleton.update(),E.skeleton.frame=Oe.render.frame),!E.frustumCulled||$.intersectsObject(E))){H&&ne.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Z);const De=Ee.update(E),Fe=E.material;if(Array.isArray(Fe)){const Ne=De.groups;for(let Ze=0,$e=Ne.length;Ze<$e;Ze++){const je=Ne[Ze],dt=Fe[je.materialIndex];dt&&dt.visible&&h.push(E,De,dt,K,ne.z,je)}}else Fe.visible&&h.push(E,De,Fe,K,ne.z,null)}}const we=E.children;for(let De=0,Fe=we.length;De<Fe;De++)ii(we[De],G,K,H)}function ft(E,G,K,H){const Q=E.opaque,we=E.transmissive,De=E.transparent;f.setupLightsView(K),we.length>0&&kn(Q,G,K),H&&de.viewport(I.copy(H)),Q.length>0&&on(Q,G,K),we.length>0&&on(we,G,K),De.length>0&&on(De,G,K),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function kn(E,G,K){const H=Me.isWebGL2;k===null&&(k=new Ai(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?cr:as,minFilter:Sr,samples:H&&r===!0?4:0})),m.getDrawingBufferSize(j),H?k.setSize(j.x,j.y):k.setSize(Za(j.x),Za(j.y));const Q=m.getRenderTarget();m.setRenderTarget(k),m.clear();const we=m.toneMapping;m.toneMapping=Dn,on(E,G,K),m.toneMapping=we,J.updateMultisampleRenderTarget(k),J.updateRenderTargetMipmap(k),m.setRenderTarget(Q)}function on(E,G,K){const H=G.isScene===!0?G.overrideMaterial:null;for(let Q=0,we=E.length;Q<we;Q++){const De=E[Q],Fe=De.object,Ne=De.geometry,Ze=H===null?De.material:H,$e=De.group;Fe.layers.test(K.layers)&&r0(Fe,G,K,Ne,Ze,$e)}}function r0(E,G,K,H,Q,we){E.onBeforeRender(m,G,K,H,Q,we),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Q.onBeforeRender(m,G,K,H,E,we),Q.transparent===!0&&Q.side===Ln?(Q.side=dn,Q.needsUpdate=!0,m.renderBufferDirect(K,G,H,Q,E,we),Q.side=os,Q.needsUpdate=!0,m.renderBufferDirect(K,G,H,Q,E,we),Q.side=Ln):m.renderBufferDirect(K,G,H,Q,E,we),E.onAfterRender(m,G,K,H,Q,we)}function qo(E,G,K){G.isScene!==!0&&(G=he);const H=ee.get(E),Q=f.state.lights,we=f.state.shadowsArray,De=Q.state.version,Fe=Se.getParameters(E,Q.state,we,G,K),Ne=Se.getProgramCacheKey(Fe);let Ze=H.programs;H.environment=E.isMeshStandardMaterial?G.environment:null,H.fog=G.fog,H.envMap=(E.isMeshStandardMaterial?ye:oe).get(E.envMap||H.environment),Ze===void 0&&(E.addEventListener("dispose",F),Ze=new Map,H.programs=Ze);let $e=Ze.get(Ne);if($e!==void 0){if(H.currentProgram===$e&&H.lightsStateVersion===De)return hf(E,Fe),$e}else Fe.uniforms=Se.getUniforms(E),E.onBuild(K,Fe,m),E.onBeforeCompile(Fe,m),$e=Se.acquireProgram(Fe,Ne),Ze.set(Ne,$e),H.uniforms=Fe.uniforms;const je=H.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(je.clippingPlanes=b.uniform),hf(E,Fe),H.needsLights=l0(E),H.lightsStateVersion=De,H.needsLights&&(je.ambientLightColor.value=Q.state.ambient,je.lightProbe.value=Q.state.probe,je.directionalLights.value=Q.state.directional,je.directionalLightShadows.value=Q.state.directionalShadow,je.spotLights.value=Q.state.spot,je.spotLightShadows.value=Q.state.spotShadow,je.rectAreaLights.value=Q.state.rectArea,je.ltc_1.value=Q.state.rectAreaLTC1,je.ltc_2.value=Q.state.rectAreaLTC2,je.pointLights.value=Q.state.point,je.pointLightShadows.value=Q.state.pointShadow,je.hemisphereLights.value=Q.state.hemi,je.directionalShadowMap.value=Q.state.directionalShadowMap,je.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,je.spotShadowMap.value=Q.state.spotShadowMap,je.spotLightMatrix.value=Q.state.spotLightMatrix,je.spotLightMap.value=Q.state.spotLightMap,je.pointShadowMap.value=Q.state.pointShadowMap,je.pointShadowMatrix.value=Q.state.pointShadowMatrix);const dt=$e.getUniforms(),Pi=Fa.seqWithValue(dt.seq,je);return H.currentProgram=$e,H.uniformsList=Pi,$e}function hf(E,G){const K=ee.get(E);K.outputEncoding=G.outputEncoding,K.instancing=G.instancing,K.skinning=G.skinning,K.morphTargets=G.morphTargets,K.morphNormals=G.morphNormals,K.morphColors=G.morphColors,K.morphTargetsCount=G.morphTargetsCount,K.numClippingPlanes=G.numClippingPlanes,K.numIntersection=G.numClipIntersection,K.vertexAlphas=G.vertexAlphas,K.vertexTangents=G.vertexTangents,K.toneMapping=G.toneMapping}function o0(E,G,K,H,Q){G.isScene!==!0&&(G=he),J.resetTextureUnits();const we=G.fog,De=H.isMeshStandardMaterial?G.environment:null,Fe=w===null?m.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:Ci,Ne=(H.isMeshStandardMaterial?ye:oe).get(H.envMap||De),Ze=H.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,$e=!!H.normalMap&&!!K.attributes.tangent,je=!!K.morphAttributes.position,dt=!!K.morphAttributes.normal,Pi=!!K.morphAttributes.color,Ss=H.toneMapped?m.toneMapping:Dn,Ms=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,An=Ms!==void 0?Ms.length:0,Ke=ee.get(H),ws=f.state.lights;if(z===!0&&(D===!0||E!==S)){const Kt=E===S&&H.id===y;b.setState(H,E,Kt)}let vt=!1;H.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==ws.state.version||Ke.outputEncoding!==Fe||Q.isInstancedMesh&&Ke.instancing===!1||!Q.isInstancedMesh&&Ke.instancing===!0||Q.isSkinnedMesh&&Ke.skinning===!1||!Q.isSkinnedMesh&&Ke.skinning===!0||Ke.envMap!==Ne||H.fog===!0&&Ke.fog!==we||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==b.numPlanes||Ke.numIntersection!==b.numIntersection)||Ke.vertexAlphas!==Ze||Ke.vertexTangents!==$e||Ke.morphTargets!==je||Ke.morphNormals!==dt||Ke.morphColors!==Pi||Ke.toneMapping!==Ss||Me.isWebGL2===!0&&Ke.morphTargetsCount!==An)&&(vt=!0):(vt=!0,Ke.__version=H.version);let an=Ke.currentProgram;vt===!0&&(an=qo(H,G,Q));let si=!1,Pr=!1,Rl=!1;const Ut=an.getUniforms(),Di=Ke.uniforms;if(de.useProgram(an.program)&&(si=!0,Pr=!0,Rl=!0),H.id!==y&&(y=H.id,Pr=!0),si||S!==E){if(Ut.setValue(X,"projectionMatrix",E.projectionMatrix),Me.logarithmicDepthBuffer&&Ut.setValue(X,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),S!==E&&(S=E,Pr=!0,Rl=!0),H.isShaderMaterial||H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshStandardMaterial||H.envMap){const Kt=Ut.map.cameraPosition;Kt!==void 0&&Kt.setValue(X,ne.setFromMatrixPosition(E.matrixWorld))}(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ut.setValue(X,"isOrthographic",E.isOrthographicCamera===!0),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial||H.isShadowMaterial||Q.isSkinnedMesh)&&Ut.setValue(X,"viewMatrix",E.matrixWorldInverse)}if(Q.isSkinnedMesh){Ut.setOptional(X,Q,"bindMatrix"),Ut.setOptional(X,Q,"bindMatrixInverse");const Kt=Q.skeleton;Kt&&(Me.floatVertexTextures?(Kt.boneTexture===null&&Kt.computeBoneTexture(),Ut.setValue(X,"boneTexture",Kt.boneTexture,J),Ut.setValue(X,"boneTextureSize",Kt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Il=K.morphAttributes;if((Il.position!==void 0||Il.normal!==void 0||Il.color!==void 0&&Me.isWebGL2===!0)&&ae.update(Q,K,H,an),(Pr||Ke.receiveShadow!==Q.receiveShadow)&&(Ke.receiveShadow=Q.receiveShadow,Ut.setValue(X,"receiveShadow",Q.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Di.envMap.value=Ne,Di.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Pr&&(Ut.setValue(X,"toneMappingExposure",m.toneMappingExposure),Ke.needsLights&&a0(Di,Rl),we&&H.fog===!0&&tt.refreshFogUniforms(Di,we),tt.refreshMaterialUniforms(Di,H,W,U,k),Fa.upload(X,Ke.uniformsList,Di,J)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Fa.upload(X,Ke.uniformsList,Di,J),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ut.setValue(X,"center",Q.center),Ut.setValue(X,"modelViewMatrix",Q.modelViewMatrix),Ut.setValue(X,"normalMatrix",Q.normalMatrix),Ut.setValue(X,"modelMatrix",Q.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Kt=H.uniformsGroups;for(let Ll=0,c0=Kt.length;Ll<c0;Ll++)if(Me.isWebGL2){const ff=Kt[Ll];le.update(ff,an),le.bind(ff,an)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return an}function a0(E,G){E.ambientLightColor.needsUpdate=G,E.lightProbe.needsUpdate=G,E.directionalLights.needsUpdate=G,E.directionalLightShadows.needsUpdate=G,E.pointLights.needsUpdate=G,E.pointLightShadows.needsUpdate=G,E.spotLights.needsUpdate=G,E.spotLightShadows.needsUpdate=G,E.rectAreaLights.needsUpdate=G,E.hemisphereLights.needsUpdate=G}function l0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,G,K){ee.get(E.texture).__webglTexture=G,ee.get(E.depthTexture).__webglTexture=K;const H=ee.get(E);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=K===void 0,H.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,G){const K=ee.get(E);K.__webglFramebuffer=G,K.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(E,G=0,K=0){w=E,_=G,x=K;let H=!0;if(E){const Ne=ee.get(E);Ne.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(36160,null),H=!1):Ne.__webglFramebuffer===void 0?J.setupRenderTarget(E):Ne.__hasExternalTextures&&J.rebindTextures(E,ee.get(E.texture).__webglTexture,ee.get(E.depthTexture).__webglTexture)}let Q=null,we=!1,De=!1;if(E){const Ne=E.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture)&&(De=!0);const Ze=ee.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Q=Ze[G],we=!0):Me.isWebGL2&&E.samples>0&&J.useMultisampledRTT(E)===!1?Q=ee.get(E).__webglMultisampledFramebuffer:Q=Ze,I.copy(E.viewport),N.copy(E.scissor),v=E.scissorTest}else I.copy(C).multiplyScalar(W).floor(),N.copy(O).multiplyScalar(W).floor(),v=B;if(de.bindFramebuffer(36160,Q)&&Me.drawBuffers&&H&&de.drawBuffers(E,Q),de.viewport(I),de.scissor(N),de.setScissorTest(v),we){const Ne=ee.get(E.texture);X.framebufferTexture2D(36160,36064,34069+G,Ne.__webglTexture,K)}else if(De){const Ne=ee.get(E.texture),Ze=G||0;X.framebufferTextureLayer(36160,36064,Ne.__webglTexture,K||0,Ze)}y=-1},this.readRenderTargetPixels=function(E,G,K,H,Q,we,De){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=ee.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&De!==void 0&&(Fe=Fe[De]),Fe){de.bindFramebuffer(36160,Fe);try{const Ne=E.texture,Ze=Ne.format,$e=Ne.type;if(Ze!==bn&&T.convert(Ze)!==X.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const je=$e===cr&&(be.has("EXT_color_buffer_half_float")||Me.isWebGL2&&be.has("EXT_color_buffer_float"));if($e!==as&&T.convert($e)!==X.getParameter(35738)&&!($e===vi&&(Me.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=E.width-H&&K>=0&&K<=E.height-Q&&X.readPixels(G,K,H,Q,T.convert(Ze),T.convert($e),we)}finally{const Ne=w!==null?ee.get(w).__webglFramebuffer:null;de.bindFramebuffer(36160,Ne)}}},this.copyFramebufferToTexture=function(E,G,K=0){const H=Math.pow(2,-K),Q=Math.floor(G.image.width*H),we=Math.floor(G.image.height*H);J.setTexture2D(G,0),X.copyTexSubImage2D(3553,K,0,0,E.x,E.y,Q,we),de.unbindTexture()},this.copyTextureToTexture=function(E,G,K,H=0){const Q=G.image.width,we=G.image.height,De=T.convert(K.format),Fe=T.convert(K.type);J.setTexture2D(K,0),X.pixelStorei(37440,K.flipY),X.pixelStorei(37441,K.premultiplyAlpha),X.pixelStorei(3317,K.unpackAlignment),G.isDataTexture?X.texSubImage2D(3553,H,E.x,E.y,Q,we,De,Fe,G.image.data):G.isCompressedTexture?X.compressedTexSubImage2D(3553,H,E.x,E.y,G.mipmaps[0].width,G.mipmaps[0].height,De,G.mipmaps[0].data):X.texSubImage2D(3553,H,E.x,E.y,De,Fe,G.image),H===0&&K.generateMipmaps&&X.generateMipmap(3553),de.unbindTexture()},this.copyTextureToTexture3D=function(E,G,K,H,Q=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=E.max.x-E.min.x+1,De=E.max.y-E.min.y+1,Fe=E.max.z-E.min.z+1,Ne=T.convert(H.format),Ze=T.convert(H.type);let $e;if(H.isData3DTexture)J.setTexture3D(H,0),$e=32879;else if(H.isDataArrayTexture)J.setTexture2DArray(H,0),$e=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(37440,H.flipY),X.pixelStorei(37441,H.premultiplyAlpha),X.pixelStorei(3317,H.unpackAlignment);const je=X.getParameter(3314),dt=X.getParameter(32878),Pi=X.getParameter(3316),Ss=X.getParameter(3315),Ms=X.getParameter(32877),An=K.isCompressedTexture?K.mipmaps[0]:K.image;X.pixelStorei(3314,An.width),X.pixelStorei(32878,An.height),X.pixelStorei(3316,E.min.x),X.pixelStorei(3315,E.min.y),X.pixelStorei(32877,E.min.z),K.isDataTexture||K.isData3DTexture?X.texSubImage3D($e,Q,G.x,G.y,G.z,we,De,Fe,Ne,Ze,An.data):K.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D($e,Q,G.x,G.y,G.z,we,De,Fe,Ne,An.data)):X.texSubImage3D($e,Q,G.x,G.y,G.z,we,De,Fe,Ne,Ze,An),X.pixelStorei(3314,je),X.pixelStorei(32878,dt),X.pixelStorei(3316,Pi),X.pixelStorei(3315,Ss),X.pixelStorei(32877,Ms),Q===0&&H.generateMipmaps&&X.generateMipmap($e),de.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?J.setTextureCube(E,0):E.isData3DTexture?J.setTexture3D(E,0):E.isDataArrayTexture?J.setTexture2DArray(E,0):J.setTexture2D(E,0),de.unbindTexture()},this.resetState=function(){_=0,x=0,w=null,de.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class PC extends c_{}PC.prototype.isWebGL1Renderer=!0;class DC extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class NC{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=hu,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zt=new P;class vh{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new vh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const gp=new P,_p=new et,vp=new et,OC=new P,yp=new Ve;class FC extends It{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new et,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,s=this.geometry;_p.fromBufferAttribute(s.attributes.skinIndex,e),vp.fromBufferAttribute(s.attributes.skinWeight,e),gp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=vp.getComponent(r);if(o!==0){const a=_p.getComponent(r);yp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(OC.copy(gp).applyMatrix4(yp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class u_ extends ct{constructor(){super(),this.isBone=!0,this.type="Bone"}}class kC extends Ht{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Rt,u=Rt,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xp=new Ve,UC=new Ve;class yh{constructor(e=[],t=[]){this.uuid=pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:UC;xp.multiplyMatrices(a,t[r]),xp.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new yh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=qg(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new kC(t,e,e,bn,vi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new u_),this.bones.push(o),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class bp extends qt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Sp=new Ve,Mp=new Ve,Sa=[],zr=new It;class wp extends It{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bp(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,s=this.count;if(zr.geometry=this.geometry,zr.material=this.material,zr.material!==void 0)for(let r=0;r<s;r++){this.getMatrixAt(r,Sp),Mp.multiplyMatrices(n,Sp),zr.matrixWorld=Mp,zr.raycast(e,Sa);for(let o=0,a=Sa.length;o<a;o++){const l=Sa[o];l.instanceId=r,l.object=this,t.push(l)}Sa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new bp(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class h_ extends Nn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tp=new P,Ep=new P,Cp=new Ve,_c=new gl,Ma=new Mr;class xh extends ct{constructor(e=new mn,t=new h_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Tp.fromBufferAttribute(t,s-1),Ep.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Tp.distanceTo(Ep);e.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(s),Ma.radius+=r,e.ray.intersectsSphere(Ma)===!1)return;Cp.copy(s).invert(),_c.copy(e.ray).applyMatrix4(Cp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new P,u=new P,h=new P,f=new P,d=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const _=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let w=_,y=x-1;w<y;w+=d){const S=g.getX(w),I=g.getX(w+1);if(c.fromBufferAttribute(p,S),u.fromBufferAttribute(p,I),_c.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(f);v<e.near||v>e.far||t.push({distance:v,point:h.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),x=Math.min(p.count,o.start+o.count);for(let w=_,y=x-1;w<y;w+=d){if(c.fromBufferAttribute(p,w),u.fromBufferAttribute(p,w+1),_c.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(f);I<e.near||I>e.far||t.push({distance:I,point:h.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Ap=new P,Rp=new P;class zC extends xh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Ap.fromBufferAttribute(t,s),Rp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ap.distanceTo(Rp);e.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class BC extends xh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class f_ extends Nn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ip=new Ve,mu=new gl,wa=new Mr,Ta=new P;class HC extends ct{constructor(e=new mn,t=new f_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(s),wa.radius+=r,e.ray.intersectsSphere(wa)===!1)return;Ip.copy(s).invert(),mu.copy(e.ray).applyMatrix4(Ip);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,m=d;g<m;g++){const p=c.getX(g);Ta.fromBufferAttribute(h,p),Lp(Ta,p,l,s,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,m=d;g<m;g++)Ta.fromBufferAttribute(h,g),Lp(Ta,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Lp(i,e,t,n,s,r,o){const a=mu.distanceSqToPoint(i);if(a<t){const l=new P;mu.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class On{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],f=n[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new se:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new P,s=[],r=[],o=[],a=new P,l=new Ve;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Et(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Et(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class bh extends On{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new se,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class GC extends bh{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Sh(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const Ea=new P,vc=new Sh,yc=new Sh,xc=new Sh;class VC extends On{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Ea.subVectors(s[0],s[1]).add(s[0]),c=Ea);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Ea.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ea),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);m<1e-4&&(m=1),g<1e-4&&(g=m),p<1e-4&&(p=m),vc.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,m,p),yc.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,m,p),xc.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,m,p)}else this.curveType==="catmullrom"&&(vc.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),yc.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),xc.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(vc.calc(l),yc.calc(l),xc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Pp(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function WC(i,e){const t=1-i;return t*t*e}function $C(i,e){return 2*(1-i)*i*e}function jC(i,e){return i*i*e}function io(i,e,t,n){return WC(i,e)+$C(i,t)+jC(i,n)}function qC(i,e){const t=1-i;return t*t*t*e}function XC(i,e){const t=1-i;return 3*t*t*i*e}function YC(i,e){return 3*(1-i)*i*i*e}function KC(i,e){return i*i*i*e}function so(i,e,t,n,s){return qC(i,e)+XC(i,t)+YC(i,n)+KC(i,s)}class d_ extends On{constructor(e=new se,t=new se,n=new se,s=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new se){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(so(e,s.x,r.x,o.x,a.x),so(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ZC extends On{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(so(e,s.x,r.x,o.x,a.x),so(e,s.y,r.y,o.y,a.y),so(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Mh extends On{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new se;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class JC extends On{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class p_ extends On{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(io(e,s.x,r.x,o.x),io(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class QC extends On{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(io(e,s.x,r.x,o.x),io(e,s.y,r.y,o.y),io(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class m_ extends On{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Pp(a,l.x,c.x,u.x,h.x),Pp(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new se().fromArray(s))}return this}}var g_=Object.freeze({__proto__:null,ArcCurve:GC,CatmullRomCurve3:VC,CubicBezierCurve:d_,CubicBezierCurve3:ZC,EllipseCurve:bh,LineCurve:Mh,LineCurve3:JC,QuadraticBezierCurve:p_,QuadraticBezierCurve3:QC,SplineCurve:m_});class eA extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Mh(t,e))}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new g_[s.type]().fromJSON(s))}return this}}class gu extends eA{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Mh(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new p_(this.currentPoint.clone(),new se(e,t),new se(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new d_(this.currentPoint.clone(),new se(e,t),new se(n,s),new se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new m_(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){const c=new bh(e,t,n,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class wh extends mn{constructor(e=1,t=8,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new P,u=new se;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=n+h/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Xt(o,3)),this.setAttribute("normal",new Xt(a,3)),this.setAttribute("uv",new Xt(l,2))}static fromJSON(e){return new wh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ka extends gu{constructor(e){super(e),this.uuid=pn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new gu().fromJSON(s))}return this}}const tA={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=__(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,d;if(n&&(r=oA(i,e,r,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let g=t;g<s;g+=t)h=i[g],f=i[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?1/d:0}return vo(r,o,t,a,l,d),o}};function __(i,e,t,n,s){let r,o;if(s===_A(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Dp(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Dp(r,i[r],i[r+1],o);return o&&vl(o,o.next)&&(xo(o),o=o.next),o}function Ri(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(vl(t,t.next)||ht(t.prev,t,t.next)===0)){if(xo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function vo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&hA(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?iA(i,n,s,r):nA(i)){e.push(l.i/t),e.push(i.i/t),e.push(c.i/t),xo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=sA(Ri(i),e,t),vo(i,e,t,n,s,r,2)):o===2&&rA(i,e,t,n,s,r):vo(Ri(i),e,t,n,s,r,1);break}}}function nA(i){const e=i.prev,t=i,n=i.next;if(ht(e,t,n)>=0)return!1;let s=i.next.next;for(;s!==i.prev;){if(Xs(e.x,e.y,t.x,t.y,n.x,n.y,s.x,s.y)&&ht(s.prev,s,s.next)>=0)return!1;s=s.next}return!0}function iA(i,e,t,n){const s=i.prev,r=i,o=i.next;if(ht(s,r,o)>=0)return!1;const a=s.x<r.x?s.x<o.x?s.x:o.x:r.x<o.x?r.x:o.x,l=s.y<r.y?s.y<o.y?s.y:o.y:r.y<o.y?r.y:o.y,c=s.x>r.x?s.x>o.x?s.x:o.x:r.x>o.x?r.x:o.x,u=s.y>r.y?s.y>o.y?s.y:o.y:r.y>o.y?r.y:o.y,h=_u(a,l,e,t,n),f=_u(c,u,e,t,n);let d=i.prevZ,g=i.nextZ;for(;d&&d.z>=h&&g&&g.z<=f;){if(d!==i.prev&&d!==i.next&&Xs(s.x,s.y,r.x,r.y,o.x,o.y,d.x,d.y)&&ht(d.prev,d,d.next)>=0||(d=d.prevZ,g!==i.prev&&g!==i.next&&Xs(s.x,s.y,r.x,r.y,o.x,o.y,g.x,g.y)&&ht(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;d&&d.z>=h;){if(d!==i.prev&&d!==i.next&&Xs(s.x,s.y,r.x,r.y,o.x,o.y,d.x,d.y)&&ht(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;g&&g.z<=f;){if(g!==i.prev&&g!==i.next&&Xs(s.x,s.y,r.x,r.y,o.x,o.y,g.x,g.y)&&ht(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function sA(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!vl(s,r)&&v_(s,n,n.next,r)&&yo(s,r)&&yo(r,s)&&(e.push(s.i/t),e.push(n.i/t),e.push(r.i/t),xo(n),xo(n.next),n=i=r),n=n.next}while(n!==i);return Ri(n)}function rA(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&pA(o,a)){let l=y_(o,a);o=Ri(o,o.next),l=Ri(l,l.next),vo(o,e,t,n,s,r),vo(l,e,t,n,s,r);return}a=a.next}o=o.next}while(o!==i)}function oA(i,e,t,n){const s=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=__(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(dA(c));for(s.sort(aA),r=0;r<s.length;r++)lA(s[r],t),t=Ri(t,t.next);return t}function aA(i,e){return i.x-e.x}function lA(i,e){if(e=cA(i,e),e){const t=y_(e,i);Ri(e,e.next),Ri(t,t.next)}}function cA(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,o;do{if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r){if(r=f,f===n){if(s===t.y)return t;if(s===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(n===r)return o;const a=o,l=o.x,c=o.y;let u=1/0,h;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&Xs(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)&&(h=Math.abs(s-t.y)/(n-t.x),yo(t,i)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&uA(o,t)))&&(o=t,u=h)),t=t.next;while(t!==a);return o}function uA(i,e){return ht(i.prev,i,e.prev)<0&&ht(e.next,i,i.next)<0}function hA(i,e,t,n){let s=i;do s.z===null&&(s.z=_u(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,fA(s)}function fA(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function _u(i,e,t,n,s){return i=32767*(i-t)*s,e=32767*(e-n)*s,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function dA(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Xs(i,e,t,n,s,r,o,a){return(s-o)*(e-a)-(i-o)*(r-a)>=0&&(i-o)*(n-a)-(t-o)*(e-a)>=0&&(t-o)*(r-a)-(s-o)*(n-a)>=0}function pA(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!mA(i,e)&&(yo(i,e)&&yo(e,i)&&gA(i,e)&&(ht(i.prev,i,e.prev)||ht(i,e.prev,e))||vl(i,e)&&ht(i.prev,i,i.next)>0&&ht(e.prev,e,e.next)>0)}function ht(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function vl(i,e){return i.x===e.x&&i.y===e.y}function v_(i,e,t,n){const s=Aa(ht(i,e,t)),r=Aa(ht(i,e,n)),o=Aa(ht(t,n,i)),a=Aa(ht(t,n,e));return!!(s!==r&&o!==a||s===0&&Ca(i,t,e)||r===0&&Ca(i,n,e)||o===0&&Ca(t,i,n)||a===0&&Ca(t,e,n))}function Ca(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Aa(i){return i>0?1:i<0?-1:0}function mA(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&v_(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function yo(i,e){return ht(i.prev,i,i.next)<0?ht(i,e,i.next)>=0&&ht(i,i.prev,e)>=0:ht(i,e,i.prev)<0||ht(i,i.next,e)<0}function gA(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function y_(i,e){const t=new vu(i.i,i.x,i.y),n=new vu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Dp(i,e,t,n){const s=new vu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function xo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function vu(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function _A(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class tr{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return tr.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Np(e),Op(n,e);let o=e.length;t.forEach(Np);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Op(n,t[l]);const a=tA.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Np(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Op(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Th extends mn{constructor(e=new ka([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Xt(s,3)),this.setAttribute("uv",new Xt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:vA;let w,y=!1,S,I,N,v;_&&(w=_.getSpacedPoints(u),y=!0,f=!1,S=_.computeFrenetFrames(u,!1),I=new P,N=new P,v=new P),f||(p=0,d=0,g=0,m=0);const R=a.extractPoints(c);let U=R.shape;const W=R.holes;if(!tr.isClockWise(U)){U=U.reverse();for(let ee=0,J=W.length;ee<J;ee++){const oe=W[ee];tr.isClockWise(oe)&&(W[ee]=oe.reverse())}}const M=tr.triangulateShape(U,W),C=U;for(let ee=0,J=W.length;ee<J;ee++){const oe=W[ee];U=U.concat(oe)}function O(ee,J,oe){return J||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().multiplyScalar(oe).add(ee)}const B=U.length,$=M.length;function z(ee,J,oe){let ye,ue,Pe;const Ee=ee.x-J.x,Se=ee.y-J.y,tt=oe.x-ee.x,Xe=oe.y-ee.y,A=Ee*Ee+Se*Se,b=Ee*Xe-Se*tt;if(Math.abs(b)>Number.EPSILON){const q=Math.sqrt(A),ie=Math.sqrt(tt*tt+Xe*Xe),ae=J.x-Se/q,pe=J.y+Ee/q,Ce=oe.x-Xe/ie,T=oe.y+tt/ie,te=((Ce-ae)*Xe-(T-pe)*tt)/(Ee*Xe-Se*tt);ye=ae+Ee*te-ee.x,ue=pe+Se*te-ee.y;const le=ye*ye+ue*ue;if(le<=2)return new se(ye,ue);Pe=Math.sqrt(le/2)}else{let q=!1;Ee>Number.EPSILON?tt>Number.EPSILON&&(q=!0):Ee<-Number.EPSILON?tt<-Number.EPSILON&&(q=!0):Math.sign(Se)===Math.sign(Xe)&&(q=!0),q?(ye=-Se,ue=Ee,Pe=Math.sqrt(A)):(ye=Ee,ue=Se,Pe=Math.sqrt(A/2))}return new se(ye/Pe,ue/Pe)}const D=[];for(let ee=0,J=C.length,oe=J-1,ye=ee+1;ee<J;ee++,oe++,ye++)oe===J&&(oe=0),ye===J&&(ye=0),D[ee]=z(C[ee],C[oe],C[ye]);const k=[];let Z,j=D.concat();for(let ee=0,J=W.length;ee<J;ee++){const oe=W[ee];Z=[];for(let ye=0,ue=oe.length,Pe=ue-1,Ee=ye+1;ye<ue;ye++,Pe++,Ee++)Pe===ue&&(Pe=0),Ee===ue&&(Ee=0),Z[ye]=z(oe[ye],oe[Pe],oe[Ee]);k.push(Z),j=j.concat(Z)}for(let ee=0;ee<p;ee++){const J=ee/p,oe=d*Math.cos(J*Math.PI/2),ye=g*Math.sin(J*Math.PI/2)+m;for(let ue=0,Pe=C.length;ue<Pe;ue++){const Ee=O(C[ue],D[ue],ye);Te(Ee.x,Ee.y,-oe)}for(let ue=0,Pe=W.length;ue<Pe;ue++){const Ee=W[ue];Z=k[ue];for(let Se=0,tt=Ee.length;Se<tt;Se++){const Xe=O(Ee[Se],Z[Se],ye);Te(Xe.x,Xe.y,-oe)}}}const ne=g+m;for(let ee=0;ee<B;ee++){const J=f?O(U[ee],j[ee],ne):U[ee];y?(N.copy(S.normals[0]).multiplyScalar(J.x),I.copy(S.binormals[0]).multiplyScalar(J.y),v.copy(w[0]).add(N).add(I),Te(v.x,v.y,v.z)):Te(J.x,J.y,0)}for(let ee=1;ee<=u;ee++)for(let J=0;J<B;J++){const oe=f?O(U[J],j[J],ne):U[J];y?(N.copy(S.normals[ee]).multiplyScalar(oe.x),I.copy(S.binormals[ee]).multiplyScalar(oe.y),v.copy(w[ee]).add(N).add(I),Te(v.x,v.y,v.z)):Te(oe.x,oe.y,h/u*ee)}for(let ee=p-1;ee>=0;ee--){const J=ee/p,oe=d*Math.cos(J*Math.PI/2),ye=g*Math.sin(J*Math.PI/2)+m;for(let ue=0,Pe=C.length;ue<Pe;ue++){const Ee=O(C[ue],D[ue],ye);Te(Ee.x,Ee.y,h+oe)}for(let ue=0,Pe=W.length;ue<Pe;ue++){const Ee=W[ue];Z=k[ue];for(let Se=0,tt=Ee.length;Se<tt;Se++){const Xe=O(Ee[Se],Z[Se],ye);y?Te(Xe.x,Xe.y+w[u-1].y,w[u-1].x+oe):Te(Xe.x,Xe.y,h+oe)}}}he(),xe();function he(){const ee=s.length/3;if(f){let J=0,oe=B*J;for(let ye=0;ye<$;ye++){const ue=M[ye];be(ue[2]+oe,ue[1]+oe,ue[0]+oe)}J=u+p*2,oe=B*J;for(let ye=0;ye<$;ye++){const ue=M[ye];be(ue[0]+oe,ue[1]+oe,ue[2]+oe)}}else{for(let J=0;J<$;J++){const oe=M[J];be(oe[2],oe[1],oe[0])}for(let J=0;J<$;J++){const oe=M[J];be(oe[0]+B*u,oe[1]+B*u,oe[2]+B*u)}}n.addGroup(ee,s.length/3-ee,0)}function xe(){const ee=s.length/3;let J=0;X(C,J),J+=C.length;for(let oe=0,ye=W.length;oe<ye;oe++){const ue=W[oe];X(ue,J),J+=ue.length}n.addGroup(ee,s.length/3-ee,1)}function X(ee,J){let oe=ee.length;for(;--oe>=0;){const ye=oe;let ue=oe-1;ue<0&&(ue=ee.length-1);for(let Pe=0,Ee=u+p*2;Pe<Ee;Pe++){const Se=B*Pe,tt=B*(Pe+1),Xe=J+ye+Se,A=J+ue+Se,b=J+ue+tt,q=J+ye+tt;Me(Xe,A,b,q)}}}function Te(ee,J,oe){l.push(ee),l.push(J),l.push(oe)}function be(ee,J,oe){de(ee),de(J),de(oe);const ye=s.length/3,ue=x.generateTopUV(n,s,ye-3,ye-2,ye-1);Oe(ue[0]),Oe(ue[1]),Oe(ue[2])}function Me(ee,J,oe,ye){de(ee),de(J),de(ye),de(J),de(oe),de(ye);const ue=s.length/3,Pe=x.generateSideWallUV(n,s,ue-6,ue-3,ue-2,ue-1);Oe(Pe[0]),Oe(Pe[1]),Oe(Pe[3]),Oe(Pe[1]),Oe(Pe[2]),Oe(Pe[3])}function de(ee){s.push(l[ee*3+0]),s.push(l[ee*3+1]),s.push(l[ee*3+2])}function Oe(ee){r.push(ee.x),r.push(ee.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return yA(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new g_[s.type]().fromJSON(s)),new Th(n,e.options)}}const vA={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new se(r,o),new se(a,l),new se(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[s*3],d=e[s*3+1],g=e[s*3+2],m=e[r*3],p=e[r*3+1],_=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new se(o,1-l),new se(c,1-h),new se(f,1-g),new se(m,1-_)]:[new se(a,1-l),new se(u,1-h),new se(d,1-g),new se(p,1-_)]}};function yA(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ji extends Nn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fh,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ys extends Ji{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function fi(i,e,t){return x_(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)}function Ra(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function x_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function xA(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Fp(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function b_(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class zo{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class bA extends zo{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pd,endingEnd:Pd}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Dd:r=e,a=2*t-n;break;case Nd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Dd:o=e,l=2*n-t;break;case Nd:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),m=g*g,p=m*g,_=-f*p+2*f*m-f*g,x=(1+f)*p+(-1.5-2*f)*m+(-.5+f)*g+1,w=(-1-d)*p+(1.5+d)*m+.5*g,y=d*p-d*m;for(let S=0;S!==a;++S)r[S]=_*o[u+S]+x*o[c+S]+w*o[l+S]+y*o[h+S];return r}}class SA extends zo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class MA extends zo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Fn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ra(t,this.TimeBufferType),this.values=Ra(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ra(e.times,Array),values:Ra(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new MA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new SA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bA(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case mo:t=this.InterpolantFactoryMethodDiscrete;break;case hr:t=this.InterpolantFactoryMethodLinear;break;case Wl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mo;case this.InterpolantFactoryMethodLinear:return hr;case this.InterpolantFactoryMethodSmooth:return Wl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=fi(n,r,o),this.values=fi(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&x_(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=fi(this.times),t=fi(this.values),n=this.getValueSize(),s=this.getInterpolation()===Wl,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const m=t[h+g];if(m!==t[f+g]||m!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=fi(e,0,o),this.values=fi(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=fi(this.times,0),t=fi(this.values,0),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=hr;class Er extends Fn{}Er.prototype.ValueTypeName="bool";Er.prototype.ValueBufferType=Array;Er.prototype.DefaultInterpolation=mo;Er.prototype.InterpolantFactoryMethodLinear=void 0;Er.prototype.InterpolantFactoryMethodSmooth=void 0;class S_ extends Fn{}S_.prototype.ValueTypeName="color";class bo extends Fn{}bo.prototype.ValueTypeName="number";class wA extends zo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)En.slerpFlat(r,0,o,c-a,o,c,l);return r}}class ls extends Fn{InterpolantFactoryMethodLinear(e){return new wA(this.times,this.values,this.getValueSize(),e)}}ls.prototype.ValueTypeName="quaternion";ls.prototype.DefaultInterpolation=hr;ls.prototype.InterpolantFactoryMethodSmooth=void 0;class Cr extends Fn{}Cr.prototype.ValueTypeName="string";Cr.prototype.ValueBufferType=Array;Cr.prototype.DefaultInterpolation=mo;Cr.prototype.InterpolantFactoryMethodLinear=void 0;Cr.prototype.InterpolantFactoryMethodSmooth=void 0;class So extends Fn{}So.prototype.ValueTypeName="vector";class TA{constructor(e,t=-1,n,s=_S){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=pn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(CA(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Fn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=xA(l);l=Fp(l,1,u),c=Fp(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new bo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,m){if(d.length!==0){const p=[],_=[];b_(d,p,_,g),p.length!==0&&m.push(new h(f,p,_))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let m=0;m<f[g].morphTargets.length;m++)d[f[g].morphTargets[m]]=-1;for(const m in d){const p=[],_=[];for(let x=0;x!==f[g].morphTargets.length;++x){const w=f[g];p.push(w.time),_.push(w.morphTarget===m?1:0)}s.push(new bo(".morphTargetInfluence["+m+"]",p,_))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(So,d+".position",f,"pos",s),n(ls,d+".quaternion",f,"rot",s),n(So,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function EA(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return bo;case"vector":case"vector2":case"vector3":case"vector4":return So;case"color":return S_;case"quaternion":return ls;case"bool":case"boolean":return Er;case"string":return Cr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function CA(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=EA(i.type);if(i.times===void 0){const t=[],n=[];b_(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const dr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class AA{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const RA=new AA;class Ar{constructor(e){this.manager=e!==void 0?e:RA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Vn={};class IA extends Error{constructor(e,t){super(e),this.response=t}}class Eh extends Ar{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=dr.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Vn[e]!==void 0){Vn[e].push({onLoad:t,onProgress:n,onError:s});return}Vn[e]=[],Vn[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Vn[e],h=c.body.getReader(),f=c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let m=0;const p=new ReadableStream({start(_){x();function x(){h.read().then(({done:w,value:y})=>{if(w)_.close();else{m+=y.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:d});for(let I=0,N=u.length;I<N;I++){const v=u[I];v.onProgress&&v.onProgress(S)}_.enqueue(y),x()}})}}});return new Response(p)}else throw new IA(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{dr.add(e,c);const u=Vn[e];delete Vn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Vn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Vn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class LA extends Ar{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=dr.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=_o("img");function l(){u(),dr.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class PA extends Ar{constructor(e){super(e)}load(e,t,n,s){const r=new Ht,o=new LA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class yl extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const kp=new Ve,Up=new P,zp=new P;class Ch{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mh,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Up.setFromMatrixPosition(e.matrixWorld),t.position.copy(Up),zp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zp),t.updateMatrixWorld(),kp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kp),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class DA extends Ch{constructor(){super(new Nt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=go*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class NA extends yl{constructor(e,t,n=0,s=Math.PI/3,r=0,o=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DefaultUp),this.updateMatrix(),this.target=new ct,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new DA}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Bp=new Ve,Br=new P,bc=new P;class OA extends Ch{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Br.setFromMatrixPosition(e.matrixWorld),n.position.copy(Br),bc.copy(n.position),bc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(bc),n.updateMatrixWorld(),s.makeTranslation(-Br.x,-Br.y,-Br.z),Bp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bp)}}class FA extends yl{constructor(e,t,n=0,s=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new OA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class kA extends Ch{constructor(){super(new gh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class M_ extends yl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DefaultUp),this.updateMatrix(),this.target=new ct,this.shadow=new kA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class UA extends yl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qi{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class zA extends Ar{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=dr.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){dr.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}class BA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Hp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Hp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Hp(){return(typeof performance>"u"?Date:performance).now()}const Ah="\\[\\]\\.:\\/",HA=new RegExp("["+Ah+"]","g"),Rh="[^"+Ah+"]",GA="[^"+Ah.replace("\\.","")+"]",VA=/((?:WC+[\/:])*)/.source.replace("WC",Rh),WA=/(WCOD+)?/.source.replace("WCOD",GA),$A=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rh),jA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rh),qA=new RegExp("^"+VA+WA+$A+jA+"$"),XA=["material","materials","bones","map"];class YA{constructor(e,t,n){const s=n||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Qe{constructor(e,t,n){this.path=t,this.parsedPath=n||Qe.parseTrackName(t),this.node=Qe.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Qe.Composite(e,t,n):new Qe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(HA,"")}static parseTrackName(e){const t=qA.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);XA.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Qe.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qe.Composite=YA;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class KA{constructor(e,t,n=0,s=1/0){this.ray=new gl(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ph,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return yu(e,this,n,t),n.sort(Gp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)yu(e[s],this,n,t);return n.sort(Gp),n}}function Gp(i,e){return i.distance-e.distance}function yu(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const s=i.children;for(let r=0,o=s.length;r<o;r++)yu(s[r],e,t,!0)}}class Vp{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ZA{constructor(){this.type="ShapePath",this.color=new Le,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new gu,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,r,o){return this.currentPath.bezierCurveTo(e,t,n,s,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(_){const x=[];for(let w=0,y=_.length;w<y;w++){const S=_[w],I=new ka;I.curves=S.curves,x.push(I)}return x}function n(_,x){const w=x.length;let y=!1;for(let S=w-1,I=0;I<w;S=I++){let N=x[S],v=x[I],R=v.x-N.x,U=v.y-N.y;if(Math.abs(U)>Number.EPSILON){if(U<0&&(N=x[I],R=-R,v=x[S],U=-U),_.y<N.y||_.y>v.y)continue;if(_.y===N.y){if(_.x===N.x)return!0}else{const W=U*(_.x-N.x)-R*(_.y-N.y);if(W===0)return!0;if(W<0)continue;y=!y}}else{if(_.y!==N.y)continue;if(v.x<=_.x&&_.x<=N.x||N.x<=_.x&&_.x<=v.x)return!0}}return y}const s=tr.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new ka,l.curves=a.curves,c.push(l),c;let u=!s(r[0].getPoints());u=e?!u:u;const h=[],f=[];let d=[],g=0,m;f[g]=void 0,d[g]=[];for(let _=0,x=r.length;_<x;_++)a=r[_],m=a.getPoints(),o=s(m),o=e?!o:o,o?(!u&&f[g]&&g++,f[g]={s:new ka,p:m},f[g].s.curves=a.curves,u&&g++,d[g]=[]):d[g].push({h:a,p:m[0]});if(!f[0])return t(r);if(f.length>1){let _=!1,x=0;for(let w=0,y=f.length;w<y;w++)h[w]=[];for(let w=0,y=f.length;w<y;w++){const S=d[w];for(let I=0;I<S.length;I++){const N=S[I];let v=!0;for(let R=0;R<f.length;R++)n(N.p,f[R].p)&&(w!==R&&x++,v?(v=!1,h[R].push(N)):_=!0);v&&h[w].push(N)}}x>0&&_===!1&&(d=h)}let p;for(let _=0,x=f.length;_<x;_++){l=f[_].s,c.push(l),p=d[_];for(let w=0,y=p.length;w<y;w++)l.holes.push(p[w].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hh);const Wp={type:"change"},Sc={type:"start"},$p={type:"end"};class JA extends _s{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ts.ROTATE,MIDDLE:Ts.DOLLY,RIGHT:Ts.PAN},this.touches={ONE:Es.ROTATE,TWO:Es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",Xe),this._domElementKeyEvents=T},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Wp),n.update(),r=s.NONE},this.update=function(){const T=new P,te=new En().setFromUnitVectors(e.up,new P(0,1,0)),le=te.clone().invert(),ge=new P,me=new En,Re=2*Math.PI;return function(){const lt=n.object.position;T.copy(lt).sub(n.target),T.applyQuaternion(te),a.setFromVector3(T),n.autoRotate&&r===s.NONE&&R(N()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let F=n.minAzimuthAngle,fe=n.maxAzimuthAngle;return isFinite(F)&&isFinite(fe)&&(F<-Math.PI?F+=Re:F>Math.PI&&(F-=Re),fe<-Math.PI?fe+=Re:fe>Math.PI&&(fe-=Re),F<=fe?a.theta=Math.max(F,Math.min(fe,a.theta)):a.theta=a.theta>(F+fe)/2?Math.max(F,a.theta):Math.min(fe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),T.setFromSpherical(a),T.applyQuaternion(le),lt.copy(n.target).add(T),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||ge.distanceToSquared(n.object.position)>o||8*(1-me.dot(n.object.quaternion))>o?(n.dispatchEvent(Wp),ge.copy(n.object.position),me.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",q),n.domElement.removeEventListener("pointerdown",oe),n.domElement.removeEventListener("pointercancel",Pe),n.domElement.removeEventListener("wheel",tt),n.domElement.removeEventListener("pointermove",ye),n.domElement.removeEventListener("pointerup",ue),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Xe)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new Vp,l=new Vp;let c=1;const u=new P;let h=!1;const f=new se,d=new se,g=new se,m=new se,p=new se,_=new se,x=new se,w=new se,y=new se,S=[],I={};function N(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function R(T){l.theta-=T}function U(T){l.phi-=T}const W=function(){const T=new P;return function(le,ge){T.setFromMatrixColumn(ge,0),T.multiplyScalar(-le),u.add(T)}}(),L=function(){const T=new P;return function(le,ge){n.screenSpacePanning===!0?T.setFromMatrixColumn(ge,1):(T.setFromMatrixColumn(ge,0),T.crossVectors(n.object.up,T)),T.multiplyScalar(le),u.add(T)}}(),M=function(){const T=new P;return function(le,ge){const me=n.domElement;if(n.object.isPerspectiveCamera){const Re=n.object.position;T.copy(Re).sub(n.target);let We=T.length();We*=Math.tan(n.object.fov/2*Math.PI/180),W(2*le*We/me.clientHeight,n.object.matrix),L(2*ge*We/me.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(W(le*(n.object.right-n.object.left)/n.object.zoom/me.clientWidth,n.object.matrix),L(ge*(n.object.top-n.object.bottom)/n.object.zoom/me.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function C(T){n.object.isPerspectiveCamera?c/=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*T)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(T){n.object.isPerspectiveCamera?c*=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/T)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(T){f.set(T.clientX,T.clientY)}function $(T){x.set(T.clientX,T.clientY)}function z(T){m.set(T.clientX,T.clientY)}function D(T){d.set(T.clientX,T.clientY),g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const te=n.domElement;R(2*Math.PI*g.x/te.clientHeight),U(2*Math.PI*g.y/te.clientHeight),f.copy(d),n.update()}function k(T){w.set(T.clientX,T.clientY),y.subVectors(w,x),y.y>0?C(v()):y.y<0&&O(v()),x.copy(w),n.update()}function Z(T){p.set(T.clientX,T.clientY),_.subVectors(p,m).multiplyScalar(n.panSpeed),M(_.x,_.y),m.copy(p),n.update()}function j(T){T.deltaY<0?O(v()):T.deltaY>0&&C(v()),n.update()}function ne(T){let te=!1;switch(T.code){case n.keys.UP:M(0,n.keyPanSpeed),te=!0;break;case n.keys.BOTTOM:M(0,-n.keyPanSpeed),te=!0;break;case n.keys.LEFT:M(n.keyPanSpeed,0),te=!0;break;case n.keys.RIGHT:M(-n.keyPanSpeed,0),te=!0;break}te&&(T.preventDefault(),n.update())}function he(){if(S.length===1)f.set(S[0].pageX,S[0].pageY);else{const T=.5*(S[0].pageX+S[1].pageX),te=.5*(S[0].pageY+S[1].pageY);f.set(T,te)}}function xe(){if(S.length===1)m.set(S[0].pageX,S[0].pageY);else{const T=.5*(S[0].pageX+S[1].pageX),te=.5*(S[0].pageY+S[1].pageY);m.set(T,te)}}function X(){const T=S[0].pageX-S[1].pageX,te=S[0].pageY-S[1].pageY,le=Math.sqrt(T*T+te*te);x.set(0,le)}function Te(){n.enableZoom&&X(),n.enablePan&&xe()}function be(){n.enableZoom&&X(),n.enableRotate&&he()}function Me(T){if(S.length==1)d.set(T.pageX,T.pageY);else{const le=Ce(T),ge=.5*(T.pageX+le.x),me=.5*(T.pageY+le.y);d.set(ge,me)}g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const te=n.domElement;R(2*Math.PI*g.x/te.clientHeight),U(2*Math.PI*g.y/te.clientHeight),f.copy(d)}function de(T){if(S.length===1)p.set(T.pageX,T.pageY);else{const te=Ce(T),le=.5*(T.pageX+te.x),ge=.5*(T.pageY+te.y);p.set(le,ge)}_.subVectors(p,m).multiplyScalar(n.panSpeed),M(_.x,_.y),m.copy(p)}function Oe(T){const te=Ce(T),le=T.pageX-te.x,ge=T.pageY-te.y,me=Math.sqrt(le*le+ge*ge);w.set(0,me),y.set(0,Math.pow(w.y/x.y,n.zoomSpeed)),C(y.y),x.copy(w)}function ee(T){n.enableZoom&&Oe(T),n.enablePan&&de(T)}function J(T){n.enableZoom&&Oe(T),n.enableRotate&&Me(T)}function oe(T){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(T.pointerId),n.domElement.addEventListener("pointermove",ye),n.domElement.addEventListener("pointerup",ue)),ie(T),T.pointerType==="touch"?A(T):Ee(T))}function ye(T){n.enabled!==!1&&(T.pointerType==="touch"?b(T):Se(T))}function ue(T){ae(T),S.length===0&&(n.domElement.releasePointerCapture(T.pointerId),n.domElement.removeEventListener("pointermove",ye),n.domElement.removeEventListener("pointerup",ue)),n.dispatchEvent($p),r=s.NONE}function Pe(T){ae(T)}function Ee(T){let te;switch(T.button){case 0:te=n.mouseButtons.LEFT;break;case 1:te=n.mouseButtons.MIDDLE;break;case 2:te=n.mouseButtons.RIGHT;break;default:te=-1}switch(te){case Ts.DOLLY:if(n.enableZoom===!1)return;$(T),r=s.DOLLY;break;case Ts.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enablePan===!1)return;z(T),r=s.PAN}else{if(n.enableRotate===!1)return;B(T),r=s.ROTATE}break;case Ts.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enableRotate===!1)return;B(T),r=s.ROTATE}else{if(n.enablePan===!1)return;z(T),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Sc)}function Se(T){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;D(T);break;case s.DOLLY:if(n.enableZoom===!1)return;k(T);break;case s.PAN:if(n.enablePan===!1)return;Z(T);break}}function tt(T){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(T.preventDefault(),n.dispatchEvent(Sc),j(T),n.dispatchEvent($p))}function Xe(T){n.enabled===!1||n.enablePan===!1||ne(T)}function A(T){switch(pe(T),S.length){case 1:switch(n.touches.ONE){case Es.ROTATE:if(n.enableRotate===!1)return;he(),r=s.TOUCH_ROTATE;break;case Es.PAN:if(n.enablePan===!1)return;xe(),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Es.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Te(),r=s.TOUCH_DOLLY_PAN;break;case Es.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;be(),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Sc)}function b(T){switch(pe(T),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Me(T),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;de(T),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ee(T),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;J(T),n.update();break;default:r=s.NONE}}function q(T){n.enabled!==!1&&T.preventDefault()}function ie(T){S.push(T)}function ae(T){delete I[T.pointerId];for(let te=0;te<S.length;te++)if(S[te].pointerId==T.pointerId){S.splice(te,1);return}}function pe(T){let te=I[T.pointerId];te===void 0&&(te=new se,I[T.pointerId]=te),te.set(T.pageX,T.pageY)}function Ce(T){const te=T.pointerId===S[0].pointerId?S[1]:S[0];return I[te.pointerId]}n.domElement.addEventListener("contextmenu",q),n.domElement.addEventListener("pointerdown",oe),n.domElement.addEventListener("pointercancel",Pe),n.domElement.addEventListener("wheel",tt,{passive:!1}),this.update()}}class QA extends Ar{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new s1(t)}),this.register(function(t){return new h1(t)}),this.register(function(t){return new f1(t)}),this.register(function(t){return new o1(t)}),this.register(function(t){return new a1(t)}),this.register(function(t){return new l1(t)}),this.register(function(t){return new c1(t)}),this.register(function(t){return new i1(t)}),this.register(function(t){return new u1(t)}),this.register(function(t){return new r1(t)}),this.register(function(t){return new t1(t)}),this.register(function(t){return new d1(t)})}load(e,t,n,s){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Qi.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Eh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={};if(typeof e=="string")r=e;else if(Qi.decodeText(new Uint8Array(e,0,4))===w_){try{o[Be.KHR_BINARY_GLTF]=new p1(e)}catch(h){s&&s(h);return}r=o[Be.KHR_BINARY_GLTF].content}else r=Qi.decodeText(new Uint8Array(e));const l=JSON.parse(r);if(l.asset===void 0||l.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new C1(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);a[h.name]=h,o[h.name]=!0}if(l.extensionsUsed)for(let u=0;u<l.extensionsUsed.length;++u){const h=l.extensionsUsed[u],f=l.extensionsRequired||[];switch(h){case Be.KHR_MATERIALS_UNLIT:o[h]=new n1;break;case Be.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:o[h]=new _1;break;case Be.KHR_DRACO_MESH_COMPRESSION:o[h]=new m1(l,this.dracoLoader);break;case Be.KHR_TEXTURE_TRANSFORM:o[h]=new g1;break;case Be.KHR_MESH_QUANTIZATION:o[h]=new v1;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function e1(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Be={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class t1{constructor(e){this.parser=e,this.name=Be.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Le(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new M_(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new FA(u),c.distance=h;break;case"spot":c=new NA(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class n1{constructor(){this.name=Be.KHR_MATERIALS_UNLIT}getMaterialType(){return un}extendParams(e,t,n){const s=[];e.color=new Le(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Je))}return Promise.all(s)}}class i1{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class s1{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ys}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new se(a,a)}return Promise.all(r)}}class r1{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ys}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class o1{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ys}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Je)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class a1{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ys}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class l1{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ys}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Le(a[0],a[1],a[2]),Promise.all(r)}}class c1{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ys}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class u1{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ys}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Le(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Je)),Promise.all(r)}}class h1{constructor(e){this.parser=e,this.name=Be.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class f1{constructor(e){this.parser=e,this.name=Be.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class d1{constructor(e){this.name=Be.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}}const w_="glTF",Hr=12,jp={JSON:1313821514,BIN:5130562};class p1{constructor(e){this.name=Be.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Hr);if(this.header={magic:Qi.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==w_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Hr,s=new DataView(e,Hr);let r=0;for(;r<n;){const o=s.getUint32(r,!0);r+=4;const a=s.getUint32(r,!0);if(r+=4,a===jp.JSON){const l=new Uint8Array(e,Hr+r,o);this.content=Qi.decodeText(l)}else if(a===jp.BIN){const l=Hr+r;this.body=e.slice(l,l+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class m1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Be.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=bu[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=bu[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=Mo[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){s.decodeDracoFile(u,function(f){for(const d in f.attributes){const g=f.attributes[d],m=l[d];m!==void 0&&(g.normalized=m)}h(f)},a,c)})})}}class g1{constructor(){this.name=Be.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class xu extends Ji{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),s=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),r=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),o=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),a={specular:{value:new Le().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=a,this.onBeforeCompile=function(l){for(const c in a)l.uniforms[c]=a[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",s).replace("#include <metalnessmap_fragment>",r).replace("#include <lights_physical_fragment>",o)},Object.defineProperties(this,{specular:{get:function(){return a.specular.value},set:function(l){a.specular.value=l}},specularMap:{get:function(){return a.specularMap.value},set:function(l){a.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return a.glossiness.value},set:function(l){a.glossiness.value=l}},glossinessMap:{get:function(){return a.glossinessMap.value},set:function(l){a.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class _1{constructor(){this.name=Be.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity"]}getMaterialType(){return xu}extendParams(e,t,n){const s=t.extensions[this.name];e.color=new Le(1,1,1),e.opacity=1;const r=[];if(Array.isArray(s.diffuseFactor)){const o=s.diffuseFactor;e.color.fromArray(o),e.opacity=o[3]}if(s.diffuseTexture!==void 0&&r.push(n.assignTexture(e,"map",s.diffuseTexture,Je)),e.emissive=new Le(0,0,0),e.glossiness=s.glossinessFactor!==void 0?s.glossinessFactor:1,e.specular=new Le(1,1,1),Array.isArray(s.specularFactor)&&e.specular.fromArray(s.specularFactor),s.specularGlossinessTexture!==void 0){const o=s.specularGlossinessTexture;r.push(n.assignTexture(e,"glossinessMap",o)),r.push(n.assignTexture(e,"specularMap",o,Je))}return Promise.all(r)}createMaterial(e){const t=new xu(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=e.emissiveIntensity===void 0?1:e.emissiveIntensity,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=fh,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t}}class v1{constructor(){this.name=Be.KHR_MESH_QUANTIZATION}}class T_ extends zo{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,m=g-c,p=-2*d+3*f,_=d-f,x=1-p,w=_-f+h;for(let y=0;y!==a;y++){const S=o[m+y+a],I=o[m+y+l]*u,N=o[g+y+a],v=o[g+y]*u;r[y]=x*S+w*I+p*N+_*v}return r}}const y1=new En;class x1 extends T_{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return y1.fromArray(r).normalize().toArray(r),r}}const Wn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Mo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},qp={9728:Rt,9729:Wt,9984:cu,9985:Wg,9986:uu,9987:Sr},Xp={33071:cn,33648:Ka,10497:lr},Yp={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},bu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},di={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},b1={CUBICSPLINE:void 0,LINEAR:hr,STEP:mo},Mc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function S1(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ji({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:os})),i.DefaultMaterial}function Gr(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function zi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function M1(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(s){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function w1(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function T1(i){const e=i.extensions&&i.extensions[Be.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Kp(e.attributes):t=i.indices+":"+Kp(i.attributes)+":"+i.mode,t}function Kp(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Su(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function E1(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class C1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new e1,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};const n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;typeof createImageBitmap>"u"||n||s&&r<98?this.textureLoader=new PA(this.options.manager):this.textureLoader=new zA(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Eh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};Gr(r,a,s),zi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this.loadNode(t);break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Be.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(Qi.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0)return Promise.resolve(null);const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Yp[s.type],c=Mo[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let m,p;if(d&&d!==h){const _=Math.floor(f/d),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+_+":"+s.count;let w=t.cache.get(x);w||(m=new c(a,_*d,s.count*d/u),w=new NC(m,d/u),t.cache.add(x,w)),p=new vh(w,l,f%d/u,g)}else a===null?m=new c(s.count*l):m=new c(a,f,s.count*l),p=new qt(m,l,g);if(s.sparse!==void 0){const _=Yp.SCALAR,x=Mo[s.sparse.indices.componentType],w=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,S=new x(o[1],w,s.sparse.count*_),I=new c(o[2],y,s.sparse.count*l);a!==null&&(p=new qt(p.array.slice(),p.itemSize,p.normalized));for(let N=0,v=S.length;N<v;N++){const R=S[N];if(p.setX(R,I[N*l]),l>=2&&p.setY(R,I[N*l+1]),l>=3&&p.setZ(R,I[N*l+2]),l>=4&&p.setW(R,I[N*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,o.name&&(u.name=o.name);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=qp[f.magFilter]||Wt,u.minFilter=qp[f.minFilter]||Sr,u.wrapS=Xp[f.wrapS]||lr,u.wrapT=Xp[f.wrapT]||lr,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(m){const p=new Ht(m);p.needsUpdate=!0,f(p)}),t.load(Qi.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||E1(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),r.extensions[Be.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Be.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Be.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.encoding=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new f_,Nn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new h_,Nn.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(a+="specular-glossiness:"),s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Ji}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Be.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const h=s[Be.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else if(l[Be.KHR_MATERIALS_UNLIT]){const h=s[Be.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Le(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.fromArray(f),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Je)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ln);const u=r.alphaMode||Mc.OPAQUE;if(u===Mc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Mc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==un&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new se(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&o!==un&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==un&&(a.emissive=new Le().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&o!==un&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Je)),Promise.all(c).then(function(){let h;return o===xu?h=s[Be.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a):h=new o(a),r.name&&(h.name=r.name),zi(h,r),t.associations.set(h,{materials:e}),r.extensions&&Gr(s,h,r),h})}createUniqueName(e){const t=Qe.sanitizeNodeName(e||"");let n=t;for(let s=1;this.nodeNamesUsed[n];++s)n=t+"_"+s;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Be.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Zp(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=T1(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[Be.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Zp(new mn,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?S1(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const m=u[d],p=o[d];let _;const x=c[d];if(p.mode===Wn.TRIANGLES||p.mode===Wn.TRIANGLE_STRIP||p.mode===Wn.TRIANGLE_FAN||p.mode===void 0)_=r.isSkinnedMesh===!0?new FC(m,x):new It(m,x),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),p.mode===Wn.TRIANGLE_STRIP?_.geometry=Jp(_.geometry,vS):p.mode===Wn.TRIANGLE_FAN&&(_.geometry=Jp(_.geometry,jg));else if(p.mode===Wn.LINES)_=new zC(m,x);else if(p.mode===Wn.LINE_STRIP)_=new xh(m,x);else if(p.mode===Wn.LINE_LOOP)_=new BC(m,x);else if(p.mode===Wn.POINTS)_=new HC(m,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(_.geometry.morphAttributes).length>0&&w1(_,r),_.name=t.createUniqueName(r.name||"mesh_"+e),zi(_,r),p.extensions&&Gr(s,_,p),t.assignFinalMaterial(_),h.push(_)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return h[0];const f=new $i;t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Nt(FS.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new gh(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),zi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(s){return n.inverseBindMatrices=s,n})}loadAnimation(e){const n=this.json.animations[e],s=[],r=[],o=[],a=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const h=n.channels[c],f=n.samplers[h.sampler],d=h.target,g=d.node,m=n.parameters!==void 0?n.parameters[f.input]:f.input,p=n.parameters!==void 0?n.parameters[f.output]:f.output;s.push(this.getDependency("node",g)),r.push(this.getDependency("accessor",m)),o.push(this.getDependency("accessor",p)),a.push(f),l.push(d)}return Promise.all([Promise.all(s),Promise.all(r),Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2],d=c[3],g=c[4],m=[];for(let _=0,x=u.length;_<x;_++){const w=u[_],y=h[_],S=f[_],I=d[_],N=g[_];if(w===void 0)continue;w.updateMatrix();let v;switch(di[N.path]){case di.weights:v=bo;break;case di.rotation:v=ls;break;case di.position:case di.scale:default:v=So;break}const R=w.name?w.name:w.uuid,U=I.interpolation!==void 0?b1[I.interpolation]:hr,W=[];di[N.path]===di.weights?w.traverse(function(M){M.morphTargetInfluences&&W.push(M.name?M.name:M.uuid)}):W.push(R);let L=S.array;if(S.normalized){const M=Su(L.constructor),C=new Float32Array(L.length);for(let O=0,B=L.length;O<B;O++)C[O]=L[O]*M;L=C}for(let M=0,C=W.length;M<C;M++){const O=new v(W[M]+"."+di[N.path],y.array,L,U);I.interpolation==="CUBICSPLINE"&&(O.createInterpolant=function($){const z=this instanceof ls?x1:T_;return new z(this.times,this.values,this.getValueSize()/3,$)},O.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(O)}}const p=n.name?n.name:"animation_"+e;return new TA(p,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(!!a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this.extensions,s=this,r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"";return function(){const a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),Promise.all(a)}().then(function(a){let l;if(r.isBone===!0?l=new u_:a.length>1?l=new $i:a.length===1?l=a[0]:l=new ct,l!==a[0])for(let c=0,u=a.length;c<u;c++)l.add(a[c]);if(r.name&&(l.userData.name=r.name,l.name=o),zi(l,r),r.extensions&&Gr(n,l,r),r.matrix!==void 0){const c=new Ve;c.fromArray(r.matrix),l.applyMatrix4(c)}else r.translation!==void 0&&l.position.fromArray(r.translation),r.rotation!==void 0&&l.quaternion.fromArray(r.rotation),r.scale!==void 0&&l.scale.fromArray(r.scale);return s.associations.has(l)||s.associations.set(l,{}),s.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,n=this.extensions,s=this.json.scenes[e],r=this,o=new $i;s.name&&(o.name=r.createUniqueName(s.name)),zi(o,s),s.extensions&&Gr(n,o,s);const a=s.nodes||[],l=[];for(let c=0,u=a.length;c<u;c++)l.push(E_(a[c],o,t,r));return Promise.all(l).then(function(){const c=u=>{const h=new Map;for(const[f,d]of r.associations)(f instanceof Nn||f instanceof Ht)&&h.set(f,d);return u.traverse(f=>{const d=r.associations.get(f);d!=null&&h.set(f,d)}),h};return r.associations=c(o),o})}}function E_(i,e,t,n){const s=t.nodes[i];return n.getDependency("node",i).then(function(r){if(s.skin===void 0)return r;let o;return n.getDependency("skin",s.skin).then(function(a){o=a;const l=[];for(let c=0,u=o.joints.length;c<u;c++)l.push(n.getDependency("node",o.joints[c]));return Promise.all(l)}).then(function(a){return r.traverse(function(l){if(!l.isMesh)return;const c=[],u=[];for(let h=0,f=a.length;h<f;h++){const d=a[h];if(d){c.push(d);const g=new Ve;o.inverseBindMatrices!==void 0&&g.fromArray(o.inverseBindMatrices.array,h*16),u.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',o.joints[h])}l.bind(new yh(c,u),l.matrixWorld)}),r})}).then(function(r){e.add(r);const o=[];if(s.children){const a=s.children;for(let l=0,c=a.length;l<c;l++){const u=a[l];o.push(E_(u,r,t,n))}}return Promise.all(o)})}function A1(i,e,t){const n=e.attributes,s=new vs;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),a.normalized){const u=Su(Mo[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new P,l=new P;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const m=Su(Mo[f.componentType]);l.multiplyScalar(m)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Mr;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Zp(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=bu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return zi(i,e),A1(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?M1(i,e.targets,t):i})}function Jp(i,e){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===jg)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r}class R1 extends Ar{constructor(e){super(e)}load(e,t,n,s){const r=this,o=new Eh(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=r.parse(JSON.parse(a));t&&t(l)},n,s)}parse(e){return new I1(e)}}class I1{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],s=L1(e,t,this.data);for(let r=0,o=s.length;r<o;r++)n.push(...s[r].toShapes());return n}}function L1(i,e,t){const n=Array.from(i),s=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*s,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const u=n[c];if(u===`
`)a=0,l-=r;else{const h=P1(u,s,a,l,t);a+=h.offsetX,o.push(h.path)}}return o}function P1(i,e,t,n,s){const r=s.glyphs[i]||s.glyphs["?"];if(!r){console.error('THREE.Font: character "'+i+'" does not exists in font family '+s.familyName+".");return}const o=new ZA;let a,l,c,u,h,f,d,g;if(r.o){const m=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let p=0,_=m.length;p<_;)switch(m[p++]){case"m":a=m[p++]*e+t,l=m[p++]*e+n,o.moveTo(a,l);break;case"l":a=m[p++]*e+t,l=m[p++]*e+n,o.lineTo(a,l);break;case"q":c=m[p++]*e+t,u=m[p++]*e+n,h=m[p++]*e+t,f=m[p++]*e+n,o.quadraticCurveTo(h,f,c,u);break;case"b":c=m[p++]*e+t,u=m[p++]*e+n,h=m[p++]*e+t,f=m[p++]*e+n,d=m[p++]*e+t,g=m[p++]*e+n,o.bezierCurveTo(h,f,d,g,c,u);break}}return{offsetX:r.ha*e,path:o}}class wc extends Th{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const s=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(s,t)}this.type="TextGeometry"}}class xl extends It{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new Nt;const n=this,s=t.color!==void 0?new Le(t.color):new Le(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||xl.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new pi,h=new P,f=new P,d=new P,g=new Ve,m=new P(0,0,-1),p=new et,_=new P,x=new P,w=new et,y=new Ve,S=this.camera,I=new Ai(r,o,{samples:c,type:cr}),N=new Qn({uniforms:t_.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});N.uniforms.tDiffuse.value=I.texture,N.uniforms.color.value=s,N.uniforms.textureMatrix.value=y,this.material=N,this.onBeforeRender=function(v,R,U){if(f.setFromMatrixPosition(n.matrixWorld),d.setFromMatrixPosition(U.matrixWorld),g.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(g),_.subVectors(f,d),_.dot(h)>0)return;_.reflect(h).negate(),_.add(f),g.extractRotation(U.matrixWorld),m.set(0,0,-1),m.applyMatrix4(g),m.add(d),x.subVectors(f,m),x.reflect(h).negate(),x.add(f),S.position.copy(_),S.up.set(0,1,0),S.up.applyMatrix4(g),S.up.reflect(h),S.lookAt(x),S.far=U.far,S.updateMatrixWorld(),S.projectionMatrix.copy(U.projectionMatrix),y.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),y.multiply(S.projectionMatrix),y.multiply(S.matrixWorldInverse),y.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(h,f),u.applyMatrix4(S.matrixWorldInverse),p.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const W=S.projectionMatrix;w.x=(Math.sign(p.x)+W.elements[8])/W.elements[0],w.y=(Math.sign(p.y)+W.elements[9])/W.elements[5],w.z=-1,w.w=(1+W.elements[10])/W.elements[14],p.multiplyScalar(2/p.dot(w)),W.elements[2]=p.x,W.elements[6]=p.y,W.elements[10]=p.z+1-a,W.elements[14]=p.w,n.visible=!1;const L=v.getRenderTarget(),M=v.xr.enabled,C=v.shadowMap.autoUpdate,O=v.outputEncoding,B=v.toneMapping;v.xr.enabled=!1,v.shadowMap.autoUpdate=!1,v.outputEncoding=Ci,v.toneMapping=Dn,v.setRenderTarget(I),v.state.buffers.depth.setMask(!0),v.autoClear===!1&&v.clear(),v.render(R,S),v.xr.enabled=M,v.shadowMap.autoUpdate=C,v.outputEncoding=O,v.toneMapping=B,v.setRenderTarget(L);const $=U.viewport;$!==void 0&&v.state.viewport($),n.visible=!0},this.getRenderTarget=function(){return I},this.dispose=function(){I.dispose(),n.material.dispose()}}}xl.ReflectorShader={uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <encodings_fragment>

		}`};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re=function(i,e){if(!i)throw Rr(e)},Rr=function(i){return new Error("Firebase Database ("+C_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_=function(i){const e=[];let t=0;for(let n=0;n<i.length;n++){let s=i.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<i.length&&(i.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(i.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},D1=function(i){const e=[];let t=0,n=0;for(;t<i.length;){const s=i[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const r=i[t++];e[n++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=i[t++],o=i[t++],a=i[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const r=i[t++],o=i[t++];e[n++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ih={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<i.length;s+=3){const r=i[s],o=s+1<i.length,a=o?i[s+1]:0,l=s+2<i.length,c=l?i[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),n.push(t[u],t[h],t[f],t[d])}return n.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(A_(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):D1(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<i.length;){const r=t[i.charAt(s++)],a=s<i.length?t[i.charAt(s)]:0;++s;const c=s<i.length?t[i.charAt(s)]:64;++s;const h=s<i.length?t[i.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw Error();const f=r<<2|a>>4;if(n.push(f),c!==64){const d=a<<4&240|c>>2;if(n.push(d),h!==64){const g=c<<6&192|h;n.push(g)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}},R_=function(i){const e=A_(i);return Ih.encodeByteArray(e,!0)},I_=function(i){return R_(i).replace(/\./g,"")},Qp=function(i){try{return Ih.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N1(i){return L_(void 0,i)}function L_(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!O1(t)||(i[t]=L_(i[t],e[t]));return i}function O1(i){return i!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F1(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function P_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(F1())}function k1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function D_(){return C_.NODE_ADMIN===!0}function U1(){return typeof indexedDB=="object"}function z1(){return new Promise((i,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),i(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1="FirebaseError";class Bo extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=B1,Object.setPrototypeOf(this,Bo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,N_.prototype.create)}}class N_{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?H1(r,n):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Bo(s,a,n)}}function H1(i,e){return i.replace(G1,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const G1=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(i){return JSON.parse(i)}function Ct(i){return JSON.stringify(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_=function(i){let e={},t={},n={},s="";try{const r=i.split(".");e=wo(Qp(r[0])||""),t=wo(Qp(r[1])||""),s=r[2],n=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:n,signature:s}},V1=function(i){const e=O_(i),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},W1=function(i){const e=O_(i).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function pr(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function em(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Ja(i,e,t){const n={};for(const s in i)Object.prototype.hasOwnProperty.call(i,s)&&(n[s]=e.call(t,i[s],s,i));return n}function Mu(i,e){if(i===e)return!0;const t=Object.keys(i),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const r=i[s],o=e[s];if(tm(r)&&tm(o)){if(!Mu(r,o))return!1}else if(r!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function tm(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $1(i){const e=[];for(const[t,n]of Object.entries(i))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)n[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)n[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const f=n[h-3]^n[h-8]^n[h-14]^n[h-16];n[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(s<<5|s>>>27)+c+l+u+n[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const n=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=n;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let n=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[n]=this.chain_[s]>>r&255,++n;return e}}function F_(i,e){return`${i} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1=function(i){const e=[];let t=0;for(let n=0;n<i.length;n++){let s=i.charCodeAt(n);if(s>=55296&&s<=56319){const r=s-55296;n++,re(n<i.length,"Surrogate pair missing trail surrogate.");const o=i.charCodeAt(n)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},bl=function(i){let e=0;for(let t=0;t<i.length;t++){const n=i.charCodeAt(t);n<128?e++:n<2048?e+=2:n>=55296&&n<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Ph(i){return i&&i._delegate?i._delegate:i}class To{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Bi="[DEFAULT]";/**
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
 */class X1{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Lh;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(K1(e))try{this.getOrInitializeService({instanceIdentifier:Bi})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});n.resolve(r)}catch{}}}}clearInstance(e=Bi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bi){return this.instances.has(e)}getOptions(e=Bi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);n===a&&o.resolve(s)}return s}onInit(e,t){var n;const s=this.normalizeInstanceIdentifier(t),r=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(!!n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Y1(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Bi){return this.component?this.component.multipleInstances?e:Bi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Y1(i){return i===Bi?void 0:i}function K1(i){return i.instantiationMode==="EAGER"}/**
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
 */class Z1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new X1(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var st;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(st||(st={}));const J1={debug:st.DEBUG,verbose:st.VERBOSE,info:st.INFO,warn:st.WARN,error:st.ERROR,silent:st.SILENT},Q1=st.INFO,eR={[st.DEBUG]:"log",[st.VERBOSE]:"log",[st.INFO]:"info",[st.WARN]:"warn",[st.ERROR]:"error"},tR=(i,e,...t)=>{if(e<i.logLevel)return;const n=new Date().toISOString(),s=eR[e];if(s)console[s](`[${n}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class k_{constructor(e){this.name=e,this._logLevel=Q1,this._logHandler=tR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in st))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?J1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,st.DEBUG,...e),this._logHandler(this,st.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,st.VERBOSE,...e),this._logHandler(this,st.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,st.INFO,...e),this._logHandler(this,st.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,st.WARN,...e),this._logHandler(this,st.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,st.ERROR,...e),this._logHandler(this,st.ERROR,...e)}}const nR=(i,e)=>e.some(t=>i instanceof t);let nm,im;function iR(){return nm||(nm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sR(){return im||(im=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const U_=new WeakMap,wu=new WeakMap,z_=new WeakMap,Tc=new WeakMap,Dh=new WeakMap;function rR(i){const e=new Promise((t,n)=>{const s=()=>{i.removeEventListener("success",r),i.removeEventListener("error",o)},r=()=>{t(bi(i.result)),s()},o=()=>{n(i.error),s()};i.addEventListener("success",r),i.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&U_.set(t,i)}).catch(()=>{}),Dh.set(e,i),e}function oR(i){if(wu.has(i))return;const e=new Promise((t,n)=>{const s=()=>{i.removeEventListener("complete",r),i.removeEventListener("error",o),i.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{n(i.error||new DOMException("AbortError","AbortError")),s()};i.addEventListener("complete",r),i.addEventListener("error",o),i.addEventListener("abort",o)});wu.set(i,e)}let Tu={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return wu.get(i);if(e==="objectStoreNames")return i.objectStoreNames||z_.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return bi(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function aR(i){Tu=i(Tu)}function lR(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=i.call(Ec(this),e,...t);return z_.set(n,e.sort?e.sort():[e]),bi(n)}:sR().includes(i)?function(...e){return i.apply(Ec(this),e),bi(U_.get(this))}:function(...e){return bi(i.apply(Ec(this),e))}}function cR(i){return typeof i=="function"?lR(i):(i instanceof IDBTransaction&&oR(i),nR(i,iR())?new Proxy(i,Tu):i)}function bi(i){if(i instanceof IDBRequest)return rR(i);if(Tc.has(i))return Tc.get(i);const e=cR(i);return e!==i&&(Tc.set(i,e),Dh.set(e,i)),e}const Ec=i=>Dh.get(i);function uR(i,e,{blocked:t,upgrade:n,blocking:s,terminated:r}={}){const o=indexedDB.open(i,e),a=bi(o);return n&&o.addEventListener("upgradeneeded",l=>{n(bi(o.result),l.oldVersion,l.newVersion,bi(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const hR=["get","getKey","getAll","getAllKeys","count"],fR=["put","add","delete","clear"],Cc=new Map;function sm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Cc.get(e))return Cc.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=fR.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||hR.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return n&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return Cc.set(e,r),r}aR(i=>({...i,get:(e,t,n)=>sm(e,t)||i.get(e,t,n),has:(e,t)=>!!sm(e,t)||i.has(e,t)}));/**
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
 */class dR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(pR(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function pR(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Eu="@firebase/app",rm="0.7.33";/**
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
 */const cs=new k_("@firebase/app"),mR="@firebase/app-compat",gR="@firebase/analytics-compat",_R="@firebase/analytics",vR="@firebase/app-check-compat",yR="@firebase/app-check",xR="@firebase/auth",bR="@firebase/auth-compat",SR="@firebase/database",MR="@firebase/database-compat",wR="@firebase/functions",TR="@firebase/functions-compat",ER="@firebase/installations",CR="@firebase/installations-compat",AR="@firebase/messaging",RR="@firebase/messaging-compat",IR="@firebase/performance",LR="@firebase/performance-compat",PR="@firebase/remote-config",DR="@firebase/remote-config-compat",NR="@firebase/storage",OR="@firebase/storage-compat",FR="@firebase/firestore",kR="@firebase/firestore-compat",UR="firebase",zR="9.10.0";/**
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
 */const B_="[DEFAULT]",BR={[Eu]:"fire-core",[mR]:"fire-core-compat",[_R]:"fire-analytics",[gR]:"fire-analytics-compat",[yR]:"fire-app-check",[vR]:"fire-app-check-compat",[xR]:"fire-auth",[bR]:"fire-auth-compat",[SR]:"fire-rtdb",[MR]:"fire-rtdb-compat",[wR]:"fire-fn",[TR]:"fire-fn-compat",[ER]:"fire-iid",[CR]:"fire-iid-compat",[AR]:"fire-fcm",[RR]:"fire-fcm-compat",[IR]:"fire-perf",[LR]:"fire-perf-compat",[PR]:"fire-rc",[DR]:"fire-rc-compat",[NR]:"fire-gcs",[OR]:"fire-gcs-compat",[FR]:"fire-fst",[kR]:"fire-fst-compat","fire-js":"fire-js",[UR]:"fire-js-all"};/**
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
 */const Qa=new Map,Cu=new Map;function HR(i,e){try{i.container.addComponent(e)}catch(t){cs.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function el(i){const e=i.name;if(Cu.has(e))return cs.debug(`There were multiple attempts to register component ${e}.`),!1;Cu.set(e,i);for(const t of Qa.values())HR(t,i);return!0}function GR(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}/**
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
 */const VR={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},us=new N_("app","Firebase",VR);/**
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
 */class WR{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new To("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw us.create("app-deleted",{appName:this._name})}}/**
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
 */const $R=zR;function jR(i,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:B_,automaticDataCollectionEnabled:!1},e),n=t.name;if(typeof n!="string"||!n)throw us.create("bad-app-name",{appName:String(n)});const s=Qa.get(n);if(s){if(Mu(i,s.options)&&Mu(t,s.config))return s;throw us.create("duplicate-app",{appName:n})}const r=new Z1(n);for(const a of Cu.values())r.addComponent(a);const o=new WR(i,t,r);return Qa.set(n,o),o}function qR(i=B_){const e=Qa.get(i);if(!e)throw us.create("no-app",{appName:i});return e}function nr(i,e,t){var n;let s=(n=BR[i])!==null&&n!==void 0?n:i;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cs.warn(a.join(" "));return}el(new To(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const XR="firebase-heartbeat-database",YR=1,Eo="firebase-heartbeat-store";let Ac=null;function H_(){return Ac||(Ac=uR(XR,YR,{upgrade:(i,e)=>{switch(e){case 0:i.createObjectStore(Eo)}}}).catch(i=>{throw us.create("idb-open",{originalErrorMessage:i.message})})),Ac}async function KR(i){var e;try{return(await H_()).transaction(Eo).objectStore(Eo).get(G_(i))}catch(t){if(t instanceof Bo)cs.warn(t.message);else{const n=us.create("idb-get",{originalErrorMessage:(e=t)===null||e===void 0?void 0:e.message});cs.warn(n.message)}}}async function om(i,e){var t;try{const s=(await H_()).transaction(Eo,"readwrite");return await s.objectStore(Eo).put(e,G_(i)),s.done}catch(n){if(n instanceof Bo)cs.warn(n.message);else{const s=us.create("idb-set",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});cs.warn(s.message)}}}function G_(i){return`${i.name}!${i.options.appId}`}/**
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
 */const ZR=1024,JR=30*24*60*60*1e3;class QR{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new tI(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=am();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(s=>s.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=JR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=am(),{heartbeatsToSend:t,unsentEntries:n}=eI(this._heartbeatsCache.heartbeats),s=I_(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function am(){return new Date().toISOString().substring(0,10)}function eI(i,e=ZR){const t=[];let n=i.slice();for(const s of i){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),lm(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),lm(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class tI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return U1()?z1().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await KR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return om(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return om(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function lm(i){return I_(JSON.stringify({version:2,heartbeats:i})).length}/**
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
 */function nI(i){el(new To("platform-logger",e=>new dR(e),"PRIVATE")),el(new To("heartbeat",e=>new QR(e),"PRIVATE")),nr(Eu,rm,i),nr(Eu,rm,"esm2017"),nr("fire-js","")}nI("");var iI="firebase",sI="9.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nr(iI,sI,"app");const cm="@firebase/database",um="0.13.6";/**
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
 */let V_="";function rI(i){V_=i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ct(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:wo(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ti(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new oI(e)}}catch{}return new aI},ji=W_("localStorage"),Au=W_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new k_("@firebase/database"),lI=function(){let i=1;return function(){return i++}}(),$_=function(i){const e=q1(i),t=new j1;t.update(e);const n=t.digest();return Ih.encodeByteArray(n)},Ho=function(...i){let e="";for(let t=0;t<i.length;t++){const n=i[t];Array.isArray(n)||n&&typeof n=="object"&&typeof n.length=="number"?e+=Ho.apply(null,n):typeof n=="object"?e+=Ct(n):e+=n,e+=" "}return e};let es=null,hm=!0;const cI=function(i,e){re(!e||i===!0||i===!1,"Can't turn on custom loggers persistently."),i===!0?(ir.logLevel=st.VERBOSE,es=ir.log.bind(ir),e&&Au.set("logging_enabled",!0)):typeof i=="function"?es=i:(es=null,Au.remove("logging_enabled"))},Ot=function(...i){if(hm===!0&&(hm=!1,es===null&&Au.get("logging_enabled")===!0&&cI(!0)),es){const e=Ho.apply(null,i);es(e)}},Go=function(i){return function(...e){Ot(i,...e)}},Ru=function(...i){const e="FIREBASE INTERNAL ERROR: "+Ho(...i);ir.error(e)},hs=function(...i){const e=`FIREBASE FATAL ERROR: ${Ho(...i)}`;throw ir.error(e),new Error(e)},tn=function(...i){const e="FIREBASE WARNING: "+Ho(...i);ir.warn(e)},uI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&tn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},j_=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},hI=function(i){if(document.readyState==="complete")i();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},mr="[MIN_NAME]",fs="[MAX_NAME]",Ir=function(i,e){if(i===e)return 0;if(i===mr||e===fs)return-1;if(e===mr||i===fs)return 1;{const t=fm(i),n=fm(e);return t!==null?n!==null?t-n===0?i.length-e.length:t-n:-1:n!==null?1:i<e?-1:1}},fI=function(i,e){return i===e?0:i<e?-1:1},Vr=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+Ct(e))},Nh=function(i){if(typeof i!="object"||i===null)return Ct(i);const e=[];for(const n in i)e.push(n);e.sort();let t="{";for(let n=0;n<e.length;n++)n!==0&&(t+=","),t+=Ct(e[n]),t+=":",t+=Nh(i[e[n]]);return t+="}",t},q_=function(i,e){const t=i.length;if(t<=e)return[i];const n=[];for(let s=0;s<t;s+=e)s+e>t?n.push(i.substring(s,t)):n.push(i.substring(s,s+e));return n};function Yt(i,e){for(const t in i)i.hasOwnProperty(t)&&e(t,i[t])}const X_=function(i){re(!j_(i),"Invalid JSON number");const e=11,t=52,n=(1<<e-1)-1;let s,r,o,a,l;i===0?(r=0,o=0,s=1/i===-1/0?1:0):(s=i<0,i=Math.abs(i),i>=Math.pow(2,1-n)?(a=Math.min(Math.floor(Math.log(i)/Math.LN2),n),r=a+n,o=Math.round(i*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(i/Math.pow(2,1-n-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},dI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},pI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function mI(i,e){let t="Unknown Error";i==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":i==="permission_denied"?t="Client doesn't have permission to access the desired data.":i==="unavailable"&&(t="The service is unavailable");const n=new Error(i+" at "+e._path.toString()+": "+t);return n.code=i.toUpperCase(),n}const gI=new RegExp("^-?(0*)\\d{1,10}$"),_I=-2147483648,vI=2147483647,fm=function(i){if(gI.test(i)){const e=Number(i);if(e>=_I&&e<=vI)return e}return null},Vo=function(i){try{i()}catch(e){setTimeout(()=>{const t=e.stack||"";throw tn("Exception was thrown by user callback.",t),e},Math.floor(0))}},yI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ro=function(i,e){const t=setTimeout(i,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class xI{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(n=>this.appCheck=n)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(n=>n.addTokenListener(e))}notifyForInvalidToken(){tn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Ot("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',tn(e)}}class Iu{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Iu.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh="5",Y_="v",K_="s",Z_="r",J_="f",Q_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ev="ls",tv="p",Lu="ac",nv="websocket",iv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e,t,n,s,r=!1,o="",a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ji.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ji.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function MI(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function sv(i,e,t){re(typeof e=="string","typeof type must == string"),re(typeof t=="object","typeof params must == object");let n;if(e===nv)n=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===iv)n=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);MI(i)&&(t.ns=i.namespace);const s=[];return Yt(t,(r,o)=>{s.push(r+"="+o)}),n+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(){this.counters_={}}incrementCounter(e,t=1){ti(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return N1(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc={},Ic={};function Fh(i){const e=i.toString();return Rc[e]||(Rc[e]=new wI),Rc[e]}function TI(i,e){const t=i.toString();return Ic[t]||(Ic[t]=e()),Ic[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const n=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<n.length;++s)n[s]&&Vo(()=>{this.onMessage_(n[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm="start",CI="close",AI="pLPCommand",RI="pRTLPCB",rv="id",ov="pw",av="ser",II="cb",LI="seg",PI="ts",DI="d",NI="dframe",lv=1870,cv=30,OI=lv-cv,FI=25e3,kI=3e4;class Ys{constructor(e,t,n,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Go(e),this.stats_=Fh(t),this.urlFn=l=>(this.appCheckToken&&(l[Lu]=this.appCheckToken),sv(t,iv,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new EI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(kI)),hI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new kh((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===dm)this.id=a,this.password=l;else if(o===CI)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const n={};n[dm]="t",n[av]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(n[II]=this.scriptTagHolder.uniqueCallbackIdentifier),n[Y_]=Oh,this.transportSessionId&&(n[K_]=this.transportSessionId),this.lastSessionId&&(n[ev]=this.lastSessionId),this.applicationId&&(n[tv]=this.applicationId),this.appCheckToken&&(n[Lu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Q_.test(location.hostname)&&(n[Z_]=J_);const s=this.urlFn(n);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ys.forceAllow_=!0}static forceDisallow(){Ys.forceDisallow_=!0}static isAvailable(){return Ys.forceAllow_?!0:!Ys.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!dI()&&!pI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Ct(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=R_(t),s=q_(n,OI);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={};n[NI]="t",n[rv]=e,n[ov]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Ct(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class kh{constructor(e,t,n,s){this.onDisconnect=n,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=lI(),window[AI+this.uniqueCallbackIdentifier]=e,window[RI+this.uniqueCallbackIdentifier]=t,this.myIFrame=kh.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;r='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ot("frame writing exception"),a.stack&&Ot(a.stack),Ot(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ot("No IE domain setting required")}catch{const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[rv]=this.myID,e[ov]=this.myPW,e[av]=this.currentSerial;let t=this.urlFn(e),n="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+cv+n.length<=lv;){const o=this.pendingSegs.shift();n=n+"&"+LI+s+"="+o.seg+"&"+PI+s+"="+o.ts+"&"+DI+s+"="+o.d,s++}return t=t+n,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(n,Math.floor(FI)),r=()=>{clearTimeout(s),n()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const s=n.readyState;(!s||s==="loaded"||s==="complete")&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Ot("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI=16384,zI=45e3;let tl=null;typeof MozWebSocket<"u"?tl=MozWebSocket:typeof WebSocket<"u"&&(tl=WebSocket);class xn{constructor(e,t,n,s,r,o,a){this.connId=e,this.applicationId=n,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Go(this.connId),this.stats_=Fh(t),this.connURL=xn.connectionURL_(t,o,a,s,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,s,r){const o={};return o[Y_]=Oh,typeof location<"u"&&location.hostname&&Q_.test(location.hostname)&&(o[Z_]=J_),t&&(o[K_]=t),n&&(o[ev]=n),s&&(o[Lu]=s),r&&(o[tv]=r),sv(e,nv,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ji.set("previous_websocket_failure",!0);try{let n;D_(),this.mySock=new tl(this.connURL,[],n)}catch(n){this.log_("Error instantiating WebSocket.");const s=n.message||n.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=n=>{this.handleIncomingFrame(n)},this.mySock.onerror=n=>{this.log_("WebSocket error.  Closing connection.");const s=n.message||n.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){xn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&tl!==null&&!xn.forceDisallow_}static previouslyFailed(){return ji.isInMemoryStorage||ji.get("previous_websocket_failure")===!0}markConnectionHealthy(){ji.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const n=wo(t);this.onMessage(n)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(re(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const n=this.extractFrameCount_(t);n!==null&&this.appendFrame_(n)}}send(e){this.resetKeepAlive();const t=Ct(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=q_(t,UI);n.length>1&&this.sendString_(String(n.length));for(let s=0;s<n.length;s++)this.sendString_(n[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(zI))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}xn.responsesRequiredToBeHealthy=2;xn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ys,xn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=xn&&xn.isAvailable();let n=t&&!xn.previouslyFailed();if(e.webSocketOnly&&(t||tn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[xn];else{const s=this.transports_=[];for(const r of Co.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Co.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Co.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=6e4,HI=5e3,GI=10*1024,VI=100*1024,Lc="t",pm="d",WI="s",mm="r",$I="e",gm="o",_m="a",vm="n",ym="p",jI="h";class qI{constructor(e,t,n,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Go("c:"+this.id+":"),this.transportManager_=new Co(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=ro(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>VI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>GI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Lc in e){const t=e[Lc];t===_m?this.upgradeIfSecondaryHealthy_():t===mm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===gm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Vr("t",e),n=Vr("d",e);if(t==="c")this.onSecondaryControl_(n);else if(t==="d")this.pendingDataMessages.push(n);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ym,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:_m,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:vm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Vr("t",e),n=Vr("d",e);t==="c"?this.onControl_(n):t==="d"&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Vr(Lc,e);if(pm in e){const n=e[pm];if(t===jI)this.onHandshake_(n);else if(t===vm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===WI?this.onConnectionShutdown_(n):t===mm?this.onReset_(n):t===$I?Ru("Server Error: "+n):t===gm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ru("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Oh!==n&&tn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),ro(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(BI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ro(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(HI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ym,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ji.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{put(e,t,n,s){}merge(e,t,n,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e){this.allowedEvents_=e,this.listeners_={},re(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let s=0;s<n.length;s++)n[s].callback.apply(n[s].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const s=this.getInitialEvent(e);s&&t.apply(n,s)}off(e,t,n){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!n||n===s[r].context)){s.splice(r,1);return}}validateEventType_(e){re(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl extends hv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!P_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new nl}getInitialEvent(e){return re(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm=32,bm=768;class it{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let n=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[n]=this.pieces_[s],n++);this.pieces_.length=n,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Ye(){return new it("")}function He(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function Ii(i){return i.pieces_.length-i.pieceNum_}function rt(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new it(i.pieces_,e)}function fv(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function XI(i){let e="";for(let t=i.pieceNum_;t<i.pieces_.length;t++)i.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[t])));return e||"/"}function dv(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function pv(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let t=i.pieceNum_;t<i.pieces_.length-1;t++)e.push(i.pieces_[t]);return new it(e,0)}function bt(i,e){const t=[];for(let n=i.pieceNum_;n<i.pieces_.length;n++)t.push(i.pieces_[n]);if(e instanceof it)for(let n=e.pieceNum_;n<e.pieces_.length;n++)t.push(e.pieces_[n]);else{const n=e.split("/");for(let s=0;s<n.length;s++)n[s].length>0&&t.push(n[s])}return new it(t,0)}function Ge(i){return i.pieceNum_>=i.pieces_.length}function $t(i,e){const t=He(i),n=He(e);if(t===null)return e;if(t===n)return $t(rt(i),rt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function Uh(i,e){if(Ii(i)!==Ii(e))return!1;for(let t=i.pieceNum_,n=e.pieceNum_;t<=i.pieces_.length;t++,n++)if(i.pieces_[t]!==e.pieces_[n])return!1;return!0}function Sn(i,e){let t=i.pieceNum_,n=e.pieceNum_;if(Ii(i)>Ii(e))return!1;for(;t<i.pieces_.length;){if(i.pieces_[t]!==e.pieces_[n])return!1;++t,++n}return!0}class YI{constructor(e,t){this.errorPrefix_=t,this.parts_=dv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=bl(this.parts_[n]);mv(this)}}function KI(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=bl(e),mv(i)}function ZI(i){const e=i.parts_.pop();i.byteLength_-=bl(e),i.parts_.length>0&&(i.byteLength_-=1)}function mv(i){if(i.byteLength_>bm)throw new Error(i.errorPrefix_+"has a key path longer than "+bm+" bytes ("+i.byteLength_+").");if(i.parts_.length>xm)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+xm+") or object contains a cycle "+Hi(i))}function Hi(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh extends hv{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const n=!document[e];n!==this.visible_&&(this.visible_=n,this.trigger("visible",n))},!1)}static getInstance(){return new zh}getInitialEvent(e){return re(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=1e3,JI=60*5*1e3,Sm=30*1e3,QI=1.3,eL=3e4,tL="server_kill",Mm=3;class Zn extends uv{constructor(e,t,n,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Zn.nextPersistentConnectionId_++,this.log_=Go("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Wr,this.maxReconnectDelay_=JI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!D_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");zh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&nl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(Ct(r)),re(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[s]=n)}get(e){this.initConnection_();const t=new Lh,n={p:e._path.toString(),q:e._queryObject},s={action:"g",request:n,onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),re(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),re(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:n};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+n+" for "+s);const r={p:n},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Zn.warnOnListenWarnings_(l,t),(this.listens.get(n)&&this.listens.get(n).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(n,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ti(e,"w")){const n=pr(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();tn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||W1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Sm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=V1(e)?"auth":"gauth",n={cred:e};this.authOverride_===null?n.noauth=!0:typeof this.authOverride_=="object"&&(n.authvar=this.authOverride_),this.sendRequest(t,n,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,n=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+s),re(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,s)&&this.connected_&&this.sendUnlisten_(n,s,e._queryObject,t)}sendUnlisten_(e,t,n,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=n,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,s){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,n,s){this.putInternal("p",e,t,n,s)}merge(e,t,n,s){this.putInternal("m",e,t,n,s)}putInternal(e,t,n,s,r){this.initConnection_();const o={p:t,d:n};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,n=>{if(n.s!=="ok"){const r=n.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ct(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Ru("Unrecognized action received from server: "+Ct(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){re(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Wr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Wr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>eL&&(this.reconnectDelay_=Wr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*QI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Zn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,n())},c=function(h){re(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ot("getToken() completed but was canceled"):(Ot("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new qI(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,d=>{tn(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(tL)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&tn(h),l())}}}interrupt(e){Ot("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ot("Resuming connection for reason: "+e),delete this.interruptReasons_[e],em(this.interruptReasons_)&&(this.reconnectDelay_=Wr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;t?n=t.map(r=>Nh(r)).join("$"):n="default";const s=this.removeListen_(e,n);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const n=new it(e).toString();let s;if(this.listens.has(n)){const r=this.listens.get(n);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(n)}else s=void 0;return s}onAuthRevoked_(e,t){Ot("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Mm&&(this.reconnectDelay_=Sm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ot("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Mm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+V_.replace(/\./g,"-")]=1,P_()?e["framework.cordova"]=1:k1()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=nl.getInstance().currentlyOnline();return em(this.interruptReasons_)&&e}}Zn.nextPersistentConnectionId_=0;Zn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new ke(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new ke(mr,e),s=new ke(mr,t);return this.compare(n,s)!==0}minPost(){return ke.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ia;class gv extends Sl{static get __EMPTY_NODE(){return Ia}static set __EMPTY_NODE(e){Ia=e}compare(e,t){return Ir(e.name,t.name)}isDefinedOn(e){throw Rr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ke.MIN}maxPost(){return new ke(fs,Ia)}makePost(e,t){return re(typeof e=="string","KeyIndex indexValue must always be a string."),new ke(e,Ia)}toString(){return".key"}}const sr=new gv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,t,n,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?n(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Tt{constructor(e,t,n,s,r){this.key=e,this.value=t,this.color=n!=null?n:Tt.RED,this.left=s!=null?s:jt.EMPTY_NODE,this.right=r!=null?r:jt.EMPTY_NODE}copy(e,t,n,s,r){return new Tt(e!=null?e:this.key,t!=null?t:this.value,n!=null?n:this.color,s!=null?s:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const r=n(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,n),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return jt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,s;if(n=this,t(e,n.key)<0)!n.left.isEmpty()&&!n.left.isRed_()&&!n.left.left.isRed_()&&(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),!n.right.isEmpty()&&!n.right.isRed_()&&!n.right.left.isRed_()&&(n=n.moveRedRight_()),t(e,n.key)===0){if(n.right.isEmpty())return jt.EMPTY_NODE;s=n.right.min_(),n=n.copy(s.key,s.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Tt.RED=!0;Tt.BLACK=!1;class nL{copy(e,t,n,s,r){return this}insert(e,t,n){return new Tt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class jt{constructor(e,t=jt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new jt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Tt.BLACK,null,null))}remove(e){return new jt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Tt.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),t===0)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,s=null;for(;!n.isEmpty();)if(t=this.comparator_(e,n.key),t===0){if(n.left.isEmpty())return s?s.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}else t<0?n=n.left:t>0&&(s=n,n=n.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new La(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new La(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new La(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new La(this.root_,null,this.comparator_,!0,e)}}jt.EMPTY_NODE=new nL;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iL(i,e){return Ir(i.name,e.name)}function Bh(i,e){return Ir(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pu;function sL(i){Pu=i}const _v=function(i){return typeof i=="number"?"number:"+X_(i):"string:"+i},vv=function(i){if(i.isLeafNode()){const e=i.val();re(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ti(e,".sv"),"Priority must be a string or number.")}else re(i===Pu||i.isEmpty(),"priority of unexpected type.");re(i===Pu||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wm;class wt{constructor(e,t=wt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,re(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),vv(this.priorityNode_)}static set __childrenNodeConstructor(e){wm=e}static get __childrenNodeConstructor(){return wm}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new wt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:wt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ge(e)?this:He(e)===".priority"?this.priorityNode_:wt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:wt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=He(e);return n===null?t:t.isEmpty()&&n!==".priority"?this:(re(n!==".priority"||Ii(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(n,wt.__childrenNodeConstructor.EMPTY_NODE.updateChild(rt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+_v(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=X_(this.value_):e+=this.value_,this.lazyHash_=$_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===wt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof wt.__childrenNodeConstructor?-1:(re(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,s=wt.VALUE_TYPE_ORDER.indexOf(t),r=wt.VALUE_TYPE_ORDER.indexOf(n);return re(s>=0,"Unknown leaf type: "+t),re(r>=0,"Unknown leaf type: "+n),s===r?n==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}wt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yv,xv;function rL(i){yv=i}function oL(i){xv=i}class aL extends Sl{compare(e,t){const n=e.node.getPriority(),s=t.node.getPriority(),r=n.compareTo(s);return r===0?Ir(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ke.MIN}maxPost(){return new ke(fs,new wt("[PRIORITY-POST]",xv))}makePost(e,t){const n=yv(e);return new ke(t,new wt("[PRIORITY-POST]",n))}toString(){return".priority"}}const mt=new aL;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lL=Math.log(2);class cL{constructor(e){const t=r=>parseInt(Math.log(r)/lL,10),n=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=n(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const il=function(i,e,t,n){i.sort(e);const s=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=i[l],f=t?t(h):h,new Tt(f,h.node,Tt.BLACK,null,null);{const d=parseInt(u/2,10)+l,g=s(l,d),m=s(d+1,c);return h=i[d],f=t?t(h):h,new Tt(f,h.node,Tt.BLACK,g,m)}},r=function(l){let c=null,u=null,h=i.length;const f=function(g,m){const p=h-g,_=h;h-=g;const x=s(p+1,_),w=i[p],y=t?t(w):w;d(new Tt(y,w.node,m,null,x))},d=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const m=l.nextBitIsOne(),p=Math.pow(2,l.count-(g+1));m?f(p,Tt.BLACK):(f(p,Tt.BLACK),f(p,Tt.RED))}return u},o=new cL(i.length),a=r(o);return new jt(n||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pc;const Hs={};class Kn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return re(Hs&&mt,"ChildrenNode.ts has not been loaded"),Pc=Pc||new Kn({".priority":Hs},{".priority":mt}),Pc}get(e){const t=pr(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof jt?t:null}hasIndex(e){return ti(this.indexSet_,e.toString())}addIndex(e,t){re(e!==sr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let s=!1;const r=t.getIterator(ke.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),n.push(o),o=r.getNext();let a;s?a=il(n,e.getCompare()):a=Hs;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Kn(u,c)}addToIndexes(e,t){const n=Ja(this.indexes_,(s,r)=>{const o=pr(this.indexSet_,r);if(re(o,"Missing index implementation for "+r),s===Hs)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(ke.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),il(a,o.getCompare())}else return Hs;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new ke(e.name,a))),l.insert(e,e.node)}});return new Kn(n,this.indexSet_)}removeFromIndexes(e,t){const n=Ja(this.indexes_,s=>{if(s===Hs)return s;{const r=t.get(e.name);return r?s.remove(new ke(e.name,r)):s}});return new Kn(n,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $r;class Ae{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&vv(this.priorityNode_),this.children_.isEmpty()&&re(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return $r||($r=new Ae(new jt(Bh),null,Kn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||$r}updatePriority(e){return this.children_.isEmpty()?this:new Ae(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?$r:t}}getChild(e){const t=He(e);return t===null?this:this.getImmediateChild(t).getChild(rt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(re(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const n=new ke(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const o=s.isEmpty()?$r:this.priorityNode_;return new Ae(s,o,r)}}updateChild(e,t){const n=He(e);if(n===null)return t;{re(He(e)!==".priority"||Ii(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(n).updateChild(rt(e),t);return this.updateImmediateChild(n,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,s=0,r=!0;if(this.forEachChild(mt,(o,a)=>{t[o]=a.val(e),n++,r&&Ae.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*n){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+_v(this.getPriority().val())+":"),this.forEachChild(mt,(t,n)=>{const s=n.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":$_(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const s=this.resolveIndex_(n);if(s){const r=s.getPredecessorKey(new ke(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const n=t.minKey();return n&&n.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ke(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const n=t.maxKey();return n&&n.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ke(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,ke.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,ke.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Wo?-1:0}withIndex(e){if(e===sr||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Ae(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===sr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const n=this.getIterator(mt),s=t.getIterator(mt);let r=n.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=n.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===sr?null:this.indexMap_.get(e.toString())}}Ae.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class uL extends Ae{constructor(){super(new jt(Bh),Ae.EMPTY_NODE,Kn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ae.EMPTY_NODE}isEmpty(){return!1}}const Wo=new uL;Object.defineProperties(ke,{MIN:{value:new ke(mr,Ae.EMPTY_NODE)},MAX:{value:new ke(fs,Wo)}});gv.__EMPTY_NODE=Ae.EMPTY_NODE;wt.__childrenNodeConstructor=Ae;sL(Wo);oL(Wo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hL=!0;function Ft(i,e=null){if(i===null)return Ae.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),re(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const t=i;return new wt(t,Ft(e))}if(!(i instanceof Array)&&hL){const t=[];let n=!1;if(Yt(i,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ft(a);l.isEmpty()||(n=n||!l.getPriority().isEmpty(),t.push(new ke(o,l)))}}),t.length===0)return Ae.EMPTY_NODE;const r=il(t,iL,o=>o.name,Bh);if(n){const o=il(t,mt.getCompare());return new Ae(r,Ft(e),new Kn({".priority":o},{".priority":mt}))}else return new Ae(r,Ft(e),Kn.Default)}else{let t=Ae.EMPTY_NODE;return Yt(i,(n,s)=>{if(ti(i,n)&&n.substring(0,1)!=="."){const r=Ft(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(n,r))}}),t.updatePriority(Ft(e))}}rL(Ft);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fL extends Sl{constructor(e){super(),this.indexPath_=e,re(!Ge(e)&&He(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),s=this.extractChild(t.node),r=n.compareTo(s);return r===0?Ir(e.name,t.name):r}makePost(e,t){const n=Ft(e),s=Ae.EMPTY_NODE.updateChild(this.indexPath_,n);return new ke(t,s)}maxPost(){const e=Ae.EMPTY_NODE.updateChild(this.indexPath_,Wo);return new ke(fs,e)}toString(){return dv(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dL extends Sl{compare(e,t){const n=e.node.compareTo(t.node);return n===0?Ir(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ke.MIN}maxPost(){return ke.MAX}makePost(e,t){const n=Ft(e);return new ke(t,n)}toString(){return".value"}}const pL=new dL;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv(i){return{type:"value",snapshotNode:i}}function gr(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function Ao(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function Ro(i,e,t){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:t}}function mL(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e){this.index_=e}updateChild(e,t,n,s,r,o){re(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(n.getChild(s))&&a.isEmpty()===n.isEmpty()||(o!=null&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(Ao(t,a)):re(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(gr(t,n)):o.trackChildChange(Ro(t,n,a))),e.isLeafNode()&&n.isEmpty())?e:e.updateImmediateChild(t,n).withIndex(this.index_)}updateFullNode(e,t,n){return n!=null&&(e.isLeafNode()||e.forEachChild(mt,(s,r)=>{t.hasChild(s)||n.trackChildChange(Ao(s,r))}),t.isLeafNode()||t.forEachChild(mt,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||n.trackChildChange(Ro(s,r,o))}else n.trackChildChange(gr(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Ae.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this.indexedFilter_=new Hh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Io.getStartPost_(e),this.endPost_=Io.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,s,r,o){return this.matches(new ke(t,n))||(n=Ae.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,s,r,o)}updateFullNode(e,t,n){t.isLeafNode()&&(t=Ae.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(Ae.EMPTY_NODE);const r=this;return t.forEachChild(mt,(o,a)=>{r.matches(new ke(o,a))||(s=s.updateImmediateChild(o,Ae.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gL{constructor(e){this.rangedFilter_=new Io(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,s,r,o){return this.rangedFilter_.matches(new ke(t,n))||(n=Ae.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,s,r,o):this.fullLimitUpdateChild_(e,t,n,r,o)}updateFullNode(e,t,n){let s;if(t.isLeafNode()||t.isEmpty())s=Ae.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=Ae.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)s=s.updateImmediateChild(a.name,a.node),o++;else break}}else{s=t.withIndex(this.index_),s=s.updatePriority(Ae.EMPTY_NODE);let r,o,a,l;if(this.reverse_){l=s.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();a=(f,d)=>h(d,f)}else l=s.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,u=!1;for(;l.hasNext();){const h=l.getNext();!u&&a(r,h)<=0&&(u=!0),u&&c<this.limit_&&a(h,o)<=0?c++:s=s.updateImmediateChild(h.name,Ae.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,s,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,d)=>h(d,f)}else o=this.index_.getCompare();const a=e;re(a.numChildren()===this.limit_,"");const l=new ke(t,n),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const h=a.getImmediateChild(t);let f=s.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===t||a.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const d=f==null?1:o(f,l);if(u&&!n.isEmpty()&&d>=0)return r!=null&&r.trackChildChange(Ro(t,n,h)),a.updateImmediateChild(t,n);{r!=null&&r.trackChildChange(Ao(t,h));const m=a.updateImmediateChild(t,Ae.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(gr(f.name,f.node)),m.updateImmediateChild(f.name,f.node)):m}}else return n.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Ao(c.name,c.node)),r.trackChildChange(gr(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(c.name,Ae.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=mt}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return re(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return re(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:mr}hasEnd(){return this.endSet_}getIndexEndValue(){return re(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return re(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:fs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return re(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===mt}copy(){const e=new Gh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function _L(i){return i.loadsAllData()?new Hh(i.getIndex()):i.hasLimit()?new gL(i):new Io(i)}function Tm(i){const e={};if(i.isDefault())return e;let t;return i.index_===mt?t="$priority":i.index_===pL?t="$value":i.index_===sr?t="$key":(re(i.index_ instanceof fL,"Unrecognized index type!"),t=i.index_.toString()),e.orderBy=Ct(t),i.startSet_&&(e.startAt=Ct(i.indexStartValue_),i.startNameSet_&&(e.startAt+=","+Ct(i.indexStartName_))),i.endSet_&&(e.endAt=Ct(i.indexEndValue_),i.endNameSet_&&(e.endAt+=","+Ct(i.indexEndName_))),i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function Em(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_)),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_)),i.limitSet_){e.l=i.limit_;let t=i.viewFrom_;t===""&&(i.isViewFromLeft()?t="l":t="r"),e.vf=t}return i.index_!==mt&&(e.i=i.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl extends uv{constructor(e,t,n,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=s,this.log_=Go("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(re(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=sl.getListenId_(e,n),a={};this.listens_[o]=a;const l=Tm(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,n),pr(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,t){const n=sl.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Tm(e._queryParams),n=e._path.toString(),s=new Lh;return this.restRequest_(n+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(n,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+$1(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=wo(a.responseText)}catch{tn("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,l)}else a.status!==401&&a.status!==404&&tn("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vL{constructor(){this.rootNode_=Ae.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(){return{value:null,children:new Map}}function Sv(i,e,t){if(Ge(e))i.value=t,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,t);else{const n=He(e);i.children.has(n)||i.children.set(n,rl());const s=i.children.get(n);e=rt(e),Sv(s,e,t)}}function Du(i,e,t){i.value!==null?t(e,i.value):yL(i,(n,s)=>{const r=new it(e.toString()+"/"+n);Du(s,r,t)})}function yL(i,e){i.children.forEach((t,n)=>{e(n,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xL{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Yt(this.last_,(n,s)=>{t[n]=t[n]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm=10*1e3,bL=30*1e3,SL=5*60*1e3;class ML{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new xL(e);const n=Cm+(bL-Cm)*Math.random();ro(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;Yt(e,(s,r)=>{r>0&&ti(this.statsToReport_,s)&&(t[s]=r,n=!0)}),n&&this.server_.reportStats(t),ro(this.reportStats_.bind(this),Math.floor(Math.random()*2*SL))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mn;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Mn||(Mn={}));function Mv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Vh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Wh(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Mn.ACK_USER_WRITE,this.source=Mv()}operationForChild(e){if(Ge(this.path)){if(this.affectedTree.value!=null)return re(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new it(e));return new ol(Ye(),t,this.revert)}}else return re(He(this.path)===e,"operationForChild called for unrelated child."),new ol(rt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,t){this.source=e,this.path=t,this.type=Mn.LISTEN_COMPLETE}operationForChild(e){return Ge(this.path)?new Lo(this.source,Ye()):new Lo(this.source,rt(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Mn.OVERWRITE}operationForChild(e){return Ge(this.path)?new ds(this.source,Ye(),this.snap.getImmediateChild(e)):new ds(this.source,rt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Mn.MERGE}operationForChild(e){if(Ge(this.path)){const t=this.children.subtree(new it(e));return t.isEmpty()?null:t.value?new ds(this.source,Ye(),t.value):new Po(this.source,Ye(),t)}else return re(He(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Po(this.source,rt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ge(e))return this.isFullyInitialized()&&!this.filtered_;const t=He(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wL{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function TL(i,e,t,n){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&i.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(mL(o.childName,o.snapshotNode))}),jr(i,s,"child_removed",e,n,t),jr(i,s,"child_added",e,n,t),jr(i,s,"child_moved",r,n,t),jr(i,s,"child_changed",e,n,t),jr(i,s,"value",e,n,t),s}function jr(i,e,t,n,s,r){const o=n.filter(a=>a.type===t);o.sort((a,l)=>CL(i,a,l)),o.forEach(a=>{const l=EL(i,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,i.query_))})})}function EL(i,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function CL(i,e,t){if(e.childName==null||t.childName==null)throw Rr("Should only compare child_ events.");const n=new ke(e.childName,e.snapshotNode),s=new ke(t.childName,t.snapshotNode);return i.index_.compare(n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(i,e){return{eventCache:i,serverCache:e}}function oo(i,e,t,n){return Ml(new ps(e,t,n),i.serverCache)}function wv(i,e,t,n){return Ml(i.eventCache,new ps(e,t,n))}function Nu(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function ms(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dc;const AL=()=>(Dc||(Dc=new jt(fI)),Dc);class at{constructor(e,t=AL()){this.value=e,this.children=t}static fromObject(e){let t=new at(null);return Yt(e,(n,s)=>{t=t.set(new it(n),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Ye(),value:this.value};if(Ge(e))return null;{const n=He(e),s=this.children.get(n);if(s!==null){const r=s.findRootMostMatchingPathAndValue(rt(e),t);return r!=null?{path:bt(new it(n),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ge(e))return this;{const t=He(e),n=this.children.get(t);return n!==null?n.subtree(rt(e)):new at(null)}}set(e,t){if(Ge(e))return new at(t,this.children);{const n=He(e),r=(this.children.get(n)||new at(null)).set(rt(e),t),o=this.children.insert(n,r);return new at(this.value,o)}}remove(e){if(Ge(e))return this.children.isEmpty()?new at(null):new at(null,this.children);{const t=He(e),n=this.children.get(t);if(n){const s=n.remove(rt(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new at(null):new at(this.value,r)}else return this}}get(e){if(Ge(e))return this.value;{const t=He(e),n=this.children.get(t);return n?n.get(rt(e)):null}}setTree(e,t){if(Ge(e))return t;{const n=He(e),r=(this.children.get(n)||new at(null)).setTree(rt(e),t);let o;return r.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,r),new at(this.value,o)}}fold(e){return this.fold_(Ye(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((s,r)=>{n[s]=r.fold_(bt(e,s),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Ye(),t)}findOnPath_(e,t,n){const s=this.value?n(t,this.value):!1;if(s)return s;if(Ge(e))return null;{const r=He(e),o=this.children.get(r);return o?o.findOnPath_(rt(e),bt(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ye(),t)}foreachOnPath_(e,t,n){if(Ge(e))return this;{this.value&&n(t,this.value);const s=He(e),r=this.children.get(s);return r?r.foreachOnPath_(rt(e),bt(t,s),n):new at(null)}}foreach(e){this.foreach_(Ye(),e)}foreach_(e,t){this.children.inorderTraversal((n,s)=>{s.foreach_(bt(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.writeTree_=e}static empty(){return new Tn(new at(null))}}function ao(i,e,t){if(Ge(e))return new Tn(new at(t));{const n=i.writeTree_.findRootMostValueAndPath(e);if(n!=null){const s=n.path;let r=n.value;const o=$t(s,e);return r=r.updateChild(o,t),new Tn(i.writeTree_.set(s,r))}else{const s=new at(t),r=i.writeTree_.setTree(e,s);return new Tn(r)}}}function Am(i,e,t){let n=i;return Yt(t,(s,r)=>{n=ao(n,bt(e,s),r)}),n}function Rm(i,e){if(Ge(e))return Tn.empty();{const t=i.writeTree_.setTree(e,new at(null));return new Tn(t)}}function Ou(i,e){return xs(i,e)!=null}function xs(i,e){const t=i.writeTree_.findRootMostValueAndPath(e);return t!=null?i.writeTree_.get(t.path).getChild($t(t.path,e)):null}function Im(i){const e=[],t=i.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(mt,(n,s)=>{e.push(new ke(n,s))}):i.writeTree_.children.inorderTraversal((n,s)=>{s.value!=null&&e.push(new ke(n,s.value))}),e}function Si(i,e){if(Ge(e))return i;{const t=xs(i,e);return t!=null?new Tn(new at(t)):new Tn(i.writeTree_.subtree(e))}}function Fu(i){return i.writeTree_.isEmpty()}function _r(i,e){return Tv(Ye(),i.writeTree_,e)}function Tv(i,e,t){if(e.value!=null)return t.updateChild(i,e.value);{let n=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(re(r.value!==null,"Priority writes must always be leaf nodes"),n=r.value):t=Tv(bt(i,s),r,t)}),!t.getChild(i).isEmpty()&&n!==null&&(t=t.updateChild(bt(i,".priority"),n)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(i,e){return Rv(e,i)}function RL(i,e,t,n,s){re(n>i.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),i.allWrites.push({path:e,snap:t,writeId:n,visible:s}),s&&(i.visibleWrites=ao(i.visibleWrites,e,t)),i.lastWriteId=n}function IL(i,e){for(let t=0;t<i.allWrites.length;t++){const n=i.allWrites[t];if(n.writeId===e)return n}return null}function LL(i,e){const t=i.allWrites.findIndex(a=>a.writeId===e);re(t>=0,"removeWrite called with nonexistent writeId.");const n=i.allWrites[t];i.allWrites.splice(t,1);let s=n.visible,r=!1,o=i.allWrites.length-1;for(;s&&o>=0;){const a=i.allWrites[o];a.visible&&(o>=t&&PL(a,n.path)?s=!1:Sn(n.path,a.path)&&(r=!0)),o--}if(s){if(r)return DL(i),!0;if(n.snap)i.visibleWrites=Rm(i.visibleWrites,n.path);else{const a=n.children;Yt(a,l=>{i.visibleWrites=Rm(i.visibleWrites,bt(n.path,l))})}return!0}else return!1}function PL(i,e){if(i.snap)return Sn(i.path,e);for(const t in i.children)if(i.children.hasOwnProperty(t)&&Sn(bt(i.path,t),e))return!0;return!1}function DL(i){i.visibleWrites=Ev(i.allWrites,NL,Ye()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function NL(i){return i.visible}function Ev(i,e,t){let n=Tn.empty();for(let s=0;s<i.length;++s){const r=i[s];if(e(r)){const o=r.path;let a;if(r.snap)Sn(t,o)?(a=$t(t,o),n=ao(n,a,r.snap)):Sn(o,t)&&(a=$t(o,t),n=ao(n,Ye(),r.snap.getChild(a)));else if(r.children){if(Sn(t,o))a=$t(t,o),n=Am(n,a,r.children);else if(Sn(o,t))if(a=$t(o,t),Ge(a))n=Am(n,Ye(),r.children);else{const l=pr(r.children,He(a));if(l){const c=l.getChild(rt(a));n=ao(n,Ye(),c)}}}else throw Rr("WriteRecord should have .snap or .children")}}return n}function Cv(i,e,t,n,s){if(!n&&!s){const r=xs(i.visibleWrites,e);if(r!=null)return r;{const o=Si(i.visibleWrites,e);if(Fu(o))return t;if(t==null&&!Ou(o,Ye()))return null;{const a=t||Ae.EMPTY_NODE;return _r(o,a)}}}else{const r=Si(i.visibleWrites,e);if(!s&&Fu(r))return t;if(!s&&t==null&&!Ou(r,Ye()))return null;{const o=function(c){return(c.visible||s)&&(!n||!~n.indexOf(c.writeId))&&(Sn(c.path,e)||Sn(e,c.path))},a=Ev(i.allWrites,o,e),l=t||Ae.EMPTY_NODE;return _r(a,l)}}}function OL(i,e,t){let n=Ae.EMPTY_NODE;const s=xs(i.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(mt,(r,o)=>{n=n.updateImmediateChild(r,o)}),n;if(t){const r=Si(i.visibleWrites,e);return t.forEachChild(mt,(o,a)=>{const l=_r(Si(r,new it(o)),a);n=n.updateImmediateChild(o,l)}),Im(r).forEach(o=>{n=n.updateImmediateChild(o.name,o.node)}),n}else{const r=Si(i.visibleWrites,e);return Im(r).forEach(o=>{n=n.updateImmediateChild(o.name,o.node)}),n}}function FL(i,e,t,n,s){re(n||s,"Either existingEventSnap or existingServerSnap must exist");const r=bt(e,t);if(Ou(i.visibleWrites,r))return null;{const o=Si(i.visibleWrites,r);return Fu(o)?s.getChild(t):_r(o,s.getChild(t))}}function kL(i,e,t,n){const s=bt(e,t),r=xs(i.visibleWrites,s);if(r!=null)return r;if(n.isCompleteForChild(t)){const o=Si(i.visibleWrites,s);return _r(o,n.getNode().getImmediateChild(t))}else return null}function UL(i,e){return xs(i.visibleWrites,e)}function zL(i,e,t,n,s,r,o){let a;const l=Si(i.visibleWrites,e),c=xs(l,Ye());if(c!=null)a=c;else if(t!=null)a=_r(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(n,o):a.getIteratorFrom(n,o);let d=f.getNext();for(;d&&u.length<s;)h(d,n)!==0&&u.push(d),d=f.getNext();return u}else return[]}function BL(){return{visibleWrites:Tn.empty(),allWrites:[],lastWriteId:-1}}function al(i,e,t,n){return Cv(i.writeTree,i.treePath,e,t,n)}function jh(i,e){return OL(i.writeTree,i.treePath,e)}function Lm(i,e,t,n){return FL(i.writeTree,i.treePath,e,t,n)}function ll(i,e){return UL(i.writeTree,bt(i.treePath,e))}function HL(i,e,t,n,s,r){return zL(i.writeTree,i.treePath,e,t,n,s,r)}function qh(i,e,t){return kL(i.writeTree,i.treePath,e,t)}function Av(i,e){return Rv(bt(i.treePath,e),i.writeTree)}function Rv(i,e){return{treePath:i,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GL{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;re(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),re(n!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(n);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(n,Ro(n,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(n);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(n,Ao(n,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(n,gr(n,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(n,Ro(n,e.snapshotNode,s.oldSnap));else throw Rr("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VL{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const Iv=new VL;class Xh{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const n=this.optCompleteServerCache_!=null?new ps(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return qh(this.writes_,e,n)}}getChildAfterChild(e,t,n){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ms(this.viewCache_),r=HL(this.writes_,s,t,1,n,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WL(i){return{filter:i}}function $L(i,e){re(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),re(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function jL(i,e,t,n,s){const r=new GL;let o,a;if(t.type===Mn.OVERWRITE){const c=t;c.source.fromUser?o=ku(i,e,c.path,c.snap,n,s,r):(re(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Ge(c.path),o=cl(i,e,c.path,c.snap,n,s,a,r))}else if(t.type===Mn.MERGE){const c=t;c.source.fromUser?o=XL(i,e,c.path,c.children,n,s,r):(re(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Uu(i,e,c.path,c.children,n,s,a,r))}else if(t.type===Mn.ACK_USER_WRITE){const c=t;c.revert?o=ZL(i,e,c.path,n,s,r):o=YL(i,e,c.path,c.affectedTree,n,s,r)}else if(t.type===Mn.LISTEN_COMPLETE)o=KL(i,e,t.path,n,r);else throw Rr("Unknown operation type: "+t.type);const l=r.getChanges();return qL(e,o,l),{viewCache:o,changes:l}}function qL(i,e,t){const n=e.eventCache;if(n.isFullyInitialized()){const s=n.getNode().isLeafNode()||n.getNode().isEmpty(),r=Nu(i);(t.length>0||!i.eventCache.isFullyInitialized()||s&&!n.getNode().equals(r)||!n.getNode().getPriority().equals(r.getPriority()))&&t.push(bv(Nu(e)))}}function Lv(i,e,t,n,s,r){const o=e.eventCache;if(ll(n,t)!=null)return e;{let a,l;if(Ge(t))if(re(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ms(e),u=c instanceof Ae?c:Ae.EMPTY_NODE,h=jh(n,u);a=i.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=al(n,ms(e));a=i.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=He(t);if(c===".priority"){re(Ii(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Lm(n,t,u,l);h!=null?a=i.filter.updatePriority(u,h):a=o.getNode()}else{const u=rt(t);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=Lm(n,t,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=qh(n,c,e.serverCache);h!=null?a=i.filter.updateChild(o.getNode(),c,h,u,s,r):a=o.getNode()}}return oo(e,a,o.isFullyInitialized()||Ge(t),i.filter.filtersNodes())}}function cl(i,e,t,n,s,r,o,a){const l=e.serverCache;let c;const u=o?i.filter:i.filter.getIndexedFilter();if(Ge(t))c=u.updateFullNode(l.getNode(),n,null);else if(u.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(t,n);c=u.updateFullNode(l.getNode(),d,null)}else{const d=He(t);if(!l.isCompleteForPath(t)&&Ii(t)>1)return e;const g=rt(t),p=l.getNode().getImmediateChild(d).updateChild(g,n);d===".priority"?c=u.updatePriority(l.getNode(),p):c=u.updateChild(l.getNode(),d,p,g,Iv,null)}const h=wv(e,c,l.isFullyInitialized()||Ge(t),u.filtersNodes()),f=new Xh(s,h,r);return Lv(i,h,t,s,f,a)}function ku(i,e,t,n,s,r,o){const a=e.eventCache;let l,c;const u=new Xh(s,e,r);if(Ge(t))c=i.filter.updateFullNode(e.eventCache.getNode(),n,o),l=oo(e,c,!0,i.filter.filtersNodes());else{const h=He(t);if(h===".priority")c=i.filter.updatePriority(e.eventCache.getNode(),n),l=oo(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=rt(t),d=a.getNode().getImmediateChild(h);let g;if(Ge(f))g=n;else{const m=u.getCompleteChild(h);m!=null?fv(f)===".priority"&&m.getChild(pv(f)).isEmpty()?g=m:g=m.updateChild(f,n):g=Ae.EMPTY_NODE}if(d.equals(g))l=e;else{const m=i.filter.updateChild(a.getNode(),h,g,f,u,o);l=oo(e,m,a.isFullyInitialized(),i.filter.filtersNodes())}}}return l}function Pm(i,e){return i.eventCache.isCompleteForChild(e)}function XL(i,e,t,n,s,r,o){let a=e;return n.foreach((l,c)=>{const u=bt(t,l);Pm(e,He(u))&&(a=ku(i,a,u,c,s,r,o))}),n.foreach((l,c)=>{const u=bt(t,l);Pm(e,He(u))||(a=ku(i,a,u,c,s,r,o))}),a}function Dm(i,e,t){return t.foreach((n,s)=>{e=e.updateChild(n,s)}),e}function Uu(i,e,t,n,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Ge(t)?c=n:c=new at(null).setTree(t,n);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),g=Dm(i,d,f);l=cl(i,l,new it(h),g,s,r,o,a)}}),c.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const g=e.serverCache.getNode().getImmediateChild(h),m=Dm(i,g,f);l=cl(i,l,new it(h),m,s,r,o,a)}}),l}function YL(i,e,t,n,s,r,o){if(ll(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(n.value!=null){if(Ge(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return cl(i,e,t,l.getNode().getChild(t),s,r,a,o);if(Ge(t)){let c=new at(null);return l.getNode().forEachChild(sr,(u,h)=>{c=c.set(new it(u),h)}),Uu(i,e,t,c,s,r,a,o)}else return e}else{let c=new at(null);return n.foreach((u,h)=>{const f=bt(t,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),Uu(i,e,t,c,s,r,a,o)}}function KL(i,e,t,n,s){const r=e.serverCache,o=wv(e,r.getNode(),r.isFullyInitialized()||Ge(t),r.isFiltered());return Lv(i,o,t,n,Iv,s)}function ZL(i,e,t,n,s,r){let o;if(ll(n,t)!=null)return e;{const a=new Xh(n,e,s),l=e.eventCache.getNode();let c;if(Ge(t)||He(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=al(n,ms(e));else{const h=e.serverCache.getNode();re(h instanceof Ae,"serverChildren would be complete if leaf node"),u=jh(n,h)}u=u,c=i.filter.updateFullNode(l,u,r)}else{const u=He(t);let h=qh(n,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=i.filter.updateChild(l,u,h,rt(t),a,r):e.eventCache.getNode().hasChild(u)?c=i.filter.updateChild(l,u,Ae.EMPTY_NODE,rt(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=al(n,ms(e)),o.isLeafNode()&&(c=i.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||ll(n,Ye())!=null,oo(e,c,o,i.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JL{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,s=new Hh(n.getIndex()),r=_L(n);this.processor_=WL(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(Ae.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(Ae.EMPTY_NODE,a.getNode(),null),u=new ps(l,o.isFullyInitialized(),s.filtersNodes()),h=new ps(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ml(h,u),this.eventGenerator_=new wL(this.query_)}get query(){return this.query_}}function QL(i){return i.viewCache_.serverCache.getNode()}function eP(i,e){const t=ms(i.viewCache_);return t&&(i.query._queryParams.loadsAllData()||!Ge(e)&&!t.getImmediateChild(He(e)).isEmpty())?t.getChild(e):null}function Nm(i){return i.eventRegistrations_.length===0}function tP(i,e){i.eventRegistrations_.push(e)}function Om(i,e,t){const n=[];if(t){re(e==null,"A cancel should cancel all event registrations.");const s=i.query._path;i.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&n.push(o)})}if(e){let s=[];for(let r=0;r<i.eventRegistrations_.length;++r){const o=i.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(i.eventRegistrations_.slice(r+1));break}}i.eventRegistrations_=s}else i.eventRegistrations_=[];return n}function Fm(i,e,t,n){e.type===Mn.MERGE&&e.source.queryId!==null&&(re(ms(i.viewCache_),"We should always have a full cache before handling merges"),re(Nu(i.viewCache_),"Missing event cache, even though we have a server cache"));const s=i.viewCache_,r=jL(i.processor_,s,e,t,n);return $L(i.processor_,r.viewCache),re(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=r.viewCache,Pv(i,r.changes,r.viewCache.eventCache.getNode(),null)}function nP(i,e){const t=i.viewCache_.eventCache,n=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(mt,(r,o)=>{n.push(gr(r,o))}),t.isFullyInitialized()&&n.push(bv(t.getNode())),Pv(i,n,t.getNode(),e)}function Pv(i,e,t,n){const s=n?[n]:i.eventRegistrations_;return TL(i.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ul;class iP{constructor(){this.views=new Map}}function sP(i){re(!ul,"__referenceConstructor has already been defined"),ul=i}function rP(){return re(ul,"Reference.ts has not been loaded"),ul}function oP(i){return i.views.size===0}function Yh(i,e,t,n){const s=e.source.queryId;if(s!==null){const r=i.views.get(s);return re(r!=null,"SyncTree gave us an op for an invalid query."),Fm(r,e,t,n)}else{let r=[];for(const o of i.views.values())r=r.concat(Fm(o,e,t,n));return r}}function aP(i,e,t,n,s){const r=e._queryIdentifier,o=i.views.get(r);if(!o){let a=al(t,s?n:null),l=!1;a?l=!0:n instanceof Ae?(a=jh(t,n),l=!1):(a=Ae.EMPTY_NODE,l=!1);const c=Ml(new ps(a,l,!1),new ps(n,s,!1));return new JL(e,c)}return o}function lP(i,e,t,n,s,r){const o=aP(i,e,n,s,r);return i.views.has(e._queryIdentifier)||i.views.set(e._queryIdentifier,o),tP(o,t),nP(o,t)}function cP(i,e,t,n){const s=e._queryIdentifier,r=[];let o=[];const a=Li(i);if(s==="default")for(const[l,c]of i.views.entries())o=o.concat(Om(c,t,n)),Nm(c)&&(i.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=i.views.get(s);l&&(o=o.concat(Om(l,t,n)),Nm(l)&&(i.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Li(i)&&r.push(new(rP())(e._repo,e._path)),{removed:r,events:o}}function Dv(i){const e=[];for(const t of i.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function rr(i,e){let t=null;for(const n of i.views.values())t=t||eP(n,e);return t}function Nv(i,e){if(e._queryParams.loadsAllData())return wl(i);{const n=e._queryIdentifier;return i.views.get(n)}}function Ov(i,e){return Nv(i,e)!=null}function Li(i){return wl(i)!=null}function wl(i){for(const e of i.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hl;function uP(i){re(!hl,"__referenceConstructor has already been defined"),hl=i}function hP(){return re(hl,"Reference.ts has not been loaded"),hl}let fP=1;class km{constructor(e){this.listenProvider_=e,this.syncPointTree_=new at(null),this.pendingWriteTree_=BL(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function dP(i,e,t,n,s){return RL(i.pendingWriteTree_,e,t,n,s),s?$o(i,new ds(Mv(),e,t)):[]}function Ks(i,e,t=!1){const n=IL(i.pendingWriteTree_,e);if(LL(i.pendingWriteTree_,e)){let r=new at(null);return n.snap!=null?r=r.set(Ye(),!0):Yt(n.children,o=>{r=r.set(new it(o),!0)}),$o(i,new ol(n.path,r,t))}else return[]}function Tl(i,e,t){return $o(i,new ds(Vh(),e,t))}function pP(i,e,t){const n=at.fromObject(t);return $o(i,new Po(Vh(),e,n))}function mP(i,e){return $o(i,new Lo(Vh(),e))}function gP(i,e,t){const n=Kh(i,t);if(n){const s=Zh(n),r=s.path,o=s.queryId,a=$t(r,e),l=new Lo(Wh(o),a);return Jh(i,r,l)}else return[]}function zu(i,e,t,n,s=!1){const r=e._path,o=i.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Ov(o,e))){const l=cP(o,e,t,n);oP(o)&&(i.syncPointTree_=i.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=i.syncPointTree_.findOnPath(r,(f,d)=>Li(d));if(u&&!h){const f=i.syncPointTree_.subtree(r);if(!f.isEmpty()){const d=yP(f);for(let g=0;g<d.length;++g){const m=d[g],p=m.query,_=zv(i,m);i.listenProvider_.startListening(lo(p),fl(i,p),_.hashFn,_.onComplete)}}}!h&&c.length>0&&!n&&(u?i.listenProvider_.stopListening(lo(e),null):c.forEach(f=>{const d=i.queryToTagMap.get(El(f));i.listenProvider_.stopListening(lo(f),d)}))}xP(i,c)}return a}function _P(i,e,t,n){const s=Kh(i,n);if(s!=null){const r=Zh(s),o=r.path,a=r.queryId,l=$t(o,e),c=new ds(Wh(a),l,t);return Jh(i,o,c)}else return[]}function vP(i,e,t,n){const s=Kh(i,n);if(s){const r=Zh(s),o=r.path,a=r.queryId,l=$t(o,e),c=at.fromObject(t),u=new Po(Wh(a),l,c);return Jh(i,o,u)}else return[]}function Um(i,e,t,n=!1){const s=e._path;let r=null,o=!1;i.syncPointTree_.foreachOnPath(s,(f,d)=>{const g=$t(f,s);r=r||rr(d,g),o=o||Li(d)});let a=i.syncPointTree_.get(s);a?(o=o||Li(a),r=r||rr(a,Ye())):(a=new iP,i.syncPointTree_=i.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=Ae.EMPTY_NODE,i.syncPointTree_.subtree(s).foreachChild((d,g)=>{const m=rr(g,Ye());m&&(r=r.updateImmediateChild(d,m))}));const c=Ov(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=El(e);re(!i.queryToTagMap.has(f),"View does not exist, but we have a tag");const d=bP();i.queryToTagMap.set(f,d),i.tagToQueryMap.set(d,f)}const u=$h(i.pendingWriteTree_,s);let h=lP(a,e,t,u,r,l);if(!c&&!o&&!n){const f=Nv(a,e);h=h.concat(SP(i,e,f))}return h}function Fv(i,e,t){const s=i.pendingWriteTree_,r=i.syncPointTree_.findOnPath(e,(o,a)=>{const l=$t(o,e),c=rr(a,l);if(c)return c});return Cv(s,e,r,t,!0)}function $o(i,e){return kv(e,i.syncPointTree_,null,$h(i.pendingWriteTree_,Ye()))}function kv(i,e,t,n){if(Ge(i.path))return Uv(i,e,t,n);{const s=e.get(Ye());t==null&&s!=null&&(t=rr(s,Ye()));let r=[];const o=He(i.path),a=i.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=Av(n,o);r=r.concat(kv(a,l,c,u))}return s&&(r=r.concat(Yh(s,i,n,t))),r}}function Uv(i,e,t,n){const s=e.get(Ye());t==null&&s!=null&&(t=rr(s,Ye()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=Av(n,o),u=i.operationForChild(o);u&&(r=r.concat(Uv(u,a,l,c)))}),s&&(r=r.concat(Yh(s,i,n,t))),r}function zv(i,e){const t=e.query,n=fl(i,t);return{hashFn:()=>(QL(e)||Ae.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return n?gP(i,t._path,n):mP(i,t._path);{const r=mI(s,t);return zu(i,t,null,r)}}}}function fl(i,e){const t=El(e);return i.queryToTagMap.get(t)}function El(i){return i._path.toString()+"$"+i._queryIdentifier}function Kh(i,e){return i.tagToQueryMap.get(e)}function Zh(i){const e=i.indexOf("$");return re(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new it(i.substr(0,e))}}function Jh(i,e,t){const n=i.syncPointTree_.get(e);re(n,"Missing sync point for query tag that we're tracking");const s=$h(i.pendingWriteTree_,e);return Yh(n,t,s,null)}function yP(i){return i.fold((e,t,n)=>{if(t&&Li(t))return[wl(t)];{let s=[];return t&&(s=Dv(t)),Yt(n,(r,o)=>{s=s.concat(o)}),s}})}function lo(i){return i._queryParams.loadsAllData()&&!i._queryParams.isDefault()?new(hP())(i._repo,i._path):i}function xP(i,e){for(let t=0;t<e.length;++t){const n=e[t];if(!n._queryParams.loadsAllData()){const s=El(n),r=i.queryToTagMap.get(s);i.queryToTagMap.delete(s),i.tagToQueryMap.delete(r)}}}function bP(){return fP++}function SP(i,e,t){const n=e._path,s=fl(i,e),r=zv(i,t),o=i.listenProvider_.startListening(lo(e),s,r.hashFn,r.onComplete),a=i.syncPointTree_.subtree(n);if(s)re(!Li(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!Ge(c)&&u&&Li(u))return[wl(u).query];{let f=[];return u&&(f=f.concat(Dv(u).map(d=>d.query))),Yt(h,(d,g)=>{f=f.concat(g)}),f}});for(let c=0;c<l.length;++c){const u=l[c];i.listenProvider_.stopListening(lo(u),fl(i,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Qh(t)}node(){return this.node_}}class ef{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=bt(this.path_,e);return new ef(this.syncTree_,t)}node(){return Fv(this.syncTree_,this.path_)}}const MP=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},zm=function(i,e,t){if(!i||typeof i!="object")return i;if(re(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return wP(i[".sv"],e,t);if(typeof i[".sv"]=="object")return TP(i[".sv"],e);re(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},wP=function(i,e,t){switch(i){case"timestamp":return t.timestamp;default:re(!1,"Unexpected server value: "+i)}},TP=function(i,e,t){i.hasOwnProperty("increment")||re(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const n=i.increment;typeof n!="number"&&re(!1,"Unexpected increment value: "+n);const s=e.node();if(re(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return n;const o=s.getValue();return typeof o!="number"?n:o+n},EP=function(i,e,t,n){return tf(e,new ef(t,i),n)},CP=function(i,e,t){return tf(i,new Qh(e),t)};function tf(i,e,t){const n=i.getPriority().val(),s=zm(n,e.getImmediateChild(".priority"),t);let r;if(i.isLeafNode()){const o=i,a=zm(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new wt(a,Ft(s)):i}else{const o=i;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new wt(s))),o.forEachChild(mt,(a,l)=>{const c=tf(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function sf(i,e){let t=e instanceof it?e:new it(e),n=i,s=He(t);for(;s!==null;){const r=pr(n.node.children,s)||{children:{},childCount:0};n=new nf(s,n,r),t=rt(t),s=He(t)}return n}function Lr(i){return i.node.value}function Bv(i,e){i.node.value=e,Bu(i)}function Hv(i){return i.node.childCount>0}function AP(i){return Lr(i)===void 0&&!Hv(i)}function Cl(i,e){Yt(i.node.children,(t,n)=>{e(new nf(t,i,n))})}function Gv(i,e,t,n){t&&!n&&e(i),Cl(i,s=>{Gv(s,e,!0,n)}),t&&n&&e(i)}function RP(i,e,t){let n=t?i:i.parent;for(;n!==null;){if(e(n))return!0;n=n.parent}return!1}function jo(i){return new it(i.parent===null?i.name:jo(i.parent)+"/"+i.name)}function Bu(i){i.parent!==null&&IP(i.parent,i.name,i)}function IP(i,e,t){const n=AP(t),s=ti(i.node.children,e);n&&s?(delete i.node.children[e],i.node.childCount--,Bu(i)):!n&&!s&&(i.node.children[e]=t.node,i.node.childCount++,Bu(i))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP=/[\[\].#$\/\u0000-\u001F\u007F]/,PP=/[\[\].#$\u0000-\u001F\u007F]/,Nc=10*1024*1024,Vv=function(i){return typeof i=="string"&&i.length!==0&&!LP.test(i)},Wv=function(i){return typeof i=="string"&&i.length!==0&&!PP.test(i)},DP=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),Wv(i)},$v=function(i,e,t){const n=t instanceof it?new YI(t,i):t;if(e===void 0)throw new Error(i+"contains undefined "+Hi(n));if(typeof e=="function")throw new Error(i+"contains a function "+Hi(n)+" with contents = "+e.toString());if(j_(e))throw new Error(i+"contains "+e.toString()+" "+Hi(n));if(typeof e=="string"&&e.length>Nc/3&&bl(e)>Nc)throw new Error(i+"contains a string greater than "+Nc+" utf8 bytes "+Hi(n)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Yt(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Vv(o)))throw new Error(i+" contains an invalid key ("+o+") "+Hi(n)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);KI(n,o),$v(i,a,n),ZI(n)}),s&&r)throw new Error(i+' contains ".value" child '+Hi(n)+" in addition to actual children.")}},jv=function(i,e,t,n){if(!(n&&t===void 0)&&!Wv(t))throw new Error(F_(i,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},NP=function(i,e,t,n){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),jv(i,e,t,n)},OP=function(i,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Vv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!DP(t))throw new Error(F_(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function qv(i,e){let t=null;for(let n=0;n<e.length;n++){const s=e[n],r=s.getPath();t!==null&&!Uh(r,t.path)&&(i.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&i.eventLists_.push(t)}function Xv(i,e,t){qv(i,t),Yv(i,n=>Uh(n,e))}function bs(i,e,t){qv(i,t),Yv(i,n=>Sn(n,e)||Sn(e,n))}function Yv(i,e){i.recursionDepth_++;let t=!0;for(let n=0;n<i.eventLists_.length;n++){const s=i.eventLists_[n];if(s){const r=s.path;e(r)?(kP(i.eventLists_[n]),i.eventLists_[n]=null):t=!1}}t&&(i.eventLists_=[]),i.recursionDepth_--}function kP(i){for(let e=0;e<i.events.length;e++){const t=i.events[e];if(t!==null){i.events[e]=null;const n=t.getEventRunner();es&&Ot("event: "+t.toString()),Vo(n)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP="repo_interrupt",zP=25;class BP{constructor(e,t,n,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new FP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=rl(),this.transactionQueueTree_=new nf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function HP(i,e,t){if(i.stats_=Fh(i.repoInfo_),i.forceRestClient_||yI())i.server_=new sl(i.repoInfo_,(n,s,r,o)=>{Bm(i,n,s,r,o)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>Hm(i,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ct(t)}catch(n){throw new Error("Invalid authOverride provided: "+n)}}i.persistentConnection_=new Zn(i.repoInfo_,e,(n,s,r,o)=>{Bm(i,n,s,r,o)},n=>{Hm(i,n)},n=>{VP(i,n)},i.authTokenProvider_,i.appCheckProvider_,t),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(n=>{i.server_.refreshAuthToken(n)}),i.appCheckProvider_.addTokenChangeListener(n=>{i.server_.refreshAppCheckToken(n.token)}),i.statsReporter_=TI(i.repoInfo_,()=>new ML(i.stats_,i.server_)),i.infoData_=new vL,i.infoSyncTree_=new km({startListening:(n,s,r,o)=>{let a=[];const l=i.infoData_.getNode(n._path);return l.isEmpty()||(a=Tl(i.infoSyncTree_,n._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),rf(i,"connected",!1),i.serverSyncTree_=new km({startListening:(n,s,r,o)=>(i.server_.listen(n,r,s,(a,l)=>{const c=o(a,l);bs(i.eventQueue_,n._path,c)}),[]),stopListening:(n,s)=>{i.server_.unlisten(n,s)}})}function GP(i){const t=i.infoData_.getNode(new it(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Kv(i){return MP({timestamp:GP(i)})}function Bm(i,e,t,n,s){i.dataUpdateCount++;const r=new it(e);t=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(n){const l=Ja(t,c=>Ft(c));o=vP(i.serverSyncTree_,r,l,s)}else{const l=Ft(t);o=_P(i.serverSyncTree_,r,l,s)}else if(n){const l=Ja(t,c=>Ft(c));o=pP(i.serverSyncTree_,r,l)}else{const l=Ft(t);o=Tl(i.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=af(i,r)),bs(i.eventQueue_,a,o)}function Hm(i,e){rf(i,"connected",e),e===!1&&$P(i)}function VP(i,e){Yt(e,(t,n)=>{rf(i,t,n)})}function rf(i,e,t){const n=new it("/.info/"+e),s=Ft(t);i.infoData_.updateSnapshot(n,s);const r=Tl(i.infoSyncTree_,n,s);bs(i.eventQueue_,n,r)}function WP(i){return i.nextWriteId_++}function $P(i){Zv(i,"onDisconnectEvents");const e=Kv(i),t=rl();Du(i.onDisconnect_,Ye(),(s,r)=>{const o=EP(s,r,i.serverSyncTree_,e);Sv(t,s,o)});let n=[];Du(t,Ye(),(s,r)=>{n=n.concat(Tl(i.serverSyncTree_,s,r));const o=KP(i,s);af(i,o)}),i.onDisconnect_=rl(),bs(i.eventQueue_,Ye(),n)}function jP(i,e,t){let n;He(e._path)===".info"?n=Um(i.infoSyncTree_,e,t):n=Um(i.serverSyncTree_,e,t),Xv(i.eventQueue_,e._path,n)}function Gm(i,e,t){let n;He(e._path)===".info"?n=zu(i.infoSyncTree_,e,t):n=zu(i.serverSyncTree_,e,t),Xv(i.eventQueue_,e._path,n)}function qP(i){i.persistentConnection_&&i.persistentConnection_.interrupt(UP)}function Zv(i,...e){let t="";i.persistentConnection_&&(t=i.persistentConnection_.id+":"),Ot(t,...e)}function Jv(i,e,t){return Fv(i.serverSyncTree_,e,t)||Ae.EMPTY_NODE}function of(i,e=i.transactionQueueTree_){if(e||Al(i,e),Lr(e)){const t=e0(i,e);re(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&XP(i,jo(e),t)}else Hv(e)&&Cl(e,t=>{of(i,t)})}function XP(i,e,t){const n=t.map(c=>c.currentWriteId),s=Jv(i,e,n);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const u=t[c];re(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=$t(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;i.server_.put(l.toString(),a,c=>{Zv(i,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<t.length;f++)t[f].status=2,u=u.concat(Ks(i.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&h.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();Al(i,sf(i.transactionQueueTree_,e)),of(i,i.transactionQueueTree_),bs(i.eventQueue_,e,u);for(let f=0;f<h.length;f++)Vo(h[f])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{tn("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}af(i,e)}},o)}function af(i,e){const t=Qv(i,e),n=jo(t),s=e0(i,t);return YP(i,s,n),n}function YP(i,e,t){if(e.length===0)return;const n=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=$t(t,l.path);let u=!1,h;if(re(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(Ks(i.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=zP)u=!0,h="maxretry",s=s.concat(Ks(i.serverSyncTree_,l.currentWriteId,!0));else{const f=Jv(i,l.path,o);l.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){$v("transaction failed: Data returned ",d,l.path);let g=Ft(d);typeof d=="object"&&d!=null&&ti(d,".priority")||(g=g.updatePriority(f.getPriority()));const p=l.currentWriteId,_=Kv(i),x=CP(g,f,_);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=x,l.currentWriteId=WP(i),o.splice(o.indexOf(p),1),s=s.concat(dP(i.serverSyncTree_,l.path,x,l.currentWriteId,l.applyLocally)),s=s.concat(Ks(i.serverSyncTree_,p,!0))}else u=!0,h="nodata",s=s.concat(Ks(i.serverSyncTree_,l.currentWriteId,!0))}bs(i.eventQueue_,t,s),s=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?n.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):n.push(()=>e[a].onComplete(new Error(h),!1,null))))}Al(i,i.transactionQueueTree_);for(let a=0;a<n.length;a++)Vo(n[a]);of(i,i.transactionQueueTree_)}function Qv(i,e){let t,n=i.transactionQueueTree_;for(t=He(e);t!==null&&Lr(n)===void 0;)n=sf(n,t),e=rt(e),t=He(e);return n}function e0(i,e){const t=[];return t0(i,e,t),t.sort((n,s)=>n.order-s.order),t}function t0(i,e,t){const n=Lr(e);if(n)for(let s=0;s<n.length;s++)t.push(n[s]);Cl(e,s=>{t0(i,s,t)})}function Al(i,e){const t=Lr(e);if(t){let n=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[n]=t[s],n++);t.length=n,Bv(e,t.length>0?t:void 0)}Cl(e,n=>{Al(i,n)})}function KP(i,e){const t=jo(Qv(i,e)),n=sf(i.transactionQueueTree_,e);return RP(n,s=>{Oc(i,s)}),Oc(i,n),Gv(n,s=>{Oc(i,s)}),t}function Oc(i,e){const t=Lr(e);if(t){const n=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(re(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(re(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Ks(i.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&n.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Bv(e,void 0):t.length=r+1,bs(i.eventQueue_,jo(e),s);for(let o=0;o<n.length;o++)Vo(n[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZP(i){let e="";const t=i.split("/");for(let n=0;n<t.length;n++)if(t[n].length>0){let s=t[n];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function JP(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const t of i.split("&")){if(t.length===0)continue;const n=t.split("=");n.length===2?e[decodeURIComponent(n[0])]=decodeURIComponent(n[1]):tn(`Invalid query segment '${t}' in query '${i}'`)}return e}const Vm=function(i,e){const t=QP(i),n=t.namespace;t.domain==="firebase.com"&&hs(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!n||n==="undefined")&&t.domain!=="localhost"&&hs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||uI();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new SI(t.host,t.secure,n,s,e,"",n!==t.subdomain),path:new it(t.pathString)}},QP=function(i){let e="",t="",n="",s="",r="",o=!0,a="https",l=443;if(typeof i=="string"){let c=i.indexOf("//");c>=0&&(a=i.substring(0,c-1),i=i.substring(c+2));let u=i.indexOf("/");u===-1&&(u=i.length);let h=i.indexOf("?");h===-1&&(h=i.length),e=i.substring(0,Math.min(u,h)),u<h&&(s=ZP(i.substring(u,h)));const f=JP(i.substring(Math.min(i.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const d=e.slice(0,c);if(d.toLowerCase()==="localhost")t="localhost";else if(d.split(".").length<=2)t=d;else{const g=e.indexOf(".");n=e.substring(0,g).toLowerCase(),t=e.substring(g+1),r=n}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:t,subdomain:n,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e,t,n,s){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ct(this.snapshot.exportVal())}}class i0{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return re(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,t,n,s){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=s}get key(){return Ge(this._path)?null:fv(this._path)}get ref(){return new ni(this._repo,this._path)}get _queryIdentifier(){const e=Em(this._queryParams),t=Nh(e);return t==="{}"?"default":t}get _queryObject(){return Em(this._queryParams)}isEqual(e){if(e=Ph(e),!(e instanceof lf))return!1;const t=this._repo===e._repo,n=Uh(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&n&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+XI(this._path)}}class ni extends lf{constructor(e,t){super(e,t,new Gh,!1)}get parent(){const e=pv(this._path);return e===null?null:new ni(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Do{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new it(e),n=dl(this.ref,e);return new Do(this._node.getChild(t),n,mt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(n,s)=>e(new Do(s,dl(this.ref,n),mt)))}hasChild(e){const t=new it(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function qr(i,e){return i=Ph(i),i._checkNotDeleted("ref"),e!==void 0?dl(i._root,e):i._root}function dl(i,e){return i=Ph(i),He(i._path)===null?NP("child","path",e,!1):jv("child","path",e,!1),new ni(i._repo,bt(i._path,e))}class cf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const n=t._queryParams.getIndex();return new n0("value",this,new Do(e.snapshotNode,new ni(t._repo,t._path),n))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new i0(this,e,t):null}matches(e){return e instanceof cf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class uf{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new i0(this,e,t):null}createEvent(e,t){re(e.childName!=null,"Child events should have a childName.");const n=dl(new ni(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new n0(e.type,this,new Do(e.snapshotNode,n,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof uf?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function tD(i,e,t,n,s){let r;if(typeof n=="object"&&(r=void 0,s=n),typeof n=="function"&&(r=n),s&&s.onlyOnce){const l=t,c=(u,h)=>{Gm(i._repo,i,a),l(u,h)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new eD(t,r||void 0),a=e==="value"?new cf(o):new uf(e,o);return jP(i._repo,i,a),()=>Gm(i._repo,i,a)}function Xr(i,e,t,n){return tD(i,"value",e,t,n)}sP(ni);uP(ni);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nD="FIREBASE_DATABASE_EMULATOR_HOST",Hu={};let iD=!1;function sD(i,e,t,n,s){let r=n||i.options.databaseURL;r===void 0&&(i.options.projectId||hs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ot("Using default host for project ",i.options.projectId),r=`${i.options.projectId}-default-rtdb.firebaseio.com`);let o=Vm(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[nD]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Vm(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new Iu(Iu.OWNER):new bI(i.name,i.options,e);OP("Invalid Firebase Database URL",o),Ge(o.path)||hs("Database URL must point to the root of a Firebase Database (not including a child path).");const h=oD(a,i,u,new xI(i.name,t));return new aD(h,i)}function rD(i,e){const t=Hu[e];(!t||t[i.key]!==i)&&hs(`Database ${e}(${i.repoInfo_}) has already been deleted.`),qP(i),delete t[i.key]}function oD(i,e,t,n){let s=Hu[e.name];s||(s={},Hu[e.name]=s);let r=s[i.toURLString()];return r&&hs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new BP(i,iD,t,n),s[i.toURLString()]=r,r}class aD{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(HP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ni(this._repo,Ye())),this._rootInternal}_delete(){return this._rootInternal!==null&&(rD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&hs("Cannot call "+e+" on a deleted database.")}}function lD(i=qR(),e){return GR(i,"database").getImmediate({identifier:e})}/**
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
 */function cD(i){rI($R),el(new To("database",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return sD(n,s,r,t)},"PUBLIC").setMultipleInstances(!0)),nr(cm,um,i),nr(cm,um,"esm2017")}Zn.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};Zn.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};cD();function s0(i,e,t,n,s,r,o,a){var l=typeof i=="function"?i.options:i;e&&(l.render=e,l.staticRenderFns=t,l._compiled=!0),n&&(l.functional=!0),r&&(l._scopeId="data-v-"+r);var c;if(o?(c=function(f){f=f||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!f&&typeof __VUE_SSR_CONTEXT__<"u"&&(f=__VUE_SSR_CONTEXT__),s&&s.call(this,f),f&&f._registeredComponents&&f._registeredComponents.add(o)},l._ssrRegister=c):s&&(c=a?function(){s.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:s),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(d,g){return c.call(g),u(d,g)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,c):[c]}return{exports:i,options:l}}const uD={databaseURL:"https://wexteras-ae025-default-rtdb.europe-west1.firebasedatabase.app"},hD=jR(uD),Yr=lD(hD),Fc=new QA,fD={name:"GreenHouse",data(){return{scene:null,camera:null,renderer:null,model:null,tempText:null,humidText:null,fanSpeedText:null,font:null,humidText:null,fanText:null,leavesMaterial:null,clock:null,raycaster:null,pointer:null,text:null,controls:null,groundMirror:null,fan:null,isFanSpinning:!1,targetQuaternion:null,rainDrops:[]}},methods:{start:function(){this.container=document.getElementById("container"),this.scene=new DC,this.camera=new Nt(75,container.clientWidth/container.clientHeight,.1,1e3),this.renderer=new c_({antialias:!0}),this.renderer.setSize(container.clientWidth,container.clientHeight),this.renderer.setClearColor("skyblue");const i=new M_(16777215,5);i.position.set(10,10,10),this.scene.add(i),container.appendChild(this.renderer.domElement),Fc.load("/wexteras/models/greenhouse.gltf",n=>{let s=n.scene,r=new Ji({color:"rgb(0, 0, 0)"});s.traverse(u=>{u.isMesh&&(u.material=r)}),this.scene.add(s),this.model=s;let o=new vs().setFromObject(this.model),a=new P,l=o.getSize(a);this.model.position.y-=l.y/2;const c=new UA("#3fba0f",10);c.position.set(0,0,0),this.model.attach(c),this.loadGrass(),this.loadPlane(l),this.loadButton()}),Fc.load("/wexteras/models/fan.gltf",n=>{this.fan=n.scene,this.fan.rotateX(-Math.PI/2),this.fan.position.y=.67,this.fan.position.x=1.15,this.fan.position.z=.5,this.scene.add(this.fan)});const e=new Ji({opacity:.3,transparent:!0,color:"#ffffff"});Fc.load("/wexteras/models/glassdoor.gltf",n=>{this.roof=n.scene,this.roof.traverse(s=>{s.isMesh&&(s.material=e)}),this.roof.position.x=1.15,this.roof.position.y=.9,this.roof.position.z=-1.5,this.scene.add(this.roof)}),this.loadRain(),this.raycaster=new KA,this.pointer=new se,this.camera.position.z=7,this.camera.position.y=3,this.controls=new JA(this.camera,document.getElementById("container")),this.controls.maxPolarAngle=Math.PI/2,new R1().load("/wexteras/fonts/Oswald_Regular.json",n=>{this.font=n;const s=new wc("Loading temp...",{font:n,size:.5,height:.125}),r=new It(s,[new un({color:"#09b342"}),new un({color:"#0c993b"})]),o=new wc("Loading humid...",{font:n,size:.5,height:.125}),a=new It(o,[new un({color:"#09b342"}),new un({color:"#0c993b"})]);this.tempText=r,this.humidText=a,this.tempText.position.y=-1.6,this.humidText.position.y=-1.6,this.tempText.position.x+=2.5,this.humidText.position.x+=2.5,this.tempText.position.z-=.5,this.humidText.position.z+=.5,this.tempText.rotateX(-Math.PI/2),this.humidText.rotateX(-Math.PI/2),this.scene.add(this.tempText,this.humidText)})},loadGrass:function(){this.clock=new BA;const i=`
                varying vec2 vUv;
                uniform float time;
                
                void main() {

                vUv = uv;
                
                // VERTEX POSITION
                
                vec4 mvPosition = vec4( position, 1.0 );
                #ifdef USE_INSTANCING
                    mvPosition = instanceMatrix * mvPosition;
                #endif
                
                // DISPLACEMENT
                
                // here the displacement is made stronger on the blades tips.
                float dispPower = 1.0 - cos( uv.y * 3.1416 / 2.0 );
                
                float displacement = sin( mvPosition.z + time * 10.0 ) * ( 0.05 * dispPower );
                mvPosition.z += displacement;
                
                //
                
                vec4 modelViewPosition = modelViewMatrix * mvPosition;
                gl_Position = projectionMatrix * modelViewPosition;

                }
            `,e=`
            varying vec2 vUv;
            
            void main() {
                vec3 baseColor = vec3( 0.41, 1.0, 0.5 );
                float clarity = ( vUv.y * 0.5 ) + 0.5;
                gl_FragColor = vec4( baseColor * clarity, 1 );
            }
            `,t={time:{value:0}};this.leavesMaterial=new Qn({vertexShader:i,fragmentShader:e,uniforms:t,side:Ln});const n=1250,s=new ct,r=new er(.1,.25,1,4);r.translate(0,0,0);const o=new wp(r,this.leavesMaterial,n);this.model.attach(o);for(let a=0;a<n;a++)s.position.set((Math.random()-.5)*2.5,0,(Math.random()-.5)*2.5),s.scale.setScalar(.5+Math.random()*.5),s.rotation.y=Math.random()*Math.PI,s.updateMatrix(),o.setMatrixAt(a,s.matrix);o.position.y=.6},loadWater:function(){const e=new ct,t=new er(.1,.25,1,4);t.translate(0,0,0);const n=new wp(t,this.leavesMaterial,1250);this.model.attach(n);for(let s=0;s<1250;s++)e.position.set((Math.random()-.5)*2.5,0,(Math.random()-.5)*2.5),e.scale.setScalar(.5+Math.random()*.5),e.rotation.y=Math.random()*Math.PI,e.updateMatrix(),n.setMatrixAt(s,e.matrix);n.position.y=.6},loadPlane:function(i){const e=new er(100.1,100.1);let t=new xl(e,{clipBias:.003,textureWidth:window.innerWidth*window.devicePixelRatio,textureHeight:window.innerHeight*window.devicePixelRatio,blur:1});const n=new wh(100,100),s=new Ji({metalness:1,roughness:.5,opacity:.6,transparent:!0}),r=new It(n,s);t.position.y=-i.y/2-.35,r.position.y=-i.y/2+.01-.35,r.rotateX(-Math.PI/2),t.rotateX(-Math.PI/2),this.scene.add(r),this.scene.add(t)},loadButton:function(){},loadRain:function(){const e=new wr(.1,.1,.1),t=new un({color:"rgb(0, 0, 255)"});for(let n=0;n<50;n++){let s=new It(e,t);s.position.set((Math.random()-.5)*2.5,Math.random()*.8,(Math.random()-.5)*2.5),s.time=Math.random()*100,this.rainDrops.push(s)}},animate:function(){requestAnimationFrame(this.animate),this.leavesMaterial&&(this.leavesMaterial.uniforms.time.value=this.clock.getElapsedTime(),this.leavesMaterial.uniformsNeedUpdate=!0),this.rainDrops.forEach(i=>{i.position.y<-1&&(i.position.set((Math.random()-.5)*2.5,Math.random()*.8,(Math.random()-.5)*2.5),i.time=0),i.time+=1,i.position.y-=5e-4*i.time}),this.isFanSpinning&&this.fan&&(this.fan.rotation.z+=.1),this.roof&&this.targetQuaternion&&this.roof.quaternion.slerp(this.targetQuaternion,.01),this.renderer.render(this.scene,this.camera)},changeText:function(i,e){const t=new wc(String(i),{font:this.font,size:.5,height:.125});e.geometry=t},rotateRoof:function(i){i?this.targetQuaternion=new En().setFromAxisAngle(new P(1,0,0),-Math.PI/20):this.targetQuaternion=new En().setFromAxisAngle(new P(1,0,0),0)},onWindowResize:function(){container=document.getElementById("container"),this.camera.aspect=container.clientWidth/container.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(container.clientWidth,container.clientHeight)},onMouseClick:function(i){this.pointer.x=i.clientX/window.innerWidth*2-1,this.pointer.y=-(i.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera),this.raycaster.intersectObjects(this.scene.children)}},created(){const i=qr(Yr,"temp"),e=qr(Yr,"humid"),t=qr(Yr,"isWatering"),n=qr(Yr,"isFanSpinning"),s=qr(Yr,"isRoofOpen");Xr(i,r=>{const o=r.val();this.changeText(o+"\xB0C",this.tempText)}),Xr(e,r=>{const o=r.val();this.changeText(o+"%",this.humidText)}),Xr(t,r=>{const o=r.val();o?this.rainDrops.forEach(a=>{this.scene.add(a)}):o||this.rainDrops.forEach(a=>{this.scene.remove(a)})}),Xr(n,r=>{const o=r.val();this.isFanSpinning=o}),Xr(s,r=>{const o=r.val();this.rotateRoof(o)})},mounted(){this.start(),window.addEventListener("resize",this.onWindowResize),window.addEventListener("click",this.onMouseClick),this.animate()}};var dD=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"container"}})},pD=[],mD=s0(fD,dD,pD,!1,null,null,null,null);const gD=mD.exports;const _D={name:"app",components:{GreenHouse:gD}};var vD=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("GreenHouse",{staticClass:"greenHouse"})],1)},yD=[],xD=s0(_D,vD,yD,!1,null,"fb00f813",null,null);const bD=xD.exports;new _t({render:i=>i(bD)}).$mount("#app");export{SD as __vite_legacy_guard};
