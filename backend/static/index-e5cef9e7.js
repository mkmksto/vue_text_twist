(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Da(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function za(e){if(j(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ve(r)?Il(r):za(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ve(e))return e;if(ee(e))return e}}const Ol=/;(?![^(]*\))/g,Tl=/:([^]+)/,Pl=/\/\*.*?\*\//gs;function Il(e){const t={};return e.replace(Pl,"").split(Ol).forEach(n=>{if(n){const r=n.split(Tl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Tr(e){let t="";if(ve(e))t=e;else if(j(e))for(let n=0;n<e.length;n++){const r=Tr(e[n]);r&&(t+=r+" ")}else if(ee(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Nl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ml=Da(Nl);function zo(e){return!!e||e===""}function Ll(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Pr(e[r],t[r]);return n}function Pr(e,t){if(e===t)return!0;let n=Oi(e),r=Oi(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=Sn(e),r=Sn(t),n||r)return e===t;if(n=j(e),r=j(t),n||r)return n&&r?Ll(e,t):!1;if(n=ee(e),r=ee(t),n||r){if(!n||!r)return!1;const a=Object.keys(e).length,i=Object.keys(t).length;if(a!==i)return!1;for(const o in e){const s=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(s&&!l||!s&&l||!Pr(e[o],t[o]))return!1}}return String(e)===String(t)}function Rl(e,t){return e.findIndex(n=>Pr(n,t))}const et=e=>ve(e)?e:e==null?"":j(e)||ee(e)&&(e.toString===Ho||!U(e.toString))?JSON.stringify(e,Bo,2):String(e),Bo=(e,t)=>t&&t.__v_isRef?Bo(e,t.value):Xt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Nr(t)?{[`Set(${t.size})`]:[...t.values()]}:ee(t)&&!j(t)&&!Uo(t)?String(t):t,ie={},qt=[],Ke=()=>{},Fl=()=>!1,$l=/^on[^a-z]/,Ir=e=>$l.test(e),Ba=e=>e.startsWith("onUpdate:"),we=Object.assign,Wa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},jl=Object.prototype.hasOwnProperty,q=(e,t)=>jl.call(e,t),j=Array.isArray,Xt=e=>zn(e)==="[object Map]",Nr=e=>zn(e)==="[object Set]",Oi=e=>zn(e)==="[object Date]",U=e=>typeof e=="function",ve=e=>typeof e=="string",Sn=e=>typeof e=="symbol",ee=e=>e!==null&&typeof e=="object",Wo=e=>ee(e)&&U(e.then)&&U(e.catch),Ho=Object.prototype.toString,zn=e=>Ho.call(e),Dl=e=>zn(e).slice(8,-1),Uo=e=>zn(e)==="[object Object]",Ha=e=>ve(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,fr=Da(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Mr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},zl=/-(\w)/g,nt=Mr(e=>e.replace(zl,(t,n)=>n?n.toUpperCase():"")),Bl=/\B([A-Z])/g,an=Mr(e=>e.replace(Bl,"-$1").toLowerCase()),Lr=Mr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Zr=Mr(e=>e?`on${Lr(e)}`:""),Cn=(e,t)=>!Object.is(e,t),cr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},vr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Qt=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ti;const Wl=()=>Ti||(Ti=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ie;class Yo{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ie,!t&&Ie&&(this.index=(Ie.scopes||(Ie.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ie;try{return Ie=this,t()}finally{Ie=n}}}on(){Ie=this}off(){Ie=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this.active=!1}}}function Ko(e){return new Yo(e)}function Hl(e,t=Ie){t&&t.active&&t.effects.push(e)}function Ul(){return Ie}function Yl(e){Ie&&Ie.cleanups.push(e)}const Ua=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Go=e=>(e.w&_t)>0,Vo=e=>(e.n&_t)>0,Kl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=_t},Gl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Go(a)&&!Vo(a)?a.delete(e):t[n++]=a,a.w&=~_t,a.n&=~_t}t.length=n}},fa=new WeakMap;let hn=0,_t=1;const ca=30;let We;const $t=Symbol(""),ua=Symbol("");class Ya{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Hl(this,r)}run(){if(!this.active)return this.fn();let t=We,n=bt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=We,We=this,bt=!0,_t=1<<++hn,hn<=ca?Kl(this):Pi(this),this.fn()}finally{hn<=ca&&Gl(this),_t=1<<--hn,We=this.parent,bt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){We===this?this.deferStop=!0:this.active&&(Pi(this),this.onStop&&this.onStop(),this.active=!1)}}function Pi(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let bt=!0;const qo=[];function on(){qo.push(bt),bt=!1}function sn(){const e=qo.pop();bt=e===void 0?!0:e}function Me(e,t,n){if(bt&&We){let r=fa.get(e);r||fa.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Ua()),Xo(a)}}function Xo(e,t){let n=!1;hn<=ca?Vo(e)||(e.n|=_t,n=!Go(e)):n=!e.has(We),n&&(e.add(We),We.deps.push(e))}function ot(e,t,n,r,a,i){const o=fa.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&j(e)){const l=Qt(r);o.forEach((f,c)=>{(c==="length"||c>=l)&&s.push(f)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":j(e)?Ha(n)&&s.push(o.get("length")):(s.push(o.get($t)),Xt(e)&&s.push(o.get(ua)));break;case"delete":j(e)||(s.push(o.get($t)),Xt(e)&&s.push(o.get(ua)));break;case"set":Xt(e)&&s.push(o.get($t));break}if(s.length===1)s[0]&&da(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);da(Ua(l))}}function da(e,t){const n=j(e)?e:[...e];for(const r of n)r.computed&&Ii(r);for(const r of n)r.computed||Ii(r)}function Ii(e,t){(e!==We||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Vl=Da("__proto__,__v_isRef,__isVue"),Jo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Sn)),ql=Ka(),Xl=Ka(!1,!0),Jl=Ka(!0),Ni=Zl();function Zl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=V(this);for(let i=0,o=this.length;i<o;i++)Me(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(V)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){on();const r=V(this)[t].apply(this,n);return sn(),r}}),e}function Ka(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?hf:ns:t?ts:es).get(r))return r;const o=j(r);if(!e&&o&&q(Ni,a))return Reflect.get(Ni,a,i);const s=Reflect.get(r,a,i);return(Sn(a)?Jo.has(a):Vl(a))||(e||Me(r,"get",a),t)?s:de(s)?o&&Ha(a)?s:s.value:ee(s)?e?rs(s):ln(s):s}}const Ql=Zo(),ef=Zo(!0);function Zo(e=!1){return function(n,r,a,i){let o=n[r];if(en(o)&&de(o)&&!de(a))return!1;if(!e&&(!br(a)&&!en(a)&&(o=V(o),a=V(a)),!j(n)&&de(o)&&!de(a)))return o.value=a,!0;const s=j(n)&&Ha(r)?Number(r)<n.length:q(n,r),l=Reflect.set(n,r,a,i);return n===V(i)&&(s?Cn(a,o)&&ot(n,"set",r,a):ot(n,"add",r,a)),l}}function tf(e,t){const n=q(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&ot(e,"delete",t,void 0),r}function nf(e,t){const n=Reflect.has(e,t);return(!Sn(t)||!Jo.has(t))&&Me(e,"has",t),n}function rf(e){return Me(e,"iterate",j(e)?"length":$t),Reflect.ownKeys(e)}const Qo={get:ql,set:Ql,deleteProperty:tf,has:nf,ownKeys:rf},af={get:Jl,set(e,t){return!0},deleteProperty(e,t){return!0}},of=we({},Qo,{get:Xl,set:ef}),Ga=e=>e,Rr=e=>Reflect.getPrototypeOf(e);function Gn(e,t,n=!1,r=!1){e=e.__v_raw;const a=V(e),i=V(t);n||(t!==i&&Me(a,"get",t),Me(a,"get",i));const{has:o}=Rr(a),s=r?Ga:n?Xa:An;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Vn(e,t=!1){const n=this.__v_raw,r=V(n),a=V(e);return t||(e!==a&&Me(r,"has",e),Me(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function qn(e,t=!1){return e=e.__v_raw,!t&&Me(V(e),"iterate",$t),Reflect.get(e,"size",e)}function Mi(e){e=V(e);const t=V(this);return Rr(t).has.call(t,e)||(t.add(e),ot(t,"add",e,e)),this}function Li(e,t){t=V(t);const n=V(this),{has:r,get:a}=Rr(n);let i=r.call(n,e);i||(e=V(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Cn(t,o)&&ot(n,"set",e,t):ot(n,"add",e,t),this}function Ri(e){const t=V(this),{has:n,get:r}=Rr(t);let a=n.call(t,e);a||(e=V(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&ot(t,"delete",e,void 0),i}function Fi(){const e=V(this),t=e.size!==0,n=e.clear();return t&&ot(e,"clear",void 0,void 0),n}function Xn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=V(o),l=t?Ga:e?Xa:An;return!e&&Me(s,"iterate",$t),o.forEach((f,c)=>r.call(a,l(f),l(c),i))}}function Jn(e,t,n){return function(...r){const a=this.__v_raw,i=V(a),o=Xt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),c=n?Ga:t?Xa:An;return!t&&Me(i,"iterate",l?ua:$t),{next(){const{value:d,done:p}=f.next();return p?{value:d,done:p}:{value:s?[c(d[0]),c(d[1])]:c(d),done:p}},[Symbol.iterator](){return this}}}}function dt(e){return function(...t){return e==="delete"?!1:this}}function sf(){const e={get(i){return Gn(this,i)},get size(){return qn(this)},has:Vn,add:Mi,set:Li,delete:Ri,clear:Fi,forEach:Xn(!1,!1)},t={get(i){return Gn(this,i,!1,!0)},get size(){return qn(this)},has:Vn,add:Mi,set:Li,delete:Ri,clear:Fi,forEach:Xn(!1,!0)},n={get(i){return Gn(this,i,!0)},get size(){return qn(this,!0)},has(i){return Vn.call(this,i,!0)},add:dt("add"),set:dt("set"),delete:dt("delete"),clear:dt("clear"),forEach:Xn(!0,!1)},r={get(i){return Gn(this,i,!0,!0)},get size(){return qn(this,!0)},has(i){return Vn.call(this,i,!0)},add:dt("add"),set:dt("set"),delete:dt("delete"),clear:dt("clear"),forEach:Xn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Jn(i,!1,!1),n[i]=Jn(i,!0,!1),t[i]=Jn(i,!1,!0),r[i]=Jn(i,!0,!0)}),[e,n,t,r]}const[lf,ff,cf,uf]=sf();function Va(e,t){const n=t?e?uf:cf:e?ff:lf;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(q(n,a)&&a in r?n:r,a,i)}const df={get:Va(!1,!1)},mf={get:Va(!1,!0)},pf={get:Va(!0,!1)},es=new WeakMap,ts=new WeakMap,ns=new WeakMap,hf=new WeakMap;function gf(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vf(e){return e.__v_skip||!Object.isExtensible(e)?0:gf(Dl(e))}function ln(e){return en(e)?e:qa(e,!1,Qo,df,es)}function bf(e){return qa(e,!1,of,mf,ts)}function rs(e){return qa(e,!0,af,pf,ns)}function qa(e,t,n,r,a){if(!ee(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=vf(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function it(e){return en(e)?it(e.__v_raw):!!(e&&e.__v_isReactive)}function en(e){return!!(e&&e.__v_isReadonly)}function br(e){return!!(e&&e.__v_isShallow)}function as(e){return it(e)||en(e)}function V(e){const t=e&&e.__v_raw;return t?V(t):e}function tn(e){return vr(e,"__v_skip",!0),e}const An=e=>ee(e)?ln(e):e,Xa=e=>ee(e)?rs(e):e;function is(e){bt&&We&&(e=V(e),Xo(e.dep||(e.dep=Ua())))}function os(e,t){e=V(e),e.dep&&da(e.dep)}function de(e){return!!(e&&e.__v_isRef===!0)}function $e(e){return yf(e,!1)}function yf(e,t){return de(e)?e:new _f(e,t)}class _f{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:V(t),this._value=n?t:An(t)}get value(){return is(this),this._value}set value(t){const n=this.__v_isShallow||br(t)||en(t);t=n?t:V(t),Cn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:An(t),os(this))}}function K(e){return de(e)?e.value:e}const wf={get:(e,t,n)=>K(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return de(a)&&!de(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function ss(e){return it(e)?e:new Proxy(e,wf)}function xf(e){const t=j(e)?new Array(e.length):{};for(const n in e)t[n]=ls(e,n);return t}class kf{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function ls(e,t,n){const r=e[t];return de(r)?r:new kf(e,t,n)}var fs;class Sf{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[fs]=!1,this._dirty=!0,this.effect=new Ya(t,()=>{this._dirty||(this._dirty=!0,os(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=V(this);return is(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}fs="__v_isReadonly";function Cf(e,t,n=!1){let r,a;const i=U(e);return i?(r=e,a=Ke):(r=e.get,a=e.set),new Sf(r,a,i||!a,n)}function yt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Fr(i,t,n)}return a}function je(e,t,n,r){if(U(e)){const i=yt(e,t,n,r);return i&&Wo(i)&&i.catch(o=>{Fr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(je(e[i],t,n,r));return a}function Fr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){yt(l,null,10,[e,o,s]);return}}Af(e,n,a,r)}function Af(e,t,n,r=!0){console.error(e)}let En=!1,ma=!1;const Ce=[];let Qe=0;const Jt=[];let at=null,Pt=0;const cs=Promise.resolve();let Ja=null;function On(e){const t=Ja||cs;return e?t.then(this?e.bind(this):e):t}function Ef(e){let t=Qe+1,n=Ce.length;for(;t<n;){const r=t+n>>>1;Tn(Ce[r])<e?t=r+1:n=r}return t}function Za(e){(!Ce.length||!Ce.includes(e,En&&e.allowRecurse?Qe+1:Qe))&&(e.id==null?Ce.push(e):Ce.splice(Ef(e.id),0,e),us())}function us(){!En&&!ma&&(ma=!0,Ja=cs.then(ms))}function Of(e){const t=Ce.indexOf(e);t>Qe&&Ce.splice(t,1)}function Tf(e){j(e)?Jt.push(...e):(!at||!at.includes(e,e.allowRecurse?Pt+1:Pt))&&Jt.push(e),us()}function $i(e,t=En?Qe+1:0){for(;t<Ce.length;t++){const n=Ce[t];n&&n.pre&&(Ce.splice(t,1),t--,n())}}function ds(e){if(Jt.length){const t=[...new Set(Jt)];if(Jt.length=0,at){at.push(...t);return}for(at=t,at.sort((n,r)=>Tn(n)-Tn(r)),Pt=0;Pt<at.length;Pt++)at[Pt]();at=null,Pt=0}}const Tn=e=>e.id==null?1/0:e.id,Pf=(e,t)=>{const n=Tn(e)-Tn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ms(e){ma=!1,En=!0,Ce.sort(Pf);const t=Ke;try{for(Qe=0;Qe<Ce.length;Qe++){const n=Ce[Qe];n&&n.active!==!1&&yt(n,null,14)}}finally{Qe=0,Ce.length=0,ds(),En=!1,Ja=null,(Ce.length||Jt.length)&&ms()}}function If(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ie;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[c]||ie;p&&(a=n.map(g=>ve(g)?g.trim():g)),d&&(a=n.map(Qt))}let s,l=r[s=Zr(t)]||r[s=Zr(nt(t))];!l&&i&&(l=r[s=Zr(an(t))]),l&&je(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,je(f,e,6,a)}}function ps(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!U(e)){const l=f=>{const c=ps(f,t,!0);c&&(s=!0,we(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(ee(e)&&r.set(e,null),null):(j(i)?i.forEach(l=>o[l]=null):we(o,i),ee(e)&&r.set(e,o),o)}function $r(e,t){return!e||!Ir(t)?!1:(t=t.slice(2).replace(/Once$/,""),q(e,t[0].toLowerCase()+t.slice(1))||q(e,an(t))||q(e,t))}let Ne=null,jr=null;function yr(e){const t=Ne;return Ne=e,jr=e&&e.type.__scopeId||null,t}function hs(e){jr=e}function gs(){jr=null}function pa(e,t=Ne,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Gi(-1);const i=yr(t);let o;try{o=e(...a)}finally{yr(i),r._d&&Gi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Qr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:c,renderCache:d,data:p,setupState:g,ctx:k,inheritAttrs:S}=e;let D,_;const A=yr(e);try{if(n.shapeFlag&4){const L=a||r;D=Ze(c.call(L,L,d,i,g,p,k)),_=l}else{const L=t;D=Ze(L.length>1?L(i,{attrs:l,slots:s,emit:f}):L(i,null)),_=t.props?l:Nf(l)}}catch(L){yn.length=0,Fr(L,e,1),D=me(Ge)}let E=D;if(_&&S!==!1){const L=Object.keys(_),{shapeFlag:R}=E;L.length&&R&7&&(o&&L.some(Ba)&&(_=Mf(_,o)),E=wt(E,_))}return n.dirs&&(E=wt(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),D=E,yr(A),D}const Nf=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ir(n))&&((t||(t={}))[n]=e[n]);return t},Mf=(e,t)=>{const n={};for(const r in e)(!Ba(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Lf(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ji(r,o,f):!!o;if(l&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const p=c[d];if(o[p]!==r[p]&&!$r(f,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ji(r,o,f):!0:!!o;return!1}function ji(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!$r(n,i))return!0}return!1}function Rf({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Ff=e=>e.__isSuspense;function $f(e,t){t&&t.pendingBranch?j(e)?t.effects.push(...e):t.effects.push(e):Tf(e)}function jf(e,t){if(_e){let n=_e.provides;const r=_e.parent&&_e.parent.provides;r===n&&(n=_e.provides=Object.create(r)),n[e]=t}}function vn(e,t,n=!1){const r=_e||Ne;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&U(t)?t.call(r.proxy):t}}const Zn={};function jt(e,t,n){return vs(e,t,n)}function vs(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=ie){const s=_e;let l,f=!1,c=!1;if(de(e)?(l=()=>e.value,f=br(e)):it(e)?(l=()=>e,r=!0):j(e)?(c=!0,f=e.some(E=>it(E)||br(E)),l=()=>e.map(E=>{if(de(E))return E.value;if(it(E))return Lt(E);if(U(E))return yt(E,s,2)})):U(e)?t?l=()=>yt(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return d&&d(),je(e,s,3,[p])}:l=Ke,t&&r){const E=l;l=()=>Lt(E())}let d,p=E=>{d=_.onStop=()=>{yt(E,s,4)}},g;if(Mn)if(p=Ke,t?n&&je(t,s,3,[l(),c?[]:void 0,p]):l(),a==="sync"){const E=Nc();g=E.__watcherHandles||(E.__watcherHandles=[])}else return Ke;let k=c?new Array(e.length).fill(Zn):Zn;const S=()=>{if(_.active)if(t){const E=_.run();(r||f||(c?E.some((L,R)=>Cn(L,k[R])):Cn(E,k)))&&(d&&d(),je(t,s,3,[E,k===Zn?void 0:c&&k[0]===Zn?[]:k,p]),k=E)}else _.run()};S.allowRecurse=!!t;let D;a==="sync"?D=S:a==="post"?D=()=>Te(S,s&&s.suspense):(S.pre=!0,s&&(S.id=s.uid),D=()=>Za(S));const _=new Ya(l,D);t?n?S():k=_.run():a==="post"?Te(_.run.bind(_),s&&s.suspense):_.run();const A=()=>{_.stop(),s&&s.scope&&Wa(s.scope.effects,_)};return g&&g.push(A),A}function Df(e,t,n){const r=this.proxy,a=ve(e)?e.includes(".")?bs(r,e):()=>r[e]:e.bind(r,r);let i;U(t)?i=t:(i=t.handler,n=t);const o=_e;nn(this);const s=vs(a,i.bind(r),n);return o?nn(o):Dt(),s}function bs(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Lt(e,t){if(!ee(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),de(e))Lt(e.value,t);else if(j(e))for(let n=0;n<e.length;n++)Lt(e[n],t);else if(Nr(e)||Xt(e))e.forEach(n=>{Lt(n,t)});else if(Uo(e))for(const n in e)Lt(e[n],t);return e}function ys(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Bn(()=>{e.isMounted=!0}),ks(()=>{e.isUnmounting=!0}),e}const Fe=[Function,Array],zf={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Fe,onEnter:Fe,onAfterEnter:Fe,onEnterCancelled:Fe,onBeforeLeave:Fe,onLeave:Fe,onAfterLeave:Fe,onLeaveCancelled:Fe,onBeforeAppear:Fe,onAppear:Fe,onAfterAppear:Fe,onAppearCancelled:Fe},setup(e,{slots:t}){const n=ai(),r=ys();let a;return()=>{const i=t.default&&Qa(t.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const S of i)if(S.type!==Ge){o=S;break}}const s=V(e),{mode:l}=s;if(r.isLeaving)return ea(o);const f=Di(o);if(!f)return ea(o);const c=Pn(f,s,r,n);In(f,c);const d=n.subTree,p=d&&Di(d);let g=!1;const{getTransitionKey:k}=f.type;if(k){const S=k();a===void 0?a=S:S!==a&&(a=S,g=!0)}if(p&&p.type!==Ge&&(!It(f,p)||g)){const S=Pn(p,s,r,n);if(In(p,S),l==="out-in")return r.isLeaving=!0,S.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},ea(o);l==="in-out"&&f.type!==Ge&&(S.delayLeave=(D,_,A)=>{const E=_s(r,p);E[String(p.key)]=p,D._leaveCb=()=>{_(),D._leaveCb=void 0,delete c.delayedLeave},c.delayedLeave=A})}return o}}},Bf=zf;function _s(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Pn(e,t,n,r){const{appear:a,mode:i,persisted:o=!1,onBeforeEnter:s,onEnter:l,onAfterEnter:f,onEnterCancelled:c,onBeforeLeave:d,onLeave:p,onAfterLeave:g,onLeaveCancelled:k,onBeforeAppear:S,onAppear:D,onAfterAppear:_,onAppearCancelled:A}=t,E=String(e.key),L=_s(n,e),R=(T,H)=>{T&&je(T,r,9,H)},Z=(T,H)=>{const G=H[1];R(T,H),j(T)?T.every(le=>le.length<=1)&&G():T.length<=1&&G()},z={mode:i,persisted:o,beforeEnter(T){let H=s;if(!n.isMounted)if(a)H=S||s;else return;T._leaveCb&&T._leaveCb(!0);const G=L[E];G&&It(e,G)&&G.el._leaveCb&&G.el._leaveCb(),R(H,[T])},enter(T){let H=l,G=f,le=c;if(!n.isMounted)if(a)H=D||l,G=_||f,le=A||c;else return;let M=!1;const Q=T._enterCb=ce=>{M||(M=!0,ce?R(le,[T]):R(G,[T]),z.delayedLeave&&z.delayedLeave(),T._enterCb=void 0)};H?Z(H,[T,Q]):Q()},leave(T,H){const G=String(e.key);if(T._enterCb&&T._enterCb(!0),n.isUnmounting)return H();R(d,[T]);let le=!1;const M=T._leaveCb=Q=>{le||(le=!0,H(),Q?R(k,[T]):R(g,[T]),T._leaveCb=void 0,L[G]===e&&delete L[G])};L[G]=e,p?Z(p,[T,M]):M()},clone(T){return Pn(T,t,n,r)}};return z}function ea(e){if(Dr(e))return e=wt(e),e.children=null,e}function Di(e){return Dr(e)?e.children?e.children[0]:void 0:e}function In(e,t){e.shapeFlag&6&&e.component?In(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Qa(e,t=!1,n){let r=[],a=0;for(let i=0;i<e.length;i++){let o=e[i];const s=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===xe?(o.patchFlag&128&&a++,r=r.concat(Qa(o.children,t,s))):(t||o.type!==Ge)&&r.push(s!=null?wt(o,{key:s}):o)}if(a>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function ei(e){return U(e)?{setup:e,name:e.name}:e}const ur=e=>!!e.type.__asyncLoader,Dr=e=>e.type.__isKeepAlive;function Wf(e,t){ws(e,"a",t)}function Hf(e,t){ws(e,"da",t)}function ws(e,t,n=_e){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(zr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Dr(a.parent.vnode)&&Uf(r,t,n,a),a=a.parent}}function Uf(e,t,n,r){const a=zr(t,e,r,!0);Ss(()=>{Wa(r[t],a)},n)}function zr(e,t,n=_e,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;on(),nn(n);const s=je(t,n,e,o);return Dt(),sn(),s});return r?a.unshift(i):a.push(i),i}}const ct=e=>(t,n=_e)=>(!Mn||e==="sp")&&zr(e,(...r)=>t(...r),n),Yf=ct("bm"),Bn=ct("m"),Kf=ct("bu"),xs=ct("u"),ks=ct("bum"),Ss=ct("um"),Gf=ct("sp"),Vf=ct("rtg"),qf=ct("rtc");function Xf(e,t=_e){zr("ec",e,t)}function mn(e,t){const n=Ne;if(n===null)return e;const r=Hr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,f=ie]=t[i];o&&(U(o)&&(o={mounted:o,updated:o}),o.deep&&Lt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:f}))}return e}function At(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(on(),je(l,n,8,[e.el,s,e,t]),sn())}}const Cs="components";function Jf(e,t){return Qf(Cs,e,!0,t)||e}const Zf=Symbol();function Qf(e,t,n=!0,r=!1){const a=Ne||_e;if(a){const i=a.type;if(e===Cs){const s=Tc(i,!1);if(s&&(s===t||s===nt(t)||s===Lr(nt(t))))return i}const o=zi(a[e]||i[e],t)||zi(a.appContext[e],t);return!o&&r?i:o}}function zi(e,t){return e&&(e[t]||e[nt(t)]||e[Lr(nt(t))])}function _r(e,t,n,r){let a;const i=n&&n[r];if(j(e)||ve(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(ee(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];a[s]=t(e[f],f,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const ha=e=>e?Fs(e)?Hr(e)||e.proxy:ha(e.parent):null,bn=we(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ha(e.parent),$root:e=>ha(e.root),$emit:e=>e.emit,$options:e=>ti(e),$forceUpdate:e=>e.f||(e.f=()=>Za(e.update)),$nextTick:e=>e.n||(e.n=On.bind(e.proxy)),$watch:e=>Df.bind(e)}),ta=(e,t)=>e!==ie&&!e.__isScriptSetup&&q(e,t),ec={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(ta(r,t))return o[t]=1,r[t];if(a!==ie&&q(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&q(f,t))return o[t]=3,i[t];if(n!==ie&&q(n,t))return o[t]=4,n[t];ga&&(o[t]=0)}}const c=bn[t];let d,p;if(c)return t==="$attrs"&&Me(e,"get",t),c(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==ie&&q(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,q(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return ta(a,t)?(a[t]=n,!0):r!==ie&&q(r,t)?(r[t]=n,!0):q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==ie&&q(e,o)||ta(t,o)||(s=i[0])&&q(s,o)||q(r,o)||q(bn,o)||q(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:q(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let ga=!0;function tc(e){const t=ti(e),n=e.proxy,r=e.ctx;ga=!1,t.beforeCreate&&Bi(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:c,beforeMount:d,mounted:p,beforeUpdate:g,updated:k,activated:S,deactivated:D,beforeDestroy:_,beforeUnmount:A,destroyed:E,unmounted:L,render:R,renderTracked:Z,renderTriggered:z,errorCaptured:T,serverPrefetch:H,expose:G,inheritAttrs:le,components:M,directives:Q,filters:ce}=t;if(f&&nc(f,r,null,e.appContext.config.unwrapInjectedRef),o)for(const re in o){const X=o[re];U(X)&&(r[re]=X.bind(n))}if(a){const re=a.call(n,n);ee(re)&&(e.data=ln(re))}if(ga=!0,i)for(const re in i){const X=i[re],Ve=U(X)?X.bind(n,n):U(X.get)?X.get.bind(n,n):Ke,Ht=!U(X)&&U(X.set)?X.set.bind(n):Ke,qe=ye({get:Ve,set:Ht});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>qe.value,set:Re=>qe.value=Re})}if(s)for(const re in s)As(s[re],r,n,re);if(l){const re=U(l)?l.call(n):l;Reflect.ownKeys(re).forEach(X=>{jf(X,re[X])})}c&&Bi(c,e,"c");function pe(re,X){j(X)?X.forEach(Ve=>re(Ve.bind(n))):X&&re(X.bind(n))}if(pe(Yf,d),pe(Bn,p),pe(Kf,g),pe(xs,k),pe(Wf,S),pe(Hf,D),pe(Xf,T),pe(qf,Z),pe(Vf,z),pe(ks,A),pe(Ss,L),pe(Gf,H),j(G))if(G.length){const re=e.exposed||(e.exposed={});G.forEach(X=>{Object.defineProperty(re,X,{get:()=>n[X],set:Ve=>n[X]=Ve})})}else e.exposed||(e.exposed={});R&&e.render===Ke&&(e.render=R),le!=null&&(e.inheritAttrs=le),M&&(e.components=M),Q&&(e.directives=Q)}function nc(e,t,n=Ke,r=!1){j(e)&&(e=va(e));for(const a in e){const i=e[a];let o;ee(i)?"default"in i?o=vn(i.from||a,i.default,!0):o=vn(i.from||a):o=vn(i),de(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Bi(e,t,n){je(j(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function As(e,t,n,r){const a=r.includes(".")?bs(n,r):()=>n[r];if(ve(e)){const i=t[e];U(i)&&jt(a,i)}else if(U(e))jt(a,e.bind(n));else if(ee(e))if(j(e))e.forEach(i=>As(i,t,n,r));else{const i=U(e.handler)?e.handler.bind(n):t[e.handler];U(i)&&jt(a,i,e)}}function ti(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>wr(l,f,o,!0)),wr(l,t,o)),ee(t)&&i.set(t,l),l}function wr(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&wr(e,i,n,!0),a&&a.forEach(o=>wr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=rc[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const rc={data:Wi,props:Tt,emits:Tt,methods:Tt,computed:Tt,beforeCreate:Ae,created:Ae,beforeMount:Ae,mounted:Ae,beforeUpdate:Ae,updated:Ae,beforeDestroy:Ae,beforeUnmount:Ae,destroyed:Ae,unmounted:Ae,activated:Ae,deactivated:Ae,errorCaptured:Ae,serverPrefetch:Ae,components:Tt,directives:Tt,watch:ic,provide:Wi,inject:ac};function Wi(e,t){return t?e?function(){return we(U(e)?e.call(this,this):e,U(t)?t.call(this,this):t)}:t:e}function ac(e,t){return Tt(va(e),va(t))}function va(e){if(j(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ae(e,t){return e?[...new Set([].concat(e,t))]:t}function Tt(e,t){return e?we(we(Object.create(null),e),t):t}function ic(e,t){if(!e)return t;if(!t)return e;const n=we(Object.create(null),e);for(const r in t)n[r]=Ae(e[r],t[r]);return n}function oc(e,t,n,r=!1){const a={},i={};vr(i,Wr,1),e.propsDefaults=Object.create(null),Es(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:bf(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function sc(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=V(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let p=c[d];if($r(e.emitsOptions,p))continue;const g=t[p];if(l)if(q(i,p))g!==i[p]&&(i[p]=g,f=!0);else{const k=nt(p);a[k]=ba(l,s,k,g,e,!1)}else g!==i[p]&&(i[p]=g,f=!0)}}}else{Es(e,t,a,i)&&(f=!0);let c;for(const d in s)(!t||!q(t,d)&&((c=an(d))===d||!q(t,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(a[d]=ba(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!q(t,d))&&(delete i[d],f=!0)}f&&ot(e,"set","$attrs")}function Es(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(fr(l))continue;const f=t[l];let c;a&&q(a,c=nt(l))?!i||!i.includes(c)?n[c]=f:(s||(s={}))[c]=f:$r(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=V(n),f=s||ie;for(let c=0;c<i.length;c++){const d=i[c];n[d]=ba(a,l,d,f[d],e,!q(f,d))}}return o}function ba(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=q(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&U(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(nn(a),r=f[n]=l.call(null,t),Dt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===an(n))&&(r=!0))}return r}function Os(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!U(e)){const c=d=>{l=!0;const[p,g]=Os(d,t,!0);we(o,p),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return ee(e)&&r.set(e,qt),qt;if(j(i))for(let c=0;c<i.length;c++){const d=nt(i[c]);Hi(d)&&(o[d]=ie)}else if(i)for(const c in i){const d=nt(c);if(Hi(d)){const p=i[c],g=o[d]=j(p)||U(p)?{type:p}:Object.assign({},p);if(g){const k=Ki(Boolean,g.type),S=Ki(String,g.type);g[0]=k>-1,g[1]=S<0||k<S,(k>-1||q(g,"default"))&&s.push(d)}}}const f=[o,s];return ee(e)&&r.set(e,f),f}function Hi(e){return e[0]!=="$"}function Ui(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Yi(e,t){return Ui(e)===Ui(t)}function Ki(e,t){return j(t)?t.findIndex(n=>Yi(n,e)):U(t)&&Yi(t,e)?0:-1}const Ts=e=>e[0]==="_"||e==="$stable",ni=e=>j(e)?e.map(Ze):[Ze(e)],lc=(e,t,n)=>{if(t._n)return t;const r=pa((...a)=>ni(t(...a)),n);return r._c=!1,r},Ps=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Ts(a))continue;const i=e[a];if(U(i))t[a]=lc(a,i,r);else if(i!=null){const o=ni(i);t[a]=()=>o}}},Is=(e,t)=>{const n=ni(t);e.slots.default=()=>n},fc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=V(t),vr(t,"_",n)):Ps(t,e.slots={})}else e.slots={},t&&Is(e,t);vr(e.slots,Wr,1)},cc=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=ie;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(we(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Ps(t,a)),o=t}else t&&(Is(e,t),o={default:1});if(i)for(const s in a)!Ts(s)&&!(s in o)&&delete a[s]};function Ns(){return{app:null,config:{isNativeTag:Fl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uc=0;function dc(e,t){return function(r,a=null){U(r)||(r=Object.assign({},r)),a!=null&&!ee(a)&&(a=null);const i=Ns(),o=new Set;let s=!1;const l=i.app={_uid:uc++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Mc,get config(){return i.config},set config(f){},use(f,...c){return o.has(f)||(f&&U(f.install)?(o.add(f),f.install(l,...c)):U(f)&&(o.add(f),f(l,...c))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,c){return c?(i.components[f]=c,l):i.components[f]},directive(f,c){return c?(i.directives[f]=c,l):i.directives[f]},mount(f,c,d){if(!s){const p=me(r,a);return p.appContext=i,c&&t?t(p,f):e(p,f,d),s=!0,l._container=f,f.__vue_app__=l,Hr(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,c){return i.provides[f]=c,l}};return l}}function ya(e,t,n,r,a=!1){if(j(e)){e.forEach((p,g)=>ya(p,t&&(j(t)?t[g]:t),n,r,a));return}if(ur(r)&&!a)return;const i=r.shapeFlag&4?Hr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,c=s.refs===ie?s.refs={}:s.refs,d=s.setupState;if(f!=null&&f!==l&&(ve(f)?(c[f]=null,q(d,f)&&(d[f]=null)):de(f)&&(f.value=null)),U(l))yt(l,s,12,[o,c]);else{const p=ve(l),g=de(l);if(p||g){const k=()=>{if(e.f){const S=p?q(d,l)?d[l]:c[l]:l.value;a?j(S)&&Wa(S,i):j(S)?S.includes(i)||S.push(i):p?(c[l]=[i],q(d,l)&&(d[l]=c[l])):(l.value=[i],e.k&&(c[e.k]=l.value))}else p?(c[l]=o,q(d,l)&&(d[l]=o)):g&&(l.value=o,e.k&&(c[e.k]=o))};o?(k.id=-1,Te(k,n)):k()}}}const Te=$f;function mc(e){return pc(e)}function pc(e,t){const n=Wl();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:c,parentNode:d,nextSibling:p,setScopeId:g=Ke,insertStaticContent:k}=e,S=(u,m,h,b=null,v=null,x=null,O=!1,w=null,C=!!m.dynamicChildren)=>{if(u===m)return;u&&!It(u,m)&&(b=Ut(u),Re(u,v,x,!0),u=null),m.patchFlag===-2&&(C=!1,m.dynamicChildren=null);const{type:y,ref:F,shapeFlag:I}=m;switch(y){case Br:D(u,m,h,b);break;case Ge:_(u,m,h,b);break;case dr:u==null&&A(m,h,b,O);break;case xe:M(u,m,h,b,v,x,O,w,C);break;default:I&1?R(u,m,h,b,v,x,O,w,C):I&6?Q(u,m,h,b,v,x,O,w,C):(I&64||I&128)&&y.process(u,m,h,b,v,x,O,w,C,fe)}F!=null&&v&&ya(F,u&&u.ref,x,m||u,!m)},D=(u,m,h,b)=>{if(u==null)r(m.el=s(m.children),h,b);else{const v=m.el=u.el;m.children!==u.children&&f(v,m.children)}},_=(u,m,h,b)=>{u==null?r(m.el=l(m.children||""),h,b):m.el=u.el},A=(u,m,h,b)=>{[u.el,u.anchor]=k(u.children,m,h,b,u.el,u.anchor)},E=({el:u,anchor:m},h,b)=>{let v;for(;u&&u!==m;)v=p(u),r(u,h,b),u=v;r(m,h,b)},L=({el:u,anchor:m})=>{let h;for(;u&&u!==m;)h=p(u),a(u),u=h;a(m)},R=(u,m,h,b,v,x,O,w,C)=>{O=O||m.type==="svg",u==null?Z(m,h,b,v,x,O,w,C):H(u,m,v,x,O,w,C)},Z=(u,m,h,b,v,x,O,w)=>{let C,y;const{type:F,props:I,shapeFlag:$,transition:W,dirs:Y}=u;if(C=u.el=o(u.type,x,I&&I.is,I),$&8?c(C,u.children):$&16&&T(u.children,C,null,b,v,x&&F!=="foreignObject",O,w),Y&&At(u,null,b,"created"),I){for(const J in I)J!=="value"&&!fr(J)&&i(C,J,null,I[J],x,u.children,b,v,De);"value"in I&&i(C,"value",null,I.value),(y=I.onVnodeBeforeMount)&&Je(y,b,u)}z(C,u,u.scopeId,O,b),Y&&At(u,null,b,"beforeMount");const te=(!v||v&&!v.pendingBranch)&&W&&!W.persisted;te&&W.beforeEnter(C),r(C,m,h),((y=I&&I.onVnodeMounted)||te||Y)&&Te(()=>{y&&Je(y,b,u),te&&W.enter(C),Y&&At(u,null,b,"mounted")},v)},z=(u,m,h,b,v)=>{if(h&&g(u,h),b)for(let x=0;x<b.length;x++)g(u,b[x]);if(v){let x=v.subTree;if(m===x){const O=v.vnode;z(u,O,O.scopeId,O.slotScopeIds,v.parent)}}},T=(u,m,h,b,v,x,O,w,C=0)=>{for(let y=C;y<u.length;y++){const F=u[y]=w?gt(u[y]):Ze(u[y]);S(null,F,m,h,b,v,x,O,w)}},H=(u,m,h,b,v,x,O)=>{const w=m.el=u.el;let{patchFlag:C,dynamicChildren:y,dirs:F}=m;C|=u.patchFlag&16;const I=u.props||ie,$=m.props||ie;let W;h&&Et(h,!1),(W=$.onVnodeBeforeUpdate)&&Je(W,h,m,u),F&&At(m,u,h,"beforeUpdate"),h&&Et(h,!0);const Y=v&&m.type!=="foreignObject";if(y?G(u.dynamicChildren,y,w,h,b,Y,x):O||X(u,m,w,null,h,b,Y,x,!1),C>0){if(C&16)le(w,m,I,$,h,b,v);else if(C&2&&I.class!==$.class&&i(w,"class",null,$.class,v),C&4&&i(w,"style",I.style,$.style,v),C&8){const te=m.dynamicProps;for(let J=0;J<te.length;J++){const he=te[J],Be=I[he],Yt=$[he];(Yt!==Be||he==="value")&&i(w,he,Be,Yt,v,u.children,h,b,De)}}C&1&&u.children!==m.children&&c(w,m.children)}else!O&&y==null&&le(w,m,I,$,h,b,v);((W=$.onVnodeUpdated)||F)&&Te(()=>{W&&Je(W,h,m,u),F&&At(m,u,h,"updated")},b)},G=(u,m,h,b,v,x,O)=>{for(let w=0;w<m.length;w++){const C=u[w],y=m[w],F=C.el&&(C.type===xe||!It(C,y)||C.shapeFlag&70)?d(C.el):h;S(C,y,F,null,b,v,x,O,!0)}},le=(u,m,h,b,v,x,O)=>{if(h!==b){if(h!==ie)for(const w in h)!fr(w)&&!(w in b)&&i(u,w,h[w],null,O,m.children,v,x,De);for(const w in b){if(fr(w))continue;const C=b[w],y=h[w];C!==y&&w!=="value"&&i(u,w,y,C,O,m.children,v,x,De)}"value"in b&&i(u,"value",h.value,b.value)}},M=(u,m,h,b,v,x,O,w,C)=>{const y=m.el=u?u.el:s(""),F=m.anchor=u?u.anchor:s("");let{patchFlag:I,dynamicChildren:$,slotScopeIds:W}=m;W&&(w=w?w.concat(W):W),u==null?(r(y,h,b),r(F,h,b),T(m.children,h,F,v,x,O,w,C)):I>0&&I&64&&$&&u.dynamicChildren?(G(u.dynamicChildren,$,h,v,x,O,w),(m.key!=null||v&&m===v.subTree)&&Ms(u,m,!0)):X(u,m,h,F,v,x,O,w,C)},Q=(u,m,h,b,v,x,O,w,C)=>{m.slotScopeIds=w,u==null?m.shapeFlag&512?v.ctx.activate(m,h,b,O,C):ce(m,h,b,v,x,O,C):ne(u,m,C)},ce=(u,m,h,b,v,x,O)=>{const w=u.component=Sc(u,b,v);if(Dr(u)&&(w.ctx.renderer=fe),Cc(w),w.asyncDep){if(v&&v.registerDep(w,pe),!u.el){const C=w.subTree=me(Ge);_(null,C,m,h)}return}pe(w,u,m,h,v,x,O)},ne=(u,m,h)=>{const b=m.component=u.component;if(Lf(u,m,h))if(b.asyncDep&&!b.asyncResolved){re(b,m,h);return}else b.next=m,Of(b.update),b.update();else m.el=u.el,b.vnode=m},pe=(u,m,h,b,v,x,O)=>{const w=()=>{if(u.isMounted){let{next:F,bu:I,u:$,parent:W,vnode:Y}=u,te=F,J;Et(u,!1),F?(F.el=Y.el,re(u,F,O)):F=Y,I&&cr(I),(J=F.props&&F.props.onVnodeBeforeUpdate)&&Je(J,W,F,Y),Et(u,!0);const he=Qr(u),Be=u.subTree;u.subTree=he,S(Be,he,d(Be.el),Ut(Be),u,v,x),F.el=he.el,te===null&&Rf(u,he.el),$&&Te($,v),(J=F.props&&F.props.onVnodeUpdated)&&Te(()=>Je(J,W,F,Y),v)}else{let F;const{el:I,props:$}=m,{bm:W,m:Y,parent:te}=u,J=ur(m);if(Et(u,!1),W&&cr(W),!J&&(F=$&&$.onVnodeBeforeMount)&&Je(F,te,m),Et(u,!0),I&&ze){const he=()=>{u.subTree=Qr(u),ze(I,u.subTree,u,v,null)};J?m.type.__asyncLoader().then(()=>!u.isUnmounted&&he()):he()}else{const he=u.subTree=Qr(u);S(null,he,h,b,u,v,x),m.el=he.el}if(Y&&Te(Y,v),!J&&(F=$&&$.onVnodeMounted)){const he=m;Te(()=>Je(F,te,he),v)}(m.shapeFlag&256||te&&ur(te.vnode)&&te.vnode.shapeFlag&256)&&u.a&&Te(u.a,v),u.isMounted=!0,m=h=b=null}},C=u.effect=new Ya(w,()=>Za(y),u.scope),y=u.update=()=>C.run();y.id=u.uid,Et(u,!0),y()},re=(u,m,h)=>{m.component=u;const b=u.vnode.props;u.vnode=m,u.next=null,sc(u,m.props,b,h),cc(u,m.children,h),on(),$i(),sn()},X=(u,m,h,b,v,x,O,w,C=!1)=>{const y=u&&u.children,F=u?u.shapeFlag:0,I=m.children,{patchFlag:$,shapeFlag:W}=m;if($>0){if($&128){Ht(y,I,h,b,v,x,O,w,C);return}else if($&256){Ve(y,I,h,b,v,x,O,w,C);return}}W&8?(F&16&&De(y,v,x),I!==y&&c(h,I)):F&16?W&16?Ht(y,I,h,b,v,x,O,w,C):De(y,v,x,!0):(F&8&&c(h,""),W&16&&T(I,h,b,v,x,O,w,C))},Ve=(u,m,h,b,v,x,O,w,C)=>{u=u||qt,m=m||qt;const y=u.length,F=m.length,I=Math.min(y,F);let $;for($=0;$<I;$++){const W=m[$]=C?gt(m[$]):Ze(m[$]);S(u[$],W,h,null,v,x,O,w,C)}y>F?De(u,v,x,!0,!1,I):T(m,h,b,v,x,O,w,C,I)},Ht=(u,m,h,b,v,x,O,w,C)=>{let y=0;const F=m.length;let I=u.length-1,$=F-1;for(;y<=I&&y<=$;){const W=u[y],Y=m[y]=C?gt(m[y]):Ze(m[y]);if(It(W,Y))S(W,Y,h,null,v,x,O,w,C);else break;y++}for(;y<=I&&y<=$;){const W=u[I],Y=m[$]=C?gt(m[$]):Ze(m[$]);if(It(W,Y))S(W,Y,h,null,v,x,O,w,C);else break;I--,$--}if(y>I){if(y<=$){const W=$+1,Y=W<F?m[W].el:b;for(;y<=$;)S(null,m[y]=C?gt(m[y]):Ze(m[y]),h,Y,v,x,O,w,C),y++}}else if(y>$)for(;y<=I;)Re(u[y],v,x,!0),y++;else{const W=y,Y=y,te=new Map;for(y=Y;y<=$;y++){const Pe=m[y]=C?gt(m[y]):Ze(m[y]);Pe.key!=null&&te.set(Pe.key,y)}let J,he=0;const Be=$-Y+1;let Yt=!1,Ci=0;const dn=new Array(Be);for(y=0;y<Be;y++)dn[y]=0;for(y=W;y<=I;y++){const Pe=u[y];if(he>=Be){Re(Pe,v,x,!0);continue}let Xe;if(Pe.key!=null)Xe=te.get(Pe.key);else for(J=Y;J<=$;J++)if(dn[J-Y]===0&&It(Pe,m[J])){Xe=J;break}Xe===void 0?Re(Pe,v,x,!0):(dn[Xe-Y]=y+1,Xe>=Ci?Ci=Xe:Yt=!0,S(Pe,m[Xe],h,null,v,x,O,w,C),he++)}const Ai=Yt?hc(dn):qt;for(J=Ai.length-1,y=Be-1;y>=0;y--){const Pe=Y+y,Xe=m[Pe],Ei=Pe+1<F?m[Pe+1].el:b;dn[y]===0?S(null,Xe,h,Ei,v,x,O,w,C):Yt&&(J<0||y!==Ai[J]?qe(Xe,h,Ei,2):J--)}}},qe=(u,m,h,b,v=null)=>{const{el:x,type:O,transition:w,children:C,shapeFlag:y}=u;if(y&6){qe(u.component.subTree,m,h,b);return}if(y&128){u.suspense.move(m,h,b);return}if(y&64){O.move(u,m,h,fe);return}if(O===xe){r(x,m,h);for(let I=0;I<C.length;I++)qe(C[I],m,h,b);r(u.anchor,m,h);return}if(O===dr){E(u,m,h);return}if(b!==2&&y&1&&w)if(b===0)w.beforeEnter(x),r(x,m,h),Te(()=>w.enter(x),v);else{const{leave:I,delayLeave:$,afterLeave:W}=w,Y=()=>r(x,m,h),te=()=>{I(x,()=>{Y(),W&&W()})};$?$(x,Y,te):te()}else r(x,m,h)},Re=(u,m,h,b=!1,v=!1)=>{const{type:x,props:O,ref:w,children:C,dynamicChildren:y,shapeFlag:F,patchFlag:I,dirs:$}=u;if(w!=null&&ya(w,null,h,u,!0),F&256){m.ctx.deactivate(u);return}const W=F&1&&$,Y=!ur(u);let te;if(Y&&(te=O&&O.onVnodeBeforeUnmount)&&Je(te,m,u),F&6)Jr(u.component,h,b);else{if(F&128){u.suspense.unmount(h,b);return}W&&At(u,null,m,"beforeUnmount"),F&64?u.type.remove(u,m,h,v,fe,b):y&&(x!==xe||I>0&&I&64)?De(y,m,h,!1,!0):(x===xe&&I&384||!v&&F&16)&&De(C,m,h),b&&un(u)}(Y&&(te=O&&O.onVnodeUnmounted)||W)&&Te(()=>{te&&Je(te,m,u),W&&At(u,null,m,"unmounted")},h)},un=u=>{const{type:m,el:h,anchor:b,transition:v}=u;if(m===xe){Xr(h,b);return}if(m===dr){L(u);return}const x=()=>{a(h),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(u.shapeFlag&1&&v&&!v.persisted){const{leave:O,delayLeave:w}=v,C=()=>O(h,x);w?w(u.el,x,C):C()}else x()},Xr=(u,m)=>{let h;for(;u!==m;)h=p(u),a(u),u=h;a(m)},Jr=(u,m,h)=>{const{bum:b,scope:v,update:x,subTree:O,um:w}=u;b&&cr(b),v.stop(),x&&(x.active=!1,Re(O,u,m,h)),w&&Te(w,m),Te(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},De=(u,m,h,b=!1,v=!1,x=0)=>{for(let O=x;O<u.length;O++)Re(u[O],m,h,b,v)},Ut=u=>u.shapeFlag&6?Ut(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),ae=(u,m,h)=>{u==null?m._vnode&&Re(m._vnode,null,null,!0):S(m._vnode||null,u,m,null,null,null,h),$i(),ds(),m._vnode=u},fe={p:S,um:Re,m:qe,r:un,mt:ce,mc:T,pc:X,pbc:G,n:Ut,o:e};let ke,ze;return t&&([ke,ze]=t(fe)),{render:ae,hydrate:ke,createApp:dc(ae,ke)}}function Et({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ms(e,t,n=!1){const r=e.children,a=t.children;if(j(r)&&j(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=gt(a[i]),s.el=o.el),n||Ms(o,s)),s.type===Br&&(s.el=o.el)}}function hc(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const gc=e=>e.__isTeleport,xe=Symbol(void 0),Br=Symbol(void 0),Ge=Symbol(void 0),dr=Symbol(void 0),yn=[];let Ue=null;function ge(e=!1){yn.push(Ue=e?null:[])}function vc(){yn.pop(),Ue=yn[yn.length-1]||null}let Nn=1;function Gi(e){Nn+=e}function Ls(e){return e.dynamicChildren=Nn>0?Ue||qt:null,vc(),Nn>0&&Ue&&Ue.push(e),e}function Se(e,t,n,r,a,i){return Ls(B(e,t,n,r,a,i,!0))}function _a(e,t,n,r,a){return Ls(me(e,t,n,r,a,!0))}function wa(e){return e?e.__v_isVNode===!0:!1}function It(e,t){return e.type===t.type&&e.key===t.key}const Wr="__vInternal",Rs=({key:e})=>e??null,mr=({ref:e,ref_key:t,ref_for:n})=>e!=null?ve(e)||de(e)||U(e)?{i:Ne,r:e,k:t,f:!!n}:e:null;function B(e,t=null,n=null,r=0,a=null,i=e===xe?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Rs(t),ref:t&&mr(t),scopeId:jr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Ne};return s?(ri(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ve(n)?8:16),Nn>0&&!o&&Ue&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ue.push(l),l}const me=bc;function bc(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Zf)&&(e=Ge),wa(e)){const s=wt(e,t,!0);return n&&ri(s,n),Nn>0&&!i&&Ue&&(s.shapeFlag&6?Ue[Ue.indexOf(e)]=s:Ue.push(s)),s.patchFlag|=-2,s}if(Pc(e)&&(e=e.__vccOpts),t){t=yc(t);let{class:s,style:l}=t;s&&!ve(s)&&(t.class=Tr(s)),ee(l)&&(as(l)&&!j(l)&&(l=we({},l)),t.style=za(l))}const o=ve(e)?1:Ff(e)?128:gc(e)?64:ee(e)?4:U(e)?2:0;return B(e,t,n,r,a,o,i,!0)}function yc(e){return e?as(e)||Wr in e?we({},e):e:null}function wt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?wc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Rs(s),ref:t&&t.ref?n&&a?j(a)?a.concat(mr(t)):[a,mr(t)]:mr(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==xe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&wt(e.ssContent),ssFallback:e.ssFallback&&wt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function pr(e=" ",t=0){return me(Br,null,e,t)}function _c(e,t){const n=me(dr,null,e);return n.staticCount=t,n}function xa(e="",t=!1){return t?(ge(),_a(Ge,null,e)):me(Ge,null,e)}function Ze(e){return e==null||typeof e=="boolean"?me(Ge):j(e)?me(xe,null,e.slice()):typeof e=="object"?gt(e):me(Br,null,String(e))}function gt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:wt(e)}function ri(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(j(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ri(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Wr in t)?t._ctx=Ne:a===3&&Ne&&(Ne.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else U(t)?(t={default:t,_ctx:Ne},n=32):(t=String(t),r&64?(n=16,t=[pr(t)]):n=8);e.children=t,e.shapeFlag|=n}function wc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Tr([t.class,r.class]));else if(a==="style")t.style=za([t.style,r.style]);else if(Ir(a)){const i=t[a],o=r[a];o&&i!==o&&!(j(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Je(e,t,n,r=null){je(e,t,7,[n,r])}const xc=Ns();let kc=0;function Sc(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||xc,i={uid:kc++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Yo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Os(r,a),emitsOptions:ps(r,a),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:r.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=If.bind(null,i),e.ce&&e.ce(i),i}let _e=null;const ai=()=>_e||Ne,nn=e=>{_e=e,e.scope.on()},Dt=()=>{_e&&_e.scope.off(),_e=null};function Fs(e){return e.vnode.shapeFlag&4}let Mn=!1;function Cc(e,t=!1){Mn=t;const{props:n,children:r}=e.vnode,a=Fs(e);oc(e,n,a,t),fc(e,r);const i=a?Ac(e,t):void 0;return Mn=!1,i}function Ac(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=tn(new Proxy(e.ctx,ec));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Oc(e):null;nn(e),on();const i=yt(r,e,0,[e.props,a]);if(sn(),Dt(),Wo(i)){if(i.then(Dt,Dt),t)return i.then(o=>{Vi(e,o,t)}).catch(o=>{Fr(o,e,0)});e.asyncDep=i}else Vi(e,i,t)}else $s(e,t)}function Vi(e,t,n){U(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ee(t)&&(e.setupState=ss(t)),$s(e,n)}let qi;function $s(e,t,n){const r=e.type;if(!e.render){if(!t&&qi&&!r.render){const a=r.template||ti(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=we(we({isCustomElement:i,delimiters:s},o),l);r.render=qi(a,f)}}e.render=r.render||Ke}nn(e),on(),tc(e),sn(),Dt()}function Ec(e){return new Proxy(e.attrs,{get(t,n){return Me(e,"get","$attrs"),t[n]}})}function Oc(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Ec(e))},slots:e.slots,emit:e.emit,expose:t}}function Hr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ss(tn(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in bn)return bn[n](e)},has(t,n){return n in t||n in bn}}))}function Tc(e,t=!0){return U(e)?e.displayName||e.name:e.name||t&&e.__name}function Pc(e){return U(e)&&"__vccOpts"in e}const ye=(e,t)=>Cf(e,t,Mn);function js(e,t,n){const r=arguments.length;return r===2?ee(t)&&!j(t)?wa(t)?me(e,null,[t]):me(e,t):me(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&wa(n)&&(n=[n]),me(e,t,n))}const Ic=Symbol(""),Nc=()=>vn(Ic),Mc="3.2.45",Lc="http://www.w3.org/2000/svg",Nt=typeof document<"u"?document:null,Xi=Nt&&Nt.createElement("template"),Rc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?Nt.createElementNS(Lc,e):Nt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>Nt.createTextNode(e),createComment:e=>Nt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Nt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Xi.innerHTML=r?`<svg>${e}</svg>`:e;const s=Xi.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Fc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function $c(e,t,n){const r=e.style,a=ve(n);if(n&&!a){for(const i in n)ka(r,i,n[i]);if(t&&!ve(t))for(const i in t)n[i]==null&&ka(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ji=/\s*!important$/;function ka(e,t,n){if(j(n))n.forEach(r=>ka(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=jc(e,t);Ji.test(n)?e.setProperty(an(r),n.replace(Ji,""),"important"):e[r]=n}}const Zi=["Webkit","Moz","ms"],na={};function jc(e,t){const n=na[t];if(n)return n;let r=nt(t);if(r!=="filter"&&r in e)return na[t]=r;r=Lr(r);for(let a=0;a<Zi.length;a++){const i=Zi[a]+r;if(i in e)return na[t]=i}return t}const Qi="http://www.w3.org/1999/xlink";function Dc(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Qi,t.slice(6,t.length)):e.setAttributeNS(Qi,t,n);else{const i=Ml(t);n==null||i&&!zo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function zc(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=zo(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function Mt(e,t,n,r){e.addEventListener(t,n,r)}function Bc(e,t,n,r){e.removeEventListener(t,n,r)}function Wc(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Hc(t);if(r){const f=i[t]=Kc(r,a);Mt(e,s,f,l)}else o&&(Bc(e,s,o,l),i[t]=void 0)}}const eo=/(?:Once|Passive|Capture)$/;function Hc(e){let t;if(eo.test(e)){t={};let r;for(;r=e.match(eo);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):an(e.slice(2)),t]}let ra=0;const Uc=Promise.resolve(),Yc=()=>ra||(Uc.then(()=>ra=0),ra=Date.now());function Kc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;je(Gc(r,n.value),t,5,[r])};return n.value=e,n.attached=Yc(),n}function Gc(e,t){if(j(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const to=/^on[a-z]/,Vc=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Fc(e,r,a):t==="style"?$c(e,n,r):Ir(t)?Ba(t)||Wc(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):qc(e,t,r,a))?zc(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Dc(e,t,r,a))};function qc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&to.test(t)&&U(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||to.test(t)&&ve(n)?!1:t in e}const mt="transition",pn="animation",Ds={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Xc=we({},Bf.props,Ds),Ot=(e,t=[])=>{j(e)?e.forEach(n=>n(...t)):e&&e(...t)},no=e=>e?j(e)?e.some(t=>t.length>1):e.length>1:!1;function Jc(e){const t={};for(const M in e)M in Ds||(t[M]=e[M]);if(e.css===!1)return t;const{name:n="v",type:r,duration:a,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:f=o,appearToClass:c=s,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,k=Zc(a),S=k&&k[0],D=k&&k[1],{onBeforeEnter:_,onEnter:A,onEnterCancelled:E,onLeave:L,onLeaveCancelled:R,onBeforeAppear:Z=_,onAppear:z=A,onAppearCancelled:T=E}=t,H=(M,Q,ce)=>{ht(M,Q?c:s),ht(M,Q?f:o),ce&&ce()},G=(M,Q)=>{M._isLeaving=!1,ht(M,d),ht(M,g),ht(M,p),Q&&Q()},le=M=>(Q,ce)=>{const ne=M?z:A,pe=()=>H(Q,M,ce);Ot(ne,[Q,pe]),ro(()=>{ht(Q,M?l:i),rt(Q,M?c:s),no(ne)||ao(Q,r,S,pe)})};return we(t,{onBeforeEnter(M){Ot(_,[M]),rt(M,i),rt(M,o)},onBeforeAppear(M){Ot(Z,[M]),rt(M,l),rt(M,f)},onEnter:le(!1),onAppear:le(!0),onLeave(M,Q){M._isLeaving=!0;const ce=()=>G(M,Q);rt(M,d),Bs(),rt(M,p),ro(()=>{M._isLeaving&&(ht(M,d),rt(M,g),no(L)||ao(M,r,D,ce))}),Ot(L,[M,ce])},onEnterCancelled(M){H(M,!1),Ot(E,[M])},onAppearCancelled(M){H(M,!0),Ot(T,[M])},onLeaveCancelled(M){G(M),Ot(R,[M])}})}function Zc(e){if(e==null)return null;if(ee(e))return[aa(e.enter),aa(e.leave)];{const t=aa(e);return[t,t]}}function aa(e){return Qt(e)}function rt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function ht(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function ro(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Qc=0;function ao(e,t,n,r){const a=e._endId=++Qc,i=()=>{a===e._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:s,propCount:l}=zs(e,t);if(!o)return r();const f=o+"end";let c=0;const d=()=>{e.removeEventListener(f,p),i()},p=g=>{g.target===e&&++c>=l&&d()};setTimeout(()=>{c<l&&d()},s+1),e.addEventListener(f,p)}function zs(e,t){const n=window.getComputedStyle(e),r=k=>(n[k]||"").split(", "),a=r(`${mt}Delay`),i=r(`${mt}Duration`),o=io(a,i),s=r(`${pn}Delay`),l=r(`${pn}Duration`),f=io(s,l);let c=null,d=0,p=0;t===mt?o>0&&(c=mt,d=o,p=i.length):t===pn?f>0&&(c=pn,d=f,p=l.length):(d=Math.max(o,f),c=d>0?o>f?mt:pn:null,p=c?c===mt?i.length:l.length:0);const g=c===mt&&/\b(transform|all)(,|$)/.test(r(`${mt}Property`).toString());return{type:c,timeout:d,propCount:p,hasTransform:g}}function io(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>oo(n)+oo(e[r])))}function oo(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Bs(){return document.body.offsetHeight}const Ws=new WeakMap,Hs=new WeakMap,eu={name:"TransitionGroup",props:we({},Xc,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=ai(),r=ys();let a,i;return xs(()=>{if(!a.length)return;const o=e.moveClass||`${e.name||"v"}-move`;if(!au(a[0].el,n.vnode.el,o))return;a.forEach(tu),a.forEach(nu);const s=a.filter(ru);Bs(),s.forEach(l=>{const f=l.el,c=f.style;rt(f,o),c.transform=c.webkitTransform=c.transitionDuration="";const d=f._moveCb=p=>{p&&p.target!==f||(!p||/transform$/.test(p.propertyName))&&(f.removeEventListener("transitionend",d),f._moveCb=null,ht(f,o))};f.addEventListener("transitionend",d)})}),()=>{const o=V(e),s=Jc(o);let l=o.tag||xe;a=i,i=t.default?Qa(t.default()):[];for(let f=0;f<i.length;f++){const c=i[f];c.key!=null&&In(c,Pn(c,s,r,n))}if(a)for(let f=0;f<a.length;f++){const c=a[f];In(c,Pn(c,s,r,n)),Ws.set(c,c.el.getBoundingClientRect())}return me(l,null,i)}}},so=eu;function tu(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function nu(e){Hs.set(e,e.el.getBoundingClientRect())}function ru(e){const t=Ws.get(e),n=Hs.get(e),r=t.left-n.left,a=t.top-n.top;if(r||a){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${a}px)`,i.transitionDuration="0s",e}}function au(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach(o=>{o.split(/\s+/).forEach(s=>s&&r.classList.remove(s))}),n.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const a=t.nodeType===1?t:t.parentNode;a.appendChild(r);const{hasTransform:i}=zs(r);return a.removeChild(r),i}const xr=e=>{const t=e.props["onUpdate:modelValue"]||!1;return j(t)?n=>cr(t,n):t};function iu(e){e.target.composing=!0}function lo(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Qn={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=xr(a);const i=r||a.props&&a.props.type==="number";Mt(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=Qt(s)),e._assign(s)}),n&&Mt(e,"change",()=>{e.value=e.value.trim()}),t||(Mt(e,"compositionstart",iu),Mt(e,"compositionend",lo),Mt(e,"change",lo))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=xr(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&Qt(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},ou={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const a=Nr(t);Mt(e,"change",()=>{const i=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?Qt(kr(o)):kr(o));e._assign(e.multiple?a?new Set(i):i:i[0])}),e._assign=xr(r)},mounted(e,{value:t}){fo(e,t)},beforeUpdate(e,t,n){e._assign=xr(n)},updated(e,{value:t}){fo(e,t)}};function fo(e,t){const n=e.multiple;if(!(n&&!j(t)&&!Nr(t))){for(let r=0,a=e.options.length;r<a;r++){const i=e.options[r],o=kr(i);if(n)j(t)?i.selected=Rl(t,o)>-1:i.selected=t.has(o);else if(Pr(kr(i),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function kr(e){return"_value"in e?e._value:e.value}const su=["ctrl","shift","alt","meta"],lu={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>su.some(n=>e[`${n}Key`]&&!t.includes(n))},fu=(e,t)=>(n,...r)=>{for(let a=0;a<t.length;a++){const i=lu[t[a]];if(i&&i(n,t))return}return e(n,...r)},cu=we({patchProp:Vc},Rc);let co;function uu(){return co||(co=mc(cu))}const Us=(...e)=>{const t=uu().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=du(r);if(!a)return;const i=t._component;!U(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function du(e){return ve(e)?document.querySelector(e):e}var mu=!1;/*!
  * pinia v2.0.28
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Ys;const Ur=e=>Ys=e,Ks=Symbol();function Sa(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var _n;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(_n||(_n={}));function Gs(){const e=Ko(!0),t=e.run(()=>$e({}));let n=[],r=[];const a=tn({install(i){Ur(a),a._a=i,i.provide(Ks,a),i.config.globalProperties.$pinia=a,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!mu?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return a}const Vs=()=>{};function uo(e,t,n,r=Vs){e.push(t);const a=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&Ul()&&Yl(a),a}function Kt(e,...t){e.slice().forEach(n=>{n(...t)})}function Ca(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],a=e[n];Sa(a)&&Sa(r)&&e.hasOwnProperty(n)&&!de(r)&&!it(r)?e[n]=Ca(a,r):e[n]=r}return e}const pu=Symbol();function hu(e){return!Sa(e)||!e.hasOwnProperty(pu)}const{assign:vt}=Object;function gu(e){return!!(de(e)&&e.effect)}function vu(e,t,n,r){const{state:a,actions:i,getters:o}=t,s=n.state.value[e];let l;function f(){s||(n.state.value[e]=a?a():{});const c=xf(n.state.value[e]);return vt(c,i,Object.keys(o||{}).reduce((d,p)=>(d[p]=tn(ye(()=>{Ur(n);const g=n._s.get(e);return o[p].call(g,g)})),d),{}))}return l=qs(e,f,t,n,r,!0),l.$reset=function(){const d=a?a():{};this.$patch(p=>{vt(p,d)})},l}function qs(e,t,n={},r,a,i){let o;const s=vt({actions:{}},n),l={deep:!0};let f,c,d=tn([]),p=tn([]),g;const k=r.state.value[e];!i&&!k&&(r.state.value[e]={}),$e({});let S;function D(z){let T;f=c=!1,typeof z=="function"?(z(r.state.value[e]),T={type:_n.patchFunction,storeId:e,events:g}):(Ca(r.state.value[e],z),T={type:_n.patchObject,payload:z,storeId:e,events:g});const H=S=Symbol();On().then(()=>{S===H&&(f=!0)}),c=!0,Kt(d,T,r.state.value[e])}const _=Vs;function A(){o.stop(),d=[],p=[],r._s.delete(e)}function E(z,T){return function(){Ur(r);const H=Array.from(arguments),G=[],le=[];function M(ne){G.push(ne)}function Q(ne){le.push(ne)}Kt(p,{args:H,name:z,store:R,after:M,onError:Q});let ce;try{ce=T.apply(this&&this.$id===e?this:R,H)}catch(ne){throw Kt(le,ne),ne}return ce instanceof Promise?ce.then(ne=>(Kt(G,ne),ne)).catch(ne=>(Kt(le,ne),Promise.reject(ne))):(Kt(G,ce),ce)}}const L={_p:r,$id:e,$onAction:uo.bind(null,p),$patch:D,$reset:_,$subscribe(z,T={}){const H=uo(d,z,T.detached,()=>G()),G=o.run(()=>jt(()=>r.state.value[e],le=>{(T.flush==="sync"?c:f)&&z({storeId:e,type:_n.direct,events:g},le)},vt({},l,T)));return H},$dispose:A},R=ln(L);r._s.set(e,R);const Z=r._e.run(()=>(o=Ko(),o.run(()=>t())));for(const z in Z){const T=Z[z];if(de(T)&&!gu(T)||it(T))i||(k&&hu(T)&&(de(T)?T.value=k[z]:Ca(T,k[z])),r.state.value[e][z]=T);else if(typeof T=="function"){const H=E(z,T);Z[z]=H,s.actions[z]=T}}return vt(R,Z),vt(V(R),Z),Object.defineProperty(R,"$state",{get:()=>r.state.value[e],set:z=>{D(T=>{vt(T,z)})}}),r._p.forEach(z=>{vt(R,o.run(()=>z({store:R,app:r._a,pinia:r,options:s})))}),k&&i&&n.hydrate&&n.hydrate(R.$state,k),f=!0,c=!0,R}function Ct(e,t,n){let r,a;const i=typeof t=="function";typeof e=="string"?(r=e,a=i?n:t):(a=e,r=e.id);function o(s,l){const f=ai();return s=s||f&&vn(Ks,null),s&&Ur(s),s=Ys,s._s.has(r)||(i?qs(r,t,a,s):vu(r,a,s)),s._s.get(r)}return o.$id=r,o}function Ee(e){{e=V(e);const t={};for(const n in e){const r=e[n];(de(r)||it(r))&&(t[n]=ls(e,n))}return t}}const ii=Ct("currentGuessStore",()=>{const e=$e([]),t=ye(()=>e.value.map(i=>i.letter).join(""));function n(i,o){e.value.push({letter:i,id:o})}function r(i){const o=e.value.findIndex(s=>s.id===i);o>-1&&e.value.splice(o,1)}function a(){e.value=[]}return{currentGuess:e,addLetterToGuess:n,removeLetterFromGuess:r,clearGuess:a,guessStringOnly:t}});async function Xs(e){return await(await fetch("http://127.0.0.1:5000/api/random_word",{method:"POST",headers:{Accept:"application/json","Access-Control-Allow-Origin":"*","Content-type":"application/json"},body:JSON.stringify(e)})).json()}const fn=Ct("curRandomWord",()=>{const e=ln({shuffled_word:[],sub_words:[],word:""}),t=ye(()=>Boolean(e.word)),n=ye(()=>Array.from(new Set(e.word))),r=ye(()=>{const d=e.word.length;return e.sub_words.filter(g=>g.sub_word.length===d).some(g=>g.has_been_guessed)});function a(d){return e.sub_words.findIndex(p=>p.sub_word===d)}function i(d){return e.sub_words.some(p=>p.sub_word===d)}function o(d,p){e.sub_words.find(g=>g.sub_word===d).has_been_guessed=p}function s(){e.shuffled_word.forEach(d=>d.letter_transferred=!1)}async function l(d){const p=await Xs(d),{shuffled_word:g,sub_words:k,word:S}=p;e.shuffled_word=g,e.sub_words=k,e.word=S}function f(){e.shuffled_word=[],e.sub_words=[],e.word=""}function c(){e.sub_words.forEach(d=>d.has_been_guessed=!0)}return{currentRandomWord:e,unTransferLetters:s,renewCurrentRandomWordStore:l,clearCurrentRandomWordStore:f,validLetters:n,getGuessIdx:a,isGuessInSubwords:i,updateSubwordGuessedState:o,longestWordHasBeenGuessed:r,revealYourSecrets:c,backendDataFetched:t}});const Wt=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},bu={class:"letter-upper-row letter"},yu=["onClick"],_u={class:"letter-lower-row letter"},wu=["onClick"],xu={key:0,class:"fetching"},ku={__name:"CurrentWord",setup(e){const t=fn(),{currentRandomWord:n}=Ee(t),r=ii(),{currentGuess:a}=Ee(r),{addLetterToGuess:i,removeLetterFromGuess:o}=r;function s(d){const p=n.value.shuffled_word.find(g=>g.id===d);p.letter_transferred=!p.letter_transferred}function l(d,p){n.value.shuffled_word.find(k=>k.id===p).letter_transferred?i(d,p):o(p)}function f(d,p){s(p),l(d,p)}function c(d){return a.value.findIndex(p=>p.id===d)}return(d,p)=>(ge(),Se(xe,null,[B("div",bu,[me(so,{name:"circles"},{default:pa(()=>[(ge(!0),Se(xe,null,_r(K(n).shuffled_word.filter(g=>g.letter_transferred).sort((g,k)=>c(g.id)-c(k.id)),({letter:g,id:k})=>(ge(),Se("div",{key:k,class:"cell letter-cell",onClick:S=>f(g,k)},et(g),9,yu))),128))]),_:1})]),B("div",_u,[me(so,{name:"circles"},{default:pa(()=>[(ge(!0),Se(xe,null,_r(K(n).shuffled_word.filter(g=>!g.letter_transferred),({letter:g,id:k})=>(ge(),Se("div",{key:k,class:"cell letter-cell",onClick:S=>f(g,k)},et(g),9,wu))),128)),K(n).word.length<=0?(ge(),Se("div",xu,"...")):xa("",!0)]),_:1})])],64))}},Su=Wt(ku,[["__scopeId","data-v-1e9926d6"]]),Wn=Ct("settings",()=>({gameSettings:ln({min_chars:6,max_chars:12,difficulty:"medium",max_subwords:20,timer:120})})),oi=Ct("gameState",()=>{const e=$e(!1),t=$e(!1);function n(a){e.value=a}function r(a){t.value=a}return{winState:e,loseState:t,setWinState:n,setLoseState:r}}),si=Ct("roundTracker",()=>{const e=$e(1);function t(){e.value++}function n(){e.value=1}return{gameRound:e,moveToNextRound:t,resetRound:n}}),li=Ct("gameScore",()=>{const e=$e(0);function t(r){const a=r.length;a<=2?e.value+=a*50:a>=3&&a<6?e.value+=a*300:a>=6&&a<9?e.value+=a*800:a>=9&&(e.value+=a*1500)}function n(){e.value=0}return{gameScore:e,updateScore:t,resetScore:n}}),Yr=Ct("useTimer",()=>{const e=$e(120),t=ye(()=>{const o=Math.floor(e.value/60);let s=(e.value-o*60).toString();return s=s.length>1?s:`0${s}`,`0${o}: ${s}`});let n;function r(){n=setInterval(()=>{if(e.value<=0){clearInterval(n);return}e.value--},1e3)}function a(){clearInterval(n)}function i(o){e.value=o}return{secondsCountdown:e,renewCountdownSecondsLength:i,renewTimer:r,stopTimer:a,countdownString:t}});async function Ln(){await On();let e,t;Bn(()=>{e=Gs(),t=Us(Js),t.use(e)});const n=fn(),{renewCurrentRandomWordStore:r,clearCurrentRandomWordStore:a}=n,i=ii(),{clearGuess:o}=i,s=oi(),{setWinState:l,setLoseState:f}=s,c=si(),{resetRound:d}=c,p=li(),{resetScore:g}=p,k=Yr(),{renewCountdownSecondsLength:S,renewTimer:D,stopTimer:_}=k,A=Wn(),{gameSettings:E}=A;_();const L=window.document.querySelector(".next-round-btn"),R=window.document.querySelector(".reset-game-btn");L.disabled=!0,L.blur(),a(),await r(E),o(),l(!1),f(!1),d(),g(),R.blur()}function Cu(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}const Au={class:"controls"},Eu={__name:"GameControls",setup(e){const t=fn(),{currentRandomWord:n,validLetters:r,longestWordHasBeenGuessed:a}=Ee(t),{unTransferLetters:i,renewCurrentRandomWordStore:o,isGuessInSubwords:s,updateSubwordGuessedState:l,revealYourSecrets:f}=t,c=ii(),{currentGuess:d,guessStringOnly:p}=Ee(c),{clearGuess:g,addLetterToGuess:k}=c,S=oi(),{setWinState:D,setLoseState:_}=S,{loseState:A}=Ee(S),E=li(),{updateScore:L,resetScore:R}=E,Z=si(),{moveToNextRound:z,resetRound:T}=Z,H=Yr(),{renewCountdownSecondsLength:G,renewTimer:le,stopTimer:M}=H,Q=Wn(),{gameSettings:ce}=Q,ne=$e(null),pe=$e(null),re=$e(null);function X(){const ae=n.value.shuffled_word,fe=Array.from(ae),ke=Cu(fe);t.$patch(ze=>{ze.currentRandomWord.shuffled_word=ke})}async function Ve(){await On(),i(),g()}function Ht(){R(),T(),f(),_(!0),M(),ne.value.disabled=!0,ne.value.blur()}function qe(){s(p.value)&&(l(p.value,!0),L(p.value),a.value&&(D(!0),ne.value.disabled=!1))}async function Re(){g(),D(!1),M(),ne.value.disabled=!0,ne.value.blur(),f(),await un(3e3),await o(ce),G(ce.timer),le(),z()}function un(ae){return new Promise(fe=>setTimeout(fe,ae))}Bn(()=>{window.addEventListener("keydown",ae=>{Xr(ae)})});async function Xr(ae){await On(),!ae.repeat&&(A.value||(ae.key==="Backspace"?(Ut(),await un(200)):ae.key===" "?X():ae.key==="Enter"?qe():ae.key==="Escape"?Ve():r.value.includes(ae.key)&&(Jr(ae.key),De(ae.key)),pe.value.blur(),re.value.blur()))}function Jr(ae){let fe=n.value.shuffled_word.filter(ze=>!ze.letter_transferred).find(ze=>ae===ze.letter);if(!fe)return;d.value.some(ze=>ze.id===fe.id)||k(fe.letter,fe.id)}function De(ae){let fe=n.value.shuffled_word.filter(ke=>!ke.letter_transferred).find(ke=>ae===ke.letter);fe&&(fe.letter_transferred=!0)}function Ut(){if(d.value.length<=0)return;const ae=d.value[d.value.length-1],fe=n.value.shuffled_word.filter(ke=>ke.letter_transferred).find(ke=>ae.id===ke.id);fe&&(d.value.pop(),fe.letter_transferred=!1)}return(ae,fe)=>(ge(),Se("div",Au,[B("button",{class:"btn",onClick:X},"Twist"),B("button",{class:"btn",onClick:Ht,ref_key:"giveUpBtn",ref:re},"Give Up",512),B("button",{class:"btn",onClick:Ve},"Clear"),B("button",{class:"btn",onClick:qe},"Enter"),B("button",{class:"btn reset-game-btn",onClick:fe[0]||(fe[0]=(...ke)=>K(Ln)&&K(Ln)(...ke)),ref_key:"resetGameBtn",ref:pe}," Reset Game ",512),B("button",{class:"btn next-round-btn",ref_key:"nextRoundBtn",ref:ne,onClick:Re,disabled:""}," Next Round ",512)]))}},Ou=Wt(Eu,[["__scopeId","data-v-0afe00f6"]]),fi=Ct("settingsModal",()=>{const e=$e(!1);function t(){e.value=!0}function n(){e.value=!1}return{isSettingsModalVisible:e,showSettingsModal:t,hideSettingsModal:n}});const Tu={class:"header"},Pu={class:"game-info"},Iu={class:"current-info"},Nu={class:"game-info"},Mu={class:"current-info"},Lu={class:"game-info"},Ru={class:"current-info"},Fu={__name:"Header",setup(e){const{showSettingsModal:t}=fi(),n=li(),{gameScore:r}=Ee(n),a=si(),{gameRound:i}=Ee(a),o=fn(),{backendDataFetched:s}=Ee(o),l=Yr(),{countdownString:f}=Ee(l),{renewCountdownSecondsLength:c,renewTimer:d,stopTimer:p}=l,g=Wn(),{gameSettings:k}=g;return jt(()=>s.value,()=>{s.value===!0&&(p(),c(k.timer),d())}),(S,D)=>{const _=Jf("font-awesome-icon");return ge(),Se("nav",Tu,[B("ul",null,[B("span",Pu,[pr("Score: "),B("li",Iu,et(K(r)),1)]),B("span",Nu,[pr("Time: "),B("li",Mu,et(K(f)),1)]),B("span",Lu,[pr("Round: "),B("li",Ru,et(K(i)),1)]),B("li",{onClick:D[0]||(D[0]=(...A)=>K(t)&&K(t)(...A)),class:"icons"},[me(_,{icon:"fa-solid fa-gear"})])])])}}},$u=Wt(Fu,[["__scopeId","data-v-ca3d4315"]]);const ju=e=>(hs("data-v-8f603635"),e=e(),gs(),e),Du={class:"modal"},zu={class:"modal-card"},Bu=ju(()=>B("span",{class:"you-lose-msg"},"Game Over",-1)),Wu={__name:"GameLostModal",setup(e){return(t,n)=>(ge(),Se("div",Du,[B("div",zu,[Bu,B("button",{onClick:n[0]||(n[0]=(...r)=>K(Ln)&&K(Ln)(...r))},"Restart")])]))}},Hu=Wt(Wu,[["__scopeId","data-v-8f603635"]]);const Hn=e=>(hs("data-v-6c18912e"),e=e(),gs(),e),Uu={class:"modal-card"},Yu={class:"setting"},Ku=Hn(()=>B("label",{for:"min-chars"},"Min Number of Characters",-1)),Gu={class:"label-val"},Vu={class:"setting"},qu=Hn(()=>B("label",{for:"max-chars"},"Max Number of Characters",-1)),Xu={class:"label-val"},Ju={class:"setting"},Zu=Hn(()=>B("label",{for:"difficulty"},"Difficulty",-1)),Qu=_c('<option selected data-v-6c18912e>Medium</option><option value="easy" data-v-6c18912e>Easy</option><option value="medium" data-v-6c18912e>Medium</option><option value="hard" data-v-6c18912e>Hard</option><option value="very_hard" data-v-6c18912e>Very Hard</option>',5),ed=[Qu],td={class:"setting"},nd=Hn(()=>B("label",{for:"max-subwords"},"Max Number of Subwords",-1)),rd={class:"label-val"},ad={class:"setting"},id=Hn(()=>B("label",{for:"timer"},"Alloted Time",-1)),od={class:"label-val"},sd={__name:"SettingsModal",setup(e){const t=Wn(),{gameSettings:n}=Ee(t),{hideSettingsModal:r}=fi();return(a,i)=>(ge(),Se("div",{onClick:i[7]||(i[7]=fu((...o)=>K(r)&&K(r)(...o),["self"])),class:"modal"},[B("div",Uu,[B("div",Yu,[Ku,mn(B("input",{type:"range","onUpdate:modelValue":i[0]||(i[0]=o=>K(n).min_chars=o),min:"6",max:"10",class:"range",id:"min-chars"},null,512),[[Qn,K(n).min_chars,void 0,{number:!0}]]),B("span",Gu,et(K(n).min_chars),1)]),B("div",Vu,[qu,mn(B("input",{type:"range","onUpdate:modelValue":i[1]||(i[1]=o=>K(n).max_chars=o),min:"9",max:"13",class:"range",id:"max-chars"},null,512),[[Qn,K(n).max_chars,void 0,{number:!0}]]),B("span",Xu,et(K(n).max_chars),1)]),B("div",Ju,[Zu,mn(B("select",{id:"difficulty",class:"bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg block w-40 p-1.5 ml-auto","onUpdate:modelValue":i[2]||(i[2]=o=>K(n).difficulty=o)},ed,512),[[ou,K(n).difficulty]])]),B("div",td,[nd,mn(B("input",{type:"range","onUpdate:modelValue":i[3]||(i[3]=o=>K(n).max_subwords=o),min:"10",max:"30",class:"range",id:"max-subwords"},null,512),[[Qn,K(n).max_subwords,void 0,{number:!0}]]),B("span",rd,et(K(n).max_subwords),1)]),B("div",ad,[id,mn(B("input",{type:"range","onUpdate:modelValue":i[4]||(i[4]=o=>K(n).timer=o),min:"10",max:"300",class:"range",id:"timer"},null,512),[[Qn,K(n).timer,void 0,{number:!0}]]),B("span",od,et(K(n).timer),1)]),B("button",{class:"save",onClick:i[5]||(i[5]=(...o)=>K(r)&&K(r)(...o))},"Save but don't Restart"),B("button",{class:"restart",onClick:i[6]||(i[6]=o=>(K(Ln)(),K(r)()))}," Save and Restart ")])]))}},ld=Wt(sd,[["__scopeId","data-v-6c18912e"]]);const fd={class:"card"},cd={class:"word-columns"},ud={__name:"SubWords",setup(e){const t=Wn(),{gameSettings:n}=Ee(t),r=fn(),{currentRandomWord:a}=Ee(r);return Bn(async()=>{const i=await Xs(n.value);r.$patch({currentRandomWord:{shuffled_word:i.shuffled_word,sub_words:i.sub_words,word:i.word}})}),(i,o)=>(ge(),Se("div",fd,[B("div",cd,[(ge(!0),Se(xe,null,_r(K(a).sub_words,({sub_word:s,id:l,has_been_guessed:f})=>(ge(),Se("div",{class:"word",key:l},[(ge(!0),Se(xe,null,_r(s,c=>(ge(),Se("div",{class:Tr(["letter-cell cell",{"has-been-guessed":f}])},et(c),3))),256))]))),128))])]))}},dd=Wt(ud,[["__scopeId","data-v-e41d8f92"]]);const md={__name:"App",setup(e){const t=fi(),{isSettingsModalVisible:n}=Ee(t),r=oi(),{loseState:a,winState:i}=Ee(r),{setLoseState:o}=r,s=Yr(),{secondsCountdown:l}=Ee(s),f=fn(),{revealYourSecrets:c}=f;return jt(()=>l.value,()=>{l.value<=0&&!i.value?(o(!0),c()):l.value<=0&&i.value&&c()}),(d,p)=>(ge(),Se(xe,null,[K(n)?(ge(),_a(ld,{key:0})):xa("",!0),K(a)?(ge(),_a(Hu,{key:1})):xa("",!0),me($u),B("main",null,[me(dd),me(Su),me(Ou)])],64))}},Js=Wt(md,[["__scopeId","data-v-dd4bc9fc"]]);function mo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?mo(Object(n),!0).forEach(function(r){be(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):mo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Sr(e){return Sr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Sr(e)}function pd(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function po(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function hd(e,t,n){return t&&po(e.prototype,t),n&&po(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function be(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ci(e,t){return vd(e)||yd(e,t)||Zs(e,t)||wd()}function Un(e){return gd(e)||bd(e)||Zs(e)||_d()}function gd(e){if(Array.isArray(e))return Aa(e)}function vd(e){if(Array.isArray(e))return e}function bd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function yd(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Zs(e,t){if(e){if(typeof e=="string")return Aa(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Aa(e,t)}}function Aa(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _d(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ho=function(){},ui={},Qs={},el=null,tl={mark:ho,measure:ho};try{typeof window<"u"&&(ui=window),typeof document<"u"&&(Qs=document),typeof MutationObserver<"u"&&(el=MutationObserver),typeof performance<"u"&&(tl=performance)}catch{}var xd=ui.navigator||{},go=xd.userAgent,vo=go===void 0?"":go,xt=ui,se=Qs,bo=el,er=tl;xt.document;var ut=!!se.documentElement&&!!se.head&&typeof se.addEventListener=="function"&&typeof se.createElement=="function",nl=~vo.indexOf("MSIE")||~vo.indexOf("Trident/"),tr,nr,rr,ar,ir,st="___FONT_AWESOME___",Ea=16,rl="fa",al="svg-inline--fa",zt="data-fa-i2svg",Oa="data-fa-pseudo-element",kd="data-fa-pseudo-element-pending",di="data-prefix",mi="data-icon",yo="fontawesome-i2svg",Sd="async",Cd=["HTML","HEAD","STYLE","SCRIPT"],il=function(){try{return!0}catch{return!1}}(),oe="classic",ue="sharp",pi=[oe,ue];function Yn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[oe]}})}var Rn=Yn((tr={},be(tr,oe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),be(tr,ue,{fa:"solid",fass:"solid","fa-solid":"solid"}),tr)),Fn=Yn((nr={},be(nr,oe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),be(nr,ue,{solid:"fass"}),nr)),$n=Yn((rr={},be(rr,oe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),be(rr,ue,{fass:"fa-solid"}),rr)),Ad=Yn((ar={},be(ar,oe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),be(ar,ue,{"fa-solid":"fass"}),ar)),Ed=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,ol="fa-layers-text",Od=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Td=Yn((ir={},be(ir,oe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),be(ir,ue,{900:"fass"}),ir)),sl=[1,2,3,4,5,6,7,8,9,10],Pd=sl.concat([11,12,13,14,15,16,17,18,19,20]),Id=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Rt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},jn=new Set;Object.keys(Fn[oe]).map(jn.add.bind(jn));Object.keys(Fn[ue]).map(jn.add.bind(jn));var Nd=[].concat(pi,Un(jn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Rt.GROUP,Rt.SWAP_OPACITY,Rt.PRIMARY,Rt.SECONDARY]).concat(sl.map(function(e){return"".concat(e,"x")})).concat(Pd.map(function(e){return"w-".concat(e)})),wn=xt.FontAwesomeConfig||{};function Md(e){var t=se.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ld(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(se&&typeof se.querySelector=="function"){var Rd=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Rd.forEach(function(e){var t=ci(e,2),n=t[0],r=t[1],a=Ld(Md(n));a!=null&&(wn[r]=a)})}var ll={styleDefault:"solid",familyDefault:"classic",cssPrefix:rl,replacementClass:al,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};wn.familyPrefix&&(wn.cssPrefix=wn.familyPrefix);var rn=P(P({},ll),wn);rn.autoReplaceSvg||(rn.observeMutations=!1);var N={};Object.keys(ll).forEach(function(e){Object.defineProperty(N,e,{enumerable:!0,set:function(n){rn[e]=n,xn.forEach(function(r){return r(N)})},get:function(){return rn[e]}})});Object.defineProperty(N,"familyPrefix",{enumerable:!0,set:function(t){rn.cssPrefix=t,xn.forEach(function(n){return n(N)})},get:function(){return rn.cssPrefix}});xt.FontAwesomeConfig=N;var xn=[];function Fd(e){return xn.push(e),function(){xn.splice(xn.indexOf(e),1)}}var pt=Ea,tt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function $d(e){if(!(!e||!ut)){var t=se.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=se.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return se.head.insertBefore(t,r),e}}var jd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Dn(){for(var e=12,t="";e-- >0;)t+=jd[Math.random()*62|0];return t}function cn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function hi(e){return e.classList?cn(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function fl(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Dd(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(fl(e[n]),'" ')},"").trim()}function Kr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function gi(e){return e.size!==tt.size||e.x!==tt.x||e.y!==tt.y||e.rotate!==tt.rotate||e.flipX||e.flipY}function zd(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function Bd(e){var t=e.transform,n=e.width,r=n===void 0?Ea:n,a=e.height,i=a===void 0?Ea:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&nl?l+="translate(".concat(t.x/pt-r/2,"em, ").concat(t.y/pt-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/pt,"em), calc(-50% + ").concat(t.y/pt,"em)) "):l+="translate(".concat(t.x/pt,"em, ").concat(t.y/pt,"em) "),l+="scale(".concat(t.size/pt*(t.flipX?-1:1),", ").concat(t.size/pt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Wd=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function cl(){var e=rl,t=al,n=N.cssPrefix,r=N.replacementClass,a=Wd;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var _o=!1;function ia(){N.autoAddCss&&!_o&&($d(cl()),_o=!0)}var Hd={mixout:function(){return{dom:{css:cl,insertCss:ia}}},hooks:function(){return{beforeDOMElementCreation:function(){ia()},beforeI2svg:function(){ia()}}}},lt=xt||{};lt[st]||(lt[st]={});lt[st].styles||(lt[st].styles={});lt[st].hooks||(lt[st].hooks={});lt[st].shims||(lt[st].shims=[]);var Ye=lt[st],ul=[],Ud=function e(){se.removeEventListener("DOMContentLoaded",e),Cr=1,ul.map(function(t){return t()})},Cr=!1;ut&&(Cr=(se.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(se.readyState),Cr||se.addEventListener("DOMContentLoaded",Ud));function Yd(e){ut&&(Cr?setTimeout(e,0):ul.push(e))}function Kn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?fl(e):"<".concat(t," ").concat(Dd(r),">").concat(i.map(Kn).join(""),"</").concat(t,">")}function wo(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Kd=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},oa=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Kd(n,a):n,l,f,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function Gd(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Ta(e){var t=Gd(e);return t.length===1?t[0].toString(16):null}function Vd(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function xo(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Pa(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=xo(t);typeof Ye.hooks.addPack=="function"&&!a?Ye.hooks.addPack(e,xo(t)):Ye.styles[e]=P(P({},Ye.styles[e]||{}),i),e==="fas"&&Pa("fa",t)}var or,sr,lr,Gt=Ye.styles,qd=Ye.shims,Xd=(or={},be(or,oe,Object.values($n[oe])),be(or,ue,Object.values($n[ue])),or),vi=null,dl={},ml={},pl={},hl={},gl={},Jd=(sr={},be(sr,oe,Object.keys(Rn[oe])),be(sr,ue,Object.keys(Rn[ue])),sr);function Zd(e){return~Nd.indexOf(e)}function Qd(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Zd(a)?a:null}var vl=function(){var t=function(i){return oa(Gt,function(o,s,l){return o[l]=oa(s,i,{}),o},{})};dl=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),ml=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),gl=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Gt||N.autoFetchSvg,r=oa(qd,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});pl=r.names,hl=r.unicodes,vi=Gr(N.styleDefault,{family:N.familyDefault})};Fd(function(e){vi=Gr(e.styleDefault,{family:N.familyDefault})});vl();function bi(e,t){return(dl[e]||{})[t]}function em(e,t){return(ml[e]||{})[t]}function Ft(e,t){return(gl[e]||{})[t]}function bl(e){return pl[e]||{prefix:null,iconName:null}}function tm(e){var t=hl[e],n=bi("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function kt(){return vi}var yi=function(){return{prefix:null,iconName:null,rest:[]}};function Gr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?oe:n,a=Rn[r][e],i=Fn[r][e]||Fn[r][a],o=e in Ye.styles?e:null;return i||o||null}var ko=(lr={},be(lr,oe,Object.keys($n[oe])),be(lr,ue,Object.keys($n[ue])),lr);function Vr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},be(t,oe,"".concat(N.cssPrefix,"-").concat(oe)),be(t,ue,"".concat(N.cssPrefix,"-").concat(ue)),t),o=null,s=oe;(e.includes(i[oe])||e.some(function(f){return ko[oe].includes(f)}))&&(s=oe),(e.includes(i[ue])||e.some(function(f){return ko[ue].includes(f)}))&&(s=ue);var l=e.reduce(function(f,c){var d=Qd(N.cssPrefix,c);if(Gt[c]?(c=Xd[s].includes(c)?Ad[s][c]:c,o=c,f.prefix=c):Jd[s].indexOf(c)>-1?(o=c,f.prefix=Gr(c,{family:s})):d?f.iconName=d:c!==N.replacementClass&&c!==i[oe]&&c!==i[ue]&&f.rest.push(c),!a&&f.prefix&&f.iconName){var p=o==="fa"?bl(f.iconName):{},g=Ft(f.prefix,f.iconName);p.prefix&&(o=null),f.iconName=p.iconName||g||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!Gt.far&&Gt.fas&&!N.autoFetchSvg&&(f.prefix="fas")}return f},yi());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ue&&(Gt.fass||N.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ft(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=kt()||"fas"),l}var nm=function(){function e(){pd(this,e),this.definitions={}}return hd(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=P(P({},n.definitions[s]||{}),o[s]),Pa(s,o[s]);var l=$n[oe][s];l&&Pa(l,o[s]),vl()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[s][d]=f)}),n[s][l]=f}),n}}]),e}(),So=[],Vt={},Zt={},rm=Object.keys(Zt);function am(e,t){var n=t.mixoutsTo;return So=e,Vt={},Object.keys(Zt).forEach(function(r){rm.indexOf(r)===-1&&delete Zt[r]}),So.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Sr(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Vt[o]||(Vt[o]=[]),Vt[o].push(i[o])})}r.provides&&r.provides(Zt)}),n}function Ia(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Vt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Bt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Vt[e]||[];a.forEach(function(i){i.apply(null,n)})}function ft(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Zt[e]?Zt[e].apply(null,t):void 0}function Na(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||kt();if(t)return t=Ft(n,t)||t,wo(yl.definitions,n,t)||wo(Ye.styles,n,t)}var yl=new nm,im=function(){N.autoReplaceSvg=!1,N.observeMutations=!1,Bt("noAuto")},om={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ut?(Bt("beforeI2svg",t),ft("pseudoElements2svg",t),ft("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,Yd(function(){lm({autoReplaceSvgRoot:n}),Bt("watch",t)})}},sm={icon:function(t){if(t===null)return null;if(Sr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ft(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Gr(t[0]);return{prefix:r,iconName:Ft(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(N.cssPrefix,"-"))>-1||t.match(Ed))){var a=Vr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||kt(),iconName:Ft(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=kt();return{prefix:i,iconName:Ft(i,t)||t}}}},Le={noAuto:im,config:N,dom:om,parse:sm,library:yl,findIconDefinition:Na,toHtml:Kn},lm=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?se:n;(Object.keys(Ye.styles).length>0||N.autoFetchSvg)&&ut&&N.autoReplaceSvg&&Le.dom.i2svg({node:r})};function qr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Kn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(ut){var r=se.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function fm(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(gi(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=Kr(P(P({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function cm(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(N.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:P(P({},a),{},{id:o}),children:r}]}]}function _i(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,d=e.extra,p=e.watchable,g=p===void 0?!1:p,k=r.found?r:n,S=k.width,D=k.height,_=a==="fak",A=[N.replacementClass,i?"".concat(N.cssPrefix,"-").concat(i):""].filter(function(H){return d.classes.indexOf(H)===-1}).filter(function(H){return H!==""||!!H}).concat(d.classes).join(" "),E={children:[],attributes:P(P({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:A,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(D)})},L=_&&!~d.classes.indexOf("fa-fw")?{width:"".concat(S/D*16*.0625,"em")}:{};g&&(E.attributes[zt]=""),l&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(c||Dn())},children:[l]}),delete E.attributes.title);var R=P(P({},E),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:P(P({},L),d.styles)}),Z=r.found&&n.found?ft("generateAbstractMask",R)||{children:[],attributes:{}}:ft("generateAbstractIcon",R)||{children:[],attributes:{}},z=Z.children,T=Z.attributes;return R.children=z,R.attributes=T,s?cm(R):fm(R)}function Co(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=P(P(P({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[zt]="");var c=P({},o.styles);gi(a)&&(c.transform=Bd({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Kr(c);d.length>0&&(f.style=d);var p=[];return p.push({tag:"span",attributes:f,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function um(e){var t=e.content,n=e.title,r=e.extra,a=P(P(P({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Kr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var sa=Ye.styles;function Ma(e){var t=e[0],n=e[1],r=e.slice(4),a=ci(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(N.cssPrefix,"-").concat(Rt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(Rt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(Rt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var dm={found:!1,width:512,height:512};function mm(e,t){!il&&!N.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function La(e,t){var n=t;return t==="fa"&&N.styleDefault!==null&&(t=kt()),new Promise(function(r,a){if(ft("missingIconAbstract"),n==="fa"){var i=bl(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&sa[t]&&sa[t][e]){var o=sa[t][e];return r(Ma(o))}mm(e,t),r(P(P({},dm),{},{icon:N.showMissingIcons&&e?ft("missingIconAbstract")||{}:{}}))})}var Ao=function(){},Ra=N.measurePerformance&&er&&er.mark&&er.measure?er:{mark:Ao,measure:Ao},gn='FA "6.2.1"',pm=function(t){return Ra.mark("".concat(gn," ").concat(t," begins")),function(){return _l(t)}},_l=function(t){Ra.mark("".concat(gn," ").concat(t," ends")),Ra.measure("".concat(gn," ").concat(t),"".concat(gn," ").concat(t," begins"),"".concat(gn," ").concat(t," ends"))},wi={begin:pm,end:_l},hr=function(){};function Eo(e){var t=e.getAttribute?e.getAttribute(zt):null;return typeof t=="string"}function hm(e){var t=e.getAttribute?e.getAttribute(di):null,n=e.getAttribute?e.getAttribute(mi):null;return t&&n}function gm(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(N.replacementClass)}function vm(){if(N.autoReplaceSvg===!0)return gr.replace;var e=gr[N.autoReplaceSvg];return e||gr.replace}function bm(e){return se.createElementNS("http://www.w3.org/2000/svg",e)}function ym(e){return se.createElement(e)}function wl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?bm:ym:n;if(typeof e=="string")return se.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(wl(o,{ceFn:r}))}),a}function _m(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var gr={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(wl(a),n)}),n.getAttribute(zt)===null&&N.keepOriginalSource){var r=se.createComment(_m(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~hi(n).indexOf(N.replacementClass))return gr.replace(t);var a=new RegExp("".concat(N.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===N.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Kn(s)}).join(`
`);n.setAttribute(zt,""),n.innerHTML=o}};function Oo(e){e()}function xl(e,t){var n=typeof t=="function"?t:hr;if(e.length===0)n();else{var r=Oo;N.mutateApproach===Sd&&(r=xt.requestAnimationFrame||Oo),r(function(){var a=vm(),i=wi.begin("mutate");e.map(a),i(),n()})}}var xi=!1;function kl(){xi=!0}function Fa(){xi=!1}var Ar=null;function To(e){if(bo&&N.observeMutations){var t=e.treeCallback,n=t===void 0?hr:t,r=e.nodeCallback,a=r===void 0?hr:r,i=e.pseudoElementsCallback,o=i===void 0?hr:i,s=e.observeMutationsRoot,l=s===void 0?se:s;Ar=new bo(function(f){if(!xi){var c=kt();cn(f).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Eo(d.addedNodes[0])&&(N.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&N.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Eo(d.target)&&~Id.indexOf(d.attributeName))if(d.attributeName==="class"&&hm(d.target)){var p=Vr(hi(d.target)),g=p.prefix,k=p.iconName;d.target.setAttribute(di,g||c),k&&d.target.setAttribute(mi,k)}else gm(d.target)&&a(d.target)})}}),ut&&Ar.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function wm(){Ar&&Ar.disconnect()}function xm(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function km(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Vr(hi(e));return a.prefix||(a.prefix=kt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=em(a.prefix,e.innerText)||bi(a.prefix,Ta(e.innerText))),!a.iconName&&N.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Sm(e){var t=cn(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return N.autoA11y&&(n?t["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(r||Dn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Cm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:tt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Po(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=km(e),r=n.iconName,a=n.prefix,i=n.rest,o=Sm(e),s=Ia("parseNodeAttributes",{},e),l=t.styleParser?xm(e):[];return P({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:tt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Am=Ye.styles;function Sl(e){var t=N.autoReplaceSvg==="nest"?Po(e,{styleParser:!1}):Po(e);return~t.extra.classes.indexOf(ol)?ft("generateLayersText",e,t):ft("generateSvgReplacementMutation",e,t)}var St=new Set;pi.map(function(e){St.add("fa-".concat(e))});Object.keys(Rn[oe]).map(St.add.bind(St));Object.keys(Rn[ue]).map(St.add.bind(St));St=Un(St);function Io(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ut)return Promise.resolve();var n=se.documentElement.classList,r=function(d){return n.add("".concat(yo,"-").concat(d))},a=function(d){return n.remove("".concat(yo,"-").concat(d))},i=N.autoFetchSvg?St:pi.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Am));i.includes("fa")||i.push("fa");var o=[".".concat(ol,":not([").concat(zt,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(zt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=cn(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=wi.begin("onTree"),f=s.reduce(function(c,d){try{var p=Sl(d);p&&c.push(p)}catch(g){il||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,d){Promise.all(f).then(function(p){xl(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(p){l(),d(p)})})}function Em(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Sl(e).then(function(n){n&&xl([n],t)})}function Om(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Na(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Na(a||{})),e(r,P(P({},n),{},{mask:a}))}}var Tm=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?tt:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,d=n.title,p=d===void 0?null:d,g=n.titleId,k=g===void 0?null:g,S=n.classes,D=S===void 0?[]:S,_=n.attributes,A=_===void 0?{}:_,E=n.styles,L=E===void 0?{}:E;if(t){var R=t.prefix,Z=t.iconName,z=t.icon;return qr(P({type:"icon"},t),function(){return Bt("beforeDOMElementCreation",{iconDefinition:t,params:n}),N.autoA11y&&(p?A["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(k||Dn()):(A["aria-hidden"]="true",A.focusable="false")),_i({icons:{main:Ma(z),mask:l?Ma(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:R,iconName:Z,transform:P(P({},tt),a),symbol:o,title:p,maskId:c,titleId:k,extra:{attributes:A,styles:L,classes:D}})})}},Pm={mixout:function(){return{icon:Om(Tm)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Io,n.nodeCallback=Em,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?se:r,i=n.callback,o=i===void 0?function(){}:i;return Io(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,c=r.mask,d=r.maskId,p=r.extra;return new Promise(function(g,k){Promise.all([La(a,s),c.iconName?La(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var D=ci(S,2),_=D[0],A=D[1];g([n,_i({icons:{main:_,mask:A},prefix:s,iconName:a,transform:l,symbol:f,maskId:d,title:i,titleId:o,extra:p,watchable:!0})])}).catch(k)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Kr(s);l.length>0&&(a.style=l);var f;return gi(o)&&(f=ft("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},Im={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return qr({type:"layer"},function(){Bt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(N.cssPrefix,"-layers")].concat(Un(i)).join(" ")},children:o}]})}}}},Nm={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return qr({type:"counter",content:n},function(){return Bt("beforeDOMElementCreation",{content:n,params:r}),um({content:n.toString(),title:i,extra:{attributes:f,styles:d,classes:["".concat(N.cssPrefix,"-layers-counter")].concat(Un(s))}})})}}}},Mm={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?tt:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,p=r.styles,g=p===void 0?{}:p;return qr({type:"text",content:n},function(){return Bt("beforeDOMElementCreation",{content:n,params:r}),Co({content:n,transform:P(P({},tt),i),title:s,extra:{attributes:d,styles:g,classes:["".concat(N.cssPrefix,"-layers-text")].concat(Un(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(nl){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return N.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Co({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Lm=new RegExp('"',"ug"),No=[1105920,1112319];function Rm(e){var t=e.replace(Lm,""),n=Vd(t,0),r=n>=No[0]&&n<=No[1],a=t.length===2?t[0]===t[1]:!1;return{value:Ta(a?t[0]:t),isSecondary:r||a}}function Mo(e,t){var n="".concat(kd).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=cn(e.children),o=i.filter(function(z){return z.getAttribute(Oa)===t})[0],s=xt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Od),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?ue:oe,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Fn[p][l[2].toLowerCase()]:Td[p][f],k=Rm(d),S=k.value,D=k.isSecondary,_=l[0].startsWith("FontAwesome"),A=bi(g,S),E=A;if(_){var L=tm(S);L.iconName&&L.prefix&&(A=L.iconName,g=L.prefix)}if(A&&!D&&(!o||o.getAttribute(di)!==g||o.getAttribute(mi)!==E)){e.setAttribute(n,E),o&&e.removeChild(o);var R=Cm(),Z=R.extra;Z.attributes[Oa]=t,La(A,g).then(function(z){var T=_i(P(P({},R),{},{icons:{main:z,mask:yi()},prefix:g,iconName:E,extra:Z,watchable:!0})),H=se.createElement("svg");t==="::before"?e.insertBefore(H,e.firstChild):e.appendChild(H),H.outerHTML=T.map(function(G){return Kn(G)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Fm(e){return Promise.all([Mo(e,"::before"),Mo(e,"::after")])}function $m(e){return e.parentNode!==document.head&&!~Cd.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Oa)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Lo(e){if(ut)return new Promise(function(t,n){var r=cn(e.querySelectorAll("*")).filter($m).map(Fm),a=wi.begin("searchPseudoElements");kl(),Promise.all(r).then(function(){a(),Fa(),t()}).catch(function(){a(),Fa(),n()})})}var jm={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Lo,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?se:r;N.searchPseudoElements&&Lo(a)}}},Ro=!1,Dm={mixout:function(){return{dom:{unwatch:function(){kl(),Ro=!0}}}},hooks:function(){return{bootstrap:function(){To(Ia("mutationObserverCallbacks",{}))},noAuto:function(){wm()},watch:function(n){var r=n.observeMutationsRoot;Ro?Fa():To(Ia("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Fo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},zm={mixout:function(){return{parse:{transform:function(n){return Fo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Fo(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(f," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:p};return{tag:"g",attributes:P({},g.outer),children:[{tag:"g",attributes:P({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:P(P({},r.icon.attributes),g.path)}]}]}}}},la={x:0,y:0,width:"100%",height:"100%"};function $o(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Bm(e){return e.tag==="g"?e.children:[e]}var Wm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Vr(a.split(" ").map(function(o){return o.trim()})):yi();return i.prefix||(i.prefix=kt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,c=i.icon,d=o.width,p=o.icon,g=zd({transform:l,containerWidth:d,iconWidth:f}),k={tag:"rect",attributes:P(P({},la),{},{fill:"white"})},S=c.children?{children:c.children.map($o)}:{},D={tag:"g",attributes:P({},g.inner),children:[$o(P({tag:c.tag,attributes:P(P({},c.attributes),g.path)},S))]},_={tag:"g",attributes:P({},g.outer),children:[D]},A="mask-".concat(s||Dn()),E="clip-".concat(s||Dn()),L={tag:"mask",attributes:P(P({},la),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,_]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:Bm(p)},L]};return r.push(R,{tag:"rect",attributes:P({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(A,")")},la)}),{children:r,attributes:a}}}},Hm={provides:function(t){var n=!1;xt.matchMedia&&(n=xt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:P(P({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=P(P({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:P(P({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:P(P({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:P(P({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:P(P({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:P(P({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:P(P({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:P(P({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Um={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Ym=[Hd,Pm,Im,Nm,Mm,jm,Dm,zm,Wm,Hm,Um];am(Ym,{mixoutsTo:Le});Le.noAuto;var Cl=Le.config,Km=Le.library;Le.dom;var Er=Le.parse;Le.findIconDefinition;Le.toHtml;var Gm=Le.icon;Le.layer;var Vm=Le.text;Le.counter;var qm={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z"]};function jo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function He(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?jo(Object(n),!0).forEach(function(r){Oe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):jo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Or(e){return Or=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Or(e)}function Oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Xm(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Jm(e,t){if(e==null)return{};var n=Xm(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function $a(e){return Zm(e)||Qm(e)||ep(e)||tp()}function Zm(e){if(Array.isArray(e))return ja(e)}function Qm(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ep(e,t){if(e){if(typeof e=="string")return ja(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ja(e,t)}}function ja(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function tp(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var np=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Al={exports:{}};(function(e){(function(t){var n=function(_,A,E){if(!f(A)||d(A)||p(A)||g(A)||l(A))return A;var L,R=0,Z=0;if(c(A))for(L=[],Z=A.length;R<Z;R++)L.push(n(_,A[R],E));else{L={};for(var z in A)Object.prototype.hasOwnProperty.call(A,z)&&(L[_(z,E)]=n(_,A[z],E))}return L},r=function(_,A){A=A||{};var E=A.separator||"_",L=A.split||/(?=[A-Z])/;return _.split(L).join(E)},a=function(_){return k(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(A,E){return E?E.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},i=function(_){var A=a(_);return A.substr(0,1).toUpperCase()+A.substr(1)},o=function(_,A){return r(_,A).toLowerCase()},s=Object.prototype.toString,l=function(_){return typeof _=="function"},f=function(_){return _===Object(_)},c=function(_){return s.call(_)=="[object Array]"},d=function(_){return s.call(_)=="[object Date]"},p=function(_){return s.call(_)=="[object RegExp]"},g=function(_){return s.call(_)=="[object Boolean]"},k=function(_){return _=_-0,_===_},S=function(_,A){var E=A&&"process"in A?A.process:A;return typeof E!="function"?_:function(L,R){return E(L,_,R)}},D={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(_,A){return n(S(a,A),_)},decamelizeKeys:function(_,A){return n(S(o,A),_,A)},pascalizeKeys:function(_,A){return n(S(i,A),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=D:t.humps=D})(np)})(Al);var rp=Al.exports,ap=["class","style"];function ip(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=rp.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function op(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ki(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ki(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var c=e.attributes[f];switch(f){case"class":l.class=op(c);break;case"style":l.style=ip(c);break;default:l.attrs[f]=c}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Jm(n,ap);return js(e.tag,He(He(He({},t),{},{class:a.class,style:He(He({},a.style),o)},a.attrs),s),r)}var El=!1;try{El=!0}catch{}function sp(){if(!El&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function kn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Oe({},e,t):{}}function lp(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Oe(t,"fa-".concat(e.size),e.size!==null),Oe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),Oe(t,"fa-pull-".concat(e.pull),e.pull!==null),Oe(t,"fa-swap-opacity",e.swapOpacity),Oe(t,"fa-bounce",e.bounce),Oe(t,"fa-shake",e.shake),Oe(t,"fa-beat",e.beat),Oe(t,"fa-fade",e.fade),Oe(t,"fa-beat-fade",e.beatFade),Oe(t,"fa-flash",e.flash),Oe(t,"fa-spin-pulse",e.spinPulse),Oe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Do(e){if(e&&Or(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Er.icon)return Er.icon(e);if(e===null)return null;if(Or(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var fp=ei({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ye(function(){return Do(t.icon)}),i=ye(function(){return kn("classes",lp(t))}),o=ye(function(){return kn("transform",typeof t.transform=="string"?Er.transform(t.transform):t.transform)}),s=ye(function(){return kn("mask",Do(t.mask))}),l=ye(function(){return Gm(a.value,He(He(He(He({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});jt(l,function(c){if(!c)return sp("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=ye(function(){return l.value?ki(l.value.abstract[0],{},r):null});return function(){return f.value}}});ei({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Cl.familyPrefix,i=ye(function(){return["".concat(a,"-layers")].concat($a(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return js("div",{class:i.value},r.default?r.default():[])}}});ei({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Cl.familyPrefix,i=ye(function(){return kn("classes",[].concat($a(t.counter?["".concat(a,"-layers-counter")]:[]),$a(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=ye(function(){return kn("transform",typeof t.transform=="string"?Er.transform(t.transform):t.transform)}),s=ye(function(){var f=Vm(t.value.toString(),He(He({},o.value),i.value)),c=f.abstract;return t.counter&&(c[0].attributes.class=c[0].attributes.class.replace("fa-layers-text","")),c[0]}),l=ye(function(){return ki(s.value,{},r)});return function(){return l.value}}});Km.add(qm);const Si=Us(Js);Si.use(Gs());Si.component("font-awesome-icon",fp);Si.mount("#app");
