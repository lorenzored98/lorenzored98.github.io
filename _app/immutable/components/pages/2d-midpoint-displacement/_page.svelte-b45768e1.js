import{S as pt,i as $t,s as dt,w as k,x as P,y as U,f as q,t as z,z as G,o as gt,k as L,l as S,m as B,h as d,n as J,b as A,B as vt,J as at,K as it,q as M,a as V,r as T,c as x,G as v,L as ht,u as lt,M as ft}from"../../../chunks/index-a4a97fa6.js";import{M as bt,F as Et,S as ut,T as wt,a as At}from"../../../chunks/Footer-cc357b56.js";import{S as Dt}from"../../../chunks/Seo-3e94c9ab.js";import{D as Rt}from"../../../chunks/DemoContainer-abd5cee0.js";import{N as ct}from"../../../chunks/NumberRange-8f4747ca.js";import{r as K}from"../../../chunks/math-fcbdfd63.js";import{c as mt,a as It}from"../../../chunks/gl-b37e48a8.js";import{d as yt}from"../../../chunks/core-2382e8f7.js";function Ct(p){let t;return{c(){t=L("canvas"),this.h()},l(r){t=S(r,"CANVAS",{slot:!0,class:!0}),B(t).forEach(d),this.h()},h(){J(t,"slot","canvas"),J(t,"class","svelte-1sfotsa")},m(r,e){A(r,t,e),p[7](t)},p:vt,d(r){r&&d(t),p[7](null)}}}function Mt(p){let t,r,e,n,o,i,a,u,b,E,w,h,F,l,g,I,D,j,X,W,H,Z,O,Q,tt;function nt(s){p[5](s)}let et={id:"depth",min:Lt,max:St,step:1,onChange:p[4]};p[1]!==void 0&&(et.value=p[1]),u=new ct({props:et}),at.push(()=>it(u,"value",nt));function rt(s){p[6](s)}let f={id:"variation",min:Bt,max:Vt,step:1,onChange:p[4]};return p[2]!==void 0&&(f.value=p[2]),D=new ct({props:f}),at.push(()=>it(D,"value",rt)),{c(){t=L("fieldset"),r=L("div"),e=L("label"),n=M("Depth: ("),o=M(p[1]),i=M(")"),a=V(),k(u.$$.fragment),E=V(),w=L("div"),h=L("label"),F=M("Variation: ("),l=M(p[2]),g=M(")"),I=V(),k(D.$$.fragment),X=V(),W=L("div"),H=L("button"),Z=M("Run"),this.h()},l(s){t=S(s,"FIELDSET",{slot:!0});var $=B(t);r=S($,"DIV",{class:!0});var y=B(r);e=S(y,"LABEL",{for:!0});var _=B(e);n=T(_,"Depth: ("),o=T(_,p[1]),i=T(_,")"),_.forEach(d),a=x(y),P(u.$$.fragment,y),y.forEach(d),E=x($),w=S($,"DIV",{class:!0});var m=B(w);h=S(m,"LABEL",{for:!0});var c=B(h);F=T(c,"Variation: ("),l=T(c,p[2]),g=T(c,")"),c.forEach(d),I=x(m),P(D.$$.fragment,m),m.forEach(d),X=x($),W=S($,"DIV",{class:!0});var R=B(W);H=S(R,"BUTTON",{});var Y=B(H);Z=T(Y,"Run"),Y.forEach(d),R.forEach(d),$.forEach(d),this.h()},h(){J(e,"for","depth"),J(r,"class","demo-input-group"),J(h,"for","variation"),J(w,"class","demo-input-group"),J(W,"class","demo-input-group run svelte-1sfotsa"),J(t,"slot","controls")},m(s,$){A(s,t,$),v(t,r),v(r,e),v(e,n),v(e,o),v(e,i),v(r,a),U(u,r,null),v(t,E),v(t,w),v(w,h),v(h,F),v(h,l),v(h,g),v(w,I),U(D,w,null),v(t,X),v(t,W),v(W,H),v(H,Z),O=!0,Q||(tt=ht(H,"click",p[3]),Q=!0)},p(s,$){(!O||$&2)&&lt(o,s[1]);const y={};!b&&$&2&&(b=!0,y.value=s[1],ft(()=>b=!1)),u.$set(y),(!O||$&4)&&lt(l,s[2]);const _={};!j&&$&4&&(j=!0,_.value=s[2],ft(()=>j=!1)),D.$set(_)},i(s){O||(q(u.$$.fragment,s),q(D.$$.fragment,s),O=!0)},o(s){z(u.$$.fragment,s),z(D.$$.fragment,s),O=!1},d(s){s&&d(t),G(u),G(D),Q=!1,tt()}}}function Tt(p){let t,r;return t=new Rt({props:{caption:"2D Midpoint Displacement",$$slots:{controls:[Mt],canvas:[Ct]},$$scope:{ctx:p}}}),{c(){k(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,n){U(t,e,n),r=!0},p(e,[n]){const o={};n&67108871&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(e){r||(q(t.$$.fragment,e),r=!0)},o(e){z(t.$$.fragment,e),r=!1},d(e){G(t,e)}}}const Ft=.5,Lt=1,St=10,Bt=1,Vt=256;function xt(p,t,r){let e,n,o=0,i=0,a=1,u=8,b=128,E,w=-1,h=-1,F,l,g,I,D;const j=Float32Array.BYTES_PER_ELEMENT,X=`#version 300 es
	in vec2 position;
	in float color;

	out float vColor;
	void main() {
		vColor = color;
		gl_Position = vec4(position, 0.0, 1.0);
	}
	`,W=`#version 300 es
	precision highp float;

	in float vColor;

	out vec4 outColor;
	void main() {
		outColor = vec4(vec3(vColor), 1.0);
	}
	`;gt(()=>{if(n=e.getContext("webgl2"),!n)return;function f(){a=Math.min(window.devicePixelRatio,2),e.clientWidth*a!==o&&(o=e.clientWidth,i=Math.floor(o*Ft),r(0,e.style.height=i+"px",e),o*=a,i*=a,r(0,e.width=o,e),r(0,e.height=i,e))}return window.addEventListener("resize",f,{passive:!0}),f(),H(),O(),()=>{window.removeEventListener("resize",f)}});function H(){const f=mt(n,n.VERTEX_SHADER,X),s=mt(n,n.FRAGMENT_SHADER,W);I=It(n,{vert:f,frag:s}),w=n.getAttribLocation(I,"position"),h=n.getAttribLocation(I,"color"),F=n.createVertexArray(),l=n.createBuffer(),g=n.createBuffer()}function Z(){const f=[];let s=2**u;E=s+1;let $=b;for(let _=0;_<E;_++){const m=[];for(let c=0;c<E;c++)m.push(0);f.push(m)}const y=K(0,255);for(f[0][0]=y,f[0][s]=y,f[s][0]=y,f[s][s]=y;s>1;){const _=s/2;for(let m=0;m<E-1;m+=s)for(let c=0;c<E-1;c+=s){let R=f[m][c]+f[m][c+s];R/=2,R+=K(-$,$),f[m][c+_]=R;let Y=f[m][c+s]+f[m+s][c+s];Y/=2,Y+=K(-$,$),f[m+_][c+s]=Y;let C=f[m+s][c+s]+f[m+s][c];C/=2,C+=K(-$,$),f[m+s][c+_]=C;let N=f[m][c]+f[m+s][c];N/=2,N+=K(-$,$),f[m+_][c]=N}for(let m=0;m<E-1;m+=s)for(let c=0;c<E-1;c+=s){let R=f[m][c+_]+f[m+_][c+s]+f[m+s][c+_]+f[m+_][c];R/=4,R+=K(-$,$),f[m+_][c+_]=R}s/=2,$=Math.max($/2,1)}return f}function O(){const f=Z(),s=[],$=2**u;for(let C=0;C<E;C++)for(let N=0;N<E;N++){const ot=f[C][N]/255;s.push(N/$*2-1,(1-C/$)*2-1,ot)}const y=(2**u)**2;let _=[],m=0;const c=E;let R=0,Y=0;for(;m<y;){const C=R+Y*c,N=C+0,ot=C+1,_t=C+c+0,st=C+c+1;_.push(_t,st,N,st,ot,N),m++,R++,R===$&&(R=0,Y++)}D=_.length,n.bindVertexArray(F),n.bindBuffer(n.ARRAY_BUFFER,l),n.bufferData(n.ARRAY_BUFFER,new Float32Array(s),n.STATIC_DRAW),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,g),n.bufferData(n.ELEMENT_ARRAY_BUFFER,new Int32Array(_),n.STATIC_DRAW),n.enableVertexAttribArray(w),n.vertexAttribPointer(w,2,n.FLOAT,!1,3*j,0),n.enableVertexAttribArray(h),n.vertexAttribPointer(h,1,n.FLOAT,!1,3*j,2*j),tt()}const Q=yt(O,300);function tt(){n.viewport(0,0,o,i),n.clearColor(0,0,0,1),n.clear(n.COLOR_BUFFER_BIT),n.useProgram(I),n.bindVertexArray(F),n.drawElements(n.TRIANGLES,D,n.UNSIGNED_INT,0)}function nt(f){u=f,r(1,u)}function et(f){b=f,r(2,b)}function rt(f){at[f?"unshift":"push"](()=>{e=f,r(0,e)})}return[e,u,b,O,Q,nt,et,rt]}class Nt extends pt{constructor(t){super(),$t(this,t,xt,Tt,dt,{})}}function kt(p){let t;return{c(){t=M("2D Midpoint Displacement")},l(r){t=T(r,"2D Midpoint Displacement")},m(r,e){A(r,t,e)},d(r){r&&d(t)}}}function Pt(p){let t,r,e,n,o;return t=new wt({props:{timestamp:1652500800,$$slots:{default:[kt]},$$scope:{ctx:p}}}),{c(){k(t.$$.fragment),r=V(),e=L("p"),n=M("Exploring terrain generation algorithms.")},l(i){P(t.$$.fragment,i),r=x(i),e=S(i,"P",{});var a=B(e);n=T(a,"Exploring terrain generation algorithms."),a.forEach(d)},m(i,a){U(t,i,a),A(i,r,a),A(i,e,a),v(e,n),o=!0},p(i,a){const u={};a&1&&(u.$$scope={dirty:a,ctx:i}),t.$set(u)},i(i){o||(q(t.$$.fragment,i),o=!0)},o(i){z(t.$$.fragment,i),o=!1},d(i){G(t,i),i&&d(r),i&&d(e)}}}function Ut(p){let t;return{c(){t=M("Demo")},l(r){t=T(r,"Demo")},m(r,e){A(r,t,e)},d(r){r&&d(t)}}}function qt(p){let t,r,e,n,o,i,a,u,b,E,w,h,F;return t=new At({props:{id:"demo",$$slots:{default:[Ut]},$$scope:{ctx:p}}}),h=new Nt({}),{c(){k(t.$$.fragment),r=V(),e=L("p"),n=M(`I discovered this algorithm while researching procedural terrain
			generation . I'm assuming it's an outdated way of doing that, but,
			contrary to stacking gradient noises on top of each other, I
			actually understand what this does!`),o=V(),i=L("p"),a=M(`Depth is how many times the space is subdivided and variation
			controls how much a random value can fluctuate.`),u=V(),b=L("p"),E=M(`It makes sense to have variation going from -1 or 0 to 1. I
			originally did this using Canvas2D so it retained some of the
			quirks.`),w=V(),k(h.$$.fragment)},l(l){P(t.$$.fragment,l),r=x(l),e=S(l,"P",{});var g=B(e);n=T(g,`I discovered this algorithm while researching procedural terrain
			generation . I'm assuming it's an outdated way of doing that, but,
			contrary to stacking gradient noises on top of each other, I
			actually understand what this does!`),g.forEach(d),o=x(l),i=S(l,"P",{});var I=B(i);a=T(I,`Depth is how many times the space is subdivided and variation
			controls how much a random value can fluctuate.`),I.forEach(d),u=x(l),b=S(l,"P",{});var D=B(b);E=T(D,`It makes sense to have variation going from -1 or 0 to 1. I
			originally did this using Canvas2D so it retained some of the
			quirks.`),D.forEach(d),w=x(l),P(h.$$.fragment,l)},m(l,g){U(t,l,g),A(l,r,g),A(l,e,g),v(e,n),A(l,o,g),A(l,i,g),v(i,a),A(l,u,g),A(l,b,g),v(b,E),A(l,w,g),U(h,l,g),F=!0},p(l,g){const I={};g&1&&(I.$$scope={dirty:g,ctx:l}),t.$set(I)},i(l){F||(q(t.$$.fragment,l),q(h.$$.fragment,l),F=!0)},o(l){z(t.$$.fragment,l),z(h.$$.fragment,l),F=!1},d(l){G(t,l),l&&d(r),l&&d(e),l&&d(o),l&&d(i),l&&d(u),l&&d(b),l&&d(w),G(h,l)}}}function zt(p){let t,r,e,n;return t=new ut({props:{$$slots:{default:[Pt]},$$scope:{ctx:p}}}),e=new ut({props:{$$slots:{default:[qt]},$$scope:{ctx:p}}}),{c(){k(t.$$.fragment),r=V(),k(e.$$.fragment)},l(o){P(t.$$.fragment,o),r=x(o),P(e.$$.fragment,o)},m(o,i){U(t,o,i),A(o,r,i),U(e,o,i),n=!0},p(o,i){const a={};i&1&&(a.$$scope={dirty:i,ctx:o}),t.$set(a);const u={};i&1&&(u.$$scope={dirty:i,ctx:o}),e.$set(u)},i(o){n||(q(t.$$.fragment,o),q(e.$$.fragment,o),n=!0)},o(o){z(t.$$.fragment,o),z(e.$$.fragment,o),n=!1},d(o){G(t,o),o&&d(r),G(e,o)}}}function Gt(p){let t,r,e,n,o,i;return t=new Dt({props:{title:"2D Midpoint Displacement",description:"Generate noise-like patterns",keywords:"Noise, Javascript, Creative Coding, Algorithm"}}),e=new bt({props:{$$slots:{default:[zt]},$$scope:{ctx:p}}}),o=new Et({}),{c(){k(t.$$.fragment),r=V(),k(e.$$.fragment),n=V(),k(o.$$.fragment)},l(a){P(t.$$.fragment,a),r=x(a),P(e.$$.fragment,a),n=x(a),P(o.$$.fragment,a)},m(a,u){U(t,a,u),A(a,r,u),U(e,a,u),A(a,n,u),U(o,a,u),i=!0},p(a,[u]){const b={};u&1&&(b.$$scope={dirty:u,ctx:a}),e.$set(b)},i(a){i||(q(t.$$.fragment,a),q(e.$$.fragment,a),q(o.$$.fragment,a),i=!0)},o(a){z(t.$$.fragment,a),z(e.$$.fragment,a),z(o.$$.fragment,a),i=!1},d(a){G(t,a),a&&d(r),G(e,a),a&&d(n),G(o,a)}}}class Zt extends pt{constructor(t){super(),$t(this,t,null,Gt,dt,{})}}export{Zt as default};