import{S as Za,i as tl,s as el,w as J,a as y,x as M,c as w,y as K,b as v,f as X,t as Y,z as Z,h as e,k as s,q as r,l as n,m as o,r as a,G as t,p as m}from"../../../chunks/index-fbdc19c0.js";import{B as dr}from"../../../chunks/BlankLink-875203ee.js";import{M as rl,S as la,T as al}from"../../../chunks/Main-a1a4e12e.js";import{S as Ya}from"../../../chunks/Subtitle-ccdefec3.js";import{S as ll}from"../../../chunks/Seo-62a0eda8.js";function sl(S){let f;return{c(){f=r("Quad without vertex buffer")},l(p){f=a(p,"Quad without vertex buffer")},m(p,i){v(p,f,i)},d(p){p&&e(f)}}}function nl(S){let f;return{c(){f=r("repo")},l(p){f=a(p,"repo")},m(p,i){v(p,f,i)},d(p){p&&e(f)}}}function ol(S){let f,p,i,P,u,A,c,h,R,x;return f=new al({props:{timestamp:1668709650,$$slots:{default:[sl]},$$scope:{ctx:S}}}),u=new dr({props:{href:"https://github.com/cmuratori/refterm/blob/main/refterm.hlsl#L93",$$slots:{default:[nl]},$$scope:{ctx:S}}}),{c(){J(f.$$.fragment),p=y(),i=s("p"),P=r("While I was looking through some code on GitHub, I found a "),J(u.$$.fragment),A=r(`, that draws quads without having to populate a vertex buffer with
			data.`),c=y(),h=s("p"),R=r(`The repo uses D3D11 and HLSL, so there are some small differences
			with the WebGL version of this post, but the core concept is the
			same.`)},l($){M(f.$$.fragment,$),p=w($),i=n($,"P",{});var E=o(i);P=a(E,"While I was looking through some code on GitHub, I found a "),M(u.$$.fragment,E),A=a(E,`, that draws quads without having to populate a vertex buffer with
			data.`),E.forEach(e),c=w($),h=n($,"P",{});var k=o(h);R=a(k,`The repo uses D3D11 and HLSL, so there are some small differences
			with the WebGL version of this post, but the core concept is the
			same.`),k.forEach(e)},m($,E){K(f,$,E),v($,p,E),v($,i,E),t(i,P),K(u,i,null),t(i,A),v($,c,E),v($,h,E),t(h,R),x=!0},p($,E){const k={};E&1&&(k.$$scope={dirty:E,ctx:$}),f.$set(k);const O={};E&1&&(O.$$scope={dirty:E,ctx:$}),u.$set(O)},i($){x||(X(f.$$.fragment,$),X(u.$$.fragment,$),x=!0)},o($){Y(f.$$.fragment,$),Y(u.$$.fragment,$),x=!1},d($){Z(f,$),$&&e(p),$&&e(i),Z(u),$&&e(c),$&&e(h)}}}function fl(S){let f;return{c(){f=r("Arbitrary Sized")},l(p){f=a(p,"Arbitrary Sized")},m(p,i){v(p,f,i)},d(p){p&&e(f)}}}function pl(S){let f;return{c(){f=r("triangle primitives")},l(p){f=a(p,"triangle primitives")},m(p,i){v(p,f,i)},d(p){p&&e(f)}}}function il(S){let f;return{c(){f=r("here")},l(p){f=a(p,"here")},m(p,i){v(p,f,i)},d(p){p&&e(f)}}}function cl(S){let f,p,i,P,u,A,c,h,R,x,$,E,k,O,nt,Qt,z,Ut,ot,Nt,V,Jt,H,Mt,ft,Rt,T,Kt,B,Xt,pt,kt,I,tt,Yt,L,it,Zt,ct,et,vt,mt,ut,te,dt,rt,ee,ht,D,re,Et,at,ae,lt,le,se,At,b,ne,q,oe,xt,d,g,yt,W,N,ie,Vt,ce,ve,Tt,ue,de,fe,wt,G,Lt,bt,he,_t,Gt,St,_e,$e,Ft,C,me,Ee,$t,Ae,hr,_r,Ke,Dt,$r,We,mr,Er,Xe,ye,qt,F,we,Ar,be,yr,Se,wr,Pe,br,ge,Sr,Ie,Pr,Ne,gr,Re,Ir,ke,Nr,xe,Rr,Ve,kr,xr,Pt,Te,Vr,Le,Tr,Ge,Lr,Fe,Gr,De,Fr,Dr,Ye,st,Ce,qr,Wr,Oe,Cr,Or,ze,zr,Hr,Ze,j,Br,He,jr,Qr,Be,Ur,Jr,je,Mr,Kr,tr,Wt,Xr,Ct,Yr,er,Ot,Zr,Qe,ta,ea,rr,zt,ra,Ht,aa,ar;return f=new Ya({props:{id:"arbitrary-sized",$$slots:{default:[fl]},$$scope:{ctx:S}}}),Ct=new dr({props:{href:"https://www.khronos.org/opengl/wiki/Primitive",$$slots:{default:[pl]},$$scope:{ctx:S}}}),Ht=new dr({props:{href:"https://gist.github.com/lorenzored98/56dce409d510417042ccdc97c1f3f72a",$$slots:{default:[il]},$$scope:{ctx:S}}}),{c(){J(f.$$.fragment),p=y(),i=s("p"),P=r("The way to achieve a no-buffer quad a combination of simple math, "),u=s("var"),A=r("gl_VertexID"),c=r(`
			and, `),h=s("var"),R=r("gl.TRIANGLE_STRIP"),x=r("."),$=y(),E=s("p"),k=r(`In Javascript land the only thing that changes from a hello-triangle
			WebGL program is that we call
			`),O=s("var"),nt=r("gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)"),Qt=r(`. Right now,
			interpret this as sending `),z=s("var"),Ut=r("4"),ot=r(` nonexistent vertices to the vertex
			shader.`),Nt=y(),V=s("p"),Jt=r("Note that we don't even need to bind a "),H=s("var"),Mt=r("VAO"),ft=r(` in WebGL. In OpenGL
			you do need to bind it, but you can just create an empty one, and it
			will work.`),Rt=y(),T=s("p"),Kt=r("In the vertex shader "),B=s("var"),Xt=r("gl_VertexID"),pt=r(` is the zero-based integer
			index of the current vertex. By interpreting the index as a 2-bit binary
			number we get:`),kt=y(),I=s("ul"),tt=s("li"),Yt=r("Index 0 = "),L=s("var"),it=r("0b00"),Zt=r(" = bottom-left"),ct=y(),et=s("li"),vt=r("Index 1 = "),mt=s("var"),ut=r("0b01"),te=r(" = bottom-right"),dt=y(),rt=s("li"),ee=r("Index 2 = "),ht=s("var"),D=r("0b10"),re=r(" = top-left"),Et=y(),at=s("li"),ae=r("Index 3 = "),lt=s("var"),le=r("0b11"),se=r(" = top-right"),At=y(),b=s("p"),ne=r(`We can easily get the UV coordinates from this data by using a
			binary `),q=s("var"),oe=r("AND"),xt=r(" with "),d=s("var"),g=r("1"),yt=r(" to compute the "),W=s("var"),N=r("u"),ie=r(`
			and a
			`),Vt=s("var"),ce=r("RIGHT SHIFT"),ve=r(" by 1 to compute the "),Tt=s("var"),ue=r("v"),de=r("."),fe=y(),wt=s("pre"),G=s("code"),Lt=s("span"),bt=s("span"),he=r("2---3    0 = 00  | x = (00 & 01) = 0   |  y = (00 >> 1) = 0"),_t=r(`
`),Gt=s("span"),St=s("span"),_e=r("|\\  |    1 = 01  | x = (01 & 01) = 1   |  y = (01 >> 1) = 0"),$e=r(`
`),Ft=s("span"),C=s("span"),me=r("| \\ |    2 = 10  | x = (10 & 01) = 0   |  y = (10 >> 1) = 1"),Ee=r(`
`),$t=s("span"),Ae=s("span"),hr=r("0---1    3 = 11  | x = (11 & 01) = 1   |  y = (11 >> 1) = 1"),_r=r(`
`),Ke=y(),Dt=s("p"),$r=r("Remapping the uv to a "),We=s("var"),mr=r("[-1, 1]"),Er=r(` range computes a fullscreen
			quad.`),Xe=y(),ye=s("pre"),qt=s("code"),F=s("span"),we=s("span"),Ar=r("vec2 uv = "),be=s("span"),yr=r("vec2"),Se=s("span"),wr=r("("),Pe=s("span"),br=r("float"),ge=s("span"),Sr=r("(gl_VertexID & "),Ie=s("span"),Pr=r("1"),Ne=s("span"),gr=r("), "),Re=s("span"),Ir=r("float"),ke=s("span"),Nr=r("(gl_VertexID >> "),xe=s("span"),Rr=r("1"),Ve=s("span"),kr=r("));"),xr=r(`
`),Pt=s("span"),Te=s("span"),Vr=r("vec2 pos = uv * "),Le=s("span"),Tr=r("2.0"),Ge=s("span"),Lr=r(" - "),Fe=s("span"),Gr=r("1.0"),De=s("span"),Fr=r(";"),Dr=r(`
`),Ye=y(),st=s("p"),Ce=s("var"),qr=r("gl.TRIANGLE_STRIP"),Wr=r(` is the key to making this work. This
			triangle primitive will use vertices `),Oe=s("var"),Cr=r("[0,1,2]"),Or=r(` and vertices
			`),ze=s("var"),zr=r("[1, 2, 3]"),Hr=r(" to draw the triangles."),Ze=y(),j=s("p"),Br=r("Vertices "),He=s("var"),jr=r("[1, 2, 3]"),Qr=r(`
			do not respect the correct winding order, luckily
			`),Be=s("var"),Ur=r("gl.TRIANGLE_STRIP"),Jr=r(`
			draw order will be reversed for every triangle beside the first, effectively
			drawing in this case `),je=s("var"),Mr=r("[2, 1, 3]"),Kr=r("."),tr=y(),Wt=s("p"),Xr=r(`Other modes do not follow the same rules and vertex order, so it
			won't work. Check out the
			`),J(Ct.$$.fragment),Yr=r(" section on the wiki for more details."),er=y(),Ot=s("p"),Zr=r(`Note that this is a full-fledged quad, we can apply any transform we
			want to the newly created vertices. It also works with any number of
			quads, just make sure to use the right amount of vertices in `),Qe=s("var"),ta=r("gl.drawArrays()"),ea=r("."),rr=y(),zt=s("p"),ra=r("Source code "),J(Ht.$$.fragment),aa=r("."),this.h()},l(l){M(f.$$.fragment,l),p=w(l),i=n(l,"P",{});var _=o(i);P=a(_,"The way to achieve a no-buffer quad a combination of simple math, "),u=n(_,"VAR",{});var Ue=o(u);A=a(Ue,"gl_VertexID"),Ue.forEach(e),c=a(_,`
			and, `),h=n(_,"VAR",{});var Je=o(h);R=a(Je,"gl.TRIANGLE_STRIP"),Je.forEach(e),x=a(_,"."),_.forEach(e),$=w(l),E=n(l,"P",{});var gt=o(E);k=a(gt,`In Javascript land the only thing that changes from a hello-triangle
			WebGL program is that we call
			`),O=n(gt,"VAR",{});var sa=o(O);nt=a(sa,"gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)"),sa.forEach(e),Qt=a(gt,`. Right now,
			interpret this as sending `),z=n(gt,"VAR",{});var na=o(z);Ut=a(na,"4"),na.forEach(e),ot=a(gt,` nonexistent vertices to the vertex
			shader.`),gt.forEach(e),Nt=w(l),V=n(l,"P",{});var lr=o(V);Jt=a(lr,"Note that we don't even need to bind a "),H=n(lr,"VAR",{});var oa=o(H);Mt=a(oa,"VAO"),oa.forEach(e),ft=a(lr,` in WebGL. In OpenGL
			you do need to bind it, but you can just create an empty one, and it
			will work.`),lr.forEach(e),Rt=w(l),T=n(l,"P",{});var sr=o(T);Kt=a(sr,"In the vertex shader "),B=n(sr,"VAR",{});var fa=o(B);Xt=a(fa,"gl_VertexID"),fa.forEach(e),pt=a(sr,` is the zero-based integer
			index of the current vertex. By interpreting the index as a 2-bit binary
			number we get:`),sr.forEach(e),kt=w(l),I=n(l,"UL",{});var Bt=o(I);tt=n(Bt,"LI",{});var nr=o(tt);Yt=a(nr,"Index 0 = "),L=n(nr,"VAR",{});var pa=o(L);it=a(pa,"0b00"),pa.forEach(e),Zt=a(nr," = bottom-left"),nr.forEach(e),ct=w(Bt),et=n(Bt,"LI",{});var or=o(et);vt=a(or,"Index 1 = "),mt=n(or,"VAR",{});var ia=o(mt);ut=a(ia,"0b01"),ia.forEach(e),te=a(or," = bottom-right"),or.forEach(e),dt=w(Bt),rt=n(Bt,"LI",{});var fr=o(rt);ee=a(fr,"Index 2 = "),ht=n(fr,"VAR",{});var ca=o(ht);D=a(ca,"0b10"),ca.forEach(e),re=a(fr," = top-left"),fr.forEach(e),Et=w(Bt),at=n(Bt,"LI",{});var pr=o(at);ae=a(pr,"Index 3 = "),lt=n(pr,"VAR",{});var va=o(lt);le=a(va,"0b11"),va.forEach(e),se=a(pr," = top-right"),pr.forEach(e),Bt.forEach(e),At=w(l),b=n(l,"P",{});var Q=o(b);ne=a(Q,`We can easily get the UV coordinates from this data by using a
			binary `),q=n(Q,"VAR",{});var ua=o(q);oe=a(ua,"AND"),ua.forEach(e),xt=a(Q," with "),d=n(Q,"VAR",{});var da=o(d);g=a(da,"1"),da.forEach(e),yt=a(Q," to compute the "),W=n(Q,"VAR",{});var ha=o(W);N=a(ha,"u"),ha.forEach(e),ie=a(Q,`
			and a
			`),Vt=n(Q,"VAR",{});var _a=o(Vt);ce=a(_a,"RIGHT SHIFT"),_a.forEach(e),ve=a(Q," by 1 to compute the "),Tt=n(Q,"VAR",{});var $a=o(Tt);ue=a($a,"v"),$a.forEach(e),de=a(Q,"."),Q.forEach(e),fe=w(l),wt=n(l,"PRE",{});var ma=o(wt);G=n(ma,"CODE",{});var It=o(G);Lt=n(It,"SPAN",{});var Ea=o(Lt);bt=n(Ea,"SPAN",{style:!0});var Aa=o(bt);he=a(Aa,"2---3    0 = 00  | x = (00 & 01) = 0   |  y = (00 >> 1) = 0"),Aa.forEach(e),Ea.forEach(e),_t=a(It,`
`),Gt=n(It,"SPAN",{});var ya=o(Gt);St=n(ya,"SPAN",{style:!0});var wa=o(St);_e=a(wa,"|\\  |    1 = 01  | x = (01 & 01) = 1   |  y = (01 >> 1) = 0"),wa.forEach(e),ya.forEach(e),$e=a(It,`
`),Ft=n(It,"SPAN",{});var ba=o(Ft);C=n(ba,"SPAN",{style:!0});var Sa=o(C);me=a(Sa,"| \\ |    2 = 10  | x = (10 & 01) = 0   |  y = (10 >> 1) = 1"),Sa.forEach(e),ba.forEach(e),Ee=a(It,`
`),$t=n(It,"SPAN",{});var Pa=o($t);Ae=n(Pa,"SPAN",{style:!0});var ga=o(Ae);hr=a(ga,"0---1    3 = 11  | x = (11 & 01) = 1   |  y = (11 >> 1) = 1"),ga.forEach(e),Pa.forEach(e),_r=a(It,`
`),It.forEach(e),ma.forEach(e),Ke=w(l),Dt=n(l,"P",{});var ir=o(Dt);$r=a(ir,"Remapping the uv to a "),We=n(ir,"VAR",{});var Ia=o(We);mr=a(Ia,"[-1, 1]"),Ia.forEach(e),Er=a(ir,` range computes a fullscreen
			quad.`),ir.forEach(e),Xe=w(l),ye=n(l,"PRE",{});var Na=o(ye);qt=n(Na,"CODE",{});var Me=o(qt);F=n(Me,"SPAN",{});var U=o(F);we=n(U,"SPAN",{style:!0});var Ra=o(we);Ar=a(Ra,"vec2 uv = "),Ra.forEach(e),be=n(U,"SPAN",{style:!0});var ka=o(be);yr=a(ka,"vec2"),ka.forEach(e),Se=n(U,"SPAN",{style:!0});var xa=o(Se);wr=a(xa,"("),xa.forEach(e),Pe=n(U,"SPAN",{style:!0});var Va=o(Pe);br=a(Va,"float"),Va.forEach(e),ge=n(U,"SPAN",{style:!0});var Ta=o(ge);Sr=a(Ta,"(gl_VertexID & "),Ta.forEach(e),Ie=n(U,"SPAN",{style:!0});var La=o(Ie);Pr=a(La,"1"),La.forEach(e),Ne=n(U,"SPAN",{style:!0});var Ga=o(Ne);gr=a(Ga,"), "),Ga.forEach(e),Re=n(U,"SPAN",{style:!0});var Fa=o(Re);Ir=a(Fa,"float"),Fa.forEach(e),ke=n(U,"SPAN",{style:!0});var Da=o(ke);Nr=a(Da,"(gl_VertexID >> "),Da.forEach(e),xe=n(U,"SPAN",{style:!0});var qa=o(xe);Rr=a(qa,"1"),qa.forEach(e),Ve=n(U,"SPAN",{style:!0});var Wa=o(Ve);kr=a(Wa,"));"),Wa.forEach(e),U.forEach(e),xr=a(Me,`
`),Pt=n(Me,"SPAN",{});var qe=o(Pt);Te=n(qe,"SPAN",{style:!0});var Ca=o(Te);Vr=a(Ca,"vec2 pos = uv * "),Ca.forEach(e),Le=n(qe,"SPAN",{style:!0});var Oa=o(Le);Tr=a(Oa,"2.0"),Oa.forEach(e),Ge=n(qe,"SPAN",{style:!0});var za=o(Ge);Lr=a(za," - "),za.forEach(e),Fe=n(qe,"SPAN",{style:!0});var Ha=o(Fe);Gr=a(Ha,"1.0"),Ha.forEach(e),De=n(qe,"SPAN",{style:!0});var Ba=o(De);Fr=a(Ba,";"),Ba.forEach(e),qe.forEach(e),Dr=a(Me,`
`),Me.forEach(e),Na.forEach(e),Ye=w(l),st=n(l,"P",{});var pe=o(st);Ce=n(pe,"VAR",{});var ja=o(Ce);qr=a(ja,"gl.TRIANGLE_STRIP"),ja.forEach(e),Wr=a(pe,` is the key to making this work. This
			triangle primitive will use vertices `),Oe=n(pe,"VAR",{});var Qa=o(Oe);Cr=a(Qa,"[0,1,2]"),Qa.forEach(e),Or=a(pe,` and vertices
			`),ze=n(pe,"VAR",{});var Ua=o(ze);zr=a(Ua,"[1, 2, 3]"),Ua.forEach(e),Hr=a(pe," to draw the triangles."),pe.forEach(e),Ze=w(l),j=n(l,"P",{});var jt=o(j);Br=a(jt,"Vertices "),He=n(jt,"VAR",{});var Ja=o(He);jr=a(Ja,"[1, 2, 3]"),Ja.forEach(e),Qr=a(jt,`
			do not respect the correct winding order, luckily
			`),Be=n(jt,"VAR",{});var Ma=o(Be);Ur=a(Ma,"gl.TRIANGLE_STRIP"),Ma.forEach(e),Jr=a(jt,`
			draw order will be reversed for every triangle beside the first, effectively
			drawing in this case `),je=n(jt,"VAR",{});var Ka=o(je);Mr=a(Ka,"[2, 1, 3]"),Ka.forEach(e),Kr=a(jt,"."),jt.forEach(e),tr=w(l),Wt=n(l,"P",{});var cr=o(Wt);Xr=a(cr,`Other modes do not follow the same rules and vertex order, so it
			won't work. Check out the
			`),M(Ct.$$.fragment,cr),Yr=a(cr," section on the wiki for more details."),cr.forEach(e),er=w(l),Ot=n(l,"P",{});var vr=o(Ot);Zr=a(vr,`Note that this is a full-fledged quad, we can apply any transform we
			want to the newly created vertices. It also works with any number of
			quads, just make sure to use the right amount of vertices in `),Qe=n(vr,"VAR",{});var Xa=o(Qe);ta=a(Xa,"gl.drawArrays()"),Xa.forEach(e),ea=a(vr,"."),vr.forEach(e),rr=w(l),zt=n(l,"P",{});var ur=o(zt);ra=a(ur,"Source code "),M(Ht.$$.fragment,ur),aa=a(ur,"."),ur.forEach(e),this.h()},h(){m(bt,"color","undefined"),m(St,"color","undefined"),m(C,"color","undefined"),m(Ae,"color","undefined"),m(we,"color","#24292F"),m(be,"color","#0550AE"),m(Se,"color","#24292F"),m(Pe,"color","#CF222E"),m(ge,"color","#24292F"),m(Ie,"color","#0550AE"),m(Ne,"color","#24292F"),m(Re,"color","#CF222E"),m(ke,"color","#24292F"),m(xe,"color","#0550AE"),m(Ve,"color","#24292F"),m(Te,"color","#24292F"),m(Le,"color","#0550AE"),m(Ge,"color","#24292F"),m(Fe,"color","#0550AE"),m(De,"color","#24292F")},m(l,_){K(f,l,_),v(l,p,_),v(l,i,_),t(i,P),t(i,u),t(u,A),t(i,c),t(i,h),t(h,R),t(i,x),v(l,$,_),v(l,E,_),t(E,k),t(E,O),t(O,nt),t(E,Qt),t(E,z),t(z,Ut),t(E,ot),v(l,Nt,_),v(l,V,_),t(V,Jt),t(V,H),t(H,Mt),t(V,ft),v(l,Rt,_),v(l,T,_),t(T,Kt),t(T,B),t(B,Xt),t(T,pt),v(l,kt,_),v(l,I,_),t(I,tt),t(tt,Yt),t(tt,L),t(L,it),t(tt,Zt),t(I,ct),t(I,et),t(et,vt),t(et,mt),t(mt,ut),t(et,te),t(I,dt),t(I,rt),t(rt,ee),t(rt,ht),t(ht,D),t(rt,re),t(I,Et),t(I,at),t(at,ae),t(at,lt),t(lt,le),t(at,se),v(l,At,_),v(l,b,_),t(b,ne),t(b,q),t(q,oe),t(b,xt),t(b,d),t(d,g),t(b,yt),t(b,W),t(W,N),t(b,ie),t(b,Vt),t(Vt,ce),t(b,ve),t(b,Tt),t(Tt,ue),t(b,de),v(l,fe,_),v(l,wt,_),t(wt,G),t(G,Lt),t(Lt,bt),t(bt,he),t(G,_t),t(G,Gt),t(Gt,St),t(St,_e),t(G,$e),t(G,Ft),t(Ft,C),t(C,me),t(G,Ee),t(G,$t),t($t,Ae),t(Ae,hr),t(G,_r),v(l,Ke,_),v(l,Dt,_),t(Dt,$r),t(Dt,We),t(We,mr),t(Dt,Er),v(l,Xe,_),v(l,ye,_),t(ye,qt),t(qt,F),t(F,we),t(we,Ar),t(F,be),t(be,yr),t(F,Se),t(Se,wr),t(F,Pe),t(Pe,br),t(F,ge),t(ge,Sr),t(F,Ie),t(Ie,Pr),t(F,Ne),t(Ne,gr),t(F,Re),t(Re,Ir),t(F,ke),t(ke,Nr),t(F,xe),t(xe,Rr),t(F,Ve),t(Ve,kr),t(qt,xr),t(qt,Pt),t(Pt,Te),t(Te,Vr),t(Pt,Le),t(Le,Tr),t(Pt,Ge),t(Ge,Lr),t(Pt,Fe),t(Fe,Gr),t(Pt,De),t(De,Fr),t(qt,Dr),v(l,Ye,_),v(l,st,_),t(st,Ce),t(Ce,qr),t(st,Wr),t(st,Oe),t(Oe,Cr),t(st,Or),t(st,ze),t(ze,zr),t(st,Hr),v(l,Ze,_),v(l,j,_),t(j,Br),t(j,He),t(He,jr),t(j,Qr),t(j,Be),t(Be,Ur),t(j,Jr),t(j,je),t(je,Mr),t(j,Kr),v(l,tr,_),v(l,Wt,_),t(Wt,Xr),K(Ct,Wt,null),t(Wt,Yr),v(l,er,_),v(l,Ot,_),t(Ot,Zr),t(Ot,Qe),t(Qe,ta),t(Ot,ea),v(l,rr,_),v(l,zt,_),t(zt,ra),K(Ht,zt,null),t(zt,aa),ar=!0},p(l,_){const Ue={};_&1&&(Ue.$$scope={dirty:_,ctx:l}),f.$set(Ue);const Je={};_&1&&(Je.$$scope={dirty:_,ctx:l}),Ct.$set(Je);const gt={};_&1&&(gt.$$scope={dirty:_,ctx:l}),Ht.$set(gt)},i(l){ar||(X(f.$$.fragment,l),X(Ct.$$.fragment,l),X(Ht.$$.fragment,l),ar=!0)},o(l){Y(f.$$.fragment,l),Y(Ct.$$.fragment,l),Y(Ht.$$.fragment,l),ar=!1},d(l){Z(f,l),l&&e(p),l&&e(i),l&&e($),l&&e(E),l&&e(Nt),l&&e(V),l&&e(Rt),l&&e(T),l&&e(kt),l&&e(I),l&&e(At),l&&e(b),l&&e(fe),l&&e(wt),l&&e(Ke),l&&e(Dt),l&&e(Xe),l&&e(ye),l&&e(Ye),l&&e(st),l&&e(Ze),l&&e(j),l&&e(tr),l&&e(Wt),Z(Ct),l&&e(er),l&&e(Ot),l&&e(rr),l&&e(zt),Z(Ht)}}}function vl(S){let f;return{c(){f=r("Full screen only")},l(p){f=a(p,"Full screen only")},m(p,i){v(p,f,i)},d(p){p&&e(f)}}}function ul(S){let f;return{c(){f=r("here")},l(p){f=a(p,"here")},m(p,i){v(p,f,i)},d(p){p&&e(f)}}}function dl(S){let f,p,i,P,u,A,c,h,R,x,$,E,k,O,nt,Qt,z,Ut,ot,Nt,V,Jt,H,Mt,ft,Rt,T,Kt,B,Xt,pt,kt,I,tt,Yt,L,it,Zt,ct,et,vt,mt,ut,te,dt,rt,ee,ht,D,re,Et,at,ae,lt,le,se,At,b,ne,q,oe,xt;return f=new Ya({props:{id:"full-screen-only",$$slots:{default:[vl]},$$scope:{ctx:S}}}),q=new dr({props:{href:"https://gist.github.com/lorenzored98/7d7c4bc862f211da0a76954b4b3870eb",$$slots:{default:[ul]},$$scope:{ctx:S}}}),{c(){J(f.$$.fragment),p=y(),i=s("p"),P=r(`If we are only ever going to need a fullscreen quad, there is an
			even simpler version that uses only 3 vertices to create a big
			triangle and computes the uv coordinates so that they form a
			fullscreen quad.`),u=y(),A=s("pre"),c=s("code"),h=s("span"),R=s("span"),x=r("vec2 uv = "),$=s("span"),E=r("vec2"),k=s("span"),O=r("("),nt=s("span"),Qt=r("float"),z=s("span"),Ut=r("(gl_VertexID & "),ot=s("span"),Nt=r("1"),V=s("span"),Jt=r("), "),H=s("span"),Mt=r("float"),ft=s("span"),Rt=r("(gl_VertexID >> "),T=s("span"),Kt=r("1"),B=s("span"),Xt=r(")) * "),pt=s("span"),kt=r("2.0"),I=s("span"),tt=r(";"),Yt=r(`
`),L=s("span"),it=s("span"),Zt=r("vec2 pos = uv * "),ct=s("span"),et=r("2.0"),vt=s("span"),mt=r(" - "),ut=s("span"),te=r("1.0"),dt=s("span"),rt=r(";"),ee=r(`
`),ht=y(),D=s("p"),re=r(`Since we only need 3 vertices for a triangle, it's not necessary to
			use `),Et=s("var"),at=r("gl.TRIANGLE_STRIP"),ae=r(`, the classic
			`),lt=s("var"),le=r("gl.drawArrays(gl.TRIANGLES, 0, 3)"),se=r(" works."),At=y(),b=s("p"),ne=r("Source code "),J(q.$$.fragment),oe=r("."),this.h()},l(d){M(f.$$.fragment,d),p=w(d),i=n(d,"P",{});var g=o(i);P=a(g,`If we are only ever going to need a fullscreen quad, there is an
			even simpler version that uses only 3 vertices to create a big
			triangle and computes the uv coordinates so that they form a
			fullscreen quad.`),g.forEach(e),u=w(d),A=n(d,"PRE",{});var yt=o(A);c=n(yt,"CODE",{});var W=o(c);h=n(W,"SPAN",{});var N=o(h);R=n(N,"SPAN",{style:!0});var ie=o(R);x=a(ie,"vec2 uv = "),ie.forEach(e),$=n(N,"SPAN",{style:!0});var Vt=o($);E=a(Vt,"vec2"),Vt.forEach(e),k=n(N,"SPAN",{style:!0});var ce=o(k);O=a(ce,"("),ce.forEach(e),nt=n(N,"SPAN",{style:!0});var ve=o(nt);Qt=a(ve,"float"),ve.forEach(e),z=n(N,"SPAN",{style:!0});var Tt=o(z);Ut=a(Tt,"(gl_VertexID & "),Tt.forEach(e),ot=n(N,"SPAN",{style:!0});var ue=o(ot);Nt=a(ue,"1"),ue.forEach(e),V=n(N,"SPAN",{style:!0});var de=o(V);Jt=a(de,"), "),de.forEach(e),H=n(N,"SPAN",{style:!0});var fe=o(H);Mt=a(fe,"float"),fe.forEach(e),ft=n(N,"SPAN",{style:!0});var wt=o(ft);Rt=a(wt,"(gl_VertexID >> "),wt.forEach(e),T=n(N,"SPAN",{style:!0});var G=o(T);Kt=a(G,"1"),G.forEach(e),B=n(N,"SPAN",{style:!0});var Lt=o(B);Xt=a(Lt,")) * "),Lt.forEach(e),pt=n(N,"SPAN",{style:!0});var bt=o(pt);kt=a(bt,"2.0"),bt.forEach(e),I=n(N,"SPAN",{style:!0});var he=o(I);tt=a(he,";"),he.forEach(e),N.forEach(e),Yt=a(W,`
`),L=n(W,"SPAN",{});var _t=o(L);it=n(_t,"SPAN",{style:!0});var Gt=o(it);Zt=a(Gt,"vec2 pos = uv * "),Gt.forEach(e),ct=n(_t,"SPAN",{style:!0});var St=o(ct);et=a(St,"2.0"),St.forEach(e),vt=n(_t,"SPAN",{style:!0});var _e=o(vt);mt=a(_e," - "),_e.forEach(e),ut=n(_t,"SPAN",{style:!0});var $e=o(ut);te=a($e,"1.0"),$e.forEach(e),dt=n(_t,"SPAN",{style:!0});var Ft=o(dt);rt=a(Ft,";"),Ft.forEach(e),_t.forEach(e),ee=a(W,`
`),W.forEach(e),yt.forEach(e),ht=w(d),D=n(d,"P",{});var C=o(D);re=a(C,`Since we only need 3 vertices for a triangle, it's not necessary to
			use `),Et=n(C,"VAR",{});var me=o(Et);at=a(me,"gl.TRIANGLE_STRIP"),me.forEach(e),ae=a(C,`, the classic
			`),lt=n(C,"VAR",{});var Ee=o(lt);le=a(Ee,"gl.drawArrays(gl.TRIANGLES, 0, 3)"),Ee.forEach(e),se=a(C," works."),C.forEach(e),At=w(d),b=n(d,"P",{});var $t=o(b);ne=a($t,"Source code "),M(q.$$.fragment,$t),oe=a($t,"."),$t.forEach(e),this.h()},h(){m(R,"color","#24292F"),m($,"color","#0550AE"),m(k,"color","#24292F"),m(nt,"color","#CF222E"),m(z,"color","#24292F"),m(ot,"color","#0550AE"),m(V,"color","#24292F"),m(H,"color","#CF222E"),m(ft,"color","#24292F"),m(T,"color","#0550AE"),m(B,"color","#24292F"),m(pt,"color","#0550AE"),m(I,"color","#24292F"),m(it,"color","#24292F"),m(ct,"color","#0550AE"),m(vt,"color","#24292F"),m(ut,"color","#0550AE"),m(dt,"color","#24292F")},m(d,g){K(f,d,g),v(d,p,g),v(d,i,g),t(i,P),v(d,u,g),v(d,A,g),t(A,c),t(c,h),t(h,R),t(R,x),t(h,$),t($,E),t(h,k),t(k,O),t(h,nt),t(nt,Qt),t(h,z),t(z,Ut),t(h,ot),t(ot,Nt),t(h,V),t(V,Jt),t(h,H),t(H,Mt),t(h,ft),t(ft,Rt),t(h,T),t(T,Kt),t(h,B),t(B,Xt),t(h,pt),t(pt,kt),t(h,I),t(I,tt),t(c,Yt),t(c,L),t(L,it),t(it,Zt),t(L,ct),t(ct,et),t(L,vt),t(vt,mt),t(L,ut),t(ut,te),t(L,dt),t(dt,rt),t(c,ee),v(d,ht,g),v(d,D,g),t(D,re),t(D,Et),t(Et,at),t(D,ae),t(D,lt),t(lt,le),t(D,se),v(d,At,g),v(d,b,g),t(b,ne),K(q,b,null),t(b,oe),xt=!0},p(d,g){const yt={};g&1&&(yt.$$scope={dirty:g,ctx:d}),f.$set(yt);const W={};g&1&&(W.$$scope={dirty:g,ctx:d}),q.$set(W)},i(d){xt||(X(f.$$.fragment,d),X(q.$$.fragment,d),xt=!0)},o(d){Y(f.$$.fragment,d),Y(q.$$.fragment,d),xt=!1},d(d){Z(f,d),d&&e(p),d&&e(i),d&&e(u),d&&e(A),d&&e(ht),d&&e(D),d&&e(At),d&&e(b),Z(q)}}}function hl(S){let f,p,i,P,u,A;return f=new la({props:{$$slots:{default:[ol]},$$scope:{ctx:S}}}),i=new la({props:{$$slots:{default:[cl]},$$scope:{ctx:S}}}),u=new la({props:{$$slots:{default:[dl]},$$scope:{ctx:S}}}),{c(){J(f.$$.fragment),p=y(),J(i.$$.fragment),P=y(),J(u.$$.fragment)},l(c){M(f.$$.fragment,c),p=w(c),M(i.$$.fragment,c),P=w(c),M(u.$$.fragment,c)},m(c,h){K(f,c,h),v(c,p,h),K(i,c,h),v(c,P,h),K(u,c,h),A=!0},p(c,h){const R={};h&1&&(R.$$scope={dirty:h,ctx:c}),f.$set(R);const x={};h&1&&(x.$$scope={dirty:h,ctx:c}),i.$set(x);const $={};h&1&&($.$$scope={dirty:h,ctx:c}),u.$set($)},i(c){A||(X(f.$$.fragment,c),X(i.$$.fragment,c),X(u.$$.fragment,c),A=!0)},o(c){Y(f.$$.fragment,c),Y(i.$$.fragment,c),Y(u.$$.fragment,c),A=!1},d(c){Z(f,c),c&&e(p),Z(i,c),c&&e(P),Z(u,c)}}}function _l(S){let f,p,i,P;return f=new ll({props:{title:"Quad Without Vertex Buffer",description:"WebGL Quad without vertex buffer trick",keywords:"Javascript, WebGL2, Gamedev, Shaders, GPU, Geometry, Instancing, Tricks, Triangle Strip"}}),i=new rl({props:{$$slots:{default:[hl]},$$scope:{ctx:S}}}),{c(){J(f.$$.fragment),p=y(),J(i.$$.fragment)},l(u){M(f.$$.fragment,u),p=w(u),M(i.$$.fragment,u)},m(u,A){K(f,u,A),v(u,p,A),K(i,u,A),P=!0},p(u,[A]){const c={};A&1&&(c.$$scope={dirty:A,ctx:u}),i.$set(c)},i(u){P||(X(f.$$.fragment,u),X(i.$$.fragment,u),P=!0)},o(u){Y(f.$$.fragment,u),Y(i.$$.fragment,u),P=!1},d(u){Z(f,u),u&&e(p),Z(i,u)}}}class wl extends Za{constructor(f){super(),tl(this,f,null,_l,el,{})}}export{wl as default};
