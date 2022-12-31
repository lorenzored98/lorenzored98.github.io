import{S as Se,i as Te,s as Me,w as k,x as I,y as W,f as N,t as V,z as O,o as ze,k as h,l as w,m as E,h as f,n as D,b as x,B as Be,J as pe,K as de,q as v,a as y,r as d,c as z,R as Ce,G as l,T as Le,L as Fe,u as ge,M as _e,U as Ge}from"../../../chunks/index-6be07ad6.js";import{B as Re}from"../../../chunks/BlankLink-db4a2256.js";import{M as ke,S as Ie,T as We}from"../../../chunks/Main-e874f9b3.js";import{S as Ne}from"../../../chunks/Seo-8afd16e9.js";import{D as Ve}from"../../../chunks/DemoContainer-02f198f6.js";import{N as $e}from"../../../chunks/NumberRange-767509e5.js";import{c as Ue,a as Oe,b as qe,u as Ye}from"../../../chunks/gl-a52fa1b4.js";const Xe=`#version 300 es

in vec3 position;
in vec2 uv;

out vec2 vUv;

void main() {
	vUv = uv;
	gl_Position = vec4(position, 1.0);
}
`,He=`#version 300 es

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
}`;function Je(i){let e;return{c(){e=h("canvas"),this.h()},l(r){e=w(r,"CANVAS",{slot:!0,class:!0}),E(e).forEach(f),this.h()},h(){D(e,"slot","canvas"),D(e,"class","svelte-10p45u9")},m(r,n){x(r,e,n),i[9](e)},p:Be,d(r){r&&f(e),i[9](null)}}}function Qe(i){let e,r,n,t,o,u,p,A,P,L,q,R,c,B,S,Y,X,$,T,C,a,s,U,b,M,Q,F,Z,ne,H,J,re,ee,g,ae,G,oe,K,ve,be;function De(m){i[6](m)}let he={id:"pattern-size",min:Ze,max:et,step:.01,onChange:null};i[2]!==void 0&&(he.value=i[2]),$=new $e({props:he}),pe.push(()=>de($,"value",De,i[2]));function xe(m){i[7](m)}let we={id:"pattern-grid",min:tt,max:nt,step:1,onChange:null};i[3]!==void 0&&(we.value=i[3]),F=new $e({props:we}),pe.push(()=>de(F,"value",xe,i[3]));function ye(m){i[8](m)}let Ee={id:"repeat",min:rt,max:at,step:1,onChange:null};return i[4]!==void 0&&(Ee.value=i[4]),G=new $e({props:Ee}),pe.push(()=>de(G,"value",ye,i[4])),{c(){e=h("fieldset"),r=h("div"),n=h("label"),t=v("Pattern"),o=y(),u=h("select"),p=h("option"),A=v("Box"),P=h("option"),L=v("Circle"),q=y(),R=h("div"),c=h("label"),B=v("Pattern Size: ("),S=v(i[2]),Y=v(")"),X=y(),k($.$$.fragment),C=y(),a=h("div"),s=h("label"),U=v("Pattern Grid: ("),b=v(i[3]),M=v(")"),Q=y(),k(F.$$.fragment),ne=y(),H=h("div"),J=h("label"),re=v("Repeat: ("),ee=v(i[4]),g=v(")"),ae=y(),k(G.$$.fragment),this.h()},l(m){e=w(m,"FIELDSET",{slot:!0});var _=E(e);r=w(_,"DIV",{class:!0});var j=E(r);n=w(j,"LABEL",{for:!0});var ie=E(n);t=d(ie,"Pattern"),ie.forEach(f),o=z(j),u=w(j,"SELECT",{id:!0});var te=E(u);p=w(te,"OPTION",{default:!0});var Ae=E(p);A=d(Ae,"Box"),Ae.forEach(f),P=w(te,"OPTION",{});var Pe=E(P);L=d(Pe,"Circle"),Pe.forEach(f),te.forEach(f),j.forEach(f),q=z(_),R=w(_,"DIV",{class:!0});var le=E(R);c=w(le,"LABEL",{for:!0});var se=E(c);B=d(se,"Pattern Size: ("),S=d(se,i[2]),Y=d(se,")"),se.forEach(f),X=z(le),I($.$$.fragment,le),le.forEach(f),C=z(_),a=w(_,"DIV",{class:!0});var fe=E(a);s=w(fe,"LABEL",{for:!0});var ue=E(s);U=d(ue,"Pattern Grid: ("),b=d(ue,i[3]),M=d(ue,")"),ue.forEach(f),Q=z(fe),I(F.$$.fragment,fe),fe.forEach(f),ne=z(_),H=w(_,"DIV",{class:!0});var ce=E(H);J=w(ce,"LABEL",{for:!0});var me=E(J);re=d(me,"Repeat: ("),ee=d(me,i[4]),g=d(me,")"),me.forEach(f),ae=z(ce),I(G.$$.fragment,ce),ce.forEach(f),_.forEach(f),this.h()},h(){D(n,"for","pattern"),D(p,"default",""),p.__value=0,p.value=p.__value,P.__value=1,P.value=P.__value,D(u,"id","pattern"),i[1]===void 0&&Ce(()=>i[5].call(u)),D(r,"class","demo-input-group"),D(c,"for","pattern-size"),D(R,"class","demo-input-group"),D(s,"for","pattern-grid"),D(a,"class","demo-input-group"),D(J,"for","repeat"),D(H,"class","demo-input-group"),D(e,"slot","controls")},m(m,_){x(m,e,_),l(e,r),l(r,n),l(n,t),l(r,o),l(r,u),l(u,p),l(p,A),l(u,P),l(P,L),Le(u,i[1]),l(e,q),l(e,R),l(R,c),l(c,B),l(c,S),l(c,Y),l(R,X),W($,R,null),l(e,C),l(e,a),l(a,s),l(s,U),l(s,b),l(s,M),l(a,Q),W(F,a,null),l(e,ne),l(e,H),l(H,J),l(J,re),l(J,ee),l(J,g),l(H,ae),W(G,H,null),K=!0,ve||(be=Fe(u,"change",i[5]),ve=!0)},p(m,_){_[0]&2&&Le(u,m[1]),(!K||_[0]&4)&&ge(S,m[2]);const j={};!T&&_[0]&4&&(T=!0,j.value=m[2],_e(()=>T=!1)),$.$set(j),(!K||_[0]&8)&&ge(b,m[3]);const ie={};!Z&&_[0]&8&&(Z=!0,ie.value=m[3],_e(()=>Z=!1)),F.$set(ie),(!K||_[0]&16)&&ge(ee,m[4]);const te={};!oe&&_[0]&16&&(oe=!0,te.value=m[4],_e(()=>oe=!1)),G.$set(te)},i(m){K||(N($.$$.fragment,m),N(F.$$.fragment,m),N(G.$$.fragment,m),K=!0)},o(m){V($.$$.fragment,m),V(F.$$.fragment,m),V(G.$$.fragment,m),K=!1},d(m){m&&f(e),O($),O(F),O(G),ve=!1,be()}}}function Ke(i){let e,r;return e=new Ve({props:{caption:"Domain Warping",$$slots:{controls:[Qe],canvas:[Je]},$$scope:{ctx:i}}}),{c(){k(e.$$.fragment)},l(n){I(e.$$.fragment,n)},m(n,t){W(e,n,t),r=!0},p(n,t){const o={};t[0]&31|t[1]&1&&(o.$$scope={dirty:t,ctx:n}),e.$set(o)},i(n){r||(N(e.$$.fragment,n),r=!0)},o(n){V(e.$$.fragment,n),r=!1},d(n){O(e,n)}}}const je=1,Ze=.01,et=2.5,tt=30,nt=150,rt=10,at=150;function ot(i,e,r){let n,t,o=0,u=0,p=1,A=-1,P=-1,L,q,R,c;const B=Float32Array.BYTES_PER_ELEMENT;let S={value:null,id:0},Y,X,$,T,C,a,s=0,U,b=1.5,M=75,Q=100;ze(()=>{if(t=n.getContext("webgl2"),!t)return;function g(){p=Math.min(window.devicePixelRatio,2),n.clientWidth*p!==o&&(o=n.clientWidth,u=Math.floor(o*je),r(0,n.style.width=o+"px",n),r(0,n.style.height=u+"px",n),o*=p,u*=p,r(0,n.width=o,n),r(0,n.height=u,n))}return window.addEventListener("resize",g,{passive:!0}),g(),F(),Z(),()=>{window.removeEventListener("resize",g)}});function F(){const g=Ue(t,t.VERTEX_SHADER,Xe),ae=Ue(t,t.FRAGMENT_SHADER,He);c=Oe(t,{vert:g,frag:ae}),A=t.getAttribLocation(c,"position"),P=t.getAttribLocation(c,"uv"),Y=t.getUniformLocation(c,"uTime"),X=t.getUniformLocation(c,"uGrad"),$=t.getUniformLocation(c,"uPattern"),T=t.getUniformLocation(c,"uPatternSize"),C=t.getUniformLocation(c,"uPatternGrid"),a=t.getUniformLocation(c,"uRepeat"),L=t.createVertexArray(),q=t.createBuffer(),R=t.createBuffer(),S=qe(t,{src:"/domain-warping1/grad.png",internalFormat:"rgb",target:"rgb"});const G=[-1,-1,0,0,0,1,-1,0,1,0,-1,1,0,0,1,1,1,0,1,1],oe=[0,1,2,1,3,2];t.bindVertexArray(L),t.bindBuffer(t.ARRAY_BUFFER,q),t.bufferData(t.ARRAY_BUFFER,new Float32Array(G),t.STATIC_DRAW),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,R),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Int32Array(oe),t.STATIC_DRAW),t.enableVertexAttribArray(A),t.vertexAttribPointer(A,3,t.FLOAT,!1,5*B,0),t.enableVertexAttribArray(P),t.vertexAttribPointer(P,2,t.FLOAT,!1,5*B,3*B)}function Z(g=0){t.viewport(0,0,o,u),t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT),s=g*.001,t.useProgram(c),t.bindVertexArray(L),t.uniform1f(Y,s),t.uniform1i($,U),t.uniform1f(T,b),t.uniform1f(C,M),t.uniform1f(a,Q),Ye(t,S.value,S.id),t.uniform1i(X,S.id),t.drawElements(t.TRIANGLES,6,t.UNSIGNED_INT,0),window.requestAnimationFrame(Z)}function ne(){U=Ge(this),r(1,U)}function H(g){b=g,r(2,b)}function J(g){M=g,r(3,M)}function re(g){Q=g,r(4,Q)}function ee(g){pe[g?"unshift":"push"](()=>{n=g,r(0,n)})}return[n,U,b,M,Q,ne,H,J,re,ee]}class it extends Se{constructor(e){super(),Te(this,e,ot,Ke,Me,{},null,[-1,-1])}}function lt(i){let e;return{c(){e=v("Domain Warping")},l(r){e=d(r,"Domain Warping")},m(r,n){x(r,e,n)},d(r){r&&f(e)}}}function st(i){let e;return{c(){e=v("domain warping")},l(r){e=d(r,"domain warping")},m(r,n){x(r,e,n)},d(r){r&&f(e)}}}function ft(i){let e;return{c(){e=v("Unity Demo")},l(r){e=d(r,"Unity Demo")},m(r,n){x(r,e,n)},d(r){r&&f(e)}}}function ut(i){let e,r,n,t,o,u,p,A,P,L,q,R,c,B,S,Y,X,$,T,C;return e=new We({props:{timestamp:1665824041,$$slots:{default:[lt]},$$scope:{ctx:i}}}),o=new Re({props:{href:"https://iquilezles.org/articles/warp/",$$slots:{default:[st]},$$scope:{ctx:i}}}),L=new Re({props:{href:"https://styly.cc/tips/unity-shader-domainwarping-dotpattern/",$$slots:{default:[ft]},$$scope:{ctx:i}}}),T=new it({}),{c(){k(e.$$.fragment),r=y(),n=h("p"),t=v("Inigo Quilez's article on "),k(o.$$.fragment),u=v("."),p=y(),A=h("p"),P=v("Original "),k(L.$$.fragment),q=v("."),R=y(),c=h("p"),B=v("Play around with controls, "),S=h("var"),Y=v("Pattern Size"),X=v(` especially, can make
			this effect very different.`),$=y(),k(T.$$.fragment)},l(a){I(e.$$.fragment,a),r=z(a),n=w(a,"P",{});var s=E(n);t=d(s,"Inigo Quilez's article on "),I(o.$$.fragment,s),u=d(s,"."),s.forEach(f),p=z(a),A=w(a,"P",{});var U=E(A);P=d(U,"Original "),I(L.$$.fragment,U),q=d(U,"."),U.forEach(f),R=z(a),c=w(a,"P",{});var b=E(c);B=d(b,"Play around with controls, "),S=w(b,"VAR",{});var M=E(S);Y=d(M,"Pattern Size"),M.forEach(f),X=d(b,` especially, can make
			this effect very different.`),b.forEach(f),$=z(a),I(T.$$.fragment,a)},m(a,s){W(e,a,s),x(a,r,s),x(a,n,s),l(n,t),W(o,n,null),l(n,u),x(a,p,s),x(a,A,s),l(A,P),W(L,A,null),l(A,q),x(a,R,s),x(a,c,s),l(c,B),l(c,S),l(S,Y),l(c,X),x(a,$,s),W(T,a,s),C=!0},p(a,s){const U={};s&1&&(U.$$scope={dirty:s,ctx:a}),e.$set(U);const b={};s&1&&(b.$$scope={dirty:s,ctx:a}),o.$set(b);const M={};s&1&&(M.$$scope={dirty:s,ctx:a}),L.$set(M)},i(a){C||(N(e.$$.fragment,a),N(o.$$.fragment,a),N(L.$$.fragment,a),N(T.$$.fragment,a),C=!0)},o(a){V(e.$$.fragment,a),V(o.$$.fragment,a),V(L.$$.fragment,a),V(T.$$.fragment,a),C=!1},d(a){O(e,a),a&&f(r),a&&f(n),O(o),a&&f(p),a&&f(A),O(L),a&&f(R),a&&f(c),a&&f($),O(T,a)}}}function ct(i){let e,r;return e=new Ie({props:{$$slots:{default:[ut]},$$scope:{ctx:i}}}),{c(){k(e.$$.fragment)},l(n){I(e.$$.fragment,n)},m(n,t){W(e,n,t),r=!0},p(n,t){const o={};t&1&&(o.$$scope={dirty:t,ctx:n}),e.$set(o)},i(n){r||(N(e.$$.fragment,n),r=!0)},o(n){V(e.$$.fragment,n),r=!1},d(n){O(e,n)}}}function mt(i){let e,r,n,t;return e=new Ne({props:{title:"Domain Warping",description:"Domain Warping experiments",keywords:"Noise, Javascript, Creative Coding, Algorithm, WebGL2, Domain Warping, Shaders, GLSL"}}),n=new ke({props:{$$slots:{default:[ct]},$$scope:{ctx:i}}}),{c(){k(e.$$.fragment),r=y(),k(n.$$.fragment)},l(o){I(e.$$.fragment,o),r=z(o),I(n.$$.fragment,o)},m(o,u){W(e,o,u),x(o,r,u),W(n,o,u),t=!0},p(o,[u]){const p={};u&1&&(p.$$scope={dirty:u,ctx:o}),n.$set(p)},i(o){t||(N(e.$$.fragment,o),N(n.$$.fragment,o),t=!0)},o(o){V(e.$$.fragment,o),V(n.$$.fragment,o),t=!1},d(o){O(e,o),o&&f(r),O(n,o)}}}class ht extends Se{constructor(e){super(),Te(this,e,null,mt,Me,{})}}export{ht as default};
