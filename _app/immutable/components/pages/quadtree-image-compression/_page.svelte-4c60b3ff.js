import{S as pe,i as $e,s as _e,w as W,x as P,y as T,f as R,t as H,z as F,o as be,k as A,l as x,m as N,h as w,n as V,b as re,B as ve,J as ue,K as me,q as O,a as G,r as j,c as K,G as b,u as he,M as de}from"../../../chunks/index-3b14b416.js";import{M as we,S as Ie,T as Ce}from"../../../chunks/Main-bd282878.js";import{S as ke}from"../../../chunks/Seo-3503e59c.js";import{D as Ee}from"../../../chunks/DemoContainer-7bda57f4.js";import{I as De}from"../../../chunks/ImageSelect-5128dae4.js";import{N as ge}from"../../../chunks/NumberRange-cdc40157.js";import{C as Se}from"../../../chunks/Checkbox-56902f8d.js";import{d as ze}from"../../../chunks/core-ddcb889b.js";function Le(l){let e;return{c(){e=A("canvas"),this.h()},l(n){e=x(n,"CANVAS",{slot:!0,class:!0}),N(e).forEach(w),this.h()},h(){V(e,"slot","canvas"),V(e,"class","svelte-10p45u9")},m(n,t){re(n,e,t),l[13](e)},p:ve,d(n){n&&w(e),l[13](null)}}}function Me(l){let e,n,t,h,r,m,u,s,d,S,C,E,Y,J,ie,te,M,U,oe,B,X,le,ce,y,fe,p,o,a,i,f;function g(c){l[8](c)}let v={id:"depth",min:Qe,max:Be,step:1,onChange:l[7]};l[3]!==void 0&&(v.value=l[3]),s=new ge({props:v}),ue.push(()=>me(s,"value",g));function Z(c){l[9](c)}let q={id:"colordifference",min:qe,max:Ae,step:.01,onChange:l[7]};l[5]!==void 0&&(q.value=l[5]),M=new ge({props:q}),ue.push(()=>me(M,"value",Z));function ne(c){l[10](c)}let z={id:"showbounds",onChange:l[6]};l[4]!==void 0&&(z.checked=l[4]),y=new Se({props:z}),ue.push(()=>me(y,"checked",ne));function k(c){l[12](c)}let se={id:"image-select",onChange:l[11]};return l[2]!==void 0&&(se.value=l[2]),a=new De({props:se}),ue.push(()=>me(a,"value",k)),{c(){e=A("fieldset"),n=A("div"),t=A("label"),h=O("Depth: ("),r=O(l[3]),m=O(")"),u=G(),W(s.$$.fragment),S=G(),C=A("div"),E=A("label"),Y=O("Color Diff: ("),J=O(l[5]),ie=O(")"),te=G(),W(M.$$.fragment),oe=G(),B=A("div"),X=A("label"),le=O("Show Bounds"),ce=G(),W(y.$$.fragment),p=G(),o=A("div"),W(a.$$.fragment),this.h()},l(c){e=x(c,"FIELDSET",{slot:!0});var $=N(e);n=x($,"DIV",{class:!0});var I=N(n);t=x(I,"LABEL",{for:!0});var _=N(t);h=j(_,"Depth: ("),r=j(_,l[3]),m=j(_,")"),_.forEach(w),u=K(I),P(s.$$.fragment,I),I.forEach(w),S=K($),C=x($,"DIV",{class:!0});var D=N(C);E=x(D,"LABEL",{for:!0});var L=N(E);Y=j(L,"Color Diff: ("),J=j(L,l[5]),ie=j(L,")"),L.forEach(w),te=K(D),P(M.$$.fragment,D),D.forEach(w),oe=K($),B=x($,"DIV",{class:!0});var ee=N(B);X=x(ee,"LABEL",{for:!0});var ae=N(X);le=j(ae,"Show Bounds"),ae.forEach(w),ce=K(ee),P(y.$$.fragment,ee),ee.forEach(w),p=K($),o=x($,"DIV",{class:!0});var Q=N(o);P(a.$$.fragment,Q),Q.forEach(w),$.forEach(w),this.h()},h(){V(t,"for","depth"),V(n,"class","demo-input-group"),V(E,"for","colordifference"),V(C,"class","demo-input-group"),V(X,"for","showbounds"),V(B,"class","demo-input-group"),V(o,"class","demo-input-group"),V(e,"slot","controls")},m(c,$){re(c,e,$),b(e,n),b(n,t),b(t,h),b(t,r),b(t,m),b(n,u),T(s,n,null),b(e,S),b(e,C),b(C,E),b(E,Y),b(E,J),b(E,ie),b(C,te),T(M,C,null),b(e,oe),b(e,B),b(B,X),b(X,le),b(B,ce),T(y,B,null),b(e,p),b(e,o),T(a,o,null),f=!0},p(c,$){(!f||$&8)&&he(r,c[3]);const I={};!d&&$&8&&(d=!0,I.value=c[3],de(()=>d=!1)),s.$set(I),(!f||$&32)&&he(J,c[5]);const _={};!U&&$&32&&(U=!0,_.value=c[5],de(()=>U=!1)),M.$set(_);const D={};!fe&&$&16&&(fe=!0,D.checked=c[4],de(()=>fe=!1)),y.$set(D);const L={};$&6&&(L.onChange=c[11]),!i&&$&4&&(i=!0,L.value=c[2],de(()=>i=!1)),a.$set(L)},i(c){f||(R(s.$$.fragment,c),R(M.$$.fragment,c),R(y.$$.fragment,c),R(a.$$.fragment,c),f=!0)},o(c){H(s.$$.fragment,c),H(M.$$.fragment,c),H(y.$$.fragment,c),H(a.$$.fragment,c),f=!1},d(c){c&&w(e),F(s),F(M),F(y),F(a)}}}function ye(l){let e,n;return e=new Ee({props:{caption:"Quadtree Image Compression",id:"quadtree-image-compression-demo",$$slots:{controls:[Me],canvas:[Le]},$$scope:{ctx:l}}}),{c(){W(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,h){T(e,t,h),n=!0},p(t,[h]){const r={};h&8388671&&(r.$$scope={dirty:h,ctx:t}),e.$set(r)},i(t){n||(R(e.$$.fragment,t),n=!0)},o(t){H(e.$$.fragment,t),n=!1},d(t){F(e,t)}}}const Qe=1,Be=8,qe=0,Ae=.3;function xe(l,e,n,t,h,r){const m=(e-l)/255,u=(t-n)/255,s=(r-h)/255;return Math.sqrt(m*m+u*u+s*s)}function Ne(l,e,n){let t=0,h,r,m,u=0,s=0,d,S,C="/images/ukiyo-e.webp",E=6,Y=!0,J=.1;class ie{constructor(o,a,i=Number.POSITIVE_INFINITY){this.node=new te(o,a),this.depth=i}insert(o,a=this.node){if(a.children===null)if(a.data){if(a.data[0]===o[0]&&a.data[1]===o[1])return;if(this.getDepth(a)>=this.depth)a.data.push(o[2],o[3],o[4]);else{const g=[...a.data];a.data=null,a.divide();for(let v=0;v<a.children.length;v++)a.children[v].data=[...g];this.insert(o,a)}}else a.data=[o[2],o[3],o[4]];else{const f=this.getIndex(a.center,o);this.insert(o,a.children[f])}}getIndex(o,a){let i=0;return i|=o[0]>a[0]?0:1,i|=o[1]>a[1]?0:2,i}getDepth(o){const a=this.node.size[0];let i=o.size[0],f=0;for(;a>i;)i*=2,f++;return f}}class te{constructor(o,a){this.center=o,this.size=a,this.children=null,this.data=null}divide(){this.children=new Array(4);for(let o=0;o<this.children.length;o++){const a=[...this.center],i=this.size[0]*.25,f=this.size[1]*.25;(o&1)===1?a[0]+=i:a[0]-=i,(o&2)===2?a[1]+=f:a[1]-=f,this.children[o]=new te(a,[this.size[0]*.5,this.size[1]*.5])}}}be(()=>{m=r.getContext("2d"),h=document.getElementById("quadtree-image-compression-demo"),t=Math.floor(window.innerWidth);function p(){const a=Math.floor(window.innerWidth);a!==t&&(t=a,o())}function o(){const a=h.clientWidth,i=window.innerHeight-window.innerHeight/4;if(u=d.width,s=d.height,a>0&&i>0){if(u>a){const f=a/u;u*=f,s*=f}if(s>i){const f=i/s;u*=f,s*=f}u=Math.floor(u),s=Math.floor(s)}n(0,r.width=u,r),n(0,r.height=s,r),n(0,r.style.width=`${u}px`,r),n(0,r.style.height=`${s}px`,r),M()}return n(1,d=new Image),n(1,d.crossOrigin="anonymous",d),n(1,d.onload=o,d),n(1,d.src=C,d),window.addEventListener("resize",p,{passive:!0}),()=>{window.removeEventListener("resize",p)}});function M(){const p=document.createElement("canvas"),o=p.getContext("2d");p.width=u,p.height=s,!(u===0||s===0)&&(o.drawImage(d,0,0,d.width,d.height,0,0,u,s),S=o.getImageData(0,0,u,s).data,U())}function U(){const p=new ie([u/2,s/2],[u,s],E),o=i=>{const{center:f,size:g}=i;if(Y&&(m.lineWidth=1,m.strokeStyle="black",m.fillStyle="black",m.strokeRect(f[0]-g[0]/2,f[1]-g[1]/2,g[0],g[1])),i.data){let v=0,Z=0,q=0;for(let k=0;k<i.data.length;k+=3)v+=i.data[k],Z+=i.data[k+1],q+=i.data[k+2];const ne=i.data.length/3;v/=ne,Z/=ne,q/=ne;const z=`rgb(${v},${Z},${q})`;m.fillStyle=z,m.strokeStyle=z,m.fillRect(f[0]-g[0]/2,f[1]-g[1]/2,g[0],g[1]),m.strokeRect(f[0]-g[0]/2,f[1]-g[1]/2,g[0],g[1])}if(i.children)for(let v=0;v<i.children.length;v++)o(i.children[v])};for(let i=0;i<S.length;i+=4){const f=i/4%u,g=Math.floor(i/4/u);p.insert([f,g,S[i],S[i+1],S[i+2]])}const a=(i,f)=>{let g=i,v=!1;const Z=(q,ne=0)=>{if(q.children)g=q,q.children.forEach((z,k)=>Z(z,k));else{if(!g.children||ne!==3)return;let z=0,k=0,se=0,c=0;for(let I=0;I<g.children.length;I++){const _=g.children[I],D=_.data.length/3;c+=D;let L=0,ee=0,ae=0;for(let Q=0;Q<_.data.length;Q+=3)z+=_.data[Q],k+=_.data[Q+1],se+=_.data[Q+2],L+=_.data[Q],ee+=_.data[Q+1],ae+=_.data[Q+2];L/=D,ee/=D,ae/=D,_.data=[L,ee,ae]}z/=c,k/=c,se/=c;let $=!0;for(let I=0;I<g.children.length;I++){const _=g.children[I].data;xe(z,_[0],k,_[1],se,_[2])>f&&($=!1)}$&&(v=!0,g.children=null,g.data=[z,k,se])}};Z(i),v&&a(i,f)};a(p.node,J),o(p.node)}const oe=ze(U,200);function B(p){E=p,n(3,E)}function X(p){J=p,n(5,J)}function le(p){Y=p,n(4,Y)}const ce=()=>{n(1,d.src=C,d),U()};function y(p){C=p,n(2,C)}function fe(p){ue[p?"unshift":"push"](()=>{r=p,n(0,r)})}return[r,d,C,E,Y,J,U,oe,B,X,le,ce,y,fe]}class Ve extends pe{constructor(e){super(),$e(this,e,Ne,ye,_e,{})}}function We(l){let e;return{c(){e=O("Quadtree Image Compression")},l(n){e=j(n,"Quadtree Image Compression")},m(n,t){re(n,e,t)},d(n){n&&w(e)}}}function Pe(l){let e,n,t,h,r,m,u;return e=new Ce({props:{timestamp:1652155200,$$slots:{default:[We]},$$scope:{ctx:l}}}),m=new Ve({}),{c(){W(e.$$.fragment),n=G(),t=A("p"),h=O(`I'm noticing seams at higher depths. I assume it's due to a rounding
			error somewhere.`),r=G(),W(m.$$.fragment)},l(s){P(e.$$.fragment,s),n=K(s),t=x(s,"P",{});var d=N(t);h=j(d,`I'm noticing seams at higher depths. I assume it's due to a rounding
			error somewhere.`),d.forEach(w),r=K(s),P(m.$$.fragment,s)},m(s,d){T(e,s,d),re(s,n,d),re(s,t,d),b(t,h),re(s,r,d),T(m,s,d),u=!0},p(s,d){const S={};d&1&&(S.$$scope={dirty:d,ctx:s}),e.$set(S)},i(s){u||(R(e.$$.fragment,s),R(m.$$.fragment,s),u=!0)},o(s){H(e.$$.fragment,s),H(m.$$.fragment,s),u=!1},d(s){F(e,s),s&&w(n),s&&w(t),s&&w(r),F(m,s)}}}function Te(l){let e,n;return e=new Ie({props:{$$slots:{default:[Pe]},$$scope:{ctx:l}}}),{c(){W(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,h){T(e,t,h),n=!0},p(t,h){const r={};h&1&&(r.$$scope={dirty:h,ctx:t}),e.$set(r)},i(t){n||(R(e.$$.fragment,t),n=!0)},o(t){H(e.$$.fragment,t),n=!1},d(t){F(e,t)}}}function Re(l){let e,n,t,h;return e=new ke({props:{title:"Quadtree Image Compression",description:"Compress an image using a Quadtree",keywords:"Javascript, Creative Coding, Quadtree, Image Compression, Image Processing"}}),t=new we({props:{$$slots:{default:[Te]},$$scope:{ctx:l}}}),{c(){W(e.$$.fragment),n=G(),W(t.$$.fragment)},l(r){P(e.$$.fragment,r),n=K(r),P(t.$$.fragment,r)},m(r,m){T(e,r,m),re(r,n,m),T(t,r,m),h=!0},p(r,[m]){const u={};m&1&&(u.$$scope={dirty:m,ctx:r}),t.$set(u)},i(r){h||(R(e.$$.fragment,r),R(t.$$.fragment,r),h=!0)},o(r){H(e.$$.fragment,r),H(t.$$.fragment,r),h=!1},d(r){F(e,r),r&&w(n),F(t,r)}}}class Ue extends pe{constructor(e){super(),$e(this,e,null,Re,_e,{})}}export{Ue as default};
