import{S as Lo,i as jo,s as Ro,w as N,a as P,x as g,c as S,y as w,b as m,f as k,t as F,z as I,h as e,k as n,q as a,l as o,m as r,r as s,G as t,p as c}from"../../../chunks/index-e9d960f3.js";import{S as Vo,B as fn}from"../../../chunks/Seo-2b2d3631.js";import{M as Bo,F as Co,S as xo,T as Ho,a as Mo}from"../../../chunks/Subtitle-4a06ee52.js";function Do(A){let p;return{c(){p=a("Github Pages Action")},l(f){p=s(f,"Github Pages Action")},m(f,u){m(f,p,u)},d(f){f&&e(p)}}}function Oo(A){let p,f,u,E,d;return p=new Ho({props:{timestamp:1661509919,$$slots:{default:[Do]},$$scope:{ctx:A}}}),{c(){N(p.$$.fragment),f=P(),u=n("p"),E=a(`A simple and minimal file for building your static Github pages
			website via Github actions.`)},l(_){g(p.$$.fragment,_),f=S(_),u=o(_,"P",{});var l=r(u);E=s(l,`A simple and minimal file for building your static Github pages
			website via Github actions.`),l.forEach(e)},m(_,l){w(p,_,l),m(_,f,l),m(_,u,l),t(u,E),d=!0},p(_,l){const $={};l&1&&($.$$scope={dirty:l,ctx:_}),p.$set($)},i(_){d||(k(p.$$.fragment,_),d=!0)},o(_){F(p.$$.fragment,_),d=!1},d(_){I(p,_),_&&e(f),_&&e(u)}}}function Uo(A){let p;return{c(){p=a("The YAML File")},l(f){p=s(f,"The YAML File")},m(f,u){m(f,p,u)},d(f){f&&e(p)}}}function qo(A){let p;return{c(){p=a("repo")},l(f){p=s(f,"repo")},m(f,u){m(f,p,u)},d(f){f&&e(p)}}}function Jo(A){let p;return{c(){p=a("repo")},l(f){p=s(f,"repo")},m(f,u){m(f,p,u)},d(f){f&&e(p)}}}function Ko(A){let p;return{c(){p=a("workflow syntax doc")},l(f){p=s(f,"workflow syntax doc")},m(f,u){m(f,p,u)},d(f){f&&e(p)}}}function Yo(A){let p,f,u,E,d,_,l,$,T,ea,at,aa,st,sa,na,nt,ot,oa,rt,ra,la,W,fe,pa,lt,ia,pt,ca,fa,G,he,ha,it,ua,ct,da,ft,_a,ht,va,$a,ut,dt,ma,_t,Aa,Ea,Q,ue,ya,vt,Pa,$t,Sa,ba,x,de,Na,mt,ga,At,wa,Et,ka,Fa,X,_e,Ia,yt,Ta,Pt,Ga,xa,L,St,La,bt,ja,Nt,Ra,gt,Va,Ba,j,wt,Ca,kt,Ha,Ft,Ma,It,Da,Oa,Z,ve,Ua,Tt,qa,Gt,Ja,Ka,R,$e,Ya,xt,za,Lt,Wa,jt,Qa,Xa,V,Rt,Za,Vt,ts,Bt,es,Ct,as,ss,B,Ht,ns,Mt,os,Dt,rs,Ot,ls,ps,C,Ut,is,qt,cs,Jt,fs,Kt,hs,us,H,me,ds,Yt,_s,zt,vs,Wt,$s,ms,tt,Ae,As,Qt,Es,Xt,ys,Ps,M,Ee,Ss,Zt,bs,te,Ns,ee,gs,ws,D,ye,ks,ae,Fs,se,Is,ne,Ts,Gs,Oe,oe,xs,Ue,y,re,Pe,Ls,js,Rs,O,Se,Vs,Bs,U,Cs,Hs,q,be,Ms,Ds,J,Os,Us,le,Ne,qs,Js,Ks,pe,ge,Ys,zs,Ws,ie,we,Qs,Xs,qe,K,Zs,Y,tn,Je,z,en,ke,an,sn,Ke;return p=new Mo({props:{id:"yaml-file",$$slots:{default:[Uo]},$$scope:{ctx:A}}}),U=new fn({props:{href:"https://github.com/actions/checkout",$$slots:{default:[qo]},$$scope:{ctx:A}}}),J=new fn({props:{href:"https://github.com/peaceiris/actions-gh-pages",$$slots:{default:[Jo]},$$scope:{ctx:A}}}),Y=new fn({props:{href:"https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions",$$slots:{default:[Ko]},$$scope:{ctx:A}}}),{c(){N(p.$$.fragment),f=P(),u=n("p"),E=a("This file is intented to work with a node/npm based build step."),d=P(),_=n("pre"),l=n("code"),$=n("span"),T=n("span"),ea=a("name"),at=n("span"),aa=a(": "),st=n("span"),sa=a("Build And Deploy"),na=a(`
`),nt=n("span"),ot=n("span"),oa=a("on"),rt=n("span"),ra=a(":"),la=a(`
`),W=n("span"),fe=n("span"),pa=a("    "),lt=n("span"),ia=a("push"),pt=n("span"),ca=a(":"),fa=a(`
`),G=n("span"),he=n("span"),ha=a("        "),it=n("span"),ua=a("branches"),ct=n("span"),da=a(": ["),ft=n("span"),_a=a("main"),ht=n("span"),va=a("]"),$a=a(`
`),ut=n("span"),dt=n("span"),ma=a("jobs"),_t=n("span"),Aa=a(":"),Ea=a(`
`),Q=n("span"),ue=n("span"),ya=a("    "),vt=n("span"),Pa=a("bd"),$t=n("span"),Sa=a(":"),ba=a(`
`),x=n("span"),de=n("span"),Na=a("        "),mt=n("span"),ga=a("runs-on"),At=n("span"),wa=a(": "),Et=n("span"),ka=a("ubuntu-latest"),Fa=a(`
`),X=n("span"),_e=n("span"),Ia=a("        "),yt=n("span"),Ta=a("steps"),Pt=n("span"),Ga=a(":"),xa=a(`
`),L=n("span"),St=n("span"),La=a("            - "),bt=n("span"),ja=a("uses"),Nt=n("span"),Ra=a(": "),gt=n("span"),Va=a("actions/checkout@v3"),Ba=a(`
`),j=n("span"),wt=n("span"),Ca=a("            - "),kt=n("span"),Ha=a("uses"),Ft=n("span"),Ma=a(": "),It=n("span"),Da=a("actions/setup-node@v3"),Oa=a(`
`),Z=n("span"),ve=n("span"),Ua=a("              "),Tt=n("span"),qa=a("with"),Gt=n("span"),Ja=a(":"),Ka=a(`
`),R=n("span"),$e=n("span"),Ya=a("                  "),xt=n("span"),za=a("node-version"),Lt=n("span"),Wa=a(": "),jt=n("span"),Qa=a("16"),Xa=a(`
`),V=n("span"),Rt=n("span"),Za=a("            - "),Vt=n("span"),ts=a("run"),Bt=n("span"),es=a(": "),Ct=n("span"),as=a("npm install"),ss=a(`
`),B=n("span"),Ht=n("span"),ns=a("            - "),Mt=n("span"),os=a("run"),Dt=n("span"),rs=a(": "),Ot=n("span"),ls=a("npm run build"),ps=a(`
`),C=n("span"),Ut=n("span"),is=a("            - "),qt=n("span"),cs=a("uses"),Jt=n("span"),fs=a(": "),Kt=n("span"),hs=a("peaceiris/actions-gh-pages@v3"),us=a(`
`),H=n("span"),me=n("span"),ds=a("              "),Yt=n("span"),_s=a("if"),zt=n("span"),vs=a(": "),Wt=n("span"),$s=a("${{ github.ref == 'refs/heads/main' }}"),ms=a(`
`),tt=n("span"),Ae=n("span"),As=a("              "),Qt=n("span"),Es=a("with"),Xt=n("span"),ys=a(":"),Ps=a(`
`),M=n("span"),Ee=n("span"),Ss=a("                  "),Zt=n("span"),bs=a("github_token"),te=n("span"),Ns=a(": "),ee=n("span"),gs=a("${{ secrets.GITHUB_TOKEN }}"),ws=a(`
`),D=n("span"),ye=n("span"),ks=a("                  "),ae=n("span"),Fs=a("publish_dir"),se=n("span"),Is=a(": "),ne=n("span"),Ts=a("./build"),Gs=a(`
`),Oe=P(),oe=n("p"),xs=a(`If you can understand everything that's going on here is no need to
			keep reading, otherwise here's a short summary of what this file
			does:`),Ue=P(),y=n("ul"),re=n("li"),Pe=n("var"),Ls=a("bd"),js=a(" : Job name I chose, you can choose whatever you want."),Rs=P(),O=n("li"),Se=n("var"),Vs=a("actions/checkout@v3"),Bs=a(` : This is an official Github
				action. It will checkout our repository so that it can be used
				by the other steps. Here's the `),N(U.$$.fragment),Cs=a("."),Hs=P(),q=n("li"),be=n("var"),Ms=a("peaceiris/actions-gh-pages@v3"),Ds=a(` : This is an unofficial
				action that will allow us to deploy static files to the gh-pages
				branch. Here's the `),N(J.$$.fragment),Os=a("."),Us=P(),le=n("li"),Ne=n("var"),qs=a("if"),Js=a(` : Checking that we are on main branch in this case.
				If you are on another branch, you can modify refs/heads/main or just
				remove the if condition.`),Ks=P(),pe=n("li"),ge=n("var"),Ys=a("github_token"),zs=a(` : This is a token that created by the action
				to authenticate in the workflow.`),Ws=P(),ie=n("li"),we=n("var"),Qs=a("publish_dir"),Xs=a(` : The directory that contains the static files
				after the build step. It takes a relative path from where your package.json
				is located.`),qe=P(),K=n("p"),Zs=a(`Most of the other syntax is self-explanatory and the
			`),N(Y.$$.fragment),tn=a(" does a much better job of explaining it."),Je=P(),z=n("p"),en=a("Create a "),ke=n("var"),an=a(".github/workflows/[whatever].yaml"),sn=a(`
			inside your repository, copy the content of this file,make the appropriate
			changes if your build step differs, and on the next push command your
			website will be automatically built and deployed.`),this.h()},l(i){g(p.$$.fragment,i),f=S(i),u=o(i,"P",{});var v=r(u);E=s(v,"This file is intented to work with a node/npm based build step."),v.forEach(e),d=S(i),_=o(i,"PRE",{});var Fe=r(_);l=o(Fe,"CODE",{});var h=r(l);$=o(h,"SPAN",{});var et=r($);T=o(et,"SPAN",{style:!0});var Ie=r(T);ea=s(Ie,"name"),Ie.forEach(e),at=o(et,"SPAN",{style:!0});var hn=r(at);aa=s(hn,": "),hn.forEach(e),st=o(et,"SPAN",{style:!0});var un=r(st);sa=s(un,"Build And Deploy"),un.forEach(e),et.forEach(e),na=s(h,`
`),nt=o(h,"SPAN",{});var nn=r(nt);ot=o(nn,"SPAN",{style:!0});var dn=r(ot);oa=s(dn,"on"),dn.forEach(e),rt=o(nn,"SPAN",{style:!0});var _n=r(rt);ra=s(_n,":"),_n.forEach(e),nn.forEach(e),la=s(h,`
`),W=o(h,"SPAN",{});var Ye=r(W);fe=o(Ye,"SPAN",{});var vn=r(fe);pa=s(vn,"    "),vn.forEach(e),lt=o(Ye,"SPAN",{style:!0});var $n=r(lt);ia=s($n,"push"),$n.forEach(e),pt=o(Ye,"SPAN",{style:!0});var mn=r(pt);ca=s(mn,":"),mn.forEach(e),Ye.forEach(e),fa=s(h,`
`),G=o(h,"SPAN",{});var ce=r(G);he=o(ce,"SPAN",{});var An=r(he);ha=s(An,"        "),An.forEach(e),it=o(ce,"SPAN",{style:!0});var En=r(it);ua=s(En,"branches"),En.forEach(e),ct=o(ce,"SPAN",{style:!0});var yn=r(ct);da=s(yn,": ["),yn.forEach(e),ft=o(ce,"SPAN",{style:!0});var Pn=r(ft);_a=s(Pn,"main"),Pn.forEach(e),ht=o(ce,"SPAN",{style:!0});var Sn=r(ht);va=s(Sn,"]"),Sn.forEach(e),ce.forEach(e),$a=s(h,`
`),ut=o(h,"SPAN",{});var on=r(ut);dt=o(on,"SPAN",{style:!0});var bn=r(dt);ma=s(bn,"jobs"),bn.forEach(e),_t=o(on,"SPAN",{style:!0});var Nn=r(_t);Aa=s(Nn,":"),Nn.forEach(e),on.forEach(e),Ea=s(h,`
`),Q=o(h,"SPAN",{});var ze=r(Q);ue=o(ze,"SPAN",{});var gn=r(ue);ya=s(gn,"    "),gn.forEach(e),vt=o(ze,"SPAN",{style:!0});var wn=r(vt);Pa=s(wn,"bd"),wn.forEach(e),$t=o(ze,"SPAN",{style:!0});var kn=r($t);Sa=s(kn,":"),kn.forEach(e),ze.forEach(e),ba=s(h,`
`),x=o(h,"SPAN",{});var Te=r(x);de=o(Te,"SPAN",{});var Fn=r(de);Na=s(Fn,"        "),Fn.forEach(e),mt=o(Te,"SPAN",{style:!0});var In=r(mt);ga=s(In,"runs-on"),In.forEach(e),At=o(Te,"SPAN",{style:!0});var Tn=r(At);wa=s(Tn,": "),Tn.forEach(e),Et=o(Te,"SPAN",{style:!0});var Gn=r(Et);ka=s(Gn,"ubuntu-latest"),Gn.forEach(e),Te.forEach(e),Fa=s(h,`
`),X=o(h,"SPAN",{});var We=r(X);_e=o(We,"SPAN",{});var xn=r(_e);Ia=s(xn,"        "),xn.forEach(e),yt=o(We,"SPAN",{style:!0});var Ln=r(yt);Ta=s(Ln,"steps"),Ln.forEach(e),Pt=o(We,"SPAN",{style:!0});var jn=r(Pt);Ga=s(jn,":"),jn.forEach(e),We.forEach(e),xa=s(h,`
`),L=o(h,"SPAN",{});var Ge=r(L);St=o(Ge,"SPAN",{style:!0});var Rn=r(St);La=s(Rn,"            - "),Rn.forEach(e),bt=o(Ge,"SPAN",{style:!0});var Vn=r(bt);ja=s(Vn,"uses"),Vn.forEach(e),Nt=o(Ge,"SPAN",{style:!0});var Bn=r(Nt);Ra=s(Bn,": "),Bn.forEach(e),gt=o(Ge,"SPAN",{style:!0});var Cn=r(gt);Va=s(Cn,"actions/checkout@v3"),Cn.forEach(e),Ge.forEach(e),Ba=s(h,`
`),j=o(h,"SPAN",{});var xe=r(j);wt=o(xe,"SPAN",{style:!0});var Hn=r(wt);Ca=s(Hn,"            - "),Hn.forEach(e),kt=o(xe,"SPAN",{style:!0});var Mn=r(kt);Ha=s(Mn,"uses"),Mn.forEach(e),Ft=o(xe,"SPAN",{style:!0});var Dn=r(Ft);Ma=s(Dn,": "),Dn.forEach(e),It=o(xe,"SPAN",{style:!0});var On=r(It);Da=s(On,"actions/setup-node@v3"),On.forEach(e),xe.forEach(e),Oa=s(h,`
`),Z=o(h,"SPAN",{});var Qe=r(Z);ve=o(Qe,"SPAN",{});var Un=r(ve);Ua=s(Un,"              "),Un.forEach(e),Tt=o(Qe,"SPAN",{style:!0});var qn=r(Tt);qa=s(qn,"with"),qn.forEach(e),Gt=o(Qe,"SPAN",{style:!0});var Jn=r(Gt);Ja=s(Jn,":"),Jn.forEach(e),Qe.forEach(e),Ka=s(h,`
`),R=o(h,"SPAN",{});var Le=r(R);$e=o(Le,"SPAN",{});var Kn=r($e);Ya=s(Kn,"                  "),Kn.forEach(e),xt=o(Le,"SPAN",{style:!0});var Yn=r(xt);za=s(Yn,"node-version"),Yn.forEach(e),Lt=o(Le,"SPAN",{style:!0});var zn=r(Lt);Wa=s(zn,": "),zn.forEach(e),jt=o(Le,"SPAN",{style:!0});var Wn=r(jt);Qa=s(Wn,"16"),Wn.forEach(e),Le.forEach(e),Xa=s(h,`
`),V=o(h,"SPAN",{});var je=r(V);Rt=o(je,"SPAN",{style:!0});var Qn=r(Rt);Za=s(Qn,"            - "),Qn.forEach(e),Vt=o(je,"SPAN",{style:!0});var Xn=r(Vt);ts=s(Xn,"run"),Xn.forEach(e),Bt=o(je,"SPAN",{style:!0});var Zn=r(Bt);es=s(Zn,": "),Zn.forEach(e),Ct=o(je,"SPAN",{style:!0});var to=r(Ct);as=s(to,"npm install"),to.forEach(e),je.forEach(e),ss=s(h,`
`),B=o(h,"SPAN",{});var Re=r(B);Ht=o(Re,"SPAN",{style:!0});var eo=r(Ht);ns=s(eo,"            - "),eo.forEach(e),Mt=o(Re,"SPAN",{style:!0});var ao=r(Mt);os=s(ao,"run"),ao.forEach(e),Dt=o(Re,"SPAN",{style:!0});var so=r(Dt);rs=s(so,": "),so.forEach(e),Ot=o(Re,"SPAN",{style:!0});var no=r(Ot);ls=s(no,"npm run build"),no.forEach(e),Re.forEach(e),ps=s(h,`
`),C=o(h,"SPAN",{});var Ve=r(C);Ut=o(Ve,"SPAN",{style:!0});var oo=r(Ut);is=s(oo,"            - "),oo.forEach(e),qt=o(Ve,"SPAN",{style:!0});var ro=r(qt);cs=s(ro,"uses"),ro.forEach(e),Jt=o(Ve,"SPAN",{style:!0});var lo=r(Jt);fs=s(lo,": "),lo.forEach(e),Kt=o(Ve,"SPAN",{style:!0});var po=r(Kt);hs=s(po,"peaceiris/actions-gh-pages@v3"),po.forEach(e),Ve.forEach(e),us=s(h,`
`),H=o(h,"SPAN",{});var Be=r(H);me=o(Be,"SPAN",{});var io=r(me);ds=s(io,"              "),io.forEach(e),Yt=o(Be,"SPAN",{style:!0});var co=r(Yt);_s=s(co,"if"),co.forEach(e),zt=o(Be,"SPAN",{style:!0});var fo=r(zt);vs=s(fo,": "),fo.forEach(e),Wt=o(Be,"SPAN",{style:!0});var ho=r(Wt);$s=s(ho,"${{ github.ref == 'refs/heads/main' }}"),ho.forEach(e),Be.forEach(e),ms=s(h,`
`),tt=o(h,"SPAN",{});var Xe=r(tt);Ae=o(Xe,"SPAN",{});var uo=r(Ae);As=s(uo,"              "),uo.forEach(e),Qt=o(Xe,"SPAN",{style:!0});var _o=r(Qt);Es=s(_o,"with"),_o.forEach(e),Xt=o(Xe,"SPAN",{style:!0});var vo=r(Xt);ys=s(vo,":"),vo.forEach(e),Xe.forEach(e),Ps=s(h,`
`),M=o(h,"SPAN",{});var Ce=r(M);Ee=o(Ce,"SPAN",{});var $o=r(Ee);Ss=s($o,"                  "),$o.forEach(e),Zt=o(Ce,"SPAN",{style:!0});var mo=r(Zt);bs=s(mo,"github_token"),mo.forEach(e),te=o(Ce,"SPAN",{style:!0});var Ao=r(te);Ns=s(Ao,": "),Ao.forEach(e),ee=o(Ce,"SPAN",{style:!0});var Eo=r(ee);gs=s(Eo,"${{ secrets.GITHUB_TOKEN }}"),Eo.forEach(e),Ce.forEach(e),ws=s(h,`
`),D=o(h,"SPAN",{});var He=r(D);ye=o(He,"SPAN",{});var yo=r(ye);ks=s(yo,"                  "),yo.forEach(e),ae=o(He,"SPAN",{style:!0});var Po=r(ae);Fs=s(Po,"publish_dir"),Po.forEach(e),se=o(He,"SPAN",{style:!0});var So=r(se);Is=s(So,": "),So.forEach(e),ne=o(He,"SPAN",{style:!0});var bo=r(ne);Ts=s(bo,"./build"),bo.forEach(e),He.forEach(e),Gs=s(h,`
`),h.forEach(e),Fe.forEach(e),Oe=S(i),oe=o(i,"P",{});var No=r(oe);xs=s(No,`If you can understand everything that's going on here is no need to
			keep reading, otherwise here's a short summary of what this file
			does:`),No.forEach(e),Ue=S(i),y=o(i,"UL",{});var b=r(y);re=o(b,"LI",{});var rn=r(re);Pe=o(rn,"VAR",{});var go=r(Pe);Ls=s(go,"bd"),go.forEach(e),js=s(rn," : Job name I chose, you can choose whatever you want."),rn.forEach(e),Rs=S(b),O=o(b,"LI",{});var Me=r(O);Se=o(Me,"VAR",{});var wo=r(Se);Vs=s(wo,"actions/checkout@v3"),wo.forEach(e),Bs=s(Me,` : This is an official Github
				action. It will checkout our repository so that it can be used
				by the other steps. Here's the `),g(U.$$.fragment,Me),Cs=s(Me,"."),Me.forEach(e),Hs=S(b),q=o(b,"LI",{});var De=r(q);be=o(De,"VAR",{});var ko=r(be);Ms=s(ko,"peaceiris/actions-gh-pages@v3"),ko.forEach(e),Ds=s(De,` : This is an unofficial
				action that will allow us to deploy static files to the gh-pages
				branch. Here's the `),g(J.$$.fragment,De),Os=s(De,"."),De.forEach(e),Us=S(b),le=o(b,"LI",{});var ln=r(le);Ne=o(ln,"VAR",{});var Fo=r(Ne);qs=s(Fo,"if"),Fo.forEach(e),Js=s(ln,` : Checking that we are on main branch in this case.
				If you are on another branch, you can modify refs/heads/main or just
				remove the if condition.`),ln.forEach(e),Ks=S(b),pe=o(b,"LI",{});var pn=r(pe);ge=o(pn,"VAR",{});var Io=r(ge);Ys=s(Io,"github_token"),Io.forEach(e),zs=s(pn,` : This is a token that created by the action
				to authenticate in the workflow.`),pn.forEach(e),Ws=S(b),ie=o(b,"LI",{});var cn=r(ie);we=o(cn,"VAR",{});var To=r(we);Qs=s(To,"publish_dir"),To.forEach(e),Xs=s(cn,` : The directory that contains the static files
				after the build step. It takes a relative path from where your package.json
				is located.`),cn.forEach(e),b.forEach(e),qe=S(i),K=o(i,"P",{});var Ze=r(K);Zs=s(Ze,`Most of the other syntax is self-explanatory and the
			`),g(Y.$$.fragment,Ze),tn=s(Ze," does a much better job of explaining it."),Ze.forEach(e),Je=S(i),z=o(i,"P",{});var ta=r(z);en=s(ta,"Create a "),ke=o(ta,"VAR",{});var Go=r(ke);an=s(Go,".github/workflows/[whatever].yaml"),Go.forEach(e),sn=s(ta,`
			inside your repository, copy the content of this file,make the appropriate
			changes if your build step differs, and on the next push command your
			website will be automatically built and deployed.`),ta.forEach(e),this.h()},h(){c(T,"color","#116329"),c(at,"color","#24292F"),c(st,"color","#0A3069"),c(ot,"color","#0550AE"),c(rt,"color","#24292F"),c(lt,"color","#116329"),c(pt,"color","#24292F"),c(it,"color","#116329"),c(ct,"color","#24292F"),c(ft,"color","#0A3069"),c(ht,"color","#24292F"),c(dt,"color","#116329"),c(_t,"color","#24292F"),c(vt,"color","#116329"),c($t,"color","#24292F"),c(mt,"color","#116329"),c(At,"color","#24292F"),c(Et,"color","#0A3069"),c(yt,"color","#116329"),c(Pt,"color","#24292F"),c(St,"color","#24292F"),c(bt,"color","#116329"),c(Nt,"color","#24292F"),c(gt,"color","#0A3069"),c(wt,"color","#24292F"),c(kt,"color","#116329"),c(Ft,"color","#24292F"),c(It,"color","#0A3069"),c(Tt,"color","#116329"),c(Gt,"color","#24292F"),c(xt,"color","#116329"),c(Lt,"color","#24292F"),c(jt,"color","#0550AE"),c(Rt,"color","#24292F"),c(Vt,"color","#116329"),c(Bt,"color","#24292F"),c(Ct,"color","#0A3069"),c(Ht,"color","#24292F"),c(Mt,"color","#116329"),c(Dt,"color","#24292F"),c(Ot,"color","#0A3069"),c(Ut,"color","#24292F"),c(qt,"color","#116329"),c(Jt,"color","#24292F"),c(Kt,"color","#0A3069"),c(Yt,"color","#116329"),c(zt,"color","#24292F"),c(Wt,"color","#0A3069"),c(Qt,"color","#116329"),c(Xt,"color","#24292F"),c(Zt,"color","#116329"),c(te,"color","#24292F"),c(ee,"color","#0A3069"),c(ae,"color","#116329"),c(se,"color","#24292F"),c(ne,"color","#0A3069")},m(i,v){w(p,i,v),m(i,f,v),m(i,u,v),t(u,E),m(i,d,v),m(i,_,v),t(_,l),t(l,$),t($,T),t(T,ea),t($,at),t(at,aa),t($,st),t(st,sa),t(l,na),t(l,nt),t(nt,ot),t(ot,oa),t(nt,rt),t(rt,ra),t(l,la),t(l,W),t(W,fe),t(fe,pa),t(W,lt),t(lt,ia),t(W,pt),t(pt,ca),t(l,fa),t(l,G),t(G,he),t(he,ha),t(G,it),t(it,ua),t(G,ct),t(ct,da),t(G,ft),t(ft,_a),t(G,ht),t(ht,va),t(l,$a),t(l,ut),t(ut,dt),t(dt,ma),t(ut,_t),t(_t,Aa),t(l,Ea),t(l,Q),t(Q,ue),t(ue,ya),t(Q,vt),t(vt,Pa),t(Q,$t),t($t,Sa),t(l,ba),t(l,x),t(x,de),t(de,Na),t(x,mt),t(mt,ga),t(x,At),t(At,wa),t(x,Et),t(Et,ka),t(l,Fa),t(l,X),t(X,_e),t(_e,Ia),t(X,yt),t(yt,Ta),t(X,Pt),t(Pt,Ga),t(l,xa),t(l,L),t(L,St),t(St,La),t(L,bt),t(bt,ja),t(L,Nt),t(Nt,Ra),t(L,gt),t(gt,Va),t(l,Ba),t(l,j),t(j,wt),t(wt,Ca),t(j,kt),t(kt,Ha),t(j,Ft),t(Ft,Ma),t(j,It),t(It,Da),t(l,Oa),t(l,Z),t(Z,ve),t(ve,Ua),t(Z,Tt),t(Tt,qa),t(Z,Gt),t(Gt,Ja),t(l,Ka),t(l,R),t(R,$e),t($e,Ya),t(R,xt),t(xt,za),t(R,Lt),t(Lt,Wa),t(R,jt),t(jt,Qa),t(l,Xa),t(l,V),t(V,Rt),t(Rt,Za),t(V,Vt),t(Vt,ts),t(V,Bt),t(Bt,es),t(V,Ct),t(Ct,as),t(l,ss),t(l,B),t(B,Ht),t(Ht,ns),t(B,Mt),t(Mt,os),t(B,Dt),t(Dt,rs),t(B,Ot),t(Ot,ls),t(l,ps),t(l,C),t(C,Ut),t(Ut,is),t(C,qt),t(qt,cs),t(C,Jt),t(Jt,fs),t(C,Kt),t(Kt,hs),t(l,us),t(l,H),t(H,me),t(me,ds),t(H,Yt),t(Yt,_s),t(H,zt),t(zt,vs),t(H,Wt),t(Wt,$s),t(l,ms),t(l,tt),t(tt,Ae),t(Ae,As),t(tt,Qt),t(Qt,Es),t(tt,Xt),t(Xt,ys),t(l,Ps),t(l,M),t(M,Ee),t(Ee,Ss),t(M,Zt),t(Zt,bs),t(M,te),t(te,Ns),t(M,ee),t(ee,gs),t(l,ws),t(l,D),t(D,ye),t(ye,ks),t(D,ae),t(ae,Fs),t(D,se),t(se,Is),t(D,ne),t(ne,Ts),t(l,Gs),m(i,Oe,v),m(i,oe,v),t(oe,xs),m(i,Ue,v),m(i,y,v),t(y,re),t(re,Pe),t(Pe,Ls),t(re,js),t(y,Rs),t(y,O),t(O,Se),t(Se,Vs),t(O,Bs),w(U,O,null),t(O,Cs),t(y,Hs),t(y,q),t(q,be),t(be,Ms),t(q,Ds),w(J,q,null),t(q,Os),t(y,Us),t(y,le),t(le,Ne),t(Ne,qs),t(le,Js),t(y,Ks),t(y,pe),t(pe,ge),t(ge,Ys),t(pe,zs),t(y,Ws),t(y,ie),t(ie,we),t(we,Qs),t(ie,Xs),m(i,qe,v),m(i,K,v),t(K,Zs),w(Y,K,null),t(K,tn),m(i,Je,v),m(i,z,v),t(z,en),t(z,ke),t(ke,an),t(z,sn),Ke=!0},p(i,v){const Fe={};v&1&&(Fe.$$scope={dirty:v,ctx:i}),p.$set(Fe);const h={};v&1&&(h.$$scope={dirty:v,ctx:i}),U.$set(h);const et={};v&1&&(et.$$scope={dirty:v,ctx:i}),J.$set(et);const Ie={};v&1&&(Ie.$$scope={dirty:v,ctx:i}),Y.$set(Ie)},i(i){Ke||(k(p.$$.fragment,i),k(U.$$.fragment,i),k(J.$$.fragment,i),k(Y.$$.fragment,i),Ke=!0)},o(i){F(p.$$.fragment,i),F(U.$$.fragment,i),F(J.$$.fragment,i),F(Y.$$.fragment,i),Ke=!1},d(i){I(p,i),i&&e(f),i&&e(u),i&&e(d),i&&e(_),i&&e(Oe),i&&e(oe),i&&e(Ue),i&&e(y),I(U),I(J),i&&e(qe),i&&e(K),I(Y),i&&e(Je),i&&e(z)}}}function zo(A){let p,f,u,E;return p=new xo({props:{$$slots:{default:[Oo]},$$scope:{ctx:A}}}),u=new xo({props:{$$slots:{default:[Yo]},$$scope:{ctx:A}}}),{c(){N(p.$$.fragment),f=P(),N(u.$$.fragment)},l(d){g(p.$$.fragment,d),f=S(d),g(u.$$.fragment,d)},m(d,_){w(p,d,_),m(d,f,_),w(u,d,_),E=!0},p(d,_){const l={};_&1&&(l.$$scope={dirty:_,ctx:d}),p.$set(l);const $={};_&1&&($.$$scope={dirty:_,ctx:d}),u.$set($)},i(d){E||(k(p.$$.fragment,d),k(u.$$.fragment,d),E=!0)},o(d){F(p.$$.fragment,d),F(u.$$.fragment,d),E=!1},d(d){I(p,d),d&&e(f),I(u,d)}}}function Wo(A){let p,f,u,E,d,_;return p=new Vo({props:{title:"Github Pages Action",description:"Automatically deploy github pages static website with github actions",keywords:"Github Pages, Github Actions, Github, Static Website, Deploy"}}),u=new Bo({props:{$$slots:{default:[zo]},$$scope:{ctx:A}}}),d=new Co({}),{c(){N(p.$$.fragment),f=P(),N(u.$$.fragment),E=P(),N(d.$$.fragment)},l(l){g(p.$$.fragment,l),f=S(l),g(u.$$.fragment,l),E=S(l),g(d.$$.fragment,l)},m(l,$){w(p,l,$),m(l,f,$),w(u,l,$),m(l,E,$),w(d,l,$),_=!0},p(l,[$]){const T={};$&1&&(T.$$scope={dirty:$,ctx:l}),u.$set(T)},i(l){_||(k(p.$$.fragment,l),k(u.$$.fragment,l),k(d.$$.fragment,l),_=!0)},o(l){F(p.$$.fragment,l),F(u.$$.fragment,l),F(d.$$.fragment,l),_=!1},d(l){I(p,l),l&&e(f),I(u,l),l&&e(E),I(d,l)}}}class tr extends Lo{constructor(p){super(),jo(this,p,null,Wo,Ro,{})}}export{tr as default};