function w(){}function I(t,e){for(const n in e)t[n]=e[n];return t}function T(t){return t()}function C(){return Object.create(null)}function g(t){t.forEach(T)}function D(t){return typeof t=="function"}function st(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let b;function at(t,e){return b||(b=document.createElement("a")),b.href=e,t===b.href}function R(t){return Object.keys(t).length===0}function W(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ft(t,e,n){t.$$.on_destroy.push(W(e,n))}function dt(t,e,n,i){if(t){const r=O(t,e,n,i);return t[0](r)}}function O(t,e,n,i){return t[1]&&i?I(n.ctx.slice(),t[1](i(e))):n.ctx}function _t(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],u=Math.max(e.dirty.length,r.length);for(let o=0;o<u;o+=1)s[o]=e.dirty[o]|r[o];return s}return e.dirty|r}return e.dirty}function ht(t,e,n,i,r,s){if(r){const u=O(e,n,i,s);t.p(u,r)}}function mt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function pt(t){return t??""}let v=!1;function G(){v=!0}function J(){v=!1}function K(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const f=e[c];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,f=(r>0&&e[n[r]].claim_order<=c?r+1:K(1,r,x=>e[n[x]].claim_order,c))-1;i[l]=n[f]+1;const a=f+1;n[a]=l,r=Math.max(a,r)}const s=[],u=[];let o=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(s.push(e[l-1]);o>=l;o--)u.push(e[o]);o--}for(;o>=0;o--)u.push(e[o]);s.reverse(),u.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<u.length;l++){for(;c<s.length&&u[l].claim_order>=s[c].claim_order;)c++;const f=c<s.length?s[c]:null;t.insertBefore(u[l],f)}}function U(t,e){if(v){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function yt(t,e,n){v&&!n?U(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function gt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function xt(){return j(" ")}function bt(){return j("")}function $t(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function wt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function vt(t){return t===""?null:+t}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,e,n,i,r=!1){tt(t);const s=(()=>{for(let u=t.claim_info.last_index;u<t.length;u++){const o=t[u];if(e(o)){const l=n(o);return l===void 0?t.splice(u,1):t[u]=l,r||(t.claim_info.last_index=u),o}}for(let u=t.claim_info.last_index-1;u>=0;u--){const o=t[u];if(e(o)){const l=n(o);return l===void 0?t.splice(u,1):t[u]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=u,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function H(t,e,n,i){return B(t,r=>r.nodeName===e,r=>{const s=[];for(let u=0;u<r.attributes.length;u++){const o=r.attributes[u];n[o.name]||s.push(o.name)}s.forEach(u=>r.removeAttribute(u))},()=>i(e))}function Et(t,e,n){return H(t,e,n,X)}function Nt(t,e,n){return H(t,e,n,Y)}function et(t,e){return B(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>j(e),!0)}function St(t){return et(t," ")}function At(t,e){e=""+e,t.data!==e&&(t.data=e)}function jt(t,e){t.value=e??""}function kt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function qt(t,e,n){for(let i=0;i<t.options.length;i+=1){const r=t.options[i];if(r.__value===e){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Ct(t){const e=t.querySelector(":checked");return e&&e.__value}function Mt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const s=r.textContent.trim();s===`HEAD_${t}_END`?(i-=1,n.push(r)):s===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Tt(t,e){return new t(e)}let y;function p(t){y=t}function L(){if(!y)throw new Error("Function called outside component initialization");return y}function Dt(t){L().$$.on_mount.push(t)}function Ot(t){L().$$.after_update.push(t)}const h=[],M=[];let m=[];const N=[],P=Promise.resolve();let S=!1;function z(){S||(S=!0,P.then(F))}function Bt(){return z(),P}function A(t){m.push(t)}function Ht(t){N.push(t)}const E=new Set;let _=0;function F(){if(_!==0)return;const t=y;do{try{for(;_<h.length;){const e=h[_];_++,p(e),nt(e.$$)}}catch(e){throw h.length=0,_=0,e}for(p(null),h.length=0,_=0;M.length;)M.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];E.has(n)||(E.add(n),n())}m.length=0}while(h.length);for(;N.length;)N.pop()();S=!1,E.clear(),p(t)}function nt(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}function it(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const $=new Set;let d;function Lt(){d={r:0,c:[],p:d}}function Pt(){d.r||g(d.c),d=d.p}function rt(t,e){t&&t.i&&($.delete(t),t.i(e))}function zt(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),d.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const ut=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...ut];function Ft(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function It(t){t&&t.c()}function Rt(t,e){t&&t.l(e)}function lt(t,e,n,i){const{fragment:r,after_update:s}=t.$$;r&&r.m(e,n),i||A(()=>{const u=t.$$.on_mount.map(T).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...u):g(u),t.$$.on_mount=[]}),s.forEach(A)}function ct(t,e){const n=t.$$;n.fragment!==null&&(it(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ot(t,e){t.$$.dirty[0]===-1&&(h.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Wt(t,e,n,i,r,s,u,o=[-1]){const l=y;p(t);const c=t.$$={fragment:null,ctx:[],props:s,update:w,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:C(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};u&&u(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(a,x,...k)=>{const q=k.length?k[0]:x;return c.ctx&&r(c.ctx[a],c.ctx[a]=q)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](q),f&&ot(t,a)),x}):[],c.update(),f=!0,g(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){G();const a=Z(e.target);c.fragment&&c.fragment.l(a),a.forEach(V)}else c.fragment&&c.fragment.c();e.intro&&rt(t.$$.fragment),lt(t,e.target,e.anchor,e.customElement),J(),F()}p(l)}class Gt{$destroy(){ct(this,1),this.$destroy=w}$on(e,n){if(!D(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!R(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Bt as A,w as B,dt as C,ht as D,mt as E,_t as F,U as G,ft as H,M as I,Ft as J,$t as K,Ht as L,A as M,qt as N,g as O,Ct as P,at as Q,gt as R,Gt as S,Mt as T,jt as U,D as V,vt as W,Y as X,Nt as Y,pt as Z,xt as a,yt as b,St as c,Pt as d,bt as e,rt as f,Lt as g,V as h,Wt as i,Ot as j,X as k,Et as l,Z as m,wt as n,Dt as o,kt as p,j as q,et as r,st as s,zt as t,At as u,Tt as v,It as w,Rt as x,lt as y,ct as z};
