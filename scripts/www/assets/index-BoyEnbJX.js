(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Wc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Et={},dr=[],ci=()=>{},fh=()=>!1,Wa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Xc=n=>n.startsWith("onUpdate:"),_n=Object.assign,jc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Um=Object.prototype.hasOwnProperty,gt=(n,e)=>Um.call(n,e),Ye=Array.isArray,fr=n=>Xa(n)==="[object Map]",hh=n=>Xa(n)==="[object Set]",nt=n=>typeof n=="function",Bt=n=>typeof n=="string",ls=n=>typeof n=="symbol",Dt=n=>n!==null&&typeof n=="object",ph=n=>(Dt(n)||nt(n))&&nt(n.then)&&nt(n.catch),mh=Object.prototype.toString,Xa=n=>mh.call(n),Om=n=>Xa(n).slice(8,-1),gh=n=>Xa(n)==="[object Object]",qc=n=>Bt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,io=Wc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ja=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Fm=/-\w/g,ss=ja(n=>n.replace(Fm,e=>e.slice(1).toUpperCase())),Bm=/\B([A-Z])/g,Is=ja(n=>n.replace(Bm,"-$1").toLowerCase()),_h=ja(n=>n.charAt(0).toUpperCase()+n.slice(1)),hl=ja(n=>n?`on${_h(n)}`:""),Qi=(n,e)=>!Object.is(n,e),ma=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},vh=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},mc=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let bu;const qa=()=>bu||(bu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Li(n){if(Ye(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Bt(i)?Vm(i):Li(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Bt(n)||Dt(n))return n}const km=/;(?![^(]*\))/g,Hm=/:([^]+)/,zm=/\/\*[^]*?\*\//g;function Vm(n){const e={};return n.replace(zm,"").split(km).forEach(t=>{if(t){const i=t.split(Hm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function yt(n){let e="";if(Bt(n))e=n;else if(Ye(n))for(let t=0;t<n.length;t++){const i=yt(n[t]);i&&(e+=i+" ")}else if(Dt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Gm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Wm=Wc(Gm);function xh(n){return!!n||n===""}const yh=n=>!!(n&&n.__v_isRef===!0),ht=n=>Bt(n)?n:n==null?"":Ye(n)||Dt(n)&&(n.toString===mh||!nt(n.toString))?yh(n)?ht(n.value):JSON.stringify(n,Mh,2):String(n),Mh=(n,e)=>yh(e)?Mh(n,e.value):fr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[pl(i,r)+" =>"]=s,t),{})}:hh(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>pl(t))}:ls(e)?pl(e):Dt(e)&&!Ye(e)&&!gh(e)?String(e):e,pl=(n,e="")=>{var t;return ls(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yn;class Xm{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=yn,!e&&yn&&(this.index=(yn.scopes||(yn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=yn;try{return yn=this,e()}finally{yn=t}}}on(){++this._on===1&&(this.prevScope=yn,yn=this)}off(){this._on>0&&--this._on===0&&(yn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function jm(){return yn}let wt;const ml=new WeakSet;class Sh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,yn&&yn.active&&yn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ml.has(this)&&(ml.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Eh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Eu(this),Th(this);const e=wt,t=Kn;wt=this,Kn=!0;try{return this.fn()}finally{Ah(this),wt=e,Kn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Kc(e);this.deps=this.depsTail=void 0,Eu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ml.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){gc(this)&&this.run()}get dirty(){return gc(this)}}let bh=0,so,ro;function Eh(n,e=!1){if(n.flags|=8,e){n.next=ro,ro=n;return}n.next=so,so=n}function $c(){bh++}function Yc(){if(--bh>0)return;if(ro){let e=ro;for(ro=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;so;){let e=so;for(so=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Th(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ah(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Kc(i),qm(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function gc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(wh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function wh(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===mo)||(n.globalVersion=mo,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!gc(n))))return;n.flags|=2;const e=n.dep,t=wt,i=Kn;wt=n,Kn=!0;try{Th(n);const s=n.fn(n._value);(e.version===0||Qi(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{wt=t,Kn=i,Ah(n),n.flags&=-3}}function Kc(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Kc(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function qm(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Kn=!0;const Rh=[];function Di(){Rh.push(Kn),Kn=!1}function Ii(){const n=Rh.pop();Kn=n===void 0?!0:n}function Eu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=wt;wt=void 0;try{e()}finally{wt=t}}}let mo=0;class $m{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Zc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!wt||!Kn||wt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==wt)t=this.activeLink=new $m(wt,this),wt.deps?(t.prevDep=wt.depsTail,wt.depsTail.nextDep=t,wt.depsTail=t):wt.deps=wt.depsTail=t,Ch(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=wt.depsTail,t.nextDep=void 0,wt.depsTail.nextDep=t,wt.depsTail=t,wt.deps===t&&(wt.deps=i)}return t}trigger(e){this.version++,mo++,this.notify(e)}notify(e){$c();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Yc()}}}function Ch(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Ch(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const _c=new WeakMap,As=Symbol(""),vc=Symbol(""),go=Symbol("");function tn(n,e,t){if(Kn&&wt){let i=_c.get(n);i||_c.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Zc),s.map=i,s.key=t),s.track()}}function wi(n,e,t,i,s,r){const o=_c.get(n);if(!o){mo++;return}const a=l=>{l&&l.trigger()};if($c(),e==="clear")o.forEach(a);else{const l=Ye(n),c=l&&qc(t);if(l&&t==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===go||!ls(f)&&f>=u)&&a(d)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(go)),e){case"add":l?c&&a(o.get("length")):(a(o.get(As)),fr(n)&&a(o.get(vc)));break;case"delete":l||(a(o.get(As)),fr(n)&&a(o.get(vc)));break;case"set":fr(n)&&a(o.get(As));break}}Yc()}function Hs(n){const e=mt(n);return e===n?e:(tn(e,"iterate",go),Fn(n)?e:e.map($t))}function $a(n){return tn(n=mt(n),"iterate",go),n}const Ym={__proto__:null,[Symbol.iterator](){return gl(this,Symbol.iterator,$t)},concat(...n){return Hs(this).concat(...n.map(e=>Ye(e)?Hs(e):e))},entries(){return gl(this,"entries",n=>(n[1]=$t(n[1]),n))},every(n,e){return vi(this,"every",n,e,void 0,arguments)},filter(n,e){return vi(this,"filter",n,e,t=>t.map($t),arguments)},find(n,e){return vi(this,"find",n,e,$t,arguments)},findIndex(n,e){return vi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return vi(this,"findLast",n,e,$t,arguments)},findLastIndex(n,e){return vi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return vi(this,"forEach",n,e,void 0,arguments)},includes(...n){return _l(this,"includes",n)},indexOf(...n){return _l(this,"indexOf",n)},join(n){return Hs(this).join(n)},lastIndexOf(...n){return _l(this,"lastIndexOf",n)},map(n,e){return vi(this,"map",n,e,void 0,arguments)},pop(){return zr(this,"pop")},push(...n){return zr(this,"push",n)},reduce(n,...e){return Tu(this,"reduce",n,e)},reduceRight(n,...e){return Tu(this,"reduceRight",n,e)},shift(){return zr(this,"shift")},some(n,e){return vi(this,"some",n,e,void 0,arguments)},splice(...n){return zr(this,"splice",n)},toReversed(){return Hs(this).toReversed()},toSorted(n){return Hs(this).toSorted(n)},toSpliced(...n){return Hs(this).toSpliced(...n)},unshift(...n){return zr(this,"unshift",n)},values(){return gl(this,"values",$t)}};function gl(n,e,t){const i=$a(n),s=i[e]();return i!==n&&!Fn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const Km=Array.prototype;function vi(n,e,t,i,s,r){const o=$a(n),a=o!==n&&!Fn(n),l=o[e];if(l!==Km[e]){const d=l.apply(n,r);return a?$t(d):d}let c=t;o!==n&&(a?c=function(d,f){return t.call(this,$t(d),f,n)}:t.length>2&&(c=function(d,f){return t.call(this,d,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Tu(n,e,t,i){const s=$a(n);let r=t;return s!==n&&(Fn(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,$t(a),l,n)}),s[e](r,...i)}function _l(n,e,t){const i=mt(n);tn(i,"iterate",go);const s=i[e](...t);return(s===-1||s===!1)&&eu(t[0])?(t[0]=mt(t[0]),i[e](...t)):s}function zr(n,e,t=[]){Di(),$c();const i=mt(n)[e].apply(n,t);return Yc(),Ii(),i}const Zm=Wc("__proto__,__v_isRef,__isVue"),Ph=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ls));function Jm(n){ls(n)||(n=String(n));const e=mt(this);return tn(e,"has",n),e.hasOwnProperty(n)}class Lh{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?lg:Uh:r?Nh:Ih).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ye(e);if(!s){let l;if(o&&(l=Ym[t]))return l;if(t==="hasOwnProperty")return Jm}const a=Reflect.get(e,t,rn(e)?e:i);return(ls(t)?Ph.has(t):Zm(t))||(s||tn(e,"get",t),r)?a:rn(a)?o&&qc(t)?a:a.value:Dt(a)?s?Oh(a):bs(a):a}}class Dh extends Lh{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=rs(r);if(!Fn(i)&&!rs(i)&&(r=mt(r),i=mt(i)),!Ye(e)&&rn(r)&&!rn(i))return l||(r.value=i),!0}const o=Ye(e)&&qc(t)?Number(t)<e.length:gt(e,t),a=Reflect.set(e,t,i,rn(e)?e:s);return e===mt(s)&&(o?Qi(i,r)&&wi(e,"set",t,i):wi(e,"add",t,i)),a}deleteProperty(e,t){const i=gt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&wi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!ls(t)||!Ph.has(t))&&tn(e,"has",t),i}ownKeys(e){return tn(e,"iterate",Ye(e)?"length":As),Reflect.ownKeys(e)}}class Qm extends Lh{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const eg=new Dh,tg=new Qm,ng=new Dh(!0);const xc=n=>n,Uo=n=>Reflect.getPrototypeOf(n);function ig(n,e,t){return function(...i){const s=this.__v_raw,r=mt(s),o=fr(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?xc:e?wa:$t;return!e&&tn(r,"iterate",l?vc:As),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function Oo(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function sg(n,e){const t={get(s){const r=this.__v_raw,o=mt(r),a=mt(s);n||(Qi(s,a)&&tn(o,"get",s),tn(o,"get",a));const{has:l}=Uo(o),c=e?xc:n?wa:$t;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&tn(mt(s),"iterate",As),s.size},has(s){const r=this.__v_raw,o=mt(r),a=mt(s);return n||(Qi(s,a)&&tn(o,"has",s),tn(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=mt(a),c=e?xc:n?wa:$t;return!n&&tn(l,"iterate",As),a.forEach((u,d)=>s.call(r,c(u),c(d),o))}};return _n(t,n?{add:Oo("add"),set:Oo("set"),delete:Oo("delete"),clear:Oo("clear")}:{add(s){!e&&!Fn(s)&&!rs(s)&&(s=mt(s));const r=mt(this);return Uo(r).has.call(r,s)||(r.add(s),wi(r,"add",s,s)),this},set(s,r){!e&&!Fn(r)&&!rs(r)&&(r=mt(r));const o=mt(this),{has:a,get:l}=Uo(o);let c=a.call(o,s);c||(s=mt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Qi(r,u)&&wi(o,"set",s,r):wi(o,"add",s,r),this},delete(s){const r=mt(this),{has:o,get:a}=Uo(r);let l=o.call(r,s);l||(s=mt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&wi(r,"delete",s,void 0),c},clear(){const s=mt(this),r=s.size!==0,o=s.clear();return r&&wi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=ig(s,n,e)}),t}function Jc(n,e){const t=sg(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(gt(t,s)&&s in i?t:i,s,r)}const rg={get:Jc(!1,!1)},og={get:Jc(!1,!0)},ag={get:Jc(!0,!1)};const Ih=new WeakMap,Nh=new WeakMap,Uh=new WeakMap,lg=new WeakMap;function cg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ug(n){return n.__v_skip||!Object.isExtensible(n)?0:cg(Om(n))}function bs(n){return rs(n)?n:Qc(n,!1,eg,rg,Ih)}function dg(n){return Qc(n,!1,ng,og,Nh)}function Oh(n){return Qc(n,!0,tg,ag,Uh)}function Qc(n,e,t,i,s){if(!Dt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=ug(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function hr(n){return rs(n)?hr(n.__v_raw):!!(n&&n.__v_isReactive)}function rs(n){return!!(n&&n.__v_isReadonly)}function Fn(n){return!!(n&&n.__v_isShallow)}function eu(n){return n?!!n.__v_raw:!1}function mt(n){const e=n&&n.__v_raw;return e?mt(e):n}function ar(n){return!gt(n,"__v_skip")&&Object.isExtensible(n)&&vh(n,"__v_skip",!0),n}const $t=n=>Dt(n)?bs(n):n,wa=n=>Dt(n)?Oh(n):n;function rn(n){return n?n.__v_isRef===!0:!1}function Le(n){return fg(n,!1)}function fg(n,e){return rn(n)?n:new hg(n,e)}class hg{constructor(e,t){this.dep=new Zc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:mt(e),this._value=t?e:$t(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Fn(e)||rs(e);e=i?e:mt(e),Qi(e,t)&&(this._rawValue=e,this._value=i?e:$t(e),this.dep.trigger())}}function pg(n){return rn(n)?n.value:n}const mg={get:(n,e,t)=>e==="__v_raw"?n:pg(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return rn(s)&&!rn(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Fh(n){return hr(n)?n:new Proxy(n,mg)}class gg{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Zc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=mo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&wt!==this)return Eh(this,!0),!0}get value(){const e=this.dep.track();return wh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function _g(n,e,t=!1){let i,s;return nt(n)?i=n:(i=n.get,s=n.set),new gg(i,s,t)}const Fo={},Ra=new WeakMap;let xs;function vg(n,e=!1,t=xs){if(t){let i=Ra.get(t);i||Ra.set(t,i=[]),i.push(n)}}function xg(n,e,t=Et){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=T=>s?T:Fn(T)||s===!1||s===0?Ri(T,1):Ri(T);let u,d,f,h,g=!1,_=!1;if(rn(n)?(d=()=>n.value,g=Fn(n)):hr(n)?(d=()=>c(n),g=!0):Ye(n)?(_=!0,g=n.some(T=>hr(T)||Fn(T)),d=()=>n.map(T=>{if(rn(T))return T.value;if(hr(T))return c(T);if(nt(T))return l?l(T,2):T()})):nt(n)?e?d=l?()=>l(n,2):n:d=()=>{if(f){Di();try{f()}finally{Ii()}}const T=xs;xs=u;try{return l?l(n,3,[h]):n(h)}finally{xs=T}}:d=ci,e&&s){const T=d,O=s===!0?1/0:s;d=()=>Ri(T(),O)}const p=jm(),m=()=>{u.stop(),p&&p.active&&jc(p.effects,u)};if(r&&e){const T=e;e=(...O)=>{T(...O),m()}}let S=_?new Array(n.length).fill(Fo):Fo;const y=T=>{if(!(!(u.flags&1)||!u.dirty&&!T))if(e){const O=u.run();if(s||g||(_?O.some((D,w)=>Qi(D,S[w])):Qi(O,S))){f&&f();const D=xs;xs=u;try{const w=[O,S===Fo?void 0:_&&S[0]===Fo?[]:S,h];S=O,l?l(e,3,w):e(...w)}finally{xs=D}}}else u.run()};return a&&a(y),u=new Sh(d),u.scheduler=o?()=>o(y,!1):y,h=T=>vg(T,!1,u),f=u.onStop=()=>{const T=Ra.get(u);if(T){if(l)l(T,4);else for(const O of T)O();Ra.delete(u)}},e?i?y(!0):S=u.run():o?o(y.bind(null,!0),!0):u.run(),m.pause=u.pause.bind(u),m.resume=u.resume.bind(u),m.stop=m,m}function Ri(n,e=1/0,t){if(e<=0||!Dt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,rn(n))Ri(n.value,e,t);else if(Ye(n))for(let i=0;i<n.length;i++)Ri(n[i],e,t);else if(hh(n)||fr(n))n.forEach(i=>{Ri(i,e,t)});else if(gh(n)){for(const i in n)Ri(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ri(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function To(n,e,t,i){try{return i?n(...i):n()}catch(s){Ya(s,e,t)}}function fi(n,e,t,i){if(nt(n)){const s=To(n,e,t,i);return s&&ph(s)&&s.catch(r=>{Ya(r,e,t)}),s}if(Ye(n)){const s=[];for(let r=0;r<n.length;r++)s.push(fi(n[r],e,t,i));return s}}function Ya(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Et;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}a=a.parent}if(r){Di(),To(r,null,10,[n,l,c]),Ii();return}}yg(n,t,s,i,o)}function yg(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const fn=[];let si=-1;const pr=[];let ji=null,lr=0;const Bh=Promise.resolve();let Ca=null;function Un(n){const e=Ca||Bh;return n?e.then(this?n.bind(this):n):e}function Mg(n){let e=si+1,t=fn.length;for(;e<t;){const i=e+t>>>1,s=fn[i],r=_o(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function tu(n){if(!(n.flags&1)){const e=_o(n),t=fn[fn.length-1];!t||!(n.flags&2)&&e>=_o(t)?fn.push(n):fn.splice(Mg(e),0,n),n.flags|=1,kh()}}function kh(){Ca||(Ca=Bh.then(zh))}function Sg(n){Ye(n)?pr.push(...n):ji&&n.id===-1?ji.splice(lr+1,0,n):n.flags&1||(pr.push(n),n.flags|=1),kh()}function Au(n,e,t=si+1){for(;t<fn.length;t++){const i=fn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;fn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Hh(n){if(pr.length){const e=[...new Set(pr)].sort((t,i)=>_o(t)-_o(i));if(pr.length=0,ji){ji.push(...e);return}for(ji=e,lr=0;lr<ji.length;lr++){const t=ji[lr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ji=null,lr=0}}const _o=n=>n.id==null?n.flags&2?-1:1/0:n.id;function zh(n){try{for(si=0;si<fn.length;si++){const e=fn[si];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),To(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;si<fn.length;si++){const e=fn[si];e&&(e.flags&=-2)}si=-1,fn.length=0,Hh(),Ca=null,(fn.length||pr.length)&&zh()}}let On=null,Vh=null;function Pa(n){const e=On;return On=n,Vh=n&&n.type.__scopeId||null,e}function bg(n,e=On,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Ou(-1);const r=Pa(e);let o;try{o=n(...s)}finally{Pa(r),i._d&&Ou(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Gh(n,e){if(On===null)return n;const t=Qa(On),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=Et]=e[s];r&&(nt(r)&&(r={mounted:r,updated:r}),r.deep&&Ri(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function us(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Di(),fi(l,t,8,[n.el,a,n,e]),Ii())}}const Eg=Symbol("_vte"),Tg=n=>n.__isTeleport,Ag=Symbol("_leaveCb");function nu(n,e){n.shapeFlag&6&&n.component?(n.transition=e,nu(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Wh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const La=new WeakMap;function oo(n,e,t,i,s=!1){if(Ye(n)){n.forEach((g,_)=>oo(g,e&&(Ye(e)?e[_]:e),t,i,s));return}if(ao(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&oo(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Qa(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Et?a.refs={}:a.refs,d=a.setupState,f=mt(d),h=d===Et?fh:g=>gt(f,g);if(c!=null&&c!==l){if(wu(e),Bt(c))u[c]=null,h(c)&&(d[c]=null);else if(rn(c)){c.value=null;const g=e;g.k&&(u[g.k]=null)}}if(nt(l))To(l,a,12,[o,u]);else{const g=Bt(l),_=rn(l);if(g||_){const p=()=>{if(n.f){const m=g?h(l)?d[l]:u[l]:l.value;if(s)Ye(m)&&jc(m,r);else if(Ye(m))m.includes(r)||m.push(r);else if(g)u[l]=[r],h(l)&&(d[l]=u[l]);else{const S=[r];l.value=S,n.k&&(u[n.k]=S)}}else g?(u[l]=o,h(l)&&(d[l]=o)):_&&(l.value=o,n.k&&(u[n.k]=o))};if(o){const m=()=>{p(),La.delete(n)};m.id=-1,La.set(n,m),Rn(m,t)}else wu(n),p()}}}function wu(n){const e=La.get(n);e&&(e.flags|=8,La.delete(n))}qa().requestIdleCallback;qa().cancelIdleCallback;const ao=n=>!!n.type.__asyncLoader,Xh=n=>n.type.__isKeepAlive;function wg(n,e){jh(n,"a",e)}function Rg(n,e){jh(n,"da",e)}function jh(n,e,t=mn){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ka(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Xh(s.parent.vnode)&&Cg(i,e,t,s),s=s.parent}}function Cg(n,e,t,i){const s=Ka(e,n,i,!0);Cs(()=>{jc(i[e],s)},t)}function Ka(n,e,t=mn,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Di();const a=Ao(t),l=fi(e,t,n,o);return a(),Ii(),l});return i?s.unshift(r):s.push(r),r}}const Ui=n=>(e,t=mn)=>{(!xo||n==="sp")&&Ka(n,(...i)=>e(...i),t)},Pg=Ui("bm"),Rs=Ui("m"),Lg=Ui("bu"),Dg=Ui("u"),Ig=Ui("bum"),Cs=Ui("um"),Ng=Ui("sp"),Ug=Ui("rtg"),Og=Ui("rtc");function Fg(n,e=mn){Ka("ec",n,e)}const Bg=Symbol.for("v-ndc");function es(n,e,t,i){let s;const r=t,o=Ye(n);if(o||Bt(n)){const a=o&&hr(n);let l=!1,c=!1;a&&(l=!Fn(n),c=rs(n),n=$a(n)),s=new Array(n.length);for(let u=0,d=n.length;u<d;u++)s[u]=e(l?c?wa($t(n[u])):$t(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(Dt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const yc=n=>n?hp(n)?Qa(n):yc(n.parent):null,lo=_n(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>yc(n.parent),$root:n=>yc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>$h(n),$forceUpdate:n=>n.f||(n.f=()=>{tu(n.update)}),$nextTick:n=>n.n||(n.n=Un.bind(n.proxy)),$watch:n=>o_.bind(n)}),vl=(n,e)=>n!==Et&&!n.__isScriptSetup&&gt(n,e),kg={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(vl(i,e))return o[e]=1,i[e];if(s!==Et&&gt(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&gt(c,e))return o[e]=3,r[e];if(t!==Et&&gt(t,e))return o[e]=4,t[e];Mc&&(o[e]=0)}}const u=lo[e];let d,f;if(u)return e==="$attrs"&&tn(n.attrs,"get",""),u(n);if((d=a.__cssModules)&&(d=d[e]))return d;if(t!==Et&&gt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,gt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return vl(s,e)?(s[e]=t,!0):i!==Et&&gt(i,e)?(i[e]=t,!0):gt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r,type:o}},a){let l,c;return!!(t[a]||n!==Et&&a[0]!=="$"&&gt(n,a)||vl(e,a)||(l=r[0])&&gt(l,a)||gt(i,a)||gt(lo,a)||gt(s.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:gt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Ru(n){return Ye(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Mc=!0;function Hg(n){const e=$h(n),t=n.proxy,i=n.ctx;Mc=!1,e.beforeCreate&&Cu(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:g,activated:_,deactivated:p,beforeDestroy:m,beforeUnmount:S,destroyed:y,unmounted:T,render:O,renderTracked:D,renderTriggered:w,errorCaptured:G,serverPrefetch:E,expose:M,inheritAttrs:W,components:$,directives:L,filters:I}=e;if(c&&zg(c,i,null),o)for(const q in o){const H=o[q];nt(H)&&(i[q]=H.bind(t))}if(s){const q=s.call(t,t);Dt(q)&&(n.data=bs(q))}if(Mc=!0,r)for(const q in r){const H=r[q],pe=nt(H)?H.bind(t,t):nt(H.get)?H.get.bind(t,t):ci,ge=!nt(H)&&nt(H.set)?H.set.bind(t):ci,Te=Wt({get:pe,set:ge});Object.defineProperty(i,q,{enumerable:!0,configurable:!0,get:()=>Te.value,set:Be=>Te.value=Be})}if(a)for(const q in a)qh(a[q],i,t,q);if(l){const q=nt(l)?l.call(t):l;Reflect.ownKeys(q).forEach(H=>{qg(H,q[H])})}u&&Cu(u,n,"c");function X(q,H){Ye(H)?H.forEach(pe=>q(pe.bind(t))):H&&q(H.bind(t))}if(X(Pg,d),X(Rs,f),X(Lg,h),X(Dg,g),X(wg,_),X(Rg,p),X(Fg,G),X(Og,D),X(Ug,w),X(Ig,S),X(Cs,T),X(Ng,E),Ye(M))if(M.length){const q=n.exposed||(n.exposed={});M.forEach(H=>{Object.defineProperty(q,H,{get:()=>t[H],set:pe=>t[H]=pe,enumerable:!0})})}else n.exposed||(n.exposed={});O&&n.render===ci&&(n.render=O),W!=null&&(n.inheritAttrs=W),$&&(n.components=$),L&&(n.directives=L),E&&Wh(n)}function zg(n,e,t=ci){Ye(n)&&(n=Sc(n));for(const i in n){const s=n[i];let r;Dt(s)?"default"in s?r=ga(s.from||i,s.default,!0):r=ga(s.from||i):r=ga(s),rn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Cu(n,e,t){fi(Ye(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function qh(n,e,t,i){let s=i.includes(".")?ap(t,i):()=>t[i];if(Bt(n)){const r=e[n];nt(r)&&Bn(s,r)}else if(nt(n))Bn(s,n.bind(t));else if(Dt(n))if(Ye(n))n.forEach(r=>qh(r,e,t,i));else{const r=nt(n.handler)?n.handler.bind(t):e[n.handler];nt(r)&&Bn(s,r,n)}}function $h(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Da(l,c,o,!0)),Da(l,e,o)),Dt(e)&&r.set(e,l),l}function Da(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Da(n,r,t,!0),s&&s.forEach(o=>Da(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Vg[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Vg={data:Pu,props:Lu,emits:Lu,methods:Qr,computed:Qr,beforeCreate:un,created:un,beforeMount:un,mounted:un,beforeUpdate:un,updated:un,beforeDestroy:un,beforeUnmount:un,destroyed:un,unmounted:un,activated:un,deactivated:un,errorCaptured:un,serverPrefetch:un,components:Qr,directives:Qr,watch:Wg,provide:Pu,inject:Gg};function Pu(n,e){return e?n?function(){return _n(nt(n)?n.call(this,this):n,nt(e)?e.call(this,this):e)}:e:n}function Gg(n,e){return Qr(Sc(n),Sc(e))}function Sc(n){if(Ye(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function un(n,e){return n?[...new Set([].concat(n,e))]:e}function Qr(n,e){return n?_n(Object.create(null),n,e):e}function Lu(n,e){return n?Ye(n)&&Ye(e)?[...new Set([...n,...e])]:_n(Object.create(null),Ru(n),Ru(e??{})):e}function Wg(n,e){if(!n)return e;if(!e)return n;const t=_n(Object.create(null),n);for(const i in e)t[i]=un(n[i],e[i]);return t}function Yh(){return{app:null,config:{isNativeTag:fh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xg=0;function jg(n,e){return function(i,s=null){nt(i)||(i=_n({},i)),s!=null&&!Dt(s)&&(s=null);const r=Yh(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Xg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:C_,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&nt(u.install)?(o.add(u),u.install(c,...d)):nt(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!l){const h=c._ceVNode||Dn(i,s);return h.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(h,u,f),l=!0,c._container=u,u.__vue_app__=c,Qa(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(fi(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=mr;mr=c;try{return u()}finally{mr=d}}};return c}}let mr=null;function qg(n,e){if(mn){let t=mn.provides;const i=mn.parent&&mn.parent.provides;i===t&&(t=mn.provides=Object.create(i)),t[n]=e}}function ga(n,e,t=!1){const i=b_();if(i||mr){let s=mr?mr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&nt(e)?e.call(i&&i.proxy):e}}const Kh={},Zh=()=>Object.create(Kh),Jh=n=>Object.getPrototypeOf(n)===Kh;function $g(n,e,t,i=!1){const s={},r=Zh();n.propsDefaults=Object.create(null),Qh(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:dg(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Yg(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=mt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Za(n.emitsOptions,f))continue;const h=e[f];if(l)if(gt(r,f))h!==r[f]&&(r[f]=h,c=!0);else{const g=ss(f);s[g]=bc(l,a,g,h,n,!1)}else h!==r[f]&&(r[f]=h,c=!0)}}}else{Qh(n,e,s,r)&&(c=!0);let u;for(const d in a)(!e||!gt(e,d)&&((u=Is(d))===d||!gt(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(s[d]=bc(l,a,d,void 0,n,!0)):delete s[d]);if(r!==a)for(const d in r)(!e||!gt(e,d))&&(delete r[d],c=!0)}c&&wi(n.attrs,"set","")}function Qh(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(io(l))continue;const c=e[l];let u;s&&gt(s,u=ss(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:Za(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=mt(t),c=a||Et;for(let u=0;u<r.length;u++){const d=r[u];t[d]=bc(s,l,d,c[d],n,!gt(c,d))}}return o}function bc(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=gt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&nt(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Ao(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Is(t))&&(i=!0))}return i}const Kg=new WeakMap;function ep(n,e,t=!1){const i=t?Kg:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!nt(n)){const u=d=>{l=!0;const[f,h]=ep(d,e,!0);_n(o,f),h&&a.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return Dt(n)&&i.set(n,dr),dr;if(Ye(r))for(let u=0;u<r.length;u++){const d=ss(r[u]);Du(d)&&(o[d]=Et)}else if(r)for(const u in r){const d=ss(u);if(Du(d)){const f=r[u],h=o[d]=Ye(f)||nt(f)?{type:f}:_n({},f),g=h.type;let _=!1,p=!0;if(Ye(g))for(let m=0;m<g.length;++m){const S=g[m],y=nt(S)&&S.name;if(y==="Boolean"){_=!0;break}else y==="String"&&(p=!1)}else _=nt(g)&&g.name==="Boolean";h[0]=_,h[1]=p,(_||gt(h,"default"))&&a.push(d)}}const c=[o,a];return Dt(n)&&i.set(n,c),c}function Du(n){return n[0]!=="$"&&!io(n)}const iu=n=>n==="_"||n==="_ctx"||n==="$stable",su=n=>Ye(n)?n.map(ri):[ri(n)],Zg=(n,e,t)=>{if(e._n)return e;const i=bg((...s)=>su(e(...s)),t);return i._c=!1,i},tp=(n,e,t)=>{const i=n._ctx;for(const s in n){if(iu(s))continue;const r=n[s];if(nt(r))e[s]=Zg(s,r,i);else if(r!=null){const o=su(r);e[s]=()=>o}}},np=(n,e)=>{const t=su(e);n.slots.default=()=>t},ip=(n,e,t)=>{for(const i in e)(t||!iu(i))&&(n[i]=e[i])},Jg=(n,e,t)=>{const i=n.slots=Zh();if(n.vnode.shapeFlag&32){const s=e._;s?(ip(i,e,t),t&&vh(i,"_",s,!0)):tp(e,i)}else e&&np(n,e)},Qg=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=Et;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:ip(s,e,t):(r=!e.$stable,tp(e,s)),o=e}else e&&(np(n,e),o={default:1});if(r)for(const a in s)!iu(a)&&o[a]==null&&delete s[a]},Rn=p_;function e_(n){return t_(n)}function t_(n,e){const t=qa();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=ci,insertStaticContent:g}=n,_=(C,P,Z,re=null,ce=null,b=null,x=void 0,N=null,V=!!P.dynamicChildren)=>{if(C===P)return;C&&!Vr(C,P)&&(re=_e(C),Be(C,ce,b,!0),C=null),P.patchFlag===-2&&(V=!1,P.dynamicChildren=null);const{type:z,ref:J,shapeFlag:fe}=P;switch(z){case Ja:p(C,P,Z,re);break;case os:m(C,P,Z,re);break;case _a:C==null&&S(P,Z,re,x);break;case Yt:$(C,P,Z,re,ce,b,x,N,V);break;default:fe&1?O(C,P,Z,re,ce,b,x,N,V):fe&6?L(C,P,Z,re,ce,b,x,N,V):(fe&64||fe&128)&&z.process(C,P,Z,re,ce,b,x,N,V,ke)}J!=null&&ce?oo(J,C&&C.ref,b,P||C,!P):J==null&&C&&C.ref!=null&&oo(C.ref,null,b,C,!0)},p=(C,P,Z,re)=>{if(C==null)i(P.el=a(P.children),Z,re);else{const ce=P.el=C.el;P.children!==C.children&&c(ce,P.children)}},m=(C,P,Z,re)=>{C==null?i(P.el=l(P.children||""),Z,re):P.el=C.el},S=(C,P,Z,re)=>{[C.el,C.anchor]=g(C.children,P,Z,re,C.el,C.anchor)},y=({el:C,anchor:P},Z,re)=>{let ce;for(;C&&C!==P;)ce=f(C),i(C,Z,re),C=ce;i(P,Z,re)},T=({el:C,anchor:P})=>{let Z;for(;C&&C!==P;)Z=f(C),s(C),C=Z;s(P)},O=(C,P,Z,re,ce,b,x,N,V)=>{P.type==="svg"?x="svg":P.type==="math"&&(x="mathml"),C==null?D(P,Z,re,ce,b,x,N,V):E(C,P,ce,b,x,N,V)},D=(C,P,Z,re,ce,b,x,N)=>{let V,z;const{props:J,shapeFlag:fe,transition:ie,dirs:xe}=C;if(V=C.el=o(C.type,b,J&&J.is,J),fe&8?u(V,C.children):fe&16&&G(C.children,V,null,re,ce,xl(C,b),x,N),xe&&us(C,null,re,"created"),w(V,C,C.scopeId,x,re),J){for(const ve in J)ve!=="value"&&!io(ve)&&r(V,ve,null,J[ve],b,re);"value"in J&&r(V,"value",null,J.value,b),(z=J.onVnodeBeforeMount)&&ei(z,re,C)}xe&&us(C,null,re,"beforeMount");const Me=n_(ce,ie);Me&&ie.beforeEnter(V),i(V,P,Z),((z=J&&J.onVnodeMounted)||Me||xe)&&Rn(()=>{z&&ei(z,re,C),Me&&ie.enter(V),xe&&us(C,null,re,"mounted")},ce)},w=(C,P,Z,re,ce)=>{if(Z&&h(C,Z),re)for(let b=0;b<re.length;b++)h(C,re[b]);if(ce){let b=ce.subTree;if(P===b||cp(b.type)&&(b.ssContent===P||b.ssFallback===P)){const x=ce.vnode;w(C,x,x.scopeId,x.slotScopeIds,ce.parent)}}},G=(C,P,Z,re,ce,b,x,N,V=0)=>{for(let z=V;z<C.length;z++){const J=C[z]=N?qi(C[z]):ri(C[z]);_(null,J,P,Z,re,ce,b,x,N)}},E=(C,P,Z,re,ce,b,x)=>{const N=P.el=C.el;let{patchFlag:V,dynamicChildren:z,dirs:J}=P;V|=C.patchFlag&16;const fe=C.props||Et,ie=P.props||Et;let xe;if(Z&&ds(Z,!1),(xe=ie.onVnodeBeforeUpdate)&&ei(xe,Z,P,C),J&&us(P,C,Z,"beforeUpdate"),Z&&ds(Z,!0),(fe.innerHTML&&ie.innerHTML==null||fe.textContent&&ie.textContent==null)&&u(N,""),z?M(C.dynamicChildren,z,N,Z,re,xl(P,ce),b):x||H(C,P,N,null,Z,re,xl(P,ce),b,!1),V>0){if(V&16)W(N,fe,ie,Z,ce);else if(V&2&&fe.class!==ie.class&&r(N,"class",null,ie.class,ce),V&4&&r(N,"style",fe.style,ie.style,ce),V&8){const Me=P.dynamicProps;for(let ve=0;ve<Me.length;ve++){const ye=Me[ve],Ue=fe[ye],we=ie[ye];(we!==Ue||ye==="value")&&r(N,ye,Ue,we,ce,Z)}}V&1&&C.children!==P.children&&u(N,P.children)}else!x&&z==null&&W(N,fe,ie,Z,ce);((xe=ie.onVnodeUpdated)||J)&&Rn(()=>{xe&&ei(xe,Z,P,C),J&&us(P,C,Z,"updated")},re)},M=(C,P,Z,re,ce,b,x)=>{for(let N=0;N<P.length;N++){const V=C[N],z=P[N],J=V.el&&(V.type===Yt||!Vr(V,z)||V.shapeFlag&198)?d(V.el):Z;_(V,z,J,null,re,ce,b,x,!0)}},W=(C,P,Z,re,ce)=>{if(P!==Z){if(P!==Et)for(const b in P)!io(b)&&!(b in Z)&&r(C,b,P[b],null,ce,re);for(const b in Z){if(io(b))continue;const x=Z[b],N=P[b];x!==N&&b!=="value"&&r(C,b,N,x,ce,re)}"value"in Z&&r(C,"value",P.value,Z.value,ce)}},$=(C,P,Z,re,ce,b,x,N,V)=>{const z=P.el=C?C.el:a(""),J=P.anchor=C?C.anchor:a("");let{patchFlag:fe,dynamicChildren:ie,slotScopeIds:xe}=P;xe&&(N=N?N.concat(xe):xe),C==null?(i(z,Z,re),i(J,Z,re),G(P.children||[],Z,J,ce,b,x,N,V)):fe>0&&fe&64&&ie&&C.dynamicChildren?(M(C.dynamicChildren,ie,Z,ce,b,x,N),(P.key!=null||ce&&P===ce.subTree)&&sp(C,P,!0)):H(C,P,Z,J,ce,b,x,N,V)},L=(C,P,Z,re,ce,b,x,N,V)=>{P.slotScopeIds=N,C==null?P.shapeFlag&512?ce.ctx.activate(P,Z,re,x,V):I(P,Z,re,ce,b,x,V):k(C,P,V)},I=(C,P,Z,re,ce,b,x)=>{const N=C.component=S_(C,re,ce);if(Xh(C)&&(N.ctx.renderer=ke),E_(N,!1,x),N.asyncDep){if(ce&&ce.registerDep(N,X,x),!C.el){const V=N.subTree=Dn(os);m(null,V,P,Z),C.placeholder=V.el}}else X(N,C,P,Z,ce,b,x)},k=(C,P,Z)=>{const re=P.component=C.component;if(f_(C,P,Z))if(re.asyncDep&&!re.asyncResolved){q(re,P,Z);return}else re.next=P,re.update();else P.el=C.el,re.vnode=P},X=(C,P,Z,re,ce,b,x)=>{const N=()=>{if(C.isMounted){let{next:fe,bu:ie,u:xe,parent:Me,vnode:ve}=C;{const He=rp(C);if(He){fe&&(fe.el=ve.el,q(C,fe,x)),He.asyncDep.then(()=>{C.isUnmounted||N()});return}}let ye=fe,Ue;ds(C,!1),fe?(fe.el=ve.el,q(C,fe,x)):fe=ve,ie&&ma(ie),(Ue=fe.props&&fe.props.onVnodeBeforeUpdate)&&ei(Ue,Me,fe,ve),ds(C,!0);const we=Nu(C),Pe=C.subTree;C.subTree=we,_(Pe,we,d(Pe.el),_e(Pe),C,ce,b),fe.el=we.el,ye===null&&h_(C,we.el),xe&&Rn(xe,ce),(Ue=fe.props&&fe.props.onVnodeUpdated)&&Rn(()=>ei(Ue,Me,fe,ve),ce)}else{let fe;const{el:ie,props:xe}=P,{bm:Me,m:ve,parent:ye,root:Ue,type:we}=C,Pe=ao(P);ds(C,!1),Me&&ma(Me),!Pe&&(fe=xe&&xe.onVnodeBeforeMount)&&ei(fe,ye,P),ds(C,!0);{Ue.ce&&Ue.ce._def.shadowRoot!==!1&&Ue.ce._injectChildStyle(we);const He=C.subTree=Nu(C);_(null,He,Z,re,C,ce,b),P.el=He.el}if(ve&&Rn(ve,ce),!Pe&&(fe=xe&&xe.onVnodeMounted)){const He=P;Rn(()=>ei(fe,ye,He),ce)}(P.shapeFlag&256||ye&&ao(ye.vnode)&&ye.vnode.shapeFlag&256)&&C.a&&Rn(C.a,ce),C.isMounted=!0,P=Z=re=null}};C.scope.on();const V=C.effect=new Sh(N);C.scope.off();const z=C.update=V.run.bind(V),J=C.job=V.runIfDirty.bind(V);J.i=C,J.id=C.uid,V.scheduler=()=>tu(J),ds(C,!0),z()},q=(C,P,Z)=>{P.component=C;const re=C.vnode.props;C.vnode=P,C.next=null,Yg(C,P.props,re,Z),Qg(C,P.children,Z),Di(),Au(C),Ii()},H=(C,P,Z,re,ce,b,x,N,V=!1)=>{const z=C&&C.children,J=C?C.shapeFlag:0,fe=P.children,{patchFlag:ie,shapeFlag:xe}=P;if(ie>0){if(ie&128){ge(z,fe,Z,re,ce,b,x,N,V);return}else if(ie&256){pe(z,fe,Z,re,ce,b,x,N,V);return}}xe&8?(J&16&&he(z,ce,b),fe!==z&&u(Z,fe)):J&16?xe&16?ge(z,fe,Z,re,ce,b,x,N,V):he(z,ce,b,!0):(J&8&&u(Z,""),xe&16&&G(fe,Z,re,ce,b,x,N,V))},pe=(C,P,Z,re,ce,b,x,N,V)=>{C=C||dr,P=P||dr;const z=C.length,J=P.length,fe=Math.min(z,J);let ie;for(ie=0;ie<fe;ie++){const xe=P[ie]=V?qi(P[ie]):ri(P[ie]);_(C[ie],xe,Z,null,ce,b,x,N,V)}z>J?he(C,ce,b,!0,!1,fe):G(P,Z,re,ce,b,x,N,V,fe)},ge=(C,P,Z,re,ce,b,x,N,V)=>{let z=0;const J=P.length;let fe=C.length-1,ie=J-1;for(;z<=fe&&z<=ie;){const xe=C[z],Me=P[z]=V?qi(P[z]):ri(P[z]);if(Vr(xe,Me))_(xe,Me,Z,null,ce,b,x,N,V);else break;z++}for(;z<=fe&&z<=ie;){const xe=C[fe],Me=P[ie]=V?qi(P[ie]):ri(P[ie]);if(Vr(xe,Me))_(xe,Me,Z,null,ce,b,x,N,V);else break;fe--,ie--}if(z>fe){if(z<=ie){const xe=ie+1,Me=xe<J?P[xe].el:re;for(;z<=ie;)_(null,P[z]=V?qi(P[z]):ri(P[z]),Z,Me,ce,b,x,N,V),z++}}else if(z>ie)for(;z<=fe;)Be(C[z],ce,b,!0),z++;else{const xe=z,Me=z,ve=new Map;for(z=Me;z<=ie;z++){const Ge=P[z]=V?qi(P[z]):ri(P[z]);Ge.key!=null&&ve.set(Ge.key,z)}let ye,Ue=0;const we=ie-Me+1;let Pe=!1,He=0;const $e=new Array(we);for(z=0;z<we;z++)$e[z]=0;for(z=xe;z<=fe;z++){const Ge=C[z];if(Ue>=we){Be(Ge,ce,b,!0);continue}let Xe;if(Ge.key!=null)Xe=ve.get(Ge.key);else for(ye=Me;ye<=ie;ye++)if($e[ye-Me]===0&&Vr(Ge,P[ye])){Xe=ye;break}Xe===void 0?Be(Ge,ce,b,!0):($e[Xe-Me]=z+1,Xe>=He?He=Xe:Pe=!0,_(Ge,P[Xe],Z,null,ce,b,x,N,V),Ue++)}const ct=Pe?i_($e):dr;for(ye=ct.length-1,z=we-1;z>=0;z--){const Ge=Me+z,Xe=P[Ge],Oe=P[Ge+1],v=Ge+1<J?Oe.el||Oe.placeholder:re;$e[z]===0?_(null,Xe,Z,v,ce,b,x,N,V):Pe&&(ye<0||z!==ct[ye]?Te(Xe,Z,v,2):ye--)}}},Te=(C,P,Z,re,ce=null)=>{const{el:b,type:x,transition:N,children:V,shapeFlag:z}=C;if(z&6){Te(C.component.subTree,P,Z,re);return}if(z&128){C.suspense.move(P,Z,re);return}if(z&64){x.move(C,P,Z,ke);return}if(x===Yt){i(b,P,Z);for(let fe=0;fe<V.length;fe++)Te(V[fe],P,Z,re);i(C.anchor,P,Z);return}if(x===_a){y(C,P,Z);return}if(re!==2&&z&1&&N)if(re===0)N.beforeEnter(b),i(b,P,Z),Rn(()=>N.enter(b),ce);else{const{leave:fe,delayLeave:ie,afterLeave:xe}=N,Me=()=>{C.ctx.isUnmounted?s(b):i(b,P,Z)},ve=()=>{b._isLeaving&&b[Ag](!0),fe(b,()=>{Me(),xe&&xe()})};ie?ie(b,Me,ve):ve()}else i(b,P,Z)},Be=(C,P,Z,re=!1,ce=!1)=>{const{type:b,props:x,ref:N,children:V,dynamicChildren:z,shapeFlag:J,patchFlag:fe,dirs:ie,cacheIndex:xe}=C;if(fe===-2&&(ce=!1),N!=null&&(Di(),oo(N,null,Z,C,!0),Ii()),xe!=null&&(P.renderCache[xe]=void 0),J&256){P.ctx.deactivate(C);return}const Me=J&1&&ie,ve=!ao(C);let ye;if(ve&&(ye=x&&x.onVnodeBeforeUnmount)&&ei(ye,P,C),J&6)Y(C.component,Z,re);else{if(J&128){C.suspense.unmount(Z,re);return}Me&&us(C,null,P,"beforeUnmount"),J&64?C.type.remove(C,P,Z,ke,re):z&&!z.hasOnce&&(b!==Yt||fe>0&&fe&64)?he(z,P,Z,!1,!0):(b===Yt&&fe&384||!ce&&J&16)&&he(V,P,Z),re&&se(C)}(ve&&(ye=x&&x.onVnodeUnmounted)||Me)&&Rn(()=>{ye&&ei(ye,P,C),Me&&us(C,null,P,"unmounted")},Z)},se=C=>{const{type:P,el:Z,anchor:re,transition:ce}=C;if(P===Yt){B(Z,re);return}if(P===_a){T(C);return}const b=()=>{s(Z),ce&&!ce.persisted&&ce.afterLeave&&ce.afterLeave()};if(C.shapeFlag&1&&ce&&!ce.persisted){const{leave:x,delayLeave:N}=ce,V=()=>x(Z,b);N?N(C.el,b,V):V()}else b()},B=(C,P)=>{let Z;for(;C!==P;)Z=f(C),s(C),C=Z;s(P)},Y=(C,P,Z)=>{const{bum:re,scope:ce,job:b,subTree:x,um:N,m:V,a:z}=C;Iu(V),Iu(z),re&&ma(re),ce.stop(),b&&(b.flags|=8,Be(x,C,P,Z)),N&&Rn(N,P),Rn(()=>{C.isUnmounted=!0},P)},he=(C,P,Z,re=!1,ce=!1,b=0)=>{for(let x=b;x<C.length;x++)Be(C[x],P,Z,re,ce)},_e=C=>{if(C.shapeFlag&6)return _e(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const P=f(C.anchor||C.el),Z=P&&P[Eg];return Z?f(Z):P};let Ie=!1;const Ne=(C,P,Z)=>{C==null?P._vnode&&Be(P._vnode,null,null,!0):_(P._vnode||null,C,P,null,null,null,Z),P._vnode=C,Ie||(Ie=!0,Au(),Hh(),Ie=!1)},ke={p:_,um:Be,m:Te,r:se,mt:I,mc:G,pc:H,pbc:M,n:_e,o:n};return{render:Ne,hydrate:void 0,createApp:jg(Ne)}}function xl({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ds({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function n_(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function sp(n,e,t=!1){const i=n.children,s=e.children;if(Ye(i)&&Ye(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=qi(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&sp(o,a)),a.type===Ja&&a.patchFlag!==-1&&(a.el=o.el),a.type===os&&!a.el&&(a.el=o.el)}}function i_(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function rp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:rp(e)}function Iu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const s_=Symbol.for("v-scx"),r_=()=>ga(s_);function Bn(n,e,t){return op(n,e,t)}function op(n,e,t=Et){const{immediate:i,deep:s,flush:r,once:o}=t,a=_n({},t),l=e&&i||!e&&r!=="post";let c;if(xo){if(r==="sync"){const h=r_();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=ci,h.resume=ci,h.pause=ci,h}}const u=mn;a.call=(h,g,_)=>fi(h,u,g,_);let d=!1;r==="post"?a.scheduler=h=>{Rn(h,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(h,g)=>{g?h():tu(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=xg(n,e,a);return xo&&(c?c.push(f):l&&f()),f}function o_(n,e,t){const i=this.proxy,s=Bt(n)?n.includes(".")?ap(i,n):()=>i[n]:n.bind(i,i);let r;nt(e)?r=e:(r=e.handler,t=e);const o=Ao(this),a=op(s,r.bind(i),t);return o(),a}function ap(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const a_=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ss(e)}Modifiers`]||n[`${Is(e)}Modifiers`];function l_(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Et;let s=t;const r=e.startsWith("update:"),o=r&&a_(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Bt(u)?u.trim():u)),o.number&&(s=t.map(mc)));let a,l=i[a=hl(e)]||i[a=hl(ss(e))];!l&&r&&(l=i[a=hl(Is(e))]),l&&fi(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,fi(c,n,6,s)}}const c_=new WeakMap;function lp(n,e,t=!1){const i=t?c_:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!nt(n)){const l=c=>{const u=lp(c,e,!0);u&&(a=!0,_n(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(Dt(n)&&i.set(n,null),null):(Ye(r)?r.forEach(l=>o[l]=null):_n(o,r),Dt(n)&&i.set(n,o),o)}function Za(n,e){return!n||!Wa(e)?!1:(e=e.slice(2).replace(/Once$/,""),gt(n,e[0].toLowerCase()+e.slice(1))||gt(n,Is(e))||gt(n,e))}function Nu(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:g,inheritAttrs:_}=n,p=Pa(n);let m,S;try{if(t.shapeFlag&4){const T=s||i,O=T;m=ri(c.call(O,T,u,d,h,f,g)),S=a}else{const T=e;m=ri(T.length>1?T(d,{attrs:a,slots:o,emit:l}):T(d,null)),S=e.props?a:u_(a)}}catch(T){co.length=0,Ya(T,n,1),m=Dn(os)}let y=m;if(S&&_!==!1){const T=Object.keys(S),{shapeFlag:O}=y;T.length&&O&7&&(r&&T.some(Xc)&&(S=d_(S,r)),y=Mr(y,S,!1,!0))}return t.dirs&&(y=Mr(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&nu(y,t.transition),m=y,Pa(p),m}const u_=n=>{let e;for(const t in n)(t==="class"||t==="style"||Wa(t))&&((e||(e={}))[t]=n[t]);return e},d_=(n,e)=>{const t={};for(const i in n)(!Xc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function f_(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Uu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==i[f]&&!Za(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Uu(i,o,c):!0:!!o;return!1}function Uu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!Za(t,r))return!0}return!1}function h_({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const cp=n=>n.__isSuspense;function p_(n,e){e&&e.pendingBranch?Ye(n)?e.effects.push(...n):e.effects.push(n):Sg(n)}const Yt=Symbol.for("v-fgt"),Ja=Symbol.for("v-txt"),os=Symbol.for("v-cmt"),_a=Symbol.for("v-stc"),co=[];let Pn=null;function et(n=!1){co.push(Pn=n?null:[])}function m_(){co.pop(),Pn=co[co.length-1]||null}let vo=1;function Ou(n,e=!1){vo+=n,n<0&&Pn&&e&&(Pn.hasOnce=!0)}function up(n){return n.dynamicChildren=vo>0?Pn||dr:null,m_(),vo>0&&Pn&&Pn.push(n),n}function at(n,e,t,i,s,r){return up(de(n,e,t,i,s,r,!0))}function va(n,e,t,i,s){return up(Dn(n,e,t,i,s,!0))}function dp(n){return n?n.__v_isVNode===!0:!1}function Vr(n,e){return n.type===e.type&&n.key===e.key}const fp=({key:n})=>n??null,xa=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Bt(n)||rn(n)||nt(n)?{i:On,r:n,k:e,f:!!t}:n:null);function de(n,e=null,t=null,i=0,s=null,r=n===Yt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&fp(e),ref:e&&xa(e),scopeId:Vh,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:On};return a?(ru(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Bt(t)?8:16),vo>0&&!o&&Pn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Pn.push(l),l}const Dn=g_;function g_(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Bg)&&(n=os),dp(n)){const a=Mr(n,e,!0);return t&&ru(a,t),vo>0&&!r&&Pn&&(a.shapeFlag&6?Pn[Pn.indexOf(n)]=a:Pn.push(a)),a.patchFlag=-2,a}if(R_(n)&&(n=n.__vccOpts),e){e=__(e);let{class:a,style:l}=e;a&&!Bt(a)&&(e.class=yt(a)),Dt(l)&&(eu(l)&&!Ye(l)&&(l=_n({},l)),e.style=Li(l))}const o=Bt(n)?1:cp(n)?128:Tg(n)?64:Dt(n)?4:nt(n)?2:0;return de(n,e,t,i,s,o,r,!0)}function __(n){return n?eu(n)||Jh(n)?_n({},n):n:null}function Mr(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?x_(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&fp(c),ref:e&&e.ref?t&&r?Ye(r)?r.concat(xa(e)):[r,xa(e)]:xa(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Yt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Mr(n.ssContent),ssFallback:n.ssFallback&&Mr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&nu(u,l.clone(u)),u}function v_(n=" ",e=0){return Dn(Ja,null,n,e)}function uo(n,e){const t=Dn(_a,null,n);return t.staticCount=e,t}function kt(n="",e=!1){return e?(et(),va(os,null,n)):Dn(os,null,n)}function ri(n){return n==null||typeof n=="boolean"?Dn(os):Ye(n)?Dn(Yt,null,n.slice()):dp(n)?qi(n):Dn(Ja,null,String(n))}function qi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Mr(n)}function ru(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ye(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),ru(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Jh(e)?e._ctx=On:s===3&&On&&(On.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else nt(e)?(e={default:e,_ctx:On},t=32):(e=String(e),i&64?(t=16,e=[v_(e)]):t=8);n.children=e,n.shapeFlag|=t}function x_(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=yt([e.class,i.class]));else if(s==="style")e.style=Li([e.style,i.style]);else if(Wa(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ye(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function ei(n,e,t,i=null){fi(n,e,7,[t,i])}const y_=Yh();let M_=0;function S_(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||y_,r={uid:M_++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Xm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ep(i,s),emitsOptions:lp(i,s),emit:null,emitted:null,propsDefaults:Et,inheritAttrs:i.inheritAttrs,ctx:Et,data:Et,props:Et,attrs:Et,slots:Et,refs:Et,setupState:Et,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=l_.bind(null,r),n.ce&&n.ce(r),r}let mn=null;const b_=()=>mn||On;let Ia,Ec;{const n=qa(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Ia=e("__VUE_INSTANCE_SETTERS__",t=>mn=t),Ec=e("__VUE_SSR_SETTERS__",t=>xo=t)}const Ao=n=>{const e=mn;return Ia(n),n.scope.on(),()=>{n.scope.off(),Ia(e)}},Fu=()=>{mn&&mn.scope.off(),Ia(null)};function hp(n){return n.vnode.shapeFlag&4}let xo=!1;function E_(n,e=!1,t=!1){e&&Ec(e);const{props:i,children:s}=n.vnode,r=hp(n);$g(n,i,r,e),Jg(n,s,t||e);const o=r?T_(n,e):void 0;return e&&Ec(!1),o}function T_(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,kg);const{setup:i}=t;if(i){Di();const s=n.setupContext=i.length>1?w_(n):null,r=Ao(n),o=To(i,n,0,[n.props,s]),a=ph(o);if(Ii(),r(),(a||n.sp)&&!ao(n)&&Wh(n),a){if(o.then(Fu,Fu),e)return o.then(l=>{Bu(n,l)}).catch(l=>{Ya(l,n,0)});n.asyncDep=o}else Bu(n,o)}else pp(n)}function Bu(n,e,t){nt(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Dt(e)&&(n.setupState=Fh(e)),pp(n)}function pp(n,e,t){const i=n.type;n.render||(n.render=i.render||ci);{const s=Ao(n);Di();try{Hg(n)}finally{Ii(),s()}}}const A_={get(n,e){return tn(n,"get",""),n[e]}};function w_(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,A_),slots:n.slots,emit:n.emit,expose:e}}function Qa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Fh(ar(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in lo)return lo[t](n)},has(e,t){return t in e||t in lo}})):n.proxy}function R_(n){return nt(n)&&"__vccOpts"in n}const Wt=(n,e)=>_g(n,e,xo),C_="3.5.21";/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Tc;const ku=typeof window<"u"&&window.trustedTypes;if(ku)try{Tc=ku.createPolicy("vue",{createHTML:n=>n})}catch{}const mp=Tc?n=>Tc.createHTML(n):n=>n,P_="http://www.w3.org/2000/svg",L_="http://www.w3.org/1998/Math/MathML",Ai=typeof document<"u"?document:null,Hu=Ai&&Ai.createElement("template"),D_={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Ai.createElementNS(P_,n):e==="mathml"?Ai.createElementNS(L_,n):t?Ai.createElement(n,{is:t}):Ai.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Ai.createTextNode(n),createComment:n=>Ai.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ai.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Hu.innerHTML=mp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Hu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},I_=Symbol("_vtc");function N_(n,e,t){const i=n[I_];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Na=Symbol("_vod"),gp=Symbol("_vsh"),U_={name:"show",beforeMount(n,{value:e},{transition:t}){n[Na]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Gr(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Gr(n,!0),i.enter(n)):i.leave(n,()=>{Gr(n,!1)}):Gr(n,e))},beforeUnmount(n,{value:e}){Gr(n,e)}};function Gr(n,e){n.style.display=e?n[Na]:"none",n[gp]=!e}const O_=Symbol(""),F_=/(?:^|;)\s*display\s*:/;function B_(n,e,t){const i=n.style,s=Bt(t);let r=!1;if(t&&!s){if(e)if(Bt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ya(i,a,"")}else for(const o in e)t[o]==null&&ya(i,o,"");for(const o in t)o==="display"&&(r=!0),ya(i,o,t[o])}else if(s){if(e!==t){const o=i[O_];o&&(t+=";"+o),i.cssText=t,r=F_.test(t)}}else e&&n.removeAttribute("style");Na in n&&(n[Na]=r?i.display:"",n[gp]&&(i.display="none"))}const zu=/\s*!important$/;function ya(n,e,t){if(Ye(t))t.forEach(i=>ya(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=k_(n,e);zu.test(t)?n.setProperty(Is(i),t.replace(zu,""),"important"):n[i]=t}}const Vu=["Webkit","Moz","ms"],yl={};function k_(n,e){const t=yl[e];if(t)return t;let i=ss(e);if(i!=="filter"&&i in n)return yl[e]=i;i=_h(i);for(let s=0;s<Vu.length;s++){const r=Vu[s]+i;if(r in n)return yl[e]=r}return e}const Gu="http://www.w3.org/1999/xlink";function Wu(n,e,t,i,s,r=Wm(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Gu,e.slice(6,e.length)):n.setAttributeNS(Gu,e,t):t==null||r&&!xh(t)?n.removeAttribute(e):n.setAttribute(e,r?"":ls(t)?String(t):t)}function Xu(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?mp(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=xh(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function cr(n,e,t,i){n.addEventListener(e,t,i)}function H_(n,e,t,i){n.removeEventListener(e,t,i)}const ju=Symbol("_vei");function z_(n,e,t,i,s=null){const r=n[ju]||(n[ju]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=V_(e);if(i){const c=r[e]=X_(i,s);cr(n,a,c,l)}else o&&(H_(n,a,o,l),r[e]=void 0)}}const qu=/(?:Once|Passive|Capture)$/;function V_(n){let e;if(qu.test(n)){e={};let i;for(;i=n.match(qu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Is(n.slice(2)),e]}let Ml=0;const G_=Promise.resolve(),W_=()=>Ml||(G_.then(()=>Ml=0),Ml=Date.now());function X_(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;fi(j_(i,t.value),e,5,[i])};return t.value=n,t.attached=W_(),t}function j_(n,e){if(Ye(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const $u=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,q_=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?N_(n,i,o):e==="style"?B_(n,t,i):Wa(e)?Xc(e)||z_(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$_(n,e,i,o))?(Xu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Wu(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Bt(i))?Xu(n,ss(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Wu(n,e,i,o))};function $_(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&$u(e)&&nt(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return $u(e)&&Bt(t)?!1:e in n}const Yu=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ye(e)?t=>ma(e,t):e};function Y_(n){n.target.composing=!0}function Ku(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Sl=Symbol("_assign"),K_={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[Sl]=Yu(s);const r=i||s.props&&s.props.type==="number";cr(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),r&&(a=mc(a)),n[Sl](a)}),t&&cr(n,"change",()=>{n.value=n.value.trim()}),e||(cr(n,"compositionstart",Y_),cr(n,"compositionend",Ku),cr(n,"change",Ku))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Sl]=Yu(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?mc(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l))}},Z_=_n({patchProp:q_},D_);let Zu;function J_(){return Zu||(Zu=e_(Z_))}const Q_=(...n)=>{const e=J_().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=tv(i);if(!s)return;const r=e._component;!nt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,ev(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function ev(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function tv(n){return Bt(n)?document.querySelector(n):n}const nv="modulepreload",iv=function(n){return"/"+n},Ju={},ti=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(t.map(l=>{if(l=iv(l),l in Ju)return;Ju[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":nv,c||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),c)return new Promise((f,h)=>{d.addEventListener("load",f),d.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})},_p="/logo.png";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ou="163",zs={ROTATE:0,DOLLY:1,PAN:2},Vs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sv=0,Qu=1,rv=2,vp=1,xp=2,Ti=3,Ni=0,Mn=1,jn=2,ts=0,gr=1,ed=2,td=3,nd=4,ov=5,Ms=100,av=101,lv=102,cv=103,uv=104,dv=200,fv=201,hv=202,pv=203,Ac=204,wc=205,mv=206,gv=207,_v=208,vv=209,xv=210,yv=211,Mv=212,Sv=213,bv=214,Ev=0,Tv=1,Av=2,yo=3,wv=4,Rv=5,Cv=6,Pv=7,yp=0,Lv=1,Dv=2,ns=0,Iv=1,Nv=2,Uv=3,Mp=4,Ov=5,Fv=6,Bv=7,id="attached",kv="detached",Sp=300,Sr=301,br=302,Rc=303,Cc=304,el=306,Er=1e3,Zi=1001,Ua=1002,gn=1003,bp=1004,eo=1005,Cn=1006,Ma=1007,Ci=1008,is=1009,Hv=1010,zv=1011,Ep=1012,Tp=1013,Tr=1014,ai=1015,Oa=1016,Ap=1017,wp=1018,wo=1020,Vv=35902,Gv=1021,Wv=1022,Yn=1023,Xv=1024,jv=1025,_r=1026,Mo=1027,Rp=1028,Cp=1029,qv=1030,Pp=1031,Lp=1033,bl=33776,El=33777,Tl=33778,Al=33779,sd=35840,rd=35841,od=35842,ad=35843,Dp=36196,ld=37492,cd=37496,ud=37808,dd=37809,fd=37810,hd=37811,pd=37812,md=37813,gd=37814,_d=37815,vd=37816,xd=37817,yd=37818,Md=37819,Sd=37820,bd=37821,wl=36492,Ed=36494,Td=36495,$v=36283,Ad=36284,wd=36285,Rd=36286,So=2300,Ar=2301,Rl=2302,Cd=2400,Pd=2401,Ld=2402,Yv=2500,Kv=0,Ip=1,Pc=2,Zv=3200,Jv=3201,Np=0,Qv=1,Ki="",Gt="srgb",jt="srgb-linear",au="display-p3",tl="display-p3-linear",Fa="linear",Rt="srgb",Ba="rec709",ka="p3",Gs=7680,Dd=519,e0=512,t0=513,n0=514,Up=515,i0=516,s0=517,r0=518,o0=519,Lc=35044,Id="300 es",Pi=2e3,Ha=2001;class Ns{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nd=1234567;const vr=Math.PI/180,wr=180/Math.PI;function Zn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function Kt(n,e,t){return Math.max(e,Math.min(t,n))}function lu(n,e){return(n%e+e)%e}function a0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function l0(n,e,t){return n!==e?(t-n)/(e-n):0}function fo(n,e,t){return(1-t)*n+t*e}function c0(n,e,t,i){return fo(n,e,1-Math.exp(-t*i))}function u0(n,e=1){return e-Math.abs(lu(n,e*2)-e)}function d0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function f0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function h0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function p0(n,e){return n+Math.random()*(e-n)}function m0(n){return n*(.5-Math.random())}function g0(n){n!==void 0&&(Nd=n);let e=Nd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _0(n){return n*vr}function v0(n){return n*wr}function x0(n){return(n&n-1)===0&&n!==0}function y0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function M0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function S0(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),f=o((e-i)/2),h=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*h,a*c);break;case"YXY":n.set(l*h,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Op={DEG2RAD:vr,RAD2DEG:wr,generateUUID:Zn,clamp:Kt,euclideanModulo:lu,mapLinear:a0,inverseLerp:l0,lerp:fo,damp:c0,pingpong:u0,smoothstep:d0,smootherstep:f0,randInt:h0,randFloat:p0,randFloatSpread:m0,seededRandom:g0,degToRad:_0,radToDeg:v0,isPowerOfTwo:x0,ceilPowerOfTwo:y0,floorPowerOfTwo:M0,setQuaternionFromProperEuler:S0,normalize:vt,denormalize:qn};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,t,i,s,r,o,a,l,c){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],_=s[0],p=s[3],m=s[6],S=s[1],y=s[4],T=s[7],O=s[2],D=s[5],w=s[8];return r[0]=o*_+a*S+l*O,r[3]=o*p+a*y+l*D,r[6]=o*m+a*T+l*w,r[1]=c*_+u*S+d*O,r[4]=c*p+u*y+d*D,r[7]=c*m+u*T+d*w,r[2]=f*_+h*S+g*O,r[5]=f*p+h*y+g*D,r[8]=f*m+h*T+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*r,h=c*r-o*l,g=t*d+i*f+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*c-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=f*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=h*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Cl.makeScale(e,t)),this}rotate(e){return this.premultiply(Cl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cl=new ot;function Fp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function bo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function b0(){const n=bo("canvas");return n.style.display="block",n}const Ud={};function Bp(n){n in Ud||(Ud[n]=!0,console.warn(n))}const Od=new ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fd=new ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Bo={[jt]:{transfer:Fa,primaries:Ba,toReference:n=>n,fromReference:n=>n},[Gt]:{transfer:Rt,primaries:Ba,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[tl]:{transfer:Fa,primaries:ka,toReference:n=>n.applyMatrix3(Fd),fromReference:n=>n.applyMatrix3(Od)},[au]:{transfer:Rt,primaries:ka,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Fd),fromReference:n=>n.applyMatrix3(Od).convertLinearToSRGB()}},E0=new Set([jt,tl]),_t={enabled:!0,_workingColorSpace:jt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!E0.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Bo[e].toReference,s=Bo[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Bo[n].primaries},getTransfer:function(n){return n===Ki?Fa:Bo[n].transfer}};function xr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Pl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ws;class T0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ws===void 0&&(Ws=bo("canvas")),Ws.width=e.width,Ws.height=e.height;const i=Ws.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ws}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xr(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xr(t[i]/255)*255):t[i]=xr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let A0=0;class kp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=Zn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ll(s[o].image)):r.push(Ll(s[o]))}else r=Ll(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Ll(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?T0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let w0=0;class Xt extends Ns{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,i=Zi,s=Zi,r=Cn,o=Ci,a=Yn,l=is,c=Xt.DEFAULT_ANISOTROPY,u=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=Zn(),this.name="",this.source=new kp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Er:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case Ua:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Er:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case Ua:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Sp;Xt.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,i=0,s=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,T=(h+1)/2,O=(m+1)/2,D=(u+f)/4,w=(d+_)/4,G=(g+p)/4;return y>T&&y>O?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=D/i,r=w/i):T>O?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=D/s,r=G/s):O<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),i=w/r,s=G/r),this.set(i,s,r,t),this}let S=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(d-_)/S,this.z=(f-u)/S,this.w=Math.acos((c+h+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class R0 extends Ns{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const r=new Xt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new kp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ps extends R0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Hp extends Xt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class C0 extends Xt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const f=r[o+0],h=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==f||c!==h||u!==g){let p=1-a;const m=l*f+c*h+u*g+d*_,S=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const O=Math.sqrt(y),D=Math.atan2(O,m*S);p=Math.sin(p*D)/O,a=Math.sin(a*D)/O}const T=a*S;if(l=l*p+f*T,c=c*p+h*T,u=u*p+g*T,d=d*p+_*T,p===1-a){const O=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=O,c*=O,u*=O,d*=O}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],h=r[o+2],g=r[o+3];return e[t]=a*g+u*d+l*h-c*f,e[t+1]=l*g+u*f+c*d-a*h,e[t+2]=c*g+u*h+a*f-l*d,e[t+3]=u*g-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),h=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"YZX":this._x=f*u*d+c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d-f*h*g;break;case"XZY":this._x=f*u*d-c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*s+t*this._y,this._z=h*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dl.copy(this).projectOnVector(e),this.sub(Dl)}reflect(e){return this.sub(Dl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dl=new U,Bd=new hi;class nn{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vn):Vn.fromBufferAttribute(r,o),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ko.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ko.copy(i.boundingBox)),ko.applyMatrix4(e.matrixWorld),this.union(ko)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wr),Ho.subVectors(this.max,Wr),Xs.subVectors(e.a,Wr),js.subVectors(e.b,Wr),qs.subVectors(e.c,Wr),ki.subVectors(js,Xs),Hi.subVectors(qs,js),fs.subVectors(Xs,qs);let t=[0,-ki.z,ki.y,0,-Hi.z,Hi.y,0,-fs.z,fs.y,ki.z,0,-ki.x,Hi.z,0,-Hi.x,fs.z,0,-fs.x,-ki.y,ki.x,0,-Hi.y,Hi.x,0,-fs.y,fs.x,0];return!Il(t,Xs,js,qs,Ho)||(t=[1,0,0,0,1,0,0,0,1],!Il(t,Xs,js,qs,Ho))?!1:(zo.crossVectors(ki,Hi),t=[zo.x,zo.y,zo.z],Il(t,Xs,js,qs,Ho))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xi=[new U,new U,new U,new U,new U,new U,new U,new U],Vn=new U,ko=new nn,Xs=new U,js=new U,qs=new U,ki=new U,Hi=new U,fs=new U,Wr=new U,Ho=new U,zo=new U,hs=new U;function Il(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){hs.fromArray(n,r);const a=s.x*Math.abs(hs.x)+s.y*Math.abs(hs.y)+s.z*Math.abs(hs.z),l=e.dot(hs),c=t.dot(hs),u=i.dot(hs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const P0=new nn,Xr=new U,Nl=new U;class mi{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):P0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xr.subVectors(e,this.center);const t=Xr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Xr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xr.copy(e.center).add(Nl)),this.expandByPoint(Xr.copy(e.center).sub(Nl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yi=new U,Ul=new U,Vo=new U,zi=new U,Ol=new U,Go=new U,Fl=new U;class Dr{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ul.copy(e).add(t).multiplyScalar(.5),Vo.copy(t).sub(e).normalize(),zi.copy(this.origin).sub(Ul);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Vo),a=zi.dot(this.direction),l=-zi.dot(Vo),c=zi.lengthSq(),u=Math.abs(1-o*o);let d,f,h,g;if(u>0)if(d=o*l-a,f=o*a-l,g=r*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ul).addScaledVector(Vo,f),h}intersectSphere(e,t){yi.subVectors(e.center,this.origin);const i=yi.dot(this.direction),s=yi.dot(yi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,i,s,r){Ol.subVectors(t,e),Go.subVectors(i,e),Fl.crossVectors(Ol,Go);let o=this.direction.dot(Fl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zi.subVectors(this.origin,e);const l=a*this.direction.dot(Go.crossVectors(zi,Go));if(l<0)return null;const c=a*this.direction.dot(Ol.cross(zi));if(c<0||l+c>o)return null;const u=-a*zi.dot(Fl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(e,t,i,s,r,o,a,l,c,u,d,f,h,g,_,p){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,f,h,g,_,p)}set(e,t,i,s,r,o,a,l,c,u,d,f,h,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=f,m[3]=h,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/$s.setFromMatrixColumn(e,0).length(),r=1/$s.setFromMatrixColumn(e,1).length(),o=1/$s.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,h=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+h*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,g=c*u,_=c*d;t[0]=f+_*a,t[4]=g*a-h,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,g=c*u,_=c*d;t[0]=f-_*a,t[4]=-o*d,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,h=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=g*c-h,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=h*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*d,t[8]=g*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,h=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+_,t[5]=o*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=a*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(L0,e,D0)}lookAt(e,t,i){const s=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),Vi.crossVectors(i,An),Vi.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Vi.crossVectors(i,An)),Vi.normalize(),Wo.crossVectors(An,Vi),s[0]=Vi.x,s[4]=Wo.x,s[8]=An.x,s[1]=Vi.y,s[5]=Wo.y,s[9]=An.y,s[2]=Vi.z,s[6]=Wo.z,s[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],_=i[6],p=i[10],m=i[14],S=i[3],y=i[7],T=i[11],O=i[15],D=s[0],w=s[4],G=s[8],E=s[12],M=s[1],W=s[5],$=s[9],L=s[13],I=s[2],k=s[6],X=s[10],q=s[14],H=s[3],pe=s[7],ge=s[11],Te=s[15];return r[0]=o*D+a*M+l*I+c*H,r[4]=o*w+a*W+l*k+c*pe,r[8]=o*G+a*$+l*X+c*ge,r[12]=o*E+a*L+l*q+c*Te,r[1]=u*D+d*M+f*I+h*H,r[5]=u*w+d*W+f*k+h*pe,r[9]=u*G+d*$+f*X+h*ge,r[13]=u*E+d*L+f*q+h*Te,r[2]=g*D+_*M+p*I+m*H,r[6]=g*w+_*W+p*k+m*pe,r[10]=g*G+_*$+p*X+m*ge,r[14]=g*E+_*L+p*q+m*Te,r[3]=S*D+y*M+T*I+O*H,r[7]=S*w+y*W+T*k+O*pe,r[11]=S*G+y*$+T*X+O*ge,r[15]=S*E+y*L+T*q+O*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*h-i*l*h)+_*(+t*l*h-t*c*f+r*o*f-s*o*h+s*c*u-r*l*u)+p*(+t*c*d-t*a*h-r*o*d+i*o*h+r*a*u-i*c*u)+m*(-s*a*u-t*l*d+t*a*f+s*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],_=e[13],p=e[14],m=e[15],S=d*p*c-_*f*c+_*l*h-a*p*h-d*l*m+a*f*m,y=g*f*c-u*p*c-g*l*h+o*p*h+u*l*m-o*f*m,T=u*_*c-g*d*c+g*a*h-o*_*h-u*a*m+o*d*m,O=g*d*l-u*_*l-g*a*f+o*_*f+u*a*p-o*d*p,D=t*S+i*y+s*T+r*O;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/D;return e[0]=S*w,e[1]=(_*f*r-d*p*r-_*s*h+i*p*h+d*s*m-i*f*m)*w,e[2]=(a*p*r-_*l*r+_*s*c-i*p*c-a*s*m+i*l*m)*w,e[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*h-i*l*h)*w,e[4]=y*w,e[5]=(u*p*r-g*f*r+g*s*h-t*p*h-u*s*m+t*f*m)*w,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*m-t*l*m)*w,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*h+t*l*h)*w,e[8]=T*w,e[9]=(g*d*r-u*_*r-g*i*h+t*_*h+u*i*m-t*d*m)*w,e[10]=(o*_*r-g*a*r+g*i*c-t*_*c-o*i*m+t*a*m)*w,e[11]=(u*a*r-o*d*r-u*i*c+t*d*c+o*i*h-t*a*h)*w,e[12]=O*w,e[13]=(u*_*s-g*d*s+g*i*f-t*_*f-u*i*p+t*d*p)*w,e[14]=(g*a*s-o*_*s-g*i*l+t*_*l+o*i*p-t*a*p)*w,e[15]=(o*d*s-u*a*s+u*i*l-t*d*l-o*i*f+t*a*f)*w,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,f=r*c,h=r*u,g=r*d,_=o*u,p=o*d,m=a*d,S=l*c,y=l*u,T=l*d,O=i.x,D=i.y,w=i.z;return s[0]=(1-(_+m))*O,s[1]=(h+T)*O,s[2]=(g-y)*O,s[3]=0,s[4]=(h-T)*D,s[5]=(1-(f+m))*D,s[6]=(p+S)*D,s[7]=0,s[8]=(g+y)*w,s[9]=(p-S)*w,s[10]=(1-(f+_))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=$s.set(s[0],s[1],s[2]).length();const o=$s.set(s[4],s[5],s[6]).length(),a=$s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Gn.copy(this);const c=1/r,u=1/o,d=1/a;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=d,Gn.elements[9]*=d,Gn.elements[10]*=d,t.setFromRotationMatrix(Gn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Pi){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let h,g;if(a===Pi)h=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ha)h=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Pi){const l=this.elements,c=1/(t-e),u=1/(i-s),d=1/(o-r),f=(t+e)*c,h=(i+s)*u;let g,_;if(a===Pi)g=(o+r)*d,_=-2*d;else if(a===Ha)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const $s=new U,Gn=new Ke,L0=new U(0,0,0),D0=new U(1,1,1),Vi=new U,Wo=new U,An=new U,kd=new Ke,Hd=new hi;class pi{constructor(e=0,t=0,i=0,s=pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return kd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hd.setFromEuler(this),this.setFromQuaternion(Hd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pi.DEFAULT_ORDER="XYZ";class cu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let I0=0;const zd=new U,Ys=new hi,Mi=new Ke,Xo=new U,jr=new U,N0=new U,U0=new hi,Vd=new U(1,0,0),Gd=new U(0,1,0),Wd=new U(0,0,1),Xd={type:"added"},O0={type:"removed"},Ks={type:"childadded",child:null},Bl={type:"childremoved",child:null};class Lt extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new U,t=new pi,i=new hi,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ke},normalMatrix:{value:new ot}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(Vd,e)}rotateY(e){return this.rotateOnAxis(Gd,e)}rotateZ(e){return this.rotateOnAxis(Wd,e)}translateOnAxis(e,t){return zd.copy(e).applyQuaternion(this.quaternion),this.position.add(zd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vd,e)}translateY(e){return this.translateOnAxis(Gd,e)}translateZ(e){return this.translateOnAxis(Wd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Xo.copy(e):Xo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(jr,Xo,this.up):Mi.lookAt(Xo,jr,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),Ys.setFromRotationMatrix(Mi),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xd),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(O0),Bl.child=e,this.dispatchEvent(Bl),Bl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xd),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,e,N0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,U0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Lt.DEFAULT_UP=new U(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new U,Si=new U,kl=new U,bi=new U,Zs=new U,Js=new U,jd=new U,Hl=new U,zl=new U,Vl=new U;class $n{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Wn.subVectors(e,t),s.cross(Wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Wn.subVectors(s,t),Si.subVectors(i,t),kl.subVectors(e,t);const o=Wn.dot(Wn),a=Wn.dot(Si),l=Wn.dot(kl),c=Si.dot(Si),u=Si.dot(kl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-h-g,g,h)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l)}static isFrontFacing(e,t,i,s){return Wn.subVectors(i,t),Si.subVectors(e,t),Wn.cross(Si).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Wn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return $n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return $n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Zs.subVectors(s,i),Js.subVectors(r,i),Hl.subVectors(e,i);const l=Zs.dot(Hl),c=Js.dot(Hl);if(l<=0&&c<=0)return t.copy(i);zl.subVectors(e,s);const u=Zs.dot(zl),d=Js.dot(zl);if(u>=0&&d<=u)return t.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Zs,o);Vl.subVectors(e,r);const h=Zs.dot(Vl),g=Js.dot(Vl);if(g>=0&&h<=g)return t.copy(r);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Js,a);const p=u*g-h*d;if(p<=0&&d-u>=0&&h-g>=0)return jd.subVectors(r,s),a=(d-u)/(d-u+(h-g)),t.copy(s).addScaledVector(jd,a);const m=1/(p+_+f);return o=_*m,a=f*m,t.copy(i).addScaledVector(Zs,o).addScaledVector(Js,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},jo={h:0,s:0,l:0};function Gl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=_t.workingColorSpace){return this.r=e,this.g=t,this.b=i,_t.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=_t.workingColorSpace){if(e=lu(e,1),t=Kt(t,0,1),i=Kt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Gl(o,r,e+1/3),this.g=Gl(o,r,e),this.b=Gl(o,r,e-1/3)}return _t.toWorkingColorSpace(this,s),this}setStyle(e,t=Gt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const i=zp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}copyLinearToSRGB(e){return this.r=Pl(e.r),this.g=Pl(e.g),this.b=Pl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return _t.fromWorkingColorSpace(en.copy(this),e),Math.round(Kt(en.r*255,0,255))*65536+Math.round(Kt(en.g*255,0,255))*256+Math.round(Kt(en.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(en.copy(this),t);const i=en.r,s=en.g,r=en.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Gt){_t.fromWorkingColorSpace(en.copy(this),e);const t=en.r,i=en.g,s=en.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+t,Gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Gi),e.getHSL(jo);const i=fo(Gi.h,jo.h,t),s=fo(Gi.s,jo.s,t),r=fo(Gi.l,jo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new qe;qe.NAMES=zp;let F0=0;class ui extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=gr,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ac,this.blendDst=wc,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(i.blending=this.blending),this.side!==Ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ac&&(i.blendSrc=this.blendSrc),this.blendDst!==wc&&(i.blendDst=this.blendDst),this.blendEquation!==Ms&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class li extends ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=yp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ft=new U,qo=new Ve;class Zt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Lc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Bp("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)qo.fromBufferAttribute(this,t),qo.applyMatrix3(e),this.setXY(t,qo.x,qo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lc&&(e.usage=this.usage),e}}class Vp extends Zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Gp extends Zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class di extends Zt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let B0=0;const In=new Ke,Wl=new Lt,Qs=new U,wn=new nn,qr=new nn,Vt=new U;class kn extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fp(e)?Gp:Vp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ot().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,t,i){return In.makeTranslation(e,t,i),this.applyMatrix4(In),this}scale(e,t,i){return In.makeScale(e,t,i),this.applyMatrix4(In),this}lookAt(e){return Wl.lookAt(e),Wl.updateMatrix(),this.applyMatrix4(Wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new di(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];qr.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(wn.min,qr.min),wn.expandByPoint(Vt),Vt.addVectors(wn.max,qr.max),wn.expandByPoint(Vt)):(wn.expandByPoint(qr.min),wn.expandByPoint(qr.max))}wn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Vt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Vt.fromBufferAttribute(a,c),l&&(Qs.fromBufferAttribute(e,c),Vt.add(Qs)),s=Math.max(s,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let G=0;G<i.count;G++)a[G]=new U,l[G]=new U;const c=new U,u=new U,d=new U,f=new Ve,h=new Ve,g=new Ve,_=new U,p=new U;function m(G,E,M){c.fromBufferAttribute(i,G),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),f.fromBufferAttribute(r,G),h.fromBufferAttribute(r,E),g.fromBufferAttribute(r,M),u.sub(c),d.sub(c),h.sub(f),g.sub(f);const W=1/(h.x*g.y-g.x*h.y);isFinite(W)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(W),p.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(W),a[G].add(_),a[E].add(_),a[M].add(_),l[G].add(p),l[E].add(p),l[M].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let G=0,E=S.length;G<E;++G){const M=S[G],W=M.start,$=M.count;for(let L=W,I=W+$;L<I;L+=3)m(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const y=new U,T=new U,O=new U,D=new U;function w(G){O.fromBufferAttribute(s,G),D.copy(O);const E=a[G];y.copy(E),y.sub(O.multiplyScalar(O.dot(E))).normalize(),T.crossVectors(D,E);const W=T.dot(l[G])<0?-1:1;o.setXYZW(G,y.x,y.y,y.z,W)}for(let G=0,E=S.length;G<E;++G){const M=S[G],W=M.start,$=M.count;for(let L=W,I=W+$;L<I;L+=3)w(e.getX(L+0)),w(e.getX(L+1)),w(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,u=new U,d=new U;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*u;for(let m=0;m<u;m++)f[g++]=c[h++]}return new Zt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qd=new Ke,ps=new Dr,$o=new mi,$d=new U,er=new U,tr=new U,nr=new U,Xl=new U,Yo=new U,Ko=new Ve,Zo=new Ve,Jo=new Ve,Yd=new U,Kd=new U,Zd=new U,Qo=new U,ea=new U;class Ln extends Lt{constructor(e=new kn,t=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Yo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Xl.fromBufferAttribute(d,e),o?Yo.addScaledVector(Xl,u):Yo.addScaledVector(Xl.sub(t),u))}t.add(Yo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$o.copy(i.boundingSphere),$o.applyMatrix4(r),ps.copy(e.ray).recast(e.near),!($o.containsPoint(ps.origin)===!1&&(ps.intersectSphere($o,$d)===null||ps.origin.distanceToSquared($d)>(e.far-e.near)**2))&&(qd.copy(r).invert(),ps.copy(e.ray).applyMatrix4(qd),!(i.boundingBox!==null&&ps.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ps)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],S=Math.max(p.start,h.start),y=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let T=S,O=y;T<O;T+=3){const D=a.getX(T),w=a.getX(T+1),G=a.getX(T+2);s=ta(this,m,e,i,c,u,d,D,w,G),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let p=g,m=_;p<m;p+=3){const S=a.getX(p),y=a.getX(p+1),T=a.getX(p+2);s=ta(this,o,e,i,c,u,d,S,y,T),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],S=Math.max(p.start,h.start),y=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let T=S,O=y;T<O;T+=3){const D=T,w=T+1,G=T+2;s=ta(this,m,e,i,c,u,d,D,w,G),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let p=g,m=_;p<m;p+=3){const S=p,y=p+1,T=p+2;s=ta(this,o,e,i,c,u,d,S,y,T),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function k0(n,e,t,i,s,r,o,a){let l;if(e.side===Mn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ni,a),l===null)return null;ea.copy(a),ea.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ea);return c<t.near||c>t.far?null:{distance:c,point:ea.clone(),object:n}}function ta(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,er),n.getVertexPosition(l,tr),n.getVertexPosition(c,nr);const u=k0(n,e,t,i,er,tr,nr,Qo);if(u){s&&(Ko.fromBufferAttribute(s,a),Zo.fromBufferAttribute(s,l),Jo.fromBufferAttribute(s,c),u.uv=$n.getInterpolation(Qo,er,tr,nr,Ko,Zo,Jo,new Ve)),r&&(Ko.fromBufferAttribute(r,a),Zo.fromBufferAttribute(r,l),Jo.fromBufferAttribute(r,c),u.uv1=$n.getInterpolation(Qo,er,tr,nr,Ko,Zo,Jo,new Ve)),o&&(Yd.fromBufferAttribute(o,a),Kd.fromBufferAttribute(o,l),Zd.fromBufferAttribute(o,c),u.normal=$n.getInterpolation(Qo,er,tr,nr,Yd,Kd,Zd,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new U,materialIndex:0};$n.getNormal(er,tr,nr,d.normal),u.face=d}return u}class Ro extends kn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new di(c,3)),this.setAttribute("normal",new di(u,3)),this.setAttribute("uv",new di(d,2));function g(_,p,m,S,y,T,O,D,w,G,E){const M=T/w,W=O/G,$=T/2,L=O/2,I=D/2,k=w+1,X=G+1;let q=0,H=0;const pe=new U;for(let ge=0;ge<X;ge++){const Te=ge*W-L;for(let Be=0;Be<k;Be++){const se=Be*M-$;pe[_]=se*S,pe[p]=Te*y,pe[m]=I,c.push(pe.x,pe.y,pe.z),pe[_]=0,pe[p]=0,pe[m]=D>0?1:-1,u.push(pe.x,pe.y,pe.z),d.push(Be/w),d.push(1-ge/G),q+=1}}for(let ge=0;ge<G;ge++)for(let Te=0;Te<w;Te++){const Be=f+Te+k*ge,se=f+Te+k*(ge+1),B=f+(Te+1)+k*(ge+1),Y=f+(Te+1)+k*ge;l.push(Be,se,Y),l.push(se,B,Y),H+=6}a.addGroup(h,H,E),h+=H,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ro(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function dn(n){const e={};for(let t=0;t<n.length;t++){const i=Rr(n[t]);for(const s in i)e[s]=i[s]}return e}function H0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Wp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const z0={clone:Rr,merge:dn};var V0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,G0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class as extends ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=V0,this.fragmentShader=G0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rr(e.uniforms),this.uniformsGroups=H0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Xp extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new U,Jd=new Ve,Qd=new Ve;class hn extends Xp{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wr*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,t){return this.getViewBounds(e,Jd,Qd),t.subVectors(Qd,Jd)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ir=-90,sr=1;class W0 extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hn(ir,sr,e,t);s.layers=this.layers,this.add(s);const r=new hn(ir,sr,e,t);r.layers=this.layers,this.add(r);const o=new hn(ir,sr,e,t);o.layers=this.layers,this.add(o);const a=new hn(ir,sr,e,t);a.layers=this.layers,this.add(a);const l=new hn(ir,sr,e,t);l.layers=this.layers,this.add(l);const c=new hn(ir,sr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Pi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ha)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class jp extends Xt{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Sr,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class X0 extends Ps{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new jp(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ro(5,5,5),r=new as({name:"CubemapFromEquirect",uniforms:Rr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:ts});r.uniforms.tEquirect.value=t;const o=new Ln(s,r),a=t.minFilter;return t.minFilter===Ci&&(t.minFilter=Cn),new W0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const jl=new U,j0=new U,q0=new ot;class $i{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=jl.subVectors(i,t).cross(j0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(jl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||q0.getNormalMatrix(e),s=this.coplanarPoint(jl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new mi,na=new U;class nl{constructor(e=new $i,t=new $i,i=new $i,s=new $i,r=new $i,o=new $i){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Pi){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],f=s[7],h=s[8],g=s[9],_=s[10],p=s[11],m=s[12],S=s[13],y=s[14],T=s[15];if(i[0].setComponents(l-r,f-c,p-h,T-m).normalize(),i[1].setComponents(l+r,f+c,p+h,T+m).normalize(),i[2].setComponents(l+o,f+u,p+g,T+S).normalize(),i[3].setComponents(l-o,f-u,p-g,T-S).normalize(),i[4].setComponents(l-a,f-d,p-_,T-y).normalize(),t===Pi)i[5].setComponents(l+a,f+d,p+_,T+y).normalize();else if(t===Ha)i[5].setComponents(a,d,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){return ms.center.set(0,0,0),ms.radius=.7071067811865476,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(na.x=s.normal.x>0?e.max.x:e.min.x,na.y=s.normal.y>0?e.max.y:e.min.y,na.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(na)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function $0(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l._updateRange,f=l.updateRanges;if(n.bindBuffer(c,a),d.count===-1&&f.length===0&&n.bufferSubData(c,0,u),f.length!==0){for(let h=0,g=f.length;h<g;h++){const _=f[h];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class il extends kn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,f=t/l,h=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const S=m*f-o;for(let y=0;y<c;y++){const T=y*d-r;g.push(T,-S,0),_.push(0,0,1),p.push(y/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){const y=S+c*m,T=S+c*(m+1),O=S+1+c*(m+1),D=S+1+c*m;h.push(y,T,D),h.push(T,O,D)}this.setIndex(h),this.setAttribute("position",new di(g,3)),this.setAttribute("normal",new di(_,3)),this.setAttribute("uv",new di(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new il(e.width,e.height,e.widthSegments,e.heightSegments)}}var Y0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,K0=`#ifdef USE_ALPHAHASH
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
#endif`,Z0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,J0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ex=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tx=`#ifdef USE_AOMAP
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
#endif`,nx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ix=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,sx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,rx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ox=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ax=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lx=`#ifdef USE_IRIDESCENCE
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
#endif`,cx=`#ifdef USE_BUMPMAP
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
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,px=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_x=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vx=`#define PI 3.141592653589793
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
} // validated`,xx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yx=`vec3 transformedNormal = objectNormal;
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
#endif`,Mx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ex=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ax=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,wx=`#ifdef USE_ENVMAP
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
#endif`,Rx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cx=`#ifdef USE_ENVMAP
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
#endif`,Px=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lx=`#ifdef USE_ENVMAP
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
#endif`,Dx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ix=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ux=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ox=`#ifdef USE_GRADIENTMAP
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
}`,Fx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Bx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zx=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
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
#endif`,Vx=`#ifdef USE_ENVMAP
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
#endif`,Gx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qx=`PhysicalMaterial material;
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
#endif`,$x=`struct PhysicalMaterial {
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
}`,Yx=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Kx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ey=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ty=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ny=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ry=`#if defined( USE_POINTS_UV )
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
#endif`,oy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ay=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ly=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uy=`#ifdef USE_MORPHNORMALS
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
#endif`,dy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,fy=`#ifdef USE_MORPHTARGETS
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
#endif`,hy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,py=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,my=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_y=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vy=`#ifdef USE_NORMALMAP
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
#endif`,xy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,My=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,by=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ey=`vec3 packNormalToRGB( const in vec3 normal ) {
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
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
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
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ty=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ay=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ry=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Py=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ly=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return shadow;
	}
#endif`,Dy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Iy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ny=`float getShadowMask() {
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
}`,Uy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Oy=`#ifdef USE_SKINNING
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
#endif`,Fy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,By=`#ifdef USE_SKINNING
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
#endif`,ky=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vy=`#ifndef saturate
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gy=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wy=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$y=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ky=`uniform sampler2D t2D;
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
}`,Zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tM=`#include <common>
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
}`,nM=`#if DEPTH_PACKING == 3200
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
	#endif
}`,iM=`#define DISTANCE
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
}`,sM=`#define DISTANCE
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
}`,rM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aM=`uniform float scale;
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
}`,lM=`uniform vec3 diffuse;
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
}`,cM=`#include <common>
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
}`,uM=`uniform vec3 diffuse;
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
}`,dM=`#define LAMBERT
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
}`,fM=`#define LAMBERT
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
}`,hM=`#define MATCAP
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
}`,pM=`#define MATCAP
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
}`,mM=`#define NORMAL
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
}`,gM=`#define NORMAL
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
}`,_M=`#define PHONG
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
}`,vM=`#define PHONG
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
}`,xM=`#define STANDARD
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
}`,yM=`#define STANDARD
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
}`,MM=`#define TOON
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
}`,SM=`#define TOON
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
}`,bM=`uniform float size;
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
}`,EM=`uniform vec3 diffuse;
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
}`,TM=`#include <common>
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
}`,AM=`uniform vec3 color;
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
}`,wM=`uniform float rotation;
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
}`,RM=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:Y0,alphahash_pars_fragment:K0,alphamap_fragment:Z0,alphamap_pars_fragment:J0,alphatest_fragment:Q0,alphatest_pars_fragment:ex,aomap_fragment:tx,aomap_pars_fragment:nx,batching_pars_vertex:ix,batching_vertex:sx,begin_vertex:rx,beginnormal_vertex:ox,bsdfs:ax,iridescence_fragment:lx,bumpmap_pars_fragment:cx,clipping_planes_fragment:ux,clipping_planes_pars_fragment:dx,clipping_planes_pars_vertex:fx,clipping_planes_vertex:hx,color_fragment:px,color_pars_fragment:mx,color_pars_vertex:gx,color_vertex:_x,common:vx,cube_uv_reflection_fragment:xx,defaultnormal_vertex:yx,displacementmap_pars_vertex:Mx,displacementmap_vertex:Sx,emissivemap_fragment:bx,emissivemap_pars_fragment:Ex,colorspace_fragment:Tx,colorspace_pars_fragment:Ax,envmap_fragment:wx,envmap_common_pars_fragment:Rx,envmap_pars_fragment:Cx,envmap_pars_vertex:Px,envmap_physical_pars_fragment:Vx,envmap_vertex:Lx,fog_vertex:Dx,fog_pars_vertex:Ix,fog_fragment:Nx,fog_pars_fragment:Ux,gradientmap_pars_fragment:Ox,lightmap_fragment:Fx,lightmap_pars_fragment:Bx,lights_lambert_fragment:kx,lights_lambert_pars_fragment:Hx,lights_pars_begin:zx,lights_toon_fragment:Gx,lights_toon_pars_fragment:Wx,lights_phong_fragment:Xx,lights_phong_pars_fragment:jx,lights_physical_fragment:qx,lights_physical_pars_fragment:$x,lights_fragment_begin:Yx,lights_fragment_maps:Kx,lights_fragment_end:Zx,logdepthbuf_fragment:Jx,logdepthbuf_pars_fragment:Qx,logdepthbuf_pars_vertex:ey,logdepthbuf_vertex:ty,map_fragment:ny,map_pars_fragment:iy,map_particle_fragment:sy,map_particle_pars_fragment:ry,metalnessmap_fragment:oy,metalnessmap_pars_fragment:ay,morphinstance_vertex:ly,morphcolor_vertex:cy,morphnormal_vertex:uy,morphtarget_pars_vertex:dy,morphtarget_vertex:fy,normal_fragment_begin:hy,normal_fragment_maps:py,normal_pars_fragment:my,normal_pars_vertex:gy,normal_vertex:_y,normalmap_pars_fragment:vy,clearcoat_normal_fragment_begin:xy,clearcoat_normal_fragment_maps:yy,clearcoat_pars_fragment:My,iridescence_pars_fragment:Sy,opaque_fragment:by,packing:Ey,premultiplied_alpha_fragment:Ty,project_vertex:Ay,dithering_fragment:wy,dithering_pars_fragment:Ry,roughnessmap_fragment:Cy,roughnessmap_pars_fragment:Py,shadowmap_pars_fragment:Ly,shadowmap_pars_vertex:Dy,shadowmap_vertex:Iy,shadowmask_pars_fragment:Ny,skinbase_vertex:Uy,skinning_pars_vertex:Oy,skinning_vertex:Fy,skinnormal_vertex:By,specularmap_fragment:ky,specularmap_pars_fragment:Hy,tonemapping_fragment:zy,tonemapping_pars_fragment:Vy,transmission_fragment:Gy,transmission_pars_fragment:Wy,uv_pars_fragment:Xy,uv_pars_vertex:jy,uv_vertex:qy,worldpos_vertex:$y,background_vert:Yy,background_frag:Ky,backgroundCube_vert:Zy,backgroundCube_frag:Jy,cube_vert:Qy,cube_frag:eM,depth_vert:tM,depth_frag:nM,distanceRGBA_vert:iM,distanceRGBA_frag:sM,equirect_vert:rM,equirect_frag:oM,linedashed_vert:aM,linedashed_frag:lM,meshbasic_vert:cM,meshbasic_frag:uM,meshlambert_vert:dM,meshlambert_frag:fM,meshmatcap_vert:hM,meshmatcap_frag:pM,meshnormal_vert:mM,meshnormal_frag:gM,meshphong_vert:_M,meshphong_frag:vM,meshphysical_vert:xM,meshphysical_frag:yM,meshtoon_vert:MM,meshtoon_frag:SM,points_vert:bM,points_frag:EM,shadow_vert:TM,shadow_frag:AM,sprite_vert:wM,sprite_frag:RM},Re={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},oi={basic:{uniforms:dn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:dn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new qe(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:dn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:dn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:dn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new qe(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:dn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:dn([Re.points,Re.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:dn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:dn([Re.common,Re.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:dn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:dn([Re.sprite,Re.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:dn([Re.common,Re.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:dn([Re.lights,Re.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};oi.physical={uniforms:dn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const ia={r:0,b:0,g:0},gs=new pi,CM=new Ke;function PM(n,e,t,i,s,r,o){const a=new qe(0);let l=r===!0?0:1,c,u,d=null,f=0,h=null;function g(p,m){let S=!1,y=m.isScene===!0?m.background:null;y&&y.isTexture&&(y=(m.backgroundBlurriness>0?t:e).get(y)),y===null?_(a,l):y&&y.isColor&&(_(y,1),S=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===el)?(u===void 0&&(u=new Ln(new Ro(1,1,1),new as({name:"BackgroundCubeMaterial",uniforms:Rr(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,D,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),gs.copy(m.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(CM.makeRotationFromEuler(gs)),u.material.toneMapped=_t.getTransfer(y.colorSpace)!==Rt,(d!==y||f!==y.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=y,f=y.version,h=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ln(new il(2,2),new as({name:"BackgroundMaterial",uniforms:Rr(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=_t.getTransfer(y.colorSpace)!==Rt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,f=y.version,h=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,m){p.getRGB(ia,Wp(n)),i.buffers.color.setClear(ia.r,ia.g,ia.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function LM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(M,W,$,L,I){let k=!1;const X=d(L,$,W);r!==X&&(r=X,c(r.object)),k=h(M,L,$,I),k&&g(M,L,$,I),I!==null&&e.update(I,n.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,T(M,W,$,L),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function d(M,W,$){const L=$.wireframe===!0;let I=i[M.id];I===void 0&&(I={},i[M.id]=I);let k=I[W.id];k===void 0&&(k={},I[W.id]=k);let X=k[L];return X===void 0&&(X=f(l()),k[L]=X),X}function f(M){const W=[],$=[],L=[];for(let I=0;I<t;I++)W[I]=0,$[I]=0,L[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:$,attributeDivisors:L,object:M,attributes:{},index:null}}function h(M,W,$,L){const I=r.attributes,k=W.attributes;let X=0;const q=$.getAttributes();for(const H in q)if(q[H].location>=0){const ge=I[H];let Te=k[H];if(Te===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(Te=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(Te=M.instanceColor)),ge===void 0||ge.attribute!==Te||Te&&ge.data!==Te.data)return!0;X++}return r.attributesNum!==X||r.index!==L}function g(M,W,$,L){const I={},k=W.attributes;let X=0;const q=$.getAttributes();for(const H in q)if(q[H].location>=0){let ge=k[H];ge===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor));const Te={};Te.attribute=ge,ge&&ge.data&&(Te.data=ge.data),I[H]=Te,X++}r.attributes=I,r.attributesNum=X,r.index=L}function _(){const M=r.newAttributes;for(let W=0,$=M.length;W<$;W++)M[W]=0}function p(M){m(M,0)}function m(M,W){const $=r.newAttributes,L=r.enabledAttributes,I=r.attributeDivisors;$[M]=1,L[M]===0&&(n.enableVertexAttribArray(M),L[M]=1),I[M]!==W&&(n.vertexAttribDivisor(M,W),I[M]=W)}function S(){const M=r.newAttributes,W=r.enabledAttributes;for(let $=0,L=W.length;$<L;$++)W[$]!==M[$]&&(n.disableVertexAttribArray($),W[$]=0)}function y(M,W,$,L,I,k,X){X===!0?n.vertexAttribIPointer(M,W,$,I,k):n.vertexAttribPointer(M,W,$,L,I,k)}function T(M,W,$,L){_();const I=L.attributes,k=$.getAttributes(),X=W.defaultAttributeValues;for(const q in k){const H=k[q];if(H.location>=0){let pe=I[q];if(pe===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor)),pe!==void 0){const ge=pe.normalized,Te=pe.itemSize,Be=e.get(pe);if(Be===void 0)continue;const se=Be.buffer,B=Be.type,Y=Be.bytesPerElement,he=B===n.INT||B===n.UNSIGNED_INT||pe.gpuType===Tp;if(pe.isInterleavedBufferAttribute){const _e=pe.data,Ie=_e.stride,Ne=pe.offset;if(_e.isInstancedInterleavedBuffer){for(let ke=0;ke<H.locationSize;ke++)m(H.location+ke,_e.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let ke=0;ke<H.locationSize;ke++)p(H.location+ke);n.bindBuffer(n.ARRAY_BUFFER,se);for(let ke=0;ke<H.locationSize;ke++)y(H.location+ke,Te/H.locationSize,B,ge,Ie*Y,(Ne+Te/H.locationSize*ke)*Y,he)}else{if(pe.isInstancedBufferAttribute){for(let _e=0;_e<H.locationSize;_e++)m(H.location+_e,pe.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let _e=0;_e<H.locationSize;_e++)p(H.location+_e);n.bindBuffer(n.ARRAY_BUFFER,se);for(let _e=0;_e<H.locationSize;_e++)y(H.location+_e,Te/H.locationSize,B,ge,Te*Y,Te/H.locationSize*_e*Y,he)}}else if(X!==void 0){const ge=X[q];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(H.location,ge);break;case 3:n.vertexAttrib3fv(H.location,ge);break;case 4:n.vertexAttrib4fv(H.location,ge);break;default:n.vertexAttrib1fv(H.location,ge)}}}}S()}function O(){G();for(const M in i){const W=i[M];for(const $ in W){const L=W[$];for(const I in L)u(L[I].object),delete L[I];delete W[$]}delete i[M]}}function D(M){if(i[M.id]===void 0)return;const W=i[M.id];for(const $ in W){const L=W[$];for(const I in L)u(L[I].object),delete L[I];delete W[$]}delete i[M.id]}function w(M){for(const W in i){const $=i[W];if($[M.id]===void 0)continue;const L=$[M.id];for(const I in L)u(L[I].object),delete L[I];delete $[M.id]}}function G(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:G,resetDefaultState:E,dispose:O,releaseStatesOfGeometry:D,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:p,disableUnusedAttributes:S}}function DM(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<u;f++)this.render(l[f],c[f]);else{d.multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let h=0;h<u;h++)f+=c[h];t.update(f,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function IM(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp";const a=r(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=t.logarithmicDepthBuffer===!0,c=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),p=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),m=u>0,S=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:f,maxAttributes:h,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:p,vertexTextures:m,maxSamples:S}}function NM(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new $i,a=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=n.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const S=r?0:i,y=S*4;let T=m.clippingState||null;l.value=T,T=u(g,f,y,h);for(let O=0;O!==y;++O)T[O]=t[O];m.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=h+_*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,T=h;y!==_;++y,T+=4)o.copy(d[y]).applyMatrix4(S,a),o.normal.toArray(p,T),p[T+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function UM(n){let e=new WeakMap;function t(o,a){return a===Rc?o.mapping=Sr:a===Cc&&(o.mapping=br),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Rc||a===Cc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new X0(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class uu extends Xp{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ur=4,ef=[.125,.215,.35,.446,.526,.582],Ss=20,ql=new uu,tf=new qe;let $l=null,Yl=0,Kl=0,Zl=!1;const ys=(1+Math.sqrt(5))/2,rr=1/ys,nf=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,ys,rr),new U(0,ys,-rr),new U(rr,0,ys),new U(-rr,0,ys),new U(ys,rr,0),new U(-ys,rr,0)];class sf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){$l=this._renderer.getRenderTarget(),Yl=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),Zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=af(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($l,Yl,Kl),this._renderer.xr.enabled=Zl,e.scissorTest=!1,sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Sr||e.mapping===br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$l=this._renderer.getRenderTarget(),Yl=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),Zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Oa,format:Yn,colorSpace:jt,depthBuffer:!1},s=rf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rf(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=OM(r)),this._blurMaterial=FM(r,e,t)}return s}_compileMaterial(e){const t=new Ln(this._lodPlanes[0],e);this._renderer.compile(t,ql)}_sceneToCubeUV(e,t,i,s){const a=new hn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(tf),u.toneMapping=ns,u.autoClear=!1;const h=new li({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),g=new Ln(new Ro,h);let _=!1;const p=e.background;p?p.isColor&&(h.color.copy(p),e.background=null,_=!0):(h.color.copy(tf),_=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):S===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const y=this._cubeSize;sa(s,S*y,m>2?y:0,y,y),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Sr||e.mapping===br;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=af()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=of());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ln(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;sa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ql)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=nf[(s-1)%nf.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Ln(this._lodPlanes[s],c),f=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*Ss-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):Ss;p>Ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ss}`);const m=[];let S=0;for(let w=0;w<Ss;++w){const G=w/_,E=Math.exp(-G*G/2);m.push(E),w===0?S+=E:w<p&&(S+=2*E)}for(let w=0;w<m.length;w++)m[w]=m[w]/S;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const T=this._sizeLods[s],O=3*T*(s>y-ur?s-y+ur:0),D=4*(this._cubeSize-T);sa(t,O,D,3*T,2*T),l.setRenderTarget(t),l.render(d,ql)}}function OM(n){const e=[],t=[],i=[];let s=n;const r=n-ur+1+ef.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-ur?l=ef[o-n+ur-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,_=3,p=2,m=1,S=new Float32Array(_*g*h),y=new Float32Array(p*g*h),T=new Float32Array(m*g*h);for(let D=0;D<h;D++){const w=D%3*2/3-1,G=D>2?0:-1,E=[w,G,0,w+2/3,G,0,w+2/3,G+1,0,w,G,0,w+2/3,G+1,0,w,G+1,0];S.set(E,_*g*D),y.set(f,p*g*D);const M=[D,D,D,D,D,D];T.set(M,m*g*D)}const O=new kn;O.setAttribute("position",new Zt(S,_)),O.setAttribute("uv",new Zt(y,p)),O.setAttribute("faceIndex",new Zt(T,m)),e.push(O),s>ur&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function rf(n,e,t){const i=new Ps(n,e,t);return i.texture.mapping=el,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sa(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function FM(n,e,t){const i=new Float32Array(Ss),s=new U(0,1,0);return new as({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:du(),fragmentShader:`

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
		`,blending:ts,depthTest:!1,depthWrite:!1})}function of(){return new as({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:du(),fragmentShader:`

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
		`,blending:ts,depthTest:!1,depthWrite:!1})}function af(){return new as({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ts,depthTest:!1,depthWrite:!1})}function du(){return`

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
	`}function BM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Rc||l===Cc,u=l===Sr||l===br;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new sf(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&s(h)?(t===null&&(t=new sf(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function kM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function HM(n,e,t,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}f.removeEventListener("dispose",o),delete s[f.id];const h=r.get(f);h&&(e.remove(h),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const h=d.morphAttributes;for(const g in h){const _=h[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],n.ARRAY_BUFFER)}}function c(d){const f=[],h=d.index,g=d.attributes.position;let _=0;if(h!==null){const S=h.array;_=h.version;for(let y=0,T=S.length;y<T;y+=3){const O=S[y+0],D=S[y+1],w=S[y+2];f.push(O,D,D,w,w,O)}}else if(g!==void 0){const S=g.array;_=g.version;for(let y=0,T=S.length/3-1;y<T;y+=3){const O=y+0,D=y+1,w=y+2;f.push(O,D,D,w,w,O)}}else return;const p=new(Fp(f)?Gp:Vp)(f,1);p.version=_;const m=r.get(d);m&&e.remove(m),r.set(d,p)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function zM(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function c(d,f,h){h!==0&&(n.drawElementsInstanced(i,f,r,d*o,h),t.update(f,i,h))}function u(d,f,h){if(h===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<h;_++)this.render(d[_]/o,f[_]);else{g.multiDrawElementsWEBGL(i,f,0,r,d,0,h);let _=0;for(let p=0;p<h;p++)_+=f[p];t.update(_,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function VM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function GM(n,e,t){const i=new WeakMap,s=new Tt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let M=function(){G.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var h=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let T=0;g===!0&&(T=1),_===!0&&(T=2),p===!0&&(T=3);let O=a.attributes.position.count*T,D=1;O>e.maxTextureSize&&(D=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const w=new Float32Array(O*D*4*d),G=new Hp(w,O,D,d);G.type=ai,G.needsUpdate=!0;const E=T*4;for(let W=0;W<d;W++){const $=m[W],L=S[W],I=y[W],k=O*D*4*W;for(let X=0;X<$.count;X++){const q=X*E;g===!0&&(s.fromBufferAttribute($,X),w[k+q+0]=s.x,w[k+q+1]=s.y,w[k+q+2]=s.z,w[k+q+3]=0),_===!0&&(s.fromBufferAttribute(L,X),w[k+q+4]=s.x,w[k+q+5]=s.y,w[k+q+6]=s.z,w[k+q+7]=0),p===!0&&(s.fromBufferAttribute(I,X),w[k+q+8]=s.x,w[k+q+9]=s.y,w[k+q+10]=s.z,w[k+q+11]=I.itemSize===4?s.w:1)}}f={count:d,texture:G,size:new Ve(O,D)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function WM(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class $p extends Xt{constructor(e,t,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:_r,u!==_r&&u!==Mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===_r&&(i=Tr),i===void 0&&u===Mo&&(i=wo),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:gn,this.minFilter=l!==void 0?l:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Yp=new Xt,Kp=new $p(1,1);Kp.compareFunction=Up;const Zp=new Hp,Jp=new C0,Qp=new jp,lf=[],cf=[],uf=new Float32Array(16),df=new Float32Array(9),ff=new Float32Array(4);function Ir(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=lf[s];if(r===void 0&&(r=new Float32Array(s),lf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function sl(n,e){let t=cf[e];t===void 0&&(t=new Int32Array(e),cf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function XM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function jM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2fv(this.addr,e),zt(t,e)}}function qM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;n.uniform3fv(this.addr,e),zt(t,e)}}function $M(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4fv(this.addr,e),zt(t,e)}}function YM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Ht(t,i))return;ff.set(i),n.uniformMatrix2fv(this.addr,!1,ff),zt(t,i)}}function KM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Ht(t,i))return;df.set(i),n.uniformMatrix3fv(this.addr,!1,df),zt(t,i)}}function ZM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Ht(t,i))return;uf.set(i),n.uniformMatrix4fv(this.addr,!1,uf),zt(t,i)}}function JM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function QM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2iv(this.addr,e),zt(t,e)}}function eS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3iv(this.addr,e),zt(t,e)}}function tS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4iv(this.addr,e),zt(t,e)}}function nS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function iS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2uiv(this.addr,e),zt(t,e)}}function sS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3uiv(this.addr,e),zt(t,e)}}function rS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4uiv(this.addr,e),zt(t,e)}}function oS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?Kp:Yp;t.setTexture2D(e||r,s)}function aS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Jp,s)}function lS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Qp,s)}function cS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Zp,s)}function uS(n){switch(n){case 5126:return XM;case 35664:return jM;case 35665:return qM;case 35666:return $M;case 35674:return YM;case 35675:return KM;case 35676:return ZM;case 5124:case 35670:return JM;case 35667:case 35671:return QM;case 35668:case 35672:return eS;case 35669:case 35673:return tS;case 5125:return nS;case 36294:return iS;case 36295:return sS;case 36296:return rS;case 35678:case 36198:case 36298:case 36306:case 35682:return oS;case 35679:case 36299:case 36307:return aS;case 35680:case 36300:case 36308:case 36293:return lS;case 36289:case 36303:case 36311:case 36292:return cS}}function dS(n,e){n.uniform1fv(this.addr,e)}function fS(n,e){const t=Ir(e,this.size,2);n.uniform2fv(this.addr,t)}function hS(n,e){const t=Ir(e,this.size,3);n.uniform3fv(this.addr,t)}function pS(n,e){const t=Ir(e,this.size,4);n.uniform4fv(this.addr,t)}function mS(n,e){const t=Ir(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function gS(n,e){const t=Ir(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function _S(n,e){const t=Ir(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function vS(n,e){n.uniform1iv(this.addr,e)}function xS(n,e){n.uniform2iv(this.addr,e)}function yS(n,e){n.uniform3iv(this.addr,e)}function MS(n,e){n.uniform4iv(this.addr,e)}function SS(n,e){n.uniform1uiv(this.addr,e)}function bS(n,e){n.uniform2uiv(this.addr,e)}function ES(n,e){n.uniform3uiv(this.addr,e)}function TS(n,e){n.uniform4uiv(this.addr,e)}function AS(n,e,t){const i=this.cache,s=e.length,r=sl(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Yp,r[o])}function wS(n,e,t){const i=this.cache,s=e.length,r=sl(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Jp,r[o])}function RS(n,e,t){const i=this.cache,s=e.length,r=sl(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Qp,r[o])}function CS(n,e,t){const i=this.cache,s=e.length,r=sl(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Zp,r[o])}function PS(n){switch(n){case 5126:return dS;case 35664:return fS;case 35665:return hS;case 35666:return pS;case 35674:return mS;case 35675:return gS;case 35676:return _S;case 5124:case 35670:return vS;case 35667:case 35671:return xS;case 35668:case 35672:return yS;case 35669:case 35673:return MS;case 5125:return SS;case 36294:return bS;case 36295:return ES;case 36296:return TS;case 35678:case 36198:case 36298:case 36306:case 35682:return AS;case 35679:case 36299:case 36307:return wS;case 35680:case 36300:case 36308:case 36293:return RS;case 36289:case 36303:case 36311:case 36292:return CS}}class LS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=uS(t.type)}}class DS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=PS(t.type)}}class IS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Jl=/(\w+)(\])?(\[|\.)?/g;function hf(n,e){n.seq.push(e),n.map[e.id]=e}function NS(n,e,t){const i=n.name,s=i.length;for(Jl.lastIndex=0;;){const r=Jl.exec(i),o=Jl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){hf(t,c===void 0?new LS(a,n,e):new DS(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new IS(a),hf(t,d)),t=d}}}class Sa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);NS(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function pf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const US=37297;let OS=0;function FS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function BS(n){const e=_t.getPrimaries(_t.workingColorSpace),t=_t.getPrimaries(n);let i;switch(e===t?i="":e===ka&&t===Ba?i="LinearDisplayP3ToLinearSRGB":e===Ba&&t===ka&&(i="LinearSRGBToLinearDisplayP3"),n){case jt:case tl:return[i,"LinearTransferOETF"];case Gt:case au:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function mf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+FS(n.getShaderSource(e),o)}else return s}function kS(n,e){const t=BS(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function HS(n,e){let t;switch(e){case Iv:t="Linear";break;case Nv:t="Reinhard";break;case Uv:t="OptimizedCineon";break;case Mp:t="ACESFilmic";break;case Fv:t="AgX";break;case Bv:t="Neutral";break;case Ov:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function zS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(to).join(`
`)}function VS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function GS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function to(n){return n!==""}function gf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _f(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const WS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dc(n){return n.replace(WS,jS)}const XS=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function jS(n,e){let t=rt[e];if(t===void 0){const i=XS.get(e);if(i!==void 0)t=rt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Dc(t)}const qS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vf(n){return n.replace(qS,$S)}function $S(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function YS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===xp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function KS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Sr:case br:e="ENVMAP_TYPE_CUBE";break;case el:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ZS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case br:e="ENVMAP_MODE_REFRACTION";break}return e}function JS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case yp:e="ENVMAP_BLENDING_MULTIPLY";break;case Lv:e="ENVMAP_BLENDING_MIX";break;case Dv:e="ENVMAP_BLENDING_ADD";break}return e}function QS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function eb(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=YS(t),c=KS(t),u=ZS(t),d=JS(t),f=QS(t),h=zS(t),g=VS(r),_=s.createProgram();let p,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(to).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(to).join(`
`),m.length>0&&(m+=`
`)):(p=[xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(to).join(`
`),m=[xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ns?"#define TONE_MAPPING":"",t.toneMapping!==ns?rt.tonemapping_pars_fragment:"",t.toneMapping!==ns?HS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,kS("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(to).join(`
`)),o=Dc(o),o=gf(o,t),o=_f(o,t),a=Dc(a),a=gf(a,t),a=_f(a,t),o=vf(o),a=vf(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Id?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Id?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=S+p+o,T=S+m+a,O=pf(s,s.VERTEX_SHADER,y),D=pf(s,s.FRAGMENT_SHADER,T);s.attachShader(_,O),s.attachShader(_,D),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(W){if(n.debug.checkShaderErrors){const $=s.getProgramInfoLog(_).trim(),L=s.getShaderInfoLog(O).trim(),I=s.getShaderInfoLog(D).trim();let k=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,O,D);else{const q=mf(s,O,"vertex"),H=mf(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+$+`
`+q+`
`+H)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(L===""||I==="")&&(X=!1);X&&(W.diagnostics={runnable:k,programLog:$,vertexShader:{log:L,prefix:p},fragmentShader:{log:I,prefix:m}})}s.deleteShader(O),s.deleteShader(D),G=new Sa(s,_),E=GS(s,_)}let G;this.getUniforms=function(){return G===void 0&&w(this),G};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,US)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=OS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=O,this.fragmentShader=D,this}let tb=0;class nb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ib(e),t.set(e,i)),i}}class ib{constructor(e){this.id=tb++,this.code=e,this.usedTimes=0}}function sb(n,e,t,i,s,r,o){const a=new cu,l=new nb,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let h=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,M,W,$,L){const I=$.fog,k=L.geometry,X=E.isMeshStandardMaterial?$.environment:null,q=(E.isMeshStandardMaterial?t:e).get(E.envMap||X),H=q&&q.mapping===el?q.image.height:null,pe=g[E.type];E.precision!==null&&(h=s.getMaxPrecision(E.precision),h!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",h,"instead."));const ge=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Te=ge!==void 0?ge.length:0;let Be=0;k.morphAttributes.position!==void 0&&(Be=1),k.morphAttributes.normal!==void 0&&(Be=2),k.morphAttributes.color!==void 0&&(Be=3);let se,B,Y,he;if(pe){const Ut=oi[pe];se=Ut.vertexShader,B=Ut.fragmentShader}else se=E.vertexShader,B=E.fragmentShader,l.update(E),Y=l.getVertexShaderID(E),he=l.getFragmentShaderID(E);const _e=n.getRenderTarget(),Ie=L.isInstancedMesh===!0,Ne=L.isBatchedMesh===!0,ke=!!E.map,K=!!E.matcap,C=!!q,P=!!E.aoMap,Z=!!E.lightMap,re=!!E.bumpMap,ce=!!E.normalMap,b=!!E.displacementMap,x=!!E.emissiveMap,N=!!E.metalnessMap,V=!!E.roughnessMap,z=E.anisotropy>0,J=E.clearcoat>0,fe=E.iridescence>0,ie=E.sheen>0,xe=E.transmission>0,Me=z&&!!E.anisotropyMap,ve=J&&!!E.clearcoatMap,ye=J&&!!E.clearcoatNormalMap,Ue=J&&!!E.clearcoatRoughnessMap,we=fe&&!!E.iridescenceMap,Pe=fe&&!!E.iridescenceThicknessMap,He=ie&&!!E.sheenColorMap,$e=ie&&!!E.sheenRoughnessMap,ct=!!E.specularMap,Ge=!!E.specularColorMap,Xe=!!E.specularIntensityMap,Oe=xe&&!!E.transmissionMap,v=xe&&!!E.thicknessMap,ee=!!E.gradientMap,me=!!E.alphaMap,be=E.alphaTest>0,De=!!E.alphaHash,lt=!!E.extensions;let it=ns;E.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(it=n.toneMapping);const St={shaderID:pe,shaderType:E.type,shaderName:E.name,vertexShader:se,fragmentShader:B,defines:E.defines,customVertexShaderID:Y,customFragmentShaderID:he,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:h,batching:Ne,instancing:Ie,instancingColor:Ie&&L.instanceColor!==null,instancingMorph:Ie&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:jt,alphaToCoverage:!!E.alphaToCoverage,map:ke,matcap:K,envMap:C,envMapMode:C&&q.mapping,envMapCubeUVHeight:H,aoMap:P,lightMap:Z,bumpMap:re,normalMap:ce,displacementMap:f&&b,emissiveMap:x,normalMapObjectSpace:ce&&E.normalMapType===Qv,normalMapTangentSpace:ce&&E.normalMapType===Np,metalnessMap:N,roughnessMap:V,anisotropy:z,anisotropyMap:Me,clearcoat:J,clearcoatMap:ve,clearcoatNormalMap:ye,clearcoatRoughnessMap:Ue,iridescence:fe,iridescenceMap:we,iridescenceThicknessMap:Pe,sheen:ie,sheenColorMap:He,sheenRoughnessMap:$e,specularMap:ct,specularColorMap:Ge,specularIntensityMap:Xe,transmission:xe,transmissionMap:Oe,thicknessMap:v,gradientMap:ee,opaque:E.transparent===!1&&E.blending===gr&&E.alphaToCoverage===!1,alphaMap:me,alphaTest:be,alphaHash:De,combine:E.combine,mapUv:ke&&_(E.map.channel),aoMapUv:P&&_(E.aoMap.channel),lightMapUv:Z&&_(E.lightMap.channel),bumpMapUv:re&&_(E.bumpMap.channel),normalMapUv:ce&&_(E.normalMap.channel),displacementMapUv:b&&_(E.displacementMap.channel),emissiveMapUv:x&&_(E.emissiveMap.channel),metalnessMapUv:N&&_(E.metalnessMap.channel),roughnessMapUv:V&&_(E.roughnessMap.channel),anisotropyMapUv:Me&&_(E.anisotropyMap.channel),clearcoatMapUv:ve&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:ye&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:He&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:$e&&_(E.sheenRoughnessMap.channel),specularMapUv:ct&&_(E.specularMap.channel),specularColorMapUv:Ge&&_(E.specularColorMap.channel),specularIntensityMapUv:Xe&&_(E.specularIntensityMap.channel),transmissionMapUv:Oe&&_(E.transmissionMap.channel),thicknessMapUv:v&&_(E.thicknessMap.channel),alphaMapUv:me&&_(E.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ce||z),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!k.attributes.uv&&(ke||me),fog:!!I,useFog:E.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:L.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Be,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&W.length>0,shadowMapType:n.shadowMap.type,toneMapping:it,useLegacyLights:n._useLegacyLights,decodeVideoTexture:ke&&E.map.isVideoTexture===!0&&_t.getTransfer(E.map.colorSpace)===Rt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===jn,flipSided:E.side===Mn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:lt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:lt&&E.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function m(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const W in E.defines)M.push(W),M.push(E.defines[W]);return E.isRawShaderMaterial===!1&&(S(M,E),y(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function S(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function y(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),E.push(a.mask)}function T(E){const M=g[E.type];let W;if(M){const $=oi[M];W=z0.clone($.uniforms)}else W=E.uniforms;return W}function O(E,M){let W;for(let $=0,L=u.length;$<L;$++){const I=u[$];if(I.cacheKey===M){W=I,++W.usedTimes;break}}return W===void 0&&(W=new eb(n,M,E,r),u.push(W)),W}function D(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function w(E){l.remove(E)}function G(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:T,acquireProgram:O,releaseProgram:D,releaseShaderCache:w,programs:u,dispose:G}}function rb(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function ob(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function yf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Mf(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,f,h,g,_,p){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},n[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=h,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=_,m.group=p),e++,m}function a(d,f,h,g,_,p){const m=o(d,f,h,g,_,p);h.transmission>0?i.push(m):h.transparent===!0?s.push(m):t.push(m)}function l(d,f,h,g,_,p){const m=o(d,f,h,g,_,p);h.transmission>0?i.unshift(m):h.transparent===!0?s.unshift(m):t.unshift(m)}function c(d,f){t.length>1&&t.sort(d||ob),i.length>1&&i.sort(f||yf),s.length>1&&s.sort(f||yf)}function u(){for(let d=e,f=n.length;d<f;d++){const h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function ab(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Mf,n.set(i,[o])):s>=r.length?(o=new Mf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function lb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new qe};break;case"SpotLight":t={position:new U,direction:new U,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function cb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ub=0;function db(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function fb(n){const e=new lb,t=cb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const s=new U,r=new Ke,o=new Ke;function a(c,u){let d=0,f=0,h=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let g=0,_=0,p=0,m=0,S=0,y=0,T=0,O=0,D=0,w=0,G=0;c.sort(db);const E=u===!0?Math.PI:1;for(let W=0,$=c.length;W<$;W++){const L=c[W],I=L.color,k=L.intensity,X=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=I.r*k*E,f+=I.g*k*E,h+=I.b*k*E;else if(L.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(L.sh.coefficients[H],k);G++}else if(L.isDirectionalLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){const pe=L.shadow,ge=t.get(L);ge.shadowBias=pe.bias,ge.shadowNormalBias=pe.normalBias,ge.shadowRadius=pe.radius,ge.shadowMapSize=pe.mapSize,i.directionalShadow[g]=ge,i.directionalShadowMap[g]=q,i.directionalShadowMatrix[g]=L.shadow.matrix,y++}i.directional[g]=H,g++}else if(L.isSpotLight){const H=e.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(I).multiplyScalar(k*E),H.distance=X,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,i.spot[p]=H;const pe=L.shadow;if(L.map&&(i.spotLightMap[D]=L.map,D++,pe.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[p]=pe.matrix,L.castShadow){const ge=t.get(L);ge.shadowBias=pe.bias,ge.shadowNormalBias=pe.normalBias,ge.shadowRadius=pe.radius,ge.shadowMapSize=pe.mapSize,i.spotShadow[p]=ge,i.spotShadowMap[p]=q,O++}p++}else if(L.isRectAreaLight){const H=e.get(L);H.color.copy(I).multiplyScalar(k),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=H,m++}else if(L.isPointLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity*E),H.distance=L.distance,H.decay=L.decay,L.castShadow){const pe=L.shadow,ge=t.get(L);ge.shadowBias=pe.bias,ge.shadowNormalBias=pe.normalBias,ge.shadowRadius=pe.radius,ge.shadowMapSize=pe.mapSize,ge.shadowCameraNear=pe.camera.near,ge.shadowCameraFar=pe.camera.far,i.pointShadow[_]=ge,i.pointShadowMap[_]=q,i.pointShadowMatrix[_]=L.shadow.matrix,T++}i.point[_]=H,_++}else if(L.isHemisphereLight){const H=e.get(L);H.skyColor.copy(L.color).multiplyScalar(k*E),H.groundColor.copy(L.groundColor).multiplyScalar(k*E),i.hemi[S]=H,S++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const M=i.hash;(M.directionalLength!==g||M.pointLength!==_||M.spotLength!==p||M.rectAreaLength!==m||M.hemiLength!==S||M.numDirectionalShadows!==y||M.numPointShadows!==T||M.numSpotShadows!==O||M.numSpotMaps!==D||M.numLightProbes!==G)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=m,i.point.length=_,i.hemi.length=S,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=O,i.spotShadowMap.length=O,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=O+D-w,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=G,M.directionalLength=g,M.pointLength=_,M.spotLength=p,M.rectAreaLength=m,M.hemiLength=S,M.numDirectionalShadows=y,M.numPointShadows=T,M.numSpotShadows=O,M.numSpotMaps=D,M.numLightProbes=G,i.version=ub++)}function l(c,u){let d=0,f=0,h=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const y=c[m];if(y.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),d++}else if(y.isSpotLight){const T=i.spot[h];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),h++}else if(y.isRectAreaLight){const T=i.rectArea[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const T=i.point[f];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const T=i.hemi[_];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function Sf(n){const e=new fb(n),t=[],i=[];function s(){t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(u){e.setup(t,u)}function l(u){e.setupView(t,u)}return{init:s,state:{lightsArray:t,shadowsArray:i,lights:e,transmissionRenderTarget:null},setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function hb(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Sf(n),e.set(s,[a])):r>=o.length?(a=new Sf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class pb extends ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mb extends ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_b=`uniform sampler2D shadow_pass;
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
}`;function vb(n,e,t){let i=new nl;const s=new Ve,r=new Ve,o=new Tt,a=new pb({depthPacking:Jv}),l=new mb,c={},u=t.maxTextureSize,d={[Ni]:Mn,[Mn]:Ni,[jn]:jn},f=new as({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:gb,fragmentShader:_b}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new kn;g.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ln(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vp;let m=this.type;this.render=function(D,w,G){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||D.length===0)return;const E=n.getRenderTarget(),M=n.getActiveCubeFace(),W=n.getActiveMipmapLevel(),$=n.state;$.setBlending(ts),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const L=m!==Ti&&this.type===Ti,I=m===Ti&&this.type!==Ti;for(let k=0,X=D.length;k<X;k++){const q=D[k],H=q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const pe=H.getFrameExtents();if(s.multiply(pe),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/pe.x),s.x=r.x*pe.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/pe.y),s.y=r.y*pe.y,H.mapSize.y=r.y)),H.map===null||L===!0||I===!0){const Te=this.type!==Ti?{minFilter:gn,magFilter:gn}:{};H.map!==null&&H.map.dispose(),H.map=new Ps(s.x,s.y,Te),H.map.texture.name=q.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const ge=H.getViewportCount();for(let Te=0;Te<ge;Te++){const Be=H.getViewport(Te);o.set(r.x*Be.x,r.y*Be.y,r.x*Be.z,r.y*Be.w),$.viewport(o),H.updateMatrices(q,Te),i=H.getFrustum(),T(w,G,H.camera,q,this.type)}H.isPointLightShadow!==!0&&this.type===Ti&&S(H,G),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(E,M,W)};function S(D,w){const G=e.update(_);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,h.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Ps(s.x,s.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(w,null,G,f,_,null),h.uniforms.shadow_pass.value=D.mapPass.texture,h.uniforms.resolution.value=D.mapSize,h.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(w,null,G,h,_,null)}function y(D,w,G,E){let M=null;const W=G.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(W!==void 0)M=W;else if(M=G.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const $=M.uuid,L=w.uuid;let I=c[$];I===void 0&&(I={},c[$]=I);let k=I[L];k===void 0&&(k=M.clone(),I[L]=k,w.addEventListener("dispose",O)),M=k}if(M.visible=w.visible,M.wireframe=w.wireframe,E===Ti?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:d[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,G.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const $=n.properties.get(M);$.light=G}return M}function T(D,w,G,E,M){if(D.visible===!1)return;if(D.layers.test(w.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&M===Ti)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,D.matrixWorld);const L=e.update(D),I=D.material;if(Array.isArray(I)){const k=L.groups;for(let X=0,q=k.length;X<q;X++){const H=k[X],pe=I[H.materialIndex];if(pe&&pe.visible){const ge=y(D,pe,E,M);D.onBeforeShadow(n,D,w,G,L,ge,H),n.renderBufferDirect(G,null,L,ge,D,H),D.onAfterShadow(n,D,w,G,L,ge,H)}}}else if(I.visible){const k=y(D,I,E,M);D.onBeforeShadow(n,D,w,G,L,k,null),n.renderBufferDirect(G,null,L,k,D,null),D.onAfterShadow(n,D,w,G,L,k,null)}}const $=D.children;for(let L=0,I=$.length;L<I;L++)T($[L],w,G,E,M)}function O(D){D.target.removeEventListener("dispose",O);for(const G in c){const E=c[G],M=D.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}function xb(n){function e(){let v=!1;const ee=new Tt;let me=null;const be=new Tt(0,0,0,0);return{setMask:function(De){me!==De&&!v&&(n.colorMask(De,De,De,De),me=De)},setLocked:function(De){v=De},setClear:function(De,lt,it,St,Ut){Ut===!0&&(De*=St,lt*=St,it*=St),ee.set(De,lt,it,St),be.equals(ee)===!1&&(n.clearColor(De,lt,it,St),be.copy(ee))},reset:function(){v=!1,me=null,be.set(-1,0,0,0)}}}function t(){let v=!1,ee=null,me=null,be=null;return{setTest:function(De){De?he(n.DEPTH_TEST):_e(n.DEPTH_TEST)},setMask:function(De){ee!==De&&!v&&(n.depthMask(De),ee=De)},setFunc:function(De){if(me!==De){switch(De){case Ev:n.depthFunc(n.NEVER);break;case Tv:n.depthFunc(n.ALWAYS);break;case Av:n.depthFunc(n.LESS);break;case yo:n.depthFunc(n.LEQUAL);break;case wv:n.depthFunc(n.EQUAL);break;case Rv:n.depthFunc(n.GEQUAL);break;case Cv:n.depthFunc(n.GREATER);break;case Pv:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=De}},setLocked:function(De){v=De},setClear:function(De){be!==De&&(n.clearDepth(De),be=De)},reset:function(){v=!1,ee=null,me=null,be=null}}}function i(){let v=!1,ee=null,me=null,be=null,De=null,lt=null,it=null,St=null,Ut=null;return{setTest:function(pt){v||(pt?he(n.STENCIL_TEST):_e(n.STENCIL_TEST))},setMask:function(pt){ee!==pt&&!v&&(n.stencilMask(pt),ee=pt)},setFunc:function(pt,It,Pt){(me!==pt||be!==It||De!==Pt)&&(n.stencilFunc(pt,It,Pt),me=pt,be=It,De=Pt)},setOp:function(pt,It,Pt){(lt!==pt||it!==It||St!==Pt)&&(n.stencilOp(pt,It,Pt),lt=pt,it=It,St=Pt)},setLocked:function(pt){v=pt},setClear:function(pt){Ut!==pt&&(n.clearStencil(pt),Ut=pt)},reset:function(){v=!1,ee=null,me=null,be=null,De=null,lt=null,it=null,St=null,Ut=null}}}const s=new e,r=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,f=[],h=null,g=!1,_=null,p=null,m=null,S=null,y=null,T=null,O=null,D=new qe(0,0,0),w=0,G=!1,E=null,M=null,W=null,$=null,L=null;const I=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,X=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(q)[1]),k=X>=1):q.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),k=X>=2);let H=null,pe={};const ge=n.getParameter(n.SCISSOR_BOX),Te=n.getParameter(n.VIEWPORT),Be=new Tt().fromArray(ge),se=new Tt().fromArray(Te);function B(v,ee,me,be){const De=new Uint8Array(4),lt=n.createTexture();n.bindTexture(v,lt),n.texParameteri(v,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(v,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let it=0;it<me;it++)v===n.TEXTURE_3D||v===n.TEXTURE_2D_ARRAY?n.texImage3D(ee,0,n.RGBA,1,1,be,0,n.RGBA,n.UNSIGNED_BYTE,De):n.texImage2D(ee+it,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,De);return lt}const Y={};Y[n.TEXTURE_2D]=B(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=B(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=B(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=B(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),he(n.DEPTH_TEST),r.setFunc(yo),re(!1),ce(Qu),he(n.CULL_FACE),P(ts);function he(v){c[v]!==!0&&(n.enable(v),c[v]=!0)}function _e(v){c[v]!==!1&&(n.disable(v),c[v]=!1)}function Ie(v,ee){return u[v]!==ee?(n.bindFramebuffer(v,ee),u[v]=ee,v===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ee),v===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ee),!0):!1}function Ne(v,ee){let me=f,be=!1;if(v){me=d.get(ee),me===void 0&&(me=[],d.set(ee,me));const De=v.textures;if(me.length!==De.length||me[0]!==n.COLOR_ATTACHMENT0){for(let lt=0,it=De.length;lt<it;lt++)me[lt]=n.COLOR_ATTACHMENT0+lt;me.length=De.length,be=!0}}else me[0]!==n.BACK&&(me[0]=n.BACK,be=!0);be&&n.drawBuffers(me)}function ke(v){return h!==v?(n.useProgram(v),h=v,!0):!1}const K={[Ms]:n.FUNC_ADD,[av]:n.FUNC_SUBTRACT,[lv]:n.FUNC_REVERSE_SUBTRACT};K[cv]=n.MIN,K[uv]=n.MAX;const C={[dv]:n.ZERO,[fv]:n.ONE,[hv]:n.SRC_COLOR,[Ac]:n.SRC_ALPHA,[xv]:n.SRC_ALPHA_SATURATE,[_v]:n.DST_COLOR,[mv]:n.DST_ALPHA,[pv]:n.ONE_MINUS_SRC_COLOR,[wc]:n.ONE_MINUS_SRC_ALPHA,[vv]:n.ONE_MINUS_DST_COLOR,[gv]:n.ONE_MINUS_DST_ALPHA,[yv]:n.CONSTANT_COLOR,[Mv]:n.ONE_MINUS_CONSTANT_COLOR,[Sv]:n.CONSTANT_ALPHA,[bv]:n.ONE_MINUS_CONSTANT_ALPHA};function P(v,ee,me,be,De,lt,it,St,Ut,pt){if(v===ts){g===!0&&(_e(n.BLEND),g=!1);return}if(g===!1&&(he(n.BLEND),g=!0),v!==ov){if(v!==_||pt!==G){if((p!==Ms||y!==Ms)&&(n.blendEquation(n.FUNC_ADD),p=Ms,y=Ms),pt)switch(v){case gr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ed:n.blendFunc(n.ONE,n.ONE);break;case td:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}else switch(v){case gr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ed:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case td:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}m=null,S=null,T=null,O=null,D.set(0,0,0),w=0,_=v,G=pt}return}De=De||ee,lt=lt||me,it=it||be,(ee!==p||De!==y)&&(n.blendEquationSeparate(K[ee],K[De]),p=ee,y=De),(me!==m||be!==S||lt!==T||it!==O)&&(n.blendFuncSeparate(C[me],C[be],C[lt],C[it]),m=me,S=be,T=lt,O=it),(St.equals(D)===!1||Ut!==w)&&(n.blendColor(St.r,St.g,St.b,Ut),D.copy(St),w=Ut),_=v,G=!1}function Z(v,ee){v.side===jn?_e(n.CULL_FACE):he(n.CULL_FACE);let me=v.side===Mn;ee&&(me=!me),re(me),v.blending===gr&&v.transparent===!1?P(ts):P(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),r.setFunc(v.depthFunc),r.setTest(v.depthTest),r.setMask(v.depthWrite),s.setMask(v.colorWrite);const be=v.stencilWrite;o.setTest(be),be&&(o.setMask(v.stencilWriteMask),o.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),o.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass)),x(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):_e(n.SAMPLE_ALPHA_TO_COVERAGE)}function re(v){E!==v&&(v?n.frontFace(n.CW):n.frontFace(n.CCW),E=v)}function ce(v){v!==sv?(he(n.CULL_FACE),v!==M&&(v===Qu?n.cullFace(n.BACK):v===rv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_e(n.CULL_FACE),M=v}function b(v){v!==W&&(k&&n.lineWidth(v),W=v)}function x(v,ee,me){v?(he(n.POLYGON_OFFSET_FILL),($!==ee||L!==me)&&(n.polygonOffset(ee,me),$=ee,L=me)):_e(n.POLYGON_OFFSET_FILL)}function N(v){v?he(n.SCISSOR_TEST):_e(n.SCISSOR_TEST)}function V(v){v===void 0&&(v=n.TEXTURE0+I-1),H!==v&&(n.activeTexture(v),H=v)}function z(v,ee,me){me===void 0&&(H===null?me=n.TEXTURE0+I-1:me=H);let be=pe[me];be===void 0&&(be={type:void 0,texture:void 0},pe[me]=be),(be.type!==v||be.texture!==ee)&&(H!==me&&(n.activeTexture(me),H=me),n.bindTexture(v,ee||Y[v]),be.type=v,be.texture=ee)}function J(){const v=pe[H];v!==void 0&&v.type!==void 0&&(n.bindTexture(v.type,null),v.type=void 0,v.texture=void 0)}function fe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ie(){try{n.compressedTexImage3D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function xe(){try{n.texSubImage2D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Me(){try{n.texSubImage3D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ve(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ye(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Ue(){try{n.texStorage2D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function we(){try{n.texStorage3D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Pe(){try{n.texImage2D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function He(){try{n.texImage3D.apply(n,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function $e(v){Be.equals(v)===!1&&(n.scissor(v.x,v.y,v.z,v.w),Be.copy(v))}function ct(v){se.equals(v)===!1&&(n.viewport(v.x,v.y,v.z,v.w),se.copy(v))}function Ge(v,ee){let me=l.get(ee);me===void 0&&(me=new WeakMap,l.set(ee,me));let be=me.get(v);be===void 0&&(be=n.getUniformBlockIndex(ee,v.name),me.set(v,be))}function Xe(v,ee){const be=l.get(ee).get(v);a.get(ee)!==be&&(n.uniformBlockBinding(ee,be,v.__bindingPointIndex),a.set(ee,be))}function Oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},H=null,pe={},u={},d=new WeakMap,f=[],h=null,g=!1,_=null,p=null,m=null,S=null,y=null,T=null,O=null,D=new qe(0,0,0),w=0,G=!1,E=null,M=null,W=null,$=null,L=null,Be.set(0,0,n.canvas.width,n.canvas.height),se.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:he,disable:_e,bindFramebuffer:Ie,drawBuffers:Ne,useProgram:ke,setBlending:P,setMaterial:Z,setFlipSided:re,setCullFace:ce,setLineWidth:b,setPolygonOffset:x,setScissorTest:N,activeTexture:V,bindTexture:z,unbindTexture:J,compressedTexImage2D:fe,compressedTexImage3D:ie,texImage2D:Pe,texImage3D:He,updateUBOMapping:Ge,uniformBlockBinding:Xe,texStorage2D:Ue,texStorage3D:we,texSubImage2D:xe,texSubImage3D:Me,compressedTexSubImage2D:ve,compressedTexSubImage3D:ye,scissor:$e,viewport:ct,reset:Oe}}function yb(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return h?new OffscreenCanvas(b,x):bo("canvas")}function _(b,x,N){let V=1;const z=ce(b);if((z.width>N||z.height>N)&&(V=N/Math.max(z.width,z.height)),V<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const J=Math.floor(V*z.width),fe=Math.floor(V*z.height);d===void 0&&(d=g(J,fe));const ie=x?g(J,fe):d;return ie.width=J,ie.height=fe,ie.getContext("2d").drawImage(b,0,0,J,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+J+"x"+fe+")."),ie}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),b;return b}function p(b){return b.generateMipmaps&&b.minFilter!==gn&&b.minFilter!==Cn}function m(b){n.generateMipmap(b)}function S(b,x,N,V,z=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let J=x;if(x===n.RED&&(N===n.FLOAT&&(J=n.R32F),N===n.HALF_FLOAT&&(J=n.R16F),N===n.UNSIGNED_BYTE&&(J=n.R8)),x===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(J=n.R8UI),N===n.UNSIGNED_SHORT&&(J=n.R16UI),N===n.UNSIGNED_INT&&(J=n.R32UI),N===n.BYTE&&(J=n.R8I),N===n.SHORT&&(J=n.R16I),N===n.INT&&(J=n.R32I)),x===n.RG&&(N===n.FLOAT&&(J=n.RG32F),N===n.HALF_FLOAT&&(J=n.RG16F),N===n.UNSIGNED_BYTE&&(J=n.RG8)),x===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(J=n.RG8UI),N===n.UNSIGNED_SHORT&&(J=n.RG16UI),N===n.UNSIGNED_INT&&(J=n.RG32UI),N===n.BYTE&&(J=n.RG8I),N===n.SHORT&&(J=n.RG16I),N===n.INT&&(J=n.RG32I)),x===n.RGB&&N===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),x===n.RGBA){const fe=z?Fa:_t.getTransfer(V);N===n.FLOAT&&(J=n.RGBA32F),N===n.HALF_FLOAT&&(J=n.RGBA16F),N===n.UNSIGNED_BYTE&&(J=fe===Rt?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function y(b,x){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==gn&&b.minFilter!==Cn?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function T(b){const x=b.target;x.removeEventListener("dispose",T),D(x),x.isVideoTexture&&u.delete(x)}function O(b){const x=b.target;x.removeEventListener("dispose",O),G(x)}function D(b){const x=i.get(b);if(x.__webglInit===void 0)return;const N=b.source,V=f.get(N);if(V){const z=V[x.__cacheKey];z.usedTimes--,z.usedTimes===0&&w(b),Object.keys(V).length===0&&f.delete(N)}i.remove(b)}function w(b){const x=i.get(b);n.deleteTexture(x.__webglTexture);const N=b.source,V=f.get(N);delete V[x.__cacheKey],o.memory.textures--}function G(b){const x=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(x.__webglFramebuffer[V]))for(let z=0;z<x.__webglFramebuffer[V].length;z++)n.deleteFramebuffer(x.__webglFramebuffer[V][z]);else n.deleteFramebuffer(x.__webglFramebuffer[V]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[V])}else{if(Array.isArray(x.__webglFramebuffer))for(let V=0;V<x.__webglFramebuffer.length;V++)n.deleteFramebuffer(x.__webglFramebuffer[V]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let V=0;V<x.__webglColorRenderbuffer.length;V++)x.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[V]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const N=b.textures;for(let V=0,z=N.length;V<z;V++){const J=i.get(N[V]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(N[V])}i.remove(b)}let E=0;function M(){E=0}function W(){const b=E;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),E+=1,b}function $(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function L(b,x){const N=i.get(b);if(b.isVideoTexture&&Z(b),b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){const V=b.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(N,b,x);return}}t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+x)}function I(b,x){const N=i.get(b);if(b.version>0&&N.__version!==b.version){Be(N,b,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+x)}function k(b,x){const N=i.get(b);if(b.version>0&&N.__version!==b.version){Be(N,b,x);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+x)}function X(b,x){const N=i.get(b);if(b.version>0&&N.__version!==b.version){se(N,b,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+x)}const q={[Er]:n.REPEAT,[Zi]:n.CLAMP_TO_EDGE,[Ua]:n.MIRRORED_REPEAT},H={[gn]:n.NEAREST,[bp]:n.NEAREST_MIPMAP_NEAREST,[eo]:n.NEAREST_MIPMAP_LINEAR,[Cn]:n.LINEAR,[Ma]:n.LINEAR_MIPMAP_NEAREST,[Ci]:n.LINEAR_MIPMAP_LINEAR},pe={[e0]:n.NEVER,[o0]:n.ALWAYS,[t0]:n.LESS,[Up]:n.LEQUAL,[n0]:n.EQUAL,[r0]:n.GEQUAL,[i0]:n.GREATER,[s0]:n.NOTEQUAL};function ge(b,x){if(x.type===ai&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Cn||x.magFilter===Ma||x.magFilter===eo||x.magFilter===Ci||x.minFilter===Cn||x.minFilter===Ma||x.minFilter===eo||x.minFilter===Ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,q[x.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,q[x.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,q[x.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,H[x.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,H[x.minFilter]),x.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,pe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===gn||x.minFilter!==eo&&x.minFilter!==Ci||x.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Te(b,x){let N=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",T));const V=x.source;let z=f.get(V);z===void 0&&(z={},f.set(V,z));const J=$(x);if(J!==b.__cacheKey){z[J]===void 0&&(z[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),z[J].usedTimes++;const fe=z[b.__cacheKey];fe!==void 0&&(z[b.__cacheKey].usedTimes--,fe.usedTimes===0&&w(x)),b.__cacheKey=J,b.__webglTexture=z[J].texture}return N}function Be(b,x,N){let V=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(V=n.TEXTURE_3D);const z=Te(b,x),J=x.source;t.bindTexture(V,b.__webglTexture,n.TEXTURE0+N);const fe=i.get(J);if(J.version!==fe.__version||z===!0){t.activeTexture(n.TEXTURE0+N);const ie=_t.getPrimaries(_t.workingColorSpace),xe=x.colorSpace===Ki?null:_t.getPrimaries(x.colorSpace),Me=x.colorSpace===Ki||ie===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let ve=_(x.image,!1,s.maxTextureSize);ve=re(x,ve);const ye=r.convert(x.format,x.colorSpace),Ue=r.convert(x.type);let we=S(x.internalFormat,ye,Ue,x.colorSpace,x.isVideoTexture);ge(V,x);let Pe;const He=x.mipmaps,$e=x.isVideoTexture!==!0&&we!==Dp,ct=fe.__version===void 0||z===!0,Ge=J.dataReady,Xe=y(x,ve);if(x.isDepthTexture)we=n.DEPTH_COMPONENT16,x.type===ai?we=n.DEPTH_COMPONENT32F:x.type===Tr?we=n.DEPTH_COMPONENT24:x.type===wo&&(we=n.DEPTH24_STENCIL8),ct&&($e?t.texStorage2D(n.TEXTURE_2D,1,we,ve.width,ve.height):t.texImage2D(n.TEXTURE_2D,0,we,ve.width,ve.height,0,ye,Ue,null));else if(x.isDataTexture)if(He.length>0){$e&&ct&&t.texStorage2D(n.TEXTURE_2D,Xe,we,He[0].width,He[0].height);for(let Oe=0,v=He.length;Oe<v;Oe++)Pe=He[Oe],$e?Ge&&t.texSubImage2D(n.TEXTURE_2D,Oe,0,0,Pe.width,Pe.height,ye,Ue,Pe.data):t.texImage2D(n.TEXTURE_2D,Oe,we,Pe.width,Pe.height,0,ye,Ue,Pe.data);x.generateMipmaps=!1}else $e?(ct&&t.texStorage2D(n.TEXTURE_2D,Xe,we,ve.width,ve.height),Ge&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve.width,ve.height,ye,Ue,ve.data)):t.texImage2D(n.TEXTURE_2D,0,we,ve.width,ve.height,0,ye,Ue,ve.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){$e&&ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Xe,we,He[0].width,He[0].height,ve.depth);for(let Oe=0,v=He.length;Oe<v;Oe++)Pe=He[Oe],x.format!==Yn?ye!==null?$e?Ge&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Oe,0,0,0,Pe.width,Pe.height,ve.depth,ye,Pe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Oe,we,Pe.width,Pe.height,ve.depth,0,Pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?Ge&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Oe,0,0,0,Pe.width,Pe.height,ve.depth,ye,Ue,Pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Oe,we,Pe.width,Pe.height,ve.depth,0,ye,Ue,Pe.data)}else{$e&&ct&&t.texStorage2D(n.TEXTURE_2D,Xe,we,He[0].width,He[0].height);for(let Oe=0,v=He.length;Oe<v;Oe++)Pe=He[Oe],x.format!==Yn?ye!==null?$e?Ge&&t.compressedTexSubImage2D(n.TEXTURE_2D,Oe,0,0,Pe.width,Pe.height,ye,Pe.data):t.compressedTexImage2D(n.TEXTURE_2D,Oe,we,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?Ge&&t.texSubImage2D(n.TEXTURE_2D,Oe,0,0,Pe.width,Pe.height,ye,Ue,Pe.data):t.texImage2D(n.TEXTURE_2D,Oe,we,Pe.width,Pe.height,0,ye,Ue,Pe.data)}else if(x.isDataArrayTexture)$e?(ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Xe,we,ve.width,ve.height,ve.depth),Ge&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,ye,Ue,ve.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,ve.width,ve.height,ve.depth,0,ye,Ue,ve.data);else if(x.isData3DTexture)$e?(ct&&t.texStorage3D(n.TEXTURE_3D,Xe,we,ve.width,ve.height,ve.depth),Ge&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,ye,Ue,ve.data)):t.texImage3D(n.TEXTURE_3D,0,we,ve.width,ve.height,ve.depth,0,ye,Ue,ve.data);else if(x.isFramebufferTexture){if(ct)if($e)t.texStorage2D(n.TEXTURE_2D,Xe,we,ve.width,ve.height);else{let Oe=ve.width,v=ve.height;for(let ee=0;ee<Xe;ee++)t.texImage2D(n.TEXTURE_2D,ee,we,Oe,v,0,ye,Ue,null),Oe>>=1,v>>=1}}else if(He.length>0){if($e&&ct){const Oe=ce(He[0]);t.texStorage2D(n.TEXTURE_2D,Xe,we,Oe.width,Oe.height)}for(let Oe=0,v=He.length;Oe<v;Oe++)Pe=He[Oe],$e?Ge&&t.texSubImage2D(n.TEXTURE_2D,Oe,0,0,ye,Ue,Pe):t.texImage2D(n.TEXTURE_2D,Oe,we,ye,Ue,Pe);x.generateMipmaps=!1}else if($e){if(ct){const Oe=ce(ve);t.texStorage2D(n.TEXTURE_2D,Xe,we,Oe.width,Oe.height)}Ge&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Ue,ve)}else t.texImage2D(n.TEXTURE_2D,0,we,ye,Ue,ve);p(x)&&m(V),fe.__version=J.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function se(b,x,N){if(x.image.length!==6)return;const V=Te(b,x),z=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+N);const J=i.get(z);if(z.version!==J.__version||V===!0){t.activeTexture(n.TEXTURE0+N);const fe=_t.getPrimaries(_t.workingColorSpace),ie=x.colorSpace===Ki?null:_t.getPrimaries(x.colorSpace),xe=x.colorSpace===Ki||fe===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Me=x.isCompressedTexture||x.image[0].isCompressedTexture,ve=x.image[0]&&x.image[0].isDataTexture,ye=[];for(let v=0;v<6;v++)!Me&&!ve?ye[v]=_(x.image[v],!0,s.maxCubemapSize):ye[v]=ve?x.image[v].image:x.image[v],ye[v]=re(x,ye[v]);const Ue=ye[0],we=r.convert(x.format,x.colorSpace),Pe=r.convert(x.type),He=S(x.internalFormat,we,Pe,x.colorSpace),$e=x.isVideoTexture!==!0,ct=J.__version===void 0||V===!0,Ge=z.dataReady;let Xe=y(x,Ue);ge(n.TEXTURE_CUBE_MAP,x);let Oe;if(Me){$e&&ct&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Xe,He,Ue.width,Ue.height);for(let v=0;v<6;v++){Oe=ye[v].mipmaps;for(let ee=0;ee<Oe.length;ee++){const me=Oe[ee];x.format!==Yn?we!==null?$e?Ge&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+v,ee,0,0,me.width,me.height,we,me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+v,ee,He,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?Ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+v,ee,0,0,me.width,me.height,we,Pe,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+v,ee,He,me.width,me.height,0,we,Pe,me.data)}}}else{if(Oe=x.mipmaps,$e&&ct){Oe.length>0&&Xe++;const v=ce(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Xe,He,v.width,v.height)}for(let v=0;v<6;v++)if(ve){$e?Ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+v,0,0,0,ye[v].width,ye[v].height,we,Pe,ye[v].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+v,0,He,ye[v].width,ye[v].height,0,we,Pe,ye[v].data);for(let ee=0;ee<Oe.length;ee++){const be=Oe[ee].image[v].image;$e?Ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+v,ee+1,0,0,be.width,be.height,we,Pe,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+v,ee+1,He,be.width,be.height,0,we,Pe,be.data)}}else{$e?Ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+v,0,0,0,we,Pe,ye[v]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+v,0,He,we,Pe,ye[v]);for(let ee=0;ee<Oe.length;ee++){const me=Oe[ee];$e?Ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+v,ee+1,0,0,we,Pe,me.image[v]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+v,ee+1,He,we,Pe,me.image[v])}}}p(x)&&m(n.TEXTURE_CUBE_MAP),J.__version=z.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function B(b,x,N,V,z,J){const fe=r.convert(N.format,N.colorSpace),ie=r.convert(N.type),xe=S(N.internalFormat,fe,ie,N.colorSpace);if(!i.get(x).__hasExternalTextures){const ve=Math.max(1,x.width>>J),ye=Math.max(1,x.height>>J);z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?t.texImage3D(z,J,xe,ve,ye,x.depth,0,fe,ie,null):t.texImage2D(z,J,xe,ve,ye,0,fe,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),P(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,z,i.get(N).__webglTexture,0,C(x)):(z===n.TEXTURE_2D||z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,z,i.get(N).__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Y(b,x,N){if(n.bindRenderbuffer(n.RENDERBUFFER,b),x.depthBuffer&&!x.stencilBuffer){let V=n.DEPTH_COMPONENT24;if(N||P(x)){const z=x.depthTexture;z&&z.isDepthTexture&&(z.type===ai?V=n.DEPTH_COMPONENT32F:z.type===Tr&&(V=n.DEPTH_COMPONENT24));const J=C(x);P(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,J,V,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,J,V,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,V,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(x.depthBuffer&&x.stencilBuffer){const V=C(x);N&&P(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,V,n.DEPTH24_STENCIL8,x.width,x.height):P(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,V,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const V=x.textures;for(let z=0;z<V.length;z++){const J=V[z],fe=r.convert(J.format,J.colorSpace),ie=r.convert(J.type),xe=S(J.internalFormat,fe,ie,J.colorSpace),Me=C(x);N&&P(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,xe,x.width,x.height):P(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Me,xe,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,xe,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function he(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),L(x.depthTexture,0);const V=i.get(x.depthTexture).__webglTexture,z=C(x);if(x.depthTexture.format===_r)P(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0);else if(x.depthTexture.format===Mo)P(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function _e(b){const x=i.get(b),N=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");he(x.__webglFramebuffer,b)}else if(N){x.__webglDepthbuffer=[];for(let V=0;V<6;V++)t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[V]),x.__webglDepthbuffer[V]=n.createRenderbuffer(),Y(x.__webglDepthbuffer[V],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),Y(x.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(b,x,N){const V=i.get(b);x!==void 0&&B(V.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&_e(b)}function Ne(b){const x=b.texture,N=i.get(b),V=i.get(x);b.addEventListener("dispose",O);const z=b.textures,J=b.isWebGLCubeRenderTarget===!0,fe=z.length>1;if(fe||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=x.version,o.memory.textures++),J){N.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[ie]=[];for(let xe=0;xe<x.mipmaps.length;xe++)N.__webglFramebuffer[ie][xe]=n.createFramebuffer()}else N.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let ie=0;ie<x.mipmaps.length;ie++)N.__webglFramebuffer[ie]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(fe)for(let ie=0,xe=z.length;ie<xe;ie++){const Me=i.get(z[ie]);Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&P(b)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ie=0;ie<z.length;ie++){const xe=z[ie];N.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[ie]);const Me=r.convert(xe.format,xe.colorSpace),ve=r.convert(xe.type),ye=S(xe.internalFormat,Me,ve,xe.colorSpace,b.isXRRenderTarget===!0),Ue=C(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,ye,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,N.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),Y(N.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),ge(n.TEXTURE_CUBE_MAP,x);for(let ie=0;ie<6;ie++)if(x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)B(N.__webglFramebuffer[ie][xe],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe);else B(N.__webglFramebuffer[ie],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);p(x)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let ie=0,xe=z.length;ie<xe;ie++){const Me=z[ie],ve=i.get(Me);t.bindTexture(n.TEXTURE_2D,ve.__webglTexture),ge(n.TEXTURE_2D,Me),B(N.__webglFramebuffer,b,Me,n.COLOR_ATTACHMENT0+ie,n.TEXTURE_2D,0),p(Me)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ie=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,V.__webglTexture),ge(ie,x),x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)B(N.__webglFramebuffer[xe],b,x,n.COLOR_ATTACHMENT0,ie,xe);else B(N.__webglFramebuffer,b,x,n.COLOR_ATTACHMENT0,ie,0);p(x)&&m(ie),t.unbindTexture()}b.depthBuffer&&_e(b)}function ke(b){const x=b.textures;for(let N=0,V=x.length;N<V;N++){const z=x[N];if(p(z)){const J=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,fe=i.get(z).__webglTexture;t.bindTexture(J,fe),m(J),t.unbindTexture()}}}function K(b){if(b.samples>0&&P(b)===!1){const x=b.textures,N=b.width,V=b.height;let z=n.COLOR_BUFFER_BIT;const J=[],fe=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=i.get(b),xe=x.length>1;if(xe)for(let Me=0;Me<x.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let Me=0;Me<x.length;Me++){J.push(n.COLOR_ATTACHMENT0+Me),b.depthBuffer&&J.push(fe);const ve=ie.__ignoreDepthValues!==void 0?ie.__ignoreDepthValues:!1;if(ve===!1&&(b.depthBuffer&&(z|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&ie.__isTransmissionRenderTarget!==!0&&(z|=n.STENCIL_BUFFER_BIT)),xe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ie.__webglColorRenderbuffer[Me]),ve===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[fe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[fe])),xe){const ye=i.get(x[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ye,0)}n.blitFramebuffer(0,0,N,V,0,0,N,V,z,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,J)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xe)for(let Me=0;Me<x.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,ie.__webglColorRenderbuffer[Me]);const ve=i.get(x[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}}function C(b){return Math.min(s.maxSamples,b.samples)}function P(b){const x=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Z(b){const x=o.render.frame;u.get(b)!==x&&(u.set(b,x),b.update())}function re(b,x){const N=b.colorSpace,V=b.format,z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||N!==jt&&N!==Ki&&(_t.getTransfer(N)===Rt?(V!==Yn||z!==is)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}function ce(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=M,this.setTexture2D=L,this.setTexture2DArray=I,this.setTexture3D=k,this.setTextureCube=X,this.rebindTextures=Ie,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=B,this.useMultisampledRTT=P}function Mb(n,e){function t(i,s=Ki){let r;const o=_t.getTransfer(s);if(i===is)return n.UNSIGNED_BYTE;if(i===Ap)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wp)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Vv)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Hv)return n.BYTE;if(i===zv)return n.SHORT;if(i===Ep)return n.UNSIGNED_SHORT;if(i===Tp)return n.INT;if(i===Tr)return n.UNSIGNED_INT;if(i===ai)return n.FLOAT;if(i===Oa)return n.HALF_FLOAT;if(i===Gv)return n.ALPHA;if(i===Wv)return n.RGB;if(i===Yn)return n.RGBA;if(i===Xv)return n.LUMINANCE;if(i===jv)return n.LUMINANCE_ALPHA;if(i===_r)return n.DEPTH_COMPONENT;if(i===Mo)return n.DEPTH_STENCIL;if(i===Rp)return n.RED;if(i===Cp)return n.RED_INTEGER;if(i===qv)return n.RG;if(i===Pp)return n.RG_INTEGER;if(i===Lp)return n.RGBA_INTEGER;if(i===bl||i===El||i===Tl||i===Al)if(o===Rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===bl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===El)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Tl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Al)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===bl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===El)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Tl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Al)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sd||i===rd||i===od||i===ad)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===sd)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===rd)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===od)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ad)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Dp)return r=e.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===ld||i===cd)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ld)return o===Rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===cd)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ud||i===dd||i===fd||i===hd||i===pd||i===md||i===gd||i===_d||i===vd||i===xd||i===yd||i===Md||i===Sd||i===bd)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ud)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===dd)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fd)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===hd)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===pd)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===md)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gd)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_d)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vd)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xd)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yd)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Md)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sd)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bd)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wl||i===Ed||i===Td)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===wl)return o===Rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ed)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Td)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$v||i===Ad||i===wd||i===Rd)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===wl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ad)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wd)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rd)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===wo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Sb extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Es extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bb={type:"move"};class Ql{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;c.inputState.pinching&&f>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Es;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Eb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tb=`
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

}`;class Ab{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Xt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,s=new as({vertexShader:Eb,fragmentShader:Tb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ln(new il(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class wb extends Ns{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,g=null;const _=new Ab,p=t.getContextAttributes();let m=null,S=null;const y=[],T=[],O=new Ve;let D=null;const w=new hn;w.layers.enable(1),w.viewport=new Tt;const G=new hn;G.layers.enable(2),G.viewport=new Tt;const E=[w,G],M=new Sb;M.layers.enable(1),M.layers.enable(2);let W=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Y=y[B];return Y===void 0&&(Y=new Ql,y[B]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(B){let Y=y[B];return Y===void 0&&(Y=new Ql,y[B]=Y),Y.getGripSpace()},this.getHand=function(B){let Y=y[B];return Y===void 0&&(Y=new Ql,y[B]=Y),Y.getHandSpace()};function L(B){const Y=T.indexOf(B.inputSource);if(Y===-1)return;const he=y[Y];he!==void 0&&(he.update(B.inputSource,B.frame,c||o),he.dispatchEvent({type:B.type,data:B.inputSource}))}function I(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",k);for(let B=0;B<y.length;B++){const Y=T[B];Y!==null&&(T[B]=null,y[B].disconnect(Y))}W=null,$=null,_.reset(),e.setRenderTarget(m),h=null,f=null,d=null,s=null,S=null,se.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",I),s.addEventListener("inputsourceschange",k),p.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(O),s.renderState.layers===void 0){const Y={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,Y),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new Ps(h.framebufferWidth,h.framebufferHeight,{format:Yn,type:is,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Y=null,he=null,_e=null;p.depth&&(_e=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=p.stencil?Mo:_r,he=p.stencil?wo:Tr);const Ie={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(Ie),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Ps(f.textureWidth,f.textureHeight,{format:Yn,type:is,depthTexture:new $p(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const Ne=e.properties.get(S);Ne.__ignoreDepthValues=f.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),se.setContext(s),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function k(B){for(let Y=0;Y<B.removed.length;Y++){const he=B.removed[Y],_e=T.indexOf(he);_e>=0&&(T[_e]=null,y[_e].disconnect(he))}for(let Y=0;Y<B.added.length;Y++){const he=B.added[Y];let _e=T.indexOf(he);if(_e===-1){for(let Ne=0;Ne<y.length;Ne++)if(Ne>=T.length){T.push(he),_e=Ne;break}else if(T[Ne]===null){T[Ne]=he,_e=Ne;break}if(_e===-1)break}const Ie=y[_e];Ie&&Ie.connect(he)}}const X=new U,q=new U;function H(B,Y,he){X.setFromMatrixPosition(Y.matrixWorld),q.setFromMatrixPosition(he.matrixWorld);const _e=X.distanceTo(q),Ie=Y.projectionMatrix.elements,Ne=he.projectionMatrix.elements,ke=Ie[14]/(Ie[10]-1),K=Ie[14]/(Ie[10]+1),C=(Ie[9]+1)/Ie[5],P=(Ie[9]-1)/Ie[5],Z=(Ie[8]-1)/Ie[0],re=(Ne[8]+1)/Ne[0],ce=ke*Z,b=ke*re,x=_e/(-Z+re),N=x*-Z;Y.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(N),B.translateZ(x),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const V=ke+x,z=K+x,J=ce-N,fe=b+(_e-N),ie=C*K/z*V,xe=P*K/z*V;B.projectionMatrix.makePerspective(J,fe,ie,xe,V,z),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function pe(B,Y){Y===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Y.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;_.texture!==null&&(B.near=_.depthNear,B.far=_.depthFar),M.near=G.near=w.near=B.near,M.far=G.far=w.far=B.far,(W!==M.near||$!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),W=M.near,$=M.far,w.near=W,w.far=$,G.near=W,G.far=$,w.updateProjectionMatrix(),G.updateProjectionMatrix(),B.updateProjectionMatrix());const Y=B.parent,he=M.cameras;pe(M,Y);for(let _e=0;_e<he.length;_e++)pe(he[_e],Y);he.length===2?H(M,w,G):M.projectionMatrix.copy(w.projectionMatrix),ge(B,M,Y)};function ge(B,Y,he){he===null?B.matrix.copy(Y.matrixWorld):(B.matrix.copy(he.matrixWorld),B.matrix.invert(),B.matrix.multiply(Y.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(Y.projectionMatrix),B.projectionMatrixInverse.copy(Y.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=wr*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(B){l=B,f!==null&&(f.fixedFoveation=B),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=B)},this.hasDepthSensing=function(){return _.texture!==null};let Te=null;function Be(B,Y){if(u=Y.getViewerPose(c||o),g=Y,u!==null){const he=u.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let _e=!1;he.length!==M.cameras.length&&(M.cameras.length=0,_e=!0);for(let Ne=0;Ne<he.length;Ne++){const ke=he[Ne];let K=null;if(h!==null)K=h.getViewport(ke);else{const P=d.getViewSubImage(f,ke);K=P.viewport,Ne===0&&(e.setRenderTargetTextures(S,P.colorTexture,f.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(S))}let C=E[Ne];C===void 0&&(C=new hn,C.layers.enable(Ne),C.viewport=new Tt,E[Ne]=C),C.matrix.fromArray(ke.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(ke.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(K.x,K.y,K.width,K.height),Ne===0&&(M.matrix.copy(C.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),_e===!0&&M.cameras.push(C)}const Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Ne=d.getDepthInformation(he[0]);Ne&&Ne.isValid&&Ne.texture&&_.init(e,Ne,s.renderState)}}for(let he=0;he<y.length;he++){const _e=T[he],Ie=y[he];_e!==null&&Ie!==void 0&&Ie.update(_e,Y,c||o)}_.render(e,M),Te&&Te(B,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),g=null}const se=new qp;se.setAnimationLoop(Be),this.setAnimationLoop=function(B){Te=B},this.dispose=function(){}}}const _s=new pi,Rb=new Ke;function Cb(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Wp(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,S,y,T){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&h(p,m,T)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,S,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Mn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Mn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m),y=S.envMap,T=S.envMapRotation;if(y&&(p.envMap.value=y,_s.copy(T),_s.x*=-1,_s.y*=-1,_s.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),p.envMapRotation.value.setFromMatrix4(Rb.makeRotationFromEuler(_s)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const O=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*O,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=y*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Mn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Pb(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const T=y.program;i.uniformBlockBinding(S,T)}function c(S,y){let T=s[S.id];T===void 0&&(g(S),T=u(S),s[S.id]=T,S.addEventListener("dispose",p));const O=y.program;i.updateUBOMapping(S,O);const D=e.render.frame;r[S.id]!==D&&(f(S),r[S.id]=D)}function u(S){const y=d();S.__bindingPointIndex=y;const T=n.createBuffer(),O=S.__size,D=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,O,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,T),T}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const y=s[S.id],T=S.uniforms,O=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let D=0,w=T.length;D<w;D++){const G=Array.isArray(T[D])?T[D]:[T[D]];for(let E=0,M=G.length;E<M;E++){const W=G[E];if(h(W,D,E,O)===!0){const $=W.__offset,L=Array.isArray(W.value)?W.value:[W.value];let I=0;for(let k=0;k<L.length;k++){const X=L[k],q=_(X);typeof X=="number"||typeof X=="boolean"?(W.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,$+I,W.__data)):X.isMatrix3?(W.__data[0]=X.elements[0],W.__data[1]=X.elements[1],W.__data[2]=X.elements[2],W.__data[3]=0,W.__data[4]=X.elements[3],W.__data[5]=X.elements[4],W.__data[6]=X.elements[5],W.__data[7]=0,W.__data[8]=X.elements[6],W.__data[9]=X.elements[7],W.__data[10]=X.elements[8],W.__data[11]=0):(X.toArray(W.__data,I),I+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,$,W.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(S,y,T,O){const D=S.value,w=y+"_"+T;if(O[w]===void 0)return typeof D=="number"||typeof D=="boolean"?O[w]=D:O[w]=D.clone(),!0;{const G=O[w];if(typeof D=="number"||typeof D=="boolean"){if(G!==D)return O[w]=D,!0}else if(G.equals(D)===!1)return G.copy(D),!0}return!1}function g(S){const y=S.uniforms;let T=0;const O=16;for(let w=0,G=y.length;w<G;w++){const E=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,W=E.length;M<W;M++){const $=E[M],L=Array.isArray($.value)?$.value:[$.value];for(let I=0,k=L.length;I<k;I++){const X=L[I],q=_(X),H=T%O;H!==0&&O-H<q.boundary&&(T+=O-H),$.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=T,T+=q.storage}}}const D=T%O;return D>0&&(T+=O-D),S.__size=T,S.__cache={},this}function _(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function p(S){const y=S.target;y.removeEventListener("dispose",p);const T=o.indexOf(y.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(const S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class Lb{constructor(e={}){const{canvas:t=b0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const h=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gt,this._useLegacyLights=!1,this.toneMapping=ns,this.toneMappingExposure=1;const y=this;let T=!1,O=0,D=0,w=null,G=-1,E=null;const M=new Tt,W=new Tt;let $=null;const L=new qe(0);let I=0,k=t.width,X=t.height,q=1,H=null,pe=null;const ge=new Tt(0,0,k,X),Te=new Tt(0,0,k,X);let Be=!1;const se=new nl;let B=!1,Y=!1;const he=new Ke,_e=new Ve,Ie=new U,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return w===null?q:1}let K=i;function C(R,j){const ne=t.getContext(R,j);return ne!==null?ne:null}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ou}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",be,!1),K===null){const j="webgl2";if(K=C(j,R),K===null)throw C(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let P,Z,re,ce,b,x,N,V,z,J,fe,ie,xe,Me,ve,ye,Ue,we,Pe,He,$e,ct,Ge,Xe;function Oe(){P=new kM(K),P.init(),Z=new IM(K,P,e),ct=new Mb(K,P),re=new xb(K),ce=new VM(K),b=new rb,x=new yb(K,P,re,b,Z,ct,ce),N=new UM(y),V=new BM(y),z=new $0(K),Ge=new LM(K,z),J=new HM(K,z,ce,Ge),fe=new WM(K,J,z,ce),Pe=new GM(K,Z,x),ye=new NM(b),ie=new sb(y,N,V,P,Z,Ge,ye),xe=new Cb(y,b),Me=new ab,ve=new hb(P),we=new PM(y,N,V,re,fe,f,l),Ue=new vb(y,fe,Z),Xe=new Pb(K,ce,Z,re),He=new DM(K,P,ce),$e=new zM(K,P,ce),ce.programs=ie.programs,y.capabilities=Z,y.extensions=P,y.properties=b,y.renderLists=Me,y.shadowMap=Ue,y.state=re,y.info=ce}Oe();const v=new wb(y,K);this.xr=v,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const R=P.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=P.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(k,X,!1))},this.getSize=function(R){return R.set(k,X)},this.setSize=function(R,j,ne=!0){if(v.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=R,X=j,t.width=Math.floor(R*q),t.height=Math.floor(j*q),ne===!0&&(t.style.width=R+"px",t.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(k*q,X*q).floor()},this.setDrawingBufferSize=function(R,j,ne){k=R,X=j,q=ne,t.width=Math.floor(R*ne),t.height=Math.floor(j*ne),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(M)},this.getViewport=function(R){return R.copy(ge)},this.setViewport=function(R,j,ne,oe){R.isVector4?ge.set(R.x,R.y,R.z,R.w):ge.set(R,j,ne,oe),re.viewport(M.copy(ge).multiplyScalar(q).round())},this.getScissor=function(R){return R.copy(Te)},this.setScissor=function(R,j,ne,oe){R.isVector4?Te.set(R.x,R.y,R.z,R.w):Te.set(R,j,ne,oe),re.scissor(W.copy(Te).multiplyScalar(q).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(R){re.setScissorTest(Be=R)},this.setOpaqueSort=function(R){H=R},this.setTransparentSort=function(R){pe=R},this.getClearColor=function(R){return R.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(R=!0,j=!0,ne=!0){let oe=0;if(R){let te=!1;if(w!==null){const Ae=w.texture.format;te=Ae===Lp||Ae===Pp||Ae===Cp}if(te){const Ae=w.texture.type,Fe=Ae===is||Ae===Tr||Ae===Ep||Ae===wo||Ae===Ap||Ae===wp,ze=we.getClearColor(),We=we.getClearAlpha(),Ze=ze.r,je=ze.g,Je=ze.b;Fe?(h[0]=Ze,h[1]=je,h[2]=Je,h[3]=We,K.clearBufferuiv(K.COLOR,0,h)):(g[0]=Ze,g[1]=je,g[2]=Je,g[3]=We,K.clearBufferiv(K.COLOR,0,g))}else oe|=K.COLOR_BUFFER_BIT}j&&(oe|=K.DEPTH_BUFFER_BIT),ne&&(oe|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Me.dispose(),ve.dispose(),b.dispose(),N.dispose(),V.dispose(),fe.dispose(),Ge.dispose(),Xe.dispose(),ie.dispose(),v.dispose(),v.removeEventListener("sessionstart",It),v.removeEventListener("sessionend",Pt),Jt.stop()};function ee(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const R=ce.autoReset,j=Ue.enabled,ne=Ue.autoUpdate,oe=Ue.needsUpdate,te=Ue.type;Oe(),ce.autoReset=R,Ue.enabled=j,Ue.autoUpdate=ne,Ue.needsUpdate=oe,Ue.type=te}function be(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function De(R){const j=R.target;j.removeEventListener("dispose",De),lt(j)}function lt(R){it(R),b.remove(R)}function it(R){const j=b.get(R).programs;j!==void 0&&(j.forEach(function(ne){ie.releaseProgram(ne)}),R.isShaderMaterial&&ie.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,ne,oe,te,Ae){j===null&&(j=Ne);const Fe=te.isMesh&&te.matrixWorld.determinant()<0,ze=fl(R,j,ne,oe,te);re.setMaterial(oe,Fe);let We=ne.index,Ze=1;if(oe.wireframe===!0){if(We=J.getWireframeAttribute(ne),We===void 0)return;Ze=2}const je=ne.drawRange,Je=ne.attributes.position;let Ct=je.start*Ze,on=(je.start+je.count)*Ze;Ae!==null&&(Ct=Math.max(Ct,Ae.start*Ze),on=Math.min(on,(Ae.start+Ae.count)*Ze)),We!==null?(Ct=Math.max(Ct,0),on=Math.min(on,We.count)):Je!=null&&(Ct=Math.max(Ct,0),on=Math.min(on,Je.count));const Ot=on-Ct;if(Ot<0||Ot===1/0)return;Ge.setup(te,oe,ze,ne,We);let Hn,At=He;if(We!==null&&(Hn=z.get(We),At=$e,At.setIndex(Hn)),te.isMesh)oe.wireframe===!0?(re.setLineWidth(oe.wireframeLinewidth*ke()),At.setMode(K.LINES)):At.setMode(K.TRIANGLES);else if(te.isLine){let Qe=oe.linewidth;Qe===void 0&&(Qe=1),re.setLineWidth(Qe*ke()),te.isLineSegments?At.setMode(K.LINES):te.isLineLoop?At.setMode(K.LINE_LOOP):At.setMode(K.LINE_STRIP)}else te.isPoints?At.setMode(K.POINTS):te.isSprite&&At.setMode(K.TRIANGLES);if(te.isBatchedMesh)At.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else if(te.isInstancedMesh)At.renderInstances(Ct,Ot,te.count);else if(ne.isInstancedBufferGeometry){const Qe=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,cs=Math.min(ne.instanceCount,Qe);At.renderInstances(Ct,Ot,cs)}else At.render(Ct,Ot)};function St(R,j,ne){R.transparent===!0&&R.side===jn&&R.forceSinglePass===!1?(R.side=Mn,R.needsUpdate=!0,Bs(R,j,ne),R.side=Ni,R.needsUpdate=!0,Bs(R,j,ne),R.side=jn):Bs(R,j,ne)}this.compile=function(R,j,ne=null){ne===null&&(ne=R),p=ve.get(ne),p.init(),S.push(p),ne.traverseVisible(function(te){te.isLight&&te.layers.test(j.layers)&&(p.pushLight(te),te.castShadow&&p.pushShadow(te))}),R!==ne&&R.traverseVisible(function(te){te.isLight&&te.layers.test(j.layers)&&(p.pushLight(te),te.castShadow&&p.pushShadow(te))}),p.setupLights(y._useLegacyLights);const oe=new Set;return R.traverse(function(te){const Ae=te.material;if(Ae)if(Array.isArray(Ae))for(let Fe=0;Fe<Ae.length;Fe++){const ze=Ae[Fe];St(ze,ne,te),oe.add(ze)}else St(Ae,ne,te),oe.add(Ae)}),S.pop(),p=null,oe},this.compileAsync=function(R,j,ne=null){const oe=this.compile(R,j,ne);return new Promise(te=>{function Ae(){if(oe.forEach(function(Fe){b.get(Fe).currentProgram.isReady()&&oe.delete(Fe)}),oe.size===0){te(R);return}setTimeout(Ae,10)}P.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Ut=null;function pt(R){Ut&&Ut(R)}function It(){Jt.stop()}function Pt(){Jt.start()}const Jt=new qp;Jt.setAnimationLoop(pt),typeof self<"u"&&Jt.setContext(self),this.setAnimationLoop=function(R){Ut=R,v.setAnimationLoop(R),R===null?Jt.stop():Jt.start()},v.addEventListener("sessionstart",It),v.addEventListener("sessionend",Pt),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),v.enabled===!0&&v.isPresenting===!0&&(v.cameraAutoUpdate===!0&&v.updateCamera(j),j=v.getCamera()),R.isScene===!0&&R.onBeforeRender(y,R,j,w),p=ve.get(R,S.length),p.init(),S.push(p),he.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),se.setFromProjectionMatrix(he),Y=this.localClippingEnabled,B=ye.init(this.clippingPlanes,Y),_=Me.get(R,m.length),_.init(),m.push(_),qt(R,j,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(H,pe),this.info.render.frame++,B===!0&&ye.beginShadows();const ne=p.state.shadowsArray;if(Ue.render(ne,R,j),B===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),(v.enabled===!1||v.isPresenting===!1||v.hasDepthSensing()===!1)&&we.render(_,R),p.setupLights(y._useLegacyLights),j.isArrayCamera){const oe=j.cameras;for(let te=0,Ae=oe.length;te<Ae;te++){const Fe=oe[te];Qn(_,R,Fe,Fe.viewport)}}else Qn(_,R,j);w!==null&&(x.updateMultisampleRenderTarget(w),x.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(y,R,j),Ge.resetDefaultState(),G=-1,E=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function qt(R,j,ne,oe){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)ne=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||se.intersectsSprite(R)){oe&&Ie.setFromMatrixPosition(R.matrixWorld).applyMatrix4(he);const Fe=fe.update(R),ze=R.material;ze.visible&&_.push(R,Fe,ze,ne,Ie.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||se.intersectsObject(R))){const Fe=fe.update(R),ze=R.material;if(oe&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ie.copy(R.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Ie.copy(Fe.boundingSphere.center)),Ie.applyMatrix4(R.matrixWorld).applyMatrix4(he)),Array.isArray(ze)){const We=Fe.groups;for(let Ze=0,je=We.length;Ze<je;Ze++){const Je=We[Ze],Ct=ze[Je.materialIndex];Ct&&Ct.visible&&_.push(R,Fe,Ct,ne,Ie.z,Je)}}else ze.visible&&_.push(R,Fe,ze,ne,Ie.z,null)}}const Ae=R.children;for(let Fe=0,ze=Ae.length;Fe<ze;Fe++)qt(Ae[Fe],j,ne,oe)}function Qn(R,j,ne,oe){const te=R.opaque,Ae=R.transmissive,Fe=R.transparent;p.setupLightsView(ne),B===!0&&ye.setGlobalState(y.clippingPlanes,ne),Ae.length>0&&Fi(te,Ae,j,ne),oe&&re.viewport(M.copy(oe)),te.length>0&&_i(te,j,ne),Ae.length>0&&_i(Ae,j,ne),Fe.length>0&&_i(Fe,j,ne),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function Fi(R,j,ne,oe){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(p.state.transmissionRenderTarget===null){p.state.transmissionRenderTarget=new Ps(1,1,{generateMipmaps:!0,type:P.has("EXT_color_buffer_half_float")||P.has("EXT_color_buffer_float")?Oa:is,minFilter:Ci,samples:4,stencilBuffer:r});const Ze=b.get(p.state.transmissionRenderTarget);Ze.__isTransmissionRenderTarget=!0}const Ae=p.state.transmissionRenderTarget;y.getDrawingBufferSize(_e),Ae.setSize(_e.x,_e.y);const Fe=y.getRenderTarget();y.setRenderTarget(Ae),y.getClearColor(L),I=y.getClearAlpha(),I<1&&y.setClearColor(16777215,.5),y.clear();const ze=y.toneMapping;y.toneMapping=ns,_i(R,ne,oe),x.updateMultisampleRenderTarget(Ae),x.updateRenderTargetMipmap(Ae);let We=!1;for(let Ze=0,je=j.length;Ze<je;Ze++){const Je=j[Ze],Ct=Je.object,on=Je.geometry,Ot=Je.material,Hn=Je.group;if(Ot.side===jn&&Ct.layers.test(oe.layers)){const At=Ot.side;Ot.side=Mn,Ot.needsUpdate=!0,Fs(Ct,ne,oe,on,Ot,Hn),Ot.side=At,Ot.needsUpdate=!0,We=!0}}We===!0&&(x.updateMultisampleRenderTarget(Ae),x.updateRenderTargetMipmap(Ae)),y.setRenderTarget(Fe),y.setClearColor(L,I),y.toneMapping=ze}function _i(R,j,ne){const oe=j.isScene===!0?j.overrideMaterial:null;for(let te=0,Ae=R.length;te<Ae;te++){const Fe=R[te],ze=Fe.object,We=Fe.geometry,Ze=oe===null?Fe.material:oe,je=Fe.group;ze.layers.test(ne.layers)&&Fs(ze,j,ne,We,Ze,je)}}function Fs(R,j,ne,oe,te,Ae){R.onBeforeRender(y,j,ne,oe,te,Ae),R.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),te.onBeforeRender(y,j,ne,oe,R,Ae),te.transparent===!0&&te.side===jn&&te.forceSinglePass===!1?(te.side=Mn,te.needsUpdate=!0,y.renderBufferDirect(ne,j,oe,te,R,Ae),te.side=Ni,te.needsUpdate=!0,y.renderBufferDirect(ne,j,oe,te,R,Ae),te.side=jn):y.renderBufferDirect(ne,j,oe,te,R,Ae),R.onAfterRender(y,j,ne,oe,te,Ae)}function Bs(R,j,ne){j.isScene!==!0&&(j=Ne);const oe=b.get(R),te=p.state.lights,Ae=p.state.shadowsArray,Fe=te.state.version,ze=ie.getParameters(R,te.state,Ae,j,ne),We=ie.getProgramCacheKey(ze);let Ze=oe.programs;oe.environment=R.isMeshStandardMaterial?j.environment:null,oe.fog=j.fog,oe.envMap=(R.isMeshStandardMaterial?V:N).get(R.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,Ze===void 0&&(R.addEventListener("dispose",De),Ze=new Map,oe.programs=Ze);let je=Ze.get(We);if(je!==void 0){if(oe.currentProgram===je&&oe.lightsStateVersion===Fe)return No(R,ze),je}else ze.uniforms=ie.getUniforms(R),R.onBuild(ne,ze,y),R.onBeforeCompile(ze,y),je=ie.acquireProgram(ze,We),Ze.set(We,je),oe.uniforms=ze.uniforms;const Je=oe.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Je.clippingPlanes=ye.uniform),No(R,ze),oe.needsLights=kr(R),oe.lightsStateVersion=Fe,oe.needsLights&&(Je.ambientLightColor.value=te.state.ambient,Je.lightProbe.value=te.state.probe,Je.directionalLights.value=te.state.directional,Je.directionalLightShadows.value=te.state.directionalShadow,Je.spotLights.value=te.state.spot,Je.spotLightShadows.value=te.state.spotShadow,Je.rectAreaLights.value=te.state.rectArea,Je.ltc_1.value=te.state.rectAreaLTC1,Je.ltc_2.value=te.state.rectAreaLTC2,Je.pointLights.value=te.state.point,Je.pointLightShadows.value=te.state.pointShadow,Je.hemisphereLights.value=te.state.hemi,Je.directionalShadowMap.value=te.state.directionalShadowMap,Je.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Je.spotShadowMap.value=te.state.spotShadowMap,Je.spotLightMatrix.value=te.state.spotLightMatrix,Je.spotLightMap.value=te.state.spotLightMap,Je.pointShadowMap.value=te.state.pointShadowMap,Je.pointShadowMatrix.value=te.state.pointShadowMatrix),oe.currentProgram=je,oe.uniformsList=null,je}function Br(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=Sa.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function No(R,j){const ne=b.get(R);ne.outputColorSpace=j.outputColorSpace,ne.batching=j.batching,ne.instancing=j.instancing,ne.instancingColor=j.instancingColor,ne.instancingMorph=j.instancingMorph,ne.skinning=j.skinning,ne.morphTargets=j.morphTargets,ne.morphNormals=j.morphNormals,ne.morphColors=j.morphColors,ne.morphTargetsCount=j.morphTargetsCount,ne.numClippingPlanes=j.numClippingPlanes,ne.numIntersection=j.numClipIntersection,ne.vertexAlphas=j.vertexAlphas,ne.vertexTangents=j.vertexTangents,ne.toneMapping=j.toneMapping}function fl(R,j,ne,oe,te){j.isScene!==!0&&(j=Ne),x.resetTextureUnits();const Ae=j.fog,Fe=oe.isMeshStandardMaterial?j.environment:null,ze=w===null?y.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:jt,We=(oe.isMeshStandardMaterial?V:N).get(oe.envMap||Fe),Ze=oe.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,je=!!ne.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Je=!!ne.morphAttributes.position,Ct=!!ne.morphAttributes.normal,on=!!ne.morphAttributes.color;let Ot=ns;oe.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ot=y.toneMapping);const Hn=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,At=Hn!==void 0?Hn.length:0,Qe=b.get(oe),cs=p.state.lights;if(B===!0&&(Y===!0||R!==E)){const Ce=R===E&&oe.id===G;ye.setState(oe,R,Ce)}let bt=!1;oe.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==cs.state.version||Qe.outputColorSpace!==ze||te.isBatchedMesh&&Qe.batching===!1||!te.isBatchedMesh&&Qe.batching===!0||te.isInstancedMesh&&Qe.instancing===!1||!te.isInstancedMesh&&Qe.instancing===!0||te.isSkinnedMesh&&Qe.skinning===!1||!te.isSkinnedMesh&&Qe.skinning===!0||te.isInstancedMesh&&Qe.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Qe.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Qe.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Qe.instancingMorph===!1&&te.morphTexture!==null||Qe.envMap!==We||oe.fog===!0&&Qe.fog!==Ae||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==ye.numPlanes||Qe.numIntersection!==ye.numIntersection)||Qe.vertexAlphas!==Ze||Qe.vertexTangents!==je||Qe.morphTargets!==Je||Qe.morphNormals!==Ct||Qe.morphColors!==on||Qe.toneMapping!==Ot||Qe.morphTargetsCount!==At)&&(bt=!0):(bt=!0,Qe.__version=oe.version);let A=Qe.currentProgram;bt===!0&&(A=Bs(oe,j,te));let F=!1,Q=!1,le=!1;const ue=A.getUniforms(),Se=Qe.uniforms;if(re.useProgram(A.program)&&(F=!0,Q=!0,le=!0),oe.id!==G&&(G=oe.id,Q=!0),F||E!==R){ue.setValue(K,"projectionMatrix",R.projectionMatrix),ue.setValue(K,"viewMatrix",R.matrixWorldInverse);const Ce=ue.map.cameraPosition;Ce!==void 0&&Ce.setValue(K,Ie.setFromMatrixPosition(R.matrixWorld)),Z.logarithmicDepthBuffer&&ue.setValue(K,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&ue.setValue(K,"isOrthographic",R.isOrthographicCamera===!0),E!==R&&(E=R,Q=!0,le=!0)}if(te.isSkinnedMesh){ue.setOptional(K,te,"bindMatrix"),ue.setOptional(K,te,"bindMatrixInverse");const Ce=te.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),ue.setValue(K,"boneTexture",Ce.boneTexture,x))}te.isBatchedMesh&&(ue.setOptional(K,te,"batchingTexture"),ue.setValue(K,"batchingTexture",te._matricesTexture,x));const Ee=ne.morphAttributes;if((Ee.position!==void 0||Ee.normal!==void 0||Ee.color!==void 0)&&Pe.update(te,ne,A),(Q||Qe.receiveShadow!==te.receiveShadow)&&(Qe.receiveShadow=te.receiveShadow,ue.setValue(K,"receiveShadow",te.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(Se.envMap.value=We,Se.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&j.environment!==null&&(Se.envMapIntensity.value=j.environmentIntensity),Q&&(ue.setValue(K,"toneMappingExposure",y.toneMappingExposure),Qe.needsLights&&ks(Se,le),Ae&&oe.fog===!0&&xe.refreshFogUniforms(Se,Ae),xe.refreshMaterialUniforms(Se,oe,q,X,p.state.transmissionRenderTarget),Sa.upload(K,Br(Qe),Se,x)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Sa.upload(K,Br(Qe),Se,x),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&ue.setValue(K,"center",te.center),ue.setValue(K,"modelViewMatrix",te.modelViewMatrix),ue.setValue(K,"normalMatrix",te.normalMatrix),ue.setValue(K,"modelMatrix",te.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const Ce=oe.uniformsGroups;for(let Mt=0,ft=Ce.length;Mt<ft;Mt++){const ut=Ce[Mt];Xe.update(ut,A),Xe.bind(ut,A)}}return A}function ks(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function kr(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,j,ne){b.get(R.texture).__webglTexture=j,b.get(R.depthTexture).__webglTexture=ne;const oe=b.get(R);oe.__hasExternalTextures=!0,oe.__autoAllocateDepthBuffer=ne===void 0,oe.__autoAllocateDepthBuffer||P.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,j){const ne=b.get(R);ne.__webglFramebuffer=j,ne.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(R,j=0,ne=0){w=R,O=j,D=ne;let oe=!0,te=null,Ae=!1,Fe=!1;if(R){const We=b.get(R);We.__useDefaultFramebuffer!==void 0?(re.bindFramebuffer(K.FRAMEBUFFER,null),oe=!1):We.__webglFramebuffer===void 0?x.setupRenderTarget(R):We.__hasExternalTextures&&x.rebindTextures(R,b.get(R.texture).__webglTexture,b.get(R.depthTexture).__webglTexture);const Ze=R.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Fe=!0);const je=b.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(je[j])?te=je[j][ne]:te=je[j],Ae=!0):R.samples>0&&x.useMultisampledRTT(R)===!1?te=b.get(R).__webglMultisampledFramebuffer:Array.isArray(je)?te=je[ne]:te=je,M.copy(R.viewport),W.copy(R.scissor),$=R.scissorTest}else M.copy(ge).multiplyScalar(q).floor(),W.copy(Te).multiplyScalar(q).floor(),$=Be;if(re.bindFramebuffer(K.FRAMEBUFFER,te)&&oe&&re.drawBuffers(R,te),re.viewport(M),re.scissor(W),re.setScissorTest($),Ae){const We=b.get(R.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+j,We.__webglTexture,ne)}else if(Fe){const We=b.get(R.texture),Ze=j||0;K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,We.__webglTexture,ne||0,Ze)}G=-1},this.readRenderTargetPixels=function(R,j,ne,oe,te,Ae,Fe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Fe!==void 0&&(ze=ze[Fe]),ze){re.bindFramebuffer(K.FRAMEBUFFER,ze);try{const We=R.texture,Ze=We.format,je=We.type;if(Ze!==Yn&&ct.convert(Ze)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Je=je===Oa&&(P.has("EXT_color_buffer_half_float")||P.has("EXT_color_buffer_float"));if(je!==is&&ct.convert(je)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_TYPE)&&je!==ai&&!Je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-oe&&ne>=0&&ne<=R.height-te&&K.readPixels(j,ne,oe,te,ct.convert(Ze),ct.convert(je),Ae)}finally{const We=w!==null?b.get(w).__webglFramebuffer:null;re.bindFramebuffer(K.FRAMEBUFFER,We)}}},this.copyFramebufferToTexture=function(R,j,ne=0){const oe=Math.pow(2,-ne),te=Math.floor(j.image.width*oe),Ae=Math.floor(j.image.height*oe);x.setTexture2D(j,0),K.copyTexSubImage2D(K.TEXTURE_2D,ne,0,0,R.x,R.y,te,Ae),re.unbindTexture()},this.copyTextureToTexture=function(R,j,ne,oe=0){const te=j.image.width,Ae=j.image.height,Fe=ct.convert(ne.format),ze=ct.convert(ne.type);x.setTexture2D(ne,0),K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,ne.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,ne.unpackAlignment),j.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,oe,R.x,R.y,te,Ae,Fe,ze,j.image.data):j.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,oe,R.x,R.y,j.mipmaps[0].width,j.mipmaps[0].height,Fe,j.mipmaps[0].data):K.texSubImage2D(K.TEXTURE_2D,oe,R.x,R.y,Fe,ze,j.image),oe===0&&ne.generateMipmaps&&K.generateMipmap(K.TEXTURE_2D),re.unbindTexture()},this.copyTextureToTexture3D=function(R,j,ne,oe,te=0){const Ae=Math.round(R.max.x-R.min.x),Fe=Math.round(R.max.y-R.min.y),ze=R.max.z-R.min.z+1,We=ct.convert(oe.format),Ze=ct.convert(oe.type);let je;if(oe.isData3DTexture)x.setTexture3D(oe,0),je=K.TEXTURE_3D;else if(oe.isDataArrayTexture||oe.isCompressedArrayTexture)x.setTexture2DArray(oe,0),je=K.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,oe.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,oe.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,oe.unpackAlignment);const Je=K.getParameter(K.UNPACK_ROW_LENGTH),Ct=K.getParameter(K.UNPACK_IMAGE_HEIGHT),on=K.getParameter(K.UNPACK_SKIP_PIXELS),Ot=K.getParameter(K.UNPACK_SKIP_ROWS),Hn=K.getParameter(K.UNPACK_SKIP_IMAGES),At=ne.isCompressedTexture?ne.mipmaps[te]:ne.image;K.pixelStorei(K.UNPACK_ROW_LENGTH,At.width),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,At.height),K.pixelStorei(K.UNPACK_SKIP_PIXELS,R.min.x),K.pixelStorei(K.UNPACK_SKIP_ROWS,R.min.y),K.pixelStorei(K.UNPACK_SKIP_IMAGES,R.min.z),ne.isDataTexture||ne.isData3DTexture?K.texSubImage3D(je,te,j.x,j.y,j.z,Ae,Fe,ze,We,Ze,At.data):oe.isCompressedArrayTexture?K.compressedTexSubImage3D(je,te,j.x,j.y,j.z,Ae,Fe,ze,We,At.data):K.texSubImage3D(je,te,j.x,j.y,j.z,Ae,Fe,ze,We,Ze,At),K.pixelStorei(K.UNPACK_ROW_LENGTH,Je),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Ct),K.pixelStorei(K.UNPACK_SKIP_PIXELS,on),K.pixelStorei(K.UNPACK_SKIP_ROWS,Ot),K.pixelStorei(K.UNPACK_SKIP_IMAGES,Hn),te===0&&oe.generateMipmaps&&K.generateMipmap(je),re.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?x.setTextureCube(R,0):R.isData3DTexture?x.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?x.setTexture2DArray(R,0):x.setTexture2D(R,0),re.unbindTexture()},this.resetState=function(){O=0,D=0,w=null,re.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===au?"display-p3":"srgb",t.unpackColorSpace=_t.workingColorSpace===tl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Db extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ib{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Lc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Bp("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const cn=new U;class fu{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=qn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const bf=new U,Ef=new Tt,Tf=new Tt,Nb=new U,Af=new Ke,ra=new U,ec=new mi,wf=new Ke,tc=new Dr;class Ub extends Ln{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=id,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new nn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ra),this.boundingBox.expandByPoint(ra)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new mi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ra),this.boundingSphere.expandByPoint(ra)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ec.copy(this.boundingSphere),ec.applyMatrix4(s),e.ray.intersectsSphere(ec)!==!1&&(wf.copy(s).invert(),tc.copy(e.ray).applyMatrix4(wf),!(this.boundingBox!==null&&tc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,tc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Tt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===id?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===kv?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Ef.fromBufferAttribute(s.attributes.skinIndex,e),Tf.fromBufferAttribute(s.attributes.skinWeight,e),bf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Tf.getComponent(r);if(o!==0){const a=Ef.getComponent(r);Af.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Nb.copy(bf).applyMatrix4(Af),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class em extends Lt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class tm extends Xt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=gn,u=gn,d,f){super(null,o,a,l,c,u,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Rf=new Ke,Ob=new Ke;class hu{constructor(e=[],t=[]){this.uuid=Zn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ke;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Ob;Rf.multiplyMatrices(a,t[r]),Rf.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new hu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new tm(t,e,e,Yn,ai);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new em),this.bones.push(o),this.boneInverses.push(new Ke().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class Ic extends Zt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const or=new Ke,Cf=new Ke,oa=[],Pf=new nn,Fb=new Ke,$r=new Ln,Yr=new mi;class Bb extends Ln{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ic(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Fb)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new nn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,or),Pf.copy(e.boundingBox).applyMatrix4(or),this.boundingBox.union(Pf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,or),Yr.copy(e.boundingSphere).applyMatrix4(or),this.boundingSphere.union(Yr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if($r.geometry=this.geometry,$r.material=this.material,$r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yr.copy(this.boundingSphere),Yr.applyMatrix4(i),e.ray.intersectsSphere(Yr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,or),Cf.multiplyMatrices(i,or),$r.matrixWorld=Cf,$r.raycast(e,oa);for(let o=0,a=oa.length;o<a;o++){const l=oa[o];l.instanceId=r,l.object=this,t.push(l)}oa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ic(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new tm(new Float32Array(s*this.count),s,this.count,Rp,ai));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ho extends ui{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Lf=new U,Df=new U,If=new Ke,nc=new Dr,aa=new mi;class pu extends Lt{constructor(e=new kn,t=new ho){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Lf.fromBufferAttribute(t,s-1),Df.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Lf.distanceTo(Df);e.setAttribute("lineDistance",new di(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),aa.copy(i.boundingSphere),aa.applyMatrix4(s),aa.radius+=r,e.ray.intersectsSphere(aa)===!1)return;If.copy(s).invert(),nc.copy(e.ray).applyMatrix4(If);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new U,u=new U,d=new U,f=new U,h=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){const m=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let y=m,T=S-1;y<T;y+=h){const O=g.getX(y),D=g.getX(y+1);if(c.fromBufferAttribute(p,O),u.fromBufferAttribute(p,D),nc.distanceSqToSegment(c,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const G=e.ray.origin.distanceTo(f);G<e.near||G>e.far||t.push({distance:G,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),S=Math.min(p.count,o.start+o.count);for(let y=m,T=S-1;y<T;y+=h){if(c.fromBufferAttribute(p,y),u.fromBufferAttribute(p,y+1),nc.distanceSqToSegment(c,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(f);D<e.near||D>e.far||t.push({distance:D,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Nf=new U,Uf=new U;class ba extends pu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Nf.fromBufferAttribute(t,s),Uf.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Nf.distanceTo(Uf);e.setAttribute("lineDistance",new di(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class kb extends pu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class nm extends ui{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Of=new Ke,Nc=new Dr,la=new mi,ca=new U;class Hb extends Lt{constructor(e=new kn,t=new nm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),la.copy(i.boundingSphere),la.applyMatrix4(s),la.radius+=r,e.ray.intersectsSphere(la)===!1)return;Of.copy(s).invert(),Nc.copy(e.ray).applyMatrix4(Of);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let g=f,_=h;g<_;g++){const p=c.getX(g);ca.fromBufferAttribute(d,p),Ff(ca,p,l,s,e,t,this)}}else{const f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let g=f,_=h;g<_;g++)ca.fromBufferAttribute(d,g),Ff(ca,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ff(n,e,t,i,s,r,o){const a=Nc.distanceSqToPoint(n);if(a<t){const l=new U;Nc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}const ua=new U,da=new U,ic=new U,fa=new $n;class sc extends kn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(vr*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),f={},h=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:p,c:m}=fa;if(_.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),fa.getNormal(ic),d[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,d[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,d[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let S=0;S<3;S++){const y=(S+1)%3,T=d[S],O=d[y],D=fa[u[S]],w=fa[u[y]],G=`${T}_${O}`,E=`${O}_${T}`;E in f&&f[E]?(ic.dot(f[E].normal)<=r&&(h.push(D.x,D.y,D.z),h.push(w.x,w.y,w.z)),f[E]=null):G in f||(f[G]={index0:c[S],index1:c[y],normal:ic.clone()})}}for(const g in f)if(f[g]){const{index0:_,index1:p}=f[g];ua.fromBufferAttribute(a,_),da.fromBufferAttribute(a,p),h.push(ua.x,ua.y,ua.z),h.push(da.x,da.y,da.z)}this.setAttribute("position",new di(h,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class mu extends ui{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Np,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Oi extends mu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function ha(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function zb(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Vb(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Bf(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function im(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class Co{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Gb extends Co{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cd,endingEnd:Cd}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Pd:r=e,a=2*t-i;break;case Ld:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Pd:o=e,l=2*i-t;break;case Ld:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(i-t)/(s-t),_=g*g,p=_*g,m=-f*p+2*f*_-f*g,S=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*g+1,y=(-1-h)*p+(1.5+h)*_+.5*g,T=h*p-h*_;for(let O=0;O!==a;++O)r[O]=m*o[u+O]+S*o[c+O]+y*o[l+O]+T*o[d+O];return r}}class Wb extends Co{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),d=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*u;return r}}class Xb extends Co{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class gi{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ha(t,this.TimeBufferType),this.values=ha(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ha(e.times,Array),values:ha(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Xb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gb(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case So:t=this.InterpolantFactoryMethodDiscrete;break;case Ar:t=this.InterpolantFactoryMethodLinear;break;case Rl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return So;case this.InterpolantFactoryMethodLinear:return Ar;case this.InterpolantFactoryMethodSmooth:return Rl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&zb(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Rl,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const d=a*i,f=d-i,h=d+i;for(let g=0;g!==i;++g){const _=t[d+g];if(_!==t[f+g]||_!==t[h+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*i,f=o*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}gi.prototype.TimeBufferType=Float32Array;gi.prototype.ValueBufferType=Float32Array;gi.prototype.DefaultInterpolation=Ar;class Nr extends gi{}Nr.prototype.ValueTypeName="bool";Nr.prototype.ValueBufferType=Array;Nr.prototype.DefaultInterpolation=So;Nr.prototype.InterpolantFactoryMethodLinear=void 0;Nr.prototype.InterpolantFactoryMethodSmooth=void 0;class sm extends gi{}sm.prototype.ValueTypeName="color";class Cr extends gi{}Cr.prototype.ValueTypeName="number";class jb extends Co{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)hi.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Ls extends gi{InterpolantFactoryMethodLinear(e){return new jb(this.times,this.values,this.getValueSize(),e)}}Ls.prototype.ValueTypeName="quaternion";Ls.prototype.DefaultInterpolation=Ar;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;class Ur extends gi{}Ur.prototype.ValueTypeName="string";Ur.prototype.ValueBufferType=Array;Ur.prototype.DefaultInterpolation=So;Ur.prototype.InterpolantFactoryMethodLinear=void 0;Ur.prototype.InterpolantFactoryMethodSmooth=void 0;class Pr extends gi{}Pr.prototype.ValueTypeName="vector";class qb{constructor(e="",t=-1,i=[],s=Yv){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Zn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(Yb(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(gi.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=Vb(l);l=Bf(l,1,u),c=Bf(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Cr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const d=u[1];let f=s[d];f||(s[d]=f=[]),f.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(d,f,h,g,_){if(h.length!==0){const p=[],m=[];im(h,p,m,g),p.length!==0&&_.push(new d(f,p,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const f=c[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const h={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)h[f[g].morphTargets[_]]=-1;for(const _ in h){const p=[],m=[];for(let S=0;S!==f[g].morphTargets.length;++S){const y=f[g];p.push(y.time),m.push(y.morphTarget===_?1:0)}s.push(new Cr(".morphTargetInfluence["+_+"]",p,m))}l=h.length*o}else{const h=".bones["+t[d].name+"]";i(Pr,h+".position",f,"pos",s),i(Ls,h+".quaternion",f,"rot",s),i(Pr,h+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function $b(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Cr;case"vector":case"vector2":case"vector3":case"vector4":return Pr;case"color":return sm;case"quaternion":return Ls;case"bool":case"boolean":return Nr;case"string":return Ur}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Yb(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=$b(n.type);if(n.times===void 0){const t=[],i=[];im(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Ji={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Kb{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const h=c[d],g=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null}}}const Zb=new Kb;class Us{constructor(e){this.manager=e!==void 0?e:Zb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Us.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ei={};class Jb extends Error{constructor(e,t){super(e),this.response=t}}class za extends Us{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ji.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ei[e]!==void 0){Ei[e].push({onLoad:t,onProgress:i,onError:s});return}Ei[e]=[],Ei[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ei[e],d=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),h=f?parseInt(f):0,g=h!==0;let _=0;const p=new ReadableStream({start(m){S();function S(){d.read().then(({done:y,value:T})=>{if(y)m.close();else{_+=T.byteLength;const O=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:h});for(let D=0,w=u.length;D<w;D++){const G=u[D];G.onProgress&&G.onProgress(O)}m.enqueue(T),S()}})}}});return new Response(p)}else throw new Jb(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,h=new TextDecoder(f);return c.arrayBuffer().then(g=>h.decode(g))}}}).then(c=>{Ji.add(e,c);const u=Ei[e];delete Ei[e];for(let d=0,f=u.length;d<f;d++){const h=u[d];h.onLoad&&h.onLoad(c)}}).catch(c=>{const u=Ei[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ei[e];for(let d=0,f=u.length;d<f;d++){const h=u[d];h.onError&&h.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Qb extends Us{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ji.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=bo("img");function l(){u(),Ji.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class eE extends Us{constructor(e){super(e)}load(e,t,i,s){const r=new Xt,o=new Qb(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class rl extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const rc=new Ke,kf=new U,Hf=new U;class gu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nl,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;kf.setFromMatrixPosition(e.matrixWorld),t.position.copy(kf),Hf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hf),t.updateMatrixWorld(),rc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(rc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class tE extends gu{constructor(){super(new hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=wr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class nE extends rl{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new tE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const zf=new Ke,Kr=new U,oc=new U;class iE extends gu{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new Tt(2,1,1,1),new Tt(0,1,1,1),new Tt(3,1,1,1),new Tt(1,1,1,1),new Tt(3,0,1,1),new Tt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Kr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Kr),oc.copy(i.position),oc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(oc),i.updateMatrixWorld(),s.makeTranslation(-Kr.x,-Kr.y,-Kr.z),zf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zf)}}class sE extends rl{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new iE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class rE extends gu{constructor(){super(new uu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class no extends rl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new rE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class oE extends rl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class po{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class aE extends Us{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ji.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ji.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Ji.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ji.add(e,l),r.manager.itemStart(e)}}const _u="\\[\\]\\.:\\/",lE=new RegExp("["+_u+"]","g"),vu="[^"+_u+"]",cE="[^"+_u.replace("\\.","")+"]",uE=/((?:WC+[\/:])*)/.source.replace("WC",vu),dE=/(WCOD+)?/.source.replace("WCOD",cE),fE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vu),hE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vu),pE=new RegExp("^"+uE+dE+fE+hE+"$"),mE=["material","materials","bones","map"];class gE{constructor(e,t,i){const s=i||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class xt{constructor(e,t,i){this.path=t,this.parsedPath=i||xt.parseTrackName(t),this.node=xt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new xt.Composite(e,t,i):new xt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lE,"")}static parseTrackName(e){const t=pE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);mE.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=xt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}xt.Composite=gE;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Vf=new Ke;class _E{constructor(e,t,i=0,s=1/0){this.ray=new Dr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new cu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Vf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vf),this}intersectObject(e,t=!0,i=[]){return Uc(e,this,i,t),i.sort(Gf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Uc(e[s],this,i,t);return i.sort(Gf),i}}function Gf(n,e){return n.distance-e.distance}function Uc(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const s=n.children;for(let r=0,o=s.length;r<o;r++)Uc(s[r],e,t,!0)}}class Wf{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Kt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ou}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ou);function Xf(n,e){if(e===Kv)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Pc||e===Ip){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===Pc)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class vE extends Us{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new bE(t)}),this.register(function(t){return new DE(t)}),this.register(function(t){return new IE(t)}),this.register(function(t){return new NE(t)}),this.register(function(t){return new TE(t)}),this.register(function(t){return new AE(t)}),this.register(function(t){return new wE(t)}),this.register(function(t){return new RE(t)}),this.register(function(t){return new SE(t)}),this.register(function(t){return new CE(t)}),this.register(function(t){return new EE(t)}),this.register(function(t){return new LE(t)}),this.register(function(t){return new PE(t)}),this.register(function(t){return new yE(t)}),this.register(function(t){return new UE(t)}),this.register(function(t){return new OE(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=po.extractUrlBase(e);o=po.resolveURL(c,this.path)}else o=po.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new za(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===rm){try{o[dt.KHR_BINARY_GLTF]=new FE(e)}catch(d){s&&s(d);return}r=JSON.parse(o[dt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new KE(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const d=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(d){case dt.KHR_MATERIALS_UNLIT:o[d]=new ME;break;case dt.KHR_DRACO_MESH_COMPRESSION:o[d]=new BE(r,this.dracoLoader);break;case dt.KHR_TEXTURE_TRANSFORM:o[d]=new kE;break;case dt.KHR_MESH_QUANTIZATION:o[d]=new HE;break;default:f.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function xE(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const dt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class yE{constructor(e){this.parser=e,this.name=dt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new qe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],jt);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new no(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new sE(u),c.distance=d;break;case"spot":c=new nE(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Yi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class ME{constructor(){this.name=dt.KHR_MATERIALS_UNLIT}getMaterialType(){return li}extendParams(e,t,i){const s=[];e.color=new qe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],jt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Gt))}return Promise.all(s)}}class SE{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class bE{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Oi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ve(a,a)}return Promise.all(r)}}class EE{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Oi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class TE{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Oi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new qe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],jt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Gt)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class AE{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Oi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class wE{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Oi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new qe().setRGB(a[0],a[1],a[2],jt),Promise.all(r)}}class RE{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Oi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class CE{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Oi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new qe().setRGB(a[0],a[1],a[2],jt),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Gt)),Promise.all(r)}}class PE{constructor(e){this.parser=e,this.name=dt.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Oi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class LE{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Oi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class DE{constructor(e){this.parser=e,this.name=dt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class IE{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class NE{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class UE{constructor(e){this.name=dt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,d=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,f,s.mode,s.filter).then(function(h){return h.buffer}):o.ready.then(function(){const h=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(h),u,d,f,s.mode,s.filter),h})})}else return null}}class OE{constructor(e){this.name=dt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==Nn.TRIANGLES&&c.mode!==Nn.TRIANGLE_STRIP&&c.mode!==Nn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],f=c[0].count,h=[];for(const g of d){const _=new Ke,p=new U,m=new hi,S=new U(1,1,1),y=new Bb(g.geometry,g.material,f);for(let T=0;T<f;T++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,T),l.SCALE&&S.fromBufferAttribute(l.SCALE,T),y.setMatrixAt(T,_.compose(p,m,S));for(const T in l)if(T==="_COLOR_0"){const O=l[T];y.instanceColor=new Ic(O.array,O.itemSize,O.normalized)}else T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"&&g.geometry.setAttribute(T,l[T]);Lt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),h.push(y)}return u.isGroup?(u.clear(),u.add(...h),u):h[0]}))}}const rm="glTF",Zr=12,jf={JSON:1313821514,BIN:5130562};class FE{constructor(e){this.name=dt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Zr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==rm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Zr,r=new DataView(e,Zr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===jf.JSON){const c=new Uint8Array(e,Zr+o,a);this.content=i.decode(c)}else if(l===jf.BIN){const c=Zr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class BE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=dt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const d=Oc[u]||u.toLowerCase();a[d]=o[u]}for(const u in e.attributes){const d=Oc[u]||u.toLowerCase();if(o[u]!==void 0){const f=i.accessors[e.attributes[u]],h=yr[f.componentType];c[d]=h.name,l[d]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d,f){s.decodeDracoFile(u,function(h){for(const g in h.attributes){const _=h.attributes[g],p=l[g];p!==void 0&&(_.normalized=p)}d(h)},a,c,jt,f)})})}}class kE{constructor(){this.name=dt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class HE{constructor(){this.name=dt.KHR_MESH_QUANTIZATION}}class om extends Co{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,d=(i-t)/u,f=d*d,h=f*d,g=e*c,_=g-c,p=-2*h+3*f,m=h-f,S=1-p,y=m-f+d;for(let T=0;T!==a;T++){const O=o[_+T+a],D=o[_+T+l]*u,w=o[g+T+a],G=o[g+T]*u;r[T]=S*O+y*D+p*w+m*G}return r}}const zE=new hi;class VE extends om{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return zE.fromArray(r).normalize().toArray(r),r}}const Nn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},yr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},qf={9728:gn,9729:Cn,9984:bp,9985:Ma,9986:eo,9987:Ci},$f={33071:Zi,33648:Ua,10497:Er},ac={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Oc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Xi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},GE={CUBICSPLINE:void 0,LINEAR:Ar,STEP:So},lc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function WE(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new mu({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ni})),n.DefaultMaterial}function vs(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Yi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function XE(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(i){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):n.attributes.position;o.push(f)}if(s){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):n.attributes.normal;a.push(f)}if(r){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],f=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=d),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function jE(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function qE(n){let e;const t=n.extensions&&n.extensions[dt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+cc(t.attributes):e=n.indices+":"+cc(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+cc(n.targets[i]);return e}function cc(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Fc(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function $E(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const YE=new Ke;class KE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new xE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&r<98?this.textureLoader=new eE(this.options.manager):this.textureLoader=new aE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new za(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return vs(r,a,s),Yi(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[dt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(po.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=ac[s.type],a=yr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Zt(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=ac[s.type],c=yr[s.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,f=s.byteOffset||0,h=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,p;if(h&&h!==d){const m=Math.floor(f/h),S="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let y=t.cache.get(S);y||(_=new c(a,m*h,s.count*h/u),y=new Ib(_,h/u),t.cache.add(S,y)),p=new fu(y,l,f%h/u,g)}else a===null?_=new c(s.count*l):_=new c(a,f,s.count*l),p=new Zt(_,l,g);if(s.sparse!==void 0){const m=ac.SCALAR,S=yr[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,T=s.sparse.values.byteOffset||0,O=new S(o[1],y,s.sparse.count*m),D=new c(o[2],T,s.sparse.count*l);a!==null&&(p=new Zt(p.array.slice(),p.itemSize,p.normalized));for(let w=0,G=O.length;w<G;w++){const E=O[w];if(p.setX(E,D[w*l]),l>=2&&p.setY(E,D[w*l+1]),l>=3&&p.setZ(E,D[w*l+2]),l>=4&&p.setW(E,D[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=qf[f.magFilter]||Cn,u.minFilter=qf[f.minFilter]||Ci,u.wrapS=$f[f.wrapS]||Er,u.wrapT=$f[f.wrapT]||Er,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(f,h){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const p=new Xt(_);p.needsUpdate=!0,f(p)}),t.load(po.resolveURL(d,r.path),g,void 0,h)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),d.userData.mimeType=o.mimeType||$E(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[dt.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[dt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[dt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new nm,ui.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new ho,ui.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return mu}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[dt.KHR_MATERIALS_UNLIT]){const d=s[dt.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,r,t))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new qe(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],jt),a.opacity=f[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,Gt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=jn);const u=r.alphaMode||lc.OPAQUE;if(u===lc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===lc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==li&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ve(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==li&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==li){const d=r.emissiveFactor;a.emissive=new qe().setRGB(d[0],d[1],d[2],jt)}return r.emissiveTexture!==void 0&&o!==li&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Gt)),Promise.all(c).then(function(){const d=new o(a);return r.name&&(d.name=r.name),Yi(d,r),t.associations.set(d,{materials:e}),r.extensions&&vs(s,d,r),d})}createUniqueName(e){const t=xt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[dt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Yf(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=qE(c),d=s[u];if(d)o.push(d.promise);else{let f;c.extensions&&c.extensions[dt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Yf(new kn,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?WE(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let h=0,g=u.length;h<g;h++){const _=u[h],p=o[h];let m;const S=c[h];if(p.mode===Nn.TRIANGLES||p.mode===Nn.TRIANGLE_STRIP||p.mode===Nn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new Ub(_,S):new Ln(_,S),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===Nn.TRIANGLE_STRIP?m.geometry=Xf(m.geometry,Ip):p.mode===Nn.TRIANGLE_FAN&&(m.geometry=Xf(m.geometry,Pc));else if(p.mode===Nn.LINES)m=new ba(_,S);else if(p.mode===Nn.LINE_STRIP)m=new pu(_,S);else if(p.mode===Nn.LINE_LOOP)m=new kb(_,S);else if(p.mode===Nn.POINTS)m=new Hb(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&jE(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Yi(m,r),p.extensions&&vs(s,m,p),t.assignFinalMaterial(m),d.push(m)}for(let h=0,g=d.length;h<g;h++)t.associations.set(d[h],{meshes:e,primitives:h});if(d.length===1)return r.extensions&&vs(s,d[0],r),d[0];const f=new Es;r.extensions&&vs(s,f,r),t.associations.set(f,{meshes:e});for(let h=0,g=d.length;h<g;h++)f.add(d[h]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new hn(Op.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new uu(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Yi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const d=o[c];if(d){a.push(d);const f=new Ke;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new hu(a,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let d=0,f=s.channels.length;d<f;d++){const h=s.channels[d],g=s.samplers[h.sampler],_=h.target,p=_.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,S=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",S)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const f=d[0],h=d[1],g=d[2],_=d[3],p=d[4],m=[];for(let S=0,y=f.length;S<y;S++){const T=f[S],O=h[S],D=g[S],w=_[S],G=p[S];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const E=i._createAnimationTracks(T,O,D,w,G);if(E)for(let M=0;M<E.length;M++)m.push(E[M])}return new qb(r,void 0,m)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],d=c[1],f=c[2];f!==null&&u.traverse(function(h){h.isSkinnedMesh&&h.bind(f,YE)});for(let h=0,g=d.length;h<g;h++)u.add(d[h]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new em:c.length>1?u=new Es:c.length===1?u=c[0]:u=new Lt,u!==c[0])for(let d=0,f=c.length;d<f;d++)u.add(c[d]);if(r.name&&(u.userData.name=r.name,u.name=o),Yi(u,r),r.extensions&&vs(i,u,r),r.matrix!==void 0){const d=new Ke;d.fromArray(r.matrix),u.applyMatrix4(d)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new Es;i.name&&(r.name=s.createUniqueName(i.name)),Yi(r,i),i.extensions&&vs(t,r,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,d=l.length;u<d;u++)r.add(l[u]);const c=u=>{const d=new Map;for(const[f,h]of s.associations)(f instanceof ui||f instanceof Xt)&&d.set(f,h);return u.traverse(f=>{const h=s.associations.get(f);h!=null&&d.set(f,h)}),d};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];Xi[r.path]===Xi.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Xi[r.path]){case Xi.weights:c=Cr;break;case Xi.rotation:c=Ls;break;case Xi.position:case Xi.scale:c=Pr;break;default:switch(i.itemSize){case 1:c=Cr;break;case 2:case 3:default:c=Pr;break}break}const u=s.interpolation!==void 0?GE[s.interpolation]:Ar,d=this._getArrayFromAccessor(i);for(let f=0,h=l.length;f<h;f++){const g=new c(l[f]+"."+Xi[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Fc(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof Ls?VE:om;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function ZE(n,e,t){const i=e.attributes,s=new nn;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new U(l[0],l[1],l[2]),new U(c[0],c[1],c[2])),a.normalized){const u=Fc(yr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new U,l=new U;for(let c=0,u=r.length;c<u;c++){const d=r[c];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],h=f.min,g=f.max;if(h!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(h[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(h[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(h[2]),Math.abs(g[2]))),f.normalized){const _=Fc(yr[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new mi;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Yf(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=Oc[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return _t.workingColorSpace!==jt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${_t.workingColorSpace}" not supported.`),Yi(n,e),ZE(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?XE(n,e.targets,t):n})}const Kf={type:"change"},uc={type:"start"},Zf={type:"end"},pa=new Dr,Jf=new $i,JE=Math.cos(70*Op.DEG2RAD);class QE extends Ns{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zs.ROTATE,MIDDLE:zs.DOLLY,RIGHT:zs.PAN},this.touches={ONE:Vs.ROTATE,TWO:Vs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(v){v.addEventListener("keydown",ye),this._domElementKeyEvents=v},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ye),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Kf),i.update(),r=s.NONE},this.update=function(){const v=new U,ee=new hi().setFromUnitVectors(e.up,new U(0,1,0)),me=ee.clone().invert(),be=new U,De=new hi,lt=new U,it=2*Math.PI;return function(Ut=null){const pt=i.object.position;v.copy(pt).sub(i.target),v.applyQuaternion(ee),a.setFromVector3(v),i.autoRotate&&r===s.NONE&&$(M(Ut)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let It=i.minAzimuthAngle,Pt=i.maxAzimuthAngle;isFinite(It)&&isFinite(Pt)&&(It<-Math.PI?It+=it:It>Math.PI&&(It-=it),Pt<-Math.PI?Pt+=it:Pt>Math.PI&&(Pt-=it),It<=Pt?a.theta=Math.max(It,Math.min(Pt,a.theta)):a.theta=a.theta>(It+Pt)/2?Math.max(It,a.theta):Math.min(Pt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Jt=!1;if(i.zoomToCursor&&D||i.object.isOrthographicCamera)a.radius=ge(a.radius);else{const qt=a.radius;a.radius=ge(a.radius*c),Jt=qt!=a.radius}if(v.setFromSpherical(a),v.applyQuaternion(me),pt.copy(i.target).add(v),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&D){let qt=null;if(i.object.isPerspectiveCamera){const Qn=v.length();qt=ge(Qn*c);const Fi=Qn-qt;i.object.position.addScaledVector(T,Fi),i.object.updateMatrixWorld(),Jt=!!Fi}else if(i.object.isOrthographicCamera){const Qn=new U(O.x,O.y,0);Qn.unproject(i.object);const Fi=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Jt=Fi!==i.object.zoom;const _i=new U(O.x,O.y,0);_i.unproject(i.object),i.object.position.sub(_i).add(Qn),i.object.updateMatrixWorld(),qt=v.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;qt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(qt).add(i.object.position):(pa.origin.copy(i.object.position),pa.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(pa.direction))<JE?e.lookAt(i.target):(Jf.setFromNormalAndCoplanarPoint(i.object.up,i.target),pa.intersectPlane(Jf,i.target))))}else if(i.object.isOrthographicCamera){const qt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),qt!==i.object.zoom&&(i.object.updateProjectionMatrix(),Jt=!0)}return c=1,D=!1,Jt||be.distanceToSquared(i.object.position)>o||8*(1-De.dot(i.object.quaternion))>o||lt.distanceToSquared(i.target)>o?(i.dispatchEvent(Kf),be.copy(i.object.position),De.copy(i.object.quaternion),lt.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Pe),i.domElement.removeEventListener("pointerdown",N),i.domElement.removeEventListener("pointercancel",z),i.domElement.removeEventListener("wheel",ie),i.domElement.removeEventListener("pointermove",V),i.domElement.removeEventListener("pointerup",z),i.domElement.getRootNode().removeEventListener("keydown",Me,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ye),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new Wf,l=new Wf;let c=1;const u=new U,d=new Ve,f=new Ve,h=new Ve,g=new Ve,_=new Ve,p=new Ve,m=new Ve,S=new Ve,y=new Ve,T=new U,O=new Ve;let D=!1;const w=[],G={};let E=!1;function M(v){return v!==null?2*Math.PI/60*i.autoRotateSpeed*v:2*Math.PI/60/60*i.autoRotateSpeed}function W(v){const ee=Math.abs(v*.01);return Math.pow(.95,i.zoomSpeed*ee)}function $(v){l.theta-=v}function L(v){l.phi-=v}const I=function(){const v=new U;return function(me,be){v.setFromMatrixColumn(be,0),v.multiplyScalar(-me),u.add(v)}}(),k=function(){const v=new U;return function(me,be){i.screenSpacePanning===!0?v.setFromMatrixColumn(be,1):(v.setFromMatrixColumn(be,0),v.crossVectors(i.object.up,v)),v.multiplyScalar(me),u.add(v)}}(),X=function(){const v=new U;return function(me,be){const De=i.domElement;if(i.object.isPerspectiveCamera){const lt=i.object.position;v.copy(lt).sub(i.target);let it=v.length();it*=Math.tan(i.object.fov/2*Math.PI/180),I(2*me*it/De.clientHeight,i.object.matrix),k(2*be*it/De.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(I(me*(i.object.right-i.object.left)/i.object.zoom/De.clientWidth,i.object.matrix),k(be*(i.object.top-i.object.bottom)/i.object.zoom/De.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function q(v){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function H(v){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function pe(v,ee){if(!i.zoomToCursor)return;D=!0;const me=i.domElement.getBoundingClientRect(),be=v-me.left,De=ee-me.top,lt=me.width,it=me.height;O.x=be/lt*2-1,O.y=-(De/it)*2+1,T.set(O.x,O.y,1).unproject(i.object).sub(i.object.position).normalize()}function ge(v){return Math.max(i.minDistance,Math.min(i.maxDistance,v))}function Te(v){d.set(v.clientX,v.clientY)}function Be(v){pe(v.clientX,v.clientX),m.set(v.clientX,v.clientY)}function se(v){g.set(v.clientX,v.clientY)}function B(v){f.set(v.clientX,v.clientY),h.subVectors(f,d).multiplyScalar(i.rotateSpeed);const ee=i.domElement;$(2*Math.PI*h.x/ee.clientHeight),L(2*Math.PI*h.y/ee.clientHeight),d.copy(f),i.update()}function Y(v){S.set(v.clientX,v.clientY),y.subVectors(S,m),y.y>0?q(W(y.y)):y.y<0&&H(W(y.y)),m.copy(S),i.update()}function he(v){_.set(v.clientX,v.clientY),p.subVectors(_,g).multiplyScalar(i.panSpeed),X(p.x,p.y),g.copy(_),i.update()}function _e(v){pe(v.clientX,v.clientY),v.deltaY<0?H(W(v.deltaY)):v.deltaY>0&&q(W(v.deltaY)),i.update()}function Ie(v){let ee=!1;switch(v.code){case i.keys.UP:v.ctrlKey||v.metaKey||v.shiftKey?L(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(0,i.keyPanSpeed),ee=!0;break;case i.keys.BOTTOM:v.ctrlKey||v.metaKey||v.shiftKey?L(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(0,-i.keyPanSpeed),ee=!0;break;case i.keys.LEFT:v.ctrlKey||v.metaKey||v.shiftKey?$(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(i.keyPanSpeed,0),ee=!0;break;case i.keys.RIGHT:v.ctrlKey||v.metaKey||v.shiftKey?$(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(-i.keyPanSpeed,0),ee=!0;break}ee&&(v.preventDefault(),i.update())}function Ne(v){if(w.length===1)d.set(v.pageX,v.pageY);else{const ee=Xe(v),me=.5*(v.pageX+ee.x),be=.5*(v.pageY+ee.y);d.set(me,be)}}function ke(v){if(w.length===1)g.set(v.pageX,v.pageY);else{const ee=Xe(v),me=.5*(v.pageX+ee.x),be=.5*(v.pageY+ee.y);g.set(me,be)}}function K(v){const ee=Xe(v),me=v.pageX-ee.x,be=v.pageY-ee.y,De=Math.sqrt(me*me+be*be);m.set(0,De)}function C(v){i.enableZoom&&K(v),i.enablePan&&ke(v)}function P(v){i.enableZoom&&K(v),i.enableRotate&&Ne(v)}function Z(v){if(w.length==1)f.set(v.pageX,v.pageY);else{const me=Xe(v),be=.5*(v.pageX+me.x),De=.5*(v.pageY+me.y);f.set(be,De)}h.subVectors(f,d).multiplyScalar(i.rotateSpeed);const ee=i.domElement;$(2*Math.PI*h.x/ee.clientHeight),L(2*Math.PI*h.y/ee.clientHeight),d.copy(f)}function re(v){if(w.length===1)_.set(v.pageX,v.pageY);else{const ee=Xe(v),me=.5*(v.pageX+ee.x),be=.5*(v.pageY+ee.y);_.set(me,be)}p.subVectors(_,g).multiplyScalar(i.panSpeed),X(p.x,p.y),g.copy(_)}function ce(v){const ee=Xe(v),me=v.pageX-ee.x,be=v.pageY-ee.y,De=Math.sqrt(me*me+be*be);S.set(0,De),y.set(0,Math.pow(S.y/m.y,i.zoomSpeed)),q(y.y),m.copy(S);const lt=(v.pageX+ee.x)*.5,it=(v.pageY+ee.y)*.5;pe(lt,it)}function b(v){i.enableZoom&&ce(v),i.enablePan&&re(v)}function x(v){i.enableZoom&&ce(v),i.enableRotate&&Z(v)}function N(v){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(v.pointerId),i.domElement.addEventListener("pointermove",V),i.domElement.addEventListener("pointerup",z)),!ct(v)&&(He(v),v.pointerType==="touch"?Ue(v):J(v)))}function V(v){i.enabled!==!1&&(v.pointerType==="touch"?we(v):fe(v))}function z(v){switch($e(v),w.length){case 0:i.domElement.releasePointerCapture(v.pointerId),i.domElement.removeEventListener("pointermove",V),i.domElement.removeEventListener("pointerup",z),i.dispatchEvent(Zf),r=s.NONE;break;case 1:const ee=w[0],me=G[ee];Ue({pointerId:ee,pageX:me.x,pageY:me.y});break}}function J(v){let ee;switch(v.button){case 0:ee=i.mouseButtons.LEFT;break;case 1:ee=i.mouseButtons.MIDDLE;break;case 2:ee=i.mouseButtons.RIGHT;break;default:ee=-1}switch(ee){case zs.DOLLY:if(i.enableZoom===!1)return;Be(v),r=s.DOLLY;break;case zs.ROTATE:if(v.ctrlKey||v.metaKey||v.shiftKey){if(i.enablePan===!1)return;se(v),r=s.PAN}else{if(i.enableRotate===!1)return;Te(v),r=s.ROTATE}break;case zs.PAN:if(v.ctrlKey||v.metaKey||v.shiftKey){if(i.enableRotate===!1)return;Te(v),r=s.ROTATE}else{if(i.enablePan===!1)return;se(v),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(uc)}function fe(v){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;B(v);break;case s.DOLLY:if(i.enableZoom===!1)return;Y(v);break;case s.PAN:if(i.enablePan===!1)return;he(v);break}}function ie(v){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(v.preventDefault(),i.dispatchEvent(uc),_e(xe(v)),i.dispatchEvent(Zf))}function xe(v){const ee=v.deltaMode,me={clientX:v.clientX,clientY:v.clientY,deltaY:v.deltaY};switch(ee){case 1:me.deltaY*=16;break;case 2:me.deltaY*=100;break}return v.ctrlKey&&!E&&(me.deltaY*=10),me}function Me(v){v.key==="Control"&&(E=!0,i.domElement.getRootNode().addEventListener("keyup",ve,{passive:!0,capture:!0}))}function ve(v){v.key==="Control"&&(E=!1,i.domElement.getRootNode().removeEventListener("keyup",ve,{passive:!0,capture:!0}))}function ye(v){i.enabled===!1||i.enablePan===!1||Ie(v)}function Ue(v){switch(Ge(v),w.length){case 1:switch(i.touches.ONE){case Vs.ROTATE:if(i.enableRotate===!1)return;Ne(v),r=s.TOUCH_ROTATE;break;case Vs.PAN:if(i.enablePan===!1)return;ke(v),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case Vs.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;C(v),r=s.TOUCH_DOLLY_PAN;break;case Vs.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;P(v),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(uc)}function we(v){switch(Ge(v),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;Z(v),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;re(v),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;b(v),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;x(v),i.update();break;default:r=s.NONE}}function Pe(v){i.enabled!==!1&&v.preventDefault()}function He(v){w.push(v.pointerId)}function $e(v){delete G[v.pointerId];for(let ee=0;ee<w.length;ee++)if(w[ee]==v.pointerId){w.splice(ee,1);return}}function ct(v){for(let ee=0;ee<w.length;ee++)if(w[ee]==v.pointerId)return!0;return!1}function Ge(v){let ee=G[v.pointerId];ee===void 0&&(ee=new Ve,G[v.pointerId]=ee),ee.set(v.pageX,v.pageY)}function Xe(v){const ee=v.pointerId===w[0]?w[1]:w[0];return G[ee]}i.domElement.addEventListener("contextmenu",Pe),i.domElement.addEventListener("pointerdown",N),i.domElement.addEventListener("pointercancel",z),i.domElement.addEventListener("wheel",ie,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",Me,{passive:!0,capture:!0}),this.update()}}const dc=new WeakMap;class eT extends Us{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,i,s){const r=new za(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,s)},i,s)}parse(e,t,i=()=>{}){this.decodeDracoFile(e,t,null,null,Gt).catch(i)}decodeDracoFile(e,t,i,s,r=jt,o=()=>{}){const a={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!i,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const i=JSON.stringify(t);if(dc.has(e)){const l=dc.get(e);if(l.key===i)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(l=>(s=l,new Promise((c,u)=>{s._callbacks[r]={resolve:c,reject:u},s.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{s&&r&&this._releaseTask(s,r)}),dc.set(e,{key:i,promise:a}),a}_createGeometry(e){const t=new kn;e.index&&t.setIndex(new Zt(e.index.array,1));for(let i=0;i<e.attributes.length;i++){const s=e.attributes[i],r=s.name,o=s.array,a=s.itemSize,l=new Zt(o,a);r==="color"&&(this._assignVertexColorSpace(l,s.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==Gt)return;const i=new qe;for(let s=0,r=e.count;s<r;s++)i.fromBufferAttribute(e,s).convertSRGBToLinear(),e.setXYZ(s,i.r,i.g,i.b)}_loadLibrary(e,t){const i=new za(this.manager);return i.setPath(this.decoderPath),i.setResponseType(t),i.setWithCredentials(this.withCredentials),new Promise((s,r)=>{i.load(e,s,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(i=>{const s=i[0];e||(this.decoderConfig.wasmBinary=i[1]);const r=tT.toString(),o=["/* draco decoder */",s,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(r){const o=r.data;switch(o.type){case"decode":s._callbacks[o.id].resolve(o);break;case"error":s._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,r){return s._taskLoad>r._taskLoad?-1:1});const i=this.workerPool[this.workerPool.length-1];return i._taskCosts[e]=t,i._taskLoad+=t,i})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function tT(){let n,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":n=a.decoderConfig,e=new Promise(function(u){n.onModuleLoaded=function(d){u({draco:d})},DracoDecoderModule(n)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(u=>{const d=u.draco,f=new d.Decoder;try{const h=t(d,f,new Int8Array(l),c),g=h.attributes.map(_=>_.array.buffer);h.index&&g.push(h.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:h},g)}catch(h){console.error(h),self.postMessage({type:"error",id:a.id,error:h.message})}finally{d.destroy(f)}});break}};function t(o,a,l,c){const u=c.attributeIDs,d=c.attributeTypes;let f,h;const g=a.GetEncodedGeometryType(l);if(g===o.TRIANGULAR_MESH)f=new o.Mesh,h=a.DecodeArrayToMesh(l,l.byteLength,f);else if(g===o.POINT_CLOUD)f=new o.PointCloud,h=a.DecodeArrayToPointCloud(l,l.byteLength,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!h.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+h.error_msg());const _={index:null,attributes:[]};for(const p in u){const m=self[d[p]];let S,y;if(c.useUniqueIDs)y=u[p],S=a.GetAttributeByUniqueId(f,y);else{if(y=a.GetAttributeId(f,o[u[p]]),y===-1)continue;S=a.GetAttribute(f,y)}const T=s(o,a,f,p,m,S);p==="color"&&(T.vertexColorSpace=c.vertexColorSpace),_.attributes.push(T)}return g===o.TRIANGULAR_MESH&&(_.index=i(o,a,f)),o.destroy(f),_}function i(o,a,l){const u=l.num_faces()*3,d=u*4,f=o._malloc(d);a.GetTrianglesUInt32Array(l,d,f);const h=new Uint32Array(o.HEAPF32.buffer,f,u).slice();return o._free(f),{array:h,itemSize:1}}function s(o,a,l,c,u,d){const f=d.num_components(),g=l.num_points()*f,_=g*u.BYTES_PER_ELEMENT,p=r(o,u),m=o._malloc(_);a.GetAttributeDataArrayForAllPoints(l,d,p,_,m);const S=new u(o.HEAPF32.buffer,m,g).slice();return o._free(m),{name:c,array:S,itemSize:f}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}function am(n,e){return function(){return n.apply(e,arguments)}}const{toString:nT}=Object.prototype,{getPrototypeOf:xu}=Object,{iterator:ol,toStringTag:lm}=Symbol,al=(n=>e=>{const t=nT.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),Jn=n=>(n=n.toLowerCase(),e=>al(e)===n),ll=n=>e=>typeof e===n,{isArray:Or}=Array,Eo=ll("undefined");function Po(n){return n!==null&&!Eo(n)&&n.constructor!==null&&!Eo(n.constructor)&&Sn(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const cm=Jn("ArrayBuffer");function iT(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&cm(n.buffer),e}const sT=ll("string"),Sn=ll("function"),um=ll("number"),Lo=n=>n!==null&&typeof n=="object",rT=n=>n===!0||n===!1,Ea=n=>{if(al(n)!=="object")return!1;const e=xu(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(lm in n)&&!(ol in n)},oT=n=>{if(!Lo(n)||Po(n))return!1;try{return Object.keys(n).length===0&&Object.getPrototypeOf(n)===Object.prototype}catch{return!1}},aT=Jn("Date"),lT=Jn("File"),cT=Jn("Blob"),uT=Jn("FileList"),dT=n=>Lo(n)&&Sn(n.pipe),fT=n=>{let e;return n&&(typeof FormData=="function"&&n instanceof FormData||Sn(n.append)&&((e=al(n))==="formdata"||e==="object"&&Sn(n.toString)&&n.toString()==="[object FormData]"))},hT=Jn("URLSearchParams"),[pT,mT,gT,_T]=["ReadableStream","Request","Response","Headers"].map(Jn),vT=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Do(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let i,s;if(typeof n!="object"&&(n=[n]),Or(n))for(i=0,s=n.length;i<s;i++)e.call(null,n[i],i,n);else{if(Po(n))return;const r=t?Object.getOwnPropertyNames(n):Object.keys(n),o=r.length;let a;for(i=0;i<o;i++)a=r[i],e.call(null,n[a],a,n)}}function dm(n,e){if(Po(n))return null;e=e.toLowerCase();const t=Object.keys(n);let i=t.length,s;for(;i-- >0;)if(s=t[i],e===s.toLowerCase())return s;return null}const Ts=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,fm=n=>!Eo(n)&&n!==Ts;function Bc(){const{caseless:n}=fm(this)&&this||{},e={},t=(i,s)=>{const r=n&&dm(e,s)||s;Ea(e[r])&&Ea(i)?e[r]=Bc(e[r],i):Ea(i)?e[r]=Bc({},i):Or(i)?e[r]=i.slice():e[r]=i};for(let i=0,s=arguments.length;i<s;i++)arguments[i]&&Do(arguments[i],t);return e}const xT=(n,e,t,{allOwnKeys:i}={})=>(Do(e,(s,r)=>{t&&Sn(s)?n[r]=am(s,t):n[r]=s},{allOwnKeys:i}),n),yT=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),MT=(n,e,t,i)=>{n.prototype=Object.create(e.prototype,i),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},ST=(n,e,t,i)=>{let s,r,o;const a={};if(e=e||{},n==null)return e;do{for(s=Object.getOwnPropertyNames(n),r=s.length;r-- >0;)o=s[r],(!i||i(o,n,e))&&!a[o]&&(e[o]=n[o],a[o]=!0);n=t!==!1&&xu(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},bT=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const i=n.indexOf(e,t);return i!==-1&&i===t},ET=n=>{if(!n)return null;if(Or(n))return n;let e=n.length;if(!um(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},TT=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&xu(Uint8Array)),AT=(n,e)=>{const i=(n&&n[ol]).call(n);let s;for(;(s=i.next())&&!s.done;){const r=s.value;e.call(n,r[0],r[1])}},wT=(n,e)=>{let t;const i=[];for(;(t=n.exec(e))!==null;)i.push(t);return i},RT=Jn("HTMLFormElement"),CT=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,i,s){return i.toUpperCase()+s}),Qf=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),PT=Jn("RegExp"),hm=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),i={};Do(t,(s,r)=>{let o;(o=e(s,r,n))!==!1&&(i[r]=o||s)}),Object.defineProperties(n,i)},LT=n=>{hm(n,(e,t)=>{if(Sn(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const i=n[t];if(Sn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},DT=(n,e)=>{const t={},i=s=>{s.forEach(r=>{t[r]=!0})};return Or(n)?i(n):i(String(n).split(e)),t},IT=()=>{},NT=(n,e)=>n!=null&&Number.isFinite(n=+n)?n:e;function UT(n){return!!(n&&Sn(n.append)&&n[lm]==="FormData"&&n[ol])}const OT=n=>{const e=new Array(10),t=(i,s)=>{if(Lo(i)){if(e.indexOf(i)>=0)return;if(Po(i))return i;if(!("toJSON"in i)){e[s]=i;const r=Or(i)?[]:{};return Do(i,(o,a)=>{const l=t(o,s+1);!Eo(l)&&(r[a]=l)}),e[s]=void 0,r}}return i};return t(n,0)},FT=Jn("AsyncFunction"),BT=n=>n&&(Lo(n)||Sn(n))&&Sn(n.then)&&Sn(n.catch),pm=((n,e)=>n?setImmediate:e?((t,i)=>(Ts.addEventListener("message",({source:s,data:r})=>{s===Ts&&r===t&&i.length&&i.shift()()},!1),s=>{i.push(s),Ts.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",Sn(Ts.postMessage)),kT=typeof queueMicrotask<"u"?queueMicrotask.bind(Ts):typeof process<"u"&&process.nextTick||pm,HT=n=>n!=null&&Sn(n[ol]),ae={isArray:Or,isArrayBuffer:cm,isBuffer:Po,isFormData:fT,isArrayBufferView:iT,isString:sT,isNumber:um,isBoolean:rT,isObject:Lo,isPlainObject:Ea,isEmptyObject:oT,isReadableStream:pT,isRequest:mT,isResponse:gT,isHeaders:_T,isUndefined:Eo,isDate:aT,isFile:lT,isBlob:cT,isRegExp:PT,isFunction:Sn,isStream:dT,isURLSearchParams:hT,isTypedArray:TT,isFileList:uT,forEach:Do,merge:Bc,extend:xT,trim:vT,stripBOM:yT,inherits:MT,toFlatObject:ST,kindOf:al,kindOfTest:Jn,endsWith:bT,toArray:ET,forEachEntry:AT,matchAll:wT,isHTMLForm:RT,hasOwnProperty:Qf,hasOwnProp:Qf,reduceDescriptors:hm,freezeMethods:LT,toObjectSet:DT,toCamelCase:CT,noop:IT,toFiniteNumber:NT,findKey:dm,global:Ts,isContextDefined:fm,isSpecCompliantForm:UT,toJSONObject:OT,isAsyncFn:FT,isThenable:BT,setImmediate:pm,asap:kT,isIterable:HT};function tt(n,e,t,i,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),i&&(this.request=i),s&&(this.response=s,this.status=s.status?s.status:null)}ae.inherits(tt,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ae.toJSONObject(this.config),code:this.code,status:this.status}}});const mm=tt.prototype,gm={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{gm[n]={value:n}});Object.defineProperties(tt,gm);Object.defineProperty(mm,"isAxiosError",{value:!0});tt.from=(n,e,t,i,s,r)=>{const o=Object.create(mm);return ae.toFlatObject(n,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),tt.call(o,n.message,e,t,i,s),o.cause=n,o.name=n.name,r&&Object.assign(o,r),o};const zT=null;function kc(n){return ae.isPlainObject(n)||ae.isArray(n)}function _m(n){return ae.endsWith(n,"[]")?n.slice(0,-2):n}function eh(n,e,t){return n?n.concat(e).map(function(s,r){return s=_m(s),!t&&r?"["+s+"]":s}).join(t?".":""):e}function VT(n){return ae.isArray(n)&&!n.some(kc)}const GT=ae.toFlatObject(ae,{},null,function(e){return/^is[A-Z]/.test(e)});function cl(n,e,t){if(!ae.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=ae.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,p){return!ae.isUndefined(p[_])});const i=t.metaTokens,s=t.visitor||u,r=t.dots,o=t.indexes,l=(t.Blob||typeof Blob<"u"&&Blob)&&ae.isSpecCompliantForm(e);if(!ae.isFunction(s))throw new TypeError("visitor must be a function");function c(g){if(g===null)return"";if(ae.isDate(g))return g.toISOString();if(ae.isBoolean(g))return g.toString();if(!l&&ae.isBlob(g))throw new tt("Blob is not supported. Use a Buffer instead.");return ae.isArrayBuffer(g)||ae.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,_,p){let m=g;if(g&&!p&&typeof g=="object"){if(ae.endsWith(_,"{}"))_=i?_:_.slice(0,-2),g=JSON.stringify(g);else if(ae.isArray(g)&&VT(g)||(ae.isFileList(g)||ae.endsWith(_,"[]"))&&(m=ae.toArray(g)))return _=_m(_),m.forEach(function(y,T){!(ae.isUndefined(y)||y===null)&&e.append(o===!0?eh([_],T,r):o===null?_:_+"[]",c(y))}),!1}return kc(g)?!0:(e.append(eh(p,_,r),c(g)),!1)}const d=[],f=Object.assign(GT,{defaultVisitor:u,convertValue:c,isVisitable:kc});function h(g,_){if(!ae.isUndefined(g)){if(d.indexOf(g)!==-1)throw Error("Circular reference detected in "+_.join("."));d.push(g),ae.forEach(g,function(m,S){(!(ae.isUndefined(m)||m===null)&&s.call(e,m,ae.isString(S)?S.trim():S,_,f))===!0&&h(m,_?_.concat(S):[S])}),d.pop()}}if(!ae.isObject(n))throw new TypeError("data must be an object");return h(n),e}function th(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function yu(n,e){this._pairs=[],n&&cl(n,this,e)}const vm=yu.prototype;vm.append=function(e,t){this._pairs.push([e,t])};vm.toString=function(e){const t=e?function(i){return e.call(this,i,th)}:th;return this._pairs.map(function(s){return t(s[0])+"="+t(s[1])},"").join("&")};function WT(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function xm(n,e,t){if(!e)return n;const i=t&&t.encode||WT;ae.isFunction(t)&&(t={serialize:t});const s=t&&t.serialize;let r;if(s?r=s(e,t):r=ae.isURLSearchParams(e)?e.toString():new yu(e,t).toString(i),r){const o=n.indexOf("#");o!==-1&&(n=n.slice(0,o)),n+=(n.indexOf("?")===-1?"?":"&")+r}return n}class nh{constructor(){this.handlers=[]}use(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){ae.forEach(this.handlers,function(i){i!==null&&e(i)})}}const ym={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},XT=typeof URLSearchParams<"u"?URLSearchParams:yu,jT=typeof FormData<"u"?FormData:null,qT=typeof Blob<"u"?Blob:null,$T={isBrowser:!0,classes:{URLSearchParams:XT,FormData:jT,Blob:qT},protocols:["http","https","file","blob","url","data"]},Mu=typeof window<"u"&&typeof document<"u",Hc=typeof navigator=="object"&&navigator||void 0,YT=Mu&&(!Hc||["ReactNative","NativeScript","NS"].indexOf(Hc.product)<0),KT=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",ZT=Mu&&window.location.href||"http://localhost",JT=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Mu,hasStandardBrowserEnv:YT,hasStandardBrowserWebWorkerEnv:KT,navigator:Hc,origin:ZT},Symbol.toStringTag,{value:"Module"})),sn={...JT,...$T};function QT(n,e){return cl(n,new sn.classes.URLSearchParams,{visitor:function(t,i,s,r){return sn.isNode&&ae.isBuffer(t)?(this.append(i,t.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)},...e})}function eA(n){return ae.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function tA(n){const e={},t=Object.keys(n);let i;const s=t.length;let r;for(i=0;i<s;i++)r=t[i],e[r]=n[r];return e}function Mm(n){function e(t,i,s,r){let o=t[r++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=r>=t.length;return o=!o&&ae.isArray(s)?s.length:o,l?(ae.hasOwnProp(s,o)?s[o]=[s[o],i]:s[o]=i,!a):((!s[o]||!ae.isObject(s[o]))&&(s[o]=[]),e(t,i,s[o],r)&&ae.isArray(s[o])&&(s[o]=tA(s[o])),!a)}if(ae.isFormData(n)&&ae.isFunction(n.entries)){const t={};return ae.forEachEntry(n,(i,s)=>{e(eA(i),s,t,0)}),t}return null}function nA(n,e,t){if(ae.isString(n))try{return(e||JSON.parse)(n),ae.trim(n)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(n)}const Io={transitional:ym,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const i=t.getContentType()||"",s=i.indexOf("application/json")>-1,r=ae.isObject(e);if(r&&ae.isHTMLForm(e)&&(e=new FormData(e)),ae.isFormData(e))return s?JSON.stringify(Mm(e)):e;if(ae.isArrayBuffer(e)||ae.isBuffer(e)||ae.isStream(e)||ae.isFile(e)||ae.isBlob(e)||ae.isReadableStream(e))return e;if(ae.isArrayBufferView(e))return e.buffer;if(ae.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(r){if(i.indexOf("application/x-www-form-urlencoded")>-1)return QT(e,this.formSerializer).toString();if((a=ae.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return cl(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return r||s?(t.setContentType("application/json",!1),nA(e)):e}],transformResponse:[function(e){const t=this.transitional||Io.transitional,i=t&&t.forcedJSONParsing,s=this.responseType==="json";if(ae.isResponse(e)||ae.isReadableStream(e))return e;if(e&&ae.isString(e)&&(i&&!this.responseType||s)){const o=!(t&&t.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?tt.from(a,tt.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:sn.classes.FormData,Blob:sn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};ae.forEach(["delete","get","head","post","put","patch"],n=>{Io.headers[n]={}});const iA=ae.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),sA=n=>{const e={};let t,i,s;return n&&n.split(`
`).forEach(function(o){s=o.indexOf(":"),t=o.substring(0,s).trim().toLowerCase(),i=o.substring(s+1).trim(),!(!t||e[t]&&iA[t])&&(t==="set-cookie"?e[t]?e[t].push(i):e[t]=[i]:e[t]=e[t]?e[t]+", "+i:i)}),e},ih=Symbol("internals");function Jr(n){return n&&String(n).trim().toLowerCase()}function Ta(n){return n===!1||n==null?n:ae.isArray(n)?n.map(Ta):String(n)}function rA(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=t.exec(n);)e[i[1]]=i[2];return e}const oA=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function fc(n,e,t,i,s){if(ae.isFunction(i))return i.call(this,e,t);if(s&&(e=t),!!ae.isString(e)){if(ae.isString(i))return e.indexOf(i)!==-1;if(ae.isRegExp(i))return i.test(e)}}function aA(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,i)=>t.toUpperCase()+i)}function lA(n,e){const t=ae.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(n,i+t,{value:function(s,r,o){return this[i].call(this,e,s,r,o)},configurable:!0})})}let bn=class{constructor(e){e&&this.set(e)}set(e,t,i){const s=this;function r(a,l,c){const u=Jr(l);if(!u)throw new Error("header name must be a non-empty string");const d=ae.findKey(s,u);(!d||s[d]===void 0||c===!0||c===void 0&&s[d]!==!1)&&(s[d||l]=Ta(a))}const o=(a,l)=>ae.forEach(a,(c,u)=>r(c,u,l));if(ae.isPlainObject(e)||e instanceof this.constructor)o(e,t);else if(ae.isString(e)&&(e=e.trim())&&!oA(e))o(sA(e),t);else if(ae.isObject(e)&&ae.isIterable(e)){let a={},l,c;for(const u of e){if(!ae.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[c=u[0]]=(l=a[c])?ae.isArray(l)?[...l,u[1]]:[l,u[1]]:u[1]}o(a,t)}else e!=null&&r(t,e,i);return this}get(e,t){if(e=Jr(e),e){const i=ae.findKey(this,e);if(i){const s=this[i];if(!t)return s;if(t===!0)return rA(s);if(ae.isFunction(t))return t.call(this,s,i);if(ae.isRegExp(t))return t.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Jr(e),e){const i=ae.findKey(this,e);return!!(i&&this[i]!==void 0&&(!t||fc(this,this[i],i,t)))}return!1}delete(e,t){const i=this;let s=!1;function r(o){if(o=Jr(o),o){const a=ae.findKey(i,o);a&&(!t||fc(i,i[a],a,t))&&(delete i[a],s=!0)}}return ae.isArray(e)?e.forEach(r):r(e),s}clear(e){const t=Object.keys(this);let i=t.length,s=!1;for(;i--;){const r=t[i];(!e||fc(this,this[r],r,e,!0))&&(delete this[r],s=!0)}return s}normalize(e){const t=this,i={};return ae.forEach(this,(s,r)=>{const o=ae.findKey(i,r);if(o){t[o]=Ta(s),delete t[r];return}const a=e?aA(r):String(r).trim();a!==r&&delete t[r],t[a]=Ta(s),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return ae.forEach(this,(i,s)=>{i!=null&&i!==!1&&(t[s]=e&&ae.isArray(i)?i.join(", "):i)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const i=new this(e);return t.forEach(s=>i.set(s)),i}static accessor(e){const i=(this[ih]=this[ih]={accessors:{}}).accessors,s=this.prototype;function r(o){const a=Jr(o);i[a]||(lA(s,o),i[a]=!0)}return ae.isArray(e)?e.forEach(r):r(e),this}};bn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);ae.reduceDescriptors(bn.prototype,({value:n},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>n,set(i){this[t]=i}}});ae.freezeMethods(bn);function hc(n,e){const t=this||Io,i=e||t,s=bn.from(i.headers);let r=i.data;return ae.forEach(n,function(a){r=a.call(t,r,s.normalize(),e?e.status:void 0)}),s.normalize(),r}function Sm(n){return!!(n&&n.__CANCEL__)}function Fr(n,e,t){tt.call(this,n??"canceled",tt.ERR_CANCELED,e,t),this.name="CanceledError"}ae.inherits(Fr,tt,{__CANCEL__:!0});function bm(n,e,t){const i=t.config.validateStatus;!t.status||!i||i(t.status)?n(t):e(new tt("Request failed with status code "+t.status,[tt.ERR_BAD_REQUEST,tt.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function cA(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function uA(n,e){n=n||10;const t=new Array(n),i=new Array(n);let s=0,r=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[r];o||(o=c),t[s]=l,i[s]=c;let d=r,f=0;for(;d!==s;)f+=t[d++],d=d%n;if(s=(s+1)%n,s===r&&(r=(r+1)%n),c-o<e)return;const h=u&&c-u;return h?Math.round(f*1e3/h):void 0}}function dA(n,e){let t=0,i=1e3/e,s,r;const o=(c,u=Date.now())=>{t=u,s=null,r&&(clearTimeout(r),r=null),n(...c)};return[(...c)=>{const u=Date.now(),d=u-t;d>=i?o(c,u):(s=c,r||(r=setTimeout(()=>{r=null,o(s)},i-d)))},()=>s&&o(s)]}const Va=(n,e,t=3)=>{let i=0;const s=uA(50,250);return dA(r=>{const o=r.loaded,a=r.lengthComputable?r.total:void 0,l=o-i,c=s(l),u=o<=a;i=o;const d={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:r,lengthComputable:a!=null,[e?"download":"upload"]:!0};n(d)},t)},sh=(n,e)=>{const t=n!=null;return[i=>e[0]({lengthComputable:t,total:n,loaded:i}),e[1]]},rh=n=>(...e)=>ae.asap(()=>n(...e)),fA=sn.hasStandardBrowserEnv?((n,e)=>t=>(t=new URL(t,sn.origin),n.protocol===t.protocol&&n.host===t.host&&(e||n.port===t.port)))(new URL(sn.origin),sn.navigator&&/(msie|trident)/i.test(sn.navigator.userAgent)):()=>!0,hA=sn.hasStandardBrowserEnv?{write(n,e,t,i,s,r){const o=[n+"="+encodeURIComponent(e)];ae.isNumber(t)&&o.push("expires="+new Date(t).toGMTString()),ae.isString(i)&&o.push("path="+i),ae.isString(s)&&o.push("domain="+s),r===!0&&o.push("secure"),document.cookie=o.join("; ")},read(n){const e=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function pA(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function mA(n,e){return e?n.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):n}function Em(n,e,t){let i=!pA(e);return n&&(i||t==!1)?mA(n,e):e}const oh=n=>n instanceof bn?{...n}:n;function Ds(n,e){e=e||{};const t={};function i(c,u,d,f){return ae.isPlainObject(c)&&ae.isPlainObject(u)?ae.merge.call({caseless:f},c,u):ae.isPlainObject(u)?ae.merge({},u):ae.isArray(u)?u.slice():u}function s(c,u,d,f){if(ae.isUndefined(u)){if(!ae.isUndefined(c))return i(void 0,c,d,f)}else return i(c,u,d,f)}function r(c,u){if(!ae.isUndefined(u))return i(void 0,u)}function o(c,u){if(ae.isUndefined(u)){if(!ae.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function a(c,u,d){if(d in e)return i(c,u);if(d in n)return i(void 0,c)}const l={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u,d)=>s(oh(c),oh(u),d,!0)};return ae.forEach(Object.keys({...n,...e}),function(u){const d=l[u]||s,f=d(n[u],e[u],u);ae.isUndefined(f)&&d!==a||(t[u]=f)}),t}const Tm=n=>{const e=Ds({},n);let{data:t,withXSRFToken:i,xsrfHeaderName:s,xsrfCookieName:r,headers:o,auth:a}=e;e.headers=o=bn.from(o),e.url=xm(Em(e.baseURL,e.url,e.allowAbsoluteUrls),n.params,n.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(ae.isFormData(t)){if(sn.hasStandardBrowserEnv||sn.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[c,...u]=l?l.split(";").map(d=>d.trim()).filter(Boolean):[];o.setContentType([c||"multipart/form-data",...u].join("; "))}}if(sn.hasStandardBrowserEnv&&(i&&ae.isFunction(i)&&(i=i(e)),i||i!==!1&&fA(e.url))){const c=s&&r&&hA.read(r);c&&o.set(s,c)}return e},gA=typeof XMLHttpRequest<"u",_A=gA&&function(n){return new Promise(function(t,i){const s=Tm(n);let r=s.data;const o=bn.from(s.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=s,u,d,f,h,g;function _(){h&&h(),g&&g(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let p=new XMLHttpRequest;p.open(s.method.toUpperCase(),s.url,!0),p.timeout=s.timeout;function m(){if(!p)return;const y=bn.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),O={data:!a||a==="text"||a==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:y,config:n,request:p};bm(function(w){t(w),_()},function(w){i(w),_()},O),p=null}"onloadend"in p?p.onloadend=m:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.indexOf("file:")===0)||setTimeout(m)},p.onabort=function(){p&&(i(new tt("Request aborted",tt.ECONNABORTED,n,p)),p=null)},p.onerror=function(){i(new tt("Network Error",tt.ERR_NETWORK,n,p)),p=null},p.ontimeout=function(){let T=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const O=s.transitional||ym;s.timeoutErrorMessage&&(T=s.timeoutErrorMessage),i(new tt(T,O.clarifyTimeoutError?tt.ETIMEDOUT:tt.ECONNABORTED,n,p)),p=null},r===void 0&&o.setContentType(null),"setRequestHeader"in p&&ae.forEach(o.toJSON(),function(T,O){p.setRequestHeader(O,T)}),ae.isUndefined(s.withCredentials)||(p.withCredentials=!!s.withCredentials),a&&a!=="json"&&(p.responseType=s.responseType),c&&([f,g]=Va(c,!0),p.addEventListener("progress",f)),l&&p.upload&&([d,h]=Va(l),p.upload.addEventListener("progress",d),p.upload.addEventListener("loadend",h)),(s.cancelToken||s.signal)&&(u=y=>{p&&(i(!y||y.type?new Fr(null,n,p):y),p.abort(),p=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const S=cA(s.url);if(S&&sn.protocols.indexOf(S)===-1){i(new tt("Unsupported protocol "+S+":",tt.ERR_BAD_REQUEST,n));return}p.send(r||null)})},vA=(n,e)=>{const{length:t}=n=n?n.filter(Boolean):[];if(e||t){let i=new AbortController,s;const r=function(c){if(!s){s=!0,a();const u=c instanceof Error?c:this.reason;i.abort(u instanceof tt?u:new Fr(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,r(new tt(`timeout ${e} of ms exceeded`,tt.ETIMEDOUT))},e);const a=()=>{n&&(o&&clearTimeout(o),o=null,n.forEach(c=>{c.unsubscribe?c.unsubscribe(r):c.removeEventListener("abort",r)}),n=null)};n.forEach(c=>c.addEventListener("abort",r));const{signal:l}=i;return l.unsubscribe=()=>ae.asap(a),l}},xA=function*(n,e){let t=n.byteLength;if(t<e){yield n;return}let i=0,s;for(;i<t;)s=i+e,yield n.slice(i,s),i=s},yA=async function*(n,e){for await(const t of MA(n))yield*xA(t,e)},MA=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const e=n.getReader();try{for(;;){const{done:t,value:i}=await e.read();if(t)break;yield i}}finally{await e.cancel()}},ah=(n,e,t,i)=>{const s=yA(n,e);let r=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await s.next();if(c){a(),l.close();return}let d=u.byteLength;if(t){let f=r+=d;t(f)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),s.return()}},{highWaterMark:2})},ul=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Am=ul&&typeof ReadableStream=="function",SA=ul&&(typeof TextEncoder=="function"?(n=>e=>n.encode(e))(new TextEncoder):async n=>new Uint8Array(await new Response(n).arrayBuffer())),wm=(n,...e)=>{try{return!!n(...e)}catch{return!1}},bA=Am&&wm(()=>{let n=!1;const e=new Request(sn.origin,{body:new ReadableStream,method:"POST",get duplex(){return n=!0,"half"}}).headers.has("Content-Type");return n&&!e}),lh=64*1024,zc=Am&&wm(()=>ae.isReadableStream(new Response("").body)),Ga={stream:zc&&(n=>n.body)};ul&&(n=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!Ga[e]&&(Ga[e]=ae.isFunction(n[e])?t=>t[e]():(t,i)=>{throw new tt(`Response type '${e}' is not supported`,tt.ERR_NOT_SUPPORT,i)})})})(new Response);const EA=async n=>{if(n==null)return 0;if(ae.isBlob(n))return n.size;if(ae.isSpecCompliantForm(n))return(await new Request(sn.origin,{method:"POST",body:n}).arrayBuffer()).byteLength;if(ae.isArrayBufferView(n)||ae.isArrayBuffer(n))return n.byteLength;if(ae.isURLSearchParams(n)&&(n=n+""),ae.isString(n))return(await SA(n)).byteLength},TA=async(n,e)=>{const t=ae.toFiniteNumber(n.getContentLength());return t??EA(e)},AA=ul&&(async n=>{let{url:e,method:t,data:i,signal:s,cancelToken:r,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:c,headers:u,withCredentials:d="same-origin",fetchOptions:f}=Tm(n);c=c?(c+"").toLowerCase():"text";let h=vA([s,r&&r.toAbortSignal()],o),g;const _=h&&h.unsubscribe&&(()=>{h.unsubscribe()});let p;try{if(l&&bA&&t!=="get"&&t!=="head"&&(p=await TA(u,i))!==0){let O=new Request(e,{method:"POST",body:i,duplex:"half"}),D;if(ae.isFormData(i)&&(D=O.headers.get("content-type"))&&u.setContentType(D),O.body){const[w,G]=sh(p,Va(rh(l)));i=ah(O.body,lh,w,G)}}ae.isString(d)||(d=d?"include":"omit");const m="credentials"in Request.prototype;g=new Request(e,{...f,signal:h,method:t.toUpperCase(),headers:u.normalize().toJSON(),body:i,duplex:"half",credentials:m?d:void 0});let S=await fetch(g,f);const y=zc&&(c==="stream"||c==="response");if(zc&&(a||y&&_)){const O={};["status","statusText","headers"].forEach(E=>{O[E]=S[E]});const D=ae.toFiniteNumber(S.headers.get("content-length")),[w,G]=a&&sh(D,Va(rh(a),!0))||[];S=new Response(ah(S.body,lh,w,()=>{G&&G(),_&&_()}),O)}c=c||"text";let T=await Ga[ae.findKey(Ga,c)||"text"](S,n);return!y&&_&&_(),await new Promise((O,D)=>{bm(O,D,{data:T,headers:bn.from(S.headers),status:S.status,statusText:S.statusText,config:n,request:g})})}catch(m){throw _&&_(),m&&m.name==="TypeError"&&/Load failed|fetch/i.test(m.message)?Object.assign(new tt("Network Error",tt.ERR_NETWORK,n,g),{cause:m.cause||m}):tt.from(m,m&&m.code,n,g)}}),Vc={http:zT,xhr:_A,fetch:AA};ae.forEach(Vc,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const ch=n=>`- ${n}`,wA=n=>ae.isFunction(n)||n===null||n===!1,Rm={getAdapter:n=>{n=ae.isArray(n)?n:[n];const{length:e}=n;let t,i;const s={};for(let r=0;r<e;r++){t=n[r];let o;if(i=t,!wA(t)&&(i=Vc[(o=String(t)).toLowerCase()],i===void 0))throw new tt(`Unknown adapter '${o}'`);if(i)break;s[o||"#"+r]=i}if(!i){const r=Object.entries(s).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?r.length>1?`since :
`+r.map(ch).join(`
`):" "+ch(r[0]):"as no adapter specified";throw new tt("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return i},adapters:Vc};function pc(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Fr(null,n)}function uh(n){return pc(n),n.headers=bn.from(n.headers),n.data=hc.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),Rm.getAdapter(n.adapter||Io.adapter)(n).then(function(i){return pc(n),i.data=hc.call(n,n.transformResponse,i),i.headers=bn.from(i.headers),i},function(i){return Sm(i)||(pc(n),i&&i.response&&(i.response.data=hc.call(n,n.transformResponse,i.response),i.response.headers=bn.from(i.response.headers))),Promise.reject(i)})}const Cm="1.11.0",dl={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{dl[n]=function(i){return typeof i===n||"a"+(e<1?"n ":" ")+n}});const dh={};dl.transitional=function(e,t,i){function s(r,o){return"[Axios v"+Cm+"] Transitional option '"+r+"'"+o+(i?". "+i:"")}return(r,o,a)=>{if(e===!1)throw new tt(s(o," has been removed"+(t?" in "+t:"")),tt.ERR_DEPRECATED);return t&&!dh[o]&&(dh[o]=!0,console.warn(s(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(r,o,a):!0}};dl.spelling=function(e){return(t,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function RA(n,e,t){if(typeof n!="object")throw new tt("options must be an object",tt.ERR_BAD_OPTION_VALUE);const i=Object.keys(n);let s=i.length;for(;s-- >0;){const r=i[s],o=e[r];if(o){const a=n[r],l=a===void 0||o(a,r,n);if(l!==!0)throw new tt("option "+r+" must be "+l,tt.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new tt("Unknown option "+r,tt.ERR_BAD_OPTION)}}const Aa={assertOptions:RA,validators:dl},ni=Aa.validators;let ws=class{constructor(e){this.defaults=e||{},this.interceptors={request:new nh,response:new nh}}async request(e,t){try{return await this._request(e,t)}catch(i){if(i instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const r=s.stack?s.stack.replace(/^.+\n/,""):"";try{i.stack?r&&!String(i.stack).endsWith(r.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+r):i.stack=r}catch{}}throw i}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=Ds(this.defaults,t);const{transitional:i,paramsSerializer:s,headers:r}=t;i!==void 0&&Aa.assertOptions(i,{silentJSONParsing:ni.transitional(ni.boolean),forcedJSONParsing:ni.transitional(ni.boolean),clarifyTimeoutError:ni.transitional(ni.boolean)},!1),s!=null&&(ae.isFunction(s)?t.paramsSerializer={serialize:s}:Aa.assertOptions(s,{encode:ni.function,serialize:ni.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),Aa.assertOptions(t,{baseUrl:ni.spelling("baseURL"),withXsrfToken:ni.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=r&&ae.merge(r.common,r[t.method]);r&&ae.forEach(["delete","get","head","post","put","patch","common"],g=>{delete r[g]}),t.headers=bn.concat(o,r);const a=[];let l=!0;this.interceptors.request.forEach(function(_){typeof _.runWhen=="function"&&_.runWhen(t)===!1||(l=l&&_.synchronous,a.unshift(_.fulfilled,_.rejected))});const c=[];this.interceptors.response.forEach(function(_){c.push(_.fulfilled,_.rejected)});let u,d=0,f;if(!l){const g=[uh.bind(this),void 0];for(g.unshift(...a),g.push(...c),f=g.length,u=Promise.resolve(t);d<f;)u=u.then(g[d++],g[d++]);return u}f=a.length;let h=t;for(d=0;d<f;){const g=a[d++],_=a[d++];try{h=g(h)}catch(p){_.call(this,p);break}}try{u=uh.call(this,h)}catch(g){return Promise.reject(g)}for(d=0,f=c.length;d<f;)u=u.then(c[d++],c[d++]);return u}getUri(e){e=Ds(this.defaults,e);const t=Em(e.baseURL,e.url,e.allowAbsoluteUrls);return xm(t,e.params,e.paramsSerializer)}};ae.forEach(["delete","get","head","options"],function(e){ws.prototype[e]=function(t,i){return this.request(Ds(i||{},{method:e,url:t,data:(i||{}).data}))}});ae.forEach(["post","put","patch"],function(e){function t(i){return function(r,o,a){return this.request(Ds(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}ws.prototype[e]=t(),ws.prototype[e+"Form"]=t(!0)});let CA=class Pm{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(r){t=r});const i=this;this.promise.then(s=>{if(!i._listeners)return;let r=i._listeners.length;for(;r-- >0;)i._listeners[r](s);i._listeners=null}),this.promise.then=s=>{let r;const o=new Promise(a=>{i.subscribe(a),r=a}).then(s);return o.cancel=function(){i.unsubscribe(r)},o},e(function(r,o,a){i.reason||(i.reason=new Fr(r,o,a),t(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=i=>{e.abort(i)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new Pm(function(s){e=s}),cancel:e}}};function PA(n){return function(t){return n.apply(null,t)}}function LA(n){return ae.isObject(n)&&n.isAxiosError===!0}const Gc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Gc).forEach(([n,e])=>{Gc[e]=n});function Lm(n){const e=new ws(n),t=am(ws.prototype.request,e);return ae.extend(t,ws.prototype,e,{allOwnKeys:!0}),ae.extend(t,e,null,{allOwnKeys:!0}),t.create=function(s){return Lm(Ds(n,s))},t}const Nt=Lm(Io);Nt.Axios=ws;Nt.CanceledError=Fr;Nt.CancelToken=CA;Nt.isCancel=Sm;Nt.VERSION=Cm;Nt.toFormData=cl;Nt.AxiosError=tt;Nt.Cancel=Nt.CanceledError;Nt.all=function(e){return Promise.all(e)};Nt.spread=PA;Nt.isAxiosError=LA;Nt.mergeConfig=Ds;Nt.AxiosHeaders=bn;Nt.formToJSON=n=>Mm(ae.isHTMLForm(n)?new FormData(n):n);Nt.getAdapter=Rm.getAdapter;Nt.HttpStatusCode=Gc;Nt.default=Nt;const{Axios:DR,AxiosError:IR,CanceledError:NR,isCancel:UR,CancelToken:OR,VERSION:FR,all:BR,Cancel:kR,isAxiosError:HR,spread:zR,toFormData:VR,AxiosHeaders:GR,HttpStatusCode:WR,formToJSON:XR,getAdapter:jR,mergeConfig:qR}=Nt,DA="/api",pn=Nt.create({baseURL:DA,timeout:1e4,headers:{"Content-Type":"application/json"}}),Dm={async getBuildings(n={}){try{return(await pn.get("/buildings",{params:n})).data}catch(e){throw e}},async getBuildingById(n){try{return(await pn.get(`/buildings/${n}`)).data}catch(e){throw e}},async createBuilding(n){try{return(await pn.post("/buildings",n)).data}catch(e){throw e}},async updateBuilding(n,e){try{return(await pn.put(`/buildings/${n}`,e)).data}catch(t){throw t}},async deleteBuilding(n){try{return(await pn.delete(`/buildings/${n}`)).data}catch(e){throw e}},async searchBuildings(n,e={}){try{const t={q:n,...e};return(await pn.get("/buildings",{params:t})).data}catch(t){throw t}}},IA={async getFloors(){try{return(await pn.get("/floors")).data}catch(n){throw n}},async getFloorById(n){try{return(await pn.get(`/floors/${n}`)).data}catch(e){throw e}},async getFloorStats(n){try{return(await pn.get(`/floors/${n}/stats`)).data}catch(e){throw e}}},Im={async getCategories(){try{return(await pn.get("/categories")).data}catch(n){throw n}},async getCategoryById(n){try{return(await pn.get(`/categories/${n}`)).data}catch(e){throw e}},async createCategory(n){try{return(await pn.post("/categories",n)).data}catch(e){throw e}},async updateCategory(n,e){try{return(await pn.put(`/categories/${n}`,e)).data}catch(t){throw t}},async deleteCategory(n){try{return(await pn.delete(`/categories/${n}`)).data}catch(e){throw e}}},NA={async checkHealth(){try{return(await pn.get("/health")).data}catch(n){throw n}}},UA={buildings:Dm,floors:IA,categories:Im,health:NA},Lr=Dm.getBuildings,Nm=Im.getCategories,ii=Object.freeze(Object.defineProperty({__proto__:null,default:UA,getBuildingCategories:Nm,getBuildings:Lr},Symbol.toStringTag,{value:"Module"})),Os=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},OA={class:"building-list-container"},FA={class:"list-header"},BA={class:"search-section"},kA={class:"search-input-wrapper"},HA=["title"],zA={key:0,class:"empty-state"},VA=["data-category-id","onClick"],GA={class:"category-name"},WA={key:0,class:"buildings-list"},XA=["onClick"],jA={class:"building-info"},qA={class:"building-name"},$A={class:"building-meta"},YA={class:"building-id"},KA={key:0,class:"loading-state"},ZA={key:1,class:"list-footer"},JA={class:"item-count"},QA={__name:"BuildingList",props:{focusedBuilding:{type:Object,default:null}},emits:["focus-building"],setup(n,{expose:e,emit:t}){const i=Le([]),s=Le([]),r=Le(""),o=Le(!1),a=Le({}),l=Le(null),c=Le(!1),u=Le(null),d=Le(null),f=Wt(()=>{let I=i.value;const k=s.value.map(X=>X.id);if(I=I.filter(X=>k.includes(X.category_id)),r.value.trim()){const X=r.value.trim();if(c.value)I=I.filter(q=>q.code&&q.code===X||q.name&&q.name===X||q.description&&q.description===X);else{const q=X.toLowerCase();I=I.filter(H=>{const pe=H.code&&H.code.toLowerCase().includes(q),ge=H.name&&H.name.toLowerCase().includes(q),Te=H.description&&H.description.toLowerCase().includes(q);return pe||ge||Te})}}return I}),h=Wt(()=>r.value.trim()?s.value.filter(I=>_(I.id).length>0):s.value);Bn(r,async I=>{I.trim()&&(await Un(),f.value.length>0&&g())});const g=()=>{if(l.value){if(!c.value)s.value.forEach(I=>{_(I.id).length>0&&(a.value[I.id]=!0)});else{const I=s.value.find(k=>_(k.id).length>0);I&&(a.value[I.id]=!0)}Un(()=>{const I=l.value.querySelector(".building-item");I&&I.scrollIntoView({behavior:"smooth",block:"nearest"})})}},_=I=>f.value.filter(k=>k.category_id===I),p=async I=>{a.value[I]?(a.value[I]=!1,u.value=null):(Object.keys(a.value).forEach(k=>{a.value[k]=!1}),a.value[I]=!0,u.value=I,await Un(),m(I))},m=I=>{if(!l.value)return;const k=l.value.querySelectorAll(".category-node"),X=Array.from(k).find(q=>{const H=q.querySelector(".category-header");return H&&H.getAttribute("data-category-id")===I.toString()});X&&X.scrollIntoView({behavior:"smooth",block:"start"})},S=I=>{Object.keys(a.value).forEach(k=>{a.value[k]=!1}),I?(a.value[I]=!0,u.value=I):u.value=null},y=async()=>{if(await Un(),r.value.trim()&&f.value.length>0){Object.keys(a.value).forEach(k=>{a.value[k]=!1}),s.value.forEach(k=>{_(k.id).length>0&&(a.value[k.id]=!0)});const I=s.value.find(k=>_(k.id).length>0);u.value=I?I.id:null,await Un(),g()}},T=async()=>{if(c.value=!c.value,await Un(),r.value.trim()&&f.value.length>0){if(Object.keys(a.value).forEach(k=>{a.value[k]=!1}),!c.value)s.value.forEach(k=>{_(k.id).length>0&&(a.value[k.id]=!0)});else{const k=s.value.find(X=>_(X.id).length>0);k&&(a.value[k.id]=!0)}const I=s.value.find(k=>_(k.id).length>0);u.value=I?I.id:null,await Un(),g()}},O=()=>{r.value="",c.value=!1,D(),u.value=null},D=()=>{Object.keys(a.value).forEach(I=>{a.value[I]=!1})},w=I=>{$("focus-building",I)},G=()=>{d.value=null},E=I=>{d.value=I},M=I=>d.value&&d.value.id===I.id?!0:W.focusedBuilding&&W.focusedBuilding.id===I.id,W=n,$=t,L=async()=>{o.value=!0;try{const[I,k]=await Promise.all([Lr({limit:3e3}),Nm()]);i.value=I.data||I,s.value=k.filter(X=>X.show_in_list===!0)}catch{}finally{o.value=!1}};return Rs(()=>{L()}),e({searchQuery:r,isPreciseSearch:c,handleSearch:y,expandCategoryOnly:S,clearBuildingFocus:G,updateFocusedBuilding:E}),(I,k)=>(et(),at("div",OA,[de("div",FA,[k[3]||(k[3]=uo('<div class="list-title" data-v-de604828><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="title-icon" data-v-de604828><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" data-v-de604828></path><polyline points="7.5 4.21 12 6.81 16.5 4.21" data-v-de604828></polyline><polyline points="7.5 19.79 7.5 14.6 3 12" data-v-de604828></polyline><polyline points="21 12 16.5 14.6 16.5 19.79" data-v-de604828></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96" data-v-de604828></polyline><line x1="12" y1="22.08" x2="12" y2="12" data-v-de604828></line></svg> 设备列表 </div>',1)),de("div",BA,[de("div",kA,[de("button",{class:yt(["search-icon-button",{active:c.value}]),onClick:T,title:c.value?"精准搜索模式":"点击进行精准搜索",type:"button"},[...k[1]||(k[1]=[de("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor"},[de("circle",{cx:"11",cy:"11",r:"8"}),de("path",{d:"m21 21-4.35-4.35"})],-1)])],10,HA),Gh(de("input",{"onUpdate:modelValue":k[0]||(k[0]=X=>r.value=X),type:"text",placeholder:"搜索设备编号或名称",class:"search-input",onInput:y},null,544),[[K_,r.value]]),r.value?(et(),at("button",{key:0,class:"clear-button",onClick:O,type:"button"},[...k[2]||(k[2]=[de("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor"},[de("path",{d:"M18 6L6 18"}),de("path",{d:"M6 6l12 12"})],-1)])])):kt("",!0)])])]),de("div",{ref_key:"buildingTreeRef",ref:l,class:"building-tree"},[f.value.length===0?(et(),at("div",zA,[...k[4]||(k[4]=[uo('<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" data-v-de604828><circle cx="12" cy="12" r="10" data-v-de604828></circle><line x1="12" y1="8" x2="12" y2="12" data-v-de604828></line><line x1="12" y1="16" x2="12.01" y2="16" data-v-de604828></line></svg><p class="empty-text" data-v-de604828>未找到匹配的设备</p><p class="empty-subtext" data-v-de604828>尝试调整搜索条件或筛选条件</p>',3)])])):kt("",!0),(et(!0),at(Yt,null,es(h.value,X=>(et(),at("div",{key:X.id,class:"category-node"},[de("div",{class:yt(["category-header",{"sticky-category":a.value[X.id]}]),"data-category-id":X.id,onClick:q=>p(X.id)},[(et(),at("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",class:yt([{rotated:a.value[X.id]},"expand-icon"])},[...k[5]||(k[5]=[de("path",{d:"m6 9 6 6 6-6"},null,-1)])],2)),de("span",GA,ht(X.name),1)],10,VA),a.value[X.id]?(et(),at("div",WA,[(et(!0),at(Yt,null,es(_(X.id),q=>(et(),at("div",{key:q.id,class:yt(["building-item",{focused:M(q)}]),onClick:H=>w(q)},[de("div",jA,[de("div",qA,ht(q.description),1),de("div",$A,[de("span",YA,ht(q.code),1)])])],10,XA))),128))])):kt("",!0)]))),128))],512),o.value?(et(),at("div",KA,[...k[6]||(k[6]=[de("div",{class:"loading-spinner"},null,-1),de("span",null,"加载中...",-1)])])):kt("",!0),!o.value&&f.value.length>0?(et(),at("div",ZA,[de("span",JA,"共 "+ht(f.value.length)+" 个设备",1)])):kt("",!0)]))}},ew=Os(QA,[["__scopeId","data-v-de604828"]]),tw={class:"scifi-combined-toolbar"},nw={class:"toolbar-section tools-section"},iw={class:"toolbar-grid"},sw=["title","disabled"],rw={class:"scifi-btn-content"},ow={class:"scifi-btn-text"},aw=["title","disabled"],lw=["title"],cw={class:"toolbar-section floors-section"},uw={class:"scifi-floor-section"},dw={class:"scifi-floor-grid"},fw={key:0,class:"scifi-floor-item"},hw={key:0,class:"scifi-floor-area"},pw=["onClick","title"],mw={class:"scifi-floor-btn-content"},gw={class:"scifi-btn-text"},_w={key:2,class:"floor-divider"},vw={__name:"SciFiToolbar",props:{floors:{type:Array,required:!0,default:()=>[]},currentFloor:{type:String,required:!0,default:""},currentVisualStyle:{type:String,required:!0,default:"realistic"},showBuildingList:{type:Boolean,default:!0},showCeilings:{type:Boolean,default:!0},isApplyingStyle:{type:Boolean,default:!1},isPreloadingStyles:{type:Boolean,default:!1},stylePreloadProgress:{type:Number,default:0},overallProgress:{type:Number,default:0},isLoadingModels:{type:Boolean,default:!1}},emits:["switch-floor","toggle-visual-style","toggle-building-list","toggle-ceilings","back-to-previous-level"],setup(n,{emit:e}){const t=n,i=e,s=Le("park"),r=Wt(()=>t.floors.find(f=>f.id===t.currentFloor));Bn(r,f=>{f&&(f.level==="park"?s.value="park":f.level==="main"?s.value="main":s.value="floor")},{immediate:!0}),Wt(()=>{const f=t.floors.find(h=>h.id===t.currentFloor);return f?f.name:"楼层"});const o=Wt(()=>s.value),a=Wt(()=>{const f=t.floors.find(h=>h.id===t.currentFloor);return f?f.is_floor_hide===!0:!1}),l=Wt(()=>{const f=t.floors.find(h=>h.id===t.currentFloor);return f?f.is_visual_style===!0:!1}),c=Wt(()=>{const f=o.value;if(f==="park")return t.floors.filter(h=>h.level==="park"||h.level==="main");if(f==="main"||f==="floor"){const h=t.floors.filter(_=>_.level==="park"),g=t.floors.find(_=>_.id===t.currentFloor);if(g&&g.building_number_id){const _=g.building_number_id,p=t.floors.filter(m=>m.building_number_id===_);return[...h,...p]}return[...h,...t.floors]}return t.floors}),u=()=>{s.value="park",console.log("返回按钮：菜单层级直接切换到园区建筑级，currentFloor保持不变"),i("back-to-previous-level",null)},d=f=>{t.currentFloor===f.id&&o.value==="park"&&(f.level==="park"?s.value="park":f.level==="main"?s.value="main":s.value="floor"),i("switch-floor",f.id)};return(f,h)=>(et(),at("div",tw,[de("div",nw,[de("div",iw,[de("button",{class:yt(["scifi-tool-btn","text-btn",{active:n.currentVisualStyle==="hiddenline",disabled:n.isApplyingStyle||n.isPreloadingStyles||!l.value}]),onClick:h[0]||(h[0]=g=>f.$emit("toggle-visual-style")),title:n.isPreloadingStyles?"视觉样式加载中":l.value?n.currentVisualStyle==="hiddenline"?"切换到真实模式":"切换到线框模式":"视觉样式不可用",disabled:n.isApplyingStyle||n.isPreloadingStyles||!l.value},[h[3]||(h[3]=de("span",{class:"scifi-btn-glow"},null,-1)),de("div",rw,[de("span",ow,ht(n.isPreloadingStyles?`${n.overallProgress}%`:n.currentVisualStyle==="hiddenline"?"真实":"线框"),1)])],10,sw),de("button",{class:yt(["scifi-tool-btn","text-btn",{active:n.showCeilings,disabled:!a.value}]),onClick:h[1]||(h[1]=g=>f.$emit("toggle-ceilings")),title:a.value?n.showCeilings?"隐藏楼板":"显示楼板":"楼板控制功能已禁用",disabled:!a.value},[...h[4]||(h[4]=[de("span",{class:"scifi-btn-glow"},null,-1),de("div",{class:"scifi-btn-content"},[de("span",{class:"scifi-btn-text"},"楼板")],-1)])],10,aw),de("button",{class:yt(["scifi-tool-btn","text-btn",{active:n.showBuildingList}]),onClick:h[2]||(h[2]=g=>f.$emit("toggle-building-list")),title:n.showBuildingList?"隐藏设备列表":"显示设备列表"},[...h[5]||(h[5]=[de("span",{class:"scifi-btn-glow"},null,-1),de("div",{class:"scifi-btn-content"},[de("span",{class:"scifi-btn-text"},"设备")],-1)])],10,lw)])]),h[8]||(h[8]=de("div",{class:"toolbar-divider"},null,-1)),de("div",cw,[de("div",uw,[de("div",dw,[o.value==="main"||o.value==="floor"?(et(),at("div",fw,[de("button",{class:yt(["scifi-floor-btn","back-btn"]),onClick:u,title:"返回上一级"},[...h[6]||(h[6]=[de("span",{class:"scifi-btn-glow"},null,-1),de("div",{class:"scifi-floor-btn-content"},[de("span",{class:"scifi-btn-text"},"返回")],-1)])])])):kt("",!0),(et(!0),at(Yt,null,es(c.value,(g,_)=>(et(),at("div",{key:g.id,class:"scifi-floor-item"},[g.area?(et(),at("div",hw,ht(g.area),1)):kt("",!0),o.value==="park"||g.level!=="park"?(et(),at("button",{key:1,class:yt(["scifi-floor-btn",{active:n.currentFloor===g.id}]),onClick:p=>d(g),title:g.name},[h[7]||(h[7]=de("span",{class:"scifi-btn-glow"},null,-1)),de("div",mw,[de("span",gw,ht(g.name),1)])],10,pw)):kt("",!0),o.value==="park"&&_===0&&c.value.length>1?(et(),at("div",_w)):kt("",!0)]))),128))])])])]))}},xw=Os(vw,[["__scopeId","data-v-19bf03ad"]]);class yw{constructor(){this.ws=null,this.reconnectInterval=3e3,this.maxReconnectAttempts=5,this.reconnectAttempts=0,this.isConnected=!1,this.messageHandlers=new Map,this.reconnectTimer=null,this.baseUrl="ws://47.97.115.62:3001",this.connect()}connect(){try{this.ws&&this.ws.close(),this.ws=new WebSocket(`${this.baseUrl}/ws/alarms`),this.ws.onopen=()=>{console.log("WebSocket连接成功"),this.isConnected=!0,this.reconnectAttempts=0,this.onConnectionChange(!0)},this.ws.onmessage=e=>{try{const t=JSON.parse(e.data);this.handleMessage(t)}catch(t){console.error("WebSocket消息解析失败:",t)}},this.ws.onclose=e=>{console.log("WebSocket连接关闭:",e.code,e.reason),this.isConnected=!1,this.onConnectionChange(!1),this.handleReconnect()},this.ws.onerror=e=>{console.error("WebSocket连接错误:",e),this.isConnected=!1,this.onConnectionChange(!1)}}catch(e){console.error("WebSocket连接失败:",e),this.handleReconnect()}}handleReconnect(){if(this.reconnectAttempts>=this.maxReconnectAttempts){console.error("WebSocket重连次数已达上限，停止重连");return}this.reconnectAttempts++,console.log(`WebSocket尝试重连 (${this.reconnectAttempts}/${this.maxReconnectAttempts})...`),this.reconnectTimer=setTimeout(()=>{this.connect()},this.reconnectInterval)}handleMessage(e){const{type:t,alarms:i,alarm:s,deletedAlarmIds:r}=e;switch(t){case"alarms_update":this.triggerHandlers("alarms_update",{alarms:i});break;case"new_alarm":this.triggerHandlers("new_alarm",{alarm:s});break;case"records_deleted":this.triggerHandlers("records_deleted",{deletedAlarmIds:r});break;case"ping":this.send({type:"pong"});break;default:console.warn("未知的WebSocket消息类型:",t)}}send(e){if(this.isConnected&&this.ws)try{this.ws.send(JSON.stringify(e))}catch(t){console.error("WebSocket消息发送失败:",t)}else console.warn("WebSocket未连接，无法发送消息")}on(e,t){this.messageHandlers.has(e)||this.messageHandlers.set(e,[]),this.messageHandlers.get(e).push(t)}off(e,t){if(this.messageHandlers.has(e)){const i=this.messageHandlers.get(e),s=i.indexOf(t);s>-1&&i.splice(s,1)}}triggerHandlers(e,t){this.messageHandlers.has(e)&&this.messageHandlers.get(e).forEach(i=>{try{i(t)}catch(s){console.error(`WebSocket消息处理器执行失败 (${e}):`,s)}})}onConnectionChange(e){this.triggerHandlers("connection_change",{connected:e})}requestAlarmList(e={}){this.send({type:"get_alarms",payload:e})}requestAlarmStats(){this.send({type:"get_alarm_stats"})}markAlarmResolved(e){this.send({type:"mark_resolved",payload:{alarmId:e}})}disconnect(){this.reconnectTimer&&(clearTimeout(this.reconnectTimer),this.reconnectTimer=null),this.ws&&(this.ws.close(),this.ws=null),this.isConnected=!1,this.messageHandlers.clear()}getConnectionStatus(){return this.isConnected}}const Xn=new yw,Mw=["data-mode"],Sw={class:"alarm-header"},bw={class:"header-top"},Ew={class:"view-mode-toggle"},Tw={class:"alarm-stats"},Aw=["data-mode"],ww=["data-mode","title"],Rw=["data-category-id"],Cw=["onClick"],Pw={class:"category-info"},Lw={class:"category-name"},Dw={class:"category-count"},Iw={key:0,class:"alarms-list"},Nw=["data-alarm-id","onClick"],Uw={class:"alarm-content"},Ow={class:"alarm-title-row"},Fw={class:"alarm-name"},Bw={class:"alarm-details"},kw={class:"alarm-code"},Hw={class:"alarm-location"},zw={class:"alarm-status"},Vw={class:"alarm-time"},Gw={key:0,class:"no-alarms"},Ww={key:1,class:"flat-alarm-list"},Xw=["data-alarm-id","onClick"],jw={class:"alarm-content"},qw={class:"alarm-title-row"},$w={class:"alarm-name"},Yw={class:"alarm-details"},Kw={class:"alarm-code"},Zw={class:"alarm-location"},Jw={class:"alarm-status"},Qw={class:"alarm-time"},eR={key:0,class:"no-alarms"},tR={__name:"AlarmList",props:{focusedAlarm:{type:Object,default:null},clearFocusTrigger:{type:Boolean,default:!1}},emits:["focus-alarm"],setup(n,{expose:e,emit:t}){const i=[{id:"fire",name:"火警",icon:"🔥",color:"#ef4444"},{id:"linkage",name:"联动",icon:"🔗",color:"#3b82f6"},{id:"feedback",name:"反馈",icon:"🔄",color:"#8b5cf6"},{id:"alarm",name:"报警",icon:"🚨",color:"#f59e0b"},{id:"supervision",name:"监管",icon:"👁️",color:"#10b981"},{id:"fault",name:"故障",icon:"⚡",color:"#6366f1"},{id:"shield",name:"屏蔽",icon:"🛡️",color:"#64748b"}],s=bs([]),r=bs({}),o=Le(!0),a=Le("flat"),l=Le("realtime"),c=Le(null),u=Le(null),d=Le(null),f=bs({}),h=bs({}),g=Wt(()=>s.filter(se=>l.value==="realtime"?se.is_deleted===!1||se.is_deleted===void 0:se.is_deleted===!0));Wt(()=>g.value.length);const _=Wt(()=>g.value.length),p=Wt(()=>[...g.value].sort((se,B)=>{if(l.value==="history")return B.timestamp-se.timestamp;const Y=se.category==="火警"||se.category==="报警",he=B.category==="火警"||B.category==="报警";return Y&&!he?-1:!Y&&he?1:B.timestamp-se.timestamp})),m=async()=>{for(const se of s)try{const B=await W(se.code);h[se.id]=B,typeof window<"u"&&(window.$alarmLocationCache||(window.$alarmLocationCache={}),window.$alarmLocationCache[se.id]=B)}catch(B){console.error(`初始化告警 ${se.id} 位置描述失败:`,B),h[se.id]=se.code,typeof window<"u"&&(window.$alarmLocationCache||(window.$alarmLocationCache={}),window.$alarmLocationCache[se.id]=se.code)}},S=se=>h[se]||"加载中...",y=()=>{l.value=l.value==="realtime"?"history":"realtime",H("dataModeChanged",l.value)},T=se=>{r[se]?(r[se]=!1,u.value=null):(Object.keys(r).forEach(B=>{r[B]=!1}),r[se]=!0,u.value=se,Un(()=>{O(se)}))},O=se=>{const B=document.querySelector(`[data-category-id="${se}"]`);if(!B)return;const Y=d.value;if(!Y)return;const he=Y.getBoundingClientRect(),_e=B.getBoundingClientRect(),Ie=Y.scrollTop,Ne=_e.top-he.top+Ie;Y.scrollTo({top:Ne,behavior:"smooth"})},D={火警:"fire",报警:"alarm",联动:"linkage",反馈:"feedback",监管:"supervision",故障:"fault",屏蔽:"shield"},w=se=>g.value.filter(B=>D[B.category]===se).sort((B,Y)=>{if(l.value==="history")return Y.timestamp-B.timestamp;const he={critical:0,high:1,medium:2,low:3};return he[B.level]!==he[Y.level]?he[B.level]-he[Y.level]:Y.timestamp-B.timestamp}),G=se=>{if(typeof se=="string"&&/[\u4e00-\u9fa5]/.test(se))return se;const B=i.find(Y=>Y.id===se);return B?B.name:se},E=se=>{if(se==="火警"||se==="报警")return"#ef4444";if(se==="故障")return"#f59e0b";if(se==="监管")return"#10b981";if(se==="屏蔽")return"#64748b";if(se==="反馈")return"#8b5cf6";if(se==="联动")return"#3b82f6";const B=i.find(Y=>Y.id===se);return B?B.color:"#64748b"},M=se=>typeof se=="string"?se:new Date(se).toLocaleString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),W=async se=>{try{if(f[se])return f[se];const B=se.match(/(\d+-\d+-\d+)$/);if(!B)return f[se]=se,se;const Y=B[1];let he=null;if(typeof window<"u"&&window.$app){const Ie=window.$app.buildingInfoCache;if(Ie){for(const[Ne,ke]of Ie.entries())if(ke.code===Y){he=ke;break}}}if(!he){const Ie=await Lr({limit:3e3});he=(Ie.data||Ie).find(ke=>ke.code===Y)}const _e=he?he.description:se;return f[se]=_e,_e}catch(B){return console.error("获取构建描述失败:",B),f[se]=se,se}},$=async se=>{const B=se.code.match(/(\d+-\d+-\d+)$/);if(!B)return;const Y=B[1];try{let he=null;if(typeof window<"u"&&window.$app){const _e=window.$app.buildingInfoCache;if(_e){for(const[Ie,Ne]of _e.entries())if(Ne.code===Y){he=Ne;break}}}if(!he){const _e=await Lr({limit:3e3});he=(_e.data||_e).find(Ne=>Ne.code===Y)}he?(c.value=se,H("focus-alarm",{building:{...he,alarmId:se.id},source:"alarm-list"})):(c.value=se,H("focus-alarm",{building:null,source:"alarm-list"})),Un(()=>{I(se.id)})}catch(he){console.error("告警聚焦失败:",he),c.value=se,H("focus-alarm",{building:null,source:"alarm-list"}),Un(()=>{I(se.id)})}},L=se=>{if(se&&se.alarmId){const B=s.find(Y=>Y.id===se.alarmId);B&&(c.value=B,Un(()=>{I(B.id)}))}else c.value=null},I=se=>{const B=document.querySelector(`[data-alarm-id="${se}"]`);if(!B)return;let Y=null;if(a.value==="flat")Y=document.querySelector(".flat-alarm-list");else{const Ne=B.closest(".alarms-list");Ne&&(Y=Ne)}if(!Y)return;const he=Y.getBoundingClientRect(),_e=B.getBoundingClientRect(),Ie=Y.scrollTop;if(_e.top<he.top||_e.bottom>he.bottom){const Ne=_e.top-he.top+Ie;Y.scrollTo({top:Ne-20,behavior:"smooth"})}};e({clearAlarmFocus:()=>{c.value=null,H("focus-alarm",{building:null,source:"alarm-list"})},focusOnAlarm:$,realAlarms:s,updateFocusedBuilding:L,scrollToFocusedAlarm:I,dataMode:l});const X=se=>c.value&&c.value.id===se.id,q=n,H=t,pe=se=>{let B=[],Y=!1;se.alarms?(B=se.alarms,Y=!0):se.alarm?(B=[se.alarm],Y=!1):(B=se,Y=!0);let he=!1;l.value==="history"&&(B.forEach(_e=>{(_e.is_deleted===!1||_e.is_deleted===void 0)&&(he=!0)}),he&&(console.log("📡 历史模式下检测到新的活跃告警，自动切换到实时模式和平铺模式"),l.value="realtime",a.value="flat")),Y&&(s.length=0),B.forEach(_e=>{const Ie=s.findIndex(Ne=>Ne.id===_e.id);Ie===-1?s.push({id:_e.id,category:_e.alarmType,description:_e.description||"设备告警",level:ge(_e.alarmType),code:_e.deviceCode,status:_e.status||"active",timestamp:new Date(_e.timestamp).getTime(),is_deleted:_e.is_deleted||!1}):s[Ie]={...s[Ie],is_deleted:_e.is_deleted||!1}}),m()};function ge(se){return se==="火警"||se==="报警"?"critical":se==="故障"||se==="启动"||se==="反馈"?"high":se==="监管"||se==="屏蔽"?"medium":"low"}const Te=({connected:se})=>{o.value=se,se&&Xn.requestAlarmList()},Be=({deletedAlarmIds:se})=>{if(!se||!Array.isArray(se)){console.warn("无效的删除告警ID列表:",se);return}console.log("收到删除通知，删除告警ID:",se);for(let B=0;B<s.length;B++)se.includes(s[B].id)&&(s[B].is_deleted=!0);console.log("删除操作完成，当前告警总数:",s.length),console.log("实时模式告警数量:",s.filter(B=>B.is_deleted===!1||B.is_deleted===void 0).length),console.log("历史模式告警数量:",s.filter(B=>B.is_deleted===!0).length)};return Rs(async()=>{i.forEach(se=>{r[se.id]=!1}),Xn.on("alarms_update",pe),Xn.on("new_alarm",pe),Xn.on("records_deleted",Be),Xn.on("connection_change",Te),Xn.getConnectionStatus()&&Xn.requestAlarmList()}),Cs(()=>{Xn.off("alarms_update",pe),Xn.off("new_alarm",pe),Xn.off("records_deleted",Be),Xn.off("connection_change",Te)}),Bn(()=>q.clearFocusTrigger,se=>{se&&(c.value=null,H("focus-alarm",null))}),(se,B)=>(et(),at("div",{class:"alarm-list-container","data-mode":l.value},[de("div",Sw,[de("div",bw,[B[4]||(B[4]=uo('<div class="alarm-title" data-v-8ad3b7d0><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="title-icon" data-v-8ad3b7d0><path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" data-v-8ad3b7d0></path><path d="M12 12l9-5" data-v-8ad3b7d0></path><path d="M12 12v10" data-v-8ad3b7d0></path><path d="M12 12L3 7" data-v-8ad3b7d0></path><circle cx="12" cy="12" r="2" fill="currentColor" data-v-8ad3b7d0></circle><path d="M12 7v5" stroke-width="2" data-v-8ad3b7d0></path></svg> 实时告警监控 </div>',1)),de("div",Ew,[de("button",{class:yt({active:a.value==="flat"}),onClick:B[0]||(B[0]=Y=>a.value="flat"),title:"平铺展示"},[...B[2]||(B[2]=[uo('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" data-v-8ad3b7d0><line x1="8" y1="6" x2="21" y2="6" data-v-8ad3b7d0></line><line x1="8" y1="12" x2="21" y2="12" data-v-8ad3b7d0></line><line x1="8" y1="18" x2="21" y2="18" data-v-8ad3b7d0></line><line x1="3" y1="6" x2="3.01" y2="6" data-v-8ad3b7d0></line><line x1="3" y1="12" x2="3.01" y2="12" data-v-8ad3b7d0></line><line x1="3" y1="18" x2="3.01" y2="18" data-v-8ad3b7d0></line></svg>',1)])],2),de("button",{class:yt({active:a.value==="categorized"}),onClick:B[1]||(B[1]=Y=>a.value="categorized"),title:"按分类展示"},[...B[3]||(B[3]=[uo('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" data-v-8ad3b7d0><rect x="3" y="3" width="7" height="7" data-v-8ad3b7d0></rect><rect x="14" y="3" width="7" height="7" data-v-8ad3b7d0></rect><rect x="14" y="14" width="7" height="7" data-v-8ad3b7d0></rect><rect x="3" y="14" width="7" height="7" data-v-8ad3b7d0></rect></svg>',1)])],2)])]),de("div",Tw,[de("span",{class:"active-count","data-mode":l.value},ht(l.value==="realtime"?"实时":"历史")+": "+ht(_.value),9,Aw),de("button",{class:yt(["data-mode-toggle",{active:l.value==="realtime"||l.value==="history"}]),onClick:y,"data-mode":l.value,title:l.value==="realtime"?"切换到历史数据":"切换到实时数据"},[de("span",null,ht(l.value==="realtime"?"实时":"历史"),1)],10,ww)])]),a.value==="categorized"?(et(),at("div",{key:0,class:"alarm-categories",ref_key:"alarmCategoriesRef",ref:d},[(et(),at(Yt,null,es(i,Y=>de("div",{key:Y.id,class:yt(["category-item",{expanded:r[Y.id]}]),"data-category-id":Y.id},[de("div",{class:yt(["category-header",{"sticky-category":u.value===Y.id}]),onClick:he=>T(Y.id),style:Li({"border-left-color":Y.color})},[de("div",Pw,[de("div",{class:"category-icon",style:Li({backgroundColor:Y.color})},ht(Y.icon),5),de("span",Lw,ht(Y.name),1),de("span",Dw,ht(w(Y.id).length),1)]),(et(),at("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",class:yt([{rotated:r[Y.id]},"expand-icon"])},[...B[5]||(B[5]=[de("path",{d:"m6 9 6 6 6-6"},null,-1)])],2))],14,Cw),r[Y.id]?(et(),at("div",Iw,[(et(!0),at(Yt,null,es(w(Y.id),he=>(et(),at("div",{key:he.id,"data-alarm-id":he.id,class:yt(["alarm-item",{critical:he.level==="critical",high:he.level==="high",medium:he.level==="medium",low:he.level==="low",focused:X(he)}]),onClick:_e=>$(he)},[de("div",Uw,[de("div",Ow,[de("span",Fw,ht(he.description),1)]),de("div",Bw,[de("span",kw,ht(he.code),1),de("span",Hw,ht(S(he.id)),1)])]),de("div",zw,[de("span",Vw,ht(M(he.timestamp)),1),B[6]||(B[6]=de("div",{class:"status-container"},[de("div",{class:"status-indicator"}),de("span",{class:"status-text"},"活跃")],-1))])],10,Nw))),128)),w(Y.id).length===0?(et(),at("div",Gw," 暂无告警 ")):kt("",!0)])):kt("",!0)],10,Rw)),64))],512)):kt("",!0),a.value==="flat"?(et(),at("div",Ww,[(et(!0),at(Yt,null,es(p.value,Y=>(et(),at("div",{key:Y.id,"data-alarm-id":Y.id,class:yt(["alarm-item",{critical:Y.level==="critical",high:Y.level==="high",medium:Y.level==="medium",low:Y.level==="low",focused:X(Y)}]),onClick:he=>$(Y)},[de("div",jw,[de("div",qw,[de("span",{class:"alarm-category-badge",style:Li({backgroundColor:E(Y.category)})},ht(G(Y.category)),5),de("span",$w,ht(Y.description),1)]),de("div",Yw,[de("span",Kw,ht(Y.code),1),de("span",Zw,ht(S(Y.id)),1)])]),de("div",Jw,[de("span",Qw,ht(M(Y.timestamp)),1),B[7]||(B[7]=de("div",{class:"status-container"},[de("div",{class:"status-indicator"}),de("span",{class:"status-text"},"活跃")],-1))])],10,Xw))),128)),s.length===0?(et(),at("div",eR," 暂无告警 ")):kt("",!0)])):kt("",!0),de("div",{class:yt(["connection-status",{connected:o.value}])},[B[8]||(B[8]=de("div",{class:"status-indicator"},null,-1)),de("span",null,ht(o.value?"已连接":"连接中..."),1)],2)],8,Mw))}},nR=Os(tR,[["__scopeId","data-v-8ad3b7d0"]]),iR={class:"alarm-label-header"},sR={class:"alarm-device"},rR={class:"alarm-description"},oR={class:"alarm-location"},vn=5,aR={__name:"AlarmLabel",props:{alarm:{type:Object,required:!0,validator:n=>n&&n.code&&n.level},scene:{type:Object,required:!0},camera:{type:Object,required:!0},renderer:{type:Object,required:!0}},emits:["alarm-click","return-click"],setup(n,{emit:e}){const t=n,i=Le(!1),s=Le({x:0,y:0}),r=Le(!1),o=Le({}),a=L=>L&&{火警:"fire",报警:"alarm",故障:"fault",监管:"supervision",屏蔽:"mask",反馈:"feedback",联动:"linkage"}[L]||"default",l=Wt(()=>({left:`${s.value.x}px`,top:`${s.value.y}px`,transform:"translate(-50%, -50%)"}));let c=null;const u=async L=>{try{const I=L.match(/(\d+-\d+-\d+)$/);if(!I)return null;const k=I[1];if(typeof window<"u"&&window.$app){const pe=window.$app.buildingInfoCache;if(pe){for(const[ge,Te]of pe.entries())if(Te.code===k)return ge}}const X=await Lr({limit:3e3}),H=(X.data||X).find(pe=>pe.code===k);return H?H.element_id:null}catch(I){return console.error("获取element_id失败:",I),null}},d=async()=>{if(!t.scene||!t.alarm.code)return null;const L=await u(t.alarm.code);if(!L)return null;if(c&&c.userData){const X=c.userData.ElementID||c.userData.elementId||c.userData.element_id||c.userData.id;if(X&&X.toString()===L.toString())return c}const I=(X,q)=>{q(X),X.children&&X.children.forEach(H=>I(H,q))};let k=null;return I(t.scene,X=>{if(X.userData){const q=X.userData.ElementID||X.userData.elementId||X.userData.element_id||X.userData.id;q&&q.toString()===L.toString()&&(k=X)}}),c=k,k};let f=null,h=0;const g=Le({width:120,height:60}),_=()=>(window.alarmLabelManager||(window.alarmLabelManager={occupiedPositions:new Map,updateInterval:null,clearPositions:()=>{window.alarmLabelManager.occupiedPositions.clear()}},window.alarmLabelManager.updateInterval=setInterval(()=>{window.alarmLabelManager.occupiedPositions.clear()},16)),window.alarmLabelManager),p=(L,I)=>{const X=_().occupiedPositions;for(const[q,H]of X)if(q!==t.alarm.code){const pe=Math.abs(H.x-L),ge=Math.abs(H.y-I);if(pe<g.value.width+vn&&ge<g.value.height+vn)return!0}return!1},m=(L,I)=>{let k=L,X=I;const q=[{x:0,y:-g.value.height-vn},{x:g.value.width+vn,y:0},{x:-g.value.width-vn,y:0},{x:0,y:g.value.height+vn},{x:g.value.width+vn,y:-g.value.height-vn},{x:-g.value.width-vn,y:-g.value.height-vn},{x:g.value.width+vn,y:g.value.height+vn},{x:-g.value.width-vn,y:g.value.height+vn}];if(!p(k,X))return{x:k,y:X};for(const H of q){const pe=k+H.x,ge=X+H.y,Te=t.renderer.domElement;if(pe>=0&&pe<=Te.clientWidth&&ge>=0&&ge<=Te.clientHeight&&!p(pe,ge))return{x:pe,y:ge}}return{x:k,y:X}},S=async()=>{const L=await d();if(!L||!t.camera||!t.renderer){i.value=!1;return}f||(f=new nn().setFromObject(L),h=f.max.y-f.min.y);const I=f.getCenter(new U),k=new U(0,h*1.5,0),q=I.clone().add(k).clone().project(t.camera),H=t.renderer.domElement,pe=(q.x*.5+.5)*H.clientWidth,ge=(-q.y*.5+.5)*H.clientHeight;if(pe>=0&&pe<=H.clientWidth&&ge>=0&&ge<=H.clientHeight){const Te=m(pe,ge);_().occupiedPositions.set(t.alarm.code,Te),s.value=Te,i.value=!0;const se=I.distanceTo(t.camera.position);r.value=se<50}else i.value=!1};let y=null,T=null;const O=async()=>{const L=await d();if(L){const I=L.position.clone();(!T||!I.equals(T))&&(f=null,h=0,T=I.clone())}await S(),y=requestAnimationFrame(O)};Bn(()=>t.camera,()=>{t.camera&&S()},{immediate:!0}),Rs(()=>{t.camera&&t.renderer&&t.scene&&O()}),Cs(()=>{y&&cancelAnimationFrame(y),_().occupiedPositions.delete(t.alarm.elementid),c=null,f=null,h=0,T=null});const D=async L=>{const I=L;if(o.value[I])return o.value[I];try{const k=await Lr({limit:1e5}),q=(k.data||k).find(H=>H.code===I);return q&&q.description?(o.value[I]=q.description,q.description):(o.value[I]=I,I)}catch{return o.value[I]=I,I}},w=Le(""),G=Le(!1),E=async()=>{if(G.value=!1,t.alarm.location){w.value=t.alarm.location,G.value=!0;return}if(typeof window<"u"&&window.$alarmLocationCache){const L=window.$alarmLocationCache[t.alarm.id];if(L){w.value=L,G.value=!0;return}}try{const L=await D(t.alarm.code);w.value=L,G.value=!0,typeof window<"u"&&(window.$alarmLocationCache||(window.$alarmLocationCache={}),window.$alarmLocationCache[t.alarm.id]=L)}catch{w.value=t.alarm.code,G.value=!0,typeof window<"u"&&(window.$alarmLocationCache||(window.$alarmLocationCache={}),window.$alarmLocationCache[t.alarm.id]=t.alarm.code)}};Rs(()=>{E()}),Bn(()=>t.alarm,()=>{E()},{deep:!0});const M=e,W=()=>{M("alarm-click",t.alarm),console.log("告警标签被点击:",t.alarm)},$=L=>{L.stopPropagation(),M("return-click",t.alarm),console.log("返回标记被点击，返回当前楼层:",t.alarm)};return Bn(()=>t.alarm,()=>{S()},{deep:!0}),(L,I)=>i.value&&G.value?(et(),at("div",{key:0,class:yt(["alarm-label",[`alarm-category-${a(n.alarm.category)}`,{"alarm-label-active":r.value}]]),style:Li(l.value)},[r.value?(et(),at("div",{key:0,class:yt(["return-marker",{"return-marker-visible":r.value}]),onClick:$},[...I[0]||(I[0]=[de("div",{class:"triangle"},null,-1)])],2)):kt("",!0),de("div",{class:"alarm-label-content",onClick:W},[de("div",iR,[de("span",{class:yt(["alarm-level-indicator",`category-${a(n.alarm.category)}`])},null,2),de("span",sR,ht(n.alarm.code),1)]),de("div",rR,ht(n.alarm.description),1),de("div",oR,ht(w.value),1)])],6)):kt("",!0)}},lR=Os(aR,[["__scopeId","data-v-53588e9e"]]),cR={class:"device-label-header"},uR={class:"device-name"},dR={class:"device-description"},xn=5,fR={__name:"DeviceLabel",props:{device:{type:Object,required:!0,validator:n=>n&&n.element_id&&n.description&&n.name&&n.code},scene:{type:Object,required:!0},camera:{type:Object,required:!0},renderer:{type:Object,required:!0}},emits:["device-click","return-click"],setup(n,{emit:e}){const t=n,i=Le(!1),s=Le({x:0,y:0}),r=Le(!1),o=Wt(()=>({name:t.device.name,description:t.device.description,code:t.device.code})),a=Wt(()=>({left:`${s.value.x}px`,top:`${s.value.y}px`,transform:"translate(-50%, -50%)"}));let l=null;const c=w=>{if(!t.scene||!w)return null;if(l&&l.userData){const M=l.userData.ElementID||l.userData.elementId||l.userData.element_id||l.userData.id;if(M&&M.toString()===t.device.element_id.toString())return l}const G=(M,W)=>{W(M),M.children&&M.children.forEach($=>G($,W))};let E=null;return G(t.scene,M=>{if(M.userData){const W=M.userData.ElementID||M.userData.elementId||M.userData.element_id||M.userData.id;W&&W.toString()===t.device.element_id.toString()&&(E=M)}}),l=E,E};let u=null,d=0;const f=Le({width:150,height:80}),h=()=>(window.deviceLabelManager||(window.deviceLabelManager={occupiedPositions:new Map,updateInterval:null,clearPositions:()=>{window.deviceLabelManager.occupiedPositions.clear()}},window.deviceLabelManager.updateInterval=setInterval(()=>{window.deviceLabelManager.occupiedPositions.clear()},16)),window.deviceLabelManager),g=(w,G)=>{const M=h().occupiedPositions;for(const[W,$]of M)if(W!==t.device.element_id){const L=Math.abs($.x-w),I=Math.abs($.y-G);if(L<f.value.width+xn&&I<f.value.height+xn)return!0}return!1},_=(w,G)=>{let E=w,M=G;const W=[{x:0,y:-f.value.height-xn},{x:f.value.width+xn,y:0},{x:-f.value.width-xn,y:0},{x:0,y:f.value.height+xn},{x:f.value.width+xn,y:-f.value.height-xn},{x:-f.value.width-xn,y:-f.value.height-xn},{x:f.value.width+xn,y:f.value.height+xn},{x:-f.value.width-xn,y:f.value.height+xn}];if(!g(E,M))return{x:E,y:M};for(const $ of W){const L=E+$.x,I=M+$.y,k=t.renderer.domElement;if(L>=0&&L<=k.clientWidth&&I>=0&&I<=k.clientHeight&&!g(L,I))return{x:L,y:I}}return{x:E,y:M}},p=()=>{const w=c(t.device.element_id);if(!w||!t.camera||!t.renderer){i.value=!1;return}u||(u=new nn().setFromObject(w),d=u.max.y-u.min.y);const G=u.getCenter(new U),E=new U(0,d*1.5,0),W=G.clone().add(E).clone().project(t.camera),$=t.renderer.domElement,L=(W.x*.5+.5)*$.clientWidth,I=(-W.y*.5+.5)*$.clientHeight;if(L>=0&&L<=$.clientWidth&&I>=0&&I<=$.clientHeight){const k=_(L,I);h().occupiedPositions.set(t.device.element_id,k),s.value=k,i.value=!0;const q=G.distanceTo(t.camera.position);r.value=q<50}else i.value=!1};let m=null,S=null;const y=()=>{const w=c(t.device.element_id);if(w){const G=w.position.clone();(!S||!G.equals(S))&&(u=null,d=0,S=G.clone())}p(),m=requestAnimationFrame(y)};Bn(()=>t.camera,()=>{t.camera&&p()},{immediate:!0}),Rs(()=>{t.camera&&t.renderer&&t.scene&&y()}),Cs(()=>{m&&cancelAnimationFrame(m),h().occupiedPositions.delete(t.device.element_id),l=null,u=null,d=0,S=null});const T=e,O=()=>{T("device-click",t.device),console.log("设备标签被点击:",t.device)},D=w=>{w.stopPropagation(),T("return-click",t.device),console.log("返回标记被点击，返回当前楼层:",t.device)};return Bn(()=>t.device,()=>{p()},{deep:!0}),(w,G)=>i.value?(et(),at("div",{key:0,class:yt(["device-label",{"device-label-active":r.value}]),style:Li(a.value)},[r.value?(et(),at("div",{key:0,class:yt(["return-marker",{"return-marker-visible":r.value}]),onClick:D},[...G[0]||(G[0]=[de("div",{class:"triangle"},null,-1)])],2)):kt("",!0),de("div",{class:"device-label-content",onClick:O},[de("div",cR,[G[1]||(G[1]=de("span",{class:"device-icon"},"⚙️",-1)),de("span",uR,ht(o.value.name),1)]),de("div",dR,ht(o.value.description),1)])],6)):kt("",!0)}},hR=Os(fR,[["__scopeId","data-v-d819796d"]]),pR={class:"progress-container"},mR={class:"progress-bar"},gR={class:"progress-text"},_R={__name:"LoadingComponent",props:{isLoading:{type:Boolean,default:!1},loadingProgress:{type:Number,default:0}},setup(n){return(e,t)=>Gh((et(),at("div",{class:yt(["loading-overlay",{"fade-out":!n.isLoading}])},[t[0]||(t[0]=de("p",{class:"slogan-text"},"申新消防-工业消防技术专家",-1)),t[1]||(t[1]=de("div",{class:"logo-container"},[de("img",{src:_p,alt:"Logo",class:"logo"})],-1)),de("div",pR,[de("div",mR,[de("div",{class:"progress-fill",style:Li({width:n.loadingProgress+"%"})},null,4)]),de("span",gR,ht(n.loadingProgress)+"%",1)]),t[2]||(t[2]=de("p",{class:"loading-subtext"},"请稍候，系统正在初始化",-1))],2)),[[U_,n.isLoading]])}},vR=Os(_R,[["__scopeId","data-v-412a48f1"]]),xR={class:"app-container"},yR={class:"app-header"},MR={class:"time-display"},SR={class:"current-time"},bR={class:"current-date"},ER=["title"],TR={class:"fullscreen-icon"},AR={class:"main-content"},wR=300,RR={__name:"App",setup(n){const e=Le(null),t=Le(null),i=Le(null),s=Le(null),r=Le(null),o=Le(!1),a=Le(0),l=Le(0),c=Le({x:0,y:0,z:0}),u=Le({x:0,y:0,z:0}),d=Le(!1),f=Le(!1),h=Le(""),g=Le(""),_=Le(null),p=Le(!1),m=Le(!1),S=Le(null),y=Le(null),T=new nl,O=new Ke,D=new Ke,w=Le([]),G=Le(new Map),E=Le(""),M=Le({}),W=Le(null),$=Le(null),L=Le(null),I=Le(new Map),k=Le(new Map),X=Le(!1),q=Le([]),H=Le([]),pe=A=>{const F=A.match(/(\d+-\d+-\d+)$/);if(!F)return null;const Q=F[1];for(const[le,ue]of k.value.entries())if(ue.code===Q)return ue.floor_id.toString();return null},ge=Wt(()=>{const A=w.value.find(le=>le.id===E.value),F=A?A.floor_id.toString():null;return F?q.value.filter(le=>{if(!(pe(le.alarm.code)===F))return!1;if(!le.alarm.is_deleted||le.alarm.is_deleted===!1)if($.value){const Ce=le.alarm.code.match(/(\d+-\d+-\d+)$/);if(!Ce)return!1;const Mt=Ce[1];return $.value&&$.value.code===Mt}else return!0;else{if(!$.value||L.value==="building")return!1;const Ce=le.alarm.code.match(/(\d+-\d+-\d+)$/);if(!Ce)return!1;const Mt=Ce[1],ft=$.value&&$.value.code===Mt;return ft&&$.value.alarmId?le.alarm.id===$.value.alarmId:ft}}):[]}),Te=Wt(()=>{if(!$.value||L.value==="alarm")return[];if(q.value.some(ue=>{const Se=ue.alarm.code.match(/(\d+-\d+-\d+)$/);if(!Se)return!1;const Ee=Se[1];return $.value&&$.value.code===Ee}))return[];const F=w.value.find(ue=>ue.id===E.value),Q=F?F.floor_id.toString():"all";return Q?H.value.filter(ue=>{const Se=ue.device.floor_id&&ue.device.floor_id.toString()===Q,Ee=$.value&&(ue.device.id===$.value.id||ue.device.element_id===$.value.element_id||ue.device.code===$.value.code);return Se&&Ee}):[]}),Be=[{id:"realistic",name:"真实模式",icon:"🎨"},{id:"hiddenline",name:"隐藏线",icon:"📐"}],se=Le("realistic"),B=Le(!1),Y=Le(!1),he=Le(0),_e=Le(new Set),Ie=Le(new Set),Ne=Le(0),ke=Le(0),K=Le(0),C=Le(0),P=Le(0),Z=Le(!1),re=()=>{const A=Ne.value>0?ke.value/Ne.value*70:0,F=K.value>0?C.value/K.value*30:0,Q=Math.round(A+F);Q>P.value&&(P.value=Q,console.log(`📊 总进度更新: ${P.value}% (模型: ${ke.value}/${Ne.value}, 视觉样式: ${C.value}/${K.value})`))},ce=A=>{if(!A.userData.preloadedMaterials){A.userData.preloadedMaterials={};const F=new li({color:16777215,transparent:!0,opacity:.9,wireframe:!1});F.isPreloaded=!0,A.userData.preloadedMaterials.hiddenLine=F}return A.userData.preloadedMaterials},b=async A=>{if(!A)return;const F=A.userData.floorId||A.uuid||`model_${Date.now()}`;_e.value.add(F),_e.value.size>0&&(Y.value=!0,he.value=0);try{const Q=ce(A);he.value=25;let le=0,ue=0;A.traverse(Ce=>{Ce.isMesh&&le++});const Se=[];A.traverse(Ce=>{Ce.isMesh&&Se.push(Ce)});const Ee=5;for(let Ce=0;Ce<Se.length;Ce+=Ee){const Mt=Se.slice(Ce,Ce+Ee);await new Promise(ut=>requestAnimationFrame(ut)),await new Promise(ut=>setTimeout(ut,16)),Mt.forEach(ut=>{try{ut.userData.preloadedMaterials||(ut.userData.preloadedMaterials={}),ut.userData.preloadedMaterials.hiddenLine=Q.hiddenLine;const En=new sc(ut.geometry,10);En.isPreloaded=!0,ut.userData.preloadedGeometries||(ut.userData.preloadedGeometries={}),ut.userData.preloadedGeometries.hiddenLine=En}catch(En){console.warn("⚠️ 预加载网格几何体失败:",En)}}),ue+=Mt.length;const ft=Math.min(25+Math.round(ue/Se.length*75),99);ft>he.value&&(he.value=ft)}}catch(Q){console.error("❌ 预加载隐藏线样式失败:",Q)}finally{Ie.value.add(F),_e.value.delete(F),C.value++,re(),console.log(`✅ 模型 ${F} 视觉样式预加载完成 (${Ie.value.size}/${Ie.value.size+_e.value.size})`),_e.value.size===0&&(he.value=100,console.log("🎉 所有视觉样式预加载完成！"),await new Promise(Q=>setTimeout(Q,50)),Y.value=!1,setTimeout(()=>{he.value=0,Ie.value.clear()},200))}},x=async A=>{var Q;B.value=!0;const F=document.querySelector(".style-loading-text");if(F){const le=((Q=Be.find(ue=>ue.id===A))==null?void 0:Q.name)||"视觉样式";F.textContent=`应用${le}中...`}await new Promise(le=>setTimeout(le,0)),await new Promise(le=>{requestAnimationFrame(()=>{se.value=A,ie(A),le()})}),await new Promise(le=>setTimeout(le,300)),B.value=!1},N=()=>{const A=se.value==="realistic"?"hiddenline":"realistic";x(A)},V=()=>{p.value=!p.value},z=()=>{X.value=!X.value,J()},J=()=>{Object.values(M.value).forEach(A=>{A&&A.traverse(F=>{F.isMesh&&F.userData&&fe(F)&&(F.visible=!0)})}),X.value||Object.values(M.value).forEach(A=>{A&&A.traverse(F=>{if(F.isMesh&&F.userData&&fe(F)){const le=F.userData.ElementID||F.userData.elementId||F.userData.element_id||F.userData.id;if(le){const ue=Xe(le);if(ue&&ue.floor_id){const Se=w.value.find(Ee=>Ee.floor_id===ue.floor_id);Se&&Se.id===E.value&&(F.visible=!1)}else F.visible=!1}else F.visible=!1}})})},fe=A=>{if(!A.userData)return!1;const F=A.userData.ElementID||A.userData.elementId||A.userData.element_id||A.userData.id;if(F){const Se=Xe(F);if(Se&&Se.category_id===17)return!0}const Q=A.userData.Category||A.userData.category||A.userData.类别;if(Q&&(Q.includes("天花板")||Q.includes("Ceiling")||Q.includes("ceiling")))return!0;const le=A.userData.Name||A.userData.name||A.name;if(le&&(le.includes("天花板")||le.includes("Ceiling")||le.includes("ceiling")))return!0;const ue=A.userData.Family||A.userData.family||A.userData.族;return!!(ue&&(ue.includes("天花板")||ue.includes("Ceiling")||ue.includes("ceiling")))},ie=A=>{performance.now();const F=[],Q=new Set;Object.values(M.value).forEach(le=>{if(!le)return;const ue=Object.keys(M.value).find(Ee=>M.value[Ee]===le),Se=w.value.find(Ee=>Ee.id===ue);!Se||!Se.is_visual_style||le.traverse(Ee=>{if(Ee.isMesh&&!Q.has(Ee)){if(Q.add(Ee),Ee.userData.currentStyle===A&&Ee.userData.cachedMaterial)return;F.push(Ee)}})}),F.forEach(le=>{({hiddenline:It}[A]||pt)(le),le.userData.currentStyle=A}),F.length>0?console.log(`✅ 视觉样式瞬间切换完成，处理网格数: ${F.length}`):console.log("ℹ️ 没有需要处理的网格，样式已是最新状态")},xe=async(A,F="building")=>{if(ne(),o.value)return;oe(A,F);const Q=I.value.get(A.element_id);if(Q&&Q!==E.value){const le=Oe(A.element_id);if(!le)return;const ue=new nn().setFromObject(le),Se=ue.getCenter(new U),Ee=ue.getSize(new U),Mt=Math.max(Ee.x,Ee.y,Ee.z)*2.5;await bt(Q,!0),ee(Se,Mt,{duration:1500,angle:Math.PI/3,offset:new U(0,Ee.y*.3,0)}),De(le)}else{const le=Oe(A.element_id);if(le){const ue=new nn().setFromObject(le),Se=ue.getCenter(new U),Ee=ue.getSize(new U),Mt=Math.max(Ee.x,Ee.y,Ee.z)*2.5;ee(Se,Mt,{duration:1200,angle:Math.PI/3,offset:new U(0,Ee.y*.2,0)}),De(le)}}},Me=A=>{if(v.value.isAnimating)return;const F=A.code.match(/(\d+-\d+-\d+)$/);if(!F)return;const Q=F[1],le=k.value;let ue=null;for(const[Se,Ee]of le)if(Ee.code===Q){ue=Ee;break}we(ue?{building:{...ue,alarmId:A.id},source:"alarm-label"}:null)},ve=A=>{v.value.isAnimating||(qt(),Ae(),ne(),te(),y.value&&typeof y.value.clearAlarmFocus=="function"&&y.value.clearAlarmFocus(),S.value&&typeof S.value.clearBuildingFocus=="function"&&S.value.clearBuildingFocus())},ye=A=>{if(v.value.isAnimating)return;const F=k.value;let Q=null;for(const[le,ue]of F)if(ue.id===A.id||ue.element_id===A.element_id||ue.code===A.code){Q=ue;break}Q&&xe(Q)},Ue=A=>{v.value.isAnimating||(qt(),Ae(),ne(),te(),y.value&&typeof y.value.clearAlarmFocus=="function"&&y.value.clearAlarmFocus(),S.value&&typeof S.value.clearBuildingFocus=="function"&&S.value.clearBuildingFocus())},we=A=>{let F=null;A&&typeof A=="object"&&"building"in A?(F=A.building,A.source):F=A,F&&xe(F,"alarm")},Pe=A=>{ze()},He=Le(null),$e=async()=>{if(He.value)return He.value;try{const{getBuildingCategories:A}=await ti(async()=>{const{getBuildingCategories:Q}=await Promise.resolve().then(()=>ii);return{getBuildingCategories:Q}},void 0),F=await A();return He.value=F,F}catch{return null}},ct=async()=>{try{const F=await(await ti(()=>Promise.resolve().then(()=>ii),void 0)).default.floors.getFloors();let Q=[];F===void 0?(console.log("🔄 接收到304响应，使用缓存数据"),G.value.size>0?(Q=Array.from(G.value.values()),console.log("📊 从缓存获取楼层数据:",Q)):(console.warn("⚠️ 缓存为空，无法获取楼层数据"),Q=[])):Array.isArray(F)?Q=F:F&&F.data&&(Q=F.data),console.log("📊 从数据库获取的楼层数据:",Q);const le=Q.filter(ue=>ue.model_file&&ue.model_file.trim()!=="").map(ue=>({id:ue.id.toString(),name:ue.display_name||ue.name,icon:ue.icon||"🏢",file:ue.model_file,floor_id:ue.id,building_number_id:ue.building_number_id,level:ue.level||null,area:ue.area||null,is_visual_style:ue.is_visual_style||!1,is_floor_hide:ue.is_floor_hide||!1}));return console.log("✅ 格式化后的楼层数据:",le),w.value=le,Q.forEach(ue=>{G.value.set(ue.id,ue)}),w.value}catch(A){return console.error("❌ 加载楼层数据失败:",A),w.value=[],w.value}},Ge=async()=>{try{await ct(),console.log("📊 预加载楼层映射，当前楼层数量:",w.value.length);const{getBuildings:A}=await ti(async()=>{const{getBuildings:le}=await Promise.resolve().then(()=>ii);return{getBuildings:le}},void 0),F=await A({limit:1e5}),Q=F.data||F;console.log("📊 获取到的构建数据数量:",Q.length),Q.forEach(le=>{if(le.element_id&&le.floor_id){const ue=w.value.find(Se=>Se.floor_id===le.floor_id);ue&&I.value.set(le.element_id,ue.id)}le.element_id&&k.value.set(le.element_id.toString(),le)}),console.log("✅ 楼层映射缓存大小:",I.value.size),console.log("✅ 构建信息缓存大小:",k.value.size),await $e()}catch(A){console.error("❌ 预加载楼层映射失败:",A)}},Xe=A=>{if(!A)return null;const F=k.value.get(A.toString());return F||null},Oe=A=>{if(!A)return null;for(const F of Object.values(M.value)){if(!F)continue;let Q=null;if(F.traverse(le=>{if(le.userData){const ue=le.userData.ElementID||le.userData.element_id||le.userData.elementId||le.userData.id;ue&&ue.toString()===A.toString()&&(Q=le)}}),Q)return Q}return null},v=Le({isAnimating:!1,startTime:0,duration:1200,startPosition:new U,targetPosition:new U,startTarget:new U,targetTarget:new U,easing:A=>A<.5?4*A*A*A:1-Math.pow(-2*A+2,3)/2}),ee=(A,F=10,Q={})=>{if(!i.value||!r.value)return;const{duration:le=1200,angle:ue=Math.PI/4,offset:Se=new U(0,0,0)}=Q,Ee=new U(A.x+F*Math.sin(ue)+Se.x,A.y+F*Math.sin(ue)+Se.y,A.z+F*Math.cos(ue)+Se.z);v.value.isAnimating&&(v.value.isAnimating=!1),r.value.enabled=!1,v.value={isAnimating:!0,startTime:performance.now(),duration:le,startPosition:i.value.position.clone(),targetPosition:Ee,startTarget:r.value.target.clone(),targetTarget:A.clone(),easing:Ce=>Ce<.5?8*Ce*Ce*Ce*Ce:1-Math.pow(-2*Ce+2,4)/2},me()},me=()=>{if(!v.value.isAnimating)return;const F=performance.now()-v.value.startTime,Q=Math.min(F/v.value.duration,1),le=v.value.easing(Q);i.value.position.lerpVectors(v.value.startPosition,v.value.targetPosition,le),r.value.target.lerpVectors(v.value.startTarget,v.value.targetTarget,le),r.value.update(),be(),Q<1?requestAnimationFrame(me):(v.value.isAnimating=!1,i.value.position.copy(v.value.targetPosition),r.value.target.copy(v.value.targetTarget),r.value.update(),be(),r.value.enabled=!0)},be=()=>{i.value&&(c.value={x:i.value.position.x,y:i.value.position.y,z:i.value.position.z},r.value&&(u.value={x:r.value.target.x,y:r.value.target.y,z:r.value.target.z}))},De=A=>{Ae(),Br(A,!0)},lt=A=>{if(!A.userData.selectionLines){if(A.isMesh&&A.geometry)it(A),A.userData.selectionLines=[A.userData.selectionLine];else if(A.isObject3D){const F=[];A.traverse(Q=>{Q.isMesh&&Q.geometry&&(it(Q),Q.userData.selectionLine&&F.push(Q.userData.selectionLine))}),F.length>0&&(A.userData.selectionLines=F)}}},it=A=>{try{const F=new sc(A.geometry),Q=new ba(F,new ho({color:65280,linewidth:2}));A.add(Q),A.userData.selectionLine=Q}catch{}},St=A=>{const F=A.material,Q=new li({color:16753920,transparent:!0,opacity:.3,side:jn});A.material=Q,A.userData.originalHighlightMaterial=F},Ut=A=>{const F=[];A.traverse(Q=>{Q.isMesh&&(F.push(Q),St(Q))}),A.userData.highlightedMeshes=F},pt=A=>{A.userData.originalMaterial&&(A.material=A.userData.originalMaterial),A.userData.outlineMesh&&(A.userData.outlineMesh.visible=!1,A.userData.outlineMeshLastUsed=Date.now()),A.userData.originalMaterial&&(A.userData.originalMaterialLastUsed=Date.now())},It=A=>{var F,Q;if(!(A.userData.currentStyle==="hiddenline"&&A.material===A.userData.hiddenLineMaterial)){if(A.userData.originalMaterial||(A.userData.originalMaterial=A.material),(F=A.userData.preloadedMaterials)!=null&&F.hiddenLine?A.userData.hiddenLineMaterial=A.userData.preloadedMaterials.hiddenLine:A.userData.hiddenLineMaterial||(A.userData.hiddenLineMaterial=new li({color:16777215,transparent:!0,opacity:.9,wireframe:!1})),(Q=A.userData.preloadedGeometries)!=null&&Q.hiddenLine){if(!A.userData.outlineMesh){const le=new ho({color:0,linewidth:.1,transparent:!0,opacity:.6});A.userData.outlineMesh=new ba(A.userData.preloadedGeometries.hiddenLine,le),A.userData.originalGeometryUUID=A.geometry.uuid,A.userData.outlineMesh.visible=!1,A.add(A.userData.outlineMesh)}}else if(!A.userData.outlineMesh){const le=new sc(A.geometry,1),ue=new ho({color:0,linewidth:.1,transparent:!0,opacity:.6});A.userData.outlineMesh=new ba(le,ue),A.userData.originalGeometryUUID=A.geometry.uuid,A.userData.outlineMesh.visible=!1,A.add(A.userData.outlineMesh)}A.userData.outlineMesh.visible=!0,A.userData.wireframe&&(A.userData.wireframe.visible=!1),A.material=A.userData.hiddenLineMaterial,A.userData.hiddenLineMaterialLastUsed=Date.now(),A.userData.outlineMeshLastUsed=Date.now()}},Pt=()=>{t.value=ar(new Db),t.value.background=new qe(790554),i.value=ar(new hn(75,window.innerWidth/window.innerHeight,.01,5e3)),i.value.position.set(265,36,-77),s.value=ar(new Lb({canvas:e.value,antialias:!0,powerPreference:"high-performance",logarithmicDepthBuffer:!0,precision:"highp"})),s.value.setSize(window.innerWidth,window.innerHeight),s.value.physicallyCorrectLights=!1,s.value.outputColorSpace=Gt,s.value.toneMapping=Mp,s.value.toneMappingExposure=1.2,s.value.shadowMap.enabled=!0,s.value.shadowMap.type=xp,s.value.sortObjects=!0,s.value.depthFunc=yo,r.value=ar(new QE(i.value,s.value.domElement)),r.value.enableDamping=!1,r.value.dampingFactor=.05,r.value.enableRotate=!0,r.value.enableZoom=!0,r.value.enablePan=!0,r.value.rotateSpeed=1,r.value.zoomSpeed=1,r.value.panSpeed=1,r.value.minPolarAngle=0,r.value.maxPolarAngle=Math.PI,r.value.minDistance=.1,r.value.maxDistance=300;const A=new oE(16777215,.8);t.value.add(A);const F=new no(16774625,1.5);F.position.set(15,20,15),F.castShadow=!0,F.shadow.mapSize.width=2048,F.shadow.mapSize.height=2048,F.shadow.camera.near=.5,F.shadow.camera.far=500,F.shadow.camera.left=-50,F.shadow.camera.right=50,F.shadow.camera.top=50,F.shadow.camera.bottom=-50,t.value.add(F);const Q=new no(8956671,.6);Q.position.set(-15,8,-8),t.value.add(Q);const le=new no(16777215,.4);le.position.set(0,10,-15),t.value.add(le);const ue=new no(11193599,.3);ue.position.set(0,30,0),t.value.add(ue);let Se=0,Ee=performance.now(),Ce=0;const ft=1e3/60,ut=()=>{i.value.updateMatrixWorld(),i.value.matrixWorldInverse.copy(i.value.matrixWorld).invert(),O.copy(i.value.projectionMatrix),D.copy(i.value.matrixWorldInverse),T.setFromProjectionMatrix(new Ke().multiplyMatrices(O,D))},En=an=>{const ln=new nn().setFromObject(an);return T.intersectsBox(ln)},Tn=(an=Object.values(M.value))=>{an.forEach(ln=>{if(ln&&ln.visible){const zn=i.value.position.distanceTo(ln.position);zn>200?ln.traverse(st=>{st.isMesh&&(st.castShadow=!1,st.receiveShadow=!1,st.material&&(st.material.roughness=1,st.material.metalness=0))}):zn>100?ln.traverse(st=>{st.isMesh&&(st.castShadow=!0,st.receiveShadow=!0,st.material&&(st.material.roughness=.5,st.material.metalness=.3))}):ln.traverse(st=>{st.isMesh&&(st.castShadow=!0,st.receiveShadow=!0,st.material&&(st.material.roughness=.3,st.material.metalness=.6,st.material.envMapIntensity=.8,st.material.isMeshStandardMaterial&&(st.material.needsUpdate=!0)))})}})},Bi=an=>{requestAnimationFrame(Bi);const ln=an-Ce;if(ln>ft){Ce=an-ln%ft,Se++,an-Ee>=1e3&&(l.value=Math.round(Se*1e3/(an-Ee)),Se=0,Ee=an);const zn=t.value.children.filter(st=>{var Hr;return M.value[(Hr=st.userData)==null?void 0:Hr.floorId]||Object.values(M.value).includes(st)});ut(),Tn(zn),zn.forEach(st=>{st&&(st.visible=En(st))}),c.value={x:i.value.position.x,y:i.value.position.y,z:i.value.position.z},u.value={x:r.value.target.x,y:r.value.target.y,z:r.value.target.z},r.value.update(),s.value.render(t.value,i.value)}};Bi(),window.addEventListener("resize",Qn),s.value.domElement.addEventListener("dblclick",_i),s.value.domElement.addEventListener("contextmenu",Bs,{passive:!1}),window.addEventListener("keydown",Jt)};Cs(()=>{window.removeEventListener("keydown",Jt)});const Jt=A=>{(A.key==="q"||A.key==="Q"||A.keyCode===81)&&(A.preventDefault(),qt())},qt=()=>{cs(E.value),Ae(),ne(),te(),y.value&&typeof y.value.clearAlarmFocus=="function"&&y.value.clearAlarmFocus(),S.value&&typeof S.value.clearBuildingFocus=="function"&&S.value.clearBuildingFocus()},Qn=()=>{i.value.aspect=window.innerWidth/window.innerHeight,i.value.updateProjectionMatrix(),s.value.setSize(window.innerWidth,window.innerHeight)},Fi=async A=>{const F=A.userData.ElementID||A.userData.elementId||A.userData.id;if(!F)return!1;try{const Q=k.value.get(F.toString());if(Q){const ut=await $e();if(ut){const En=ut.find(Tn=>Tn.id===Q.category_id);return En&&En.show_in_list!==!1}}const{getBuildings:le}=await ti(async()=>{const{getBuildings:ut}=await Promise.resolve().then(()=>ii);return{getBuildings:ut}},void 0),{getBuildingCategories:ue}=await ti(async()=>{const{getBuildingCategories:ut}=await Promise.resolve().then(()=>ii);return{getBuildingCategories:ut}},void 0),Se=await le({limit:3e3}),Ce=(Se.data||Se).find(ut=>ut.element_id&&ut.element_id.toString()===F.toString());if(!Ce)return!1;const ft=(await ue()).find(ut=>ut.id===Ce.category_id);return ft&&ft.show_in_list!==!1}catch{return!1}},_i=async A=>{if(!t.value||!i.value)return;const F=new Ve,Q=s.value.domElement.getBoundingClientRect();F.x=(A.clientX-Q.left)/Q.width*2-1,F.y=-((A.clientY-Q.top)/Q.height)*2+1;const le=new _E;le.params.Points.threshold=.1,le.params.Line.threshold=.1,le.setFromCamera(F,i.value);const ue=[];Object.values(M.value).forEach(Ee=>{Ee&&Ee.visible&&Ee.traverse(Ce=>{Ce.isMesh&&Ce.visible&&ue.push(Ce)})});const Se=le.intersectObjects(ue,!0);if(Se.length>0){let Ee=Se[0];for(let Tn=1;Tn<Se.length;Tn++)Se[Tn].distance<Ee.distance&&(Ee=Se[Tn]);const Ce=new U;i.value.getWorldDirection(Ce);const Mt=new U;if(le.ray.direction.normalize(Mt),Ee.face){const Tn=Ee.face.normal.clone();Tn.transformDirection(Ee.object.matrixWorld);const Bi=Math.abs(Tn.dot(Mt));if(Bi<.3&&Se.length>1){let an=Ee,ln=Bi;for(let zn=0;zn<Math.min(Se.length,5);zn++){const st=Se[zn];if(st.face){const Hr=st.face.normal.clone();Hr.transformDirection(st.object.matrixWorld);const Su=Math.abs(Hr.dot(Mt));Su>ln&&(an=st,ln=Su)}}Ee=an}}const ft=Ee.object;let ut=ft;if(kr(ft)||(ut=j(ft)),R(_.value,ut)||!await Fi(ut))return;Ae(),ne(),p.value||(p.value=!0),Br(ut);const En=ut.userData.ElementID||ut.userData.elementId||ut.userData.id;if(En&&!k.value.get(En.toString()))try{const{getBuildings:Bi}=await ti(async()=>{const{getBuildings:st}=await Promise.resolve().then(()=>ii);return{getBuildings:st}},void 0),an=await Bi({limit:1e5}),zn=(an.data||an).find(st=>st.element_id&&st.element_id.toString()===En.toString())}catch{}}};let Fs=0;const Bs=A=>{if(A.button===2){A.preventDefault();const F=Date.now();F-Fs<wR?(Ae(),ne(),te(),y.value&&typeof y.value.clearAlarmFocus=="function"&&y.value.clearAlarmFocus(),Fs=0):Fs=F}},Br=(A,F=!1)=>{let Q=A;kr(A)||(Q=j(A)),_.value=Q,m.value=!0,lt(Q),Q.isMesh?St(Q):Q.isObject3D&&Ut(Q),F||(fl(Q),No(Q))},No=async A=>{const F=A.userData.ElementID||A.userData.elementId||A.userData.id;if(F)try{const Q=k.value.get(F.toString());if(Q&&Q.category_id){await ks(),S.value&&typeof S.value.expandCategoryOnly=="function"&&S.value.expandCategoryOnly(Q.category_id);return}const{getBuildings:le}=await ti(async()=>{const{getBuildings:Ce}=await Promise.resolve().then(()=>ii);return{getBuildings:Ce}},void 0),ue=await le({limit:1e5}),Ee=(ue.data||ue).find(Ce=>Ce.element_id&&Ce.element_id.toString()===F.toString());Ee&&Ee.category_id&&(await ks(),S.value&&typeof S.value.expandCategoryOnly=="function"&&S.value.expandCategoryOnly(Ee.category_id))}catch{}},fl=async A=>{const F=A.userData.ElementID||A.userData.elementId||A.userData.id;if(F)try{const Q=k.value.get(F.toString());if(Q&&Q.code){await ks(),S.value&&S.value.searchQuery!==void 0&&(S.value.searchQuery=Q.code,S.value.isPreciseSearch!==void 0&&(S.value.isPreciseSearch=!0,S.value.handleSearch()),typeof S.value.handleSearch=="function"&&S.value.handleSearch());return}const{getBuildings:le}=await ti(async()=>{const{getBuildings:Ce}=await Promise.resolve().then(()=>ii);return{getBuildings:Ce}},void 0),ue=await le({limit:1e5}),Ee=(ue.data||ue).find(Ce=>Ce.element_id&&Ce.element_id.toString()===F.toString());Ee&&Ee.code&&(await ks(),S.value&&S.value.searchQuery!==void 0&&(S.value.searchQuery=Ee.code,S.value.isPreciseSearch!==void 0&&(S.value.isPreciseSearch=!0,console.log("🔍 精准搜索模式变化（双击选中）:",{模式:"精准查询",搜索内容:Ee.code,时间:new Date().toLocaleTimeString(),来源:"双击选中构建"}),S.value.handleSearch()),typeof S.value.handleSearch=="function"&&S.value.handleSearch()))}catch{}},ks=()=>new Promise(A=>{const F=()=>{S.value&&S.value.searchQuery!==void 0?A():setTimeout(F,50)};F()}),kr=A=>A.userData?["Family","family","族","Type","type","类型","ElementID","elementId","id","Category","category","类别","Material","material","材质","Level","level","楼层","Volume","volume","体积","Area","area","面积","Elevation","elevation","标高"].some(Q=>A.userData[Q]!==void 0&&A.userData[Q]!==null&&A.userData[Q]!==""):!1,R=(A,F)=>{if(A===F)return!0;if(!A||!F)return!1;const Q=Se=>Se.userData?Se.userData.ElementID||Se.userData.elementId||Se.userData.id:null,le=Q(A),ue=Q(F);return!!(le&&ue&&le.toString()===ue.toString())},j=A=>{let F=A.parent;for(;F&&F!==t.value;){if(kr(F))return F;F=F.parent}return A},ne=()=>{$.value=null,L.value=null,S.value&&typeof S.value.clearBuildingFocus=="function"&&S.value.clearBuildingFocus(),y.value&&typeof y.value.clearAlarmFocus=="function"&&y.value.clearAlarmFocus()},oe=(A,F="building")=>{$.value=A,L.value=F,S.value&&typeof S.value.updateFocusedBuilding=="function"&&S.value.updateFocusedBuilding(A),y.value&&typeof y.value.updateFocusedBuilding=="function"&&y.value.updateFocusedBuilding(A)},te=()=>{S.value&&S.value.searchQuery!==void 0&&(S.value.searchQuery="",typeof S.value.handleSearch=="function"&&S.value.handleSearch())},Ae=()=>{m.value=!1,_.value&&_.value.userData.selectionLines&&(_.value.userData.selectionLines.forEach(A=>{A&&A.parent&&A.parent.remove(A)}),delete _.value.userData.selectionLines),_.value&&_.value.userData.selectionLine&&(_.value.userData.selectionLine.parent&&_.value.userData.selectionLine.parent.remove(_.value.userData.selectionLine),delete _.value.userData.selectionLine),_.value&&Fe(_.value),_.value=null},Fe=A=>{A.isMesh&&A.userData.originalHighlightMaterial?(A.material=A.userData.originalHighlightMaterial,delete A.userData.originalHighlightMaterial):A.isObject3D&&A.userData.highlightedMeshes&&(A.userData.highlightedMeshes.forEach(F=>{F.userData.originalHighlightMaterial&&(F.material=F.userData.originalHighlightMaterial,delete F.userData.originalHighlightMaterial)}),delete A.userData.highlightedMeshes)};Bn(o,A=>{A||setTimeout(()=>{const F=document.querySelector(".loading-overlay");F&&(F.style.display="none")},800)});const ze=()=>{if(y.value&&y.value.realAlarms){const A=y.value.realAlarms;let F=[];(y.value.dataMode||"realtime")==="realtime"?F=A.filter(le=>le.is_deleted===!1||le.is_deleted===void 0):F=A,q.value=F.map(le=>({id:le.id,alarm:le,visible:!1}))}},We=async()=>{try{const{getBuildingCategories:A}=await ti(async()=>{const{getBuildingCategories:ft}=await Promise.resolve().then(()=>ii);return{getBuildingCategories:ft}},void 0),F=await A(),le=(F.data||F).filter(ft=>ft.show_in_list===!0);if(le.length===0){H.value=[];return}const{getBuildings:ue}=await ti(async()=>{const{getBuildings:ft}=await Promise.resolve().then(()=>ii);return{getBuildings:ft}},void 0),Se=await ue({limit:1e5}),Ee=Se.data||Se,Ce=le.map(ft=>ft.id),Mt=Ee.filter(ft=>ft.element_id&&Ce.includes(ft.category_id));H.value=Mt.map(ft=>({id:ft.id,device:{...ft,name:`${ft.name} (${ft.code})`},visible:!1}))}catch{}},Ze=()=>{if(document.fullscreenElement)document.exitFullscreen&&document.exitFullscreen();else{const A=document.querySelector(".app-container");A&&A.requestFullscreen&&A.requestFullscreen().catch(F=>{})}},je=()=>{d.value=!!document.fullscreenElement},Je=()=>{const A=navigator.userAgent.toLowerCase();f.value=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(A)},Ct=()=>{const A=new Date,F=A.getHours().toString().padStart(2,"0"),Q=A.getMinutes().toString().padStart(2,"0"),le=A.getSeconds().toString().padStart(2,"0");h.value=`${F}:${Q}:${le}`;const ue=A.getFullYear(),Se=(A.getMonth()+1).toString().padStart(2,"0"),Ee=A.getDate().toString().padStart(2,"0"),Mt=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"][A.getDay()];g.value=`${ue}-${Se}-${Ee} ${Mt}`};Rs(async()=>{o.value=!0,Je(),document.addEventListener("fullscreenchange",je),Ct(),setInterval(Ct,1e3);try{await Ge(),console.log("✅ 楼层数据加载完成，开始加载模型..."),setTimeout(()=>{Pt(),At(),setTimeout(()=>{ze(),We(),typeof window<"u"&&(window.$app={buildingInfoCache:k.value})},500)},100)}catch(A){console.error("❌ 初始化失败:",A),setTimeout(()=>{Pt(),At()},100)}}),Cs(()=>{document.removeEventListener("fullscreenchange",je),s.value&&s.value.domElement&&s.value.domElement.removeEventListener("click",onCanvasClick)});const on=async()=>new Promise(async A=>{const F=[],Q=w.value.filter(ue=>ue.file),le=Q.length;if(console.log("📊 开始并行加载模型，可加载的楼层数量:",le),Q.forEach((ue,Se)=>{F.push(Ot(ue,Se,le))}),F.length===0){console.warn("⚠️ 没有可加载的模型文件"),a.value=100,o.value=!1,A();return}try{for(let Se=0;Se<F.length;Se+=2){const Ee=F.slice(Se,Se+2);await Promise.all(Ee);const Ce=F.length>0?Math.round(Math.min(Se+2,F.length)/F.length*100):0;Ce>a.value&&(a.value=Ce)}if(w.value.length>0){const Se=w.value.find(Mt=>Mt.level==="park"),Ee=Se?null:w.value.find(Mt=>Mt.level==="main"),Ce=Se||Ee||w.value[0];Ce&&(await Qe(Ce.id),cs(Ce.id),E.value=Ce.id,console.log("✅ 设置默认楼层:",Ce.name))}a.value=100,A()}catch(ue){console.error("❌ 并行加载模型失败:",ue),A()}finally{setTimeout(()=>{o.value=!1},500)}}),Ot=(A,F,Q)=>new Promise(async le=>{try{const ue=`/assets/models/${A.file}`;console.log(`📥 开始加载模型 [${F+1}/${Q}]: ${A.name} (${A.file})`);const Se=await Hn(ue),Ee=ar(Se.scene.clone());Ee.position.set(0,0,0),Ee.visible=!1,t.value.add(Ee),M.value[A.id]=Ee,console.log(`✅ 模型加载成功: ${A.name} (ID: ${A.id})`),ie(se.value),ke.value++,re(),A.is_visual_style?(console.log(`🔧 模型 ${A.name} 需要视觉样式预加载 (is_visual_style: true)`),setTimeout(()=>{b(Ee).catch(Ce=>{console.warn("⚠️ 视觉样式预加载失败:",Ce)})},0)):console.log(`ℹ️ 模型 ${A.name} 跳过视觉样式预加载 (is_visual_style: false)`),le()}catch(ue){console.error(`❌ 模型加载失败: ${A.name} (${A.file})`,ue),le()}}),Hn=A=>new Promise((F,Q)=>{const le=new vE,ue=new eT;ue.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/"),le.setDRACOLoader(ue),le.load(A,F,Se=>{Se.lengthComputable&&Se.loaded/Se.total*100},Q)}),At=async()=>{o.value=!0,a.value=0;try{if(w.value.length===0){console.warn("⚠️ 楼层数据为空，无法加载模型"+JSON.stringify(w.value)),a.value=100,o.value=!1;return}const A=w.value.filter(F=>F.file);if(A.length===0){console.warn("⚠️ 没有找到可加载的模型文件"),a.value=100,o.value=!1;return}Ne.value=A.length,ke.value=0,K.value=A.filter(F=>F.is_visual_style).length,C.value=0,P.value=0,Z.value=!0,console.log("🚀 开始初始化加载模型..."),console.log("📊 要加载的楼层数据:",A.map(F=>({id:F.id,name:F.name,file:F.file,level:F.level,is_visual_style:F.is_visual_style}))),console.log(`📦 总共需要加载 ${Ne.value} 个模型，其中 ${K.value} 个需要视觉样式预加载`),await on(),console.log("✅ 所有模型加载完成"),console.log("📋 已加载的模型:",Object.keys(M.value)),Z.value=!1}catch(A){console.error("❌ 模型加载错误:",A),o.value=!1,Z.value=!1}},Qe=async A=>{Object.keys(M.value).forEach(Q=>{const le=M.value[Q];le&&(Q===A?(le.visible=!0,t.value.children.includes(le)||t.value.add(le)):(le.visible=!1,t.value.children.includes(le)&&t.value.remove(le),le.geometry&&(le.geometry.boundingBox=null,le.geometry.boundingSphere=null)))});const F=M.value[A];if(F){F.visible=!0,W.value=F,t.value.children.includes(F)||t.value.add(F);const le=new nn().setFromObject(F).getCenter(new U);r.value.target.set(le.x,le.y,le.z)}},cs=A=>{const F=M.value[A];if(!F)return;const Q=new nn().setFromObject(F),le=Q.getCenter(new U),ue=Q.getSize(new U),Ee=Math.max(ue.x,ue.y,ue.z)*.95;ee(le,Ee,{duration:1200,angle:Math.PI/7.2,offset:new U(0,ue.y*.15,0)})},bt=async(A,F=!1)=>{E.value!==A&&(await Qe(A),cs(A),E.value=A,J(),F||(Ae(),ne(),te()))};return(A,F)=>(et(),at("div",xR,[de("header",yR,[F[2]||(F[2]=de("div",{class:"header-title"},[de("img",{src:_p,alt:"潜心 BIM-FireSentry™",class:"header-logo"})],-1)),de("div",MR,[de("div",SR,ht(h.value),1),de("div",bR,ht(g.value),1)]),de("button",{class:"reset-btn",onClick:qt,title:"复位相机位置 (Q键)"},[...F[1]||(F[1]=[de("span",{class:"reset-icon"},"↺",-1),de("span",null,"复位",-1)])]),de("button",{class:"fullscreen-btn",onClick:Ze,title:d.value?"退出全屏":"进入全屏"},[de("span",TR,ht(d.value?"⤢":"⛶"),1),de("span",null,ht(d.value?"退出全屏":"全屏"),1)],8,ER)]),de("div",AR,[Dn(vR,{"is-loading":o.value,"loading-progress":a.value},null,8,["is-loading","loading-progress"]),Dn(nR,{ref_key:"alarmListRef",ref:y,onFocusAlarm:we,onDataModeChanged:Pe},null,512),de("div",{class:yt(["editor-container",{visible:!o.value}])},[p.value?(et(),va(ew,{key:0,ref_key:"buildingListRef",ref:S,onFocusBuilding:F[0]||(F[0]=Q=>xe(Q,"building")),focusedBuilding:$.value},null,8,["focusedBuilding"])):kt("",!0),de("canvas",{ref_key:"canvas",ref:e},null,512),(et(!0),at(Yt,null,es(ge.value,Q=>(et(),va(lR,{key:Q.id,alarm:Q.alarm,scene:t.value,camera:i.value,renderer:s.value,onAlarmClick:Me,onReturnClick:ve},null,8,["alarm","scene","camera","renderer"]))),128)),(et(!0),at(Yt,null,es(Te.value,Q=>(et(),va(hR,{key:Q.id,device:Q.device,scene:t.value,camera:i.value,renderer:s.value,onDeviceClick:ye,onReturnClick:Ue},null,8,["device","scene","camera","renderer"]))),128)),Dn(xw,{floors:w.value,"current-floor":E.value,"current-visual-style":se.value,"show-building-list":p.value,"show-ceilings":X.value,"is-applying-style":B.value,"is-preloading-styles":Y.value,"style-preload-progress":he.value,"overall-progress":P.value,"is-loading-models":Z.value,onSwitchFloor:bt,onToggleVisualStyle:N,onToggleBuildingList:V,onToggleCeilings:z},null,8,["floors","current-floor","current-visual-style","show-building-list","show-ceilings","is-applying-style","is-preloading-styles","style-preload-progress","overall-progress","is-loading-models"]),de("div",{class:yt(["style-loading-overlay",{visible:B.value}])},[...F[3]||(F[3]=[de("div",{class:"style-loading-content"},[de("div",{class:"style-spinner"}),de("p",{class:"style-loading-text"},"应用隐藏线模式中...")],-1)])],2)],2)])]))}},CR=Os(RR,[["__scopeId","data-v-7d4ccfa8"]]);Q_(CR).mount("#app");
