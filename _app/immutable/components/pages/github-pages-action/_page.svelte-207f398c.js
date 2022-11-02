import{S as vr,i as $r,s as Er,w as F,a as P,x as g,c as S,y as w,b as E,f as k,t as D,z as I,h as e,k as n,q as a,l as o,m as r,r as s,G as t,p as i}from"../../../chunks/index-a4a97fa6.js";import{S as Ar,B as Ln}from"../../../chunks/Seo-3e94c9ab.js";import{M as mr,F as yr,S as _r,T as Pr,a as Sr}from"../../../chunks/Footer-cc357b56.js";function Nr(A){let p;return{c(){p=a("Github Pages Action")},l(f){p=s(f,"Github Pages Action")},m(f,u){E(f,p,u)},d(f){f&&e(p)}}}function br(A){let p,f,u,m,d;return p=new Pr({props:{timestamp:1661509919,$$slots:{default:[Nr]},$$scope:{ctx:A}}}),{c(){F(p.$$.fragment),f=P(),u=n("p"),m=a(`A simple and minimal file for building your static Github pages
			website via Github actions.`)},l(_){g(p.$$.fragment,_),f=S(_),u=o(_,"P",{});var l=r(u);m=s(l,`A simple and minimal file for building your static Github pages
			website via Github actions.`),l.forEach(e)},m(_,l){w(p,_,l),E(_,f,l),E(_,u,l),t(u,m),d=!0},p(_,l){const $={};l&1&&($.$$scope={dirty:l,ctx:_}),p.$set($)},i(_){d||(k(p.$$.fragment,_),d=!0)},o(_){D(p.$$.fragment,_),d=!1},d(_){I(p,_),_&&e(f),_&&e(u)}}}function Fr(A){let p;return{c(){p=a("The YAML File")},l(f){p=s(f,"The YAML File")},m(f,u){E(f,p,u)},d(f){f&&e(p)}}}function gr(A){let p;return{c(){p=a("repo")},l(f){p=s(f,"repo")},m(f,u){E(f,p,u)},d(f){f&&e(p)}}}function wr(A){let p;return{c(){p=a("repo")},l(f){p=s(f,"repo")},m(f,u){E(f,p,u)},d(f){f&&e(p)}}}function kr(A){let p;return{c(){p=a("workflow syntax doc")},l(f){p=s(f,"workflow syntax doc")},m(f,u){E(f,p,u)},d(f){f&&e(p)}}}function Dr(A){let p,f,u,m,d,_,l,$,T,ua,st,da,Pe,_a,nt,va,$a,ot,rt,Ea,lt,Aa,ma,Q,Se,ya,pt,Pa,it,Sa,Na,b,Ne,ba,ct,Fa,ft,ga,ht,wa,ut,ka,dt,Da,Ia,_t,vt,Ta,$t,Ga,xa,X,be,La,Et,ja,At,Ra,Ba,G,Fe,Va,mt,Ca,yt,Ha,ge,Ma,Pt,Oa,Ua,Z,we,qa,St,Ja,Nt,Ka,Ya,x,bt,za,Ft,Wa,gt,Qa,ke,Xa,wt,Za,ts,L,kt,es,Dt,as,It,ss,De,ns,Tt,os,rs,tt,Ie,ls,Gt,ps,xt,is,cs,j,Te,fs,Lt,hs,jt,us,Ge,ds,Rt,_s,vs,R,Bt,$s,Vt,Es,Ct,As,xe,ms,Ht,ys,Ps,B,Mt,Ss,Ot,Ns,Ut,bs,Le,Fs,qt,gs,ws,V,Jt,ks,Kt,Ds,Yt,Is,je,Ts,zt,Gs,xs,C,Re,Ls,Wt,js,Qt,Rs,Be,Bs,Xt,Vs,Cs,et,Ve,Hs,Zt,Ms,te,Os,Us,H,Ce,qs,ee,Js,ae,Ks,He,Ys,se,zs,Ws,M,Me,Qs,ne,Xs,oe,Zs,Oe,tn,re,en,an,ea,le,sn,aa,y,pe,Ue,nn,on,rn,O,qe,ln,pn,U,cn,fn,q,Je,hn,un,J,dn,_n,ie,Ke,vn,$n,En,ce,Ye,An,mn,yn,fe,ze,Pn,Sn,sa,K,Nn,Y,bn,na,z,Fn,We,gn,wn,oa;return p=new Sr({props:{id:"yaml-file",$$slots:{default:[Fr]},$$scope:{ctx:A}}}),U=new Ln({props:{href:"https://github.com/actions/checkout",$$slots:{default:[gr]},$$scope:{ctx:A}}}),J=new Ln({props:{href:"https://github.com/peaceiris/actions-gh-pages",$$slots:{default:[wr]},$$scope:{ctx:A}}}),Y=new Ln({props:{href:"https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions",$$slots:{default:[kr]},$$scope:{ctx:A}}}),{c(){F(p.$$.fragment),f=P(),u=n("p"),m=a("This file is intented to work with a node/npm based build step."),d=P(),_=n("pre"),l=n("code"),$=n("span"),T=n("span"),ua=a("name"),st=n("span"),da=a(":"),Pe=n("span"),_a=a(" "),nt=n("span"),va=a("Build And Deploy"),$a=a(`
`),ot=n("span"),rt=n("span"),Ea=a("on"),lt=n("span"),Aa=a(":"),ma=a(`
`),Q=n("span"),Se=n("span"),ya=a("    "),pt=n("span"),Pa=a("push"),it=n("span"),Sa=a(":"),Na=a(`
`),b=n("span"),Ne=n("span"),ba=a("        "),ct=n("span"),Fa=a("branches"),ft=n("span"),ga=a(":"),ht=n("span"),wa=a(" ["),ut=n("span"),ka=a("main"),dt=n("span"),Da=a("]"),Ia=a(`
`),_t=n("span"),vt=n("span"),Ta=a("jobs"),$t=n("span"),Ga=a(":"),xa=a(`
`),X=n("span"),be=n("span"),La=a("    "),Et=n("span"),ja=a("bd"),At=n("span"),Ra=a(":"),Ba=a(`
`),G=n("span"),Fe=n("span"),Va=a("        "),mt=n("span"),Ca=a("runs-on"),yt=n("span"),Ha=a(":"),ge=n("span"),Ma=a(" "),Pt=n("span"),Oa=a("ubuntu-latest"),Ua=a(`
`),Z=n("span"),we=n("span"),qa=a("        "),St=n("span"),Ja=a("steps"),Nt=n("span"),Ka=a(":"),Ya=a(`
`),x=n("span"),bt=n("span"),za=a("            - "),Ft=n("span"),Wa=a("uses"),gt=n("span"),Qa=a(":"),ke=n("span"),Xa=a(" "),wt=n("span"),Za=a("actions/checkout@v3"),ts=a(`
`),L=n("span"),kt=n("span"),es=a("            - "),Dt=n("span"),as=a("uses"),It=n("span"),ss=a(":"),De=n("span"),ns=a(" "),Tt=n("span"),os=a("actions/setup-node@v3"),rs=a(`
`),tt=n("span"),Ie=n("span"),ls=a("              "),Gt=n("span"),ps=a("with"),xt=n("span"),is=a(":"),cs=a(`
`),j=n("span"),Te=n("span"),fs=a("                  "),Lt=n("span"),hs=a("node-version"),jt=n("span"),us=a(":"),Ge=n("span"),ds=a(" "),Rt=n("span"),_s=a("16"),vs=a(`
`),R=n("span"),Bt=n("span"),$s=a("            - "),Vt=n("span"),Es=a("run"),Ct=n("span"),As=a(":"),xe=n("span"),ms=a(" "),Ht=n("span"),ys=a("npm install"),Ps=a(`
`),B=n("span"),Mt=n("span"),Ss=a("            - "),Ot=n("span"),Ns=a("run"),Ut=n("span"),bs=a(":"),Le=n("span"),Fs=a(" "),qt=n("span"),gs=a("npm run build"),ws=a(`
`),V=n("span"),Jt=n("span"),ks=a("            - "),Kt=n("span"),Ds=a("uses"),Yt=n("span"),Is=a(":"),je=n("span"),Ts=a(" "),zt=n("span"),Gs=a("peaceiris/actions-gh-pages@v3"),xs=a(`
`),C=n("span"),Re=n("span"),Ls=a("              "),Wt=n("span"),js=a("if"),Qt=n("span"),Rs=a(":"),Be=n("span"),Bs=a(" "),Xt=n("span"),Vs=a("${{ github.ref == 'refs/heads/main' }}"),Cs=a(`
`),et=n("span"),Ve=n("span"),Hs=a("              "),Zt=n("span"),Ms=a("with"),te=n("span"),Os=a(":"),Us=a(`
`),H=n("span"),Ce=n("span"),qs=a("                  "),ee=n("span"),Js=a("github_token"),ae=n("span"),Ks=a(":"),He=n("span"),Ys=a(" "),se=n("span"),zs=a("${{ secrets.GITHUB_TOKEN }}"),Ws=a(`
`),M=n("span"),Me=n("span"),Qs=a("                  "),ne=n("span"),Xs=a("publish_dir"),oe=n("span"),Zs=a(":"),Oe=n("span"),tn=a(" "),re=n("span"),en=a("./build"),an=a(`
`),ea=P(),le=n("p"),sn=a(`If you can understand everything that's going on here is no need to
			keep reading, otherwise here's a short summary of what this file
			does:`),aa=P(),y=n("ul"),pe=n("li"),Ue=n("var"),nn=a("bd"),on=a(" : Job name I chose, you can choose whatever you want."),rn=P(),O=n("li"),qe=n("var"),ln=a("actions/checkout@v3"),pn=a(` : This is an official Github
				action. It will checkout our repository so that it can be used
				by the other steps. Here's the `),F(U.$$.fragment),cn=a("."),fn=P(),q=n("li"),Je=n("var"),hn=a("peaceiris/actions-gh-pages@v3"),un=a(` : This is an unofficial
				action that will allow us to deploy static files to the gh-pages
				branch. Here's the `),F(J.$$.fragment),dn=a("."),_n=P(),ie=n("li"),Ke=n("var"),vn=a("if"),$n=a(` : Checking that we are on main branch in this case.
				If you are on another branch, you can modify refs/heads/main or just
				remove the if condition.`),En=P(),ce=n("li"),Ye=n("var"),An=a("github_token"),mn=a(` : This is a token that created by the action
				to authenticate in the workflow.`),yn=P(),fe=n("li"),ze=n("var"),Pn=a("publish_dir"),Sn=a(` : The directory that contains the static files
				after the build step. It takes a relative path from where your package.json
				is located.`),sa=P(),K=n("p"),Nn=a(`Most of the other syntax is self-explanatory and the
			`),F(Y.$$.fragment),bn=a(" does a much better job of explaining it."),na=P(),z=n("p"),Fn=a("Create a "),We=n("var"),gn=a(".github/workflows/[whatever].yaml"),wn=a(`
			inside your repository, copy the content of this file,make the appropriate
			changes if your build step differs, and on the next push command your
			website will be automatically built and deployed.`),this.h()},l(c){g(p.$$.fragment,c),f=S(c),u=o(c,"P",{});var v=r(u);m=s(v,"This file is intented to work with a node/npm based build step."),v.forEach(e),d=S(c),_=o(c,"PRE",{});var Qe=r(_);l=o(Qe,"CODE",{});var h=r(l);$=o(h,"SPAN",{});var W=r($);T=o(W,"SPAN",{style:!0});var Xe=r(T);ua=s(Xe,"name"),Xe.forEach(e),st=o(W,"SPAN",{style:!0});var jn=r(st);da=s(jn,":"),jn.forEach(e),Pe=o(W,"SPAN",{});var Rn=r(Pe);_a=s(Rn," "),Rn.forEach(e),nt=o(W,"SPAN",{style:!0});var Bn=r(nt);va=s(Bn,"Build And Deploy"),Bn.forEach(e),W.forEach(e),$a=s(h,`
`),ot=o(h,"SPAN",{});var kn=r(ot);rt=o(kn,"SPAN",{style:!0});var Vn=r(rt);Ea=s(Vn,"on"),Vn.forEach(e),lt=o(kn,"SPAN",{style:!0});var Cn=r(lt);Aa=s(Cn,":"),Cn.forEach(e),kn.forEach(e),ma=s(h,`
`),Q=o(h,"SPAN",{});var ra=r(Q);Se=o(ra,"SPAN",{});var Hn=r(Se);ya=s(Hn,"    "),Hn.forEach(e),pt=o(ra,"SPAN",{style:!0});var Mn=r(pt);Pa=s(Mn,"push"),Mn.forEach(e),it=o(ra,"SPAN",{style:!0});var On=r(it);Sa=s(On,":"),On.forEach(e),ra.forEach(e),Na=s(h,`
`),b=o(h,"SPAN",{});var at=r(b);Ne=o(at,"SPAN",{});var Un=r(Ne);ba=s(Un,"        "),Un.forEach(e),ct=o(at,"SPAN",{style:!0});var qn=r(ct);Fa=s(qn,"branches"),qn.forEach(e),ft=o(at,"SPAN",{style:!0});var Jn=r(ft);ga=s(Jn,":"),Jn.forEach(e),ht=o(at,"SPAN",{style:!0});var Kn=r(ht);wa=s(Kn," ["),Kn.forEach(e),ut=o(at,"SPAN",{style:!0});var Yn=r(ut);ka=s(Yn,"main"),Yn.forEach(e),dt=o(at,"SPAN",{style:!0});var zn=r(dt);Da=s(zn,"]"),zn.forEach(e),at.forEach(e),Ia=s(h,`
`),_t=o(h,"SPAN",{});var Dn=r(_t);vt=o(Dn,"SPAN",{style:!0});var Wn=r(vt);Ta=s(Wn,"jobs"),Wn.forEach(e),$t=o(Dn,"SPAN",{style:!0});var Qn=r($t);Ga=s(Qn,":"),Qn.forEach(e),Dn.forEach(e),xa=s(h,`
`),X=o(h,"SPAN",{});var la=r(X);be=o(la,"SPAN",{});var Xn=r(be);La=s(Xn,"    "),Xn.forEach(e),Et=o(la,"SPAN",{style:!0});var Zn=r(Et);ja=s(Zn,"bd"),Zn.forEach(e),At=o(la,"SPAN",{style:!0});var to=r(At);Ra=s(to,":"),to.forEach(e),la.forEach(e),Ba=s(h,`
`),G=o(h,"SPAN",{});var he=r(G);Fe=o(he,"SPAN",{});var eo=r(Fe);Va=s(eo,"        "),eo.forEach(e),mt=o(he,"SPAN",{style:!0});var ao=r(mt);Ca=s(ao,"runs-on"),ao.forEach(e),yt=o(he,"SPAN",{style:!0});var so=r(yt);Ha=s(so,":"),so.forEach(e),ge=o(he,"SPAN",{});var no=r(ge);Ma=s(no," "),no.forEach(e),Pt=o(he,"SPAN",{style:!0});var oo=r(Pt);Oa=s(oo,"ubuntu-latest"),oo.forEach(e),he.forEach(e),Ua=s(h,`
`),Z=o(h,"SPAN",{});var pa=r(Z);we=o(pa,"SPAN",{});var ro=r(we);qa=s(ro,"        "),ro.forEach(e),St=o(pa,"SPAN",{style:!0});var lo=r(St);Ja=s(lo,"steps"),lo.forEach(e),Nt=o(pa,"SPAN",{style:!0});var po=r(Nt);Ka=s(po,":"),po.forEach(e),pa.forEach(e),Ya=s(h,`
`),x=o(h,"SPAN",{});var ue=r(x);bt=o(ue,"SPAN",{style:!0});var io=r(bt);za=s(io,"            - "),io.forEach(e),Ft=o(ue,"SPAN",{style:!0});var co=r(Ft);Wa=s(co,"uses"),co.forEach(e),gt=o(ue,"SPAN",{style:!0});var fo=r(gt);Qa=s(fo,":"),fo.forEach(e),ke=o(ue,"SPAN",{});var ho=r(ke);Xa=s(ho," "),ho.forEach(e),wt=o(ue,"SPAN",{style:!0});var uo=r(wt);Za=s(uo,"actions/checkout@v3"),uo.forEach(e),ue.forEach(e),ts=s(h,`
`),L=o(h,"SPAN",{});var de=r(L);kt=o(de,"SPAN",{style:!0});var _o=r(kt);es=s(_o,"            - "),_o.forEach(e),Dt=o(de,"SPAN",{style:!0});var vo=r(Dt);as=s(vo,"uses"),vo.forEach(e),It=o(de,"SPAN",{style:!0});var $o=r(It);ss=s($o,":"),$o.forEach(e),De=o(de,"SPAN",{});var Eo=r(De);ns=s(Eo," "),Eo.forEach(e),Tt=o(de,"SPAN",{style:!0});var Ao=r(Tt);os=s(Ao,"actions/setup-node@v3"),Ao.forEach(e),de.forEach(e),rs=s(h,`
`),tt=o(h,"SPAN",{});var ia=r(tt);Ie=o(ia,"SPAN",{});var mo=r(Ie);ls=s(mo,"              "),mo.forEach(e),Gt=o(ia,"SPAN",{style:!0});var yo=r(Gt);ps=s(yo,"with"),yo.forEach(e),xt=o(ia,"SPAN",{style:!0});var Po=r(xt);is=s(Po,":"),Po.forEach(e),ia.forEach(e),cs=s(h,`
`),j=o(h,"SPAN",{});var _e=r(j);Te=o(_e,"SPAN",{});var So=r(Te);fs=s(So,"                  "),So.forEach(e),Lt=o(_e,"SPAN",{style:!0});var No=r(Lt);hs=s(No,"node-version"),No.forEach(e),jt=o(_e,"SPAN",{style:!0});var bo=r(jt);us=s(bo,":"),bo.forEach(e),Ge=o(_e,"SPAN",{});var Fo=r(Ge);ds=s(Fo," "),Fo.forEach(e),Rt=o(_e,"SPAN",{style:!0});var go=r(Rt);_s=s(go,"16"),go.forEach(e),_e.forEach(e),vs=s(h,`
`),R=o(h,"SPAN",{});var ve=r(R);Bt=o(ve,"SPAN",{style:!0});var wo=r(Bt);$s=s(wo,"            - "),wo.forEach(e),Vt=o(ve,"SPAN",{style:!0});var ko=r(Vt);Es=s(ko,"run"),ko.forEach(e),Ct=o(ve,"SPAN",{style:!0});var Do=r(Ct);As=s(Do,":"),Do.forEach(e),xe=o(ve,"SPAN",{});var Io=r(xe);ms=s(Io," "),Io.forEach(e),Ht=o(ve,"SPAN",{style:!0});var To=r(Ht);ys=s(To,"npm install"),To.forEach(e),ve.forEach(e),Ps=s(h,`
`),B=o(h,"SPAN",{});var $e=r(B);Mt=o($e,"SPAN",{style:!0});var Go=r(Mt);Ss=s(Go,"            - "),Go.forEach(e),Ot=o($e,"SPAN",{style:!0});var xo=r(Ot);Ns=s(xo,"run"),xo.forEach(e),Ut=o($e,"SPAN",{style:!0});var Lo=r(Ut);bs=s(Lo,":"),Lo.forEach(e),Le=o($e,"SPAN",{});var jo=r(Le);Fs=s(jo," "),jo.forEach(e),qt=o($e,"SPAN",{style:!0});var Ro=r(qt);gs=s(Ro,"npm run build"),Ro.forEach(e),$e.forEach(e),ws=s(h,`
`),V=o(h,"SPAN",{});var Ee=r(V);Jt=o(Ee,"SPAN",{style:!0});var Bo=r(Jt);ks=s(Bo,"            - "),Bo.forEach(e),Kt=o(Ee,"SPAN",{style:!0});var Vo=r(Kt);Ds=s(Vo,"uses"),Vo.forEach(e),Yt=o(Ee,"SPAN",{style:!0});var Co=r(Yt);Is=s(Co,":"),Co.forEach(e),je=o(Ee,"SPAN",{});var Ho=r(je);Ts=s(Ho," "),Ho.forEach(e),zt=o(Ee,"SPAN",{style:!0});var Mo=r(zt);Gs=s(Mo,"peaceiris/actions-gh-pages@v3"),Mo.forEach(e),Ee.forEach(e),xs=s(h,`
`),C=o(h,"SPAN",{});var Ae=r(C);Re=o(Ae,"SPAN",{});var Oo=r(Re);Ls=s(Oo,"              "),Oo.forEach(e),Wt=o(Ae,"SPAN",{style:!0});var Uo=r(Wt);js=s(Uo,"if"),Uo.forEach(e),Qt=o(Ae,"SPAN",{style:!0});var qo=r(Qt);Rs=s(qo,":"),qo.forEach(e),Be=o(Ae,"SPAN",{});var Jo=r(Be);Bs=s(Jo," "),Jo.forEach(e),Xt=o(Ae,"SPAN",{style:!0});var Ko=r(Xt);Vs=s(Ko,"${{ github.ref == 'refs/heads/main' }}"),Ko.forEach(e),Ae.forEach(e),Cs=s(h,`
`),et=o(h,"SPAN",{});var ca=r(et);Ve=o(ca,"SPAN",{});var Yo=r(Ve);Hs=s(Yo,"              "),Yo.forEach(e),Zt=o(ca,"SPAN",{style:!0});var zo=r(Zt);Ms=s(zo,"with"),zo.forEach(e),te=o(ca,"SPAN",{style:!0});var Wo=r(te);Os=s(Wo,":"),Wo.forEach(e),ca.forEach(e),Us=s(h,`
`),H=o(h,"SPAN",{});var me=r(H);Ce=o(me,"SPAN",{});var Qo=r(Ce);qs=s(Qo,"                  "),Qo.forEach(e),ee=o(me,"SPAN",{style:!0});var Xo=r(ee);Js=s(Xo,"github_token"),Xo.forEach(e),ae=o(me,"SPAN",{style:!0});var Zo=r(ae);Ks=s(Zo,":"),Zo.forEach(e),He=o(me,"SPAN",{});var tr=r(He);Ys=s(tr," "),tr.forEach(e),se=o(me,"SPAN",{style:!0});var er=r(se);zs=s(er,"${{ secrets.GITHUB_TOKEN }}"),er.forEach(e),me.forEach(e),Ws=s(h,`
`),M=o(h,"SPAN",{});var ye=r(M);Me=o(ye,"SPAN",{});var ar=r(Me);Qs=s(ar,"                  "),ar.forEach(e),ne=o(ye,"SPAN",{style:!0});var sr=r(ne);Xs=s(sr,"publish_dir"),sr.forEach(e),oe=o(ye,"SPAN",{style:!0});var nr=r(oe);Zs=s(nr,":"),nr.forEach(e),Oe=o(ye,"SPAN",{});var or=r(Oe);tn=s(or," "),or.forEach(e),re=o(ye,"SPAN",{style:!0});var rr=r(re);en=s(rr,"./build"),rr.forEach(e),ye.forEach(e),an=s(h,`
`),h.forEach(e),Qe.forEach(e),ea=S(c),le=o(c,"P",{});var lr=r(le);sn=s(lr,`If you can understand everything that's going on here is no need to
			keep reading, otherwise here's a short summary of what this file
			does:`),lr.forEach(e),aa=S(c),y=o(c,"UL",{});var N=r(y);pe=o(N,"LI",{});var In=r(pe);Ue=o(In,"VAR",{});var pr=r(Ue);nn=s(pr,"bd"),pr.forEach(e),on=s(In," : Job name I chose, you can choose whatever you want."),In.forEach(e),rn=S(N),O=o(N,"LI",{});var Ze=r(O);qe=o(Ze,"VAR",{});var ir=r(qe);ln=s(ir,"actions/checkout@v3"),ir.forEach(e),pn=s(Ze,` : This is an official Github
				action. It will checkout our repository so that it can be used
				by the other steps. Here's the `),g(U.$$.fragment,Ze),cn=s(Ze,"."),Ze.forEach(e),fn=S(N),q=o(N,"LI",{});var ta=r(q);Je=o(ta,"VAR",{});var cr=r(Je);hn=s(cr,"peaceiris/actions-gh-pages@v3"),cr.forEach(e),un=s(ta,` : This is an unofficial
				action that will allow us to deploy static files to the gh-pages
				branch. Here's the `),g(J.$$.fragment,ta),dn=s(ta,"."),ta.forEach(e),_n=S(N),ie=o(N,"LI",{});var Tn=r(ie);Ke=o(Tn,"VAR",{});var fr=r(Ke);vn=s(fr,"if"),fr.forEach(e),$n=s(Tn,` : Checking that we are on main branch in this case.
				If you are on another branch, you can modify refs/heads/main or just
				remove the if condition.`),Tn.forEach(e),En=S(N),ce=o(N,"LI",{});var Gn=r(ce);Ye=o(Gn,"VAR",{});var hr=r(Ye);An=s(hr,"github_token"),hr.forEach(e),mn=s(Gn,` : This is a token that created by the action
				to authenticate in the workflow.`),Gn.forEach(e),yn=S(N),fe=o(N,"LI",{});var xn=r(fe);ze=o(xn,"VAR",{});var ur=r(ze);Pn=s(ur,"publish_dir"),ur.forEach(e),Sn=s(xn,` : The directory that contains the static files
				after the build step. It takes a relative path from where your package.json
				is located.`),xn.forEach(e),N.forEach(e),sa=S(c),K=o(c,"P",{});var fa=r(K);Nn=s(fa,`Most of the other syntax is self-explanatory and the
			`),g(Y.$$.fragment,fa),bn=s(fa," does a much better job of explaining it."),fa.forEach(e),na=S(c),z=o(c,"P",{});var ha=r(z);Fn=s(ha,"Create a "),We=o(ha,"VAR",{});var dr=r(We);gn=s(dr,".github/workflows/[whatever].yaml"),dr.forEach(e),wn=s(ha,`
			inside your repository, copy the content of this file,make the appropriate
			changes if your build step differs, and on the next push command your
			website will be automatically built and deployed.`),ha.forEach(e),this.h()},h(){i(T,"color","#D32F2F"),i(st,"color","#D32F2F"),i(nt,"color","#22863A"),i(rt,"color","#1976D2"),i(lt,"color","#D32F2F"),i(pt,"color","#D32F2F"),i(it,"color","#D32F2F"),i(ct,"color","#D32F2F"),i(ft,"color","#D32F2F"),i(ht,"color","#24292EFF"),i(ut,"color","#2B5581"),i(dt,"color","#24292EFF"),i(vt,"color","#D32F2F"),i($t,"color","#D32F2F"),i(Et,"color","#D32F2F"),i(At,"color","#D32F2F"),i(mt,"color","#D32F2F"),i(yt,"color","#D32F2F"),i(Pt,"color","#22863A"),i(St,"color","#D32F2F"),i(Nt,"color","#D32F2F"),i(bt,"color","#24292EFF"),i(Ft,"color","#D32F2F"),i(gt,"color","#D32F2F"),i(wt,"color","#22863A"),i(kt,"color","#24292EFF"),i(Dt,"color","#D32F2F"),i(It,"color","#D32F2F"),i(Tt,"color","#22863A"),i(Gt,"color","#D32F2F"),i(xt,"color","#D32F2F"),i(Lt,"color","#D32F2F"),i(jt,"color","#D32F2F"),i(Rt,"color","#1976D2"),i(Bt,"color","#24292EFF"),i(Vt,"color","#D32F2F"),i(Ct,"color","#D32F2F"),i(Ht,"color","#22863A"),i(Mt,"color","#24292EFF"),i(Ot,"color","#D32F2F"),i(Ut,"color","#D32F2F"),i(qt,"color","#22863A"),i(Jt,"color","#24292EFF"),i(Kt,"color","#D32F2F"),i(Yt,"color","#D32F2F"),i(zt,"color","#22863A"),i(Wt,"color","#D32F2F"),i(Qt,"color","#D32F2F"),i(Xt,"color","#22863A"),i(Zt,"color","#D32F2F"),i(te,"color","#D32F2F"),i(ee,"color","#D32F2F"),i(ae,"color","#D32F2F"),i(se,"color","#22863A"),i(ne,"color","#D32F2F"),i(oe,"color","#D32F2F"),i(re,"color","#22863A")},m(c,v){w(p,c,v),E(c,f,v),E(c,u,v),t(u,m),E(c,d,v),E(c,_,v),t(_,l),t(l,$),t($,T),t(T,ua),t($,st),t(st,da),t($,Pe),t(Pe,_a),t($,nt),t(nt,va),t(l,$a),t(l,ot),t(ot,rt),t(rt,Ea),t(ot,lt),t(lt,Aa),t(l,ma),t(l,Q),t(Q,Se),t(Se,ya),t(Q,pt),t(pt,Pa),t(Q,it),t(it,Sa),t(l,Na),t(l,b),t(b,Ne),t(Ne,ba),t(b,ct),t(ct,Fa),t(b,ft),t(ft,ga),t(b,ht),t(ht,wa),t(b,ut),t(ut,ka),t(b,dt),t(dt,Da),t(l,Ia),t(l,_t),t(_t,vt),t(vt,Ta),t(_t,$t),t($t,Ga),t(l,xa),t(l,X),t(X,be),t(be,La),t(X,Et),t(Et,ja),t(X,At),t(At,Ra),t(l,Ba),t(l,G),t(G,Fe),t(Fe,Va),t(G,mt),t(mt,Ca),t(G,yt),t(yt,Ha),t(G,ge),t(ge,Ma),t(G,Pt),t(Pt,Oa),t(l,Ua),t(l,Z),t(Z,we),t(we,qa),t(Z,St),t(St,Ja),t(Z,Nt),t(Nt,Ka),t(l,Ya),t(l,x),t(x,bt),t(bt,za),t(x,Ft),t(Ft,Wa),t(x,gt),t(gt,Qa),t(x,ke),t(ke,Xa),t(x,wt),t(wt,Za),t(l,ts),t(l,L),t(L,kt),t(kt,es),t(L,Dt),t(Dt,as),t(L,It),t(It,ss),t(L,De),t(De,ns),t(L,Tt),t(Tt,os),t(l,rs),t(l,tt),t(tt,Ie),t(Ie,ls),t(tt,Gt),t(Gt,ps),t(tt,xt),t(xt,is),t(l,cs),t(l,j),t(j,Te),t(Te,fs),t(j,Lt),t(Lt,hs),t(j,jt),t(jt,us),t(j,Ge),t(Ge,ds),t(j,Rt),t(Rt,_s),t(l,vs),t(l,R),t(R,Bt),t(Bt,$s),t(R,Vt),t(Vt,Es),t(R,Ct),t(Ct,As),t(R,xe),t(xe,ms),t(R,Ht),t(Ht,ys),t(l,Ps),t(l,B),t(B,Mt),t(Mt,Ss),t(B,Ot),t(Ot,Ns),t(B,Ut),t(Ut,bs),t(B,Le),t(Le,Fs),t(B,qt),t(qt,gs),t(l,ws),t(l,V),t(V,Jt),t(Jt,ks),t(V,Kt),t(Kt,Ds),t(V,Yt),t(Yt,Is),t(V,je),t(je,Ts),t(V,zt),t(zt,Gs),t(l,xs),t(l,C),t(C,Re),t(Re,Ls),t(C,Wt),t(Wt,js),t(C,Qt),t(Qt,Rs),t(C,Be),t(Be,Bs),t(C,Xt),t(Xt,Vs),t(l,Cs),t(l,et),t(et,Ve),t(Ve,Hs),t(et,Zt),t(Zt,Ms),t(et,te),t(te,Os),t(l,Us),t(l,H),t(H,Ce),t(Ce,qs),t(H,ee),t(ee,Js),t(H,ae),t(ae,Ks),t(H,He),t(He,Ys),t(H,se),t(se,zs),t(l,Ws),t(l,M),t(M,Me),t(Me,Qs),t(M,ne),t(ne,Xs),t(M,oe),t(oe,Zs),t(M,Oe),t(Oe,tn),t(M,re),t(re,en),t(l,an),E(c,ea,v),E(c,le,v),t(le,sn),E(c,aa,v),E(c,y,v),t(y,pe),t(pe,Ue),t(Ue,nn),t(pe,on),t(y,rn),t(y,O),t(O,qe),t(qe,ln),t(O,pn),w(U,O,null),t(O,cn),t(y,fn),t(y,q),t(q,Je),t(Je,hn),t(q,un),w(J,q,null),t(q,dn),t(y,_n),t(y,ie),t(ie,Ke),t(Ke,vn),t(ie,$n),t(y,En),t(y,ce),t(ce,Ye),t(Ye,An),t(ce,mn),t(y,yn),t(y,fe),t(fe,ze),t(ze,Pn),t(fe,Sn),E(c,sa,v),E(c,K,v),t(K,Nn),w(Y,K,null),t(K,bn),E(c,na,v),E(c,z,v),t(z,Fn),t(z,We),t(We,gn),t(z,wn),oa=!0},p(c,v){const Qe={};v&1&&(Qe.$$scope={dirty:v,ctx:c}),p.$set(Qe);const h={};v&1&&(h.$$scope={dirty:v,ctx:c}),U.$set(h);const W={};v&1&&(W.$$scope={dirty:v,ctx:c}),J.$set(W);const Xe={};v&1&&(Xe.$$scope={dirty:v,ctx:c}),Y.$set(Xe)},i(c){oa||(k(p.$$.fragment,c),k(U.$$.fragment,c),k(J.$$.fragment,c),k(Y.$$.fragment,c),oa=!0)},o(c){D(p.$$.fragment,c),D(U.$$.fragment,c),D(J.$$.fragment,c),D(Y.$$.fragment,c),oa=!1},d(c){I(p,c),c&&e(f),c&&e(u),c&&e(d),c&&e(_),c&&e(ea),c&&e(le),c&&e(aa),c&&e(y),I(U),I(J),c&&e(sa),c&&e(K),I(Y),c&&e(na),c&&e(z)}}}function Ir(A){let p,f,u,m;return p=new _r({props:{$$slots:{default:[br]},$$scope:{ctx:A}}}),u=new _r({props:{$$slots:{default:[Dr]},$$scope:{ctx:A}}}),{c(){F(p.$$.fragment),f=P(),F(u.$$.fragment)},l(d){g(p.$$.fragment,d),f=S(d),g(u.$$.fragment,d)},m(d,_){w(p,d,_),E(d,f,_),w(u,d,_),m=!0},p(d,_){const l={};_&1&&(l.$$scope={dirty:_,ctx:d}),p.$set(l);const $={};_&1&&($.$$scope={dirty:_,ctx:d}),u.$set($)},i(d){m||(k(p.$$.fragment,d),k(u.$$.fragment,d),m=!0)},o(d){D(p.$$.fragment,d),D(u.$$.fragment,d),m=!1},d(d){I(p,d),d&&e(f),I(u,d)}}}function Tr(A){let p,f,u,m,d,_;return p=new Ar({props:{title:"Github Pages Action",description:"Automatically deploy github pages static website with github actions",keywords:"Github Pages, Github Actions, Github, Static Website, Deploy"}}),u=new mr({props:{$$slots:{default:[Ir]},$$scope:{ctx:A}}}),d=new yr({}),{c(){F(p.$$.fragment),f=P(),F(u.$$.fragment),m=P(),F(d.$$.fragment)},l(l){g(p.$$.fragment,l),f=S(l),g(u.$$.fragment,l),m=S(l),g(d.$$.fragment,l)},m(l,$){w(p,l,$),E(l,f,$),w(u,l,$),E(l,m,$),w(d,l,$),_=!0},p(l,[$]){const T={};$&1&&(T.$$scope={dirty:$,ctx:l}),u.$set(T)},i(l){_||(k(p.$$.fragment,l),k(u.$$.fragment,l),k(d.$$.fragment,l),_=!0)},o(l){D(p.$$.fragment,l),D(u.$$.fragment,l),D(d.$$.fragment,l),_=!1},d(l){I(p,l),l&&e(f),I(u,l),l&&e(m),I(d,l)}}}class jr extends vr{constructor(p){super(),$r(this,p,null,Tr,Er,{})}}export{jr as default};
