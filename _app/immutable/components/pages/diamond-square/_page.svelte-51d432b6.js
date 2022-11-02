import{S as pe,i as $e,s as de,w as W,x as Y,y as H,f as J,t as K,z as j,o as he,k as q,l as F,m as k,h as _,n as te,b as R,B as ge,J as oe,K as ie,q as E,a as M,r as w,c as P,G as h,L as ve,u as le,M as fe}from"../../../chunks/index-a4a97fa6.js";import{S as be,B as Ee}from"../../../chunks/Seo-3e94c9ab.js";import{M as we,F as Ae,S as ue,T as Re,a as De}from"../../../chunks/Footer-cc357b56.js";import{D as Se}from"../../../chunks/DemoContainer-abd5cee0.js";import{N as me}from"../../../chunks/NumberRange-8f4747ca.js";import{r as re}from"../../../chunks/math-fcbdfd63.js";import{c as ce,a as Te}from"../../../chunks/gl-b37e48a8.js";import{d as qe}from"../../../chunks/core-2382e8f7.js";function Fe($){let e;return{c(){e=q("canvas"),this.h()},l(r){e=F(r,"CANVAS",{slot:!0,class:!0}),k(e).forEach(_),this.h()},h(){te(e,"slot","canvas"),te(e,"class","svelte-1sfotsa")},m(r,t){R(r,e,t),$[7](e)},p:ge,d(r){r&&_(e),$[7](null)}}}function ke($){let e,r,t,n,o,m,i,c,b,g,D,S,Q,B,x,O,T,U,G,z,N,V,L,f,v;function X(a){$[5](a)}let Z={id:"depth",min:Be,max:Ie,step:1,onChange:$[4]};$[1]!==void 0&&(Z.value=$[1]),c=new me({props:Z}),oe.push(()=>ie(c,"value",X));function ne(a){$[6](a)}let s={id:"variation",min:Ne,max:Ve,step:1,onChange:$[4]};return $[2]!==void 0&&(s.value=$[2]),T=new me({props:s}),oe.push(()=>ie(T,"value",ne)),{c(){e=q("fieldset"),r=q("div"),t=q("label"),n=E("Depth: ("),o=E($[1]),m=E(")"),i=M(),W(c.$$.fragment),g=M(),D=q("div"),S=q("label"),Q=E("Variation: ("),B=E($[2]),x=E(")"),O=M(),W(T.$$.fragment),G=M(),z=q("div"),N=q("button"),V=E("Run"),this.h()},l(a){e=F(a,"FIELDSET",{slot:!0});var d=k(e);r=F(d,"DIV",{class:!0});var I=k(r);t=F(I,"LABEL",{for:!0});var p=k(t);n=w(p,"Depth: ("),o=w(p,$[1]),m=w(p,")"),p.forEach(_),i=P(I),Y(c.$$.fragment,I),I.forEach(_),g=P(d),D=F(d,"DIV",{class:!0});var u=k(D);S=F(u,"LABEL",{for:!0});var l=k(S);Q=w(l,"Variation: ("),B=w(l,$[2]),x=w(l,")"),l.forEach(_),O=P(u),Y(T.$$.fragment,u),u.forEach(_),G=P(d),z=F(d,"DIV",{class:!0});var A=k(z);N=F(A,"BUTTON",{});var ee=k(N);V=w(ee,"Run"),ee.forEach(_),A.forEach(_),d.forEach(_),this.h()},h(){te(t,"for","depth"),te(r,"class","demo-input-group"),te(S,"for","variation"),te(D,"class","demo-input-group"),te(z,"class","demo-input-group run svelte-1sfotsa"),te(e,"slot","controls")},m(a,d){R(a,e,d),h(e,r),h(r,t),h(t,n),h(t,o),h(t,m),h(r,i),H(c,r,null),h(e,g),h(e,D),h(D,S),h(S,Q),h(S,B),h(S,x),h(D,O),H(T,D,null),h(e,G),h(e,z),h(z,N),h(N,V),L=!0,f||(v=ve(N,"click",$[3]),f=!0)},p(a,d){(!L||d&2)&&le(o,a[1]);const I={};!b&&d&2&&(b=!0,I.value=a[1],fe(()=>b=!1)),c.$set(I),(!L||d&4)&&le(B,a[2]);const p={};!U&&d&4&&(U=!0,p.value=a[2],fe(()=>U=!1)),T.$set(p)},i(a){L||(J(c.$$.fragment,a),J(T.$$.fragment,a),L=!0)},o(a){K(c.$$.fragment,a),K(T.$$.fragment,a),L=!1},d(a){a&&_(e),j(c),j(T),f=!1,v()}}}function Le($){let e,r;return e=new Se({props:{caption:"Diamond Square",$$slots:{controls:[ke],canvas:[Fe]},$$scope:{ctx:$}}}),{c(){W(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,n){H(e,t,n),r=!0},p(t,[n]){const o={};n&67108871&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){r||(J(e.$$.fragment,t),r=!0)},o(t){K(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}const Ce=.5,Be=1,Ie=10,Ne=1,Ve=256;function ye($,e,r){let t,n,o=0,m=0,i=1,c=8,b=128,g,D=-1,S=-1,Q,B,x,O,T;const U=Float32Array.BYTES_PER_ELEMENT,G=`#version 300 es
	in vec2 position;
	in float color;

	out float vColor;
	void main() {
		vColor = color;
		gl_Position = vec4(position, 0.0, 1.0);
	}
	`,z=`#version 300 es
	precision highp float;

	in float vColor;

	out vec4 outColor;
	void main() {
		outColor = vec4(vec3(vColor), 1.0);
	}
	`;he(()=>{if(n=t.getContext("webgl2"),!n)return;function s(){i=Math.min(window.devicePixelRatio,2),t.clientWidth*i!==o&&(o=t.clientWidth,m=Math.floor(o*Ce),r(0,t.style.height=m+"px",t),o*=i,m*=i,r(0,t.width=o,t),r(0,t.height=m,t))}return window.addEventListener("resize",s,{passive:!0}),s(),N(),L(),()=>{window.removeEventListener("resize",s)}});function N(){const s=ce(n,n.VERTEX_SHADER,G),a=ce(n,n.FRAGMENT_SHADER,z);O=Te(n,{vert:s,frag:a}),D=n.getAttribLocation(O,"position"),S=n.getAttribLocation(O,"color"),Q=n.createVertexArray(),B=n.createBuffer(),x=n.createBuffer()}function V(){const s=[];let a=2**c;g=a+1;let d=b;for(let p=0;p<g;p++){const u=[];for(let l=0;l<g;l++)u.push(0);s.push(u)}const I=re(0,255);for(s[0][0]=I,s[0][a]=I,s[a][0]=I,s[a][a]=I;a>1;){const p=a/2;for(let u=0;u<g-1;u+=a)for(let l=0;l<g-1;l+=a){let A=s[u][l]+s[u][l+a]+s[u+a][l]+s[u+a][l+a];A/=4,A+=re(-d,d),s[u+p][l+p]=A}for(let u=0;u<g-1;u+=a)for(let l=0;l<g-1;l+=a){let A=s[u+p][l+p]+s[u][l]+s[u][l+a];u===0?A+=s[g-1][l+p]:A+=s[u+p][l+p],A/=4,A+=re(-d,d),s[u][l+p]=A;let ee=s[u+p][l+p]+s[u][l+a]+s[u+a][l+a];l+a===g-1?ee+=s[u+p][l]:ee+=s[u+p][l+a+p],ee/=4,ee+=re(-d,d),s[u+p][l+a]=ee;let C=s[u+p][l+p]+s[u+a][l+a]+s[u+a][l];u+a===g-1?C+=s[u][l+p]:C+=s[u+a+p][l+p],C/=4,C+=re(-d,d),s[u+a][l+p]=C;let y=s[u+p][l+p]+s[u][l]+s[u+a][l];l===0?y+=s[u+p][g-1]:y+=s[u+p][l-p],y/=4,y+=re(-d,d),s[u+p][l]=y}a/=2,d=Math.max(d/2,1)}return s}function L(){const s=V(),a=[],d=2**c;for(let C=0;C<g;C++)for(let y=0;y<g;y++){const ae=s[C][y]/255;a.push(y/d*2-1,(1-C/d)*2-1,ae)}const I=(2**c)**2;let p=[],u=0;const l=g;let A=0,ee=0;for(;u<I;){const C=A+ee*l,y=C+0,ae=C+1,_e=C+l+0,se=C+l+1;p.push(_e,se,y,se,ae,y),u++,A++,A===d&&(A=0,ee++)}T=p.length,n.bindVertexArray(Q),n.bindBuffer(n.ARRAY_BUFFER,B),n.bufferData(n.ARRAY_BUFFER,new Float32Array(a),n.STATIC_DRAW),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,x),n.bufferData(n.ELEMENT_ARRAY_BUFFER,new Int32Array(p),n.STATIC_DRAW),n.enableVertexAttribArray(D),n.vertexAttribPointer(D,2,n.FLOAT,!1,3*U,0),n.enableVertexAttribArray(S),n.vertexAttribPointer(S,1,n.FLOAT,!1,3*U,2*U),v()}const f=qe(L,200);function v(){n.viewport(0,0,o,m),n.clearColor(0,0,0,1),n.clear(n.COLOR_BUFFER_BIT),n.useProgram(O),n.bindVertexArray(Q),n.drawElements(n.TRIANGLES,T,n.UNSIGNED_INT,0)}function X(s){c=s,r(1,c)}function Z(s){b=s,r(2,b)}function ne(s){oe[s?"unshift":"push"](()=>{t=s,r(0,t)})}return[t,c,b,L,f,X,Z,ne]}class Me extends pe{constructor(e){super(),$e(this,e,ye,Le,de,{})}}function Pe($){let e;return{c(){e=E("Diamond Square")},l(r){e=w(r,"Diamond Square")},m(r,t){R(r,e,t)},d(r){r&&_(e)}}}function xe($){let e,r,t,n,o;return e=new Re({props:{timestamp:1652500800,$$slots:{default:[Pe]},$$scope:{ctx:$}}}),{c(){W(e.$$.fragment),r=M(),t=q("p"),n=E("Exploring terrain generation algorithms.")},l(m){Y(e.$$.fragment,m),r=P(m),t=F(m,"P",{});var i=k(t);n=w(i,"Exploring terrain generation algorithms."),i.forEach(_)},m(m,i){H(e,m,i),R(m,r,i),R(m,t,i),h(t,n),o=!0},p(m,i){const c={};i&1&&(c.$$scope={dirty:i,ctx:m}),e.$set(c)},i(m){o||(J(e.$$.fragment,m),o=!0)},o(m){K(e.$$.fragment,m),o=!1},d(m){j(e,m),m&&_(r),m&&_(t)}}}function Oe($){let e;return{c(){e=E("Demo")},l(r){e=w(r,"Demo")},m(r,t){R(r,e,t)},d(r){r&&_(e)}}}function Ue($){let e;return{c(){e=E("Wikipedia")},l(r){e=w(r,"Wikipedia")},m(r,t){R(r,e,t)},d(r){r&&_(e)}}}function Ge($){let e,r,t,n,o,m,i,c,b,g,D,S,Q,B,x,O,T,U,G,z,N,V,L;return e=new De({props:{id:"demo",$$slots:{default:[Oe]},$$scope:{ctx:$}}}),o=new Ee({props:{href:"https://en.wikipedia.org/wiki/Diamond-square_algorithm",$$slots:{default:[Ue]},$$scope:{ctx:$}}}),V=new Me({}),{c(){W(e.$$.fragment),r=M(),t=q("p"),n=E("From "),W(o.$$.fragment),m=E(":"),i=M(),c=q("blockquote"),b=q("p"),g=q("strong"),D=E("The diamond step"),S=E(`: For each square in the array,
				set the midpoint of that square to be the average of the four
				corner points plus a random value.`),Q=M(),B=q("p"),x=q("strong"),O=E("The square step"),T=E(`: For each diamond in the array,
				set the midpoint of that diamond to be the average of the four
				corner points plus a random value.`),U=M(),G=q("p"),z=E(`Depth is how many times the space is subdivided and variation
			controls how much a random value can fluctuate.`),N=M(),W(V.$$.fragment),this.h()},l(f){Y(e.$$.fragment,f),r=P(f),t=F(f,"P",{});var v=k(t);n=w(v,"From "),Y(o.$$.fragment,v),m=w(v,":"),v.forEach(_),i=P(f),c=F(f,"BLOCKQUOTE",{cite:!0});var X=k(c);b=F(X,"P",{});var Z=k(b);g=F(Z,"STRONG",{});var ne=k(g);D=w(ne,"The diamond step"),ne.forEach(_),S=w(Z,`: For each square in the array,
				set the midpoint of that square to be the average of the four
				corner points plus a random value.`),Z.forEach(_),Q=P(X),B=F(X,"P",{});var s=k(B);x=F(s,"STRONG",{});var a=k(x);O=w(a,"The square step"),a.forEach(_),T=w(s,`: For each diamond in the array,
				set the midpoint of that diamond to be the average of the four
				corner points plus a random value.`),s.forEach(_),X.forEach(_),U=P(f),G=F(f,"P",{});var d=k(G);z=w(d,`Depth is how many times the space is subdivided and variation
			controls how much a random value can fluctuate.`),d.forEach(_),N=P(f),Y(V.$$.fragment,f),this.h()},h(){te(c,"cite","https://en.wikipedia.org/wiki/Diamond-square_algorithm")},m(f,v){H(e,f,v),R(f,r,v),R(f,t,v),h(t,n),H(o,t,null),h(t,m),R(f,i,v),R(f,c,v),h(c,b),h(b,g),h(g,D),h(b,S),h(c,Q),h(c,B),h(B,x),h(x,O),h(B,T),R(f,U,v),R(f,G,v),h(G,z),R(f,N,v),H(V,f,v),L=!0},p(f,v){const X={};v&1&&(X.$$scope={dirty:v,ctx:f}),e.$set(X);const Z={};v&1&&(Z.$$scope={dirty:v,ctx:f}),o.$set(Z)},i(f){L||(J(e.$$.fragment,f),J(o.$$.fragment,f),J(V.$$.fragment,f),L=!0)},o(f){K(e.$$.fragment,f),K(o.$$.fragment,f),K(V.$$.fragment,f),L=!1},d(f){j(e,f),f&&_(r),f&&_(t),j(o),f&&_(i),f&&_(c),f&&_(U),f&&_(G),f&&_(N),j(V,f)}}}function ze($){let e,r,t,n;return e=new ue({props:{$$slots:{default:[xe]},$$scope:{ctx:$}}}),t=new ue({props:{$$slots:{default:[Ge]},$$scope:{ctx:$}}}),{c(){W(e.$$.fragment),r=M(),W(t.$$.fragment)},l(o){Y(e.$$.fragment,o),r=P(o),Y(t.$$.fragment,o)},m(o,m){H(e,o,m),R(o,r,m),H(t,o,m),n=!0},p(o,m){const i={};m&1&&(i.$$scope={dirty:m,ctx:o}),e.$set(i);const c={};m&1&&(c.$$scope={dirty:m,ctx:o}),t.$set(c)},i(o){n||(J(e.$$.fragment,o),J(t.$$.fragment,o),n=!0)},o(o){K(e.$$.fragment,o),K(t.$$.fragment,o),n=!1},d(o){j(e,o),o&&_(r),j(t,o)}}}function We($){let e,r,t,n,o,m;return e=new be({props:{title:"Diamond Square",description:"Generate noise-like patterns using diamond square algorithm",keywords:"Noise, Javascript, Creative Coding, Algorithm, Diamond Square"}}),t=new we({props:{$$slots:{default:[ze]},$$scope:{ctx:$}}}),o=new Ae({}),{c(){W(e.$$.fragment),r=M(),W(t.$$.fragment),n=M(),W(o.$$.fragment)},l(i){Y(e.$$.fragment,i),r=P(i),Y(t.$$.fragment,i),n=P(i),Y(o.$$.fragment,i)},m(i,c){H(e,i,c),R(i,r,c),H(t,i,c),R(i,n,c),H(o,i,c),m=!0},p(i,[c]){const b={};c&1&&(b.$$scope={dirty:c,ctx:i}),t.$set(b)},i(i){m||(J(e.$$.fragment,i),J(t.$$.fragment,i),J(o.$$.fragment,i),m=!0)},o(i){K(e.$$.fragment,i),K(t.$$.fragment,i),K(o.$$.fragment,i),m=!1},d(i){j(e,i),i&&_(r),j(t,i),i&&_(n),j(o,i)}}}class et extends pe{constructor(e){super(),$e(this,e,null,We,de,{})}}export{et as default};