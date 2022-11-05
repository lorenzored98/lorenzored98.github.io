import{S as pe,i as $e,s as de,w as W,x as Y,y as H,f as J,t as K,z as j,o as he,k as q,l as F,m as k,h as _,n as te,b as R,B as ge,J as oe,K as ie,q as E,a as M,r as w,c as x,G as h,L as ve,u as le,M as fe}from"../../../chunks/index-eac81cc4.js";import{S as be,B as Ee}from"../../../chunks/Seo-593c0eb7.js";import{M as we,F as Ae,S as ue,T as Re,a as De}from"../../../chunks/Footer-e049357b.js";import{D as Se}from"../../../chunks/DemoContainer-367e056c.js";import{N as me}from"../../../chunks/NumberRange-2f6f0500.js";import{r as re}from"../../../chunks/math-fcbdfd63.js";import{c as ce,a as Te}from"../../../chunks/gl-055e8196.js";import{d as qe}from"../../../chunks/core-2382e8f7.js";function Fe($){let e;return{c(){e=q("canvas"),this.h()},l(n){e=F(n,"CANVAS",{slot:!0,class:!0}),k(e).forEach(_),this.h()},h(){te(e,"slot","canvas"),te(e,"class","svelte-1sfotsa")},m(n,t){R(n,e,t),$[7](e)},p:ge,d(n){n&&_(e),$[7](null)}}}function ke($){let e,n,t,r,o,m,i,c,b,g,D,S,Q,B,P,O,T,U,G,z,I,N,L,f,v;function X(a){$[5](a)}let Z={id:"depth",min:Be,max:ye,step:1,onChange:$[4]};$[1]!==void 0&&(Z.value=$[1]),c=new me({props:Z}),oe.push(()=>ie(c,"value",X));function ne(a){$[6](a)}let s={id:"variation",min:Ie,max:Ne,step:1,onChange:$[4]};return $[2]!==void 0&&(s.value=$[2]),T=new me({props:s}),oe.push(()=>ie(T,"value",ne)),{c(){e=q("fieldset"),n=q("div"),t=q("label"),r=E("Depth: ("),o=E($[1]),m=E(")"),i=M(),W(c.$$.fragment),g=M(),D=q("div"),S=q("label"),Q=E("Variation: ("),B=E($[2]),P=E(")"),O=M(),W(T.$$.fragment),G=M(),z=q("div"),I=q("button"),N=E("Run"),this.h()},l(a){e=F(a,"FIELDSET",{slot:!0});var d=k(e);n=F(d,"DIV",{class:!0});var y=k(n);t=F(y,"LABEL",{for:!0});var p=k(t);r=w(p,"Depth: ("),o=w(p,$[1]),m=w(p,")"),p.forEach(_),i=x(y),Y(c.$$.fragment,y),y.forEach(_),g=x(d),D=F(d,"DIV",{class:!0});var u=k(D);S=F(u,"LABEL",{for:!0});var l=k(S);Q=w(l,"Variation: ("),B=w(l,$[2]),P=w(l,")"),l.forEach(_),O=x(u),Y(T.$$.fragment,u),u.forEach(_),G=x(d),z=F(d,"DIV",{class:!0});var A=k(z);I=F(A,"BUTTON",{});var ee=k(I);N=w(ee,"Run"),ee.forEach(_),A.forEach(_),d.forEach(_),this.h()},h(){te(t,"for","depth"),te(n,"class","demo-input-group"),te(S,"for","variation"),te(D,"class","demo-input-group"),te(z,"class","demo-input-group run svelte-1sfotsa"),te(e,"slot","controls")},m(a,d){R(a,e,d),h(e,n),h(n,t),h(t,r),h(t,o),h(t,m),h(n,i),H(c,n,null),h(e,g),h(e,D),h(D,S),h(S,Q),h(S,B),h(S,P),h(D,O),H(T,D,null),h(e,G),h(e,z),h(z,I),h(I,N),L=!0,f||(v=ve(I,"click",$[3]),f=!0)},p(a,d){(!L||d&2)&&le(o,a[1]);const y={};!b&&d&2&&(b=!0,y.value=a[1],fe(()=>b=!1)),c.$set(y),(!L||d&4)&&le(B,a[2]);const p={};!U&&d&4&&(U=!0,p.value=a[2],fe(()=>U=!1)),T.$set(p)},i(a){L||(J(c.$$.fragment,a),J(T.$$.fragment,a),L=!0)},o(a){K(c.$$.fragment,a),K(T.$$.fragment,a),L=!1},d(a){a&&_(e),j(c),j(T),f=!1,v()}}}function Le($){let e,n;return e=new Se({props:{caption:"Diamond Square",$$slots:{controls:[ke],canvas:[Fe]},$$scope:{ctx:$}}}),{c(){W(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,r){H(e,t,r),n=!0},p(t,[r]){const o={};r&67108871&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||(J(e.$$.fragment,t),n=!0)},o(t){K(e.$$.fragment,t),n=!1},d(t){j(e,t)}}}const Ce=.5,Be=1,ye=10,Ie=1,Ne=256;function Ve($,e,n){let t,r,o=0,m=0,i=1,c=8,b=128,g,D=-1,S=-1,Q,B,P,O,T;const U=Float32Array.BYTES_PER_ELEMENT,G=`#version 300 es
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
	`;he(()=>{if(r=t.getContext("webgl2"),!r)return;function s(){i=Math.min(window.devicePixelRatio,2),t.clientWidth*i!==o&&(o=t.clientWidth,m=Math.floor(o*Ce),n(0,t.style.width=o+"px",t),n(0,t.style.height=m+"px",t),o*=i,m*=i,n(0,t.width=o,t),n(0,t.height=m,t))}return window.addEventListener("resize",s,{passive:!0}),s(),I(),L(),()=>{window.removeEventListener("resize",s)}});function I(){const s=ce(r,r.VERTEX_SHADER,G),a=ce(r,r.FRAGMENT_SHADER,z);O=Te(r,{vert:s,frag:a}),D=r.getAttribLocation(O,"position"),S=r.getAttribLocation(O,"color"),Q=r.createVertexArray(),B=r.createBuffer(),P=r.createBuffer()}function N(){const s=[];let a=2**c;g=a+1;let d=b;for(let p=0;p<g;p++){const u=[];for(let l=0;l<g;l++)u.push(0);s.push(u)}const y=re(0,255);for(s[0][0]=y,s[0][a]=y,s[a][0]=y,s[a][a]=y;a>1;){const p=a/2;for(let u=0;u<g-1;u+=a)for(let l=0;l<g-1;l+=a){let A=s[u][l]+s[u][l+a]+s[u+a][l]+s[u+a][l+a];A/=4,A+=re(-d,d),s[u+p][l+p]=A}for(let u=0;u<g-1;u+=a)for(let l=0;l<g-1;l+=a){let A=s[u+p][l+p]+s[u][l]+s[u][l+a];u===0?A+=s[g-1][l+p]:A+=s[u+p][l+p],A/=4,A+=re(-d,d),s[u][l+p]=A;let ee=s[u+p][l+p]+s[u][l+a]+s[u+a][l+a];l+a===g-1?ee+=s[u+p][l]:ee+=s[u+p][l+a+p],ee/=4,ee+=re(-d,d),s[u+p][l+a]=ee;let C=s[u+p][l+p]+s[u+a][l+a]+s[u+a][l];u+a===g-1?C+=s[u][l+p]:C+=s[u+a+p][l+p],C/=4,C+=re(-d,d),s[u+a][l+p]=C;let V=s[u+p][l+p]+s[u][l]+s[u+a][l];l===0?V+=s[u+p][g-1]:V+=s[u+p][l-p],V/=4,V+=re(-d,d),s[u+p][l]=V}a/=2,d=Math.max(d/2,1)}return s}function L(){const s=N(),a=[],d=2**c;for(let C=0;C<g;C++)for(let V=0;V<g;V++){const ae=s[C][V]/255;a.push(V/d*2-1,(1-C/d)*2-1,ae)}const y=(2**c)**2;let p=[],u=0;const l=g;let A=0,ee=0;for(;u<y;){const C=A+ee*l,V=C+0,ae=C+1,_e=C+l+0,se=C+l+1;p.push(_e,se,V,se,ae,V),u++,A++,A===d&&(A=0,ee++)}T=p.length,r.bindVertexArray(Q),r.bindBuffer(r.ARRAY_BUFFER,B),r.bufferData(r.ARRAY_BUFFER,new Float32Array(a),r.STATIC_DRAW),r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,P),r.bufferData(r.ELEMENT_ARRAY_BUFFER,new Int32Array(p),r.STATIC_DRAW),r.enableVertexAttribArray(D),r.vertexAttribPointer(D,2,r.FLOAT,!1,3*U,0),r.enableVertexAttribArray(S),r.vertexAttribPointer(S,1,r.FLOAT,!1,3*U,2*U),v()}const f=qe(L,200);function v(){r.viewport(0,0,o,m),r.clearColor(0,0,0,1),r.clear(r.COLOR_BUFFER_BIT),r.useProgram(O),r.bindVertexArray(Q),r.drawElements(r.TRIANGLES,T,r.UNSIGNED_INT,0)}function X(s){c=s,n(1,c)}function Z(s){b=s,n(2,b)}function ne(s){oe[s?"unshift":"push"](()=>{t=s,n(0,t)})}return[t,c,b,L,f,X,Z,ne]}class Me extends pe{constructor(e){super(),$e(this,e,Ve,Le,de,{})}}function xe($){let e;return{c(){e=E("Diamond Square")},l(n){e=w(n,"Diamond Square")},m(n,t){R(n,e,t)},d(n){n&&_(e)}}}function Pe($){let e,n,t,r,o;return e=new Re({props:{timestamp:1652500800,$$slots:{default:[xe]},$$scope:{ctx:$}}}),{c(){W(e.$$.fragment),n=M(),t=q("p"),r=E("Exploring terrain generation algorithms.")},l(m){Y(e.$$.fragment,m),n=x(m),t=F(m,"P",{});var i=k(t);r=w(i,"Exploring terrain generation algorithms."),i.forEach(_)},m(m,i){H(e,m,i),R(m,n,i),R(m,t,i),h(t,r),o=!0},p(m,i){const c={};i&1&&(c.$$scope={dirty:i,ctx:m}),e.$set(c)},i(m){o||(J(e.$$.fragment,m),o=!0)},o(m){K(e.$$.fragment,m),o=!1},d(m){j(e,m),m&&_(n),m&&_(t)}}}function Oe($){let e;return{c(){e=E("Demo")},l(n){e=w(n,"Demo")},m(n,t){R(n,e,t)},d(n){n&&_(e)}}}function Ue($){let e;return{c(){e=E("Wikipedia")},l(n){e=w(n,"Wikipedia")},m(n,t){R(n,e,t)},d(n){n&&_(e)}}}function Ge($){let e,n,t,r,o,m,i,c,b,g,D,S,Q,B,P,O,T,U,G,z,I,N,L;return e=new De({props:{id:"demo",$$slots:{default:[Oe]},$$scope:{ctx:$}}}),o=new Ee({props:{href:"https://en.wikipedia.org/wiki/Diamond-square_algorithm",$$slots:{default:[Ue]},$$scope:{ctx:$}}}),N=new Me({}),{c(){W(e.$$.fragment),n=M(),t=q("p"),r=E("From "),W(o.$$.fragment),m=E(":"),i=M(),c=q("blockquote"),b=q("p"),g=q("strong"),D=E("The diamond step"),S=E(`: For each square in the array,
				set the midpoint of that square to be the average of the four
				corner points plus a random value.`),Q=M(),B=q("p"),P=q("strong"),O=E("The square step"),T=E(`: For each diamond in the array,
				set the midpoint of that diamond to be the average of the four
				corner points plus a random value.`),U=M(),G=q("p"),z=E(`Depth is how many times the space is subdivided and variation
			controls how much a random value can fluctuate.`),I=M(),W(N.$$.fragment),this.h()},l(f){Y(e.$$.fragment,f),n=x(f),t=F(f,"P",{});var v=k(t);r=w(v,"From "),Y(o.$$.fragment,v),m=w(v,":"),v.forEach(_),i=x(f),c=F(f,"BLOCKQUOTE",{cite:!0});var X=k(c);b=F(X,"P",{});var Z=k(b);g=F(Z,"STRONG",{});var ne=k(g);D=w(ne,"The diamond step"),ne.forEach(_),S=w(Z,`: For each square in the array,
				set the midpoint of that square to be the average of the four
				corner points plus a random value.`),Z.forEach(_),Q=x(X),B=F(X,"P",{});var s=k(B);P=F(s,"STRONG",{});var a=k(P);O=w(a,"The square step"),a.forEach(_),T=w(s,`: For each diamond in the array,
				set the midpoint of that diamond to be the average of the four
				corner points plus a random value.`),s.forEach(_),X.forEach(_),U=x(f),G=F(f,"P",{});var d=k(G);z=w(d,`Depth is how many times the space is subdivided and variation
			controls how much a random value can fluctuate.`),d.forEach(_),I=x(f),Y(N.$$.fragment,f),this.h()},h(){te(c,"cite","https://en.wikipedia.org/wiki/Diamond-square_algorithm")},m(f,v){H(e,f,v),R(f,n,v),R(f,t,v),h(t,r),H(o,t,null),h(t,m),R(f,i,v),R(f,c,v),h(c,b),h(b,g),h(g,D),h(b,S),h(c,Q),h(c,B),h(B,P),h(P,O),h(B,T),R(f,U,v),R(f,G,v),h(G,z),R(f,I,v),H(N,f,v),L=!0},p(f,v){const X={};v&1&&(X.$$scope={dirty:v,ctx:f}),e.$set(X);const Z={};v&1&&(Z.$$scope={dirty:v,ctx:f}),o.$set(Z)},i(f){L||(J(e.$$.fragment,f),J(o.$$.fragment,f),J(N.$$.fragment,f),L=!0)},o(f){K(e.$$.fragment,f),K(o.$$.fragment,f),K(N.$$.fragment,f),L=!1},d(f){j(e,f),f&&_(n),f&&_(t),j(o),f&&_(i),f&&_(c),f&&_(U),f&&_(G),f&&_(I),j(N,f)}}}function ze($){let e,n,t,r;return e=new ue({props:{$$slots:{default:[Pe]},$$scope:{ctx:$}}}),t=new ue({props:{$$slots:{default:[Ge]},$$scope:{ctx:$}}}),{c(){W(e.$$.fragment),n=M(),W(t.$$.fragment)},l(o){Y(e.$$.fragment,o),n=x(o),Y(t.$$.fragment,o)},m(o,m){H(e,o,m),R(o,n,m),H(t,o,m),r=!0},p(o,m){const i={};m&1&&(i.$$scope={dirty:m,ctx:o}),e.$set(i);const c={};m&1&&(c.$$scope={dirty:m,ctx:o}),t.$set(c)},i(o){r||(J(e.$$.fragment,o),J(t.$$.fragment,o),r=!0)},o(o){K(e.$$.fragment,o),K(t.$$.fragment,o),r=!1},d(o){j(e,o),o&&_(n),j(t,o)}}}function We($){let e,n,t,r,o,m;return e=new be({props:{title:"Diamond Square",description:"Generate noise-like patterns using diamond square algorithm",keywords:"Noise, Javascript, Creative Coding, Algorithm, Diamond Square"}}),t=new we({props:{$$slots:{default:[ze]},$$scope:{ctx:$}}}),o=new Ae({}),{c(){W(e.$$.fragment),n=M(),W(t.$$.fragment),r=M(),W(o.$$.fragment)},l(i){Y(e.$$.fragment,i),n=x(i),Y(t.$$.fragment,i),r=x(i),Y(o.$$.fragment,i)},m(i,c){H(e,i,c),R(i,n,c),H(t,i,c),R(i,r,c),H(o,i,c),m=!0},p(i,[c]){const b={};c&1&&(b.$$scope={dirty:c,ctx:i}),t.$set(b)},i(i){m||(J(e.$$.fragment,i),J(t.$$.fragment,i),J(o.$$.fragment,i),m=!0)},o(i){K(e.$$.fragment,i),K(t.$$.fragment,i),K(o.$$.fragment,i),m=!1},d(i){j(e,i),i&&_(n),j(t,i),i&&_(r),j(o,i)}}}class et extends pe{constructor(e){super(),$e(this,e,null,We,de,{})}}export{et as default};
