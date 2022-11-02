import{S as he,i as _e,s as ve,w as z,x as j,y as U,f as H,t as K,z as J,o as we,k as T,l as D,m as P,h as p,n as X,b as S,B as Ie,J as re,K as pe,q as L,a as A,r as C,c as O,G as $,L as se,u as xe,M as $e,P as Se}from"../../../chunks/index-a4a97fa6.js";import{S as Ee,B as be}from"../../../chunks/Seo-3e94c9ab.js";import{M as ke,F as Te,S as de,T as De,a as Pe}from"../../../chunks/Footer-cc357b56.js";import{r as ge,g as oe}from"../../../chunks/math-fcbdfd63.js";import{D as Me}from"../../../chunks/DemoContainer-abd5cee0.js";import{N as ye}from"../../../chunks/NumberRange-8f4747ca.js";import{I as Be}from"../../../chunks/ImageSelect-6b6f6191.js";function Le(m){let e;return{c(){e=T("canvas"),this.h()},l(t){e=D(t,"CANVAS",{slot:!0,class:!0}),P(e).forEach(p),this.h()},h(){X(e,"slot","canvas"),X(e,"class","svelte-1wvpccn")},m(t,n){S(t,e,n),m[12](e)},p:Ie,d(t){t&&p(e),m[12](null)}}}function Ce(m){let e,t,n,d,r,c,o,s,_,v,I,E,N,M,x,u,W,Y,Z,F,y,Q,i,w,R,l,g,f,b,k;function q(a){m[9](a)}let te={id:"pixel-sorting-samples",min:We,max:Fe,onChange:null};m[2]!==void 0&&(te.value=m[2]),s=new ye({props:te}),re.push(()=>pe(s,"value",q));function V(a){m[11](a)}let ne={id:"pixel-sorting-images",onChange:m[10]};return m[4]!==void 0&&(ne.value=m[4]),E=new Be({props:ne}),re.push(()=>pe(E,"value",V)),{c(){e=T("fieldset"),t=T("div"),n=T("label"),d=L("Samples: ("),r=L(m[2]),c=L(")"),o=A(),z(s.$$.fragment),v=A(),I=T("div"),z(E.$$.fragment),M=A(),x=T("div"),u=T("div"),W=T("button"),Y=L("Start"),Z=A(),F=T("div"),y=T("button"),Q=L("Pause"),w=A(),R=T("div"),l=T("button"),g=L("Reset"),this.h()},l(a){e=D(a,"FIELDSET",{slot:!0});var h=P(e);t=D(h,"DIV",{class:!0});var B=P(t);n=D(B,"LABEL",{for:!0});var G=P(n);d=C(G,"Samples: ("),r=C(G,m[2]),c=C(G,")"),G.forEach(p),o=O(B),j(s.$$.fragment,B),B.forEach(p),v=O(h),I=D(h,"DIV",{class:!0});var ie=P(I);j(E.$$.fragment,ie),ie.forEach(p),M=O(h),x=D(h,"DIV",{class:!0});var ee=P(x);u=D(ee,"DIV",{class:!0});var le=P(u);W=D(le,"BUTTON",{});var ae=P(W);Y=C(ae,"Start"),ae.forEach(p),le.forEach(p),Z=O(ee),F=D(ee,"DIV",{class:!0});var fe=P(F);y=D(fe,"BUTTON",{});var ue=P(y);Q=C(ue,"Pause"),ue.forEach(p),fe.forEach(p),w=O(ee),R=D(ee,"DIV",{class:!0});var me=P(R);l=D(me,"BUTTON",{});var ce=P(l);g=C(ce,"Reset"),ce.forEach(p),me.forEach(p),ee.forEach(p),h.forEach(p),this.h()},h(){X(n,"for","pixel-sorting-samples"),X(t,"class","demo-input-group"),X(I,"class","demo-input-group"),W.disabled=m[3],X(u,"class","demo-input-group"),y.disabled=i=!m[3],X(F,"class","demo-input-group"),X(R,"class","demo-input-group"),X(x,"class","demo-multi-input-group svelte-1wvpccn"),X(e,"slot","controls")},m(a,h){S(a,e,h),$(e,t),$(t,n),$(n,d),$(n,r),$(n,c),$(t,o),U(s,t,null),$(e,v),$(e,I),U(E,I,null),$(e,M),$(e,x),$(x,u),$(u,W),$(W,Y),$(x,Z),$(x,F),$(F,y),$(y,Q),$(x,w),$(x,R),$(R,l),$(l,g),f=!0,b||(k=[se(W,"click",m[6]),se(y,"click",m[7]),se(l,"click",m[5])],b=!0)},p(a,h){(!f||h&4)&&xe(r,a[2]);const B={};!_&&h&4&&(_=!0,B.value=a[2],$e(()=>_=!1)),s.$set(B);const G={};h&18&&(G.onChange=a[10]),!N&&h&16&&(N=!0,G.value=a[4],$e(()=>N=!1)),E.$set(G),(!f||h&8)&&(W.disabled=a[3]),(!f||h&8&&i!==(i=!a[3]))&&(y.disabled=i)},i(a){f||(H(s.$$.fragment,a),H(E.$$.fragment,a),f=!0)},o(a){K(s.$$.fragment,a),K(E.$$.fragment,a),f=!1},d(a){a&&p(e),J(s),J(E),b=!1,Se(k)}}}function Ne(m){let e,t;return e=new Me({props:{caption:"Pixel Sorting",id:"pixel-sorting-demo",$$slots:{controls:[Ce],canvas:[Le]},$$scope:{ctx:m}}}),{c(){z(e.$$.fragment)},l(n){j(e.$$.fragment,n)},m(n,d){U(e,n,d),t=!0},p(n,[d]){const r={};d&8388639&&(r.$$scope={dirty:d,ctx:n}),e.$set(r)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){K(e.$$.fragment,n),t=!1},d(n){J(e,n)}}}const We=1,Fe=100;function Re(m,e,t,n,d,r){const c=e-m,o=n-t,s=r-d;return Math.sqrt(c*c+o*o+s*s)}function Ve(m,e,t){let n=0,d,r,c,o=0,s=0,_=0,v,I=0,E=50,N=!1,M="/images/starrynight.webp",x=null,u=null;we(()=>{c=r.getContext("2d"),d=document.getElementById("pixel-sorting-demo"),n=Math.floor(window.innerWidth);function l(){const f=Math.floor(window.innerWidth);f!==n&&(n=f,g())}function g(){t(3,N=!1);const f=d.clientWidth,b=window.innerHeight-window.innerHeight/4;if(o=v.width,s=v.height,f>0&&b>0){if(o>f){const k=f/o;o*=k,s*=k}if(s>b){const k=b/s;o*=k,s*=k}o=Math.floor(o),s=Math.floor(s)}t(0,r.width=o,r),t(0,r.height=s,r),t(0,r.style.width=`${o}px`,r),t(0,r.style.height=`${s}px`,r),W()}return t(1,v=new Image),t(1,v.crossOrigin="anonymous",v),t(1,v.onload=g,v),t(1,v.src=M,v),window.addEventListener("resize",l,{passive:!0}),()=>{window.removeEventListener("resize",l)}});function W(){if(t(3,N=!1),window.cancelAnimationFrame(_),o===0||s===0)return;c.clearRect(0,0,o,s),c.drawImage(v,0,0,v.width,v.height,0,0,o,s),I=0,x=c.getImageData(0,0,o,s),u=new Array(o*s*4);const l=x.data;for(let g=0;g<l.length;g+=4){const[f,b,k]=y(l[g],l[g+1],l[g+2]);u[g]=f,u[g+1]=b,u[g+2]=k,u[g+3]=-1}}function Y(){I*o*4===x.data.length&&W(),t(3,N=!0),F()}function Z(){t(3,N=!1)}function F(){const l=x.data,g=I*o*4;if(g===x.data.length){t(3,N=!1);return}N&&(_=window.requestAnimationFrame(F));for(let f=g;f<g+o*4;f+=4){const b=[],k=Math.floor(f/4%o);if(k>0){if(I>0){const h=f-o*4-4;l[h+3]>0&&b.push(u[h],u[h+1],u[h+2])}const a=f-4;l[a+3]>0&&b.push(u[a],u[a+1],u[a+2])}if(I>0){const a=f-o*4;l[a+3]>0&&b.push(u[a],u[a+1],u[a+2])}const q=[],te=new Array(E);for(let a=0;a<E;a++){const h=ge(k,o),G=(ge(I,s)*o+h)*4;q.push(u[G],u[G+1],u[G+2]),te[a]=G}let V=-1,ne=Number.POSITIVE_INFINITY;for(let a=0;a<q.length;a+=3){let h=0;for(let B=0;B<b.length;B+=3)h+=Re(q[a],b[B],q[a+1],b[B+1],q[a+2],b[B+2]);h/=b.length/3,h<ne&&(V=te[a/3],ne=h)}if(V>-1){let a=l[f],h=l[f+1],B=l[f+2];l[f]=l[V],l[f+1]=l[V+1],l[f+2]=l[V+2],l[V]=a,l[V+1]=h,l[V+2]=B,a=u[f],h=u[f+1],B=u[f+2],u[f]=u[V],u[f+1]=u[V+1],u[f+2]=u[V+2],u[V]=a,u[V+1]=h,u[V+2]=B}}c.putImageData(x,0,0),I++}function y(l,g,f){l=oe(l/255),g=oe(g/255),f=oe(f/255);let b=.4122214708*l+.5363325363*g+.0514459929*f,k=.2119034982*l+.6806995451*g+.1073969566*f,q=.0883024619*l+.2817188376*g+.6299787005*f;return b=Math.cbrt(b),k=Math.cbrt(k),q=Math.cbrt(q),[.2104542553*b+.793617785*k-.0040720468*q,1.9779984951*b-2.428592205*k+.4505937099*q,.0259040371*b+.7827717662*k-.808675766*q]}function Q(l){E=l,t(2,E)}const i=()=>{t(1,v.src=M,v),F()};function w(l){M=l,t(4,M)}function R(l){re[l?"unshift":"push"](()=>{r=l,t(0,r)})}return[r,v,E,N,M,W,Y,Z,F,Q,i,w,R]}class Ae extends he{constructor(e){super(),_e(this,e,Ve,Ne,ve,{})}}function Oe(m){let e;return{c(){e=L("Pixel Sorting")},l(t){e=C(t,"Pixel Sorting")},m(t,n){S(t,e,n)},d(t){t&&p(e)}}}function qe(m){let e;return{c(){e=L("Kjetil Golid")},l(t){e=C(t,"Kjetil Golid")},m(t,n){S(t,e,n)},d(t){t&&p(e)}}}function Ge(m){let e,t,n,d,r,c,o;return e=new De({props:{timestamp:1651809600,$$slots:{default:[Oe]},$$scope:{ctx:m}}}),r=new be({props:{href:"https://twitter.com/kGolid",$$slots:{default:[qe]},$$scope:{ctx:m}}}),{c(){z(e.$$.fragment),t=A(),n=T("p"),d=L("Implementing "),z(r.$$.fragment),c=L(" pixel/color sorting.")},l(s){j(e.$$.fragment,s),t=O(s),n=D(s,"P",{});var _=P(n);d=C(_,"Implementing "),j(r.$$.fragment,_),c=C(_," pixel/color sorting."),_.forEach(p)},m(s,_){U(e,s,_),S(s,t,_),S(s,n,_),$(n,d),U(r,n,null),$(n,c),o=!0},p(s,_){const v={};_&1&&(v.$$scope={dirty:_,ctx:s}),e.$set(v);const I={};_&1&&(I.$$scope={dirty:_,ctx:s}),r.$set(I)},i(s){o||(H(e.$$.fragment,s),H(r.$$.fragment,s),o=!0)},o(s){K(e.$$.fragment,s),K(r.$$.fragment,s),o=!1},d(s){J(e,s),s&&p(t),s&&p(n),J(r)}}}function ze(m){let e;return{c(){e=L("Demo")},l(t){e=C(t,"Demo")},m(t,n){S(t,e,n)},d(t){t&&p(e)}}}function je(m){let e;return{c(){e=L("Oklab")},l(t){e=C(t,"Oklab")},m(t,n){S(t,e,n)},d(t){t&&p(e)}}}function Ue(m){let e,t,n,d,r,c,o,s,_,v,I,E,N,M,x,u,W,Y,Z,F,y,Q;return e=new Pe({props:{id:"demo",$$slots:{default:[ze]},$$scope:{ctx:m}}}),s=new be({props:{href:"https://bottosson.github.io/posts/oklab/",$$slots:{default:[je]},$$scope:{ctx:m}}}),y=new Ae({}),{c(){z(e.$$.fragment),t=A(),n=T("p"),d=L(`For every pixel in the image, compute the average color of the
			current pixel's surrounding pixels. Within a maximum number of
			tries, find a different non-processed pixel with the most similar
			color to the computed average and swap them.`),r=A(),c=T("p"),o=L(`sRGB is not the best color space for a color difference function. In
			this demo, I converted the colors to `),z(s.$$.fragment),_=L(" which is much better suited."),v=A(),I=T("p"),E=L("The orientation and result of this effect is a combination of:"),N=A(),M=T("ul"),x=T("li"),u=L(`The algorithm processes pixels from top to bottom. This is not a
				requirement. I've seen vastly cooler versions, such as a radial
				one and a seemingly noise-based one.`),W=A(),Y=T("li"),Z=L(`Which and how many of the 8 surrounding pixels are being used to
				compute the color difference. In this demo, I'm using the
				top-left, top, and left pixels.`),F=A(),z(y.$$.fragment)},l(i){j(e.$$.fragment,i),t=O(i),n=D(i,"P",{});var w=P(n);d=C(w,`For every pixel in the image, compute the average color of the
			current pixel's surrounding pixels. Within a maximum number of
			tries, find a different non-processed pixel with the most similar
			color to the computed average and swap them.`),w.forEach(p),r=O(i),c=D(i,"P",{});var R=P(c);o=C(R,`sRGB is not the best color space for a color difference function. In
			this demo, I converted the colors to `),j(s.$$.fragment,R),_=C(R," which is much better suited."),R.forEach(p),v=O(i),I=D(i,"P",{});var l=P(I);E=C(l,"The orientation and result of this effect is a combination of:"),l.forEach(p),N=O(i),M=D(i,"UL",{});var g=P(M);x=D(g,"LI",{});var f=P(x);u=C(f,`The algorithm processes pixels from top to bottom. This is not a
				requirement. I've seen vastly cooler versions, such as a radial
				one and a seemingly noise-based one.`),f.forEach(p),W=O(g),Y=D(g,"LI",{});var b=P(Y);Z=C(b,`Which and how many of the 8 surrounding pixels are being used to
				compute the color difference. In this demo, I'm using the
				top-left, top, and left pixels.`),b.forEach(p),g.forEach(p),F=O(i),j(y.$$.fragment,i)},m(i,w){U(e,i,w),S(i,t,w),S(i,n,w),$(n,d),S(i,r,w),S(i,c,w),$(c,o),U(s,c,null),$(c,_),S(i,v,w),S(i,I,w),$(I,E),S(i,N,w),S(i,M,w),$(M,x),$(x,u),$(M,W),$(M,Y),$(Y,Z),S(i,F,w),U(y,i,w),Q=!0},p(i,w){const R={};w&1&&(R.$$scope={dirty:w,ctx:i}),e.$set(R);const l={};w&1&&(l.$$scope={dirty:w,ctx:i}),s.$set(l)},i(i){Q||(H(e.$$.fragment,i),H(s.$$.fragment,i),H(y.$$.fragment,i),Q=!0)},o(i){K(e.$$.fragment,i),K(s.$$.fragment,i),K(y.$$.fragment,i),Q=!1},d(i){J(e,i),i&&p(t),i&&p(n),i&&p(r),i&&p(c),J(s),i&&p(v),i&&p(I),i&&p(N),i&&p(M),i&&p(F),J(y,i)}}}function He(m){let e,t,n,d;return e=new de({props:{$$slots:{default:[Ge]},$$scope:{ctx:m}}}),n=new de({props:{$$slots:{default:[Ue]},$$scope:{ctx:m}}}),{c(){z(e.$$.fragment),t=A(),z(n.$$.fragment)},l(r){j(e.$$.fragment,r),t=O(r),j(n.$$.fragment,r)},m(r,c){U(e,r,c),S(r,t,c),U(n,r,c),d=!0},p(r,c){const o={};c&1&&(o.$$scope={dirty:c,ctx:r}),e.$set(o);const s={};c&1&&(s.$$scope={dirty:c,ctx:r}),n.$set(s)},i(r){d||(H(e.$$.fragment,r),H(n.$$.fragment,r),d=!0)},o(r){K(e.$$.fragment,r),K(n.$$.fragment,r),d=!1},d(r){J(e,r),r&&p(t),J(n,r)}}}function Ke(m){let e,t,n,d,r,c;return e=new Ee({props:{title:"Pixel Sorting",description:"Sort image colors by similarity",keywords:"Pixel Sorting, Color Sorting, Javascript"}}),n=new ke({props:{$$slots:{default:[He]},$$scope:{ctx:m}}}),r=new Te({}),{c(){z(e.$$.fragment),t=A(),z(n.$$.fragment),d=A(),z(r.$$.fragment)},l(o){j(e.$$.fragment,o),t=O(o),j(n.$$.fragment,o),d=O(o),j(r.$$.fragment,o)},m(o,s){U(e,o,s),S(o,t,s),U(n,o,s),S(o,d,s),U(r,o,s),c=!0},p(o,[s]){const _={};s&1&&(_.$$scope={dirty:s,ctx:o}),n.$set(_)},i(o){c||(H(e.$$.fragment,o),H(n.$$.fragment,o),H(r.$$.fragment,o),c=!0)},o(o){K(e.$$.fragment,o),K(n.$$.fragment,o),K(r.$$.fragment,o),c=!1},d(o){J(e,o),o&&p(t),J(n,o),o&&p(d),J(r,o)}}}class nt extends he{constructor(e){super(),_e(this,e,null,Ke,ve,{})}}export{nt as default};
