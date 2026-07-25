import{P as te}from"./plotly-DAjEq-Mg.js";import{t as _t,s as ee,a as Rt,b as Ot,r as se,c as ie}from"./tf-BPae_UB-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt=globalThis,At=nt.ShadowRoot&&(nt.ShadyCSS===void 0||nt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,wt=Symbol(),Dt=new WeakMap;let Vt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==wt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(At&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=Dt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Dt.set(e,t))}return t}toString(){return this.cssText}};const re=r=>new Vt(typeof r=="string"?r:r+"",void 0,wt),dt=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new Vt(e,r,wt)},oe=(r,t)=>{if(At)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=nt.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},Ft=At?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return re(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ne,defineProperty:ae,getOwnPropertyDescriptor:le,getOwnPropertyNames:ce,getOwnPropertySymbols:de,getPrototypeOf:he}=Object,S=globalThis,Ut=S.trustedTypes,ue=Ut?Ut.emptyScript:"",pe=S.reactiveElementPolyfillSupport,q=(r,t)=>r,at={toAttribute(r,t){switch(t){case Boolean:r=r?ue:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},Et=(r,t)=>!ne(r,t),Ht={attribute:!0,type:String,converter:at,reflect:!1,useDefault:!1,hasChanged:Et};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),S.litPropertyMetadata??(S.litPropertyMetadata=new WeakMap);let H=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Ht){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&ae(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=le(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){const d=i?.call(this);o?.call(this,n),this.requestUpdate(t,d,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ht}static _$Ei(){if(this.hasOwnProperty(q("elementProperties")))return;const t=he(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(q("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(q("properties"))){const e=this.properties,s=[...ce(e),...de(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(Ft(i))}else t!==void 0&&e.push(Ft(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return oe(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const o=(s.converter?.toAttribute!==void 0?s.converter:at).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:at;this._$Em=i;const d=n.fromAttribute(e,o.type);this[i]=d??this._$Ej?.get(i)??d,this._$Em=null}}requestUpdate(t,e,s,i=!1,o){if(t!==void 0){const n=this.constructor;if(i===!1&&(o=this[t]),s??(s=n.getPropertyOptions(t)),!((s.hasChanged??Et)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},n){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,o]of s){const{wrapped:n}=o,d=this[i];n!==!0||this._$AL.has(i)||d===void 0||this.C(i,void 0,o,d)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};H.elementStyles=[],H.shadowRootOptions={mode:"open"},H[q("elementProperties")]=new Map,H[q("finalized")]=new Map,pe?.({ReactiveElement:H}),(S.reactiveElementVersions??(S.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=globalThis,Lt=r=>r,lt=V.trustedTypes,Nt=lt?lt.createPolicy("lit-html",{createHTML:r=>r}):void 0,Wt="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,Gt="?"+E,fe=`<${Gt}>`,R=document,G=()=>R.createComment(""),Z=r=>r===null||typeof r!="object"&&typeof r!="function",St=Array.isArray,ge=r=>St(r)||typeof r?.[Symbol.iterator]=="function",bt=`[ 	
\f\r]`,B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,zt=/-->/g,It=/>/g,M=RegExp(`>|${bt}(?:([^\\s"'>=/]+)(${bt}*=${bt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),jt=/'/g,Bt=/"/g,Zt=/^(?:script|style|textarea|title)$/i,me=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),P=me(1),L=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),kt=new WeakMap,T=R.createTreeWalker(R,129);function Kt(r,t){if(!St(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Nt!==void 0?Nt.createHTML(t):t}const $e=(r,t)=>{const e=r.length-1,s=[];let i,o=t===2?"<svg>":t===3?"<math>":"",n=B;for(let d=0;d<e;d++){const l=r[d];let p,f,h=-1,v=0;for(;v<l.length&&(n.lastIndex=v,f=n.exec(l),f!==null);)v=n.lastIndex,n===B?f[1]==="!--"?n=zt:f[1]!==void 0?n=It:f[2]!==void 0?(Zt.test(f[2])&&(i=RegExp("</"+f[2],"g")),n=M):f[3]!==void 0&&(n=M):n===M?f[0]===">"?(n=i??B,h=-1):f[1]===void 0?h=-2:(h=n.lastIndex-f[2].length,p=f[1],n=f[3]===void 0?M:f[3]==='"'?Bt:jt):n===Bt||n===jt?n=M:n===zt||n===It?n=B:(n=M,i=void 0);const y=n===M&&r[d+1].startsWith("/>")?" ":"";o+=n===B?l+fe:h>=0?(s.push(p),l.slice(0,h)+Wt+l.slice(h)+E+y):l+E+(h===-2?d:y)}return[Kt(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class K{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const d=t.length-1,l=this.parts,[p,f]=$e(t,e);if(this.el=K.createElement(p,s),T.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=T.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(Wt)){const v=f[n++],y=i.getAttribute(h).split(E),_=/([.?@])?(.*)/.exec(v);l.push({type:1,index:o,name:_[2],strings:y,ctor:_[1]==="."?ve:_[1]==="?"?_e:_[1]==="@"?be:ht}),i.removeAttribute(h)}else h.startsWith(E)&&(l.push({type:6,index:o}),i.removeAttribute(h));if(Zt.test(i.tagName)){const h=i.textContent.split(E),v=h.length-1;if(v>0){i.textContent=lt?lt.emptyScript:"";for(let y=0;y<v;y++)i.append(h[y],G()),T.nextNode(),l.push({type:2,index:++o});i.append(h[v],G())}}}else if(i.nodeType===8)if(i.data===Gt)l.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(E,h+1))!==-1;)l.push({type:7,index:o}),h+=E.length-1}o++}}static createElement(t,e){const s=R.createElement("template");return s.innerHTML=t,s}}function N(r,t,e=r,s){if(t===L)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl;const o=Z(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=N(r,i._$AS(r,t.values),i,s)),t}class ye{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??R).importNode(e,!0);T.currentNode=i;let o=T.nextNode(),n=0,d=0,l=s[0];for(;l!==void 0;){if(n===l.index){let p;l.type===2?p=new X(o,o.nextSibling,this,t):l.type===1?p=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(p=new Ae(o,this,t)),this._$AV.push(p),l=s[++d]}n!==l?.index&&(o=T.nextNode(),n++)}return T.currentNode=R,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=N(this,t,e),Z(t)?t===m||t==null||t===""?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==L&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ge(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==m&&Z(this._$AH)?this._$AA.nextSibling.data=t:this.T(R.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=K.createElement(Kt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const o=new ye(i,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=kt.get(t.strings);return e===void 0&&kt.set(t.strings,e=new K(t)),e}k(t){St(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new X(this.O(G()),this.O(G()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const s=Lt(t).nextSibling;Lt(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class ht{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=m}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(o===void 0)t=N(this,t,e,0),n=!Z(t)||t!==this._$AH&&t!==L,n&&(this._$AH=t);else{const d=t;let l,p;for(t=o[0],l=0;l<o.length-1;l++)p=N(this,d[s+l],e,l),p===L&&(p=this._$AH[l]),n||(n=!Z(p)||p!==this._$AH[l]),p===m?t=m:t!==m&&(t+=(p??"")+o[l+1]),this._$AH[l]=p}n&&!i&&this.j(t)}j(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ve extends ht{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===m?void 0:t}}class _e extends ht{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==m)}}class be extends ht{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=N(this,t,e,0)??m)===L)return;const s=this._$AH,i=t===m&&s!==m||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==m&&(s===m||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Ae{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const we=V.litHtmlPolyfillSupport;we?.(K,X),(V.litHtmlVersions??(V.litHtmlVersions=[])).push("3.3.3");const Ee=(r,t,e)=>{const s=e?.renderBefore??t;let i=s._$litPart$;if(i===void 0){const o=e?.renderBefore??null;s._$litPart$=i=new X(t.insertBefore(G(),o),o,void 0,e??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=globalThis;class x extends H{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ee(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return L}}x._$litElement$=!0,x.finalized=!0,W.litElementHydrateSupport?.({LitElement:x});const Se=W.litElementPolyfillSupport;Se?.({LitElement:x});(W.litElementVersions??(W.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ut=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pe={attribute:!0,type:String,converter:at,reflect:!1,hasChanged:Et},xe=(r=Pe,t,e)=>{const{kind:s,metadata:i}=e;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(e.name,r),s==="accessor"){const{name:n}=e;return{set(d){const l=t.get.call(this);t.set.call(this,d),this.requestUpdate(n,l,r,!0,d)},init(d){return d!==void 0&&this.C(n,void 0,r,d),d}}}if(s==="setter"){const{name:n}=e;return function(d){const l=this[n];t.call(this,d),this.requestUpdate(n,l,r,!0,d)}}throw Error("Unsupported decorator location: "+s)};function Q(r){return(t,e)=>typeof e=="object"?xe(r,t,e):((s,i,o)=>{const n=i.hasOwnProperty(o);return i.constructor.createProperty(o,s),n?Object.getOwnPropertyDescriptor(i,o):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function I(r){return Q({...r,state:!0,attribute:!1})}var Ce=Object.defineProperty,Me=Object.getOwnPropertyDescriptor,Jt=(r,t,e,s)=>{for(var i=s>1?void 0:s?Me(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&Ce(t,e,i),i};let ct=class extends x{constructor(){super(...arguments),this.disabled=!1}createRenderRoot(){return this}handleDragOver(r){r.preventDefault(),this.disabled||r.currentTarget.classList.add("dragover")}handleDragLeave(r){r.currentTarget.classList.remove("dragover")}handleDrop(r){if(r.preventDefault(),r.currentTarget.classList.remove("dragover"),this.disabled)return;const t=r.dataTransfer?.files;t&&t.length>0&&this.processFile(t[0])}handleFileSelect(r){const t=r.target;t.files&&t.files.length>0&&this.processFile(t.files[0])}async processFile(r){const t=["audio/wav","audio/mp3","audio/mpeg","audio/ogg","audio/flac"],e=[".wav",".mp3",".ogg",".flac"],s=t.includes(r.type)||r.type.startsWith("audio/"),i=e.some(o=>r.name.toLowerCase().endsWith(o));if(!s&&!i){this.dispatchEvent(new CustomEvent("error",{detail:"Please upload a valid audio file (WAV, MP3, OGG, or FLAC)",bubbles:!0,composed:!0}));return}try{const o=await this.loadAudio(r);this.dispatchEvent(new CustomEvent("audio-loaded",{detail:o,bubbles:!0,composed:!0}))}catch(o){const n=o instanceof Error?o.message:"Failed to load audio";this.dispatchEvent(new CustomEvent("error",{detail:n,bubbles:!0,composed:!0}))}}loadAudio(r){return new Promise((t,e)=>{const s=new AudioContext,i=new FileReader;i.onload=async()=>{try{const o=i.result,n=await s.decodeAudioData(o),d=n.getChannelData(0),l=Float32Array.from(d);t({audioData:l,sampleRate:n.sampleRate})}catch(o){e(o)}},i.onerror=()=>e(new Error("Failed to read file")),i.readAsArrayBuffer(r)})}triggerFileInput(){this.disabled||this.querySelector("input")?.click()}render(){return P`
      <div
        class="upload-area ${this.disabled?"disabled":""}"
        style="border: 2px dashed #ccc; border-radius: 8px; padding: 1.5rem; text-align: center; cursor: pointer; transition: border-color 0.2s, background 0.2s;"
        @click="${this.triggerFileInput}"
        @dragover="${this.handleDragOver}"
        @dragleave="${this.handleDragLeave}"
        @drop="${this.handleDrop}"
      >
        <div style="font-size: 2rem; margin-bottom: 0.5rem;">📁</div>
        <div>Click to upload or drag and drop</div>
        <div style="color: #666; font-size: 0.875rem;">WAV, MP3, OGG, FLAC</div>
        <input
          type="file"
          accept="audio/*"
          style="display: none;"
          @change="${this.handleFileSelect}"
          ?disabled="${this.disabled}"
        />
      </div>
    `}};ct.styles=dt`
    :host { display: block; }
  `;Jt([Q({type:Boolean})],ct.prototype,"disabled",2);ct=Jt([ut("audio-uploader")],ct);var Te=Object.defineProperty,Re=Object.getOwnPropertyDescriptor,pt=(r,t,e,s)=>{for(var i=s>1?void 0:s?Re(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&Te(t,e,i),i};let z=class extends x{constructor(){super(...arguments),this.disabled=!1,this.isRecording=!1,this.duration=0,this.mediaRecorder=null,this.audioChunks=[],this.startTime=0,this.durationInterval=null}createRenderRoot(){return this}async startRecording(){try{const r=await navigator.mediaDevices.getUserMedia({audio:!0});this.mediaRecorder=new MediaRecorder(r),this.audioChunks=[],this.mediaRecorder.ondataavailable=t=>{t.data.size>0&&this.audioChunks.push(t.data)},this.mediaRecorder.onstop=async()=>{const t=new Blob(this.audioChunks,{type:"audio/webm"}),e=await this.blobToAudio(t);r.getTracks().forEach(s=>s.stop()),this.dispatchEvent(new CustomEvent("audio-loaded",{detail:e,bubbles:!0,composed:!0}))},this.mediaRecorder.start(),this.isRecording=!0,this.startTime=Date.now(),this.durationInterval=window.setInterval(()=>{this.duration=Math.floor((Date.now()-this.startTime)/1e3)},100)}catch(r){const t=r instanceof Error?r.message:"Failed to start recording";this.dispatchEvent(new CustomEvent("error",{detail:t,bubbles:!0,composed:!0}))}}stopRecording(){this.mediaRecorder&&this.mediaRecorder.state!=="inactive"&&this.mediaRecorder.stop(),this.durationInterval&&(clearInterval(this.durationInterval),this.durationInterval=null),this.isRecording=!1,this.duration=0}async blobToAudio(r){const t=await r.arrayBuffer(),s=await new AudioContext().decodeAudioData(t),i=s.getChannelData(0);return{audioData:Float32Array.from(i),sampleRate:s.sampleRate}}handleClick(){this.isRecording?this.stopRecording():this.startRecording()}render(){const r=this.isRecording?"background: #ff1744; animation: pulse 1s infinite;":"background: #f44336;",t=this.disabled?"background: #ccc; cursor: not-allowed;":"";return P`
      <style>
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      </style>
      <button
        style="width: 100%; padding: 1rem; font-size: 1rem; border: none; border-radius: 8px; cursor: pointer; color: white; ${r}${t}"
        @click="${this.handleClick}"
        ?disabled="${this.disabled}"
      >
        ${this.isRecording?"⏹ Stop Recording":"🎤 Start Recording"}
      </button>
      ${this.isRecording?P`
        <div style="margin-top: 0.5rem; text-align: center; color: #666; font-size: 0.875rem;">Recording: ${this.duration}s</div>
      `:""}
      <div style="margin-top: 0.75rem; color: #666; font-size: 0.75rem; text-align: center;">Recording will be decoded as WebM/Opus</div>
    `}};z.styles=dt`
    :host { display: block; }
  `;pt([Q({type:Boolean})],z.prototype,"disabled",2);pt([I()],z.prototype,"isRecording",2);pt([I()],z.prototype,"duration",2);z=pt([ut("audio-recorder")],z);var Oe=Object.defineProperty,De=Object.getOwnPropertyDescriptor,Pt=(r,t,e,s)=>{for(var i=s>1?void 0:s?De(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&Oe(t,e,i),i};let J=class extends x{constructor(){super(...arguments),this.data=null,this.loading=!1,this.chartDiv=null}createRenderRoot(){return this}updated(r){r.has("data")&&this.data&&this.renderChart()}renderChart(){if(!this.data)return;const r=this.querySelector(".chart-container");if(!r)return;r.innerHTML="",this.chartDiv=document.createElement("div"),this.chartDiv.style.width="100%",this.chartDiv.style.height="100%",r.appendChild(this.chartDiv);const{zValues:t,carrierFreqs:e,modulatorFreqs:s}=this.data,i={type:"heatmap",x:s,y:e,z:t,colorscale:"Viridis",colorbar:{title:"Magnitude (log)",titleside:"right"}},o={title:"Modulation Spectrum",xaxis:{title:"Modulator Frequency (Hz)"},yaxis:{title:"Carrier Frequency (Hz)"},margin:{l:80,r:60,t:50,b:60}},n={responsive:!0,displayModeBar:!0,displaylogo:!1};te.newPlot(this.chartDiv,[i],o,n)}render(){return this.loading?P`<div style="display: flex; align-items: center; justify-content: center; height: 600px; color: #666; font-size: 1.125rem; background: #fafafa; border-radius: 4px;">Processing...</div>`:this.data?P`<div class="chart-container" style="width: 100%; height: 600px; background: white; border-radius: 4px;"></div>`:P`
        <div style="display: flex; align-items: center; justify-content: center; height: 600px; color: #999; font-size: 1.125rem; background: #fafafa; border-radius: 4px;">
          Upload or record audio to generate modulation spectrum
        </div>
      `}};J.styles=dt`
    :host { display: block; }
  `;Pt([Q({type:Object})],J.prototype,"data",2);Pt([Q({type:Boolean})],J.prototype,"loading",2);J=Pt([ut("heatmap-chart")],J);const U=256,k=8,Fe=120,qt=44100*240;function Ue(r){const t=[];for(let e=0;e<r;e++)t.push(.5*(1-Math.cos(2*Math.PI*e/(r-1))));return t}function He(r){return Math.pow(2,Math.ceil(Math.log2(r)))}async function Le(r,t){let e=r;e.length>qt&&(e=e.slice(0,qt));const s=_t(e,"float32"),i=e.length,o=Ue(U);console.log("Hanning window:",o.slice(0,10));try{const n=U/k,d=Math.floor((i-U)/n)+1,l=64,p=[];for(let a=0;a<d;a+=l){const c=Math.min(a+l,d),u=[];for(let g=a;g<c;g++){const $=Math.floor(g*n);if($+U<=i){const C=s.slice([$],[U]),F=C.mul(_t(o,"float32"));if(g===0){const j=C.arraySync(),vt=F.arraySync();console.log("First segment:",j.slice(0,10)),console.log("First windowed:",vt.slice(0,10))}u.push(F)}}if(u.length>0){const g=ee(u);a===0&&console.log("Stacked tensor shape:",g.shape);const $=Rt(Ot.rfft(g)),D=$.arraySync();a===0&&console.log("First FFT batch:",D[0]?.slice(0,10)),p.push(...D),g.dispose(),$.dispose(),u.forEach(C=>C.dispose())}}if(p.length===0)return Ne(t);const f=Math.floor(p.length/k),h=[];for(let a=0;a<f;a++){let c=new Array(p[0].length).fill(0);for(let u=0;u<k;u++){const g=a*k+u;if(g<p.length)for(let $=0;$<c.length;$++)c[$]+=p[g][$]}h.push(c.map(u=>u/k))}const v=f,y=h[0].length,_=new Array(y).fill(0);for(let a=0;a<v;a++)for(let c=0;c<y;c++)_[c]+=h[a][c];_.forEach((a,c)=>_[c]=a/v),console.log("Averaged FFTs[0]:",h[0]?.slice(0,10)),console.log("Bin averages:",_.slice(0,10));const ft=[];for(let a=0;a<v;a++){const c=[];for(let u=0;u<y;u++)c.push(h[a][u]-_[u]);ft.push(c)}console.log("Normalized FFTs[0]:",ft[0]?.slice(0,10));const A=He(v),gt=t/U;console.log("Bin sample rate:",gt,"paddedLength:",A,"numTimeSteps:",v);const xt=[],tt=[];for(let a=0;a<A;a++)tt.push(a*gt/A);console.log("Modulator freq range:",tt[1],tt[A-1]);for(let a=0;a<y;a++){const c=ft.map(j=>j[a]);a===0&&console.log("Bin series:",c.slice(0,10),"length:",c.length);const u=[...c];for(;u.length<A;)u.push(0);a===0&&console.log("Padded series:",u.slice(0,10),"length:",u.length);const g=u.map((j,vt)=>j*(.5*(1-Math.cos(2*Math.PI*vt/(A-1))))),$=_t(g,"float32"),D=Ot.rfft($),C=Rt(D),F=C.arraySync();a===0&&console.log("First bin FFT:",F.slice(0,10),"length:",F.length),xt.push(F),$.dispose(),D.dispose(),C.dispose()}const Xt=Math.floor(A/2)+1,Qt=Math.floor(Fe*A/gt)+1,Yt=Math.min(Xt,Qt),mt=[];for(let a=0;a<y;a++)mt.push(xt[a].slice(0,Yt));let Ct=0,et=0,$t=1/0,yt=-1/0;for(const a of mt)for(const c of a)isFinite(c)&&(Ct+=c,et++,$t=Math.min($t,c),yt=Math.max(yt,c));console.log("Raw FFT:",{rawMin:$t,rawMax:yt,rawAvg:et>0?Ct/et:0,rawCount:et});const st=mt.map(a=>a.map(c=>isNaN(c)||!isFinite(c)?0:Math.abs(c)));let it=1/0,rt=-1/0;for(const a of st)for(const c of a)it=Math.min(it,c),rt=Math.max(rt,c);console.log("Data range:",{dataMin:it,dataMax:rt,range:rt-it});let b=1/0,w=-1/0;const ot=[];for(let a=0;a<st.length;a++){const c=[];for(let u=0;u<st[a].length;u++){const g=st[a][u],$=Math.log(g+1e-10);c.push($),b=Math.min(b,$),w=Math.max(w,$)}ot.push(c)}console.log("Log range:",{logMin:b,logMax:w,logRange:w-b}),(!isFinite(b)||!isFinite(w)||w===b)&&(b=0,w=1);const Mt=[];for(let a=0;a<ot.length;a++){const c=[];for(let u=0;u<ot[a].length;u++){const g=(ot[a][u]-b)/(w-b);c.push(isNaN(g)?0:g)}Mt.push(c)}const Tt=[];for(let a=0;a<y;a++)Tt.push(a/y*(t/2));return{zValues:Mt.reverse(),carrierFreqs:Tt.reverse(),modulatorFreqs:tt,sampleRate:t}}finally{s.dispose()}}function Ne(r){return{zValues:[[0]],carrierFreqs:[0],modulatorFreqs:[0],sampleRate:r}}var ze=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,Y=(r,t,e,s)=>{for(var i=s>1?void 0:s?Ie(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&ze(t,e,i),i};let O=class extends x{constructor(){super(...arguments),this.heatmapData=null,this.status="",this.statusType="",this.isProcessing=!1,this.handleAudioLoaded=async r=>{const{audioData:t,sampleRate:e}=r.detail;this.status="Processing audio with TensorFlow.js...",this.statusType="processing",this.isProcessing=!0,this.heatmapData=null,this.requestUpdate();try{const s=await Le(t,e);this.heatmapData=s,this.status="Complete!",this.statusType="success"}catch(s){const i=s instanceof Error?s.message:"Unknown error";this.status=`Error: ${i}`,this.statusType="error",console.error(s)}finally{this.isProcessing=!1}this.requestUpdate()},this.handleError=r=>{const t=r.detail;this.status=t,this.statusType="error",this.requestUpdate()}}createRenderRoot(){return this}render(){return P`
      <h1>ModSpotter - Find Modulated Signals</h1>
      
      ${this.status?P`
        <div class="status ${this.statusType}">${this.status}</div>
      `:""}

      <div class="input-section">
        <div class="input-card">
          <h2>Upload Audio File</h2>
          <audio-uploader
            @audio-loaded="${this.handleAudioLoaded}"
            @error="${this.handleError}"
            ?disabled="${this.isProcessing}"
          ></audio-uploader>
        </div>
        <div class="input-card">
          <h2>Record Audio</h2>
          <audio-recorder
            @audio-loaded="${this.handleAudioLoaded}"
            @error="${this.handleError}"
            ?disabled="${this.isProcessing}"
          ></audio-recorder>
        </div>
      </div>

      <div class="chart-section">
        <heatmap-chart
          .data="${this.heatmapData}"
          ?loading="${this.isProcessing}"
        ></heatmap-chart>
      </div>
    `}};O.styles=dt`
    :host {
      display: block;
      font-family: system-ui, -apple-system, sans-serif;
      max-width: 1400px;
      margin: 0 auto;
      padding: 1rem;
    }

    h1 {
      margin: 0 0 1rem 0;
      font-size: 1.75rem;
      font-weight: 600;
    }

    .input-section {
      display: flex;
      gap: 1rem;
      margin-bottom: 1.5rem;
      flex-wrap: wrap;
    }

    .input-card {
      background: #f5f5f5;
      border-radius: 8px;
      padding: 1rem;
      flex: 1;
      min-width: 280px;
    }

    .input-card h2 {
      margin: 0 0 0.75rem 0;
      font-size: 1rem;
      font-weight: 600;
    }

    .chart-section {
      background: #fafafa;
      border-radius: 8px;
      padding: 1rem;
      min-height: 600px;
    }

    .status {
      padding: 0.75rem;
      border-radius: 4px;
      margin-bottom: 1rem;
    }

    .status.processing {
      background: #fff3cd;
      color: #856404;
    }

    .status.error {
      background: #f8d7da;
      color: #721c24;
    }

    .status.success {
      background: #d4edda;
      color: #155724;
    }
  `;Y([I()],O.prototype,"heatmapData",2);Y([I()],O.prototype,"status",2);Y([I()],O.prototype,"statusType",2);Y([I()],O.prototype,"isProcessing",2);O=Y([ut("modspotter-app")],O);async function je(){await se(),console.log("TF.js ready, backend:",ie())}je().catch(console.error);
