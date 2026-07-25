import{P as Yt}from"./plotly-DAjEq-Mg.js";import{t as yt,s as te,a as Rt,b as Tt,r as ee,c as se}from"./tf-BPae_UB-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at=globalThis,_t=at.ShadowRoot&&(at.ShadyCSS===void 0||at.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,bt=Symbol(),Ot=new WeakMap;let qt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==bt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(_t&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=Ot.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Ot.set(e,t))}return t}toString(){return this.cssText}};const ie=r=>new qt(typeof r=="string"?r:r+"",void 0,bt),ht=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new qt(e,r,bt)},re=(r,t)=>{if(_t)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=at.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},Dt=_t?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return ie(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:oe,defineProperty:ne,getOwnPropertyDescriptor:ae,getOwnPropertyNames:le,getOwnPropertySymbols:ce,getPrototypeOf:de}=Object,E=globalThis,Ft=E.trustedTypes,he=Ft?Ft.emptyScript:"",ue=E.reactiveElementPolyfillSupport,k=(r,t)=>r,lt={toAttribute(r,t){switch(t){case Boolean:r=r?he:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},At=(r,t)=>!oe(r,t),Ut={attribute:!0,type:String,converter:lt,reflect:!1,useDefault:!1,hasChanged:At};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),E.litPropertyMetadata??(E.litPropertyMetadata=new WeakMap);let N=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Ut){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&ne(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=ae(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){const d=i?.call(this);o?.call(this,n),this.requestUpdate(t,d,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ut}static _$Ei(){if(this.hasOwnProperty(k("elementProperties")))return;const t=de(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(k("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(k("properties"))){const e=this.properties,s=[...le(e),...ce(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(Dt(i))}else t!==void 0&&e.push(Dt(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return re(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const o=(s.converter?.toAttribute!==void 0?s.converter:lt).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:lt;this._$Em=i;const d=n.fromAttribute(e,o.type);this[i]=d??this._$Ej?.get(i)??d,this._$Em=null}}requestUpdate(t,e,s,i=!1,o){if(t!==void 0){const n=this.constructor;if(i===!1&&(o=this[t]),s??(s=n.getPropertyOptions(t)),!((s.hasChanged??At)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},n){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,o]of s){const{wrapped:n}=o,d=this[i];n!==!0||this._$AL.has(i)||d===void 0||this.C(i,void 0,o,d)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};N.elementStyles=[],N.shadowRootOptions={mode:"open"},N[k("elementProperties")]=new Map,N[k("finalized")]=new Map,ue?.({ReactiveElement:N}),(E.reactiveElementVersions??(E.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=globalThis,Ht=r=>r,ct=q.trustedTypes,Nt=ct?ct.createPolicy("lit-html",{createHTML:r=>r}):void 0,Vt="$lit$",w=`lit$${Math.random().toFixed(9).slice(2)}$`,Wt="?"+w,pe=`<${Wt}>`,D=document,W=()=>D.createComment(""),G=r=>r===null||typeof r!="object"&&typeof r!="function",wt=Array.isArray,fe=r=>wt(r)||typeof r?.[Symbol.iterator]=="function",vt=`[ 	
\f\r]`,B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Lt=/-->/g,zt=/>/g,R=RegExp(`>|${vt}(?:([^\\s"'>=/]+)(${vt}*=${vt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),jt=/'/g,It=/"/g,Gt=/^(?:script|style|textarea|title)$/i,ge=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),S=ge(1),L=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),Bt=new WeakMap,O=D.createTreeWalker(D,129);function Zt(r,t){if(!wt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Nt!==void 0?Nt.createHTML(t):t}const me=(r,t)=>{const e=r.length-1,s=[];let i,o=t===2?"<svg>":t===3?"<math>":"",n=B;for(let d=0;d<e;d++){const l=r[d];let f,p,h=-1,y=0;for(;y<l.length&&(n.lastIndex=y,p=n.exec(l),p!==null);)y=n.lastIndex,n===B?p[1]==="!--"?n=Lt:p[1]!==void 0?n=zt:p[2]!==void 0?(Gt.test(p[2])&&(i=RegExp("</"+p[2],"g")),n=R):p[3]!==void 0&&(n=R):n===R?p[0]===">"?(n=i??B,h=-1):p[1]===void 0?h=-2:(h=n.lastIndex-p[2].length,f=p[1],n=p[3]===void 0?R:p[3]==='"'?It:jt):n===It||n===jt?n=R:n===Lt||n===zt?n=B:(n=R,i=void 0);const v=n===R&&r[d+1].startsWith("/>")?" ":"";o+=n===B?l+pe:h>=0?(s.push(f),l.slice(0,h)+Vt+l.slice(h)+w+v):l+w+(h===-2?d:v)}return[Zt(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class Z{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const d=t.length-1,l=this.parts,[f,p]=me(t,e);if(this.el=Z.createElement(f,s),O.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=O.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(Vt)){const y=p[n++],v=i.getAttribute(h).split(w),b=/([.?@])?(.*)/.exec(y);l.push({type:1,index:o,name:b[2],strings:v,ctor:b[1]==="."?ye:b[1]==="?"?ve:b[1]==="@"?_e:ut}),i.removeAttribute(h)}else h.startsWith(w)&&(l.push({type:6,index:o}),i.removeAttribute(h));if(Gt.test(i.tagName)){const h=i.textContent.split(w),y=h.length-1;if(y>0){i.textContent=ct?ct.emptyScript:"";for(let v=0;v<y;v++)i.append(h[v],W()),O.nextNode(),l.push({type:2,index:++o});i.append(h[y],W())}}}else if(i.nodeType===8)if(i.data===Wt)l.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(w,h+1))!==-1;)l.push({type:7,index:o}),h+=w.length-1}o++}}static createElement(t,e){const s=D.createElement("template");return s.innerHTML=t,s}}function z(r,t,e=r,s){if(t===L)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl;const o=G(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=z(r,i._$AS(r,t.values),i,s)),t}class $e{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??D).importNode(e,!0);O.currentNode=i;let o=O.nextNode(),n=0,d=0,l=s[0];for(;l!==void 0;){if(n===l.index){let f;l.type===2?f=new J(o,o.nextSibling,this,t):l.type===1?f=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(f=new be(o,this,t)),this._$AV.push(f),l=s[++d]}n!==l?.index&&(o=O.nextNode(),n++)}return O.currentNode=D,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class J{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=z(this,t,e),G(t)?t===$||t==null||t===""?(this._$AH!==$&&this._$AR(),this._$AH=$):t!==this._$AH&&t!==L&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):fe(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==$&&G(this._$AH)?this._$AA.nextSibling.data=t:this.T(D.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Z.createElement(Zt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const o=new $e(i,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=Bt.get(t.strings);return e===void 0&&Bt.set(t.strings,e=new Z(t)),e}k(t){wt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new J(this.O(W()),this.O(W()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const s=Ht(t).nextSibling;Ht(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class ut{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=$,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=$}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(o===void 0)t=z(this,t,e,0),n=!G(t)||t!==this._$AH&&t!==L,n&&(this._$AH=t);else{const d=t;let l,f;for(t=o[0],l=0;l<o.length-1;l++)f=z(this,d[s+l],e,l),f===L&&(f=this._$AH[l]),n||(n=!G(f)||f!==this._$AH[l]),f===$?t=$:t!==$&&(t+=(f??"")+o[l+1]),this._$AH[l]=f}n&&!i&&this.j(t)}j(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ye extends ut{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===$?void 0:t}}class ve extends ut{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==$)}}class _e extends ut{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=z(this,t,e,0)??$)===L)return;const s=this._$AH,i=t===$&&s!==$||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==$&&(s===$||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class be{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}}const Ae=q.litHtmlPolyfillSupport;Ae?.(Z,J),(q.litHtmlVersions??(q.litHtmlVersions=[])).push("3.3.3");const we=(r,t,e)=>{const s=e?.renderBefore??t;let i=s._$litPart$;if(i===void 0){const o=e?.renderBefore??null;s._$litPart$=i=new J(t.insertBefore(W(),o),o,void 0,e??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=globalThis;class P extends N{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=we(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return L}}P._$litElement$=!0,P.finalized=!0,V.litElementHydrateSupport?.({LitElement:P});const Ee=V.litElementPolyfillSupport;Ee?.({LitElement:P});(V.litElementVersions??(V.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Se={attribute:!0,type:String,converter:lt,reflect:!1,hasChanged:At},Pe=(r=Se,t,e)=>{const{kind:s,metadata:i}=e;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(e.name,r),s==="accessor"){const{name:n}=e;return{set(d){const l=t.get.call(this);t.set.call(this,d),this.requestUpdate(n,l,r,!0,d)},init(d){return d!==void 0&&this.C(n,void 0,r,d),d}}}if(s==="setter"){const{name:n}=e;return function(d){const l=this[n];t.call(this,d),this.requestUpdate(n,l,r,!0,d)}}throw Error("Unsupported decorator location: "+s)};function X(r){return(t,e)=>typeof e=="object"?Pe(r,t,e):((s,i,o)=>{const n=i.hasOwnProperty(o);return i.constructor.createProperty(o,s),n?Object.getOwnPropertyDescriptor(i,o):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function I(r){return X({...r,state:!0,attribute:!1})}var Ce=Object.defineProperty,xe=Object.getOwnPropertyDescriptor,Kt=(r,t,e,s)=>{for(var i=s>1?void 0:s?xe(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&Ce(t,e,i),i};let dt=class extends P{constructor(){super(...arguments),this.disabled=!1}createRenderRoot(){return this}handleDragOver(r){r.preventDefault(),this.disabled||r.currentTarget.classList.add("dragover")}handleDragLeave(r){r.currentTarget.classList.remove("dragover")}handleDrop(r){if(r.preventDefault(),r.currentTarget.classList.remove("dragover"),this.disabled)return;const t=r.dataTransfer?.files;t&&t.length>0&&this.processFile(t[0])}handleFileSelect(r){const t=r.target;t.files&&t.files.length>0&&this.processFile(t.files[0])}async processFile(r){const t=["audio/wav","audio/mp3","audio/mpeg","audio/ogg","audio/flac"],e=[".wav",".mp3",".ogg",".flac"],s=t.includes(r.type)||r.type.startsWith("audio/"),i=e.some(o=>r.name.toLowerCase().endsWith(o));if(!s&&!i){this.dispatchEvent(new CustomEvent("error",{detail:"Please upload a valid audio file (WAV, MP3, OGG, or FLAC)",bubbles:!0,composed:!0}));return}try{const o=await this.loadAudio(r);this.dispatchEvent(new CustomEvent("audio-loaded",{detail:o,bubbles:!0,composed:!0}))}catch(o){const n=o instanceof Error?o.message:"Failed to load audio";this.dispatchEvent(new CustomEvent("error",{detail:n,bubbles:!0,composed:!0}))}}loadAudio(r){return new Promise((t,e)=>{const s=new AudioContext,i=new FileReader;i.onload=async()=>{try{const o=i.result,n=await s.decodeAudioData(o),d=n.getChannelData(0),l=Float32Array.from(d);t({audioData:l,sampleRate:n.sampleRate})}catch(o){e(o)}},i.onerror=()=>e(new Error("Failed to read file")),i.readAsArrayBuffer(r)})}triggerFileInput(){this.disabled||this.querySelector("input")?.click()}render(){return S`
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
    `}};dt.styles=ht`
    :host { display: block; }
  `;Kt([X({type:Boolean})],dt.prototype,"disabled",2);dt=Kt([pt("audio-uploader")],dt);var Me=Object.defineProperty,Re=Object.getOwnPropertyDescriptor,ft=(r,t,e,s)=>{for(var i=s>1?void 0:s?Re(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&Me(t,e,i),i};let j=class extends P{constructor(){super(...arguments),this.disabled=!1,this.isRecording=!1,this.duration=0,this.mediaRecorder=null,this.audioChunks=[],this.startTime=0,this.durationInterval=null}createRenderRoot(){return this}async startRecording(){try{const r=await navigator.mediaDevices.getUserMedia({audio:!0});this.mediaRecorder=new MediaRecorder(r),this.audioChunks=[],this.mediaRecorder.ondataavailable=t=>{t.data.size>0&&this.audioChunks.push(t.data)},this.mediaRecorder.onstop=async()=>{const t=new Blob(this.audioChunks,{type:"audio/webm"}),e=await this.blobToAudio(t);r.getTracks().forEach(s=>s.stop()),this.dispatchEvent(new CustomEvent("audio-loaded",{detail:e,bubbles:!0,composed:!0}))},this.mediaRecorder.start(),this.isRecording=!0,this.startTime=Date.now(),this.durationInterval=window.setInterval(()=>{this.duration=Math.floor((Date.now()-this.startTime)/1e3)},100)}catch(r){const t=r instanceof Error?r.message:"Failed to start recording";this.dispatchEvent(new CustomEvent("error",{detail:t,bubbles:!0,composed:!0}))}}stopRecording(){this.mediaRecorder&&this.mediaRecorder.state!=="inactive"&&this.mediaRecorder.stop(),this.durationInterval&&(clearInterval(this.durationInterval),this.durationInterval=null),this.isRecording=!1,this.duration=0}async blobToAudio(r){const t=await r.arrayBuffer(),s=await new AudioContext().decodeAudioData(t),i=s.getChannelData(0);return{audioData:Float32Array.from(i),sampleRate:s.sampleRate}}handleClick(){this.isRecording?this.stopRecording():this.startRecording()}render(){const r=this.isRecording?"background: #ff1744; animation: pulse 1s infinite;":"background: #f44336;",t=this.disabled?"background: #ccc; cursor: not-allowed;":"";return S`
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
      ${this.isRecording?S`
        <div style="margin-top: 0.5rem; text-align: center; color: #666; font-size: 0.875rem;">Recording: ${this.duration}s</div>
      `:""}
      <div style="margin-top: 0.75rem; color: #666; font-size: 0.75rem; text-align: center;">Recording will be decoded as WebM/Opus</div>
    `}};j.styles=ht`
    :host { display: block; }
  `;ft([X({type:Boolean})],j.prototype,"disabled",2);ft([I()],j.prototype,"isRecording",2);ft([I()],j.prototype,"duration",2);j=ft([pt("audio-recorder")],j);var Te=Object.defineProperty,Oe=Object.getOwnPropertyDescriptor,Et=(r,t,e,s)=>{for(var i=s>1?void 0:s?Oe(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&Te(t,e,i),i};let K=class extends P{constructor(){super(...arguments),this.data=null,this.loading=!1,this.chartDiv=null}createRenderRoot(){return this}updated(r){r.has("data")&&this.data&&this.renderChart()}renderChart(){if(!this.data)return;const r=this.querySelector(".chart-container");if(!r)return;r.innerHTML="",this.chartDiv=document.createElement("div"),this.chartDiv.style.width="100%",this.chartDiv.style.height="100%",r.appendChild(this.chartDiv);const{zValues:t,carrierFreqs:e,modulatorFreqs:s}=this.data,i={type:"heatmap",x:s,y:e,z:t,colorscale:"Viridis",colorbar:{title:"Magnitude (log)",titleside:"right"}},o={title:"Modulation Spectrum",xaxis:{title:"Modulator Frequency (Hz)"},yaxis:{title:"Carrier Frequency (Hz)"},margin:{l:80,r:60,t:50,b:60}},n={responsive:!0,displayModeBar:!0,displaylogo:!1};Yt.newPlot(this.chartDiv,[i],o,n)}render(){return this.loading?S`<div style="display: flex; align-items: center; justify-content: center; height: 600px; color: #666; font-size: 1.125rem; background: #fafafa; border-radius: 4px;">Processing...</div>`:this.data?S`<div class="chart-container" style="width: 100%; height: 600px; background: white; border-radius: 4px;"></div>`:S`
        <div style="display: flex; align-items: center; justify-content: center; height: 600px; color: #999; font-size: 1.125rem; background: #fafafa; border-radius: 4px;">
          Upload or record audio to generate modulation spectrum
        </div>
      `}};K.styles=ht`
    :host { display: block; }
  `;Et([X({type:Object})],K.prototype,"data",2);Et([X({type:Boolean})],K.prototype,"loading",2);K=Et([pt("heatmap-chart")],K);const T=256,H=8,De=512,kt=44100*240;function Fe(r){const t=[];for(let e=0;e<r;e++)t.push(.5*(1-Math.cos(2*Math.PI*e/(r-1))));return t}function Ue(r){return Math.pow(2,Math.ceil(Math.log2(r)))}async function He(r,t){let e=r;e.length>kt&&(e=e.slice(0,kt));const s=yt(e,"float32"),i=e.length,o=Fe(T);console.log("Hanning window:",o.slice(0,10));try{const n=Math.floor(i/T),d=64,l=[];for(let a=0;a<n;a+=d){const c=Math.min(a+d,n),u=[];for(let m=a;m<c;m++)for(let g=0;g<H;g++){const x=g/H*T,M=Math.floor((m+x)*T);if(M+T<=i){const U=s.slice([M],[T]),nt=U.mul(yt(o,"float32"));if(m===a&&g===0){const Xt=U.arraySync(),Qt=nt.arraySync();console.log("First segment:",Xt.slice(0,10)),console.log("First windowed:",Qt.slice(0,10))}u.push(nt)}}if(u.length>0){const m=te(u);a===0&&console.log("Stacked tensor shape:",m.shape);const g=Rt(Tt.rfft(m)),x=g.arraySync();a===0&&console.log("First FFT batch:",x[0]?.slice(0,10)),l.push(...x),m.dispose(),g.dispose(),u.forEach(M=>M.dispose())}}if(l.length===0)return Ne(t);const f=Math.floor(l.length/H),p=[];for(let a=0;a<f;a++){let c=new Array(l[0].length).fill(0);for(let u=0;u<H;u++){const m=a*H+u;if(m<l.length)for(let g=0;g<c.length;g++)c[g]+=l[m][g]}p.push(c.map(u=>u/H))}const h=f,y=p[0].length,v=new Array(y).fill(0);for(let a=0;a<h;a++)for(let c=0;c<y;c++)v[c]+=p[a][c];v.forEach((a,c)=>v[c]=a/h),console.log("Averaged FFTs[0]:",p[0]?.slice(0,10)),console.log("Bin averages:",v.slice(0,10));const b=[];for(let a=0;a<h;a++){const c=[];for(let u=0;u<y;u++)c.push(p[a][u]-v[u]);b.push(c)}console.log("Normalized FFTs[0]:",b[0]?.slice(0,10));const C=Ue(h),St=t/T;console.log("Bin sample rate:",St,"paddedLength:",C,"numTimeSteps:",h);const Pt=[],Y=[];for(let a=0;a<C;a++)Y.push(a*St/C);console.log("Modulator freq range:",Y[1],Y[C-1]);for(let a=0;a<y;a++){const c=b.map(U=>U[a]);a===0&&console.log("Bin series:",c.slice(0,10),"length:",c.length);const u=[...c];for(;u.length<C;)u.push(0);a===0&&console.log("Padded series:",u.slice(0,10),"length:",u.length);const m=u.map((U,nt)=>U*(.5*(1-Math.cos(2*Math.PI*nt/(C-1))))),g=yt(m,"float32"),x=Tt.rfft(g),M=Rt(x),ot=M.arraySync();a===0&&console.log("First bin FFT:",ot.slice(0,10),"length:",ot.length),Pt.push(ot),g.dispose(),x.dispose(),M.dispose()}const Jt=Math.min(De,Math.floor(C/2)+1),gt=[];for(let a=0;a<y;a++)gt.push(Pt[a].slice(0,Jt));let Ct=0,tt=0,mt=1/0,$t=-1/0;for(const a of gt)for(const c of a)isFinite(c)&&(Ct+=c,tt++,mt=Math.min(mt,c),$t=Math.max($t,c));console.log("Raw FFT:",{rawMin:mt,rawMax:$t,rawAvg:tt>0?Ct/tt:0,rawCount:tt});const et=gt.map(a=>a.map(c=>isNaN(c)||!isFinite(c)?0:Math.abs(c)));let st=1/0,it=-1/0;for(const a of et)for(const c of a)st=Math.min(st,c),it=Math.max(it,c);console.log("Data range:",{dataMin:st,dataMax:it,range:it-st});let _=1/0,A=-1/0;const rt=[];for(let a=0;a<et.length;a++){const c=[];for(let u=0;u<et[a].length;u++){const m=et[a][u],g=Math.log(m+1e-10);c.push(g),_=Math.min(_,g),A=Math.max(A,g)}rt.push(c)}console.log("Log range:",{logMin:_,logMax:A,logRange:A-_}),(!isFinite(_)||!isFinite(A)||A===_)&&(_=0,A=1);const xt=[];for(let a=0;a<rt.length;a++){const c=[];for(let u=0;u<rt[a].length;u++){const m=(rt[a][u]-_)/(A-_);c.push(isNaN(m)?0:m)}xt.push(c)}const Mt=[];for(let a=0;a<y;a++)Mt.push(a/y*(t/2));return{zValues:xt.reverse(),carrierFreqs:Mt.reverse(),modulatorFreqs:Y,sampleRate:t}}finally{s.dispose()}}function Ne(r){return{zValues:[[0]],carrierFreqs:[0],modulatorFreqs:[0],sampleRate:r}}var Le=Object.defineProperty,ze=Object.getOwnPropertyDescriptor,Q=(r,t,e,s)=>{for(var i=s>1?void 0:s?ze(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&Le(t,e,i),i};let F=class extends P{constructor(){super(...arguments),this.heatmapData=null,this.status="",this.statusType="",this.isProcessing=!1,this.handleAudioLoaded=async r=>{const{audioData:t,sampleRate:e}=r.detail;this.status="Processing audio with TensorFlow.js...",this.statusType="processing",this.isProcessing=!0,this.heatmapData=null,this.requestUpdate();try{const s=await He(t,e);this.heatmapData=s,this.status="Complete!",this.statusType="success"}catch(s){const i=s instanceof Error?s.message:"Unknown error";this.status=`Error: ${i}`,this.statusType="error",console.error(s)}finally{this.isProcessing=!1}this.requestUpdate()},this.handleError=r=>{const t=r.detail;this.status=t,this.statusType="error",this.requestUpdate()}}createRenderRoot(){return this}render(){return S`
      <h1>ModSpotter - Find Modulated Signals</h1>
      
      ${this.status?S`
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
    `}};F.styles=ht`
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
  `;Q([I()],F.prototype,"heatmapData",2);Q([I()],F.prototype,"status",2);Q([I()],F.prototype,"statusType",2);Q([I()],F.prototype,"isProcessing",2);F=Q([pt("modspotter-app")],F);async function je(){await ee(),console.log("TF.js ready, backend:",se())}je().catch(console.error);
