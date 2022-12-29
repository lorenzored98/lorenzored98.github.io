import{S as mt,i as pt,s as dt,w as G,x as O,y as Y,f as W,t as H,z as J,o as gt,k as T,l as L,m as S,h,n as z,b as F,B as _t,J as ot,K as it,q as B,a as x,r as V,c as P,G as $,L as $t,u as lt,M as ut}from"../../../chunks/index-6be07ad6.js";import{M as vt,S as bt,T as Et}from"../../../chunks/Main-d501f058.js";import{S as wt}from"../../../chunks/Seo-8afd16e9.js";import{D as At}from"../../../chunks/DemoContainer-02f198f6.js";import{N as ft}from"../../../chunks/NumberRange-767509e5.js";import{r as K}from"../../../chunks/math-4278f00e.js";import{c as ct,a as Dt}from"../../../chunks/gl-a52fa1b4.js";import{d as Rt}from"../../../chunks/core-ddcb889b.js";function It(f){let e;return{c(){e=T("canvas"),this.h()},l(a){e=L(a,"CANVAS",{slot:!0,class:!0}),S(e).forEach(h),this.h()},h(){z(e,"slot","canvas"),z(e,"class","svelte-1sfotsa")},m(a,t){F(a,e,t),f[7](e)},p:_t,d(a){a&&h(e),f[7](null)}}}function yt(f){let e,a,t,n,s,p,E,g,w,v,b,_,C,o,d,R,A,j,X,U,q,Z,N,Q,tt;function nt(r){f[5](r)}let et={id:"depth",min:Tt,max:Lt,step:1,onChange:f[4]};f[1]!==void 0&&(et.value=f[1]),g=new ft({props:et}),ot.push(()=>it(g,"value",nt,f[1]));function rt(r){f[6](r)}let i={id:"variation",min:St,max:Ft,step:1,onChange:f[4]};return f[2]!==void 0&&(i.value=f[2]),A=new ft({props:i}),ot.push(()=>it(A,"value",rt,f[2])),{c(){e=T("fieldset"),a=T("div"),t=T("label"),n=B("Depth: ("),s=B(f[1]),p=B(")"),E=x(),G(g.$$.fragment),v=x(),b=T("div"),_=T("label"),C=B("Variation: ("),o=B(f[2]),d=B(")"),R=x(),G(A.$$.fragment),X=x(),U=T("div"),q=T("button"),Z=B("Run"),this.h()},l(r){e=L(r,"FIELDSET",{slot:!0});var c=S(e);a=L(c,"DIV",{class:!0});var I=S(a);t=L(I,"LABEL",{for:!0});var m=S(t);n=V(m,"Depth: ("),s=V(m,f[1]),p=V(m,")"),m.forEach(h),E=P(I),O(g.$$.fragment,I),I.forEach(h),v=P(c),b=L(c,"DIV",{class:!0});var u=S(b);_=L(u,"LABEL",{for:!0});var l=S(_);C=V(l,"Variation: ("),o=V(l,f[2]),d=V(l,")"),l.forEach(h),R=P(u),O(A.$$.fragment,u),u.forEach(h),X=P(c),U=L(c,"DIV",{class:!0});var D=S(U);q=L(D,"BUTTON",{});var k=S(q);Z=V(k,"Run"),k.forEach(h),D.forEach(h),c.forEach(h),this.h()},h(){z(t,"for","depth"),z(a,"class","demo-input-group"),z(_,"for","variation"),z(b,"class","demo-input-group"),z(U,"class","demo-input-group run svelte-1sfotsa"),z(e,"slot","controls")},m(r,c){F(r,e,c),$(e,a),$(a,t),$(t,n),$(t,s),$(t,p),$(a,E),Y(g,a,null),$(e,v),$(e,b),$(b,_),$(_,C),$(_,o),$(_,d),$(b,R),Y(A,b,null),$(e,X),$(e,U),$(U,q),$(q,Z),N=!0,Q||(tt=$t(q,"click",f[3]),Q=!0)},p(r,c){(!N||c&2)&&lt(s,r[1]);const I={};!w&&c&2&&(w=!0,I.value=r[1],ut(()=>w=!1)),g.$set(I),(!N||c&4)&&lt(o,r[2]);const m={};!j&&c&4&&(j=!0,m.value=r[2],ut(()=>j=!1)),A.$set(m)},i(r){N||(W(g.$$.fragment,r),W(A.$$.fragment,r),N=!0)},o(r){H(g.$$.fragment,r),H(A.$$.fragment,r),N=!1},d(r){r&&h(e),J(g),J(A),Q=!1,tt()}}}function Ct(f){let e,a;return e=new At({props:{caption:"2D Midpoint Displacement",$$slots:{controls:[yt],canvas:[It]},$$scope:{ctx:f}}}),{c(){G(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,n){Y(e,t,n),a=!0},p(t,[n]){const s={};n&67108871&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){a||(W(e.$$.fragment,t),a=!0)},o(t){H(e.$$.fragment,t),a=!1},d(t){J(e,t)}}}const Mt=.5,Tt=1,Lt=10,St=1,Ft=256;function Bt(f,e,a){let t,n,s=0,p=0,E=1,g=8,w=128,v,b=-1,_=-1,C,o,d,R,A;const j=Float32Array.BYTES_PER_ELEMENT,X=`#version 300 es
	in vec2 position;
	in float color;

	out float vColor;
	void main() {
		vColor = color;
		gl_Position = vec4(position, 0.0, 1.0);
	}
	`,U=`#version 300 es
	precision highp float;

	in float vColor;

	out vec4 outColor;
	void main() {
		outColor = vec4(vec3(vColor), 1.0);
	}
	`;gt(()=>{if(n=t.getContext("webgl2"),!n)return;function i(){E=Math.min(window.devicePixelRatio,2),t.clientWidth*E!==s&&(s=t.clientWidth,p=Math.floor(s*Mt),a(0,t.style.width=s+"px",t),a(0,t.style.height=p+"px",t),s*=E,p*=E,a(0,t.width=s,t),a(0,t.height=p,t))}return window.addEventListener("resize",i,{passive:!0}),i(),q(),N(),()=>{window.removeEventListener("resize",i)}});function q(){const i=ct(n,n.VERTEX_SHADER,X),r=ct(n,n.FRAGMENT_SHADER,U);R=Dt(n,{vert:i,frag:r}),b=n.getAttribLocation(R,"position"),_=n.getAttribLocation(R,"color"),C=n.createVertexArray(),o=n.createBuffer(),d=n.createBuffer()}function Z(){const i=[];let r=2**g;v=r+1;let c=w;for(let m=0;m<v;m++){const u=[];for(let l=0;l<v;l++)u.push(0);i.push(u)}const I=K(0,255);for(i[0][0]=I,i[0][r]=I,i[r][0]=I,i[r][r]=I;r>1;){const m=r/2;for(let u=0;u<v-1;u+=r)for(let l=0;l<v-1;l+=r){let D=i[u][l]+i[u][l+r];D/=2,D+=K(-c,c),i[u][l+m]=D;let k=i[u][l+r]+i[u+r][l+r];k/=2,k+=K(-c,c),i[u+m][l+r]=k;let y=i[u+r][l+r]+i[u+r][l];y/=2,y+=K(-c,c),i[u+r][l+m]=y;let M=i[u][l]+i[u+r][l];M/=2,M+=K(-c,c),i[u+m][l]=M}for(let u=0;u<v-1;u+=r)for(let l=0;l<v-1;l+=r){let D=i[u][l+m]+i[u+m][l+r]+i[u+r][l+m]+i[u+m][l];D/=4,D+=K(-c,c),i[u+m][l+m]=D}r/=2,c=Math.max(c/2,1)}return i}function N(){const i=Z(),r=[],c=2**g;for(let y=0;y<v;y++)for(let M=0;M<v;M++){const at=i[y][M]/255;r.push(M/c*2-1,(1-y/c)*2-1,at)}const I=(2**g)**2;let m=[],u=0;const l=v;let D=0,k=0;for(;u<I;){const y=D+k*l,M=y+0,at=y+1,ht=y+l+0,st=y+l+1;m.push(ht,st,M,st,at,M),u++,D++,D===c&&(D=0,k++)}A=m.length,n.bindVertexArray(C),n.bindBuffer(n.ARRAY_BUFFER,o),n.bufferData(n.ARRAY_BUFFER,new Float32Array(r),n.STATIC_DRAW),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,d),n.bufferData(n.ELEMENT_ARRAY_BUFFER,new Int32Array(m),n.STATIC_DRAW),n.enableVertexAttribArray(b),n.vertexAttribPointer(b,2,n.FLOAT,!1,3*j,0),n.enableVertexAttribArray(_),n.vertexAttribPointer(_,1,n.FLOAT,!1,3*j,2*j),tt()}const Q=Rt(N,300);function tt(){n.viewport(0,0,s,p),n.clearColor(0,0,0,1),n.clear(n.COLOR_BUFFER_BIT),n.useProgram(R),n.bindVertexArray(C),n.drawElements(n.TRIANGLES,A,n.UNSIGNED_INT,0)}function nt(i){g=i,a(1,g)}function et(i){w=i,a(2,w)}function rt(i){ot[i?"unshift":"push"](()=>{t=i,a(0,t)})}return[t,g,w,N,Q,nt,et,rt]}class Vt extends mt{constructor(e){super(),pt(this,e,Bt,Ct,dt,{})}}function Nt(f){let e;return{c(){e=B("2D Midpoint Displacement")},l(a){e=V(a,"2D Midpoint Displacement")},m(a,t){F(a,e,t)},d(a){a&&h(e)}}}function kt(f){let e,a,t,n,s,p,E,g,w,v,b,_,C;return e=new Et({props:{timestamp:1652500800,$$slots:{default:[Nt]},$$scope:{ctx:f}}}),_=new Vt({}),{c(){G(e.$$.fragment),a=x(),t=T("p"),n=B(`I discovered this algorithm while researching procedural terrain
			generation. I'm assuming it's an outdated way of doing that, but,
			contrary to stacking gradient noises on top of each other, I
			actually understand what this does!`),s=x(),p=T("p"),E=B(`Depth is how many times the space is subdivided and variation
			controls how much a random value can fluctuate.`),g=x(),w=T("p"),v=B(`It makes sense to have variation going from -1 or 0 to 1. I
			originally did this using Canvas2D so it retained some of the
			quirks.`),b=x(),G(_.$$.fragment)},l(o){O(e.$$.fragment,o),a=P(o),t=L(o,"P",{});var d=S(t);n=V(d,`I discovered this algorithm while researching procedural terrain
			generation. I'm assuming it's an outdated way of doing that, but,
			contrary to stacking gradient noises on top of each other, I
			actually understand what this does!`),d.forEach(h),s=P(o),p=L(o,"P",{});var R=S(p);E=V(R,`Depth is how many times the space is subdivided and variation
			controls how much a random value can fluctuate.`),R.forEach(h),g=P(o),w=L(o,"P",{});var A=S(w);v=V(A,`It makes sense to have variation going from -1 or 0 to 1. I
			originally did this using Canvas2D so it retained some of the
			quirks.`),A.forEach(h),b=P(o),O(_.$$.fragment,o)},m(o,d){Y(e,o,d),F(o,a,d),F(o,t,d),$(t,n),F(o,s,d),F(o,p,d),$(p,E),F(o,g,d),F(o,w,d),$(w,v),F(o,b,d),Y(_,o,d),C=!0},p(o,d){const R={};d&1&&(R.$$scope={dirty:d,ctx:o}),e.$set(R)},i(o){C||(W(e.$$.fragment,o),W(_.$$.fragment,o),C=!0)},o(o){H(e.$$.fragment,o),H(_.$$.fragment,o),C=!1},d(o){J(e,o),o&&h(a),o&&h(t),o&&h(s),o&&h(p),o&&h(g),o&&h(w),o&&h(b),J(_,o)}}}function xt(f){let e,a;return e=new bt({props:{$$slots:{default:[kt]},$$scope:{ctx:f}}}),{c(){G(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,n){Y(e,t,n),a=!0},p(t,n){const s={};n&1&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){a||(W(e.$$.fragment,t),a=!0)},o(t){H(e.$$.fragment,t),a=!1},d(t){J(e,t)}}}function Pt(f){let e,a,t,n;return e=new wt({props:{title:"2D Midpoint Displacement",description:"Generate noise-like patterns",keywords:"Noise, Javascript, Creative Coding, Algorithm"}}),t=new vt({props:{$$slots:{default:[xt]},$$scope:{ctx:f}}}),{c(){G(e.$$.fragment),a=x(),G(t.$$.fragment)},l(s){O(e.$$.fragment,s),a=P(s),O(t.$$.fragment,s)},m(s,p){Y(e,s,p),F(s,a,p),Y(t,s,p),n=!0},p(s,[p]){const E={};p&1&&(E.$$scope={dirty:p,ctx:s}),t.$set(E)},i(s){n||(W(e.$$.fragment,s),W(t.$$.fragment,s),n=!0)},o(s){H(e.$$.fragment,s),H(t.$$.fragment,s),n=!1},d(s){J(e,s),s&&h(a),J(t,s)}}}class Jt extends mt{constructor(e){super(),pt(this,e,null,Pt,dt,{})}}export{Jt as default};
