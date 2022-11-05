import{S as Te,i as De,s as Me,w as F,x as B,y as C,f as G,t as y,z as k,o as Be,k as h,l as w,m as E,h as u,n as I,b as A,B as Ce,J as pe,K as $e,q as $,a as D,r as d,c as M,R as Ge,G as f,T as Le,L as ye,u as de,M as _e,U as ke}from"../../../chunks/index-eac81cc4.js";import{S as Ie,B as Re}from"../../../chunks/Seo-593c0eb7.js";import{M as Ne,F as We,S as Se,T as Ve,a as Oe}from"../../../chunks/Footer-e049357b.js";import{D as qe}from"../../../chunks/DemoContainer-367e056c.js";import{N as ge}from"../../../chunks/NumberRange-2f6f0500.js";import{c as Ue,a as Ye,b as Xe,u as He}from"../../../chunks/gl-055e8196.js";const Je=`#version 300 es

in vec3 position;
in vec2 uv;

out vec2 vUv;

void main() {
	vUv = uv;
	gl_Position = vec4(position, 1.0);
}
`,Qe=`#version 300 es

precision highp float;

in vec2 vUv;

uniform float uTime;
uniform sampler2D uGrad;

uniform int uPattern;
uniform float uPatternSize;
uniform float uPatternGrid;
uniform float uRepeat;

out vec4 outColor;

// https://thebookofshaders.com/13/
float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}

// Based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

#define OCTAVES 8
float fbm (in vec2 st) {
    // Initial values
    float value = 0.0;
    float amplitude = .5;
    float frequency = 0.;
    //
    // Loop of octaves
    for (int i = 0; i < OCTAVES; i++) {
        value += amplitude * noise(st);
        st *= 2.;
        amplitude *= .5;
    }
    return value;
}

// https://iquilezles.org/articles/warp/
float domainWarp(vec2 p) {
	vec2 q = vec2( fbm( p + vec2(0.0,0.0) ),
                   fbm( p + vec2(5.2,1.3) ) );

    vec2 r = vec2( fbm( p + 4.0*q + vec2(1.7,9.2) ),
                   fbm( p + 4.0*q + vec2(8.3,2.8) ) );

    return fbm( p + 4.0*r );
}

vec2 gridUv(vec2 uv, float t) {
	return floor(uv * t) / t;
}

float remap(float v, vec2 inMinMax, vec2 outMinMax) {
	return 
		outMinMax.x + (v - inMinMax.x) * 
		(outMinMax.y - outMinMax.x) / (inMinMax.y - inMinMax.x);
}

float circle(vec2 uv, float s) {
	float d = length(2.0 * uv - 1.0);
	return step(d, s);
}

float box (vec2 uv, float s, float r){
	vec2 d = abs(2.0 * uv - 1.0) - s;
    float sdf = length(max(d,0.0)) + min(max(d.x,d.y),0.0);

	return step(r, 1.0 - sdf);
}

void main() {
	vec2 dwUv = vUv;
	dwUv = gridUv(dwUv, uRepeat);
	dwUv /= gridUv(dwUv + vec2(1.0, -3.0), uRepeat / 1.3);

	float scrollX = fbm(vUv * 3.0 - uTime);
	float scrollY = fbm(vec2(vUv.y, vUv.x) * 3.0 + uTime);

	float warp = domainWarp(dwUv + vec2(scrollX, scrollY));
	
	warp = remap(warp, vec2(0.10, 0.75), vec2(0.0, 1.0));
	
	vec2 pUv = fract(vUv * uPatternGrid);

	float pattern;

	if(uPattern == 0) {
		pattern = box(pUv, uPatternSize * warp, 0.75);
	}else if(uPattern == 1) {
		pattern = circle(pUv, uPatternSize * warp);
	}

	vec3 gradient = texture(uGrad, vec2(warp)).rgb;

	outColor = vec4(vec3(pattern) * gradient, 1.0);
}`;function Ke(s){let e;return{c(){e=h("canvas"),this.h()},l(r){e=w(r,"CANVAS",{slot:!0,class:!0}),E(e).forEach(u),this.h()},h(){I(e,"slot","canvas"),I(e,"class","svelte-10p45u9")},m(r,n){A(r,e,n),s[9](e)},p:Ce,d(r){r&&u(e),s[9](null)}}}function je(s){let e,r,n,t,o,l,a,c,g,R,q,S,p,N,T,Y,X,P,x,W,i,m,U,L,z,Q,V,Z,ne,H,J,re,ee,_,ae,O,oe,K,ve,be;function xe(v){s[6](v)}let he={id:"pattern-size",min:tt,max:nt,step:.01,onChange:null};s[2]!==void 0&&(he.value=s[2]),P=new ge({props:he}),pe.push(()=>$e(P,"value",xe));function ze(v){s[7](v)}let we={id:"pattern-grid",min:rt,max:at,step:1,onChange:null};s[3]!==void 0&&(we.value=s[3]),V=new ge({props:we}),pe.push(()=>$e(V,"value",ze));function Fe(v){s[8](v)}let Ee={id:"repeat",min:ot,max:it,step:1,onChange:null};return s[4]!==void 0&&(Ee.value=s[4]),O=new ge({props:Ee}),pe.push(()=>$e(O,"value",Fe)),{c(){e=h("fieldset"),r=h("div"),n=h("label"),t=$("Pattern"),o=D(),l=h("select"),a=h("option"),c=$("Box"),g=h("option"),R=$("Circle"),q=D(),S=h("div"),p=h("label"),N=$("Pattern Size: ("),T=$(s[2]),Y=$(")"),X=D(),F(P.$$.fragment),W=D(),i=h("div"),m=h("label"),U=$("Pattern Grid: ("),L=$(s[3]),z=$(")"),Q=D(),F(V.$$.fragment),ne=D(),H=h("div"),J=h("label"),re=$("Repeat: ("),ee=$(s[4]),_=$(")"),ae=D(),F(O.$$.fragment),this.h()},l(v){e=w(v,"FIELDSET",{slot:!0});var b=E(e);r=w(b,"DIV",{class:!0});var j=E(r);n=w(j,"LABEL",{for:!0});var ie=E(n);t=d(ie,"Pattern"),ie.forEach(u),o=M(j),l=w(j,"SELECT",{id:!0});var te=E(l);a=w(te,"OPTION",{default:!0});var Ae=E(a);c=d(Ae,"Box"),Ae.forEach(u),g=w(te,"OPTION",{});var Pe=E(g);R=d(Pe,"Circle"),Pe.forEach(u),te.forEach(u),j.forEach(u),q=M(b),S=w(b,"DIV",{class:!0});var le=E(S);p=w(le,"LABEL",{for:!0});var se=E(p);N=d(se,"Pattern Size: ("),T=d(se,s[2]),Y=d(se,")"),se.forEach(u),X=M(le),B(P.$$.fragment,le),le.forEach(u),W=M(b),i=w(b,"DIV",{class:!0});var fe=E(i);m=w(fe,"LABEL",{for:!0});var ue=E(m);U=d(ue,"Pattern Grid: ("),L=d(ue,s[3]),z=d(ue,")"),ue.forEach(u),Q=M(fe),B(V.$$.fragment,fe),fe.forEach(u),ne=M(b),H=w(b,"DIV",{class:!0});var me=E(H);J=w(me,"LABEL",{for:!0});var ce=E(J);re=d(ce,"Repeat: ("),ee=d(ce,s[4]),_=d(ce,")"),ce.forEach(u),ae=M(me),B(O.$$.fragment,me),me.forEach(u),b.forEach(u),this.h()},h(){I(n,"for","pattern"),I(a,"default",""),a.__value=0,a.value=a.__value,g.__value=1,g.value=g.__value,I(l,"id","pattern"),s[1]===void 0&&Ge(()=>s[5].call(l)),I(r,"class","demo-input-group"),I(p,"for","pattern-size"),I(S,"class","demo-input-group"),I(m,"for","pattern-grid"),I(i,"class","demo-input-group"),I(J,"for","repeat"),I(H,"class","demo-input-group"),I(e,"slot","controls")},m(v,b){A(v,e,b),f(e,r),f(r,n),f(n,t),f(r,o),f(r,l),f(l,a),f(a,c),f(l,g),f(g,R),Le(l,s[1]),f(e,q),f(e,S),f(S,p),f(p,N),f(p,T),f(p,Y),f(S,X),C(P,S,null),f(e,W),f(e,i),f(i,m),f(m,U),f(m,L),f(m,z),f(i,Q),C(V,i,null),f(e,ne),f(e,H),f(H,J),f(J,re),f(J,ee),f(J,_),f(H,ae),C(O,H,null),K=!0,ve||(be=ye(l,"change",s[5]),ve=!0)},p(v,b){b[0]&2&&Le(l,v[1]),(!K||b[0]&4)&&de(T,v[2]);const j={};!x&&b[0]&4&&(x=!0,j.value=v[2],_e(()=>x=!1)),P.$set(j),(!K||b[0]&8)&&de(L,v[3]);const ie={};!Z&&b[0]&8&&(Z=!0,ie.value=v[3],_e(()=>Z=!1)),V.$set(ie),(!K||b[0]&16)&&de(ee,v[4]);const te={};!oe&&b[0]&16&&(oe=!0,te.value=v[4],_e(()=>oe=!1)),O.$set(te)},i(v){K||(G(P.$$.fragment,v),G(V.$$.fragment,v),G(O.$$.fragment,v),K=!0)},o(v){y(P.$$.fragment,v),y(V.$$.fragment,v),y(O.$$.fragment,v),K=!1},d(v){v&&u(e),k(P),k(V),k(O),ve=!1,be()}}}function Ze(s){let e,r;return e=new qe({props:{caption:"Domain Warping",$$slots:{controls:[je],canvas:[Ke]},$$scope:{ctx:s}}}),{c(){F(e.$$.fragment)},l(n){B(e.$$.fragment,n)},m(n,t){C(e,n,t),r=!0},p(n,t){const o={};t[0]&31|t[1]&1&&(o.$$scope={dirty:t,ctx:n}),e.$set(o)},i(n){r||(G(e.$$.fragment,n),r=!0)},o(n){y(e.$$.fragment,n),r=!1},d(n){k(e,n)}}}const et=1,tt=.01,nt=2.5,rt=30,at=150,ot=10,it=150;function lt(s,e,r){let n,t,o=0,l=0,a=1,c=-1,g=-1,R,q,S,p;const N=Float32Array.BYTES_PER_ELEMENT;let T={value:null,id:-1},Y,X,P,x,W,i,m=0,U,L=1.5,z=75,Q=100;Be(()=>{if(t=n.getContext("webgl2"),!t)return;function _(){a=Math.min(window.devicePixelRatio,2),n.clientWidth*a!==o&&(o=n.clientWidth,l=Math.floor(o*et),r(0,n.style.width=o+"px",n),r(0,n.style.height=l+"px",n),o*=a,l*=a,r(0,n.width=o,n),r(0,n.height=l,n))}return window.addEventListener("resize",_,{passive:!0}),_(),V(),Z(),()=>{window.removeEventListener("resize",_)}});function V(){const _=Ue(t,t.VERTEX_SHADER,Je),ae=Ue(t,t.FRAGMENT_SHADER,Qe);p=Ye(t,{vert:_,frag:ae}),c=t.getAttribLocation(p,"position"),g=t.getAttribLocation(p,"uv"),Y=t.getUniformLocation(p,"uTime"),X=t.getUniformLocation(p,"uGrad"),P=t.getUniformLocation(p,"uPattern"),x=t.getUniformLocation(p,"uPatternSize"),W=t.getUniformLocation(p,"uPatternGrid"),i=t.getUniformLocation(p,"uRepeat"),R=t.createVertexArray(),q=t.createBuffer(),S=t.createBuffer(),T=Xe(t,{src:"/domain-warping1/grad.png",internalFormat:"rgb",target:"rgb"});const O=[-1,-1,0,0,0,1,-1,0,1,0,-1,1,0,0,1,1,1,0,1,1],oe=[0,1,2,1,3,2];t.bindVertexArray(R),t.bindBuffer(t.ARRAY_BUFFER,q),t.bufferData(t.ARRAY_BUFFER,new Float32Array(O),t.STATIC_DRAW),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,S),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Int32Array(oe),t.STATIC_DRAW),t.enableVertexAttribArray(c),t.vertexAttribPointer(c,3,t.FLOAT,!1,5*N,0),t.enableVertexAttribArray(g),t.vertexAttribPointer(g,2,t.FLOAT,!1,5*N,3*N)}function Z(_=0){t.viewport(0,0,o,l),t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT),m=_*.001,t.useProgram(p),t.bindVertexArray(R),t.uniform1f(Y,m),t.uniform1i(P,U),t.uniform1f(x,L),t.uniform1f(W,z),t.uniform1f(i,Q),He(t,T.value,T.id),t.uniform1i(X,T.id),t.drawElements(t.TRIANGLES,6,t.UNSIGNED_INT,0),window.requestAnimationFrame(Z)}function ne(){U=ke(this),r(1,U)}function H(_){L=_,r(2,L)}function J(_){z=_,r(3,z)}function re(_){Q=_,r(4,Q)}function ee(_){pe[_?"unshift":"push"](()=>{n=_,r(0,n)})}return[n,U,L,z,Q,ne,H,J,re,ee]}class st extends Te{constructor(e){super(),De(this,e,lt,Ze,Me,{},null,[-1,-1])}}function ft(s){let e;return{c(){e=$("Domain Warping [1]")},l(r){e=d(r,"Domain Warping [1]")},m(r,n){A(r,e,n)},d(r){r&&u(e)}}}function ut(s){let e,r,n,t,o;return e=new Ve({props:{timestamp:1665824041,$$slots:{default:[ft]},$$scope:{ctx:s}}}),{c(){F(e.$$.fragment),r=D(),n=h("p"),t=$("Noise exploration.")},l(l){B(e.$$.fragment,l),r=M(l),n=w(l,"P",{});var a=E(n);t=d(a,"Noise exploration."),a.forEach(u)},m(l,a){C(e,l,a),A(l,r,a),A(l,n,a),f(n,t),o=!0},p(l,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:l}),e.$set(c)},i(l){o||(G(e.$$.fragment,l),o=!0)},o(l){y(e.$$.fragment,l),o=!1},d(l){k(e,l),l&&u(r),l&&u(n)}}}function mt(s){let e;return{c(){e=$("Demo")},l(r){e=d(r,"Demo")},m(r,n){A(r,e,n)},d(r){r&&u(e)}}}function ct(s){let e;return{c(){e=$("domain warping")},l(r){e=d(r,"domain warping")},m(r,n){A(r,e,n)},d(r){r&&u(e)}}}function pt(s){let e;return{c(){e=$("Unity Demo")},l(r){e=d(r,"Unity Demo")},m(r,n){A(r,e,n)},d(r){r&&u(e)}}}function vt(s){let e,r,n,t,o,l,a,c,g,R,q,S,p,N,T,Y,X,P,x,W;return e=new Oe({props:{id:"demo",$$slots:{default:[mt]},$$scope:{ctx:s}}}),o=new Re({props:{href:"https://iquilezles.org/articles/warp/",$$slots:{default:[ct]},$$scope:{ctx:s}}}),R=new Re({props:{href:"https://styly.cc/tips/unity-shader-domainwarping-dotpattern/",$$slots:{default:[pt]},$$scope:{ctx:s}}}),x=new st({}),{c(){F(e.$$.fragment),r=D(),n=h("p"),t=$("Inigo Quilez's article on "),F(o.$$.fragment),l=$("."),a=D(),c=h("p"),g=$("Original "),F(R.$$.fragment),q=$("."),S=D(),p=h("p"),N=$("Play around with controls, "),T=h("var"),Y=$("Pattern Size"),X=$(` especially, can make
			this effect very different.`),P=D(),F(x.$$.fragment)},l(i){B(e.$$.fragment,i),r=M(i),n=w(i,"P",{});var m=E(n);t=d(m,"Inigo Quilez's article on "),B(o.$$.fragment,m),l=d(m,"."),m.forEach(u),a=M(i),c=w(i,"P",{});var U=E(c);g=d(U,"Original "),B(R.$$.fragment,U),q=d(U,"."),U.forEach(u),S=M(i),p=w(i,"P",{});var L=E(p);N=d(L,"Play around with controls, "),T=w(L,"VAR",{});var z=E(T);Y=d(z,"Pattern Size"),z.forEach(u),X=d(L,` especially, can make
			this effect very different.`),L.forEach(u),P=M(i),B(x.$$.fragment,i)},m(i,m){C(e,i,m),A(i,r,m),A(i,n,m),f(n,t),C(o,n,null),f(n,l),A(i,a,m),A(i,c,m),f(c,g),C(R,c,null),f(c,q),A(i,S,m),A(i,p,m),f(p,N),f(p,T),f(T,Y),f(p,X),A(i,P,m),C(x,i,m),W=!0},p(i,m){const U={};m&1&&(U.$$scope={dirty:m,ctx:i}),e.$set(U);const L={};m&1&&(L.$$scope={dirty:m,ctx:i}),o.$set(L);const z={};m&1&&(z.$$scope={dirty:m,ctx:i}),R.$set(z)},i(i){W||(G(e.$$.fragment,i),G(o.$$.fragment,i),G(R.$$.fragment,i),G(x.$$.fragment,i),W=!0)},o(i){y(e.$$.fragment,i),y(o.$$.fragment,i),y(R.$$.fragment,i),y(x.$$.fragment,i),W=!1},d(i){k(e,i),i&&u(r),i&&u(n),k(o),i&&u(a),i&&u(c),k(R),i&&u(S),i&&u(p),i&&u(P),k(x,i)}}}function $t(s){let e,r,n,t;return e=new Se({props:{$$slots:{default:[ut]},$$scope:{ctx:s}}}),n=new Se({props:{$$slots:{default:[vt]},$$scope:{ctx:s}}}),{c(){F(e.$$.fragment),r=D(),F(n.$$.fragment)},l(o){B(e.$$.fragment,o),r=M(o),B(n.$$.fragment,o)},m(o,l){C(e,o,l),A(o,r,l),C(n,o,l),t=!0},p(o,l){const a={};l&1&&(a.$$scope={dirty:l,ctx:o}),e.$set(a);const c={};l&1&&(c.$$scope={dirty:l,ctx:o}),n.$set(c)},i(o){t||(G(e.$$.fragment,o),G(n.$$.fragment,o),t=!0)},o(o){y(e.$$.fragment,o),y(n.$$.fragment,o),t=!1},d(o){k(e,o),o&&u(r),k(n,o)}}}function dt(s){let e,r,n,t,o,l;return e=new Ie({props:{title:"Domain Warping",description:"Domain Warping experiments",keywords:"Noise, Javascript, Creative Coding, Algorithm, WebGL2, Domain Warping, Shaders, GLSL"}}),n=new Ne({props:{$$slots:{default:[$t]},$$scope:{ctx:s}}}),o=new We({}),{c(){F(e.$$.fragment),r=D(),F(n.$$.fragment),t=D(),F(o.$$.fragment)},l(a){B(e.$$.fragment,a),r=M(a),B(n.$$.fragment,a),t=M(a),B(o.$$.fragment,a)},m(a,c){C(e,a,c),A(a,r,c),C(n,a,c),A(a,t,c),C(o,a,c),l=!0},p(a,[c]){const g={};c&1&&(g.$$scope={dirty:c,ctx:a}),n.$set(g)},i(a){l||(G(e.$$.fragment,a),G(n.$$.fragment,a),G(o.$$.fragment,a),l=!0)},o(a){y(e.$$.fragment,a),y(n.$$.fragment,a),y(o.$$.fragment,a),l=!1},d(a){k(e,a),a&&u(r),k(n,a),a&&u(t),k(o,a)}}}class At extends Te{constructor(e){super(),De(this,e,null,dt,Me,{})}}export{At as default};
