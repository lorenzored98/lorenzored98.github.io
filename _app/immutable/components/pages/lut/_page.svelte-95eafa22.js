import{S as gp,i as Sp,s as Ap,w as Q,x as tt,y as et,f as at,t as nt,z as st,o as Fc,k as s,l as r,m as l,h as e,n as R,b as P,B as Ep,J as Ac,K as Pc,a as y,q as a,c as w,r as n,Y as Gs,R as Nc,G as t,T as dc,L as $c,M as bc,Z as xc,U as yc,u as wc,p as c}from"../../../chunks/index-eac81cc4.js";import{S as Tc,B as Lc}from"../../../chunks/Seo-593c0eb7.js";import{M as Uc,F as Cc,S as Vs,T as Rc,a as Fp}from"../../../chunks/Footer-e049357b.js";import{D as Dc}from"../../../chunks/DemoContainer-367e056c.js";import{N as zc}from"../../../chunks/NumberRange-2f6f0500.js";import{c as _c,a as Ic,b as mc,u as Ec}from"../../../chunks/gl-055e8196.js";const kc=`#version 300 es

in vec2 position;

void main() {
	gl_Position = vec4(position, 0.0, 1.0);
}
`,Oc=`#version 300 es

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
}`;function gc(g,o,i){const f=g.slice();return f[29]=o[i],f[31]=i,f}function Vc(g){let o;return{c(){o=s("canvas"),this.h()},l(i){o=r(i,"CANVAS",{slot:!0,class:!0}),l(o).forEach(e),this.h()},h(){R(o,"slot","canvas"),R(o,"class","svelte-1540kvn")},m(i,f){P(i,o,f),g[8](o)},p:Ep,d(i){i&&e(o),g[8](null)}}}function Sc(g){let o,i=g[29].name+"",f,S;return{c(){o=s("option"),f=a(i),S=y(),this.h()},l(_){o=r(_,"OPTION",{default:!0});var h=l(o);f=n(h,i),S=w(h),h.forEach(e),this.h()},h(){R(o,"default",g[31]===0),o.__value=g[31],o.value=o.__value},m(_,h){P(_,o,h),t(o,f),t(o,S)},p(_,h){h[0]&1&&i!==(i=_[29].name+"")&&wc(f,i)},d(_){_&&e(o)}}}function Gc(g){let o,i,f,S,_,h,d,E,x,p,v,$,I,A,F,O,b,Z,B,it,H,W=g[0],U=[];for(let N=0;N<W.length;N+=1)U[N]=Sc(gc(g,W,N));function J(N){g[7](N)}let K={id:"strength",min:0,max:1,step:.01,onChange:null};return g[4]!==void 0&&(K.value=g[4]),b=new zc({props:K}),Ac.push(()=>Pc(b,"value",J)),{c(){o=s("fieldset"),i=s("div"),f=s("img"),h=y(),d=s("div"),E=s("label"),x=a("LUT Texture"),p=y(),v=s("select");for(let N=0;N<U.length;N+=1)U[N].c();$=y(),I=s("div"),A=s("label"),F=a("Strength"),O=y(),Q(b.$$.fragment),this.h()},l(N){o=r(N,"FIELDSET",{slot:!0});var k=l(o);i=r(k,"DIV",{class:!0});var q=l(i);f=r(q,"IMG",{id:!0,src:!0,width:!0,height:!0,alt:!0}),q.forEach(e),h=w(k),d=r(k,"DIV",{class:!0});var D=l(d);E=r(D,"LABEL",{for:!0});var rt=l(E);x=n(rt,"LUT Texture"),rt.forEach(e),p=w(D),v=r(D,"SELECT",{id:!0});var j=l(v);for(let V=0;V<U.length;V+=1)U[V].l(j);j.forEach(e),D.forEach(e),$=w(k),I=r(k,"DIV",{class:!0});var C=l(I);A=r(C,"LABEL",{for:!0});var M=l(A);F=n(M,"Strength"),M.forEach(e),O=w(C),tt(b.$$.fragment,C),C.forEach(e),k.forEach(e),this.h()},h(){R(f,"id","lut"),Gs(f.src,S=g[5].src)||R(f,"src",S),R(f,"width",g[3]),R(f,"height",_=g[3]/32),R(f,"alt","Look up table texture"),R(i,"class","demo-input-group lut svelte-1540kvn"),R(E,"for","texture"),R(v,"id","texture"),g[1]===void 0&&Nc(()=>g[6].call(v)),R(d,"class","demo-input-group"),R(A,"for","strength"),R(I,"class","demo-input-group"),R(o,"slot","controls")},m(N,k){P(N,o,k),t(o,i),t(i,f),t(o,h),t(o,d),t(d,E),t(E,x),t(d,p),t(d,v);for(let q=0;q<U.length;q+=1)U[q].m(v,null);dc(v,g[1]),t(o,$),t(o,I),t(I,A),t(A,F),t(I,O),et(b,I,null),B=!0,it||(H=$c(v,"change",g[6]),it=!0)},p(N,k){if((!B||k[0]&32&&!Gs(f.src,S=N[5].src))&&R(f,"src",S),(!B||k[0]&8)&&R(f,"width",N[3]),(!B||k[0]&8&&_!==(_=N[3]/32))&&R(f,"height",_),k[0]&1){W=N[0];let D;for(D=0;D<W.length;D+=1){const rt=gc(N,W,D);U[D]?U[D].p(rt,k):(U[D]=Sc(rt),U[D].c(),U[D].m(v,null))}for(;D<U.length;D+=1)U[D].d(1);U.length=W.length}k[0]&2&&dc(v,N[1]);const q={};!Z&&k[0]&16&&(Z=!0,q.value=N[4],bc(()=>Z=!1)),b.$set(q)},i(N){B||(at(b.$$.fragment,N),B=!0)},o(N){nt(b.$$.fragment,N),B=!1},d(N){N&&e(o),xc(U,N),st(b),it=!1,H()}}}function Bc(g){let o,i;return o=new Dc({props:{id:"lut-demo",caption:"LUT",$$slots:{controls:[Gc],canvas:[Vc]},$$scope:{ctx:g}}}),{c(){Q(o.$$.fragment)},l(f){tt(o.$$.fragment,f)},m(f,S){et(o,f,S),i=!0},p(f,S){const _={};S[0]&63|S[1]&2&&(_.$$scope={dirty:S,ctx:f}),o.$set(_)},i(f){i||(at(o.$$.fragment,f),i=!0)},o(f){nt(o.$$.fragment,f),i=!1},d(f){st(o,f)}}}function Wc(g,o,i){let f,S,_,h,d=0,E=0,x,p=0,v=-1,$,I,A,F;const O=Float32Array.BYTES_PER_ELEMENT,b=[{image:null,texture:{value:null,id:-1},name:"Neutral",src:"/lut/neutral.webp"},{image:null,texture:{value:null,id:-1},name:"Darken",src:"/lut/darken.webp"},{image:null,texture:{value:null,id:-1},name:"Grayscale",src:"/lut/grayscale.webp"},{image:null,texture:{value:null,id:-1},name:"Sepia",src:"/lut/sepia.webp"}];let Z={value:null,id:-1},B,it,H,W,U,J=0,K=1;Fc(()=>{if(h=_.getContext("webgl2"),!h)return;S=document.getElementById("lut-demo");function C(){const M=S.clientWidth,V=window.innerHeight-window.innerHeight/4;if(d=x.width,E=x.height,M>0&&V>0){if(d>M){const z=M/d;d*=z,E*=z}if(E>V){const z=V/E;d*=z,E*=z}d=Math.floor(d),E=Math.floor(E)}i(3,p=d),i(2,_.width=d,_),i(2,_.height=E,_),i(2,_.style.width=`${d}px`,_),i(2,_.style.height=`${E}px`,_)}return x=new Image,x.crossOrigin="anonymous",x.onload=()=>{C(),q().then(()=>{N(),k()})},x.src="/images/greatwave.webp",window.addEventListener("resize",C,{passive:!0}),()=>{window.removeEventListener("resize",C)}});function N(){const C=_c(h,h.VERTEX_SHADER,kc),M=_c(h,h.FRAGMENT_SHADER,Oc);F=Ic(h,{vert:C,frag:M}),v=h.getAttribLocation(F,"position"),B=h.getUniformLocation(F,"uRes"),it=h.getUniformLocation(F,"uTex"),H=h.getUniformLocation(F,"uLUT"),W=h.getUniformLocation(F,"uLUTSize"),U=h.getUniformLocation(F,"uStrength"),$=h.createVertexArray(),I=h.createBuffer(),A=h.createBuffer(),Z=mc(h,{src:x,internalFormat:"rgba",target:"rgba",flipY:!0});for(let ft=0;ft<b.length;ft++)i(0,b[ft].texture=mc(h,{src:b[ft].image,internalFormat:"rgba",target:"rgba",minFilter:"LINEAR",magFilter:"LINEAR",flipY:!0}),b);const V=[-1,-1,1,-1,-1,1,1,1],z=[0,1,2,1,3,2];h.bindVertexArray($),h.bindBuffer(h.ARRAY_BUFFER,I),h.bufferData(h.ARRAY_BUFFER,new Float32Array(V),h.STATIC_DRAW),h.bindBuffer(h.ELEMENT_ARRAY_BUFFER,A),h.bufferData(h.ELEMENT_ARRAY_BUFFER,new Int32Array(z),h.STATIC_DRAW),h.enableVertexAttribArray(v),h.vertexAttribPointer(v,2,h.FLOAT,!1,2*O,0)}function k(){h.viewport(0,0,d,E),h.clearColor(0,0,0,1),h.clear(h.COLOR_BUFFER_BIT),h.useProgram(F),h.bindVertexArray($),h.uniform2f(B,d,E),h.uniform1f(U,K),h.uniform1f(W,32),Ec(h,Z.value,Z.id),h.uniform1i(it,Z.id),Ec(h,f.texture.value,f.texture.id),h.uniform1i(H,f.texture.id),h.drawElements(h.TRIANGLES,6,h.UNSIGNED_INT,0),window.requestAnimationFrame(k)}async function q(){const C=new Array(b.length);for(let M=0;M<b.length;M++)C[M]=new Promise(V=>{const z=b[M];z.image=new Image,z.image.crossOrigin="anonymous",z.image.src=z.src,z.image.onload=()=>{V(!0)}});return Promise.all(C)}function D(){J=yc(this),i(1,J)}function rt(C){K=C,i(4,K)}function j(C){Ac[C?"unshift":"push"](()=>{_=C,i(2,_)})}return g.$$.update=()=>{g.$$.dirty[0]&3&&i(5,f=b[J])},[b,J,_,p,K,f,D,rt,j]}class qc extends gp{constructor(o){super(),Sp(this,o,Wc,Bc,Ap,{},null,[-1,-1])}}function Mc(g){let o,i,f;return{c(){o=s("div"),i=s("img"),this.h()},l(S){o=r(S,"DIV",{class:!0});var _=l(o);i=r(_,"IMG",{src:!0,width:!0,height:!0,alt:!0,loading:!0}),_.forEach(e),this.h()},h(){Gs(i.src,f=g[2])||R(i,"src",f),R(i,"width",g[0]),R(i,"height",g[1]),R(i,"alt",g[3]),R(i,"loading",g[4]),R(o,"class","svelte-gskluf")},m(S,_){P(S,o,_),t(o,i)},p(S,[_]){_&4&&!Gs(i.src,f=S[2])&&R(i,"src",f),_&1&&R(i,"width",S[0]),_&2&&R(i,"height",S[1]),_&8&&R(i,"alt",S[3]),_&16&&R(i,"loading",S[4])},i:Ep,o:Ep,d(S){S&&e(o)}}}function Yc(g,o,i){let{width:f}=o,{height:S}=o,{src:_}=o,{alt:h}=o,{loading:d="lazy"}=o;return g.$$set=E=>{"width"in E&&i(0,f=E.width),"height"in E&&i(1,S=E.height),"src"in E&&i(2,_=E.src),"alt"in E&&i(3,h=E.alt),"loading"in E&&i(4,d=E.loading)},[f,S,_,h,d]}class Hc extends gp{constructor(o){super(),Sp(this,o,Yc,Mc,Ap,{width:0,height:1,src:2,alt:3,loading:4})}}function Jc(g){let o;return{c(){o=a("LUT Shader")},l(i){o=n(i,"LUT Shader")},m(i,f){P(i,o,f)},d(i){i&&e(o)}}}function Kc(g){let o,i,f,S,_;return o=new Rc({props:{timestamp:1667670429,$$slots:{default:[Jc]},$$scope:{ctx:g}}}),{c(){Q(o.$$.fragment),i=y(),f=s("p"),S=a(`It's easier to find .env secrets on Github than 5 LUT textures to
			use for a post...`)},l(h){tt(o.$$.fragment,h),i=w(h),f=r(h,"P",{});var d=l(f);S=n(d,`It's easier to find .env secrets on Github than 5 LUT textures to
			use for a post...`),d.forEach(e)},m(h,d){et(o,h,d),P(h,i,d),P(h,f,d),t(f,S),_=!0},p(h,d){const E={};d&1&&(E.$$scope={dirty:d,ctx:h}),o.$set(E)},i(h){_||(at(o.$$.fragment,h),_=!0)},o(h){nt(o.$$.fragment,h),_=!1},d(h){st(o,h),h&&e(i),h&&e(f)}}}function Xc(g){let o;return{c(){o=a("How It Works")},l(i){o=n(i,"How It Works")},m(i,f){P(i,o,f)},d(i){i&&e(o)}}}function Zc(g){let o,i,f,S,_,h,d,E,x,p,v,$,I,A,F,O,b,Z,B,it,H,W,U,J,K,N,k,q,D,rt,j,C,M,V,z,ft,ut,Ft,wt,Tt,te,ht,ee,_t,Pt,ae,ct,X,ne,mt,se,Nt,Lt,$t,re,Wt,lt,bt,qt;return o=new Fp({props:{id:"how-it-works",$$slots:{default:[Xc]},$$scope:{ctx:g}}}),F=new Hc({props:{src:"/lut/neutral.webp",width:1024,height:32,alt:"Neutral LUT"}}),{c(){Q(o.$$.fragment),i=y(),f=s("p"),S=a("This is a "),_=s("strong"),h=a("L"),d=a("ook"),E=s("strong"),x=a("u"),p=a(`p
			`),v=s("strong"),$=a("T"),I=a("able texture."),A=y(),Q(F.$$.fragment),O=y(),b=s("p"),Z=a("This is a "),B=s("var"),it=a("1024x32"),H=a(` texture. It's not the only possible representation
			or size. Often it can be represented as a "grid" instead of a "row" like
			the one above. This post deals with the "row" kind, and even though the
			shader to apply it might change between different representations, the
			concept behind it remains the same.`),W=y(),U=s("p"),J=a(`For those familiar with shader programming, it's apparent that the
			first small quad is something like `),K=s("var"),N=a("vec3(uv, 0.0)"),k=a(`
			and the last quad is `),q=s("var"),D=a("vec3(uv, 1.0)"),rt=a(`. This tells us that
			there is a blue channel progression (from left to right in this
			case).`),j=y(),C=s("p"),M=a("For those not familiar with shaders you can visualize it this way:"),V=y(),z=s("ul"),ft=s("li"),ut=a(`Red (x) is a gradient that goes from left to right. Left being 0
				and right 1.`),Ft=y(),wt=s("li"),Tt=a(`Green (y) is a gradient that goes from bottom to top. Bottom
				being 0 and top 1.`),te=y(),ht=s("li"),ee=a(`Blue (z) is a color that remains constant for a quad. It
				increases by some amount for every quad.`),_t=y(),Pt=s("p"),ae=a(`Imagine recomposing a cube from this texture using the blue channel
			as its z-axis. We end up with a cube that stores the LUT colors. If
			we think about RGB as a position vector inside the newly created
			cube volume, we can find the LUT color that maps to the original
			image RGB color.`),ct=y(),X=s("p"),ne=a(`To accurately represent each color we would need a gigantic
			256x256x256 LUT. This is not possible or simply not worth it in many
			cases. We can instead take advantage of `),mt=s("var"),se=a("GL_LINEAR"),Nt=a(`
			and `),Lt=s("var"),$t=a("mix()"),re=a(" to get away with a much smaller texture size."),Wt=y(),lt=s("p"),bt=a(`This specific texture is a neutral LUT. If we were to apply it (and
			you can do this in the demo below) to an image, there would be no
			difference.`)},l(m){tt(o.$$.fragment,m),i=w(m),f=r(m,"P",{});var T=l(f);S=n(T,"This is a "),_=r(T,"STRONG",{});var vt=l(_);h=n(vt,"L"),vt.forEach(e),d=n(T,"ook"),E=r(T,"STRONG",{});var Fe=l(E);x=n(Fe,"u"),Fe.forEach(e),p=n(T,`p
			`),v=r(T,"STRONG",{});var Ut=l(v);$=n(Ut,"T"),Ut.forEach(e),I=n(T,"able texture."),T.forEach(e),A=w(m),tt(F.$$.fragment,m),O=w(m),b=r(m,"P",{});var Mt=l(b);Z=n(Mt,"This is a "),B=r(Mt,"VAR",{});var Pe=l(B);it=n(Pe,"1024x32"),Pe.forEach(e),H=n(Mt,` texture. It's not the only possible representation
			or size. Often it can be represented as a "grid" instead of a "row" like
			the one above. This post deals with the "row" kind, and even though the
			shader to apply it might change between different representations, the
			concept behind it remains the same.`),Mt.forEach(e),W=w(m),U=r(m,"P",{});var ot=l(U);J=n(ot,`For those familiar with shader programming, it's apparent that the
			first small quad is something like `),K=r(ot,"VAR",{});var Ct=l(K);N=n(Ct,"vec3(uv, 0.0)"),Ct.forEach(e),k=n(ot,`
			and the last quad is `),q=r(ot,"VAR",{});var Ne=l(q);D=n(Ne,"vec3(uv, 1.0)"),Ne.forEach(e),rt=n(ot,`. This tells us that
			there is a blue channel progression (from left to right in this
			case).`),ot.forEach(e),j=w(m),C=r(m,"P",{});var Yt=l(C);M=n(Yt,"For those not familiar with shaders you can visualize it this way:"),Yt.forEach(e),V=w(m),z=r(m,"UL",{});var xt=l(z);ft=r(xt,"LI",{});var Rt=l(ft);ut=n(Rt,`Red (x) is a gradient that goes from left to right. Left being 0
				and right 1.`),Rt.forEach(e),Ft=w(xt),wt=r(xt,"LI",{});var $e=l(wt);Tt=n($e,`Green (y) is a gradient that goes from bottom to top. Bottom
				being 0 and top 1.`),$e.forEach(e),te=w(xt),ht=r(xt,"LI",{});var Dt=l(ht);ee=n(Dt,`Blue (z) is a color that remains constant for a quad. It
				increases by some amount for every quad.`),Dt.forEach(e),xt.forEach(e),_t=w(m),Pt=r(m,"P",{});var be=l(Pt);ae=n(be,`Imagine recomposing a cube from this texture using the blue channel
			as its z-axis. We end up with a cube that stores the LUT colors. If
			we think about RGB as a position vector inside the newly created
			cube volume, we can find the LUT color that maps to the original
			image RGB color.`),be.forEach(e),ct=w(m),X=r(m,"P",{});var yt=l(X);ne=n(yt,`To accurately represent each color we would need a gigantic
			256x256x256 LUT. This is not possible or simply not worth it in many
			cases. We can instead take advantage of `),mt=r(yt,"VAR",{});var le=l(mt);se=n(le,"GL_LINEAR"),le.forEach(e),Nt=n(yt,`
			and `),Lt=r(yt,"VAR",{});var xe=l(Lt);$t=n(xe,"mix()"),xe.forEach(e),re=n(yt," to get away with a much smaller texture size."),yt.forEach(e),Wt=w(m),lt=r(m,"P",{});var zt=l(lt);bt=n(zt,`This specific texture is a neutral LUT. If we were to apply it (and
			you can do this in the demo below) to an image, there would be no
			difference.`),zt.forEach(e)},m(m,T){et(o,m,T),P(m,i,T),P(m,f,T),t(f,S),t(f,_),t(_,h),t(f,d),t(f,E),t(E,x),t(f,p),t(f,v),t(v,$),t(f,I),P(m,A,T),et(F,m,T),P(m,O,T),P(m,b,T),t(b,Z),t(b,B),t(B,it),t(b,H),P(m,W,T),P(m,U,T),t(U,J),t(U,K),t(K,N),t(U,k),t(U,q),t(q,D),t(U,rt),P(m,j,T),P(m,C,T),t(C,M),P(m,V,T),P(m,z,T),t(z,ft),t(ft,ut),t(z,Ft),t(z,wt),t(wt,Tt),t(z,te),t(z,ht),t(ht,ee),P(m,_t,T),P(m,Pt,T),t(Pt,ae),P(m,ct,T),P(m,X,T),t(X,ne),t(X,mt),t(mt,se),t(X,Nt),t(X,Lt),t(Lt,$t),t(X,re),P(m,Wt,T),P(m,lt,T),t(lt,bt),qt=!0},p(m,T){const vt={};T&1&&(vt.$$scope={dirty:T,ctx:m}),o.$set(vt)},i(m){qt||(at(o.$$.fragment,m),at(F.$$.fragment,m),qt=!0)},o(m){nt(o.$$.fragment,m),nt(F.$$.fragment,m),qt=!1},d(m){st(o,m),m&&e(i),m&&e(f),m&&e(A),st(F,m),m&&e(O),m&&e(b),m&&e(W),m&&e(U),m&&e(j),m&&e(C),m&&e(V),m&&e(z),m&&e(_t),m&&e(Pt),m&&e(ct),m&&e(X),m&&e(Wt),m&&e(lt)}}}function jc(g){let o;return{c(){o=a("Texture3D")},l(i){o=n(i,"Texture3D")},m(i,f){P(i,o,f)},d(i){i&&e(o)}}}function Qc(g){let o;return{c(){o=a("stackoverflow answer")},l(i){o=n(i,"stackoverflow answer")},m(i,f){P(i,o,f)},d(i){i&&e(o)}}}function tu(g){let o,i,f,S,_,h,d,E,x,p,v,$,I;return o=new Fp({props:{id:"texture-3d",$$slots:{default:[jc]},$$scope:{ctx:g}}}),v=new Lc({props:{href:"https://stackoverflow.com/a/65161148",$$slots:{default:[Qc]},$$scope:{ctx:g}}}),{c(){Q(o.$$.fragment),i=y(),f=s("p"),S=a("Using WebGL2 we have access to 3D textures. Using "),_=s("var"),h=a("texStorage3D()"),d=a(`
			and `),E=s("var"),x=a("texSubImage3D()"),p=a(` WebGL2 will construct the volume cube
			by for us. After that we need a simple shader that takes the
			original texture color and uses it to index the cube. There is a
			good
			`),Q(v.$$.fragment),$=a(`
			that outlines how to do this.`)},l(A){tt(o.$$.fragment,A),i=w(A),f=r(A,"P",{});var F=l(f);S=n(F,"Using WebGL2 we have access to 3D textures. Using "),_=r(F,"VAR",{});var O=l(_);h=n(O,"texStorage3D()"),O.forEach(e),d=n(F,`
			and `),E=r(F,"VAR",{});var b=l(E);x=n(b,"texSubImage3D()"),b.forEach(e),p=n(F,` WebGL2 will construct the volume cube
			by for us. After that we need a simple shader that takes the
			original texture color and uses it to index the cube. There is a
			good
			`),tt(v.$$.fragment,F),$=n(F,`
			that outlines how to do this.`),F.forEach(e)},m(A,F){et(o,A,F),P(A,i,F),P(A,f,F),t(f,S),t(f,_),t(_,h),t(f,d),t(f,E),t(E,x),t(f,p),et(v,f,null),t(f,$),I=!0},p(A,F){const O={};F&1&&(O.$$scope={dirty:F,ctx:A}),o.$set(O);const b={};F&1&&(b.$$scope={dirty:F,ctx:A}),v.$set(b)},i(A){I||(at(o.$$.fragment,A),at(v.$$.fragment,A),I=!0)},o(A){nt(o.$$.fragment,A),nt(v.$$.fragment,A),I=!1},d(A){st(o,A),A&&e(i),A&&e(f),st(v)}}}function eu(g){let o;return{c(){o=a("Shader Lookup")},l(i){o=n(i,"Shader Lookup")},m(i,f){P(i,o,f)},d(i){i&&e(o)}}}function au(g){let o,i,f,S,_,h,d,E,x,p,v,$,I,A,F,O,b,Z,B,it,H,W,U,J,K,N,k,q,D,rt,j,C,M,V,z,ft,ut,Ft,wt,Tt,te,ht,ee,_t,Pt,ae,ct,X,ne,mt,se,Nt,Lt,$t,re,Wt,lt,bt,qt,m,T,vt,Fe,Ut,Mt,Pe,ot,Ct,Ne,Yt,xt,Rt,$e,Dt,be,yt,le,xe,zt,ye,Bs,we,Ws,qs,fs,Ms,Ht,Te,Ys,gn,Hs,Le,Js,Ue,Ks,Xs,Sn,Ce,Zs,js,oe,Re,Qs,De,tr,ze,er,ar,cs,nr,Et,Ie,sr,ke,rr,Oe,lr,Ve,or,Ge,pr,Be,ir,We,fr,cr,gt,qe,ur,Me,hr,Ye,vr,He,dr,Je,_r,Ke,mr,Xe,Er,gr,St,Ze,Sr,je,Ar,Qe,Fr,ta,Pr,ea,Nr,aa,$r,na,br,xr,An,Fn,yr,wr,pe,sa,Tr,ra,Lr,la,Ur,Cr,us,Rr,It,Pn,Dr,oa,zr,pa,Ir,ia,kr,fa,Or,Vr,At,Nn,Gr,ca,Br,ua,Wr,ha,qr,va,Mr,da,Yr,_a,Hr,Jr,kt,ma,Kr,Ea,Xr,ga,Zr,Sa,jr,Aa,Qr,tl,hs,el,ie,$n,al,Fa,nl,Pa,sl,rl,fe,bn,ll,Na,ol,$a,pl,il,vs,fl,ce,xn,cl,ba,ul,xa,hl,vl,ds,dl,Ot,yn,_l,ya,ml,wa,El,Ta,gl,La,Sl,Al,Vt,wn,Fl,Ua,Pl,Ca,Nl,Ra,$l,Da,bl,xl,_s,yl,ue,za,wl,Ia,Tl,ka,Ll,Ul,Tn,Oa,Cl,Rl,Ln,Va,Dl,zl,Un,Ga,Il,kl,ms,Ol,he,Ba,Vl,Wa,Gl,qa,Bl,Wl,Cn,Ma,ql,Ml,Rn,Ya,Yl,Hl,Dn,Ha,Jl,Kl,Es,Xl,ve,Ja,Zl,Ka,jl,Xa,Ql,to,de,zn,eo,Za,ao,ja,no,so,_e,In,ro,Qa,lo,tn,oo,po,me,kn,io,en,fo,an,co,uo,On,nn,ho,vo,gs,_o,Ee,sn,mo,rn,Eo,ln,go,So,Ss,Ao,ge,on,Fo,pn,Po,fn,No,$o,Vn,cn,bo,xo,As,G,Gn,yo,wo,un,Bn,To,Lo,Uo,hn,Wn,Co,Ro,Do,Jt,qn,zo,Io,Mn,ko,Oo,Vo,dt,Yn,Go,Bo,Hn,Wo,qo,Jn,Mo,Yo,Kn,Ho,Jo,Ko,Gt,Xo,Xn,Zo,jo,Zn,Qo,tp,ep,Kt,jn,ap,np,Qn,sp,rp,lp,Se,op,ts,pp,ip,fp,Ae,cp,es,up,hp,Fs;return o=new Fp({props:{id:"shader-lookup",$$slots:{default:[eu]},$$scope:{ctx:g}}}),{c(){Q(o.$$.fragment),i=y(),f=s("p"),S=a(`For those who have to support WebGL1, or for whatever reason don't
			want to use a 3D texture, there is a way of doing it inside a
			fragment shader.`),_=y(),h=s("p"),d=a("Here's the shader:"),E=y(),x=s("pre"),p=s("code"),v=s("span"),$=s("span"),I=a("#version "),A=s("span"),F=a("300"),O=s("span"),b=a(" es"),Z=a(`
`),B=s("span"),it=a(`
`),H=s("span"),W=s("span"),U=a("precision highp "),J=s("span"),K=a("float"),N=s("span"),k=a(";"),q=a(`
`),D=s("span"),rt=a(`
`),j=s("span"),C=s("span"),M=a("uniform"),V=s("span"),z=a(" vec2 uRes;"),ft=a(`
`),ut=s("span"),Ft=s("span"),wt=a("uniform"),Tt=s("span"),te=a(" "),ht=s("span"),ee=a("sampler2D"),_t=s("span"),Pt=a(" uTex;"),ae=a(`
`),ct=s("span"),X=s("span"),ne=a("uniform"),mt=s("span"),se=a(" "),Nt=s("span"),Lt=a("sampler2D"),$t=s("span"),re=a(" uLUT;"),Wt=a(`
`),lt=s("span"),bt=s("span"),qt=a("uniform"),m=s("span"),T=a(" "),vt=s("span"),Fe=a("float"),Ut=s("span"),Mt=a(" uLUTSize;"),Pe=a(`
`),ot=s("span"),Ct=s("span"),Ne=a("uniform"),Yt=s("span"),xt=a(" "),Rt=s("span"),$e=a("float"),Dt=s("span"),be=a(" uStrength;"),yt=a(`
`),le=s("span"),xe=a(`
`),zt=s("span"),ye=s("span"),Bs=a("out"),we=s("span"),Ws=a(" vec4 outColor;"),qs=a(`
`),fs=s("span"),Ms=a(`
`),Ht=s("span"),Te=s("span"),Ys=a("void"),gn=s("span"),Hs=a(" "),Le=s("span"),Js=a("main"),Ue=s("span"),Ks=a("() {"),Xs=a(`
`),Sn=s("span"),Ce=s("span"),Zs=a("    vec2 uv = gl_FragCoord.xy / uRes;"),js=a(`
`),oe=s("span"),Re=s("span"),Qs=a("    vec4 tex = "),De=s("span"),tr=a("texture"),ze=s("span"),er=a("(uTex, uv);"),ar=a(`
`),cs=s("span"),nr=a(`
`),Et=s("span"),Ie=s("span"),sr=a("    tex.r = "),ke=s("span"),rr=a("clamp"),Oe=s("span"),lr=a("("),Ve=s("span"),or=a("0.0"),Ge=s("span"),pr=a(", "),Be=s("span"),ir=a("1.0"),We=s("span"),fr=a(", tex.r);"),cr=a(`
`),gt=s("span"),qe=s("span"),ur=a("    tex.g = "),Me=s("span"),hr=a("clamp"),Ye=s("span"),vr=a("("),He=s("span"),dr=a("0.0"),Je=s("span"),_r=a(", "),Ke=s("span"),mr=a("1.0"),Xe=s("span"),Er=a(", tex.g);"),gr=a(`
`),St=s("span"),Ze=s("span"),Sr=a("    tex.b = "),je=s("span"),Ar=a("clamp"),Qe=s("span"),Fr=a("("),ta=s("span"),Pr=a("0.0"),ea=s("span"),Nr=a(", "),aa=s("span"),$r=a("1.0"),na=s("span"),br=a(", tex.b);"),xr=a(`
`),An=s("span"),Fn=s("span"),yr=a("    "),wr=a(`
`),pe=s("span"),sa=s("span"),Tr=a("    vec4 lut = "),ra=s("span"),Lr=a("texture"),la=s("span"),Ur=a("(uLUT, uv);"),Cr=a(`
`),us=s("span"),Rr=a(`
`),It=s("span"),Pn=s("span"),Dr=a("    "),oa=s("span"),zr=a("float"),pa=s("span"),Ir=a(" maxSize = uLUTSize - "),ia=s("span"),kr=a("1.0"),fa=s("span"),Or=a(";"),Vr=a(`
`),At=s("span"),Nn=s("span"),Gr=a("    "),ca=s("span"),Br=a("float"),ua=s("span"),Wr=a(" maxCellCoord = "),ha=s("span"),qr=a("1.0"),va=s("span"),Mr=a(" - ("),da=s("span"),Yr=a("1.0"),_a=s("span"),Hr=a(" / uLUTSize);"),Jr=a(`
`),kt=s("span"),ma=s("span"),Kr=a("    vec2 halfTexel = "),Ea=s("span"),Xr=a("0.5"),ga=s("span"),Zr=a(" / "),Sa=s("span"),jr=a("vec2"),Aa=s("span"),Qr=a("(uLUTSize * uLUTSize, uLUTSize);"),tl=a(`
`),hs=s("span"),el=a(`
`),ie=s("span"),$n=s("span"),al=a("    "),Fa=s("span"),nl=a("float"),Pa=s("span"),sl=a(" redOffset = halfTexel.x + tex.r * (maxCellCoord / uLUTSize);"),rl=a(`
`),fe=s("span"),bn=s("span"),ll=a("    "),Na=s("span"),ol=a("float"),$a=s("span"),pl=a(" greenOffset = halfTexel.y + tex.g * maxCellCoord;"),il=a(`
`),vs=s("span"),fl=a(`
`),ce=s("span"),xn=s("span"),cl=a("    "),ba=s("span"),ul=a("float"),xa=s("span"),hl=a(" blue = tex.b * maxSize;"),vl=a(`
`),ds=s("span"),dl=a(`
`),Ot=s("span"),yn=s("span"),_l=a("    "),ya=s("span"),ml=a("float"),wa=s("span"),El=a(" leftCell = "),Ta=s("span"),gl=a("floor"),La=s("span"),Sl=a("(blue);"),Al=a(`
`),Vt=s("span"),wn=s("span"),Fl=a("    "),Ua=s("span"),Pl=a("float"),Ca=s("span"),Nl=a(" rightCell = "),Ra=s("span"),$l=a("ceil"),Da=s("span"),bl=a("(blue);"),xl=a(`
`),_s=s("span"),yl=a(`
`),ue=s("span"),za=s("span"),wl=a("    vec2 left = "),Ia=s("span"),Tl=a("vec2"),ka=s("span"),Ll=a("("),Ul=a(`
`),Tn=s("span"),Oa=s("span"),Cl=a("        leftCell / uLUTSize + redOffset,"),Rl=a(`
`),Ln=s("span"),Va=s("span"),Dl=a("        greenOffset"),zl=a(`
`),Un=s("span"),Ga=s("span"),Il=a("    );"),kl=a(`
`),ms=s("span"),Ol=a(`
`),he=s("span"),Ba=s("span"),Vl=a("    vec2 right = "),Wa=s("span"),Gl=a("vec2"),qa=s("span"),Bl=a("("),Wl=a(`
`),Cn=s("span"),Ma=s("span"),ql=a("        rightCell / uLUTSize + redOffset,"),Ml=a(`
`),Rn=s("span"),Ya=s("span"),Yl=a("        greenOffset"),Hl=a(`
`),Dn=s("span"),Ha=s("span"),Jl=a("    );"),Kl=a(`
`),Es=s("span"),Xl=a(`
`),ve=s("span"),Ja=s("span"),Zl=a("    vec3 color = "),Ka=s("span"),jl=a("mix"),Xa=s("span"),Ql=a("("),to=a(`
`),de=s("span"),zn=s("span"),eo=a("        "),Za=s("span"),ao=a("texture"),ja=s("span"),no=a("(uLUT, left).rgb,"),so=a(`
`),_e=s("span"),In=s("span"),ro=a("        "),Qa=s("span"),lo=a("texture"),tn=s("span"),oo=a("(uLUT, right).rgb,"),po=a(`
`),me=s("span"),kn=s("span"),io=a("        "),en=s("span"),fo=a("fract"),an=s("span"),co=a("(blue)"),uo=a(`
`),On=s("span"),nn=s("span"),ho=a("    );"),vo=a(`
`),gs=s("span"),_o=a(`
`),Ee=s("span"),sn=s("span"),mo=a("    color = "),rn=s("span"),Eo=a("mix"),ln=s("span"),go=a("(tex.rgb, color, uStrength);    "),So=a(`
`),Ss=s("span"),Ao=a(`
`),ge=s("span"),on=s("span"),Fo=a("    outColor = "),pn=s("span"),Po=a("vec4"),fn=s("span"),No=a("(color, tex.a);"),$o=a(`
`),Vn=s("span"),cn=s("span"),bo=a("}"),xo=a(`
`),As=y(),G=s("ul"),Gn=s("li"),yo=a(`This is often a post-processing effect, so it makes sense to
				make sure that the colors are in a 0 to 1 range to avoid
				artifacts.`),wo=y(),un=s("li"),Bn=s("var"),To=a("maxCellCoord"),Lo=a(` is used for precision, to avoid getting out
				of a single cell bounds.`),Uo=y(),hn=s("li"),Wn=s("var"),Co=a("halfTexel"),Ro=a(` is used to sample at the center of a texel instead
				of the bottom-left origin.`),Do=y(),Jt=s("li"),qn=s("var"),zo=a("redOffset"),Io=a(" and "),Mn=s("var"),ko=a("greenOffset"),Oo=a(` the position of r
				and g inside a single cell. To visualize what's happening keep in
				mind we are still working inside one of those small quads of the
				texture.`),Vo=y(),dt=s("li"),Yn=s("var"),Go=a("blue"),Bo=a(` is the "z" position. To get the value we
				multiply the texture blue channel with the maximum amount of
				cells `),Hn=s("var"),Wo=a("maxSize"),qo=a(". To get "),Jn=s("var"),Mo=a("maxSize"),Yo=a(` we removed
				one from `),Kn=s("var"),Ho=a("uLUTSize"),Jo=a(` to avoid going out of bounds when getting
				the cell to the right of the last one.`),Ko=y(),Gt=s("li"),Xo=a(`We want to sample the value of two consecutive cells/quads. To
				get the left one, use `),Xn=s("var"),Zo=a("floor()"),jo=a(`
				,and to get the right one, use `),Zn=s("var"),Qo=a("ceil()"),tp=a("."),ep=y(),Kt=s("li"),jn=s("var"),ap=a("left"),np=a(" and "),Qn=s("var"),sp=a("right"),rp=a(` are the coordinates at which
				we will sample the LUT color.`),lp=y(),Se=s("li"),op=a("We mix the result using the fractional part of "),ts=s("var"),pp=a("blue"),ip=a(`.
				The bigger the fractional part, the closer we are to the right
				cell. The opposite is also true.`),fp=y(),Ae=s("li"),cp=a("You can ignore "),es=s("var"),up=a("uStrength"),hp=a(`, it's a value that modulates
				how much of the LUT color to use in the final image.`),this.h()},l(L){tt(o.$$.fragment,L),i=w(L),f=r(L,"P",{});var pt=l(f);S=n(pt,`For those who have to support WebGL1, or for whatever reason don't
			want to use a 3D texture, there is a way of doing it inside a
			fragment shader.`),pt.forEach(e),_=w(L),h=r(L,"P",{});var as=l(h);d=n(as,"Here's the shader:"),as.forEach(e),E=w(L),x=r(L,"PRE",{});var Pp=l(x);p=r(Pp,"CODE",{});var u=l(p);v=r(u,"SPAN",{});var Ps=l(v);$=r(Ps,"SPAN",{style:!0});var Np=l($);I=n(Np,"#version "),Np.forEach(e),A=r(Ps,"SPAN",{style:!0});var $p=l(A);F=n($p,"300"),$p.forEach(e),O=r(Ps,"SPAN",{style:!0});var bp=l(O);b=n(bp," es"),bp.forEach(e),Ps.forEach(e),Z=n(u,`
`),B=r(u,"SPAN",{}),l(B).forEach(e),it=n(u,`
`),H=r(u,"SPAN",{});var Ns=l(H);W=r(Ns,"SPAN",{style:!0});var xp=l(W);U=n(xp,"precision highp "),xp.forEach(e),J=r(Ns,"SPAN",{style:!0});var yp=l(J);K=n(yp,"float"),yp.forEach(e),N=r(Ns,"SPAN",{style:!0});var wp=l(N);k=n(wp,";"),wp.forEach(e),Ns.forEach(e),q=n(u,`
`),D=r(u,"SPAN",{}),l(D).forEach(e),rt=n(u,`
`),j=r(u,"SPAN",{});var vp=l(j);C=r(vp,"SPAN",{style:!0});var Tp=l(C);M=n(Tp,"uniform"),Tp.forEach(e),V=r(vp,"SPAN",{style:!0});var Lp=l(V);z=n(Lp," vec2 uRes;"),Lp.forEach(e),vp.forEach(e),ft=n(u,`
`),ut=r(u,"SPAN",{});var ns=l(ut);Ft=r(ns,"SPAN",{style:!0});var Up=l(Ft);wt=n(Up,"uniform"),Up.forEach(e),Tt=r(ns,"SPAN",{});var Cp=l(Tt);te=n(Cp," "),Cp.forEach(e),ht=r(ns,"SPAN",{style:!0});var Rp=l(ht);ee=n(Rp,"sampler2D"),Rp.forEach(e),_t=r(ns,"SPAN",{style:!0});var Dp=l(_t);Pt=n(Dp," uTex;"),Dp.forEach(e),ns.forEach(e),ae=n(u,`
`),ct=r(u,"SPAN",{});var ss=l(ct);X=r(ss,"SPAN",{style:!0});var zp=l(X);ne=n(zp,"uniform"),zp.forEach(e),mt=r(ss,"SPAN",{});var Ip=l(mt);se=n(Ip," "),Ip.forEach(e),Nt=r(ss,"SPAN",{style:!0});var kp=l(Nt);Lt=n(kp,"sampler2D"),kp.forEach(e),$t=r(ss,"SPAN",{style:!0});var Op=l($t);re=n(Op," uLUT;"),Op.forEach(e),ss.forEach(e),Wt=n(u,`
`),lt=r(u,"SPAN",{});var rs=l(lt);bt=r(rs,"SPAN",{style:!0});var Vp=l(bt);qt=n(Vp,"uniform"),Vp.forEach(e),m=r(rs,"SPAN",{});var Gp=l(m);T=n(Gp," "),Gp.forEach(e),vt=r(rs,"SPAN",{style:!0});var Bp=l(vt);Fe=n(Bp,"float"),Bp.forEach(e),Ut=r(rs,"SPAN",{style:!0});var Wp=l(Ut);Mt=n(Wp," uLUTSize;"),Wp.forEach(e),rs.forEach(e),Pe=n(u,`
`),ot=r(u,"SPAN",{});var ls=l(ot);Ct=r(ls,"SPAN",{style:!0});var qp=l(Ct);Ne=n(qp,"uniform"),qp.forEach(e),Yt=r(ls,"SPAN",{});var Mp=l(Yt);xt=n(Mp," "),Mp.forEach(e),Rt=r(ls,"SPAN",{style:!0});var Yp=l(Rt);$e=n(Yp,"float"),Yp.forEach(e),Dt=r(ls,"SPAN",{style:!0});var Hp=l(Dt);be=n(Hp," uStrength;"),Hp.forEach(e),ls.forEach(e),yt=n(u,`
`),le=r(u,"SPAN",{}),l(le).forEach(e),xe=n(u,`
`),zt=r(u,"SPAN",{});var dp=l(zt);ye=r(dp,"SPAN",{style:!0});var Jp=l(ye);Bs=n(Jp,"out"),Jp.forEach(e),we=r(dp,"SPAN",{style:!0});var Kp=l(we);Ws=n(Kp," vec4 outColor;"),Kp.forEach(e),dp.forEach(e),qs=n(u,`
`),fs=r(u,"SPAN",{}),l(fs).forEach(e),Ms=n(u,`
`),Ht=r(u,"SPAN",{});var os=l(Ht);Te=r(os,"SPAN",{style:!0});var Xp=l(Te);Ys=n(Xp,"void"),Xp.forEach(e),gn=r(os,"SPAN",{});var Zp=l(gn);Hs=n(Zp," "),Zp.forEach(e),Le=r(os,"SPAN",{style:!0});var jp=l(Le);Js=n(jp,"main"),jp.forEach(e),Ue=r(os,"SPAN",{style:!0});var Qp=l(Ue);Ks=n(Qp,"() {"),Qp.forEach(e),os.forEach(e),Xs=n(u,`
`),Sn=r(u,"SPAN",{});var ti=l(Sn);Ce=r(ti,"SPAN",{style:!0});var ei=l(Ce);Zs=n(ei,"    vec2 uv = gl_FragCoord.xy / uRes;"),ei.forEach(e),ti.forEach(e),js=n(u,`
`),oe=r(u,"SPAN",{});var $s=l(oe);Re=r($s,"SPAN",{style:!0});var ai=l(Re);Qs=n(ai,"    vec4 tex = "),ai.forEach(e),De=r($s,"SPAN",{style:!0});var ni=l(De);tr=n(ni,"texture"),ni.forEach(e),ze=r($s,"SPAN",{style:!0});var si=l(ze);er=n(si,"(uTex, uv);"),si.forEach(e),$s.forEach(e),ar=n(u,`
`),cs=r(u,"SPAN",{}),l(cs).forEach(e),nr=n(u,`
`),Et=r(u,"SPAN",{});var Xt=l(Et);Ie=r(Xt,"SPAN",{style:!0});var ri=l(Ie);sr=n(ri,"    tex.r = "),ri.forEach(e),ke=r(Xt,"SPAN",{style:!0});var li=l(ke);rr=n(li,"clamp"),li.forEach(e),Oe=r(Xt,"SPAN",{style:!0});var oi=l(Oe);lr=n(oi,"("),oi.forEach(e),Ve=r(Xt,"SPAN",{style:!0});var pi=l(Ve);or=n(pi,"0.0"),pi.forEach(e),Ge=r(Xt,"SPAN",{style:!0});var ii=l(Ge);pr=n(ii,", "),ii.forEach(e),Be=r(Xt,"SPAN",{style:!0});var fi=l(Be);ir=n(fi,"1.0"),fi.forEach(e),We=r(Xt,"SPAN",{style:!0});var ci=l(We);fr=n(ci,", tex.r);"),ci.forEach(e),Xt.forEach(e),cr=n(u,`
`),gt=r(u,"SPAN",{});var Zt=l(gt);qe=r(Zt,"SPAN",{style:!0});var ui=l(qe);ur=n(ui,"    tex.g = "),ui.forEach(e),Me=r(Zt,"SPAN",{style:!0});var hi=l(Me);hr=n(hi,"clamp"),hi.forEach(e),Ye=r(Zt,"SPAN",{style:!0});var vi=l(Ye);vr=n(vi,"("),vi.forEach(e),He=r(Zt,"SPAN",{style:!0});var di=l(He);dr=n(di,"0.0"),di.forEach(e),Je=r(Zt,"SPAN",{style:!0});var _i=l(Je);_r=n(_i,", "),_i.forEach(e),Ke=r(Zt,"SPAN",{style:!0});var mi=l(Ke);mr=n(mi,"1.0"),mi.forEach(e),Xe=r(Zt,"SPAN",{style:!0});var Ei=l(Xe);Er=n(Ei,", tex.g);"),Ei.forEach(e),Zt.forEach(e),gr=n(u,`
`),St=r(u,"SPAN",{});var jt=l(St);Ze=r(jt,"SPAN",{style:!0});var gi=l(Ze);Sr=n(gi,"    tex.b = "),gi.forEach(e),je=r(jt,"SPAN",{style:!0});var Si=l(je);Ar=n(Si,"clamp"),Si.forEach(e),Qe=r(jt,"SPAN",{style:!0});var Ai=l(Qe);Fr=n(Ai,"("),Ai.forEach(e),ta=r(jt,"SPAN",{style:!0});var Fi=l(ta);Pr=n(Fi,"0.0"),Fi.forEach(e),ea=r(jt,"SPAN",{style:!0});var Pi=l(ea);Nr=n(Pi,", "),Pi.forEach(e),aa=r(jt,"SPAN",{style:!0});var Ni=l(aa);$r=n(Ni,"1.0"),Ni.forEach(e),na=r(jt,"SPAN",{style:!0});var $i=l(na);br=n($i,", tex.b);"),$i.forEach(e),jt.forEach(e),xr=n(u,`
`),An=r(u,"SPAN",{});var bi=l(An);Fn=r(bi,"SPAN",{});var xi=l(Fn);yr=n(xi,"    "),xi.forEach(e),bi.forEach(e),wr=n(u,`
`),pe=r(u,"SPAN",{});var bs=l(pe);sa=r(bs,"SPAN",{style:!0});var yi=l(sa);Tr=n(yi,"    vec4 lut = "),yi.forEach(e),ra=r(bs,"SPAN",{style:!0});var wi=l(ra);Lr=n(wi,"texture"),wi.forEach(e),la=r(bs,"SPAN",{style:!0});var Ti=l(la);Ur=n(Ti,"(uLUT, uv);"),Ti.forEach(e),bs.forEach(e),Cr=n(u,`
`),us=r(u,"SPAN",{}),l(us).forEach(e),Rr=n(u,`
`),It=r(u,"SPAN",{});var vn=l(It);Pn=r(vn,"SPAN",{});var Li=l(Pn);Dr=n(Li,"    "),Li.forEach(e),oa=r(vn,"SPAN",{style:!0});var Ui=l(oa);zr=n(Ui,"float"),Ui.forEach(e),pa=r(vn,"SPAN",{style:!0});var Ci=l(pa);Ir=n(Ci," maxSize = uLUTSize - "),Ci.forEach(e),ia=r(vn,"SPAN",{style:!0});var Ri=l(ia);kr=n(Ri,"1.0"),Ri.forEach(e),fa=r(vn,"SPAN",{style:!0});var Di=l(fa);Or=n(Di,";"),Di.forEach(e),vn.forEach(e),Vr=n(u,`
`),At=r(u,"SPAN",{});var Qt=l(At);Nn=r(Qt,"SPAN",{});var zi=l(Nn);Gr=n(zi,"    "),zi.forEach(e),ca=r(Qt,"SPAN",{style:!0});var Ii=l(ca);Br=n(Ii,"float"),Ii.forEach(e),ua=r(Qt,"SPAN",{style:!0});var ki=l(ua);Wr=n(ki," maxCellCoord = "),ki.forEach(e),ha=r(Qt,"SPAN",{style:!0});var Oi=l(ha);qr=n(Oi,"1.0"),Oi.forEach(e),va=r(Qt,"SPAN",{style:!0});var Vi=l(va);Mr=n(Vi," - ("),Vi.forEach(e),da=r(Qt,"SPAN",{style:!0});var Gi=l(da);Yr=n(Gi,"1.0"),Gi.forEach(e),_a=r(Qt,"SPAN",{style:!0});var Bi=l(_a);Hr=n(Bi," / uLUTSize);"),Bi.forEach(e),Qt.forEach(e),Jr=n(u,`
`),kt=r(u,"SPAN",{});var dn=l(kt);ma=r(dn,"SPAN",{style:!0});var Wi=l(ma);Kr=n(Wi,"    vec2 halfTexel = "),Wi.forEach(e),Ea=r(dn,"SPAN",{style:!0});var qi=l(Ea);Xr=n(qi,"0.5"),qi.forEach(e),ga=r(dn,"SPAN",{style:!0});var Mi=l(ga);Zr=n(Mi," / "),Mi.forEach(e),Sa=r(dn,"SPAN",{style:!0});var Yi=l(Sa);jr=n(Yi,"vec2"),Yi.forEach(e),Aa=r(dn,"SPAN",{style:!0});var Hi=l(Aa);Qr=n(Hi,"(uLUTSize * uLUTSize, uLUTSize);"),Hi.forEach(e),dn.forEach(e),tl=n(u,`
`),hs=r(u,"SPAN",{}),l(hs).forEach(e),el=n(u,`
`),ie=r(u,"SPAN",{});var xs=l(ie);$n=r(xs,"SPAN",{});var Ji=l($n);al=n(Ji,"    "),Ji.forEach(e),Fa=r(xs,"SPAN",{style:!0});var Ki=l(Fa);nl=n(Ki,"float"),Ki.forEach(e),Pa=r(xs,"SPAN",{style:!0});var Xi=l(Pa);sl=n(Xi," redOffset = halfTexel.x + tex.r * (maxCellCoord / uLUTSize);"),Xi.forEach(e),xs.forEach(e),rl=n(u,`
`),fe=r(u,"SPAN",{});var ys=l(fe);bn=r(ys,"SPAN",{});var Zi=l(bn);ll=n(Zi,"    "),Zi.forEach(e),Na=r(ys,"SPAN",{style:!0});var ji=l(Na);ol=n(ji,"float"),ji.forEach(e),$a=r(ys,"SPAN",{style:!0});var Qi=l($a);pl=n(Qi," greenOffset = halfTexel.y + tex.g * maxCellCoord;"),Qi.forEach(e),ys.forEach(e),il=n(u,`
`),vs=r(u,"SPAN",{}),l(vs).forEach(e),fl=n(u,`
`),ce=r(u,"SPAN",{});var ws=l(ce);xn=r(ws,"SPAN",{});var tf=l(xn);cl=n(tf,"    "),tf.forEach(e),ba=r(ws,"SPAN",{style:!0});var ef=l(ba);ul=n(ef,"float"),ef.forEach(e),xa=r(ws,"SPAN",{style:!0});var af=l(xa);hl=n(af," blue = tex.b * maxSize;"),af.forEach(e),ws.forEach(e),vl=n(u,`
`),ds=r(u,"SPAN",{}),l(ds).forEach(e),dl=n(u,`
`),Ot=r(u,"SPAN",{});var _n=l(Ot);yn=r(_n,"SPAN",{});var nf=l(yn);_l=n(nf,"    "),nf.forEach(e),ya=r(_n,"SPAN",{style:!0});var sf=l(ya);ml=n(sf,"float"),sf.forEach(e),wa=r(_n,"SPAN",{style:!0});var rf=l(wa);El=n(rf," leftCell = "),rf.forEach(e),Ta=r(_n,"SPAN",{style:!0});var lf=l(Ta);gl=n(lf,"floor"),lf.forEach(e),La=r(_n,"SPAN",{style:!0});var of=l(La);Sl=n(of,"(blue);"),of.forEach(e),_n.forEach(e),Al=n(u,`
`),Vt=r(u,"SPAN",{});var mn=l(Vt);wn=r(mn,"SPAN",{});var pf=l(wn);Fl=n(pf,"    "),pf.forEach(e),Ua=r(mn,"SPAN",{style:!0});var ff=l(Ua);Pl=n(ff,"float"),ff.forEach(e),Ca=r(mn,"SPAN",{style:!0});var cf=l(Ca);Nl=n(cf," rightCell = "),cf.forEach(e),Ra=r(mn,"SPAN",{style:!0});var uf=l(Ra);$l=n(uf,"ceil"),uf.forEach(e),Da=r(mn,"SPAN",{style:!0});var hf=l(Da);bl=n(hf,"(blue);"),hf.forEach(e),mn.forEach(e),xl=n(u,`
`),_s=r(u,"SPAN",{}),l(_s).forEach(e),yl=n(u,`
`),ue=r(u,"SPAN",{});var Ts=l(ue);za=r(Ts,"SPAN",{style:!0});var vf=l(za);wl=n(vf,"    vec2 left = "),vf.forEach(e),Ia=r(Ts,"SPAN",{style:!0});var df=l(Ia);Tl=n(df,"vec2"),df.forEach(e),ka=r(Ts,"SPAN",{style:!0});var _f=l(ka);Ll=n(_f,"("),_f.forEach(e),Ts.forEach(e),Ul=n(u,`
`),Tn=r(u,"SPAN",{});var mf=l(Tn);Oa=r(mf,"SPAN",{style:!0});var Ef=l(Oa);Cl=n(Ef,"        leftCell / uLUTSize + redOffset,"),Ef.forEach(e),mf.forEach(e),Rl=n(u,`
`),Ln=r(u,"SPAN",{});var gf=l(Ln);Va=r(gf,"SPAN",{style:!0});var Sf=l(Va);Dl=n(Sf,"        greenOffset"),Sf.forEach(e),gf.forEach(e),zl=n(u,`
`),Un=r(u,"SPAN",{});var Af=l(Un);Ga=r(Af,"SPAN",{style:!0});var Ff=l(Ga);Il=n(Ff,"    );"),Ff.forEach(e),Af.forEach(e),kl=n(u,`
`),ms=r(u,"SPAN",{}),l(ms).forEach(e),Ol=n(u,`
`),he=r(u,"SPAN",{});var Ls=l(he);Ba=r(Ls,"SPAN",{style:!0});var Pf=l(Ba);Vl=n(Pf,"    vec2 right = "),Pf.forEach(e),Wa=r(Ls,"SPAN",{style:!0});var Nf=l(Wa);Gl=n(Nf,"vec2"),Nf.forEach(e),qa=r(Ls,"SPAN",{style:!0});var $f=l(qa);Bl=n($f,"("),$f.forEach(e),Ls.forEach(e),Wl=n(u,`
`),Cn=r(u,"SPAN",{});var bf=l(Cn);Ma=r(bf,"SPAN",{style:!0});var xf=l(Ma);ql=n(xf,"        rightCell / uLUTSize + redOffset,"),xf.forEach(e),bf.forEach(e),Ml=n(u,`
`),Rn=r(u,"SPAN",{});var yf=l(Rn);Ya=r(yf,"SPAN",{style:!0});var wf=l(Ya);Yl=n(wf,"        greenOffset"),wf.forEach(e),yf.forEach(e),Hl=n(u,`
`),Dn=r(u,"SPAN",{});var Tf=l(Dn);Ha=r(Tf,"SPAN",{style:!0});var Lf=l(Ha);Jl=n(Lf,"    );"),Lf.forEach(e),Tf.forEach(e),Kl=n(u,`
`),Es=r(u,"SPAN",{}),l(Es).forEach(e),Xl=n(u,`
`),ve=r(u,"SPAN",{});var Us=l(ve);Ja=r(Us,"SPAN",{style:!0});var Uf=l(Ja);Zl=n(Uf,"    vec3 color = "),Uf.forEach(e),Ka=r(Us,"SPAN",{style:!0});var Cf=l(Ka);jl=n(Cf,"mix"),Cf.forEach(e),Xa=r(Us,"SPAN",{style:!0});var Rf=l(Xa);Ql=n(Rf,"("),Rf.forEach(e),Us.forEach(e),to=n(u,`
`),de=r(u,"SPAN",{});var Cs=l(de);zn=r(Cs,"SPAN",{});var Df=l(zn);eo=n(Df,"        "),Df.forEach(e),Za=r(Cs,"SPAN",{style:!0});var zf=l(Za);ao=n(zf,"texture"),zf.forEach(e),ja=r(Cs,"SPAN",{style:!0});var If=l(ja);no=n(If,"(uLUT, left).rgb,"),If.forEach(e),Cs.forEach(e),so=n(u,`
`),_e=r(u,"SPAN",{});var Rs=l(_e);In=r(Rs,"SPAN",{});var kf=l(In);ro=n(kf,"        "),kf.forEach(e),Qa=r(Rs,"SPAN",{style:!0});var Of=l(Qa);lo=n(Of,"texture"),Of.forEach(e),tn=r(Rs,"SPAN",{style:!0});var Vf=l(tn);oo=n(Vf,"(uLUT, right).rgb,"),Vf.forEach(e),Rs.forEach(e),po=n(u,`
`),me=r(u,"SPAN",{});var Ds=l(me);kn=r(Ds,"SPAN",{});var Gf=l(kn);io=n(Gf,"        "),Gf.forEach(e),en=r(Ds,"SPAN",{style:!0});var Bf=l(en);fo=n(Bf,"fract"),Bf.forEach(e),an=r(Ds,"SPAN",{style:!0});var Wf=l(an);co=n(Wf,"(blue)"),Wf.forEach(e),Ds.forEach(e),uo=n(u,`
`),On=r(u,"SPAN",{});var qf=l(On);nn=r(qf,"SPAN",{style:!0});var Mf=l(nn);ho=n(Mf,"    );"),Mf.forEach(e),qf.forEach(e),vo=n(u,`
`),gs=r(u,"SPAN",{}),l(gs).forEach(e),_o=n(u,`
`),Ee=r(u,"SPAN",{});var zs=l(Ee);sn=r(zs,"SPAN",{style:!0});var Yf=l(sn);mo=n(Yf,"    color = "),Yf.forEach(e),rn=r(zs,"SPAN",{style:!0});var Hf=l(rn);Eo=n(Hf,"mix"),Hf.forEach(e),ln=r(zs,"SPAN",{style:!0});var Jf=l(ln);go=n(Jf,"(tex.rgb, color, uStrength);    "),Jf.forEach(e),zs.forEach(e),So=n(u,`
`),Ss=r(u,"SPAN",{}),l(Ss).forEach(e),Ao=n(u,`
`),ge=r(u,"SPAN",{});var Is=l(ge);on=r(Is,"SPAN",{style:!0});var Kf=l(on);Fo=n(Kf,"    outColor = "),Kf.forEach(e),pn=r(Is,"SPAN",{style:!0});var Xf=l(pn);Po=n(Xf,"vec4"),Xf.forEach(e),fn=r(Is,"SPAN",{style:!0});var Zf=l(fn);No=n(Zf,"(color, tex.a);"),Zf.forEach(e),Is.forEach(e),$o=n(u,`
`),Vn=r(u,"SPAN",{});var jf=l(Vn);cn=r(jf,"SPAN",{style:!0});var Qf=l(cn);bo=n(Qf,"}"),Qf.forEach(e),jf.forEach(e),xo=n(u,`
`),u.forEach(e),Pp.forEach(e),As=w(L),G=r(L,"UL",{});var Y=l(G);Gn=r(Y,"LI",{});var tc=l(Gn);yo=n(tc,`This is often a post-processing effect, so it makes sense to
				make sure that the colors are in a 0 to 1 range to avoid
				artifacts.`),tc.forEach(e),wo=w(Y),un=r(Y,"LI",{});var _p=l(un);Bn=r(_p,"VAR",{});var ec=l(Bn);To=n(ec,"maxCellCoord"),ec.forEach(e),Lo=n(_p,` is used for precision, to avoid getting out
				of a single cell bounds.`),_p.forEach(e),Uo=w(Y),hn=r(Y,"LI",{});var mp=l(hn);Wn=r(mp,"VAR",{});var ac=l(Wn);Co=n(ac,"halfTexel"),ac.forEach(e),Ro=n(mp,` is used to sample at the center of a texel instead
				of the bottom-left origin.`),mp.forEach(e),Do=w(Y),Jt=r(Y,"LI",{});var ps=l(Jt);qn=r(ps,"VAR",{});var nc=l(qn);zo=n(nc,"redOffset"),nc.forEach(e),Io=n(ps," and "),Mn=r(ps,"VAR",{});var sc=l(Mn);ko=n(sc,"greenOffset"),sc.forEach(e),Oo=n(ps,` the position of r
				and g inside a single cell. To visualize what's happening keep in
				mind we are still working inside one of those small quads of the
				texture.`),ps.forEach(e),Vo=w(Y),dt=r(Y,"LI",{});var Bt=l(dt);Yn=r(Bt,"VAR",{});var rc=l(Yn);Go=n(rc,"blue"),rc.forEach(e),Bo=n(Bt,` is the "z" position. To get the value we
				multiply the texture blue channel with the maximum amount of
				cells `),Hn=r(Bt,"VAR",{});var lc=l(Hn);Wo=n(lc,"maxSize"),lc.forEach(e),qo=n(Bt,". To get "),Jn=r(Bt,"VAR",{});var oc=l(Jn);Mo=n(oc,"maxSize"),oc.forEach(e),Yo=n(Bt,` we removed
				one from `),Kn=r(Bt,"VAR",{});var pc=l(Kn);Ho=n(pc,"uLUTSize"),pc.forEach(e),Jo=n(Bt,` to avoid going out of bounds when getting
				the cell to the right of the last one.`),Bt.forEach(e),Ko=w(Y),Gt=r(Y,"LI",{});var En=l(Gt);Xo=n(En,`We want to sample the value of two consecutive cells/quads. To
				get the left one, use `),Xn=r(En,"VAR",{});var ic=l(Xn);Zo=n(ic,"floor()"),ic.forEach(e),jo=n(En,`
				,and to get the right one, use `),Zn=r(En,"VAR",{});var fc=l(Zn);Qo=n(fc,"ceil()"),fc.forEach(e),tp=n(En,"."),En.forEach(e),ep=w(Y),Kt=r(Y,"LI",{});var is=l(Kt);jn=r(is,"VAR",{});var cc=l(jn);ap=n(cc,"left"),cc.forEach(e),np=n(is," and "),Qn=r(is,"VAR",{});var uc=l(Qn);sp=n(uc,"right"),uc.forEach(e),rp=n(is,` are the coordinates at which
				we will sample the LUT color.`),is.forEach(e),lp=w(Y),Se=r(Y,"LI",{});var ks=l(Se);op=n(ks,"We mix the result using the fractional part of "),ts=r(ks,"VAR",{});var hc=l(ts);pp=n(hc,"blue"),hc.forEach(e),ip=n(ks,`.
				The bigger the fractional part, the closer we are to the right
				cell. The opposite is also true.`),ks.forEach(e),fp=w(Y),Ae=r(Y,"LI",{});var Os=l(Ae);cp=n(Os,"You can ignore "),es=r(Os,"VAR",{});var vc=l(es);up=n(vc,"uStrength"),vc.forEach(e),hp=n(Os,`, it's a value that modulates
				how much of the LUT color to use in the final image.`),Os.forEach(e),Y.forEach(e),this.h()},h(){c($,"color","#24292EFF"),c(A,"color","#1976D2"),c(O,"color","#24292EFF"),c(W,"color","#24292EFF"),c(J,"color","#D32F2F"),c(N,"color","#24292EFF"),c(C,"color","#D32F2F"),c(V,"color","#24292EFF"),c(Ft,"color","#D32F2F"),c(ht,"color","#1976D2"),c(_t,"color","#24292EFF"),c(X,"color","#D32F2F"),c(Nt,"color","#1976D2"),c($t,"color","#24292EFF"),c(bt,"color","#D32F2F"),c(vt,"color","#D32F2F"),c(Ut,"color","#24292EFF"),c(Ct,"color","#D32F2F"),c(Rt,"color","#D32F2F"),c(Dt,"color","#24292EFF"),c(ye,"color","#D32F2F"),c(we,"color","#24292EFF"),c(Te,"color","#D32F2F"),c(Le,"color","#6F42C1"),c(Ue,"color","#24292EFF"),c(Ce,"color","#24292EFF"),c(Re,"color","#24292EFF"),c(De,"color","#6F42C1"),c(ze,"color","#24292EFF"),c(Ie,"color","#24292EFF"),c(ke,"color","#6F42C1"),c(Oe,"color","#24292EFF"),c(Ve,"color","#1976D2"),c(Ge,"color","#24292EFF"),c(Be,"color","#1976D2"),c(We,"color","#24292EFF"),c(qe,"color","#24292EFF"),c(Me,"color","#6F42C1"),c(Ye,"color","#24292EFF"),c(He,"color","#1976D2"),c(Je,"color","#24292EFF"),c(Ke,"color","#1976D2"),c(Xe,"color","#24292EFF"),c(Ze,"color","#24292EFF"),c(je,"color","#6F42C1"),c(Qe,"color","#24292EFF"),c(ta,"color","#1976D2"),c(ea,"color","#24292EFF"),c(aa,"color","#1976D2"),c(na,"color","#24292EFF"),c(sa,"color","#24292EFF"),c(ra,"color","#6F42C1"),c(la,"color","#24292EFF"),c(oa,"color","#D32F2F"),c(pa,"color","#24292EFF"),c(ia,"color","#1976D2"),c(fa,"color","#24292EFF"),c(ca,"color","#D32F2F"),c(ua,"color","#24292EFF"),c(ha,"color","#1976D2"),c(va,"color","#24292EFF"),c(da,"color","#1976D2"),c(_a,"color","#24292EFF"),c(ma,"color","#24292EFF"),c(Ea,"color","#1976D2"),c(ga,"color","#24292EFF"),c(Sa,"color","#6F42C1"),c(Aa,"color","#24292EFF"),c(Fa,"color","#D32F2F"),c(Pa,"color","#24292EFF"),c(Na,"color","#D32F2F"),c($a,"color","#24292EFF"),c(ba,"color","#D32F2F"),c(xa,"color","#24292EFF"),c(ya,"color","#D32F2F"),c(wa,"color","#24292EFF"),c(Ta,"color","#6F42C1"),c(La,"color","#24292EFF"),c(Ua,"color","#D32F2F"),c(Ca,"color","#24292EFF"),c(Ra,"color","#6F42C1"),c(Da,"color","#24292EFF"),c(za,"color","#24292EFF"),c(Ia,"color","#6F42C1"),c(ka,"color","#24292EFF"),c(Oa,"color","#24292EFF"),c(Va,"color","#24292EFF"),c(Ga,"color","#24292EFF"),c(Ba,"color","#24292EFF"),c(Wa,"color","#6F42C1"),c(qa,"color","#24292EFF"),c(Ma,"color","#24292EFF"),c(Ya,"color","#24292EFF"),c(Ha,"color","#24292EFF"),c(Ja,"color","#24292EFF"),c(Ka,"color","#6F42C1"),c(Xa,"color","#24292EFF"),c(Za,"color","#6F42C1"),c(ja,"color","#24292EFF"),c(Qa,"color","#6F42C1"),c(tn,"color","#24292EFF"),c(en,"color","#6F42C1"),c(an,"color","#24292EFF"),c(nn,"color","#24292EFF"),c(sn,"color","#24292EFF"),c(rn,"color","#6F42C1"),c(ln,"color","#24292EFF"),c(on,"color","#24292EFF"),c(pn,"color","#6F42C1"),c(fn,"color","#24292EFF"),c(cn,"color","#24292EFF")},m(L,pt){et(o,L,pt),P(L,i,pt),P(L,f,pt),t(f,S),P(L,_,pt),P(L,h,pt),t(h,d),P(L,E,pt),P(L,x,pt),t(x,p),t(p,v),t(v,$),t($,I),t(v,A),t(A,F),t(v,O),t(O,b),t(p,Z),t(p,B),t(p,it),t(p,H),t(H,W),t(W,U),t(H,J),t(J,K),t(H,N),t(N,k),t(p,q),t(p,D),t(p,rt),t(p,j),t(j,C),t(C,M),t(j,V),t(V,z),t(p,ft),t(p,ut),t(ut,Ft),t(Ft,wt),t(ut,Tt),t(Tt,te),t(ut,ht),t(ht,ee),t(ut,_t),t(_t,Pt),t(p,ae),t(p,ct),t(ct,X),t(X,ne),t(ct,mt),t(mt,se),t(ct,Nt),t(Nt,Lt),t(ct,$t),t($t,re),t(p,Wt),t(p,lt),t(lt,bt),t(bt,qt),t(lt,m),t(m,T),t(lt,vt),t(vt,Fe),t(lt,Ut),t(Ut,Mt),t(p,Pe),t(p,ot),t(ot,Ct),t(Ct,Ne),t(ot,Yt),t(Yt,xt),t(ot,Rt),t(Rt,$e),t(ot,Dt),t(Dt,be),t(p,yt),t(p,le),t(p,xe),t(p,zt),t(zt,ye),t(ye,Bs),t(zt,we),t(we,Ws),t(p,qs),t(p,fs),t(p,Ms),t(p,Ht),t(Ht,Te),t(Te,Ys),t(Ht,gn),t(gn,Hs),t(Ht,Le),t(Le,Js),t(Ht,Ue),t(Ue,Ks),t(p,Xs),t(p,Sn),t(Sn,Ce),t(Ce,Zs),t(p,js),t(p,oe),t(oe,Re),t(Re,Qs),t(oe,De),t(De,tr),t(oe,ze),t(ze,er),t(p,ar),t(p,cs),t(p,nr),t(p,Et),t(Et,Ie),t(Ie,sr),t(Et,ke),t(ke,rr),t(Et,Oe),t(Oe,lr),t(Et,Ve),t(Ve,or),t(Et,Ge),t(Ge,pr),t(Et,Be),t(Be,ir),t(Et,We),t(We,fr),t(p,cr),t(p,gt),t(gt,qe),t(qe,ur),t(gt,Me),t(Me,hr),t(gt,Ye),t(Ye,vr),t(gt,He),t(He,dr),t(gt,Je),t(Je,_r),t(gt,Ke),t(Ke,mr),t(gt,Xe),t(Xe,Er),t(p,gr),t(p,St),t(St,Ze),t(Ze,Sr),t(St,je),t(je,Ar),t(St,Qe),t(Qe,Fr),t(St,ta),t(ta,Pr),t(St,ea),t(ea,Nr),t(St,aa),t(aa,$r),t(St,na),t(na,br),t(p,xr),t(p,An),t(An,Fn),t(Fn,yr),t(p,wr),t(p,pe),t(pe,sa),t(sa,Tr),t(pe,ra),t(ra,Lr),t(pe,la),t(la,Ur),t(p,Cr),t(p,us),t(p,Rr),t(p,It),t(It,Pn),t(Pn,Dr),t(It,oa),t(oa,zr),t(It,pa),t(pa,Ir),t(It,ia),t(ia,kr),t(It,fa),t(fa,Or),t(p,Vr),t(p,At),t(At,Nn),t(Nn,Gr),t(At,ca),t(ca,Br),t(At,ua),t(ua,Wr),t(At,ha),t(ha,qr),t(At,va),t(va,Mr),t(At,da),t(da,Yr),t(At,_a),t(_a,Hr),t(p,Jr),t(p,kt),t(kt,ma),t(ma,Kr),t(kt,Ea),t(Ea,Xr),t(kt,ga),t(ga,Zr),t(kt,Sa),t(Sa,jr),t(kt,Aa),t(Aa,Qr),t(p,tl),t(p,hs),t(p,el),t(p,ie),t(ie,$n),t($n,al),t(ie,Fa),t(Fa,nl),t(ie,Pa),t(Pa,sl),t(p,rl),t(p,fe),t(fe,bn),t(bn,ll),t(fe,Na),t(Na,ol),t(fe,$a),t($a,pl),t(p,il),t(p,vs),t(p,fl),t(p,ce),t(ce,xn),t(xn,cl),t(ce,ba),t(ba,ul),t(ce,xa),t(xa,hl),t(p,vl),t(p,ds),t(p,dl),t(p,Ot),t(Ot,yn),t(yn,_l),t(Ot,ya),t(ya,ml),t(Ot,wa),t(wa,El),t(Ot,Ta),t(Ta,gl),t(Ot,La),t(La,Sl),t(p,Al),t(p,Vt),t(Vt,wn),t(wn,Fl),t(Vt,Ua),t(Ua,Pl),t(Vt,Ca),t(Ca,Nl),t(Vt,Ra),t(Ra,$l),t(Vt,Da),t(Da,bl),t(p,xl),t(p,_s),t(p,yl),t(p,ue),t(ue,za),t(za,wl),t(ue,Ia),t(Ia,Tl),t(ue,ka),t(ka,Ll),t(p,Ul),t(p,Tn),t(Tn,Oa),t(Oa,Cl),t(p,Rl),t(p,Ln),t(Ln,Va),t(Va,Dl),t(p,zl),t(p,Un),t(Un,Ga),t(Ga,Il),t(p,kl),t(p,ms),t(p,Ol),t(p,he),t(he,Ba),t(Ba,Vl),t(he,Wa),t(Wa,Gl),t(he,qa),t(qa,Bl),t(p,Wl),t(p,Cn),t(Cn,Ma),t(Ma,ql),t(p,Ml),t(p,Rn),t(Rn,Ya),t(Ya,Yl),t(p,Hl),t(p,Dn),t(Dn,Ha),t(Ha,Jl),t(p,Kl),t(p,Es),t(p,Xl),t(p,ve),t(ve,Ja),t(Ja,Zl),t(ve,Ka),t(Ka,jl),t(ve,Xa),t(Xa,Ql),t(p,to),t(p,de),t(de,zn),t(zn,eo),t(de,Za),t(Za,ao),t(de,ja),t(ja,no),t(p,so),t(p,_e),t(_e,In),t(In,ro),t(_e,Qa),t(Qa,lo),t(_e,tn),t(tn,oo),t(p,po),t(p,me),t(me,kn),t(kn,io),t(me,en),t(en,fo),t(me,an),t(an,co),t(p,uo),t(p,On),t(On,nn),t(nn,ho),t(p,vo),t(p,gs),t(p,_o),t(p,Ee),t(Ee,sn),t(sn,mo),t(Ee,rn),t(rn,Eo),t(Ee,ln),t(ln,go),t(p,So),t(p,Ss),t(p,Ao),t(p,ge),t(ge,on),t(on,Fo),t(ge,pn),t(pn,Po),t(ge,fn),t(fn,No),t(p,$o),t(p,Vn),t(Vn,cn),t(cn,bo),t(p,xo),P(L,As,pt),P(L,G,pt),t(G,Gn),t(Gn,yo),t(G,wo),t(G,un),t(un,Bn),t(Bn,To),t(un,Lo),t(G,Uo),t(G,hn),t(hn,Wn),t(Wn,Co),t(hn,Ro),t(G,Do),t(G,Jt),t(Jt,qn),t(qn,zo),t(Jt,Io),t(Jt,Mn),t(Mn,ko),t(Jt,Oo),t(G,Vo),t(G,dt),t(dt,Yn),t(Yn,Go),t(dt,Bo),t(dt,Hn),t(Hn,Wo),t(dt,qo),t(dt,Jn),t(Jn,Mo),t(dt,Yo),t(dt,Kn),t(Kn,Ho),t(dt,Jo),t(G,Ko),t(G,Gt),t(Gt,Xo),t(Gt,Xn),t(Xn,Zo),t(Gt,jo),t(Gt,Zn),t(Zn,Qo),t(Gt,tp),t(G,ep),t(G,Kt),t(Kt,jn),t(jn,ap),t(Kt,np),t(Kt,Qn),t(Qn,sp),t(Kt,rp),t(G,lp),t(G,Se),t(Se,op),t(Se,ts),t(ts,pp),t(Se,ip),t(G,fp),t(G,Ae),t(Ae,cp),t(Ae,es),t(es,up),t(Ae,hp),Fs=!0},p(L,pt){const as={};pt&1&&(as.$$scope={dirty:pt,ctx:L}),o.$set(as)},i(L){Fs||(at(o.$$.fragment,L),Fs=!0)},o(L){nt(o.$$.fragment,L),Fs=!1},d(L){st(o,L),L&&e(i),L&&e(f),L&&e(_),L&&e(h),L&&e(E),L&&e(x),L&&e(As),L&&e(G)}}}function nu(g){let o,i,f,S,_,h,d,E,x,p;return o=new Vs({props:{$$slots:{default:[Kc]},$$scope:{ctx:g}}}),f=new Vs({props:{$$slots:{default:[Zc]},$$scope:{ctx:g}}}),_=new Vs({props:{$$slots:{default:[tu]},$$scope:{ctx:g}}}),d=new Vs({props:{$$slots:{default:[au]},$$scope:{ctx:g}}}),x=new qc({}),{c(){Q(o.$$.fragment),i=y(),Q(f.$$.fragment),S=y(),Q(_.$$.fragment),h=y(),Q(d.$$.fragment),E=y(),Q(x.$$.fragment)},l(v){tt(o.$$.fragment,v),i=w(v),tt(f.$$.fragment,v),S=w(v),tt(_.$$.fragment,v),h=w(v),tt(d.$$.fragment,v),E=w(v),tt(x.$$.fragment,v)},m(v,$){et(o,v,$),P(v,i,$),et(f,v,$),P(v,S,$),et(_,v,$),P(v,h,$),et(d,v,$),P(v,E,$),et(x,v,$),p=!0},p(v,$){const I={};$&1&&(I.$$scope={dirty:$,ctx:v}),o.$set(I);const A={};$&1&&(A.$$scope={dirty:$,ctx:v}),f.$set(A);const F={};$&1&&(F.$$scope={dirty:$,ctx:v}),_.$set(F);const O={};$&1&&(O.$$scope={dirty:$,ctx:v}),d.$set(O)},i(v){p||(at(o.$$.fragment,v),at(f.$$.fragment,v),at(_.$$.fragment,v),at(d.$$.fragment,v),at(x.$$.fragment,v),p=!0)},o(v){nt(o.$$.fragment,v),nt(f.$$.fragment,v),nt(_.$$.fragment,v),nt(d.$$.fragment,v),nt(x.$$.fragment,v),p=!1},d(v){st(o,v),v&&e(i),st(f,v),v&&e(S),st(_,v),v&&e(h),st(d,v),v&&e(E),st(x,v)}}}function su(g){let o,i,f,S,_,h;return o=new Tc({props:{title:"LUT Shader",description:"Color lookup table WebGL2",keywords:"Javascript, WebGL, LUT, Filters, PostProcessing, Creative, Shaders"}}),f=new Uc({props:{$$slots:{default:[nu]},$$scope:{ctx:g}}}),_=new Cc({}),{c(){Q(o.$$.fragment),i=y(),Q(f.$$.fragment),S=y(),Q(_.$$.fragment)},l(d){tt(o.$$.fragment,d),i=w(d),tt(f.$$.fragment,d),S=w(d),tt(_.$$.fragment,d)},m(d,E){et(o,d,E),P(d,i,E),et(f,d,E),P(d,S,E),et(_,d,E),h=!0},p(d,[E]){const x={};E&1&&(x.$$scope={dirty:E,ctx:d}),f.$set(x)},i(d){h||(at(o.$$.fragment,d),at(f.$$.fragment,d),at(_.$$.fragment,d),h=!0)},o(d){nt(o.$$.fragment,d),nt(f.$$.fragment,d),nt(_.$$.fragment,d),h=!1},d(d){st(o,d),d&&e(i),st(f,d),d&&e(S),st(_,d)}}}class cu extends gp{constructor(o){super(),Sp(this,o,null,su,Ap,{})}}export{cu as default};
