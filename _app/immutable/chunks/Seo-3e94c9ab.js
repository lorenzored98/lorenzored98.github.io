import{S,i as q,s as B,C as V,k as _,l as g,m as v,h as f,n as r,b as $,D as C,E as P,F as Y,f as y,t as w,w as b,a as M,x as E,c as F,G as h,y as D,z,q as I,r as A,I as j,B as L}from"./index-a4a97fa6.js";function X(o){const e=new Date(o*1e3),t=Intl.DateTimeFormat("en-GB").format(e),a=`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`;return{date:t,datetime:a}}function H(o){let e,t;const a=o[3].default,l=V(a,o,o[2],null);return{c(){e=_("a"),l&&l.c(),this.h()},l(n){e=g(n,"A",{style:!0,href:!0,rel:!0,target:!0,class:!0});var s=v(e);l&&l.l(s),s.forEach(f),this.h()},h(){r(e,"style",o[1]),r(e,"href",o[0]),r(e,"rel","noopener noreferral nofollow"),r(e,"target","_blank"),r(e,"class","svelte-9bdt8p")},m(n,s){$(n,e,s),l&&l.m(e,null),t=!0},p(n,[s]){l&&l.p&&(!t||s&4)&&C(l,a,n,n[2],t?Y(a,n[2],s,null):P(n[2]),null),(!t||s&2)&&r(e,"style",n[1]),(!t||s&1)&&r(e,"href",n[0])},i(n){t||(y(l,n),t=!0)},o(n){w(l,n),t=!1},d(n){n&&f(e),l&&l.d(n)}}}function J(o,e,t){let{$$slots:a={},$$scope:l}=e,{href:n}=e,{style:s=void 0}=e;return o.$$set=u=>{"href"in u&&t(0,n=u.href),"style"in u&&t(1,s=u.style),"$$scope"in u&&t(2,l=u.$$scope)},[n,s,l,a]}class T extends S{constructor(e){super(),q(this,e,J,H,B,{href:0,style:1})}}function K(o){let e;return{c(){e=I("lorenzopepedev@gmail.com")},l(t){e=A(t,"lorenzopepedev@gmail.com")},m(t,a){$(t,e,a)},d(t){t&&f(e)}}}function N(o){let e;return{c(){e=I("Twitter")},l(t){e=A(t,"Twitter")},m(t,a){$(t,e,a)},d(t){t&&f(e)}}}function O(o){let e;return{c(){e=I("Github")},l(t){e=A(t,"Github")},m(t,a){$(t,e,a)},d(t){t&&f(e)}}}function Q(o){let e,t,a,l,n,s,u,m,k;return a=new T({props:{style:"margin-right: 1rem;",href:"mailto:lorenzopepedev@gmail.com",$$slots:{default:[K]},$$scope:{ctx:o}}}),s=new T({props:{href:"https://twitter.com/lorenzopepe98",$$slots:{default:[N]},$$scope:{ctx:o}}}),m=new T({props:{style:"margin-left: 1rem;",href:"https://github.com/lorenzored98",$$slots:{default:[O]},$$scope:{ctx:o}}}),{c(){e=_("div"),t=_("div"),b(a.$$.fragment),l=M(),n=_("div"),b(s.$$.fragment),u=M(),b(m.$$.fragment),this.h()},l(i){e=g(i,"DIV",{class:!0});var c=v(e);t=g(c,"DIV",{class:!0});var p=v(t);E(a.$$.fragment,p),p.forEach(f),l=F(c),n=g(c,"DIV",{class:!0});var d=v(n);E(s.$$.fragment,d),u=F(d),E(m.$$.fragment,d),d.forEach(f),c.forEach(f),this.h()},h(){r(t,"class","svelte-q8fyg5"),r(n,"class","svelte-q8fyg5"),r(e,"class","container svelte-q8fyg5")},m(i,c){$(i,e,c),h(e,t),D(a,t,null),h(e,l),h(e,n),D(s,n,null),h(n,u),D(m,n,null),k=!0},p(i,[c]){const p={};c&1&&(p.$$scope={dirty:c,ctx:i}),a.$set(p);const d={};c&1&&(d.$$scope={dirty:c,ctx:i}),s.$set(d);const G={};c&1&&(G.$$scope={dirty:c,ctx:i}),m.$set(G)},i(i){k||(y(a.$$.fragment,i),y(s.$$.fragment,i),y(m.$$.fragment,i),k=!0)},o(i){w(a.$$.fragment,i),w(s.$$.fragment,i),w(m.$$.fragment,i),k=!1},d(i){i&&f(e),z(a),z(s),z(m)}}}class Z extends S{constructor(e){super(),q(this,e,null,Q,B,{})}}function R(o){let e,t,a,l;return document.title=e=o[0],{c(){t=_("meta"),a=_("meta"),l=_("meta"),this.h()},l(n){const s=j("svelte-69xwgb",document.head);t=g(s,"META",{name:!0,content:!0}),a=g(s,"META",{name:!0,content:!0}),l=g(s,"META",{name:!0,content:!0}),s.forEach(f),this.h()},h(){r(t,"name","description"),r(t,"content",o[1]),r(a,"name","keywords"),r(a,"content",o[2]),r(l,"name","author"),r(l,"content","Pepe Lorenzo")},m(n,s){h(document.head,t),h(document.head,a),h(document.head,l)},p(n,[s]){s&1&&e!==(e=n[0])&&(document.title=e),s&2&&r(t,"content",n[1]),s&4&&r(a,"content",n[2])},i:L,o:L,d(n){f(t),f(a),f(l)}}}function U(o,e,t){let{title:a}=e,{description:l}=e,{keywords:n}=e;return o.$$set=s=>{"title"in s&&t(0,a=s.title),"description"in s&&t(1,l=s.description),"keywords"in s&&t(2,n=s.keywords)},[a,l,n]}class x extends S{constructor(e){super(),q(this,e,U,R,B,{title:0,description:1,keywords:2})}}export{T as B,x as S,Z as a,X as t};
