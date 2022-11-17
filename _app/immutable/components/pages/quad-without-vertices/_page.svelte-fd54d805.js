import{S as Fa,i as ba,s as xa,w as W,x as L,y as q,f as C,t as U,z as H,o as Da,k as r,l as o,m as l,h as e,n as ga,b as m,B as Ia,J as Va,a as y,c as A,q as s,r as a,G as t,p as v}from"../../../chunks/index-94ae1f6d.js";import{S as Ta,B as Ra}from"../../../chunks/Seo-fd8654ed.js";import{M as Ga,F as ka,S as Na,T as Wa,a as La}from"../../../chunks/Footer-1dc26ee9.js";import{D as qa}from"../../../chunks/DemoContainer-4346ca13.js";import{c as wa,a as Ca}from"../../../chunks/gl-055e8196.js";const Ua=`#version 300 es

uniform float uTime;

out vec2 vUv;

// Only for the demo' sake
vec2 move(vec2 p, float t) {
	
	p *= min(max(0.2, abs(sin(t))), 0.5);
	
	float rt = t * 4.0;
	mat2 rot = mat2(cos(rt), -sin(rt), sin(rt), cos(rt));
	p *= rot;

	p.x += cos(t) * 0.5;
	p.y += sin(t) * 0.5;

	return p;
}

void main() {

	vec2 pos = vec2(
		2.0 * (float(gl_VertexID & 1) - 0.5), 
		-(float(gl_VertexID >> 1) - 0.5) * 2.0
	);

	pos = move(pos, uTime);

	gl_Position = vec4(pos, 0.0, 1.0);
	vUv = vec2(float(gl_VertexID & 1), 1.0 - float(gl_VertexID >> 1));
}`,Ha=`#version 300 es

precision highp float;

in vec2 vUv;

out vec4 outColor;

void main() {
	outColor = vec4(vUv, 1.0, 1.0);
}`;function Oa($){let p;return{c(){p=r("canvas"),this.h()},l(f){p=o(f,"CANVAS",{slot:!0,class:!0}),l(p).forEach(e),this.h()},h(){ga(p,"slot","canvas"),ga(p,"class","svelte-10p45u9")},m(f,i){m(f,p,i),$[1](p)},p:Ia,d(f){f&&e(p),$[1](null)}}}function Ba($){let p,f;return p=new qa({props:{caption:"Quads Without Vertices",$$slots:{canvas:[Oa]},$$scope:{ctx:$}}}),{c(){W(p.$$.fragment)},l(i){L(p.$$.fragment,i)},m(i,_){q(p,i,_),f=!0},p(i,[_]){const c={};_&4097&&(c.$$scope={dirty:_,ctx:i}),p.$set(c)},i(i){f||(C(p.$$.fragment,i),f=!0)},o(i){U(p.$$.fragment,i),f=!1},d(i){H(p,i)}}}const Qa=1;function za($,p,f){let i,_,c=0,h=0,u=1,E,T,j,O;Da(()=>{if(_=i.getContext("webgl2"),!_)return;function w(){u=Math.min(window.devicePixelRatio,2),i.clientWidth*u!==c&&(c=i.clientWidth,h=Math.floor(c*Qa),f(0,i.style.width=c+"px",i),f(0,i.style.height=h+"px",i),c*=u,h*=u,f(0,i.width=c,i),f(0,i.height=h,i))}return window.addEventListener("resize",w,{passive:!0}),w(),N(),R(),()=>{window.removeEventListener("resize",w)}});function N(){const w=wa(_,_.VERTEX_SHADER,Ua),J=wa(_,_.FRAGMENT_SHADER,Ha);T=Ca(_,{vert:w,frag:J}),O=_.getUniformLocation(T,"uTime"),E=_.createVertexArray()}function R(w=0){j=w*.001,_.viewport(0,0,c,h),_.clearColor(0,0,0,1),_.clear(_.COLOR_BUFFER_BIT),_.useProgram(T),_.bindVertexArray(E),_.uniform1f(O,j),_.drawArrays(_.TRIANGLE_STRIP,0,4),window.requestAnimationFrame(R)}function M(w){Va[w?"unshift":"push"](()=>{i=w,f(0,i)})}return[i,M]}class Ma extends Fa{constructor(p){super(),ba(this,p,za,Ba,xa,{})}}function Ja($){let p;return{c(){p=s("Quad Without Vertices")},l(f){p=a(f,"Quad Without Vertices")},m(f,i){m(f,p,i)},d(f){f&&e(p)}}}function Xa($){let p,f,i,_,c;return p=new Wa({props:{timestamp:1668709650,$$slots:{default:[Ja]},$$scope:{ctx:$}}}),{c(){W(p.$$.fragment),f=y(),i=r("p"),_=s("A neat trick.")},l(h){L(p.$$.fragment,h),f=A(h),i=o(h,"P",{});var u=l(i);_=a(u,"A neat trick."),u.forEach(e)},m(h,u){q(p,h,u),m(h,f,u),m(h,i,u),t(i,_),c=!0},p(h,u){const E={};u&1&&(E.$$scope={dirty:u,ctx:h}),p.$set(E)},i(h){c||(C(p.$$.fragment,h),c=!0)},o(h){U(p.$$.fragment,h),c=!1},d(h){H(p,h),h&&e(f),h&&e(i)}}}function ja($){let p;return{c(){p=s("How It Works")},l(f){p=a(f,"How It Works")},m(f,i){m(f,p,i)},d(f){f&&e(p)}}}function Ka($){let p;return{c(){p=s("GitHub repo")},l(f){p=a(f,"GitHub repo")},m(f,i){m(f,p,i)},d(f){f&&e(p)}}}function Ya($){let p,f,i,_,c,h,u,E,T,j,O,N,R,M,w,J,Ve,Z,Te,Re,x,te,Ge,tt,ke,et,We,nt,Le,st,qe,at,Ce,rt,Ue,ot,He,lt,Oe,Be,D,pt,Qe,it,ze,ft,Me,ct,Je,ut,Xe,vt,je,ht,Ke,_t,Ye,Ze,ee,dt,tn,en,Ee,mt,Et,P,$t,nn,yt,sn,At,an,Pt,rn,St,on,gt,ln,Nt,pn,ne,fn,wt,cn,Ft,un,se,vn,bt,hn,xt,_n,dn,$e,ae,ye,g,re,mn,En,oe,$n,yn,le,An,Pn,pe,Sn,gn,ie,Nn,wn,Ae,G,Fn,fe,bn,xn,ce,Dn,In,Pe,Dt,I,ue,It,Vn,Tn,ve,Vt,Rn,Gn,he,Tt,kn,Wn,_e,Rt,Ln,qn,Se,Gt,Cn,ge,X,Un,de,Hn,On,Ne,kt,Bn,we,Wt,Qn,Fe,Lt,qt,S,Ct,zn,Ut,Mn,Ht,Jn,Ot,Xn,Bt,jn,Qt,Kn,zt,Yn,Mt,Zn,Jt,ts,Xt,es,jt,ns,Kt,ss,Yt,as,rs,be,K,xe;return p=new La({props:{id:"how-it-works",$$slots:{default:[ja]},$$scope:{ctx:$}}}),E=new Ra({props:{href:"https://github.com/cmuratori/refterm",$$slots:{default:[Ka]},$$scope:{ctx:$}}}),K=new Ma({}),{c(){W(p.$$.fragment),f=y(),i=r("p"),_=s(`There are different ways of rendering a quad on the GPU. The most
			frequently used one is rendering two triangles that share some
			vertices together to form a quad. When the quad is as big as the
			screen there's also a way of using a rectangle triangle and scaling
			it so that only the rectangle inscribed inside is shown in the
			viewport.`),c=y(),h=r("p"),u=s(`While researching for a tile-based monospaced font rendering I found
			this `),W(E.$$.fragment),T=s(" containing code similar to this:"),j=y(),O=r("pre"),N=r("code"),R=r("span"),M=r("span"),w=s("vec2 pos = "),J=r("span"),Ve=s("vec2"),Z=r("span"),Te=s("("),Re=s(`
`),x=r("span"),te=r("span"),Ge=s("    "),tt=r("span"),ke=s("2.0"),et=r("span"),We=s(" * ("),nt=r("span"),Le=s("float"),st=r("span"),qe=s("(gl_VertexID & "),at=r("span"),Ce=s("1"),rt=r("span"),Ue=s(") - "),ot=r("span"),He=s("0.5"),lt=r("span"),Oe=s("), "),Be=s(`
`),D=r("span"),pt=r("span"),Qe=s("    -("),it=r("span"),ze=s("float"),ft=r("span"),Me=s("(gl_VertexID >> "),ct=r("span"),Je=s("1"),ut=r("span"),Xe=s(") - "),vt=r("span"),je=s("0.5"),ht=r("span"),Ke=s(") * "),_t=r("span"),Ye=s("2.0"),Ze=s(`
`),ee=r("span"),dt=r("span"),tn=s(");"),en=s(`
`),Ee=y(),mt=r("pre"),Et=r("code"),P=r("span"),$t=r("span"),nn=s("gl"),yt=r("span"),sn=s(".drawArrays"),At=r("span"),an=s("("),Pt=r("span"),rn=s("gl"),St=r("span"),on=s("."),gt=r("span"),ln=s("TRIANGLE_STRIP"),Nt=r("span"),pn=s(","),ne=r("span"),fn=s(" "),wt=r("span"),cn=s("0"),Ft=r("span"),un=s(","),se=r("span"),vn=s(" "),bt=r("span"),hn=s("4"),xt=r("span"),_n=s(");"),dn=s(`
`),$e=y(),ae=r("p"),ye=y(),g=r("p"),re=r("var"),mn=s("gl_VertexID"),En=s(` is the zero-based integer index of the
			current vertex. If we think about the index as a 2 bit binary number
			we get
			`),oe=r("var"),$n=s("0 = 00"),yn=s(" bottom-left, "),le=r("var"),An=s("1 = 01"),Pn=s(` top-left,
			`),pe=r("var"),Sn=s("2 = 10"),gn=s(`
			bottom-right,
			`),ie=r("var"),Nn=s("3 = 11"),wn=s(" top-right."),Ae=y(),G=r("p"),Fn=s("A binary "),fe=r("var"),bn=s("AND"),xn=s(` with 1 gives us the x position and a binary
			`),ce=r("var"),Dn=s("RIGHT SHIFT"),In=s(" by 1 gives us the y position."),Pe=y(),Dt=r("pre"),I=r("code"),ue=r("span"),It=r("span"),Vn=s("2---3    0 = 00  |  00 & 01 = 0 (x)  |  00 >> 1 = 0 (y)"),Tn=s(`
`),ve=r("span"),Vt=r("span"),Rn=s("|\\  |    1 = 01  |  01 & 01 = 1 (x)  |  01 >> 1 = 0 (y)"),Gn=s(`
`),he=r("span"),Tt=r("span"),kn=s("| \\ |    2 = 10  |  10 & 01 = 0 (x)  |  10 >> 1 = 1 (y)"),Wn=s(`
`),_e=r("span"),Rt=r("span"),Ln=s("0---1    3 = 11  |  11 & 01 = 1 (x)  |  11 >> 1 = 1 (y)"),qn=s(`
`),Se=y(),Gt=r("p"),Cn=s(`By interpreting these values as an x and y offset we can position
			our vertices getting a quad that goes from 0 to 1 in the top-right
			quadrant.`),ge=y(),X=r("p"),Un=s("Using this together with "),de=r("var"),Hn=s("GL_TRIANGLE_STRIP"),On=s(` gives us two triangles.
			It doesn't work with other modes due to how WebGL / OpenGL handles creating
			the triangles.`),Ne=y(),kt=r("p"),Bn=s(`We can then make it fullscreen as the code above does by remapping
			the values to -1 to 1.`),we=y(),Wt=r("p"),Qn=s(`The result of this operation, without remapping, produces the quad
			UV coordinates. The y coordinate is inverted, so we need to remap
			it.`),Fe=y(),Lt=r("pre"),qt=r("code"),S=r("span"),Ct=r("span"),zn=s("vec2 uv = "),Ut=r("span"),Mn=s("vec2"),Ht=r("span"),Jn=s("("),Ot=r("span"),Xn=s("float"),Bt=r("span"),jn=s("(gl_VertexID & "),Qt=r("span"),Kn=s("1"),zt=r("span"),Yn=s("), "),Mt=r("span"),Zn=s("1.0"),Jt=r("span"),ts=s(" - "),Xt=r("span"),es=s("float"),jt=r("span"),ns=s("(gl_VertexID >> "),Kt=r("span"),ss=s("1"),Yt=r("span"),as=s("));"),rs=s(`
`),be=y(),W(K.$$.fragment),this.h()},l(n){L(p.$$.fragment,n),f=A(n),i=o(n,"P",{});var d=l(i);_=a(d,`There are different ways of rendering a quad on the GPU. The most
			frequently used one is rendering two triangles that share some
			vertices together to form a quad. When the quad is as big as the
			screen there's also a way of using a rectangle triangle and scaling
			it so that only the rectangle inscribed inside is shown in the
			viewport.`),d.forEach(e),c=A(n),h=o(n,"P",{});var Y=l(h);u=a(Y,`While researching for a tile-based monospaced font rendering I found
			this `),L(E.$$.fragment,Y),T=a(Y," containing code similar to this:"),Y.forEach(e),j=A(n),O=o(n,"PRE",{});var me=l(O);N=o(me,"CODE",{});var B=l(N);R=o(B,"SPAN",{});var De=l(R);M=o(De,"SPAN",{style:!0});var ps=l(M);w=a(ps,"vec2 pos = "),ps.forEach(e),J=o(De,"SPAN",{style:!0});var is=l(J);Ve=a(is,"vec2"),is.forEach(e),Z=o(De,"SPAN",{style:!0});var fs=l(Z);Te=a(fs,"("),fs.forEach(e),De.forEach(e),Re=a(B,`
`),x=o(B,"SPAN",{});var k=l(x);te=o(k,"SPAN",{});var cs=l(te);Ge=a(cs,"    "),cs.forEach(e),tt=o(k,"SPAN",{style:!0});var us=l(tt);ke=a(us,"2.0"),us.forEach(e),et=o(k,"SPAN",{style:!0});var vs=l(et);We=a(vs," * ("),vs.forEach(e),nt=o(k,"SPAN",{style:!0});var hs=l(nt);Le=a(hs,"float"),hs.forEach(e),st=o(k,"SPAN",{style:!0});var _s=l(st);qe=a(_s,"(gl_VertexID & "),_s.forEach(e),at=o(k,"SPAN",{style:!0});var ds=l(at);Ce=a(ds,"1"),ds.forEach(e),rt=o(k,"SPAN",{style:!0});var ms=l(rt);Ue=a(ms,") - "),ms.forEach(e),ot=o(k,"SPAN",{style:!0});var Es=l(ot);He=a(Es,"0.5"),Es.forEach(e),lt=o(k,"SPAN",{style:!0});var $s=l(lt);Oe=a($s,"), "),$s.forEach(e),k.forEach(e),Be=a(B,`
`),D=o(B,"SPAN",{});var Q=l(D);pt=o(Q,"SPAN",{style:!0});var ys=l(pt);Qe=a(ys,"    -("),ys.forEach(e),it=o(Q,"SPAN",{style:!0});var As=l(it);ze=a(As,"float"),As.forEach(e),ft=o(Q,"SPAN",{style:!0});var Ps=l(ft);Me=a(Ps,"(gl_VertexID >> "),Ps.forEach(e),ct=o(Q,"SPAN",{style:!0});var Ss=l(ct);Je=a(Ss,"1"),Ss.forEach(e),ut=o(Q,"SPAN",{style:!0});var gs=l(ut);Xe=a(gs,") - "),gs.forEach(e),vt=o(Q,"SPAN",{style:!0});var Ns=l(vt);je=a(Ns,"0.5"),Ns.forEach(e),ht=o(Q,"SPAN",{style:!0});var ws=l(ht);Ke=a(ws,") * "),ws.forEach(e),_t=o(Q,"SPAN",{style:!0});var Fs=l(_t);Ye=a(Fs,"2.0"),Fs.forEach(e),Q.forEach(e),Ze=a(B,`
`),ee=o(B,"SPAN",{});var bs=l(ee);dt=o(bs,"SPAN",{style:!0});var xs=l(dt);tn=a(xs,");"),xs.forEach(e),bs.forEach(e),en=a(B,`
`),B.forEach(e),me.forEach(e),Ee=A(n),mt=o(n,"PRE",{});var Ds=l(mt);Et=o(Ds,"CODE",{});var os=l(Et);P=o(os,"SPAN",{});var F=l(P);$t=o(F,"SPAN",{style:!0});var Is=l($t);nn=a(Is,"gl"),Is.forEach(e),yt=o(F,"SPAN",{style:!0});var Vs=l(yt);sn=a(Vs,".drawArrays"),Vs.forEach(e),At=o(F,"SPAN",{style:!0});var Ts=l(At);an=a(Ts,"("),Ts.forEach(e),Pt=o(F,"SPAN",{style:!0});var Rs=l(Pt);rn=a(Rs,"gl"),Rs.forEach(e),St=o(F,"SPAN",{style:!0});var Gs=l(St);on=a(Gs,"."),Gs.forEach(e),gt=o(F,"SPAN",{style:!0});var ks=l(gt);ln=a(ks,"TRIANGLE_STRIP"),ks.forEach(e),Nt=o(F,"SPAN",{style:!0});var Ws=l(Nt);pn=a(Ws,","),Ws.forEach(e),ne=o(F,"SPAN",{});var Ls=l(ne);fn=a(Ls," "),Ls.forEach(e),wt=o(F,"SPAN",{style:!0});var qs=l(wt);cn=a(qs,"0"),qs.forEach(e),Ft=o(F,"SPAN",{style:!0});var Cs=l(Ft);un=a(Cs,","),Cs.forEach(e),se=o(F,"SPAN",{});var Us=l(se);vn=a(Us," "),Us.forEach(e),bt=o(F,"SPAN",{style:!0});var Hs=l(bt);hn=a(Hs,"4"),Hs.forEach(e),xt=o(F,"SPAN",{style:!0});var Os=l(xt);_n=a(Os,");"),Os.forEach(e),F.forEach(e),dn=a(os,`
`),os.forEach(e),Ds.forEach(e),$e=A(n),ae=o(n,"P",{}),l(ae).forEach(e),ye=A(n),g=o(n,"P",{});var V=l(g);re=o(V,"VAR",{});var Bs=l(re);mn=a(Bs,"gl_VertexID"),Bs.forEach(e),En=a(V,` is the zero-based integer index of the
			current vertex. If we think about the index as a 2 bit binary number
			we get
			`),oe=o(V,"VAR",{});var Qs=l(oe);$n=a(Qs,"0 = 00"),Qs.forEach(e),yn=a(V," bottom-left, "),le=o(V,"VAR",{});var zs=l(le);An=a(zs,"1 = 01"),zs.forEach(e),Pn=a(V,` top-left,
			`),pe=o(V,"VAR",{});var Ms=l(pe);Sn=a(Ms,"2 = 10"),Ms.forEach(e),gn=a(V,`
			bottom-right,
			`),ie=o(V,"VAR",{});var Js=l(ie);Nn=a(Js,"3 = 11"),Js.forEach(e),wn=a(V," top-right."),V.forEach(e),Ae=A(n),G=o(n,"P",{});var Zt=l(G);Fn=a(Zt,"A binary "),fe=o(Zt,"VAR",{});var Xs=l(fe);bn=a(Xs,"AND"),Xs.forEach(e),xn=a(Zt,` with 1 gives us the x position and a binary
			`),ce=o(Zt,"VAR",{});var js=l(ce);Dn=a(js,"RIGHT SHIFT"),js.forEach(e),In=a(Zt," by 1 gives us the y position."),Zt.forEach(e),Pe=A(n),Dt=o(n,"PRE",{});var Ks=l(Dt);I=o(Ks,"CODE",{});var z=l(I);ue=o(z,"SPAN",{});var Ys=l(ue);It=o(Ys,"SPAN",{style:!0});var Zs=l(It);Vn=a(Zs,"2---3    0 = 00  |  00 & 01 = 0 (x)  |  00 >> 1 = 0 (y)"),Zs.forEach(e),Ys.forEach(e),Tn=a(z,`
`),ve=o(z,"SPAN",{});var ta=l(ve);Vt=o(ta,"SPAN",{style:!0});var ea=l(Vt);Rn=a(ea,"|\\  |    1 = 01  |  01 & 01 = 1 (x)  |  01 >> 1 = 0 (y)"),ea.forEach(e),ta.forEach(e),Gn=a(z,`
`),he=o(z,"SPAN",{});var na=l(he);Tt=o(na,"SPAN",{style:!0});var sa=l(Tt);kn=a(sa,"| \\ |    2 = 10  |  10 & 01 = 0 (x)  |  10 >> 1 = 1 (y)"),sa.forEach(e),na.forEach(e),Wn=a(z,`
`),_e=o(z,"SPAN",{});var aa=l(_e);Rt=o(aa,"SPAN",{style:!0});var ra=l(Rt);Ln=a(ra,"0---1    3 = 11  |  11 & 01 = 1 (x)  |  11 >> 1 = 1 (y)"),ra.forEach(e),aa.forEach(e),qn=a(z,`
`),z.forEach(e),Ks.forEach(e),Se=A(n),Gt=o(n,"P",{});var oa=l(Gt);Cn=a(oa,`By interpreting these values as an x and y offset we can position
			our vertices getting a quad that goes from 0 to 1 in the top-right
			quadrant.`),oa.forEach(e),ge=A(n),X=o(n,"P",{});var Ie=l(X);Un=a(Ie,"Using this together with "),de=o(Ie,"VAR",{});var la=l(de);Hn=a(la,"GL_TRIANGLE_STRIP"),la.forEach(e),On=a(Ie,` gives us two triangles.
			It doesn't work with other modes due to how WebGL / OpenGL handles creating
			the triangles.`),Ie.forEach(e),Ne=A(n),kt=o(n,"P",{});var pa=l(kt);Bn=a(pa,`We can then make it fullscreen as the code above does by remapping
			the values to -1 to 1.`),pa.forEach(e),we=A(n),Wt=o(n,"P",{});var ia=l(Wt);Qn=a(ia,`The result of this operation, without remapping, produces the quad
			UV coordinates. The y coordinate is inverted, so we need to remap
			it.`),ia.forEach(e),Fe=A(n),Lt=o(n,"PRE",{});var fa=l(Lt);qt=o(fa,"CODE",{});var ls=l(qt);S=o(ls,"SPAN",{});var b=l(S);Ct=o(b,"SPAN",{style:!0});var ca=l(Ct);zn=a(ca,"vec2 uv = "),ca.forEach(e),Ut=o(b,"SPAN",{style:!0});var ua=l(Ut);Mn=a(ua,"vec2"),ua.forEach(e),Ht=o(b,"SPAN",{style:!0});var va=l(Ht);Jn=a(va,"("),va.forEach(e),Ot=o(b,"SPAN",{style:!0});var ha=l(Ot);Xn=a(ha,"float"),ha.forEach(e),Bt=o(b,"SPAN",{style:!0});var _a=l(Bt);jn=a(_a,"(gl_VertexID & "),_a.forEach(e),Qt=o(b,"SPAN",{style:!0});var da=l(Qt);Kn=a(da,"1"),da.forEach(e),zt=o(b,"SPAN",{style:!0});var ma=l(zt);Yn=a(ma,"), "),ma.forEach(e),Mt=o(b,"SPAN",{style:!0});var Ea=l(Mt);Zn=a(Ea,"1.0"),Ea.forEach(e),Jt=o(b,"SPAN",{style:!0});var $a=l(Jt);ts=a($a," - "),$a.forEach(e),Xt=o(b,"SPAN",{style:!0});var ya=l(Xt);es=a(ya,"float"),ya.forEach(e),jt=o(b,"SPAN",{style:!0});var Aa=l(jt);ns=a(Aa,"(gl_VertexID >> "),Aa.forEach(e),Kt=o(b,"SPAN",{style:!0});var Pa=l(Kt);ss=a(Pa,"1"),Pa.forEach(e),Yt=o(b,"SPAN",{style:!0});var Sa=l(Yt);as=a(Sa,"));"),Sa.forEach(e),b.forEach(e),rs=a(ls,`
`),ls.forEach(e),fa.forEach(e),be=A(n),L(K.$$.fragment,n),this.h()},h(){v(M,"color","#24292EFF"),v(J,"color","#6F42C1"),v(Z,"color","#24292EFF"),v(tt,"color","#1976D2"),v(et,"color","#24292EFF"),v(nt,"color","#D32F2F"),v(st,"color","#24292EFF"),v(at,"color","#1976D2"),v(rt,"color","#24292EFF"),v(ot,"color","#1976D2"),v(lt,"color","#24292EFF"),v(pt,"color","#24292EFF"),v(it,"color","#D32F2F"),v(ft,"color","#24292EFF"),v(ct,"color","#1976D2"),v(ut,"color","#24292EFF"),v(vt,"color","#1976D2"),v(ht,"color","#24292EFF"),v(_t,"color","#1976D2"),v(dt,"color","#24292EFF"),v($t,"color","#1976D2"),v(yt,"color","#6F42C1"),v(At,"color","#24292EFF"),v(Pt,"color","#1976D2"),v(St,"color","#24292EFF"),v(gt,"color","#1976D2"),v(Nt,"color","#212121"),v(wt,"color","#1976D2"),v(Ft,"color","#212121"),v(bt,"color","#1976D2"),v(xt,"color","#24292EFF"),v(It,"color","undefined"),v(Vt,"color","undefined"),v(Tt,"color","undefined"),v(Rt,"color","undefined"),v(Ct,"color","#24292EFF"),v(Ut,"color","#6F42C1"),v(Ht,"color","#24292EFF"),v(Ot,"color","#D32F2F"),v(Bt,"color","#24292EFF"),v(Qt,"color","#1976D2"),v(zt,"color","#24292EFF"),v(Mt,"color","#1976D2"),v(Jt,"color","#24292EFF"),v(Xt,"color","#D32F2F"),v(jt,"color","#24292EFF"),v(Kt,"color","#1976D2"),v(Yt,"color","#24292EFF")},m(n,d){q(p,n,d),m(n,f,d),m(n,i,d),t(i,_),m(n,c,d),m(n,h,d),t(h,u),q(E,h,null),t(h,T),m(n,j,d),m(n,O,d),t(O,N),t(N,R),t(R,M),t(M,w),t(R,J),t(J,Ve),t(R,Z),t(Z,Te),t(N,Re),t(N,x),t(x,te),t(te,Ge),t(x,tt),t(tt,ke),t(x,et),t(et,We),t(x,nt),t(nt,Le),t(x,st),t(st,qe),t(x,at),t(at,Ce),t(x,rt),t(rt,Ue),t(x,ot),t(ot,He),t(x,lt),t(lt,Oe),t(N,Be),t(N,D),t(D,pt),t(pt,Qe),t(D,it),t(it,ze),t(D,ft),t(ft,Me),t(D,ct),t(ct,Je),t(D,ut),t(ut,Xe),t(D,vt),t(vt,je),t(D,ht),t(ht,Ke),t(D,_t),t(_t,Ye),t(N,Ze),t(N,ee),t(ee,dt),t(dt,tn),t(N,en),m(n,Ee,d),m(n,mt,d),t(mt,Et),t(Et,P),t(P,$t),t($t,nn),t(P,yt),t(yt,sn),t(P,At),t(At,an),t(P,Pt),t(Pt,rn),t(P,St),t(St,on),t(P,gt),t(gt,ln),t(P,Nt),t(Nt,pn),t(P,ne),t(ne,fn),t(P,wt),t(wt,cn),t(P,Ft),t(Ft,un),t(P,se),t(se,vn),t(P,bt),t(bt,hn),t(P,xt),t(xt,_n),t(Et,dn),m(n,$e,d),m(n,ae,d),m(n,ye,d),m(n,g,d),t(g,re),t(re,mn),t(g,En),t(g,oe),t(oe,$n),t(g,yn),t(g,le),t(le,An),t(g,Pn),t(g,pe),t(pe,Sn),t(g,gn),t(g,ie),t(ie,Nn),t(g,wn),m(n,Ae,d),m(n,G,d),t(G,Fn),t(G,fe),t(fe,bn),t(G,xn),t(G,ce),t(ce,Dn),t(G,In),m(n,Pe,d),m(n,Dt,d),t(Dt,I),t(I,ue),t(ue,It),t(It,Vn),t(I,Tn),t(I,ve),t(ve,Vt),t(Vt,Rn),t(I,Gn),t(I,he),t(he,Tt),t(Tt,kn),t(I,Wn),t(I,_e),t(_e,Rt),t(Rt,Ln),t(I,qn),m(n,Se,d),m(n,Gt,d),t(Gt,Cn),m(n,ge,d),m(n,X,d),t(X,Un),t(X,de),t(de,Hn),t(X,On),m(n,Ne,d),m(n,kt,d),t(kt,Bn),m(n,we,d),m(n,Wt,d),t(Wt,Qn),m(n,Fe,d),m(n,Lt,d),t(Lt,qt),t(qt,S),t(S,Ct),t(Ct,zn),t(S,Ut),t(Ut,Mn),t(S,Ht),t(Ht,Jn),t(S,Ot),t(Ot,Xn),t(S,Bt),t(Bt,jn),t(S,Qt),t(Qt,Kn),t(S,zt),t(zt,Yn),t(S,Mt),t(Mt,Zn),t(S,Jt),t(Jt,ts),t(S,Xt),t(Xt,es),t(S,jt),t(jt,ns),t(S,Kt),t(Kt,ss),t(S,Yt),t(Yt,as),t(qt,rs),m(n,be,d),q(K,n,d),xe=!0},p(n,d){const Y={};d&1&&(Y.$$scope={dirty:d,ctx:n}),p.$set(Y);const me={};d&1&&(me.$$scope={dirty:d,ctx:n}),E.$set(me)},i(n){xe||(C(p.$$.fragment,n),C(E.$$.fragment,n),C(K.$$.fragment,n),xe=!0)},o(n){U(p.$$.fragment,n),U(E.$$.fragment,n),U(K.$$.fragment,n),xe=!1},d(n){H(p,n),n&&e(f),n&&e(i),n&&e(c),n&&e(h),H(E),n&&e(j),n&&e(O),n&&e(Ee),n&&e(mt),n&&e($e),n&&e(ae),n&&e(ye),n&&e(g),n&&e(Ae),n&&e(G),n&&e(Pe),n&&e(Dt),n&&e(Se),n&&e(Gt),n&&e(ge),n&&e(X),n&&e(Ne),n&&e(kt),n&&e(we),n&&e(Wt),n&&e(Fe),n&&e(Lt),n&&e(be),H(K,n)}}}function Za($){let p,f,i,_;return p=new Na({props:{$$slots:{default:[Xa]},$$scope:{ctx:$}}}),i=new Na({props:{$$slots:{default:[Ya]},$$scope:{ctx:$}}}),{c(){W(p.$$.fragment),f=y(),W(i.$$.fragment)},l(c){L(p.$$.fragment,c),f=A(c),L(i.$$.fragment,c)},m(c,h){q(p,c,h),m(c,f,h),q(i,c,h),_=!0},p(c,h){const u={};h&1&&(u.$$scope={dirty:h,ctx:c}),p.$set(u);const E={};h&1&&(E.$$scope={dirty:h,ctx:c}),i.$set(E)},i(c){_||(C(p.$$.fragment,c),C(i.$$.fragment,c),_=!0)},o(c){U(p.$$.fragment,c),U(i.$$.fragment,c),_=!1},d(c){H(p,c),c&&e(f),H(i,c)}}}function tr($){let p,f,i,_,c,h;return p=new Ta({props:{title:"Quad Without Vertices",description:"WebGL Quad without vertices trick",keywords:"Javascript, WebGL2, Gamedev, Shaders, GPU, Geometry, Instancing, Tricks, Triangle Strip"}}),i=new Ga({props:{$$slots:{default:[Za]},$$scope:{ctx:$}}}),c=new ka({}),{c(){W(p.$$.fragment),f=y(),W(i.$$.fragment),_=y(),W(c.$$.fragment)},l(u){L(p.$$.fragment,u),f=A(u),L(i.$$.fragment,u),_=A(u),L(c.$$.fragment,u)},m(u,E){q(p,u,E),m(u,f,E),q(i,u,E),m(u,_,E),q(c,u,E),h=!0},p(u,[E]){const T={};E&1&&(T.$$scope={dirty:E,ctx:u}),i.$set(T)},i(u){h||(C(p.$$.fragment,u),C(i.$$.fragment,u),C(c.$$.fragment,u),h=!0)},o(u){U(p.$$.fragment,u),U(i.$$.fragment,u),U(c.$$.fragment,u),h=!1},d(u){H(p,u),u&&e(f),H(i,u),u&&e(_),H(c,u)}}}class or extends Fa{constructor(p){super(),ba(this,p,null,tr,xa,{})}}export{or as default};
