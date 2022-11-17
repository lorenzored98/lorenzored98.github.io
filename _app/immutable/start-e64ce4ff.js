import{S as tt,i as rt,s as nt,a as at,e as z,c as ot,b as H,g as me,t as J,d as _e,f as G,h as K,j as st,o as Ie,k as it,l as lt,m as ct,n as Re,p as B,q as ft,r as ut,u as pt,v as Z,w as Q,x as Te,y as x,z as ee,A as ue}from"./chunks/index-94ae1f6d.js";import{g as We,f as Me,s as M,a as $e,b as dt,i as ht}from"./chunks/singletons-ab66a008.js";function mt(n,e){return n==="/"||e==="ignore"?n:e==="never"?n.endsWith("/")?n.slice(0,-1):n:e==="always"&&!n.endsWith("/")?n+"/":n}function _t(n){return n.split("%25").map(decodeURI).join("%25")}function gt(n){for(const e in n)n[e]=decodeURIComponent(n[e]);return n}const wt=["href","pathname","search","searchParams","toString","toJSON"];function yt(n,e){const r=new URL(n);for(const s of wt){let o=r[s];Object.defineProperty(r,s,{get(){return e(),o},enumerable:!0,configurable:!0})}return bt(r),r}function bt(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const vt="/__data.json";function Et(n){return n.replace(/\/$/,"")+vt}function kt(n){let e=5381;if(typeof n=="string"){let r=n.length;for(;r;)e=e*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let s=r.length;for(;s;)e=e*33^r[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const ge=window.fetch;window.fetch=(n,e)=>{if((n instanceof Request?n.method:(e==null?void 0:e.method)||"GET")!=="GET"){const s=new URL(n instanceof Request?n.url:n.toString(),document.baseURI).href;oe.delete(s)}return ge(n,e)};const oe=new Map;function Rt(n,e){const r=xe(n,e),s=document.querySelector(r);if(s!=null&&s.textContent){const{body:o,...m}=JSON.parse(s.textContent),t=s.getAttribute("data-ttl");return t&&oe.set(r,{body:o,init:m,ttl:1e3*Number(t)}),Promise.resolve(new Response(o,m))}return ge(n,e)}function Ot(n,e,r){if(oe.size>0){const s=xe(n,r),o=oe.get(s);if(o){if(performance.now()<o.ttl)return new Response(o.body,o.init);oe.delete(s)}}return ge(e,r)}function xe(n,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;return(e==null?void 0:e.body)&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(s+=`[data-hash="${kt(e.body)}"]`),s}const St=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Lt(n){const e=[],r=[],s=[];let o=!0;return{pattern:n==="/"?/^\/$/:new RegExp(`^${$t(n).map((t,u,g)=>{const p=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(t);if(p)return e.push(p[1]),r.push(p[2]),s.push(!1),"(?:/(.*))?";const _=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(t);if(_)return e.push(_[1]),r.push(_[2]),s.push(!0),"(?:/([^/]+))?";const w=u===g.length-1;return t?"/"+t.split(/\[(.+?)\](?!\])/).map((j,A)=>{if(A%2){if(j.startsWith("x+"))return Oe(String.fromCharCode(parseInt(j.slice(2),16)));if(j.startsWith("u+"))return Oe(String.fromCharCode(...j.slice(2).split("-").map(te=>parseInt(te,16))));const C=St.exec(j);if(!C)throw new Error(`Invalid param: ${j}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,V,ie,Y,le]=C;return e.push(Y),r.push(le),s.push(!!V),ie?"(.*?)":V?"([^/]*)?":"([^/]+?)"}return w&&j.includes(".")&&(o=!1),Oe(j)}).join(""):void 0}).join("")}${o?"/?":""}$`),names:e,types:r,optional:s}}function It(n){return!/^\([^)]+\)$/.test(n)}function $t(n){return n.slice(1).split("/").filter(It)}function At(n,{names:e,types:r,optional:s},o){const m={};for(let t=0;t<e.length;t+=1){const u=e[t],g=r[t];let p=n[t+1];if(p||!s[t]){if(g){const _=o[g];if(!_)throw new Error(`Missing "${g}" param matcher`);if(!_(p))return}m[u]=p!=null?p:""}}return m}function Oe(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Pt(n,e,r,s){const o=new Set(e);return Object.entries(r).map(([u,[g,p,_]])=>{const{pattern:w,names:O,types:W,optional:j}=Lt(u),A={id:u,exec:C=>{const V=w.exec(C);if(V)return At(V,{names:O,types:W,optional:j},s)},errors:[1,..._||[]].map(C=>n[C]),layouts:[0,...p||[]].map(t),leaf:m(g)};return A.errors.length=A.layouts.length=Math.max(A.errors.length,A.layouts.length),A});function m(u){const g=u<0;return g&&(u=~u),[g,n[u]]}function t(u){return u===void 0?u:[o.has(u),n[u]]}}function jt(n){let e,r,s;var o=n[0][0];function m(t){return{props:{data:t[2],form:t[1]}}}return o&&(e=Z(o,m(n))),{c(){e&&Q(e.$$.fragment),r=z()},l(t){e&&Te(e.$$.fragment,t),r=z()},m(t,u){e&&x(e,t,u),H(t,r,u),s=!0},p(t,u){const g={};if(u&4&&(g.data=t[2]),u&2&&(g.form=t[1]),o!==(o=t[0][0])){if(e){me();const p=e;J(p.$$.fragment,1,0,()=>{ee(p,1)}),_e()}o?(e=Z(o,m(t)),Q(e.$$.fragment),G(e.$$.fragment,1),x(e,r.parentNode,r)):e=null}else o&&e.$set(g)},i(t){s||(e&&G(e.$$.fragment,t),s=!0)},o(t){e&&J(e.$$.fragment,t),s=!1},d(t){t&&K(r),e&&ee(e,t)}}}function Tt(n){let e,r,s;var o=n[0][0];function m(t){return{props:{data:t[2],$$slots:{default:[Nt]},$$scope:{ctx:t}}}}return o&&(e=Z(o,m(n))),{c(){e&&Q(e.$$.fragment),r=z()},l(t){e&&Te(e.$$.fragment,t),r=z()},m(t,u){e&&x(e,t,u),H(t,r,u),s=!0},p(t,u){const g={};if(u&4&&(g.data=t[2]),u&523&&(g.$$scope={dirty:u,ctx:t}),o!==(o=t[0][0])){if(e){me();const p=e;J(p.$$.fragment,1,0,()=>{ee(p,1)}),_e()}o?(e=Z(o,m(t)),Q(e.$$.fragment),G(e.$$.fragment,1),x(e,r.parentNode,r)):e=null}else o&&e.$set(g)},i(t){s||(e&&G(e.$$.fragment,t),s=!0)},o(t){e&&J(e.$$.fragment,t),s=!1},d(t){t&&K(r),e&&ee(e,t)}}}function Nt(n){let e,r,s;var o=n[0][1];function m(t){return{props:{data:t[3],form:t[1]}}}return o&&(e=Z(o,m(n))),{c(){e&&Q(e.$$.fragment),r=z()},l(t){e&&Te(e.$$.fragment,t),r=z()},m(t,u){e&&x(e,t,u),H(t,r,u),s=!0},p(t,u){const g={};if(u&8&&(g.data=t[3]),u&2&&(g.form=t[1]),o!==(o=t[0][1])){if(e){me();const p=e;J(p.$$.fragment,1,0,()=>{ee(p,1)}),_e()}o?(e=Z(o,m(t)),Q(e.$$.fragment),G(e.$$.fragment,1),x(e,r.parentNode,r)):e=null}else o&&e.$set(g)},i(t){s||(e&&G(e.$$.fragment,t),s=!0)},o(t){e&&J(e.$$.fragment,t),s=!1},d(t){t&&K(r),e&&ee(e,t)}}}function He(n){let e,r=n[5]&&Ye(n);return{c(){e=it("div"),r&&r.c(),this.h()},l(s){e=lt(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=ct(e);r&&r.l(o),o.forEach(K),this.h()},h(){Re(e,"id","svelte-announcer"),Re(e,"aria-live","assertive"),Re(e,"aria-atomic","true"),B(e,"position","absolute"),B(e,"left","0"),B(e,"top","0"),B(e,"clip","rect(0 0 0 0)"),B(e,"clip-path","inset(50%)"),B(e,"overflow","hidden"),B(e,"white-space","nowrap"),B(e,"width","1px"),B(e,"height","1px")},m(s,o){H(s,e,o),r&&r.m(e,null)},p(s,o){s[5]?r?r.p(s,o):(r=Ye(s),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(s){s&&K(e),r&&r.d()}}}function Ye(n){let e;return{c(){e=ft(n[6])},l(r){e=ut(r,n[6])},m(r,s){H(r,e,s)},p(r,s){s&64&&pt(e,r[6])},d(r){r&&K(e)}}}function Ut(n){let e,r,s,o,m;const t=[Tt,jt],u=[];function g(_,w){return _[0][1]?0:1}e=g(n),r=u[e]=t[e](n);let p=n[4]&&He(n);return{c(){r.c(),s=at(),p&&p.c(),o=z()},l(_){r.l(_),s=ot(_),p&&p.l(_),o=z()},m(_,w){u[e].m(_,w),H(_,s,w),p&&p.m(_,w),H(_,o,w),m=!0},p(_,[w]){let O=e;e=g(_),e===O?u[e].p(_,w):(me(),J(u[O],1,1,()=>{u[O]=null}),_e(),r=u[e],r?r.p(_,w):(r=u[e]=t[e](_),r.c()),G(r,1),r.m(s.parentNode,s)),_[4]?p?p.p(_,w):(p=He(_),p.c(),p.m(o.parentNode,o)):p&&(p.d(1),p=null)},i(_){m||(G(r),m=!0)},o(_){J(r),m=!1},d(_){u[e].d(_),_&&K(s),p&&p.d(_),_&&K(o)}}}function Dt(n,e,r){let{stores:s}=e,{page:o}=e,{components:m}=e,{form:t}=e,{data_0:u=null}=e,{data_1:g=null}=e;st(s.page.notify);let p=!1,_=!1,w=null;return Ie(()=>{const O=s.page.subscribe(()=>{p&&(r(5,_=!0),r(6,w=document.title||"untitled page"))});return r(4,p=!0),O}),n.$$set=O=>{"stores"in O&&r(7,s=O.stores),"page"in O&&r(8,o=O.page),"components"in O&&r(0,m=O.components),"form"in O&&r(1,t=O.form),"data_0"in O&&r(2,u=O.data_0),"data_1"in O&&r(3,g=O.data_1)},n.$$.update=()=>{n.$$.dirty&384&&s.page.set(o)},[m,t,u,g,p,_,w,s,o]}class Vt extends tt{constructor(e){super(),rt(this,e,Dt,Ut,nt,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const qt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Ct=function(n,e){return new URL(n,e).href},Xe={},U=function(e,r,s){if(!r||r.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(r.map(m=>{if(m=Ct(m,s),m in Xe)return;Xe[m]=!0;const t=m.endsWith(".css"),u=t?'[rel="stylesheet"]':"";if(!!s)for(let _=o.length-1;_>=0;_--){const w=o[_];if(w.href===m&&(!t||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${u}`))return;const p=document.createElement("link");if(p.rel=t?"stylesheet":qt,t||(p.as="script",p.crossOrigin=""),p.href=m,document.head.appendChild(p),t)return new Promise((_,w)=>{p.addEventListener("load",_),p.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${m}`)))})})).then(()=>e())},Bt={},we=[()=>U(()=>import("./chunks/0-942920fb.js"),["./chunks/0-942920fb.js","./chunks/_layout-8d2a742b.js","./components/layout.svelte-ce801f12.js","./chunks/index-94ae1f6d.js"],import.meta.url),()=>U(()=>import("./chunks/1-fbb1d7ce.js"),["./chunks/1-fbb1d7ce.js","./components/error.svelte-ba2a4598.js","./chunks/index-94ae1f6d.js","./chunks/singletons-ab66a008.js"],import.meta.url),()=>U(()=>import("./chunks/2-0fc2dfe6.js"),["./chunks/2-0fc2dfe6.js","./components/pages/_page.svelte-02bc03b7.js","./chunks/index-94ae1f6d.js","./chunks/Seo-fd8654ed.js","./assets/Seo-e99f0078.css","./assets/_page-22f2be2e.css"],import.meta.url),()=>U(()=>import("./chunks/3-7d08cc59.js"),["./chunks/3-7d08cc59.js","./components/pages/2d-midpoint-displacement/_page.svelte-95178ceb.js","./chunks/index-94ae1f6d.js","./chunks/Footer-1dc26ee9.js","./chunks/Seo-fd8654ed.js","./assets/Seo-e99f0078.css","./assets/Footer-4e080589.css","./chunks/DemoContainer-4346ca13.js","./assets/DemoContainer-ec9d78b9.css","./chunks/NumberRange-fce9b211.js","./assets/NumberRange-c777d2cc.css","./chunks/math-fcbdfd63.js","./chunks/gl-055e8196.js","./chunks/core-2382e8f7.js","./assets/_page-7c76b289.css"],import.meta.url),()=>U(()=>import("./chunks/4-7134d02f.js"),["./chunks/4-7134d02f.js","./components/pages/bilinear-image-resize/_page.svelte-87f71f56.js","./chunks/index-94ae1f6d.js","./chunks/Seo-fd8654ed.js","./assets/Seo-e99f0078.css","./chunks/Footer-1dc26ee9.js","./assets/Footer-4e080589.css","./chunks/DemoContainer-4346ca13.js","./assets/DemoContainer-ec9d78b9.css","./chunks/ImageSelect-d00fa4b4.js","./chunks/NumberRange-fce9b211.js","./assets/NumberRange-c777d2cc.css","./chunks/Checkbox-03d0a2e6.js","./assets/Checkbox-cb995005.css","./chunks/math-fcbdfd63.js","./assets/_page-53fdd47f.css"],import.meta.url),()=>U(()=>import("./chunks/5-c758b086.js"),["./chunks/5-c758b086.js","./components/pages/chip8-interpreter/_page.svelte-877f38a2.js","./chunks/index-94ae1f6d.js","./chunks/Footer-1dc26ee9.js","./chunks/Seo-fd8654ed.js","./assets/Seo-e99f0078.css","./assets/Footer-4e080589.css","./chunks/DemoContainer-4346ca13.js","./assets/DemoContainer-ec9d78b9.css","./assets/_page-9f1a508a.css"],import.meta.url),()=>U(()=>import("./chunks/6-be601460.js"),["./chunks/6-be601460.js","./components/pages/diamond-square/_page.svelte-de475e89.js","./chunks/index-94ae1f6d.js","./chunks/Seo-fd8654ed.js","./assets/Seo-e99f0078.css","./chunks/Footer-1dc26ee9.js","./assets/Footer-4e080589.css","./chunks/DemoContainer-4346ca13.js","./assets/DemoContainer-ec9d78b9.css","./chunks/NumberRange-fce9b211.js","./assets/NumberRange-c777d2cc.css","./chunks/math-fcbdfd63.js","./chunks/gl-055e8196.js","./chunks/core-2382e8f7.js","./assets/_page-7c76b289.css"],import.meta.url),()=>U(()=>import("./chunks/7-6e94505c.js"),["./chunks/7-6e94505c.js","./components/pages/domain-warping-1/_page.svelte-bc0fada5.js","./chunks/index-94ae1f6d.js","./chunks/Seo-fd8654ed.js","./assets/Seo-e99f0078.css","./chunks/Footer-1dc26ee9.js","./assets/Footer-4e080589.css","./chunks/DemoContainer-4346ca13.js","./assets/DemoContainer-ec9d78b9.css","./chunks/NumberRange-fce9b211.js","./assets/NumberRange-c777d2cc.css","./chunks/gl-055e8196.js","./assets/_page-53fdd47f.css"],import.meta.url),()=>U(()=>import("./chunks/8-2ae0e801.js"),["./chunks/8-2ae0e801.js","./components/pages/github-pages-action/_page.svelte-ce5f44f6.js","./chunks/index-94ae1f6d.js","./chunks/Seo-fd8654ed.js","./assets/Seo-e99f0078.css","./chunks/Footer-1dc26ee9.js","./assets/Footer-4e080589.css"],import.meta.url),()=>U(()=>import("./chunks/9-00047edd.js"),["./chunks/9-00047edd.js","./components/pages/lut/_page.svelte-2ec17570.js","./chunks/index-94ae1f6d.js","./chunks/Seo-fd8654ed.js","./assets/Seo-e99f0078.css","./chunks/Footer-1dc26ee9.js","./assets/Footer-4e080589.css","./chunks/DemoContainer-4346ca13.js","./assets/DemoContainer-ec9d78b9.css","./chunks/NumberRange-fce9b211.js","./assets/NumberRange-c777d2cc.css","./chunks/gl-055e8196.js","./assets/_page-bc689196.css"],import.meta.url),()=>U(()=>import("./chunks/10-5f42b358.js"),["./chunks/10-5f42b358.js","./components/pages/octree-color-quantization/_page.svelte-66b4cbf9.js","./chunks/index-94ae1f6d.js","./chunks/Footer-1dc26ee9.js","./chunks/Seo-fd8654ed.js","./assets/Seo-e99f0078.css","./assets/Footer-4e080589.css","./chunks/DemoContainer-4346ca13.js","./assets/DemoContainer-ec9d78b9.css","./chunks/ImageSelect-d00fa4b4.js","./chunks/NumberRange-fce9b211.js","./assets/NumberRange-c777d2cc.css","./chunks/core-2382e8f7.js","./assets/_page-53fdd47f.css"],import.meta.url),()=>U(()=>import("./chunks/11-ef31bc0e.js"),["./chunks/11-ef31bc0e.js","./components/pages/pixel-sorting/_page.svelte-6be58155.js","./chunks/index-94ae1f6d.js","./chunks/Seo-fd8654ed.js","./assets/Seo-e99f0078.css","./chunks/Footer-1dc26ee9.js","./assets/Footer-4e080589.css","./chunks/math-fcbdfd63.js","./chunks/DemoContainer-4346ca13.js","./assets/DemoContainer-ec9d78b9.css","./chunks/NumberRange-fce9b211.js","./assets/NumberRange-c777d2cc.css","./chunks/ImageSelect-d00fa4b4.js","./assets/_page-3fc388c2.css"],import.meta.url),()=>U(()=>import("./chunks/12-3313eab2.js"),["./chunks/12-3313eab2.js","./components/pages/poisson-disk-sampling/_page.svelte-51725062.js","./chunks/index-94ae1f6d.js","./chunks/Seo-fd8654ed.js","./assets/Seo-e99f0078.css","./chunks/Footer-1dc26ee9.js","./assets/Footer-4e080589.css","./chunks/math-fcbdfd63.js","./chunks/DemoContainer-4346ca13.js","./assets/DemoContainer-ec9d78b9.css","./chunks/NumberRange-fce9b211.js","./assets/NumberRange-c777d2cc.css","./chunks/Checkbox-03d0a2e6.js","./assets/Checkbox-cb995005.css","./assets/_page-0c7d8862.css"],import.meta.url),()=>U(()=>import("./chunks/13-957e0f27.js"),["./chunks/13-957e0f27.js","./components/pages/quad-without-vertices/_page.svelte-fd54d805.js","./chunks/index-94ae1f6d.js","./chunks/Seo-fd8654ed.js","./assets/Seo-e99f0078.css","./chunks/Footer-1dc26ee9.js","./assets/Footer-4e080589.css","./chunks/DemoContainer-4346ca13.js","./assets/DemoContainer-ec9d78b9.css","./chunks/gl-055e8196.js","./assets/_page-53fdd47f.css"],import.meta.url),()=>U(()=>import("./chunks/14-4ed25bf0.js"),["./chunks/14-4ed25bf0.js","./components/pages/quadtree-image-compression/_page.svelte-195615a3.js","./chunks/index-94ae1f6d.js","./chunks/Seo-fd8654ed.js","./assets/Seo-e99f0078.css","./chunks/Footer-1dc26ee9.js","./assets/Footer-4e080589.css","./chunks/DemoContainer-4346ca13.js","./assets/DemoContainer-ec9d78b9.css","./chunks/ImageSelect-d00fa4b4.js","./chunks/NumberRange-fce9b211.js","./assets/NumberRange-c777d2cc.css","./chunks/Checkbox-03d0a2e6.js","./assets/Checkbox-cb995005.css","./chunks/core-2382e8f7.js","./assets/_page-53fdd47f.css"],import.meta.url)],Ft=[],zt={"/":[2],"/2d-midpoint-displacement":[3],"/bilinear-image-resize":[4],"/chip8-interpreter":[5],"/diamond-square":[6],"/domain-warping-1":[7],"/github-pages-action":[8],"/lut":[9],"/octree-color-quantization":[10],"/pixel-sorting":[11],"/poisson-disk-sampling":[12],"/quad-without-vertices":[13],"/quadtree-image-compression":[14]},Jt={handleError:({error:n})=>{console.error(n)}};class Ae{constructor(e,r){this.status=e,typeof r=="string"?this.body={message:r}:r?this.body=r:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ze{constructor(e,r){this.status=e,this.location=r}}async function Gt(n){var e;for(const r in n)if(typeof((e=n[r])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([s,o])=>[s,await o])));return n}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Kt=-1,Wt=-2,Mt=-3,Ht=-4,Yt=-5,Xt=-6;function Zt(n){if(typeof n=="number")return s(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const e=n,r=Array(e.length);function s(o,m=!1){if(o===Kt)return;if(o===Mt)return NaN;if(o===Ht)return 1/0;if(o===Yt)return-1/0;if(o===Xt)return-0;if(m)throw new Error("Invalid input");if(o in r)return r[o];const t=e[o];if(!t||typeof t!="object")r[o]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":r[o]=new Date(t[1]);break;case"Set":const g=new Set;r[o]=g;for(let w=1;w<t.length;w+=1)g.add(s(t[w]));break;case"Map":const p=new Map;r[o]=p;for(let w=1;w<t.length;w+=2)p.set(s(t[w]),s(t[w+1]));break;case"RegExp":r[o]=new RegExp(t[1],t[2]);break;case"Object":r[o]=Object(t[1]);break;case"BigInt":r[o]=BigInt(t[1]);break;case"null":const _=Object.create(null);r[o]=_;for(let w=1;w<t.length;w+=2)_[t[w]]=s(t[w+1]);break}else{const u=new Array(t.length);r[o]=u;for(let g=0;g<t.length;g+=1){const p=t[g];p!==Wt&&(u[g]=s(p))}}else{const u={};r[o]=u;for(const g in t){const p=t[g];u[g]=s(p)}}return r[o]}return s(0)}const et="sveltekit:scroll",F="sveltekit:index",pe=Pt(we,Ft,zt,Bt),Pe=we[0],je=we[1];Pe();je();let se={};try{se=JSON.parse(sessionStorage[et])}catch{}function Se(n){se[n]=$e()}function Qt({target:n,base:e,trailing_slash:r}){var Je;const s=[];let o=null;const m={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},u=!1,g=!1,p=!0,_=!1,w=!1,O=!1,W=!1,j,A=(Je=history.state)==null?void 0:Je[F];A||(A=Date.now(),history.replaceState({...history.state,[F]:A},"",location.href));const C=se[A];C&&(history.scrollRestoration="manual",scrollTo(C.x,C.y));let V,ie,Y;async function le(){Y=Y||Promise.resolve(),await Y,Y=null;const a=new URL(location.href),l=ve(a,!0);o=null,await Ue(l,a,[])}async function te(a,{noScroll:l=!1,replaceState:c=!1,keepFocus:i=!1,state:f={},invalidateAll:d=!1},h,v){return typeof a=="string"&&(a=new URL(a,We(document))),Ee({url:a,scroll:l?$e():null,keepfocus:i,redirect_chain:h,details:{state:f,replaceState:c},nav_token:v,accepted:()=>{d&&(W=!0)},blocked:()=>{},type:"goto"})}async function Ne(a){const l=ve(a,!1);if(!l)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${a}`);return o={id:l.id,promise:qe(l).then(c=>(c.type==="loaded"&&c.state.error&&(o=null),c))},o.promise}async function Ue(a,l,c,i,f={},d){var v,E;ie=f;let h=a&&await qe(a);if(h||(h=await ze(l,{id:null},ae(new Error(`Not found: ${l.pathname}`),{url:l,params:{},route:{id:null}}),404)),l=(a==null?void 0:a.url)||l,ie!==f)return!1;if(h.type==="redirect")if(c.length>10||c.includes(l.pathname))h=await ce({status:500,error:ae(new Error("Redirect loop"),{url:l,params:{},route:{id:null}}),url:l,route:{id:null}});else return te(new URL(h.location,l).href,{},[...c,l.pathname],f),!1;else((E=(v=h.props)==null?void 0:v.page)==null?void 0:E.status)>=400&&await M.updated.check()&&await fe(l);if(s.length=0,W=!1,_=!0,i&&i.details){const{details:y}=i,b=y.replaceState?0:1;y.state[F]=A+=b,history[y.replaceState?"replaceState":"pushState"](y.state,"",l)}if(o=null,g){t=h.state,h.props.page&&(h.props.page.url=l);const y=he();j.$set(h.props),y()}else De(h);if(i){const{scroll:y,keepfocus:b}=i;if(b||Le(),await ue(),p){const L=l.hash&&document.getElementById(l.hash.slice(1));y?scrollTo(y.x,y.y):L?L.scrollIntoView():scrollTo(0,0)}}else await ue();p=!0,h.props.page&&(V=h.props.page),d&&d(),_=!1}function De(a){var f,d;t=a.state;const l=document.querySelector("style[data-sveltekit]");l&&l.remove(),V=a.props.page;const c=he();j=new Vt({target:n,props:{...a.props,stores:M},hydrate:!0}),c();const i={from:null,to:de("to",{params:t.params,route:{id:(d=(f=t.route)==null?void 0:f.id)!=null?d:null},url:new URL(location.href)}),willUnload:!1,type:"enter"};m.after_navigate.forEach(h=>h(i)),g=!0}async function re({url:a,params:l,branch:c,status:i,error:f,route:d,form:h}){var T;const v=c.filter(Boolean),E={type:"loaded",state:{url:a,params:l,branch:c,error:f,route:d},props:{components:v.map(S=>S.node.component)}};h!==void 0&&(E.props.form=h);let y={},b=!V;for(let S=0;S<v.length;S+=1){const N=v[S];y={...y,...N.data},(b||!t.branch.some(D=>D===N))&&(E.props[`data_${S}`]=y,b=b||Object.keys((T=N.data)!=null?T:{}).length>0)}if(b||(b=Object.keys(V.data).length!==Object.keys(y).length),!t.url||a.href!==t.url.href||t.error!==f||h!==void 0||b){E.props.page={error:f,params:l,route:d,status:i,url:a,form:h,data:b?y:V.data},Object.defineProperty(E.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const S=(N,D)=>{Object.defineProperty(E.props.page,N,{get:()=>{throw new Error(`$page.${N} has been replaced by $page.url.${D}`)}})};S("origin","origin"),S("path","pathname"),S("query","searchParams")}return E}async function ye({loader:a,parent:l,url:c,params:i,route:f,server_data_node:d}){var y,b,L,T,S;let h=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},E=await a();if((y=E.shared)!=null&&y.load){let N=function(...R){for(const q of R){const{href:k}=new URL(q,c);v.dependencies.add(k)}};const D={route:{get id(){return v.route=!0,f.id}},params:new Proxy(i,{get:(R,q)=>(v.params.add(q),R[q])}),data:(b=d==null?void 0:d.data)!=null?b:null,url:yt(c,()=>{v.url=!0}),async fetch(R,q){let k;R instanceof Request?(k=R.url,q={body:R.method==="GET"||R.method==="HEAD"?void 0:await R.blob(),cache:R.cache,credentials:R.credentials,headers:R.headers,integrity:R.integrity,keepalive:R.keepalive,method:R.method,mode:R.mode,redirect:R.redirect,referrer:R.referrer,referrerPolicy:R.referrerPolicy,signal:R.signal,...q}):k=R;const I=new URL(k,c).href;return N(I),g?Ot(k,I,q):Rt(k,q)},setHeaders:()=>{},depends:N,parent(){return v.parent=!0,l()}};Object.defineProperties(D,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),h=(L=await E.shared.load.call(null,D))!=null?L:null,h=h?await Gt(h):null}return{node:E,loader:a,server:d,shared:(T=E.shared)!=null&&T.load?{type:"data",data:h,uses:v}:null,data:(S=h!=null?h:d==null?void 0:d.data)!=null?S:null}}function Ve(a,l,c,i,f){if(W)return!0;if(!i)return!1;if(i.parent&&a||i.route&&l||i.url&&c)return!0;for(const d of i.params)if(f[d]!==t.params[d])return!0;for(const d of i.dependencies)if(s.some(h=>h(new URL(d))))return!0;return!1}function be(a,l){var c,i;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((c=a.uses.dependencies)!=null?c:[]),params:new Set((i=a.uses.params)!=null?i:[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&l!=null?l:null}async function qe({id:a,invalidating:l,url:c,params:i,route:f}){var q;if((o==null?void 0:o.id)===a)return o.promise;const{errors:d,layouts:h,leaf:v}=f,E=[...h,v];d.forEach(k=>k==null?void 0:k().catch(()=>{})),E.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let y=null;const b=t.url?a!==t.url.pathname+t.url.search:!1,L=t.route?a!==t.route.id:!1,T=E.reduce((k,I,P)=>{var ne;const $=t.branch[P],X=!!(I!=null&&I[0])&&(($==null?void 0:$.loader)!==I[1]||Ve(k.some(Boolean),L,b,(ne=$.server)==null?void 0:ne.uses,i));return k.push(X),k},[]);if(T.some(Boolean)){try{y=await Qe(c,T)}catch(k){return ce({status:500,error:ae(k,{url:c,params:i,route:{id:f.id}}),url:c,route:f})}if(y.type==="redirect")return y}const S=y==null?void 0:y.nodes;let N=!1;const D=E.map(async(k,I)=>{var ne;if(!k)return;const P=t.branch[I],$=S==null?void 0:S[I];if((!$||$.type==="skip")&&k[1]===(P==null?void 0:P.loader)&&!Ve(N,L,b,(ne=P.shared)==null?void 0:ne.uses,i))return P;if(N=!0,($==null?void 0:$.type)==="error")throw $;return ye({loader:k[1],url:c,params:i,route:f,parent:async()=>{var Ke;const Ge={};for(let ke=0;ke<I;ke+=1)Object.assign(Ge,(Ke=await D[ke])==null?void 0:Ke.data);return Ge},server_data_node:be($===void 0&&k[0]?{type:"skip"}:$!=null?$:null,P==null?void 0:P.server)})});for(const k of D)k.catch(()=>{});const R=[];for(let k=0;k<E.length;k+=1)if(E[k])try{R.push(await D[k])}catch(I){if(I instanceof Ze)return{type:"redirect",location:I.location};let P=500,$;S!=null&&S.includes(I)?(P=(q=I.status)!=null?q:P,$=I.error):I instanceof Ae?(P=I.status,$=I.body):$=ae(I,{params:i,url:c,route:{id:f.id}});const X=await Ce(k,R,d);return X?await re({url:c,params:i,branch:R.slice(0,X.idx).concat(X.node),status:P,error:$,route:f}):await ze(c,{id:f.id},$,P)}else R.push(void 0);return await re({url:c,params:i,branch:R,status:200,error:null,route:f,form:l?void 0:null})}async function Ce(a,l,c){for(;a--;)if(c[a]){let i=a;for(;!l[i];)i-=1;try{return{idx:i+1,node:{node:await c[a](),loader:c[a],data:{},server:null,shared:null}}}catch{continue}}}async function ce({status:a,error:l,url:c,route:i}){var y;const f={},d=await Pe();let h=null;if(d.server)try{const b=await Qe(c,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;h=(y=b.nodes[0])!=null?y:null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||u)&&await fe(c)}const v=await ye({loader:Pe,url:c,params:f,route:i,parent:()=>Promise.resolve({}),server_data_node:be(h)}),E={node:await je(),loader:je,shared:null,server:null,data:null};return await re({url:c,params:f,branch:[v,E],status:a,error:l,route:null})}function ve(a,l){if(Be(a))return;const c=_t(a.pathname.slice(e.length)||"/");for(const i of pe){const f=i.exec(c);if(f){const d=new URL(a.origin+mt(a.pathname,r)+a.search+a.hash);return{id:d.pathname+d.search,invalidating:l,route:i,params:gt(f),url:d}}}}function Be(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}function Fe({url:a,type:l,intent:c,delta:i}){var v,E,y,b,L;let f=!1;const d={from:de("from",{params:t.params,route:{id:(E=(v=t.route)==null?void 0:v.id)!=null?E:null},url:t.url}),to:de("to",{params:(y=c==null?void 0:c.params)!=null?y:null,route:{id:(L=(b=c==null?void 0:c.route)==null?void 0:b.id)!=null?L:null},url:a}),willUnload:!c,type:l};i!==void 0&&(d.delta=i);const h={...d,cancel:()=>{f=!0}};return w||m.before_navigate.forEach(T=>T(h)),f?null:d}async function Ee({url:a,scroll:l,keepfocus:c,redirect_chain:i,details:f,type:d,delta:h,nav_token:v,accepted:E,blocked:y}){const b=ve(a,!1),L=Fe({url:a,type:d,delta:h,intent:b});if(!L){y();return}Se(A),E(),w=!0,g&&M.navigating.set(L),await Ue(b,a,i,{scroll:l,keepfocus:c,details:f},v,()=>{w=!1,m.after_navigate.forEach(T=>T(L)),M.navigating.set(null)})}async function ze(a,l,c,i){return a.origin===location.origin&&a.pathname===location.pathname&&!u?await ce({status:i,error:c,url:a,route:l}):await fe(a)}function fe(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{Ie(()=>(m.after_navigate.push(a),()=>{const l=m.after_navigate.indexOf(a);m.after_navigate.splice(l,1)}))},before_navigate:a=>{Ie(()=>(m.before_navigate.push(a),()=>{const l=m.before_navigate.indexOf(a);m.before_navigate.splice(l,1)}))},disable_scroll_handling:()=>{(_||!g)&&(p=!1)},goto:(a,l={})=>{if("keepfocus"in l&&!("keepFocus"in l))throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in l&&!("noScroll"in l))throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return te(a,l,[])},invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")s.push(a);else{const{href:l}=new URL(a,location.href);s.push(c=>c.href===l)}return le()},invalidateAll:()=>(W=!0,le()),prefetch:async a=>{const l=new URL(a,We(document));await Ne(l)},prefetch_routes:async a=>{const c=(a?pe.filter(i=>a.some(f=>i.exec(f))):pe).map(i=>Promise.all([...i.layouts,i.leaf].map(f=>f==null?void 0:f[1]())));await Promise.all(c)},apply_action:async a=>{if(a.type==="error"){const l=new URL(location.href),{branch:c,route:i}=t;if(!i)return;const f=await Ce(t.branch.length,c,i.errors);if(f){const d=await re({url:l,params:t.params,branch:c.slice(0,f.idx).concat(f.node),status:500,error:a.error,route:i});t=d.state;const h=he();j.$set(d.props),h(),ue().then(Le)}}else if(a.type==="redirect")te(a.location,{invalidateAll:!0},[]);else{const l={form:a.data,page:{...V,form:a.data,status:a.status}},c=he();j.$set(l),c(),a.type==="success"&&ue().then(Le)}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var d,h;let f=!1;if(!w){const v={from:de("from",{params:t.params,route:{id:(h=(d=t.route)==null?void 0:d.id)!=null?h:null},url:t.url}),to:null,willUnload:!0,type:"leave",cancel:()=>f=!0};m.before_navigate.forEach(E=>E(v))}f?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Se(A);try{sessionStorage[et]=JSON.stringify(se)}catch{}}});const a=i=>{const{url:f,options:d,has:h}=Me(i);if(f&&d.prefetch&&!Be(f)){if(d.reload||h.rel_external||h.target||h.download)return;Ne(f)}};let l;const c=i=>{clearTimeout(l),l=setTimeout(()=>{var f;(f=i.target)==null||f.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",c),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:f,url:d,options:h,has:v}=Me(i);if(!f||!d||!(f instanceof SVGAElement)&&d.protocol!==location.protocol&&!(d.protocol==="https:"||d.protocol==="http:")||v.download)return;if(h.reload||v.rel_external||v.target){Fe({url:d,type:"link"})||i.preventDefault(),w=!0;return}const[y,b]=d.href.split("#");if(b!==void 0&&y===location.href.split("#")[0]){O=!0,Se(A),t.url=d,M.page.set({...V,url:d}),M.page.notify();return}Ee({url:d,scroll:h.noscroll?$e():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:d.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),addEventListener("popstate",i=>{if(i.state){if(i.state[F]===A)return;const f=i.state[F]-A;Ee({url:new URL(location.href),scroll:se[i.state[F]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{A=i.state[F]},blocked:()=>{history.go(-f)},type:"popstate",delta:f})}}),addEventListener("hashchange",()=>{O&&(O=!1,history.replaceState({...history.state,[F]:++A},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&M.navigating.set(null)})},_hydrate:async({status:a,error:l,node_ids:c,params:i,route:f,data:d,form:h})=>{var y;u=!0;const v=new URL(location.href);let E;try{const b=c.map(async(L,T)=>{const S=d[T];return ye({loader:we[L],url:v,params:i,route:f,parent:async()=>{const N={};for(let D=0;D<T;D+=1)Object.assign(N,(await b[D]).data);return N},server_data_node:be(S)})});E=await re({url:v,params:i,branch:await Promise.all(b),status:a,error:l,form:h,route:(y=pe.find(({id:L})=>L===f.id))!=null?y:null})}catch(b){if(b instanceof Ze){await fe(new URL(b.location,location.href));return}E=await ce({status:b instanceof Ae?b.status:500,error:ae(b,{url:v,params:i,route:f}),url:v,route:f})}De(E)}}}async function Qe(n,e){var m;const r=new URL(n);r.pathname=Et(n.pathname);const s=await ge(r.href,{headers:{"x-sveltekit-invalidated":e.map(t=>t?"1":"").join(",")}}),o=await s.json();if(!s.ok)throw new Error(o);return(m=o.nodes)==null||m.forEach(t=>{var u,g;(t==null?void 0:t.type)==="data"&&(t.data=Zt(t.data),t.uses={dependencies:new Set((u=t.uses.dependencies)!=null?u:[]),params:new Set((g=t.uses.params)!=null?g:[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),o}function ae(n,e){var r;return n instanceof Ae?n.body:(r=Jt.handleError({error:n,event:e}))!=null?r:{message:e.route.id!=null?"Internal Error":"Not Found"}}const xt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function de(n,e){for(const r of xt)Object.defineProperty(e,r,{get(){throw new Error(`The navigation shape changed - ${n}.${r} should now be ${n}.url.${r}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${n}.routeId should now be ${n}.route.id`)},enumerable:!1}),e}function he(){return()=>{}}function Le(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const e=document.body,r=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var s;(s=getSelection())==null||s.removeAllRanges()}),r!==null?e.setAttribute("tabindex",r):e.removeAttribute("tabindex")}}async function rr({env:n,hydrate:e,paths:r,target:s,trailing_slash:o}){dt(r);const m=Qt({target:s,base:r.base,trailing_slash:o});ht({client:m}),e?await m._hydrate(e):m.goto(location.href,{replaceState:!0}),m._start_router()}export{rr as start};
