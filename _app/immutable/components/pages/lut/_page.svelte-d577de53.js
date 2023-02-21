import{S as gp,i as Ap,s as Sp,k as s,l as r,m as l,h as e,Q as Vs,n as C,b as x,G as t,B as Ep,w as lt,x as ot,y as pt,f as it,t as ft,z as ct,o as Pc,I as Ac,J as Nc,a as $,q as a,c as F,r as n,M as yc,N as vc,K as xc,L as bc,R as Tc,P as wc,u as Lc,p as i}from"../../../chunks/index-2162bef6.js";import{B as $c}from"../../../chunks/BlankLink-275cdf8b.js";import{M as Fc,S as mp,T as Uc}from"../../../chunks/Main-24fc2ca5.js";import{S as Sc}from"../../../chunks/Subtitle-4a2b00e2.js";import{S as Cc}from"../../../chunks/Seo-865e1a2e.js";import{D as Rc}from"../../../chunks/DemoContainer-698f1404.js";import{N as zc}from"../../../chunks/NumberRange-bdb9d155.js";import{c as dc,a as Ic,b as _c,u as mc}from"../../../chunks/gl-a52fa1b4.js";function kc(m){let p,u,f;return{c(){p=s("div"),u=s("img"),this.h()},l(E){p=r(E,"DIV",{class:!0});var v=l(p);u=r(v,"IMG",{src:!0,width:!0,height:!0,alt:!0,loading:!0}),v.forEach(e),this.h()},h(){Vs(u.src,f=m[2])||C(u,"src",f),C(u,"width",m[0]),C(u,"height",m[1]),C(u,"alt",m[3]),C(u,"loading",m[4]),C(p,"class","svelte-gskluf")},m(E,v){x(E,p,v),t(p,u)},p(E,[v]){v&4&&!Vs(u.src,f=E[2])&&C(u,"src",f),v&1&&C(u,"width",E[0]),v&2&&C(u,"height",E[1]),v&8&&C(u,"alt",E[3]),v&16&&C(u,"loading",E[4])},i:Ep,o:Ep,d(E){E&&e(p)}}}function Oc(m,p,u){let{width:f}=p,{height:E}=p,{src:v}=p,{alt:h}=p,{loading:A="lazy"}=p;return m.$$set=g=>{"width"in g&&u(0,f=g.width),"height"in g&&u(1,E=g.height),"src"in g&&u(2,v=g.src),"alt"in g&&u(3,h=g.alt),"loading"in g&&u(4,A=g.loading)},[f,E,v,h,A]}class Dc extends gp{constructor(p){super(),Ap(this,p,Oc,kc,Sp,{width:0,height:1,src:2,alt:3,loading:4})}}const Vc=`#version 300 es

in vec2 position;

void main() {
	gl_Position = vec4(position, 0.0, 1.0);
}
`,Gc=`#version 300 es

precision highp float;

uniform vec2 uRes;
uniform sampler2D uTex;
uniform sampler2D uLUT;
uniform float uLUTSize;
uniform float uStrength;

out vec4 outColor;

void main() {
	vec2 uv = gl_FragCoord.xy / uRes;
	vec4 tex = texture(uTex, uv);

	tex.r = clamp(0.0, 1.0, tex.r);
	tex.g = clamp(0.0, 1.0, tex.g);
	tex.b = clamp(0.0, 1.0, tex.b);
	
	vec4 lut = texture(uLUT, uv);

	float maxSize = uLUTSize - 1.0;
	float maxCellCoord = 1.0 - (1.0 / uLUTSize);
	vec2 halfTexel = 0.5 / vec2(uLUTSize * uLUTSize, uLUTSize);

	float redOffset = halfTexel.x + tex.r * (maxCellCoord / uLUTSize);
	float greenOffset = halfTexel.y + tex.g * maxCellCoord;

	float blue = tex.b * maxSize;

	float leftCell = floor(blue);
	float rightCell = ceil(blue);

	vec2 left = vec2(
		leftCell / uLUTSize + redOffset,
		greenOffset
	);

	vec2 right = vec2(
		rightCell / uLUTSize + redOffset,
		greenOffset
	);

	vec3 color = mix(
		texture(uLUT, left).rgb,
		texture(uLUT, right).rgb,
		fract(blue)
	);

	color = mix(tex.rgb, color, uStrength);	

	outColor = vec4(color, tex.a);
}`;function Ec(m,p,u){const f=m.slice();return f[29]=p[u],f[31]=u,f}function Bc(m){let p;return{c(){p=s("canvas"),this.h()},l(u){p=r(u,"CANVAS",{slot:!0,class:!0}),l(p).forEach(e),this.h()},h(){C(p,"slot","canvas"),C(p,"class","svelte-1540kvn")},m(u,f){x(u,p,f),m[8](p)},p:Ep,d(u){u&&e(p),m[8](null)}}}function gc(m){let p,u=m[29].name+"",f,E;return{c(){p=s("option"),f=a(u),E=$(),this.h()},l(v){p=r(v,"OPTION",{default:!0});var h=l(p);f=n(h,u),E=F(h),h.forEach(e),this.h()},h(){C(p,"default",m[31]===0),p.__value=m[31],p.value=p.__value},m(v,h){x(v,p,h),t(p,f),t(p,E)},p(v,h){h[0]&1&&u!==(u=v[29].name+"")&&Lc(f,u)},d(v){v&&e(p)}}}function Wc(m){let p,u,f,E,v,h,A,g,_,o,y,O,I,S,P,D,b,X,B,nt,H,W=m[0],L=[];for(let N=0;N<W.length;N+=1)L[N]=gc(Ec(m,W,N));function J(N){m[7](N)}let K={id:"strength",min:0,max:1,step:.01,onChange:null};return m[4]!==void 0&&(K.value=m[4]),b=new zc({props:K}),Ac.push(()=>Nc(b,"value",J)),{c(){p=s("fieldset"),u=s("div"),f=s("img"),h=$(),A=s("div"),g=s("label"),_=a("LUT Texture"),o=$(),y=s("select");for(let N=0;N<L.length;N+=1)L[N].c();O=$(),I=s("div"),S=s("label"),P=a("Strength"),D=$(),lt(b.$$.fragment),this.h()},l(N){p=r(N,"FIELDSET",{slot:!0});var k=l(p);u=r(k,"DIV",{class:!0});var q=l(u);f=r(q,"IMG",{id:!0,src:!0,width:!0,height:!0,alt:!0}),q.forEach(e),h=F(k),A=r(k,"DIV",{class:!0});var R=l(A);g=r(R,"LABEL",{for:!0});var Z=l(g);_=n(Z,"LUT Texture"),Z.forEach(e),o=F(R),y=r(R,"SELECT",{id:!0});var j=l(y);for(let V=0;V<L.length;V+=1)L[V].l(j);j.forEach(e),R.forEach(e),O=F(k),I=r(k,"DIV",{class:!0});var U=l(I);S=r(U,"LABEL",{for:!0});var M=l(S);P=n(M,"Strength"),M.forEach(e),D=F(U),ot(b.$$.fragment,U),U.forEach(e),k.forEach(e),this.h()},h(){C(f,"id","lut"),Vs(f.src,E=m[5].src)||C(f,"src",E),C(f,"width",m[3]),C(f,"height",v=m[3]/32),C(f,"alt","Look up table texture"),C(u,"class","demo-input-group lut svelte-1540kvn"),C(g,"for","texture"),C(y,"id","texture"),m[1]===void 0&&yc(()=>m[6].call(y)),C(A,"class","demo-input-group"),C(S,"for","strength"),C(I,"class","demo-input-group"),C(p,"slot","controls")},m(N,k){x(N,p,k),t(p,u),t(u,f),t(p,h),t(p,A),t(A,g),t(g,_),t(A,o),t(A,y);for(let q=0;q<L.length;q+=1)L[q].m(y,null);vc(y,m[1]),t(p,O),t(p,I),t(I,S),t(S,P),t(I,D),pt(b,I,null),B=!0,nt||(H=xc(y,"change",m[6]),nt=!0)},p(N,k){if((!B||k[0]&32&&!Vs(f.src,E=N[5].src))&&C(f,"src",E),(!B||k[0]&8)&&C(f,"width",N[3]),(!B||k[0]&8&&v!==(v=N[3]/32))&&C(f,"height",v),k[0]&1){W=N[0];let R;for(R=0;R<W.length;R+=1){const Z=Ec(N,W,R);L[R]?L[R].p(Z,k):(L[R]=gc(Z),L[R].c(),L[R].m(y,null))}for(;R<L.length;R+=1)L[R].d(1);L.length=W.length}k[0]&2&&vc(y,N[1]);const q={};!X&&k[0]&16&&(X=!0,q.value=N[4],bc(()=>X=!1)),b.$set(q)},i(N){B||(it(b.$$.fragment,N),B=!0)},o(N){ft(b.$$.fragment,N),B=!1},d(N){N&&e(p),Tc(L,N),ct(b),nt=!1,H()}}}function qc(m){let p,u;return p=new Rc({props:{id:"lut-demo",caption:"LUT",$$slots:{controls:[Wc],canvas:[Bc]},$$scope:{ctx:m}}}),{c(){lt(p.$$.fragment)},l(f){ot(p.$$.fragment,f)},m(f,E){pt(p,f,E),u=!0},p(f,E){const v={};E[0]&63|E[1]&2&&(v.$$scope={dirty:E,ctx:f}),p.$set(v)},i(f){u||(it(p.$$.fragment,f),u=!0)},o(f){ft(p.$$.fragment,f),u=!1},d(f){ct(p,f)}}}function Mc(m,p,u){let f,E,v,h,A=0,g=0,_,o=0,y=-1,O,I,S,P;const D=Float32Array.BYTES_PER_ELEMENT,b=[{image:null,texture:{value:null,id:0},name:"Neutral",src:"/lut/neutral.webp"},{image:null,texture:{value:null,id:0},name:"Darken",src:"/lut/darken.webp"},{image:null,texture:{value:null,id:0},name:"Grayscale",src:"/lut/grayscale.webp"},{image:null,texture:{value:null,id:0},name:"Sepia",src:"/lut/sepia.webp"}];let X={value:null,id:0},B,nt,H,W,L,J=0,K=1;Pc(()=>{if(h=v.getContext("webgl2"),!h)return;E=document.getElementById("lut-demo");function U(){const M=E.clientWidth,V=window.innerHeight-window.innerHeight/4;if(A=_.width,g=_.height,M>0&&V>0){if(A>M){const z=M/A;A*=z,g*=z}if(g>V){const z=V/g;A*=z,g*=z}A=Math.floor(A),g=Math.floor(g)}u(3,o=A),u(2,v.width=A,v),u(2,v.height=g,v),u(2,v.style.width=`${A}px`,v),u(2,v.style.height=`${g}px`,v)}return _=new Image,_.crossOrigin="anonymous",_.onload=()=>{U(),q().then(()=>{N(),k()})},_.src="/images/ukiyo-e.webp",window.addEventListener("resize",U,{passive:!0}),()=>{window.removeEventListener("resize",U)}});function N(){const U=dc(h,h.VERTEX_SHADER,Vc),M=dc(h,h.FRAGMENT_SHADER,Gc);P=Ic(h,{vert:U,frag:M}),y=h.getAttribLocation(P,"position"),B=h.getUniformLocation(P,"uRes"),nt=h.getUniformLocation(P,"uTex"),H=h.getUniformLocation(P,"uLUT"),W=h.getUniformLocation(P,"uLUTSize"),L=h.getUniformLocation(P,"uStrength"),O=h.createVertexArray(),I=h.createBuffer(),S=h.createBuffer(),X=_c(h,{src:_,internalFormat:"rgba",target:"rgba",flipY:!0});for(let st=0;st<b.length;st++)u(0,b[st].texture=_c(h,{src:b[st].image,internalFormat:"rgba",target:"rgba",minFilter:"LINEAR",magFilter:"LINEAR",flipY:!0}),b);const V=[-1,-1,1,-1,-1,1,1,1],z=[0,1,2,1,3,2];h.bindVertexArray(O),h.bindBuffer(h.ARRAY_BUFFER,I),h.bufferData(h.ARRAY_BUFFER,new Float32Array(V),h.STATIC_DRAW),h.bindBuffer(h.ELEMENT_ARRAY_BUFFER,S),h.bufferData(h.ELEMENT_ARRAY_BUFFER,new Int32Array(z),h.STATIC_DRAW),h.enableVertexAttribArray(y),h.vertexAttribPointer(y,2,h.FLOAT,!1,2*D,0)}function k(){h.viewport(0,0,A,g),h.clearColor(0,0,0,1),h.clear(h.COLOR_BUFFER_BIT),h.useProgram(P),h.bindVertexArray(O),h.uniform2f(B,A,g),h.uniform1f(L,K),h.uniform1f(W,32),mc(h,X.value,X.id),h.uniform1i(nt,X.id),mc(h,f.texture.value,f.texture.id),h.uniform1i(H,f.texture.id),h.drawElements(h.TRIANGLES,6,h.UNSIGNED_INT,0),window.requestAnimationFrame(k)}async function q(){const U=new Array(b.length);for(let M=0;M<b.length;M++)U[M]=new Promise(V=>{const z=b[M];z.image=new Image,z.image.crossOrigin="anonymous",z.image.src=z.src,z.image.onload=()=>{V(!0)}});return Promise.all(U)}function R(){J=wc(this),u(1,J)}function Z(U){K=U,u(4,K)}function j(U){Ac[U?"unshift":"push"](()=>{v=U,u(2,v)})}return m.$$.update=()=>{m.$$.dirty[0]&3&&u(5,f=b[J])},[b,J,v,o,K,f,R,Z,j]}class Yc extends gp{constructor(p){super(),Ap(this,p,Mc,qc,Sp,{},null,[-1,-1])}}function Hc(m){let p;return{c(){p=a("LUT")},l(u){p=n(u,"LUT")},m(u,f){x(u,p,f)},d(u){u&&e(p)}}}function Jc(m){let p,u,f,E,v,h,A,g,_,o,y,O,I,S,P,D,b,X,B,nt,H,W,L,J,K,N,k,q,R,Z,j,U,M,V,z,st,ut,Pt,Lt,$t,te,ht,ee,_t,Nt,ae,rt,Q,ne,mt,se,yt,Ft,xt,re,Wt,tt,bt,qt;return p=new Uc({props:{timestamp:1667670429,$$slots:{default:[Hc]},$$scope:{ctx:m}}}),P=new Dc({props:{src:"/lut/neutral.webp",width:1024,height:32,alt:"Neutral LUT"}}),{c(){lt(p.$$.fragment),u=$(),f=s("p"),E=a("This is a "),v=s("strong"),h=a("L"),A=a("ook"),g=s("strong"),_=a("u"),o=a(`p
			`),y=s("strong"),O=a("T"),I=a("able texture."),S=$(),lt(P.$$.fragment),D=$(),b=s("p"),X=a("This is a "),B=s("var"),nt=a("1024x32"),H=a(` texture. It's not the only possible representation
			or size. Often it can be represented as a "grid" instead of a "row" like
			the one above. This post deals with the "row" kind, and even though the
			shader to apply it might change between different representations, the
			concept behind it remains the same.`),W=$(),L=s("p"),J=a(`For those familiar with shader programming, it's apparent that the
			first small quad is something like `),K=s("var"),N=a("vec3(uv, 0.0)"),k=a(`
			and the last quad is `),q=s("var"),R=a("vec3(uv, 1.0)"),Z=a(`. This tells us that
			there is a blue channel progression (from left to right in this
			case).`),j=$(),U=s("p"),M=a("For those not familiar with shaders you can visualize it this way:"),V=$(),z=s("ul"),st=s("li"),ut=a(`Red (x) is a gradient that goes from left to right. Left being 0
				and right 1.`),Pt=$(),Lt=s("li"),$t=a(`Green (y) is a gradient that goes from bottom to top. Bottom
				being 0 and top 1.`),te=$(),ht=s("li"),ee=a(`Blue (z) is a color that remains constant for a quad. It
				increases by some amount for every quad.`),_t=$(),Nt=s("p"),ae=a(`Imagine recomposing a cube from this texture using the blue channel
			as its z-axis. We end up with a cube that stores the LUT colors. If
			we think about RGB as a position vector inside the newly created
			cube volume, we can find the LUT color that maps to the original
			image RGB color.`),rt=$(),Q=s("p"),ne=a(`To accurately represent each color we would need a gigantic
			256x256x256 LUT. This is not possible or simply not worth it in many
			cases. We can instead take advantage of `),mt=s("var"),se=a("GL_LINEAR"),yt=a(`
			and `),Ft=s("var"),xt=a("mix()"),re=a(" to get away with a much smaller texture size."),Wt=$(),tt=s("p"),bt=a(`This specific texture is a neutral LUT. If we were to apply it (and
			you can do this in the demo below) to an image, there would be no
			difference.`)},l(d){ot(p.$$.fragment,d),u=F(d),f=r(d,"P",{});var T=l(f);E=n(T,"This is a "),v=r(T,"STRONG",{});var vt=l(v);h=n(vt,"L"),vt.forEach(e),A=n(T,"ook"),g=r(T,"STRONG",{});var Pe=l(g);_=n(Pe,"u"),Pe.forEach(e),o=n(T,`p
			`),y=r(T,"STRONG",{});var Ut=l(y);O=n(Ut,"T"),Ut.forEach(e),I=n(T,"able texture."),T.forEach(e),S=F(d),ot(P.$$.fragment,d),D=F(d),b=r(d,"P",{});var Mt=l(b);X=n(Mt,"This is a "),B=r(Mt,"VAR",{});var Ne=l(B);nt=n(Ne,"1024x32"),Ne.forEach(e),H=n(Mt,` texture. It's not the only possible representation
			or size. Often it can be represented as a "grid" instead of a "row" like
			the one above. This post deals with the "row" kind, and even though the
			shader to apply it might change between different representations, the
			concept behind it remains the same.`),Mt.forEach(e),W=F(d),L=r(d,"P",{});var et=l(L);J=n(et,`For those familiar with shader programming, it's apparent that the
			first small quad is something like `),K=r(et,"VAR",{});var Ct=l(K);N=n(Ct,"vec3(uv, 0.0)"),Ct.forEach(e),k=n(et,`
			and the last quad is `),q=r(et,"VAR",{});var ye=l(q);R=n(ye,"vec3(uv, 1.0)"),ye.forEach(e),Z=n(et,`. This tells us that
			there is a blue channel progression (from left to right in this
			case).`),et.forEach(e),j=F(d),U=r(d,"P",{});var Yt=l(U);M=n(Yt,"For those not familiar with shaders you can visualize it this way:"),Yt.forEach(e),V=F(d),z=r(d,"UL",{});var Tt=l(z);st=r(Tt,"LI",{});var Rt=l(st);ut=n(Rt,`Red (x) is a gradient that goes from left to right. Left being 0
				and right 1.`),Rt.forEach(e),Pt=F(Tt),Lt=r(Tt,"LI",{});var xe=l(Lt);$t=n(xe,`Green (y) is a gradient that goes from bottom to top. Bottom
				being 0 and top 1.`),xe.forEach(e),te=F(Tt),ht=r(Tt,"LI",{});var zt=l(ht);ee=n(zt,`Blue (z) is a color that remains constant for a quad. It
				increases by some amount for every quad.`),zt.forEach(e),Tt.forEach(e),_t=F(d),Nt=r(d,"P",{});var be=l(Nt);ae=n(be,`Imagine recomposing a cube from this texture using the blue channel
			as its z-axis. We end up with a cube that stores the LUT colors. If
			we think about RGB as a position vector inside the newly created
			cube volume, we can find the LUT color that maps to the original
			image RGB color.`),be.forEach(e),rt=F(d),Q=r(d,"P",{});var wt=l(Q);ne=n(wt,`To accurately represent each color we would need a gigantic
			256x256x256 LUT. This is not possible or simply not worth it in many
			cases. We can instead take advantage of `),mt=r(wt,"VAR",{});var le=l(mt);se=n(le,"GL_LINEAR"),le.forEach(e),yt=n(wt,`
			and `),Ft=r(wt,"VAR",{});var Te=l(Ft);xt=n(Te,"mix()"),Te.forEach(e),re=n(wt," to get away with a much smaller texture size."),wt.forEach(e),Wt=F(d),tt=r(d,"P",{});var It=l(tt);bt=n(It,`This specific texture is a neutral LUT. If we were to apply it (and
			you can do this in the demo below) to an image, there would be no
			difference.`),It.forEach(e)},m(d,T){pt(p,d,T),x(d,u,T),x(d,f,T),t(f,E),t(f,v),t(v,h),t(f,A),t(f,g),t(g,_),t(f,o),t(f,y),t(y,O),t(f,I),x(d,S,T),pt(P,d,T),x(d,D,T),x(d,b,T),t(b,X),t(b,B),t(B,nt),t(b,H),x(d,W,T),x(d,L,T),t(L,J),t(L,K),t(K,N),t(L,k),t(L,q),t(q,R),t(L,Z),x(d,j,T),x(d,U,T),t(U,M),x(d,V,T),x(d,z,T),t(z,st),t(st,ut),t(z,Pt),t(z,Lt),t(Lt,$t),t(z,te),t(z,ht),t(ht,ee),x(d,_t,T),x(d,Nt,T),t(Nt,ae),x(d,rt,T),x(d,Q,T),t(Q,ne),t(Q,mt),t(mt,se),t(Q,yt),t(Q,Ft),t(Ft,xt),t(Q,re),x(d,Wt,T),x(d,tt,T),t(tt,bt),qt=!0},p(d,T){const vt={};T&1&&(vt.$$scope={dirty:T,ctx:d}),p.$set(vt)},i(d){qt||(it(p.$$.fragment,d),it(P.$$.fragment,d),qt=!0)},o(d){ft(p.$$.fragment,d),ft(P.$$.fragment,d),qt=!1},d(d){ct(p,d),d&&e(u),d&&e(f),d&&e(S),ct(P,d),d&&e(D),d&&e(b),d&&e(W),d&&e(L),d&&e(j),d&&e(U),d&&e(V),d&&e(z),d&&e(_t),d&&e(Nt),d&&e(rt),d&&e(Q),d&&e(Wt),d&&e(tt)}}}function Kc(m){let p;return{c(){p=a("Texture3D")},l(u){p=n(u,"Texture3D")},m(u,f){x(u,p,f)},d(u){u&&e(p)}}}function Qc(m){let p;return{c(){p=a("stackoverflow answer")},l(u){p=n(u,"stackoverflow answer")},m(u,f){x(u,p,f)},d(u){u&&e(p)}}}function Xc(m){let p,u,f,E,v,h,A,g,_,o,y,O,I;return p=new Sc({props:{id:"texture-3d",$$slots:{default:[Kc]},$$scope:{ctx:m}}}),y=new $c({props:{href:"https://stackoverflow.com/a/65161148",$$slots:{default:[Qc]},$$scope:{ctx:m}}}),{c(){lt(p.$$.fragment),u=$(),f=s("p"),E=a("Using WebGL2 we have access to 3D textures. Using "),v=s("var"),h=a("texStorage3D()"),A=a(`
			and `),g=s("var"),_=a("texSubImage3D()"),o=a(` WebGL2 will construct the volume cube
			for us. After that we need a simple shader that takes the original
			texture color and uses it to index the cube. There is a good
			`),lt(y.$$.fragment),O=a(`
			that outlines how to do this.`)},l(S){ot(p.$$.fragment,S),u=F(S),f=r(S,"P",{});var P=l(f);E=n(P,"Using WebGL2 we have access to 3D textures. Using "),v=r(P,"VAR",{});var D=l(v);h=n(D,"texStorage3D()"),D.forEach(e),A=n(P,`
			and `),g=r(P,"VAR",{});var b=l(g);_=n(b,"texSubImage3D()"),b.forEach(e),o=n(P,` WebGL2 will construct the volume cube
			for us. After that we need a simple shader that takes the original
			texture color and uses it to index the cube. There is a good
			`),ot(y.$$.fragment,P),O=n(P,`
			that outlines how to do this.`),P.forEach(e)},m(S,P){pt(p,S,P),x(S,u,P),x(S,f,P),t(f,E),t(f,v),t(v,h),t(f,A),t(f,g),t(g,_),t(f,o),pt(y,f,null),t(f,O),I=!0},p(S,P){const D={};P&1&&(D.$$scope={dirty:P,ctx:S}),p.$set(D);const b={};P&1&&(b.$$scope={dirty:P,ctx:S}),y.$set(b)},i(S){I||(it(p.$$.fragment,S),it(y.$$.fragment,S),I=!0)},o(S){ft(p.$$.fragment,S),ft(y.$$.fragment,S),I=!1},d(S){ct(p,S),S&&e(u),S&&e(f),ct(y)}}}function jc(m){let p;return{c(){p=a("Shader Lookup")},l(u){p=n(u,"Shader Lookup")},m(u,f){x(u,p,f)},d(u){u&&e(p)}}}function Zc(m){let p,u,f,E,v,h,A,g,_,o,y,O,I,S,P,D,b,X,B,nt,H,W,L,J,K,N,k,q,R,Z,j,U,M,V,z,st,ut,Pt,Lt,$t,te,ht,ee,_t,Nt,ae,rt,Q,ne,mt,se,yt,Ft,xt,re,Wt,tt,bt,qt,d,T,vt,Pe,Ut,Mt,Ne,et,Ct,ye,Yt,Tt,Rt,xe,zt,be,wt,le,Te,It,we,Gs,Le,Bs,Ws,fs,qs,Ht,$e,Ms,gn,Ys,Fe,Hs,Ue,Js,Ks,An,Ce,Qs,Xs,oe,Re,js,ze,Zs,Ie,tr,er,cs,ar,Et,ke,nr,Oe,sr,De,rr,Ve,lr,Ge,or,Be,pr,We,ir,fr,gt,qe,cr,Me,ur,Ye,hr,He,vr,Je,dr,Ke,_r,Qe,mr,Er,At,Xe,gr,je,Ar,Ze,Sr,ta,Pr,ea,Nr,aa,yr,na,xr,br,Sn,Pn,Tr,wr,pe,sa,Lr,ra,$r,la,Fr,Ur,us,Cr,kt,Nn,Rr,oa,zr,pa,Ir,ia,kr,fa,Or,Dr,St,yn,Vr,ca,Gr,ua,Br,ha,Wr,va,qr,da,Mr,_a,Yr,Hr,Ot,ma,Jr,Ea,Kr,ga,Qr,Aa,Xr,Sa,jr,Zr,hs,tl,ie,xn,el,Pa,al,Na,nl,sl,fe,bn,rl,ya,ll,xa,ol,pl,vs,il,ce,Tn,fl,ba,cl,Ta,ul,hl,ds,vl,Dt,wn,dl,wa,_l,La,ml,$a,El,Fa,gl,Al,Vt,Ln,Sl,Ua,Pl,Ca,Nl,Ra,yl,za,xl,bl,_s,Tl,ue,Ia,wl,ka,Ll,Oa,$l,Fl,$n,Da,Ul,Cl,Fn,Va,Rl,zl,Un,Ga,Il,kl,ms,Ol,he,Ba,Dl,Wa,Vl,qa,Gl,Bl,Cn,Ma,Wl,ql,Rn,Ya,Ml,Yl,zn,Ha,Hl,Jl,Es,Kl,ve,Ja,Ql,Ka,Xl,Qa,jl,Zl,de,In,to,Xa,eo,ja,ao,no,_e,kn,so,Za,ro,tn,lo,oo,me,On,po,en,io,an,fo,co,Dn,nn,uo,ho,gs,vo,Ee,sn,_o,rn,mo,ln,Eo,go,As,Ao,ge,on,So,pn,Po,fn,No,yo,Vn,cn,xo,bo,Ss,G,Gn,To,wo,un,Bn,Lo,$o,Fo,hn,Wn,Uo,Co,Ro,Jt,qn,zo,Io,Mn,ko,Oo,Do,dt,Yn,Vo,Go,Hn,Bo,Wo,Jn,qo,Mo,Kn,Yo,Ho,Jo,Gt,Ko,Qn,Qo,Xo,Xn,jo,Zo,tp,Kt,jn,ep,ap,Zn,np,sp,rp,Ae,lp,ts,op,pp,ip,Se,fp,es,cp,up,Ps;return p=new Sc({props:{id:"shader-lookup",$$slots:{default:[jc]},$$scope:{ctx:m}}}),{c(){lt(p.$$.fragment),u=$(),f=s("p"),E=a(`For those who have to support WebGL1, or for whatever reason don't
			want to use a 3D texture, there is a way of doing it inside a
			fragment shader.`),v=$(),h=s("p"),A=a("Here's the shader:"),g=$(),_=s("pre"),o=s("code"),y=s("span"),O=s("span"),I=a("#version "),S=s("span"),P=a("300"),D=s("span"),b=a(" es"),X=a(`
`),B=s("span"),nt=a(`
`),H=s("span"),W=s("span"),L=a("precision highp "),J=s("span"),K=a("float"),N=s("span"),k=a(";"),q=a(`
`),R=s("span"),Z=a(`
`),j=s("span"),U=s("span"),M=a("uniform"),V=s("span"),z=a(" vec2 uRes;"),st=a(`
`),ut=s("span"),Pt=s("span"),Lt=a("uniform"),$t=s("span"),te=a(" "),ht=s("span"),ee=a("sampler2D"),_t=s("span"),Nt=a(" uTex;"),ae=a(`
`),rt=s("span"),Q=s("span"),ne=a("uniform"),mt=s("span"),se=a(" "),yt=s("span"),Ft=a("sampler2D"),xt=s("span"),re=a(" uLUT;"),Wt=a(`
`),tt=s("span"),bt=s("span"),qt=a("uniform"),d=s("span"),T=a(" "),vt=s("span"),Pe=a("float"),Ut=s("span"),Mt=a(" uLUTSize;"),Ne=a(`
`),et=s("span"),Ct=s("span"),ye=a("uniform"),Yt=s("span"),Tt=a(" "),Rt=s("span"),xe=a("float"),zt=s("span"),be=a(" uStrength;"),wt=a(`
`),le=s("span"),Te=a(`
`),It=s("span"),we=s("span"),Gs=a("out"),Le=s("span"),Bs=a(" vec4 outColor;"),Ws=a(`
`),fs=s("span"),qs=a(`
`),Ht=s("span"),$e=s("span"),Ms=a("void"),gn=s("span"),Ys=a(" "),Fe=s("span"),Hs=a("main"),Ue=s("span"),Js=a("() {"),Ks=a(`
`),An=s("span"),Ce=s("span"),Qs=a("    vec2 uv = gl_FragCoord.xy / uRes;"),Xs=a(`
`),oe=s("span"),Re=s("span"),js=a("    vec4 tex = "),ze=s("span"),Zs=a("texture"),Ie=s("span"),tr=a("(uTex, uv);"),er=a(`
`),cs=s("span"),ar=a(`
`),Et=s("span"),ke=s("span"),nr=a("    tex.r = "),Oe=s("span"),sr=a("clamp"),De=s("span"),rr=a("("),Ve=s("span"),lr=a("0.0"),Ge=s("span"),or=a(", "),Be=s("span"),pr=a("1.0"),We=s("span"),ir=a(", tex.r);"),fr=a(`
`),gt=s("span"),qe=s("span"),cr=a("    tex.g = "),Me=s("span"),ur=a("clamp"),Ye=s("span"),hr=a("("),He=s("span"),vr=a("0.0"),Je=s("span"),dr=a(", "),Ke=s("span"),_r=a("1.0"),Qe=s("span"),mr=a(", tex.g);"),Er=a(`
`),At=s("span"),Xe=s("span"),gr=a("    tex.b = "),je=s("span"),Ar=a("clamp"),Ze=s("span"),Sr=a("("),ta=s("span"),Pr=a("0.0"),ea=s("span"),Nr=a(", "),aa=s("span"),yr=a("1.0"),na=s("span"),xr=a(", tex.b);"),br=a(`
`),Sn=s("span"),Pn=s("span"),Tr=a("    "),wr=a(`
`),pe=s("span"),sa=s("span"),Lr=a("    vec4 lut = "),ra=s("span"),$r=a("texture"),la=s("span"),Fr=a("(uLUT, uv);"),Ur=a(`
`),us=s("span"),Cr=a(`
`),kt=s("span"),Nn=s("span"),Rr=a("    "),oa=s("span"),zr=a("float"),pa=s("span"),Ir=a(" maxSize = uLUTSize - "),ia=s("span"),kr=a("1.0"),fa=s("span"),Or=a(";"),Dr=a(`
`),St=s("span"),yn=s("span"),Vr=a("    "),ca=s("span"),Gr=a("float"),ua=s("span"),Br=a(" maxCellCoord = "),ha=s("span"),Wr=a("1.0"),va=s("span"),qr=a(" - ("),da=s("span"),Mr=a("1.0"),_a=s("span"),Yr=a(" / uLUTSize);"),Hr=a(`
`),Ot=s("span"),ma=s("span"),Jr=a("    vec2 halfTexel = "),Ea=s("span"),Kr=a("0.5"),ga=s("span"),Qr=a(" / "),Aa=s("span"),Xr=a("vec2"),Sa=s("span"),jr=a("(uLUTSize * uLUTSize, uLUTSize);"),Zr=a(`
`),hs=s("span"),tl=a(`
`),ie=s("span"),xn=s("span"),el=a("    "),Pa=s("span"),al=a("float"),Na=s("span"),nl=a(" redOffset = halfTexel.x + tex.r * (maxCellCoord / uLUTSize);"),sl=a(`
`),fe=s("span"),bn=s("span"),rl=a("    "),ya=s("span"),ll=a("float"),xa=s("span"),ol=a(" greenOffset = halfTexel.y + tex.g * maxCellCoord;"),pl=a(`
`),vs=s("span"),il=a(`
`),ce=s("span"),Tn=s("span"),fl=a("    "),ba=s("span"),cl=a("float"),Ta=s("span"),ul=a(" blue = tex.b * maxSize;"),hl=a(`
`),ds=s("span"),vl=a(`
`),Dt=s("span"),wn=s("span"),dl=a("    "),wa=s("span"),_l=a("float"),La=s("span"),ml=a(" leftCell = "),$a=s("span"),El=a("floor"),Fa=s("span"),gl=a("(blue);"),Al=a(`
`),Vt=s("span"),Ln=s("span"),Sl=a("    "),Ua=s("span"),Pl=a("float"),Ca=s("span"),Nl=a(" rightCell = "),Ra=s("span"),yl=a("ceil"),za=s("span"),xl=a("(blue);"),bl=a(`
`),_s=s("span"),Tl=a(`
`),ue=s("span"),Ia=s("span"),wl=a("    vec2 left = "),ka=s("span"),Ll=a("vec2"),Oa=s("span"),$l=a("("),Fl=a(`
`),$n=s("span"),Da=s("span"),Ul=a("        leftCell / uLUTSize + redOffset,"),Cl=a(`
`),Fn=s("span"),Va=s("span"),Rl=a("        greenOffset"),zl=a(`
`),Un=s("span"),Ga=s("span"),Il=a("    );"),kl=a(`
`),ms=s("span"),Ol=a(`
`),he=s("span"),Ba=s("span"),Dl=a("    vec2 right = "),Wa=s("span"),Vl=a("vec2"),qa=s("span"),Gl=a("("),Bl=a(`
`),Cn=s("span"),Ma=s("span"),Wl=a("        rightCell / uLUTSize + redOffset,"),ql=a(`
`),Rn=s("span"),Ya=s("span"),Ml=a("        greenOffset"),Yl=a(`
`),zn=s("span"),Ha=s("span"),Hl=a("    );"),Jl=a(`
`),Es=s("span"),Kl=a(`
`),ve=s("span"),Ja=s("span"),Ql=a("    vec3 color = "),Ka=s("span"),Xl=a("mix"),Qa=s("span"),jl=a("("),Zl=a(`
`),de=s("span"),In=s("span"),to=a("        "),Xa=s("span"),eo=a("texture"),ja=s("span"),ao=a("(uLUT, left).rgb,"),no=a(`
`),_e=s("span"),kn=s("span"),so=a("        "),Za=s("span"),ro=a("texture"),tn=s("span"),lo=a("(uLUT, right).rgb,"),oo=a(`
`),me=s("span"),On=s("span"),po=a("        "),en=s("span"),io=a("fract"),an=s("span"),fo=a("(blue)"),co=a(`
`),Dn=s("span"),nn=s("span"),uo=a("    );"),ho=a(`
`),gs=s("span"),vo=a(`
`),Ee=s("span"),sn=s("span"),_o=a("    color = "),rn=s("span"),mo=a("mix"),ln=s("span"),Eo=a("(tex.rgb, color, uStrength);    "),go=a(`
`),As=s("span"),Ao=a(`
`),ge=s("span"),on=s("span"),So=a("    outColor = "),pn=s("span"),Po=a("vec4"),fn=s("span"),No=a("(color, tex.a);"),yo=a(`
`),Vn=s("span"),cn=s("span"),xo=a("}"),bo=a(`
`),Ss=$(),G=s("ul"),Gn=s("li"),To=a(`This is often a post-processing effect, so it makes sense to
				make sure that the colors are in a 0 to 1 range to avoid
				artifacts.`),wo=$(),un=s("li"),Bn=s("var"),Lo=a("maxCellCoord"),$o=a(` is used for precision, to avoid getting out
				of a single cell bounds.`),Fo=$(),hn=s("li"),Wn=s("var"),Uo=a("halfTexel"),Co=a(` is used to sample at the center of a texel instead
				of the bottom-left origin.`),Ro=$(),Jt=s("li"),qn=s("var"),zo=a("redOffset"),Io=a(" and "),Mn=s("var"),ko=a("greenOffset"),Oo=a(` the position of r
				and g inside a single cell. To visualize what's happening keep in
				mind we are still working inside one of those small quads of the
				texture.`),Do=$(),dt=s("li"),Yn=s("var"),Vo=a("blue"),Go=a(` is the "z" position. To get the value we
				multiply the texture blue channel with the maximum amount of
				cells `),Hn=s("var"),Bo=a("maxSize"),Wo=a(". To get "),Jn=s("var"),qo=a("maxSize"),Mo=a(` we removed
				one from `),Kn=s("var"),Yo=a("uLUTSize"),Ho=a(` to avoid going out of bounds when getting
				the cell to the right of the last one.`),Jo=$(),Gt=s("li"),Ko=a(`We want to sample the value of two consecutive cells/quads. To
				get the left one, use `),Qn=s("var"),Qo=a("floor()"),Xo=a(`
				,and to get the right one, use `),Xn=s("var"),jo=a("ceil()"),Zo=a("."),tp=$(),Kt=s("li"),jn=s("var"),ep=a("left"),ap=a(" and "),Zn=s("var"),np=a("right"),sp=a(` are the coordinates at which
				we will sample the LUT color.`),rp=$(),Ae=s("li"),lp=a("We mix the result using the fractional part of "),ts=s("var"),op=a("blue"),pp=a(`.
				The bigger the fractional part, the closer we are to the right
				cell. The opposite is also true.`),ip=$(),Se=s("li"),fp=a("You can ignore "),es=s("var"),cp=a("uStrength"),up=a(`, it's a value that modulates
				how much of the LUT color to use in the final image.`),this.h()},l(w){ot(p.$$.fragment,w),u=F(w),f=r(w,"P",{});var at=l(f);E=n(at,`For those who have to support WebGL1, or for whatever reason don't
			want to use a 3D texture, there is a way of doing it inside a
			fragment shader.`),at.forEach(e),v=F(w),h=r(w,"P",{});var as=l(h);A=n(as,"Here's the shader:"),as.forEach(e),g=F(w),_=r(w,"PRE",{});var Pp=l(_);o=r(Pp,"CODE",{});var c=l(o);y=r(c,"SPAN",{});var Ns=l(y);O=r(Ns,"SPAN",{style:!0});var Np=l(O);I=n(Np,"#version "),Np.forEach(e),S=r(Ns,"SPAN",{style:!0});var yp=l(S);P=n(yp,"300"),yp.forEach(e),D=r(Ns,"SPAN",{style:!0});var xp=l(D);b=n(xp," es"),xp.forEach(e),Ns.forEach(e),X=n(c,`
`),B=r(c,"SPAN",{}),l(B).forEach(e),nt=n(c,`
`),H=r(c,"SPAN",{});var ys=l(H);W=r(ys,"SPAN",{style:!0});var bp=l(W);L=n(bp,"precision highp "),bp.forEach(e),J=r(ys,"SPAN",{style:!0});var Tp=l(J);K=n(Tp,"float"),Tp.forEach(e),N=r(ys,"SPAN",{style:!0});var wp=l(N);k=n(wp,";"),wp.forEach(e),ys.forEach(e),q=n(c,`
`),R=r(c,"SPAN",{}),l(R).forEach(e),Z=n(c,`
`),j=r(c,"SPAN",{});var hp=l(j);U=r(hp,"SPAN",{style:!0});var Lp=l(U);M=n(Lp,"uniform"),Lp.forEach(e),V=r(hp,"SPAN",{style:!0});var $p=l(V);z=n($p," vec2 uRes;"),$p.forEach(e),hp.forEach(e),st=n(c,`
`),ut=r(c,"SPAN",{});var ns=l(ut);Pt=r(ns,"SPAN",{style:!0});var Fp=l(Pt);Lt=n(Fp,"uniform"),Fp.forEach(e),$t=r(ns,"SPAN",{});var Up=l($t);te=n(Up," "),Up.forEach(e),ht=r(ns,"SPAN",{style:!0});var Cp=l(ht);ee=n(Cp,"sampler2D"),Cp.forEach(e),_t=r(ns,"SPAN",{style:!0});var Rp=l(_t);Nt=n(Rp," uTex;"),Rp.forEach(e),ns.forEach(e),ae=n(c,`
`),rt=r(c,"SPAN",{});var ss=l(rt);Q=r(ss,"SPAN",{style:!0});var zp=l(Q);ne=n(zp,"uniform"),zp.forEach(e),mt=r(ss,"SPAN",{});var Ip=l(mt);se=n(Ip," "),Ip.forEach(e),yt=r(ss,"SPAN",{style:!0});var kp=l(yt);Ft=n(kp,"sampler2D"),kp.forEach(e),xt=r(ss,"SPAN",{style:!0});var Op=l(xt);re=n(Op," uLUT;"),Op.forEach(e),ss.forEach(e),Wt=n(c,`
`),tt=r(c,"SPAN",{});var rs=l(tt);bt=r(rs,"SPAN",{style:!0});var Dp=l(bt);qt=n(Dp,"uniform"),Dp.forEach(e),d=r(rs,"SPAN",{});var Vp=l(d);T=n(Vp," "),Vp.forEach(e),vt=r(rs,"SPAN",{style:!0});var Gp=l(vt);Pe=n(Gp,"float"),Gp.forEach(e),Ut=r(rs,"SPAN",{style:!0});var Bp=l(Ut);Mt=n(Bp," uLUTSize;"),Bp.forEach(e),rs.forEach(e),Ne=n(c,`
`),et=r(c,"SPAN",{});var ls=l(et);Ct=r(ls,"SPAN",{style:!0});var Wp=l(Ct);ye=n(Wp,"uniform"),Wp.forEach(e),Yt=r(ls,"SPAN",{});var qp=l(Yt);Tt=n(qp," "),qp.forEach(e),Rt=r(ls,"SPAN",{style:!0});var Mp=l(Rt);xe=n(Mp,"float"),Mp.forEach(e),zt=r(ls,"SPAN",{style:!0});var Yp=l(zt);be=n(Yp," uStrength;"),Yp.forEach(e),ls.forEach(e),wt=n(c,`
`),le=r(c,"SPAN",{}),l(le).forEach(e),Te=n(c,`
`),It=r(c,"SPAN",{});var vp=l(It);we=r(vp,"SPAN",{style:!0});var Hp=l(we);Gs=n(Hp,"out"),Hp.forEach(e),Le=r(vp,"SPAN",{style:!0});var Jp=l(Le);Bs=n(Jp," vec4 outColor;"),Jp.forEach(e),vp.forEach(e),Ws=n(c,`
`),fs=r(c,"SPAN",{}),l(fs).forEach(e),qs=n(c,`
`),Ht=r(c,"SPAN",{});var os=l(Ht);$e=r(os,"SPAN",{style:!0});var Kp=l($e);Ms=n(Kp,"void"),Kp.forEach(e),gn=r(os,"SPAN",{});var Qp=l(gn);Ys=n(Qp," "),Qp.forEach(e),Fe=r(os,"SPAN",{style:!0});var Xp=l(Fe);Hs=n(Xp,"main"),Xp.forEach(e),Ue=r(os,"SPAN",{style:!0});var jp=l(Ue);Js=n(jp,"() {"),jp.forEach(e),os.forEach(e),Ks=n(c,`
`),An=r(c,"SPAN",{});var Zp=l(An);Ce=r(Zp,"SPAN",{style:!0});var ti=l(Ce);Qs=n(ti,"    vec2 uv = gl_FragCoord.xy / uRes;"),ti.forEach(e),Zp.forEach(e),Xs=n(c,`
`),oe=r(c,"SPAN",{});var xs=l(oe);Re=r(xs,"SPAN",{style:!0});var ei=l(Re);js=n(ei,"    vec4 tex = "),ei.forEach(e),ze=r(xs,"SPAN",{style:!0});var ai=l(ze);Zs=n(ai,"texture"),ai.forEach(e),Ie=r(xs,"SPAN",{style:!0});var ni=l(Ie);tr=n(ni,"(uTex, uv);"),ni.forEach(e),xs.forEach(e),er=n(c,`
`),cs=r(c,"SPAN",{}),l(cs).forEach(e),ar=n(c,`
`),Et=r(c,"SPAN",{});var Qt=l(Et);ke=r(Qt,"SPAN",{style:!0});var si=l(ke);nr=n(si,"    tex.r = "),si.forEach(e),Oe=r(Qt,"SPAN",{style:!0});var ri=l(Oe);sr=n(ri,"clamp"),ri.forEach(e),De=r(Qt,"SPAN",{style:!0});var li=l(De);rr=n(li,"("),li.forEach(e),Ve=r(Qt,"SPAN",{style:!0});var oi=l(Ve);lr=n(oi,"0.0"),oi.forEach(e),Ge=r(Qt,"SPAN",{style:!0});var pi=l(Ge);or=n(pi,", "),pi.forEach(e),Be=r(Qt,"SPAN",{style:!0});var ii=l(Be);pr=n(ii,"1.0"),ii.forEach(e),We=r(Qt,"SPAN",{style:!0});var fi=l(We);ir=n(fi,", tex.r);"),fi.forEach(e),Qt.forEach(e),fr=n(c,`
`),gt=r(c,"SPAN",{});var Xt=l(gt);qe=r(Xt,"SPAN",{style:!0});var ci=l(qe);cr=n(ci,"    tex.g = "),ci.forEach(e),Me=r(Xt,"SPAN",{style:!0});var ui=l(Me);ur=n(ui,"clamp"),ui.forEach(e),Ye=r(Xt,"SPAN",{style:!0});var hi=l(Ye);hr=n(hi,"("),hi.forEach(e),He=r(Xt,"SPAN",{style:!0});var vi=l(He);vr=n(vi,"0.0"),vi.forEach(e),Je=r(Xt,"SPAN",{style:!0});var di=l(Je);dr=n(di,", "),di.forEach(e),Ke=r(Xt,"SPAN",{style:!0});var _i=l(Ke);_r=n(_i,"1.0"),_i.forEach(e),Qe=r(Xt,"SPAN",{style:!0});var mi=l(Qe);mr=n(mi,", tex.g);"),mi.forEach(e),Xt.forEach(e),Er=n(c,`
`),At=r(c,"SPAN",{});var jt=l(At);Xe=r(jt,"SPAN",{style:!0});var Ei=l(Xe);gr=n(Ei,"    tex.b = "),Ei.forEach(e),je=r(jt,"SPAN",{style:!0});var gi=l(je);Ar=n(gi,"clamp"),gi.forEach(e),Ze=r(jt,"SPAN",{style:!0});var Ai=l(Ze);Sr=n(Ai,"("),Ai.forEach(e),ta=r(jt,"SPAN",{style:!0});var Si=l(ta);Pr=n(Si,"0.0"),Si.forEach(e),ea=r(jt,"SPAN",{style:!0});var Pi=l(ea);Nr=n(Pi,", "),Pi.forEach(e),aa=r(jt,"SPAN",{style:!0});var Ni=l(aa);yr=n(Ni,"1.0"),Ni.forEach(e),na=r(jt,"SPAN",{style:!0});var yi=l(na);xr=n(yi,", tex.b);"),yi.forEach(e),jt.forEach(e),br=n(c,`
`),Sn=r(c,"SPAN",{});var xi=l(Sn);Pn=r(xi,"SPAN",{});var bi=l(Pn);Tr=n(bi,"    "),bi.forEach(e),xi.forEach(e),wr=n(c,`
`),pe=r(c,"SPAN",{});var bs=l(pe);sa=r(bs,"SPAN",{style:!0});var Ti=l(sa);Lr=n(Ti,"    vec4 lut = "),Ti.forEach(e),ra=r(bs,"SPAN",{style:!0});var wi=l(ra);$r=n(wi,"texture"),wi.forEach(e),la=r(bs,"SPAN",{style:!0});var Li=l(la);Fr=n(Li,"(uLUT, uv);"),Li.forEach(e),bs.forEach(e),Ur=n(c,`
`),us=r(c,"SPAN",{}),l(us).forEach(e),Cr=n(c,`
`),kt=r(c,"SPAN",{});var vn=l(kt);Nn=r(vn,"SPAN",{});var $i=l(Nn);Rr=n($i,"    "),$i.forEach(e),oa=r(vn,"SPAN",{style:!0});var Fi=l(oa);zr=n(Fi,"float"),Fi.forEach(e),pa=r(vn,"SPAN",{style:!0});var Ui=l(pa);Ir=n(Ui," maxSize = uLUTSize - "),Ui.forEach(e),ia=r(vn,"SPAN",{style:!0});var Ci=l(ia);kr=n(Ci,"1.0"),Ci.forEach(e),fa=r(vn,"SPAN",{style:!0});var Ri=l(fa);Or=n(Ri,";"),Ri.forEach(e),vn.forEach(e),Dr=n(c,`
`),St=r(c,"SPAN",{});var Zt=l(St);yn=r(Zt,"SPAN",{});var zi=l(yn);Vr=n(zi,"    "),zi.forEach(e),ca=r(Zt,"SPAN",{style:!0});var Ii=l(ca);Gr=n(Ii,"float"),Ii.forEach(e),ua=r(Zt,"SPAN",{style:!0});var ki=l(ua);Br=n(ki," maxCellCoord = "),ki.forEach(e),ha=r(Zt,"SPAN",{style:!0});var Oi=l(ha);Wr=n(Oi,"1.0"),Oi.forEach(e),va=r(Zt,"SPAN",{style:!0});var Di=l(va);qr=n(Di," - ("),Di.forEach(e),da=r(Zt,"SPAN",{style:!0});var Vi=l(da);Mr=n(Vi,"1.0"),Vi.forEach(e),_a=r(Zt,"SPAN",{style:!0});var Gi=l(_a);Yr=n(Gi," / uLUTSize);"),Gi.forEach(e),Zt.forEach(e),Hr=n(c,`
`),Ot=r(c,"SPAN",{});var dn=l(Ot);ma=r(dn,"SPAN",{style:!0});var Bi=l(ma);Jr=n(Bi,"    vec2 halfTexel = "),Bi.forEach(e),Ea=r(dn,"SPAN",{style:!0});var Wi=l(Ea);Kr=n(Wi,"0.5"),Wi.forEach(e),ga=r(dn,"SPAN",{style:!0});var qi=l(ga);Qr=n(qi," / "),qi.forEach(e),Aa=r(dn,"SPAN",{style:!0});var Mi=l(Aa);Xr=n(Mi,"vec2"),Mi.forEach(e),Sa=r(dn,"SPAN",{style:!0});var Yi=l(Sa);jr=n(Yi,"(uLUTSize * uLUTSize, uLUTSize);"),Yi.forEach(e),dn.forEach(e),Zr=n(c,`
`),hs=r(c,"SPAN",{}),l(hs).forEach(e),tl=n(c,`
`),ie=r(c,"SPAN",{});var Ts=l(ie);xn=r(Ts,"SPAN",{});var Hi=l(xn);el=n(Hi,"    "),Hi.forEach(e),Pa=r(Ts,"SPAN",{style:!0});var Ji=l(Pa);al=n(Ji,"float"),Ji.forEach(e),Na=r(Ts,"SPAN",{style:!0});var Ki=l(Na);nl=n(Ki," redOffset = halfTexel.x + tex.r * (maxCellCoord / uLUTSize);"),Ki.forEach(e),Ts.forEach(e),sl=n(c,`
`),fe=r(c,"SPAN",{});var ws=l(fe);bn=r(ws,"SPAN",{});var Qi=l(bn);rl=n(Qi,"    "),Qi.forEach(e),ya=r(ws,"SPAN",{style:!0});var Xi=l(ya);ll=n(Xi,"float"),Xi.forEach(e),xa=r(ws,"SPAN",{style:!0});var ji=l(xa);ol=n(ji," greenOffset = halfTexel.y + tex.g * maxCellCoord;"),ji.forEach(e),ws.forEach(e),pl=n(c,`
`),vs=r(c,"SPAN",{}),l(vs).forEach(e),il=n(c,`
`),ce=r(c,"SPAN",{});var Ls=l(ce);Tn=r(Ls,"SPAN",{});var Zi=l(Tn);fl=n(Zi,"    "),Zi.forEach(e),ba=r(Ls,"SPAN",{style:!0});var tf=l(ba);cl=n(tf,"float"),tf.forEach(e),Ta=r(Ls,"SPAN",{style:!0});var ef=l(Ta);ul=n(ef," blue = tex.b * maxSize;"),ef.forEach(e),Ls.forEach(e),hl=n(c,`
`),ds=r(c,"SPAN",{}),l(ds).forEach(e),vl=n(c,`
`),Dt=r(c,"SPAN",{});var _n=l(Dt);wn=r(_n,"SPAN",{});var af=l(wn);dl=n(af,"    "),af.forEach(e),wa=r(_n,"SPAN",{style:!0});var nf=l(wa);_l=n(nf,"float"),nf.forEach(e),La=r(_n,"SPAN",{style:!0});var sf=l(La);ml=n(sf," leftCell = "),sf.forEach(e),$a=r(_n,"SPAN",{style:!0});var rf=l($a);El=n(rf,"floor"),rf.forEach(e),Fa=r(_n,"SPAN",{style:!0});var lf=l(Fa);gl=n(lf,"(blue);"),lf.forEach(e),_n.forEach(e),Al=n(c,`
`),Vt=r(c,"SPAN",{});var mn=l(Vt);Ln=r(mn,"SPAN",{});var of=l(Ln);Sl=n(of,"    "),of.forEach(e),Ua=r(mn,"SPAN",{style:!0});var pf=l(Ua);Pl=n(pf,"float"),pf.forEach(e),Ca=r(mn,"SPAN",{style:!0});var ff=l(Ca);Nl=n(ff," rightCell = "),ff.forEach(e),Ra=r(mn,"SPAN",{style:!0});var cf=l(Ra);yl=n(cf,"ceil"),cf.forEach(e),za=r(mn,"SPAN",{style:!0});var uf=l(za);xl=n(uf,"(blue);"),uf.forEach(e),mn.forEach(e),bl=n(c,`
`),_s=r(c,"SPAN",{}),l(_s).forEach(e),Tl=n(c,`
`),ue=r(c,"SPAN",{});var $s=l(ue);Ia=r($s,"SPAN",{style:!0});var hf=l(Ia);wl=n(hf,"    vec2 left = "),hf.forEach(e),ka=r($s,"SPAN",{style:!0});var vf=l(ka);Ll=n(vf,"vec2"),vf.forEach(e),Oa=r($s,"SPAN",{style:!0});var df=l(Oa);$l=n(df,"("),df.forEach(e),$s.forEach(e),Fl=n(c,`
`),$n=r(c,"SPAN",{});var _f=l($n);Da=r(_f,"SPAN",{style:!0});var mf=l(Da);Ul=n(mf,"        leftCell / uLUTSize + redOffset,"),mf.forEach(e),_f.forEach(e),Cl=n(c,`
`),Fn=r(c,"SPAN",{});var Ef=l(Fn);Va=r(Ef,"SPAN",{style:!0});var gf=l(Va);Rl=n(gf,"        greenOffset"),gf.forEach(e),Ef.forEach(e),zl=n(c,`
`),Un=r(c,"SPAN",{});var Af=l(Un);Ga=r(Af,"SPAN",{style:!0});var Sf=l(Ga);Il=n(Sf,"    );"),Sf.forEach(e),Af.forEach(e),kl=n(c,`
`),ms=r(c,"SPAN",{}),l(ms).forEach(e),Ol=n(c,`
`),he=r(c,"SPAN",{});var Fs=l(he);Ba=r(Fs,"SPAN",{style:!0});var Pf=l(Ba);Dl=n(Pf,"    vec2 right = "),Pf.forEach(e),Wa=r(Fs,"SPAN",{style:!0});var Nf=l(Wa);Vl=n(Nf,"vec2"),Nf.forEach(e),qa=r(Fs,"SPAN",{style:!0});var yf=l(qa);Gl=n(yf,"("),yf.forEach(e),Fs.forEach(e),Bl=n(c,`
`),Cn=r(c,"SPAN",{});var xf=l(Cn);Ma=r(xf,"SPAN",{style:!0});var bf=l(Ma);Wl=n(bf,"        rightCell / uLUTSize + redOffset,"),bf.forEach(e),xf.forEach(e),ql=n(c,`
`),Rn=r(c,"SPAN",{});var Tf=l(Rn);Ya=r(Tf,"SPAN",{style:!0});var wf=l(Ya);Ml=n(wf,"        greenOffset"),wf.forEach(e),Tf.forEach(e),Yl=n(c,`
`),zn=r(c,"SPAN",{});var Lf=l(zn);Ha=r(Lf,"SPAN",{style:!0});var $f=l(Ha);Hl=n($f,"    );"),$f.forEach(e),Lf.forEach(e),Jl=n(c,`
`),Es=r(c,"SPAN",{}),l(Es).forEach(e),Kl=n(c,`
`),ve=r(c,"SPAN",{});var Us=l(ve);Ja=r(Us,"SPAN",{style:!0});var Ff=l(Ja);Ql=n(Ff,"    vec3 color = "),Ff.forEach(e),Ka=r(Us,"SPAN",{style:!0});var Uf=l(Ka);Xl=n(Uf,"mix"),Uf.forEach(e),Qa=r(Us,"SPAN",{style:!0});var Cf=l(Qa);jl=n(Cf,"("),Cf.forEach(e),Us.forEach(e),Zl=n(c,`
`),de=r(c,"SPAN",{});var Cs=l(de);In=r(Cs,"SPAN",{});var Rf=l(In);to=n(Rf,"        "),Rf.forEach(e),Xa=r(Cs,"SPAN",{style:!0});var zf=l(Xa);eo=n(zf,"texture"),zf.forEach(e),ja=r(Cs,"SPAN",{style:!0});var If=l(ja);ao=n(If,"(uLUT, left).rgb,"),If.forEach(e),Cs.forEach(e),no=n(c,`
`),_e=r(c,"SPAN",{});var Rs=l(_e);kn=r(Rs,"SPAN",{});var kf=l(kn);so=n(kf,"        "),kf.forEach(e),Za=r(Rs,"SPAN",{style:!0});var Of=l(Za);ro=n(Of,"texture"),Of.forEach(e),tn=r(Rs,"SPAN",{style:!0});var Df=l(tn);lo=n(Df,"(uLUT, right).rgb,"),Df.forEach(e),Rs.forEach(e),oo=n(c,`
`),me=r(c,"SPAN",{});var zs=l(me);On=r(zs,"SPAN",{});var Vf=l(On);po=n(Vf,"        "),Vf.forEach(e),en=r(zs,"SPAN",{style:!0});var Gf=l(en);io=n(Gf,"fract"),Gf.forEach(e),an=r(zs,"SPAN",{style:!0});var Bf=l(an);fo=n(Bf,"(blue)"),Bf.forEach(e),zs.forEach(e),co=n(c,`
`),Dn=r(c,"SPAN",{});var Wf=l(Dn);nn=r(Wf,"SPAN",{style:!0});var qf=l(nn);uo=n(qf,"    );"),qf.forEach(e),Wf.forEach(e),ho=n(c,`
`),gs=r(c,"SPAN",{}),l(gs).forEach(e),vo=n(c,`
`),Ee=r(c,"SPAN",{});var Is=l(Ee);sn=r(Is,"SPAN",{style:!0});var Mf=l(sn);_o=n(Mf,"    color = "),Mf.forEach(e),rn=r(Is,"SPAN",{style:!0});var Yf=l(rn);mo=n(Yf,"mix"),Yf.forEach(e),ln=r(Is,"SPAN",{style:!0});var Hf=l(ln);Eo=n(Hf,"(tex.rgb, color, uStrength);    "),Hf.forEach(e),Is.forEach(e),go=n(c,`
`),As=r(c,"SPAN",{}),l(As).forEach(e),Ao=n(c,`
`),ge=r(c,"SPAN",{});var ks=l(ge);on=r(ks,"SPAN",{style:!0});var Jf=l(on);So=n(Jf,"    outColor = "),Jf.forEach(e),pn=r(ks,"SPAN",{style:!0});var Kf=l(pn);Po=n(Kf,"vec4"),Kf.forEach(e),fn=r(ks,"SPAN",{style:!0});var Qf=l(fn);No=n(Qf,"(color, tex.a);"),Qf.forEach(e),ks.forEach(e),yo=n(c,`
`),Vn=r(c,"SPAN",{});var Xf=l(Vn);cn=r(Xf,"SPAN",{style:!0});var jf=l(cn);xo=n(jf,"}"),jf.forEach(e),Xf.forEach(e),bo=n(c,`
`),c.forEach(e),Pp.forEach(e),Ss=F(w),G=r(w,"UL",{});var Y=l(G);Gn=r(Y,"LI",{});var Zf=l(Gn);To=n(Zf,`This is often a post-processing effect, so it makes sense to
				make sure that the colors are in a 0 to 1 range to avoid
				artifacts.`),Zf.forEach(e),wo=F(Y),un=r(Y,"LI",{});var dp=l(un);Bn=r(dp,"VAR",{});var tc=l(Bn);Lo=n(tc,"maxCellCoord"),tc.forEach(e),$o=n(dp,` is used for precision, to avoid getting out
				of a single cell bounds.`),dp.forEach(e),Fo=F(Y),hn=r(Y,"LI",{});var _p=l(hn);Wn=r(_p,"VAR",{});var ec=l(Wn);Uo=n(ec,"halfTexel"),ec.forEach(e),Co=n(_p,` is used to sample at the center of a texel instead
				of the bottom-left origin.`),_p.forEach(e),Ro=F(Y),Jt=r(Y,"LI",{});var ps=l(Jt);qn=r(ps,"VAR",{});var ac=l(qn);zo=n(ac,"redOffset"),ac.forEach(e),Io=n(ps," and "),Mn=r(ps,"VAR",{});var nc=l(Mn);ko=n(nc,"greenOffset"),nc.forEach(e),Oo=n(ps,` the position of r
				and g inside a single cell. To visualize what's happening keep in
				mind we are still working inside one of those small quads of the
				texture.`),ps.forEach(e),Do=F(Y),dt=r(Y,"LI",{});var Bt=l(dt);Yn=r(Bt,"VAR",{});var sc=l(Yn);Vo=n(sc,"blue"),sc.forEach(e),Go=n(Bt,` is the "z" position. To get the value we
				multiply the texture blue channel with the maximum amount of
				cells `),Hn=r(Bt,"VAR",{});var rc=l(Hn);Bo=n(rc,"maxSize"),rc.forEach(e),Wo=n(Bt,". To get "),Jn=r(Bt,"VAR",{});var lc=l(Jn);qo=n(lc,"maxSize"),lc.forEach(e),Mo=n(Bt,` we removed
				one from `),Kn=r(Bt,"VAR",{});var oc=l(Kn);Yo=n(oc,"uLUTSize"),oc.forEach(e),Ho=n(Bt,` to avoid going out of bounds when getting
				the cell to the right of the last one.`),Bt.forEach(e),Jo=F(Y),Gt=r(Y,"LI",{});var En=l(Gt);Ko=n(En,`We want to sample the value of two consecutive cells/quads. To
				get the left one, use `),Qn=r(En,"VAR",{});var pc=l(Qn);Qo=n(pc,"floor()"),pc.forEach(e),Xo=n(En,`
				,and to get the right one, use `),Xn=r(En,"VAR",{});var ic=l(Xn);jo=n(ic,"ceil()"),ic.forEach(e),Zo=n(En,"."),En.forEach(e),tp=F(Y),Kt=r(Y,"LI",{});var is=l(Kt);jn=r(is,"VAR",{});var fc=l(jn);ep=n(fc,"left"),fc.forEach(e),ap=n(is," and "),Zn=r(is,"VAR",{});var cc=l(Zn);np=n(cc,"right"),cc.forEach(e),sp=n(is,` are the coordinates at which
				we will sample the LUT color.`),is.forEach(e),rp=F(Y),Ae=r(Y,"LI",{});var Os=l(Ae);lp=n(Os,"We mix the result using the fractional part of "),ts=r(Os,"VAR",{});var uc=l(ts);op=n(uc,"blue"),uc.forEach(e),pp=n(Os,`.
				The bigger the fractional part, the closer we are to the right
				cell. The opposite is also true.`),Os.forEach(e),ip=F(Y),Se=r(Y,"LI",{});var Ds=l(Se);fp=n(Ds,"You can ignore "),es=r(Ds,"VAR",{});var hc=l(es);cp=n(hc,"uStrength"),hc.forEach(e),up=n(Ds,`, it's a value that modulates
				how much of the LUT color to use in the final image.`),Ds.forEach(e),Y.forEach(e),this.h()},h(){i(O,"color","#24292F"),i(S,"color","#0550AE"),i(D,"color","#24292F"),i(W,"color","#24292F"),i(J,"color","#CF222E"),i(N,"color","#24292F"),i(U,"color","#CF222E"),i(V,"color","#24292F"),i(Pt,"color","#CF222E"),i(ht,"color","#0550AE"),i(_t,"color","#24292F"),i(Q,"color","#CF222E"),i(yt,"color","#0550AE"),i(xt,"color","#24292F"),i(bt,"color","#CF222E"),i(vt,"color","#CF222E"),i(Ut,"color","#24292F"),i(Ct,"color","#CF222E"),i(Rt,"color","#CF222E"),i(zt,"color","#24292F"),i(we,"color","#CF222E"),i(Le,"color","#24292F"),i($e,"color","#CF222E"),i(Fe,"color","#0550AE"),i(Ue,"color","#24292F"),i(Ce,"color","#24292F"),i(Re,"color","#24292F"),i(ze,"color","#0550AE"),i(Ie,"color","#24292F"),i(ke,"color","#24292F"),i(Oe,"color","#0550AE"),i(De,"color","#24292F"),i(Ve,"color","#0550AE"),i(Ge,"color","#24292F"),i(Be,"color","#0550AE"),i(We,"color","#24292F"),i(qe,"color","#24292F"),i(Me,"color","#0550AE"),i(Ye,"color","#24292F"),i(He,"color","#0550AE"),i(Je,"color","#24292F"),i(Ke,"color","#0550AE"),i(Qe,"color","#24292F"),i(Xe,"color","#24292F"),i(je,"color","#0550AE"),i(Ze,"color","#24292F"),i(ta,"color","#0550AE"),i(ea,"color","#24292F"),i(aa,"color","#0550AE"),i(na,"color","#24292F"),i(sa,"color","#24292F"),i(ra,"color","#0550AE"),i(la,"color","#24292F"),i(oa,"color","#CF222E"),i(pa,"color","#24292F"),i(ia,"color","#0550AE"),i(fa,"color","#24292F"),i(ca,"color","#CF222E"),i(ua,"color","#24292F"),i(ha,"color","#0550AE"),i(va,"color","#24292F"),i(da,"color","#0550AE"),i(_a,"color","#24292F"),i(ma,"color","#24292F"),i(Ea,"color","#0550AE"),i(ga,"color","#24292F"),i(Aa,"color","#0550AE"),i(Sa,"color","#24292F"),i(Pa,"color","#CF222E"),i(Na,"color","#24292F"),i(ya,"color","#CF222E"),i(xa,"color","#24292F"),i(ba,"color","#CF222E"),i(Ta,"color","#24292F"),i(wa,"color","#CF222E"),i(La,"color","#24292F"),i($a,"color","#0550AE"),i(Fa,"color","#24292F"),i(Ua,"color","#CF222E"),i(Ca,"color","#24292F"),i(Ra,"color","#0550AE"),i(za,"color","#24292F"),i(Ia,"color","#24292F"),i(ka,"color","#0550AE"),i(Oa,"color","#24292F"),i(Da,"color","#24292F"),i(Va,"color","#24292F"),i(Ga,"color","#24292F"),i(Ba,"color","#24292F"),i(Wa,"color","#0550AE"),i(qa,"color","#24292F"),i(Ma,"color","#24292F"),i(Ya,"color","#24292F"),i(Ha,"color","#24292F"),i(Ja,"color","#24292F"),i(Ka,"color","#0550AE"),i(Qa,"color","#24292F"),i(Xa,"color","#0550AE"),i(ja,"color","#24292F"),i(Za,"color","#0550AE"),i(tn,"color","#24292F"),i(en,"color","#0550AE"),i(an,"color","#24292F"),i(nn,"color","#24292F"),i(sn,"color","#24292F"),i(rn,"color","#0550AE"),i(ln,"color","#24292F"),i(on,"color","#24292F"),i(pn,"color","#0550AE"),i(fn,"color","#24292F"),i(cn,"color","#24292F")},m(w,at){pt(p,w,at),x(w,u,at),x(w,f,at),t(f,E),x(w,v,at),x(w,h,at),t(h,A),x(w,g,at),x(w,_,at),t(_,o),t(o,y),t(y,O),t(O,I),t(y,S),t(S,P),t(y,D),t(D,b),t(o,X),t(o,B),t(o,nt),t(o,H),t(H,W),t(W,L),t(H,J),t(J,K),t(H,N),t(N,k),t(o,q),t(o,R),t(o,Z),t(o,j),t(j,U),t(U,M),t(j,V),t(V,z),t(o,st),t(o,ut),t(ut,Pt),t(Pt,Lt),t(ut,$t),t($t,te),t(ut,ht),t(ht,ee),t(ut,_t),t(_t,Nt),t(o,ae),t(o,rt),t(rt,Q),t(Q,ne),t(rt,mt),t(mt,se),t(rt,yt),t(yt,Ft),t(rt,xt),t(xt,re),t(o,Wt),t(o,tt),t(tt,bt),t(bt,qt),t(tt,d),t(d,T),t(tt,vt),t(vt,Pe),t(tt,Ut),t(Ut,Mt),t(o,Ne),t(o,et),t(et,Ct),t(Ct,ye),t(et,Yt),t(Yt,Tt),t(et,Rt),t(Rt,xe),t(et,zt),t(zt,be),t(o,wt),t(o,le),t(o,Te),t(o,It),t(It,we),t(we,Gs),t(It,Le),t(Le,Bs),t(o,Ws),t(o,fs),t(o,qs),t(o,Ht),t(Ht,$e),t($e,Ms),t(Ht,gn),t(gn,Ys),t(Ht,Fe),t(Fe,Hs),t(Ht,Ue),t(Ue,Js),t(o,Ks),t(o,An),t(An,Ce),t(Ce,Qs),t(o,Xs),t(o,oe),t(oe,Re),t(Re,js),t(oe,ze),t(ze,Zs),t(oe,Ie),t(Ie,tr),t(o,er),t(o,cs),t(o,ar),t(o,Et),t(Et,ke),t(ke,nr),t(Et,Oe),t(Oe,sr),t(Et,De),t(De,rr),t(Et,Ve),t(Ve,lr),t(Et,Ge),t(Ge,or),t(Et,Be),t(Be,pr),t(Et,We),t(We,ir),t(o,fr),t(o,gt),t(gt,qe),t(qe,cr),t(gt,Me),t(Me,ur),t(gt,Ye),t(Ye,hr),t(gt,He),t(He,vr),t(gt,Je),t(Je,dr),t(gt,Ke),t(Ke,_r),t(gt,Qe),t(Qe,mr),t(o,Er),t(o,At),t(At,Xe),t(Xe,gr),t(At,je),t(je,Ar),t(At,Ze),t(Ze,Sr),t(At,ta),t(ta,Pr),t(At,ea),t(ea,Nr),t(At,aa),t(aa,yr),t(At,na),t(na,xr),t(o,br),t(o,Sn),t(Sn,Pn),t(Pn,Tr),t(o,wr),t(o,pe),t(pe,sa),t(sa,Lr),t(pe,ra),t(ra,$r),t(pe,la),t(la,Fr),t(o,Ur),t(o,us),t(o,Cr),t(o,kt),t(kt,Nn),t(Nn,Rr),t(kt,oa),t(oa,zr),t(kt,pa),t(pa,Ir),t(kt,ia),t(ia,kr),t(kt,fa),t(fa,Or),t(o,Dr),t(o,St),t(St,yn),t(yn,Vr),t(St,ca),t(ca,Gr),t(St,ua),t(ua,Br),t(St,ha),t(ha,Wr),t(St,va),t(va,qr),t(St,da),t(da,Mr),t(St,_a),t(_a,Yr),t(o,Hr),t(o,Ot),t(Ot,ma),t(ma,Jr),t(Ot,Ea),t(Ea,Kr),t(Ot,ga),t(ga,Qr),t(Ot,Aa),t(Aa,Xr),t(Ot,Sa),t(Sa,jr),t(o,Zr),t(o,hs),t(o,tl),t(o,ie),t(ie,xn),t(xn,el),t(ie,Pa),t(Pa,al),t(ie,Na),t(Na,nl),t(o,sl),t(o,fe),t(fe,bn),t(bn,rl),t(fe,ya),t(ya,ll),t(fe,xa),t(xa,ol),t(o,pl),t(o,vs),t(o,il),t(o,ce),t(ce,Tn),t(Tn,fl),t(ce,ba),t(ba,cl),t(ce,Ta),t(Ta,ul),t(o,hl),t(o,ds),t(o,vl),t(o,Dt),t(Dt,wn),t(wn,dl),t(Dt,wa),t(wa,_l),t(Dt,La),t(La,ml),t(Dt,$a),t($a,El),t(Dt,Fa),t(Fa,gl),t(o,Al),t(o,Vt),t(Vt,Ln),t(Ln,Sl),t(Vt,Ua),t(Ua,Pl),t(Vt,Ca),t(Ca,Nl),t(Vt,Ra),t(Ra,yl),t(Vt,za),t(za,xl),t(o,bl),t(o,_s),t(o,Tl),t(o,ue),t(ue,Ia),t(Ia,wl),t(ue,ka),t(ka,Ll),t(ue,Oa),t(Oa,$l),t(o,Fl),t(o,$n),t($n,Da),t(Da,Ul),t(o,Cl),t(o,Fn),t(Fn,Va),t(Va,Rl),t(o,zl),t(o,Un),t(Un,Ga),t(Ga,Il),t(o,kl),t(o,ms),t(o,Ol),t(o,he),t(he,Ba),t(Ba,Dl),t(he,Wa),t(Wa,Vl),t(he,qa),t(qa,Gl),t(o,Bl),t(o,Cn),t(Cn,Ma),t(Ma,Wl),t(o,ql),t(o,Rn),t(Rn,Ya),t(Ya,Ml),t(o,Yl),t(o,zn),t(zn,Ha),t(Ha,Hl),t(o,Jl),t(o,Es),t(o,Kl),t(o,ve),t(ve,Ja),t(Ja,Ql),t(ve,Ka),t(Ka,Xl),t(ve,Qa),t(Qa,jl),t(o,Zl),t(o,de),t(de,In),t(In,to),t(de,Xa),t(Xa,eo),t(de,ja),t(ja,ao),t(o,no),t(o,_e),t(_e,kn),t(kn,so),t(_e,Za),t(Za,ro),t(_e,tn),t(tn,lo),t(o,oo),t(o,me),t(me,On),t(On,po),t(me,en),t(en,io),t(me,an),t(an,fo),t(o,co),t(o,Dn),t(Dn,nn),t(nn,uo),t(o,ho),t(o,gs),t(o,vo),t(o,Ee),t(Ee,sn),t(sn,_o),t(Ee,rn),t(rn,mo),t(Ee,ln),t(ln,Eo),t(o,go),t(o,As),t(o,Ao),t(o,ge),t(ge,on),t(on,So),t(ge,pn),t(pn,Po),t(ge,fn),t(fn,No),t(o,yo),t(o,Vn),t(Vn,cn),t(cn,xo),t(o,bo),x(w,Ss,at),x(w,G,at),t(G,Gn),t(Gn,To),t(G,wo),t(G,un),t(un,Bn),t(Bn,Lo),t(un,$o),t(G,Fo),t(G,hn),t(hn,Wn),t(Wn,Uo),t(hn,Co),t(G,Ro),t(G,Jt),t(Jt,qn),t(qn,zo),t(Jt,Io),t(Jt,Mn),t(Mn,ko),t(Jt,Oo),t(G,Do),t(G,dt),t(dt,Yn),t(Yn,Vo),t(dt,Go),t(dt,Hn),t(Hn,Bo),t(dt,Wo),t(dt,Jn),t(Jn,qo),t(dt,Mo),t(dt,Kn),t(Kn,Yo),t(dt,Ho),t(G,Jo),t(G,Gt),t(Gt,Ko),t(Gt,Qn),t(Qn,Qo),t(Gt,Xo),t(Gt,Xn),t(Xn,jo),t(Gt,Zo),t(G,tp),t(G,Kt),t(Kt,jn),t(jn,ep),t(Kt,ap),t(Kt,Zn),t(Zn,np),t(Kt,sp),t(G,rp),t(G,Ae),t(Ae,lp),t(Ae,ts),t(ts,op),t(Ae,pp),t(G,ip),t(G,Se),t(Se,fp),t(Se,es),t(es,cp),t(Se,up),Ps=!0},p(w,at){const as={};at&1&&(as.$$scope={dirty:at,ctx:w}),p.$set(as)},i(w){Ps||(it(p.$$.fragment,w),Ps=!0)},o(w){ft(p.$$.fragment,w),Ps=!1},d(w){ct(p,w),w&&e(u),w&&e(f),w&&e(v),w&&e(h),w&&e(g),w&&e(_),w&&e(Ss),w&&e(G)}}}function tu(m){let p,u,f,E,v,h,A,g;return p=new mp({props:{$$slots:{default:[Jc]},$$scope:{ctx:m}}}),f=new mp({props:{$$slots:{default:[Xc]},$$scope:{ctx:m}}}),v=new mp({props:{$$slots:{default:[Zc]},$$scope:{ctx:m}}}),A=new Yc({}),{c(){lt(p.$$.fragment),u=$(),lt(f.$$.fragment),E=$(),lt(v.$$.fragment),h=$(),lt(A.$$.fragment)},l(_){ot(p.$$.fragment,_),u=F(_),ot(f.$$.fragment,_),E=F(_),ot(v.$$.fragment,_),h=F(_),ot(A.$$.fragment,_)},m(_,o){pt(p,_,o),x(_,u,o),pt(f,_,o),x(_,E,o),pt(v,_,o),x(_,h,o),pt(A,_,o),g=!0},p(_,o){const y={};o&1&&(y.$$scope={dirty:o,ctx:_}),p.$set(y);const O={};o&1&&(O.$$scope={dirty:o,ctx:_}),f.$set(O);const I={};o&1&&(I.$$scope={dirty:o,ctx:_}),v.$set(I)},i(_){g||(it(p.$$.fragment,_),it(f.$$.fragment,_),it(v.$$.fragment,_),it(A.$$.fragment,_),g=!0)},o(_){ft(p.$$.fragment,_),ft(f.$$.fragment,_),ft(v.$$.fragment,_),ft(A.$$.fragment,_),g=!1},d(_){ct(p,_),_&&e(u),ct(f,_),_&&e(E),ct(v,_),_&&e(h),ct(A,_)}}}function eu(m){let p,u,f,E;return p=new Cc({props:{title:"LUT",description:"Color lookup table WebGL2",keywords:"Javascript, WebGL, LUT, Filters, PostProcessing, Creative, Shaders"}}),f=new Fc({props:{$$slots:{default:[tu]},$$scope:{ctx:m}}}),{c(){lt(p.$$.fragment),u=$(),lt(f.$$.fragment)},l(v){ot(p.$$.fragment,v),u=F(v),ot(f.$$.fragment,v)},m(v,h){pt(p,v,h),x(v,u,h),pt(f,v,h),E=!0},p(v,[h]){const A={};h&1&&(A.$$scope={dirty:h,ctx:v}),f.$set(A)},i(v){E||(it(p.$$.fragment,v),it(f.$$.fragment,v),E=!0)},o(v){ft(p.$$.fragment,v),ft(f.$$.fragment,v),E=!1},d(v){ct(p,v),v&&e(u),ct(f,v)}}}class fu extends gp{constructor(p){super(),Ap(this,p,null,eu,Sp,{})}}export{fu as default};
