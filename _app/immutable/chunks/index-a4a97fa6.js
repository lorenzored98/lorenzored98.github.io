function $(){}function F(t,n){for(const e in n)t[e]=n[e];return t}function k(t){return t()}function C(){return Object.create(null)}function p(t){t.forEach(k)}function D(t){return typeof t=="function"}function ct(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function I(t){return Object.keys(t).length===0}function R(t,...n){if(t==null)return $;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function st(t,n,e){t.$$.on_destroy.push(R(n,e))}function ot(t,n,e,i){if(t){const r=B(t,n,e,i);return t[0](r)}}function B(t,n,e,i){return t[1]&&i?F(e.ctx.slice(),t[1](i(n))):e.ctx}function lt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],u=Math.max(n.dirty.length,r.length);for(let o=0;o<u;o+=1)l[o]=n.dirty[o]|r[o];return l}return n.dirty|r}return n.dirty}function ft(t,n,e,i,r,l){if(r){const u=B(n,e,i,l);t.p(u,r)}}function at(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function _t(t){return t==null?"":t}let w=!1;function W(){w=!0}function G(){w=!1}function J(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function K(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let s=0;s<n.length;s++){const a=n[s];a.claim_order!==void 0&&c.push(a)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const s=n[c].claim_order,a=(r>0&&n[e[r]].claim_order<=s?r+1:J(1,r,y=>n[e[y]].claim_order,s))-1;i[c]=e[a]+1;const f=a+1;e[f]=c,r=Math.max(f,r)}const l=[],u=[];let o=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(l.push(n[c-1]);o>=c;o--)u.push(n[o]);o--}for(;o>=0;o--)u.push(n[o]);l.reverse(),u.sort((c,s)=>c.claim_order-s.claim_order);for(let c=0,s=0;c<u.length;c++){for(;s<l.length&&u[c].claim_order>=l[s].claim_order;)s++;const a=s<l.length?l[s]:null;t.insertBefore(u[c],a)}}function Q(t,n){if(w){for(K(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function dt(t,n,e){w&&!e?Q(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function U(t){t.parentNode.removeChild(t)}function V(t){return document.createElement(t)}function X(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function ht(){return S(" ")}function mt(){return S("")}function pt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function yt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function gt(t){return t===""?null:+t}function Y(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function H(t,n,e,i,r=!1){Z(t);const l=(()=>{for(let u=t.claim_info.last_index;u<t.length;u++){const o=t[u];if(n(o)){const c=e(o);return c===void 0?t.splice(u,1):t[u]=c,r||(t.claim_info.last_index=u),o}}for(let u=t.claim_info.last_index-1;u>=0;u--){const o=t[u];if(n(o)){const c=e(o);return c===void 0?t.splice(u,1):t[u]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=u,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function L(t,n,e,i){return H(t,r=>r.nodeName===n,r=>{const l=[];for(let u=0;u<r.attributes.length;u++){const o=r.attributes[u];e[o.name]||l.push(o.name)}l.forEach(u=>r.removeAttribute(u))},()=>i(n))}function xt(t,n,e){return L(t,n,e,V)}function bt(t,n,e){return L(t,n,e,X)}function tt(t,n){return H(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function $t(t){return tt(t," ")}function wt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function vt(t,n){t.value=n==null?"":n}function Et(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Nt(t,n){for(let e=0;e<t.options.length;e+=1){const i=t.options[e];if(i.__value===n){i.selected=!0;return}}t.selectedIndex=-1}function At(t){const n=t.querySelector(":checked")||t.options[0];return n&&n.__value}function St(t,n){const e=[];let i=0;for(const r of n.childNodes)if(r.nodeType===8){const l=r.textContent.trim();l===`HEAD_${t}_END`?(i-=1,e.push(r)):l===`HEAD_${t}_START`&&(i+=1,e.push(r))}else i>0&&e.push(r);return e}function jt(t,n){return new t(n)}let m;function h(t){m=t}function O(){if(!m)throw new Error("Function called outside component initialization");return m}function Tt(t){O().$$.on_mount.push(t)}function Ct(t){O().$$.after_update.push(t)}const d=[],M=[],x=[],E=[],P=Promise.resolve();let N=!1;function q(){N||(N=!0,P.then(z))}function Mt(){return q(),P}function A(t){x.push(t)}function kt(t){E.push(t)}const v=new Set;let g=0;function z(){const t=m;do{for(;g<d.length;){const n=d[g];g++,h(n),nt(n.$$)}for(h(null),d.length=0,g=0;M.length;)M.pop()();for(let n=0;n<x.length;n+=1){const e=x[n];v.has(e)||(v.add(e),e())}x.length=0}while(d.length);for(;E.length;)E.pop()();N=!1,v.clear(),h(t)}function nt(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const b=new Set;let _;function Dt(){_={r:0,c:[],p:_}}function Bt(){_.r||p(_.c),_=_.p}function et(t,n){t&&t.i&&(b.delete(t),t.i(n))}function Ht(t,n,e,i){if(t&&t.o){if(b.has(t))return;b.add(t),_.c.push(()=>{b.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Lt(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function Ot(t){t&&t.c()}function Pt(t,n){t&&t.l(n)}function it(t,n,e,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(n,e),i||A(()=>{const u=t.$$.on_mount.map(k).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...u):p(u),t.$$.on_mount=[]}),l.forEach(A)}function rt(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ut(t,n){t.$$.dirty[0]===-1&&(d.push(t),q(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function qt(t,n,e,i,r,l,u,o=[-1]){const c=m;h(t);const s=t.$$={fragment:null,ctx:[],props:l,update:$,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:C(),dirty:o,skip_bound:!1,root:n.target||c.$$.root};u&&u(s.root);let a=!1;if(s.ctx=e?e(t,n.props||{},(f,y,...j)=>{const T=j.length?j[0]:y;return s.ctx&&r(s.ctx[f],s.ctx[f]=T)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](T),a&&ut(t,f)),y}):[],s.update(),a=!0,p(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){W();const f=Y(n.target);s.fragment&&s.fragment.l(f),f.forEach(U)}else s.fragment&&s.fragment.c();n.intro&&et(t.$$.fragment),it(t,n.target,n.anchor,n.customElement),G(),z()}h(c)}class zt{$destroy(){rt(this,1),this.$destroy=$}$on(n,e){if(!D(e))return $;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!I(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Mt as A,$ as B,ot as C,ft as D,at as E,lt as F,Q as G,st as H,St as I,M as J,Lt as K,pt as L,kt as M,vt as N,D as O,p as P,gt as Q,A as R,zt as S,Nt as T,At as U,X as V,bt as W,_t as X,ht as a,dt as b,$t as c,Bt as d,mt as e,et as f,Dt as g,U as h,qt as i,Ct as j,V as k,xt as l,Y as m,yt as n,Tt as o,Et as p,S as q,tt as r,ct as s,Ht as t,wt as u,jt as v,Ot as w,Pt as x,it as y,rt as z};
