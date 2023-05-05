import{S as Ye,i as et,s as tt,w as R,a as w,x as L,c as g,y as C,b as u,f as V,t as D,z as j,h as i,k as f,q as a,l as m,m as h,r as s,G as t}from"../../../chunks/index-cc72a6df.js";import{M as nt,S as it,T as ot}from"../../../chunks/Main-b5bd4390.js";import{S as at}from"../../../chunks/Seo-89a4dbfb.js";import{B as Xe}from"../../../chunks/BlankLink-67e3b987.js";function st(v){let n;return{c(){n=a("Win32 let me draw")},l(r){n=s(r,"Win32 let me draw")},m(r,o){u(r,n,o)},d(r){r&&i(n)}}}function rt(v){let n;return{c(){n=a("some code")},l(r){n=s(r,"some code")},m(r,o){u(r,n,o)},d(r){r&&i(n)}}}function lt(v){let n;return{c(){n=a("documentation")},l(r){n=s(r,"documentation")},m(r,o){u(r,n,o)},d(r){r&&i(n)}}}function dt(v){let n,r,o,p,d,b,z,I,de,X,y,fe,x,me,he,Y,S,ue,ee,c,T,ce,G,pe,we,ge,N,$e,ve,A,_e,U,be,Ie,ye,W,ke,Z,Ee,Te,Ae,B,We,K,Be,Pe,ze,_,Se,Q,Me,qe,F,Oe,Re,k,Le,te,M,Ce,ne,q,Ve,ie,O,De,oe;return n=new ot({props:{timestamp:1683225504,$$slots:{default:[st]},$$scope:{ctx:v}}}),I=new Xe({props:{href:"https://gist.github.com/lorenzored98/093f517abceccb2b952e289a04730a67",$$slots:{default:[rt]},$$scope:{ctx:v}}}),k=new Xe({props:{href:"https://learn.microsoft.com/en-us/windows/win32/api/wingdi/ns-wingdi-bitmapinfoheader#calculating-surface-stride",$$slots:{default:[lt]},$$scope:{ctx:v}}}),{c(){R(n.$$.fragment),r=w(),o=f("p"),p=a("Assuming you are using win32 to create a window and would like to call "),d=f("var"),b=a("give_me_a_buffer_to_draw_to()"),z=a(`, here's
      `),R(I.$$.fragment),de=a(" that does that."),X=w(),y=f("p"),fe=a("I've compiled it with "),x=f("var"),me=a("clang++ main.cpp -luser32 -lgdi32"),he=a(`, you
      can use your favorite compiler.`),Y=w(),S=f("p"),ue=a("The code is fairly straightforward, but I'd like to highlight some points:"),ee=w(),c=f("ul"),T=f("li"),ce=a(`It repaints the bitmap every frame. The snippets I've seen from the
        Microsoft docs had a copy of the bitmap blitting code duplicated inside
        the `),G=f("var"),pe=a("WM_PAINT"),we=a(` event. I didn't find any info as to why this is needed
        so I've decided to not do that.`),ge=w(),N=f("li"),$e=a(`I wasn't sure how to handle minimizing a window so it just loops until
        it's not minimized.`),ve=w(),A=f("li"),_e=a("The "),U=f("var"),be=a("resizeBitmap()"),Ie=a(` function is quite overloaded and not properly
        named. It currently handles creating, deleting, and resizing (by deleting
        and recreating) the bitmap. It could be split into different functions.`),ye=w(),W=f("li"),ke=a(`I've seen some code handling deleting the bitmap memory by getting the
        old handle from the return value of `),Z=f("var"),Ee=a("SelectObject()"),Te=a(`. It didn't
        work for me, so I store the bitmap's handle.`),Ae=w(),B=f("li"),We=a(`One point of confusion was that I allocated the buffer memory myself
        leading to memory leaks and errors. `),K=f("var"),Be=a("CreateDIBSection"),Pe=a(` handles allocating
        the memory by itself.`),ze=w(),_=f("li"),Se=a("I use "),Q=f("var"),Me=a("biBitCount = 32"),qe=a(` even if I don't necessarily need the
        alpha byte. I just think the advantage of not having to align the width
        to the nearest `),F=f("var"),Oe=a("DWORD"),Re=a(` is a nicer API. If you were concerned
        about memory and wanted to use 24 bits there is a simple formula for the
        alignment and some additional info on the `),R(k.$$.fragment),Le=a("."),te=w(),M=f("p"),Ce=a(`Since this post is quite short, I'm going to pad it out with the AI
      overlord (ChatGPT 3.5) thoughts on the code:`),ne=w(),q=f("blockquote"),Ve=a(`The code looks straightforward and relatively simple. It creates a window
      using the Win32 API, registers a window class, and sets up a message loop
      to handle messages sent to the window. The code also defines a WinBuffer
      struct to hold information about the buffer used for drawing, and a
      function resizeBitmap to handle resizing of the window and the buffer. The
      function WindowProc handles messages sent to the window, including the
      WM_SIZE message that triggers a resize of the window and the buffer. The
      message loop in the wWinMain function uses PeekMessage to check for
      messages in the message queue, and if there are none, it updates the
      buffer with a simple gradient and draws it to the screen using BitBlt.
      Overall, the code looks like a good starting point for creating a window
      and drawing to a buffer in Win32.`),ie=w(),O=f("p"),De=a("AI approved, I'm safe!")},l(e){L(n.$$.fragment,e),r=g(e),o=m(e,"P",{});var l=h(o);p=s(l,"Assuming you are using win32 to create a window and would like to call "),d=m(l,"VAR",{});var H=h(d);b=s(H,"give_me_a_buffer_to_draw_to()"),H.forEach(i),z=s(l,`, here's
      `),L(I.$$.fragment,l),de=s(l," that does that."),l.forEach(i),X=g(e),y=m(e,"P",{});var P=h(y);fe=s(P,"I've compiled it with "),x=m(P,"VAR",{});var J=h(x);me=s(J,"clang++ main.cpp -luser32 -lgdi32"),J.forEach(i),he=s(P,`, you
      can use your favorite compiler.`),P.forEach(i),Y=g(e),S=m(e,"P",{});var je=h(S);ue=s(je,"The code is fairly straightforward, but I'd like to highlight some points:"),je.forEach(i),ee=g(e),c=m(e,"UL",{});var $=h(c);T=m($,"LI",{});var ae=h(T);ce=s(ae,`It repaints the bitmap every frame. The snippets I've seen from the
        Microsoft docs had a copy of the bitmap blitting code duplicated inside
        the `),G=m(ae,"VAR",{});var xe=h(G);pe=s(xe,"WM_PAINT"),xe.forEach(i),we=s(ae,` event. I didn't find any info as to why this is needed
        so I've decided to not do that.`),ae.forEach(i),ge=g($),N=m($,"LI",{});var Ge=h(N);$e=s(Ge,`I wasn't sure how to handle minimizing a window so it just loops until
        it's not minimized.`),Ge.forEach(i),ve=g($),A=m($,"LI",{});var se=h(A);_e=s(se,"The "),U=m(se,"VAR",{});var Ne=h(U);be=s(Ne,"resizeBitmap()"),Ne.forEach(i),Ie=s(se,` function is quite overloaded and not properly
        named. It currently handles creating, deleting, and resizing (by deleting
        and recreating) the bitmap. It could be split into different functions.`),se.forEach(i),ye=g($),W=m($,"LI",{});var re=h(W);ke=s(re,`I've seen some code handling deleting the bitmap memory by getting the
        old handle from the return value of `),Z=m(re,"VAR",{});var Ue=h(Z);Ee=s(Ue,"SelectObject()"),Ue.forEach(i),Te=s(re,`. It didn't
        work for me, so I store the bitmap's handle.`),re.forEach(i),Ae=g($),B=m($,"LI",{});var le=h(B);We=s(le,`One point of confusion was that I allocated the buffer memory myself
        leading to memory leaks and errors. `),K=m(le,"VAR",{});var Ze=h(K);Be=s(Ze,"CreateDIBSection"),Ze.forEach(i),Pe=s(le,` handles allocating
        the memory by itself.`),le.forEach(i),ze=g($),_=m($,"LI",{});var E=h(_);Se=s(E,"I use "),Q=m(E,"VAR",{});var Ke=h(Q);Me=s(Ke,"biBitCount = 32"),Ke.forEach(i),qe=s(E,` even if I don't necessarily need the
        alpha byte. I just think the advantage of not having to align the width
        to the nearest `),F=m(E,"VAR",{});var Qe=h(F);Oe=s(Qe,"DWORD"),Qe.forEach(i),Re=s(E,` is a nicer API. If you were concerned
        about memory and wanted to use 24 bits there is a simple formula for the
        alignment and some additional info on the `),L(k.$$.fragment,E),Le=s(E,"."),E.forEach(i),$.forEach(i),te=g(e),M=m(e,"P",{});var Fe=h(M);Ce=s(Fe,`Since this post is quite short, I'm going to pad it out with the AI
      overlord (ChatGPT 3.5) thoughts on the code:`),Fe.forEach(i),ne=g(e),q=m(e,"BLOCKQUOTE",{});var He=h(q);Ve=s(He,`The code looks straightforward and relatively simple. It creates a window
      using the Win32 API, registers a window class, and sets up a message loop
      to handle messages sent to the window. The code also defines a WinBuffer
      struct to hold information about the buffer used for drawing, and a
      function resizeBitmap to handle resizing of the window and the buffer. The
      function WindowProc handles messages sent to the window, including the
      WM_SIZE message that triggers a resize of the window and the buffer. The
      message loop in the wWinMain function uses PeekMessage to check for
      messages in the message queue, and if there are none, it updates the
      buffer with a simple gradient and draws it to the screen using BitBlt.
      Overall, the code looks like a good starting point for creating a window
      and drawing to a buffer in Win32.`),He.forEach(i),ie=g(e),O=m(e,"P",{});var Je=h(O);De=s(Je,"AI approved, I'm safe!"),Je.forEach(i)},m(e,l){C(n,e,l),u(e,r,l),u(e,o,l),t(o,p),t(o,d),t(d,b),t(o,z),C(I,o,null),t(o,de),u(e,X,l),u(e,y,l),t(y,fe),t(y,x),t(x,me),t(y,he),u(e,Y,l),u(e,S,l),t(S,ue),u(e,ee,l),u(e,c,l),t(c,T),t(T,ce),t(T,G),t(G,pe),t(T,we),t(c,ge),t(c,N),t(N,$e),t(c,ve),t(c,A),t(A,_e),t(A,U),t(U,be),t(A,Ie),t(c,ye),t(c,W),t(W,ke),t(W,Z),t(Z,Ee),t(W,Te),t(c,Ae),t(c,B),t(B,We),t(B,K),t(K,Be),t(B,Pe),t(c,ze),t(c,_),t(_,Se),t(_,Q),t(Q,Me),t(_,qe),t(_,F),t(F,Oe),t(_,Re),C(k,_,null),t(_,Le),u(e,te,l),u(e,M,l),t(M,Ce),u(e,ne,l),u(e,q,l),t(q,Ve),u(e,ie,l),u(e,O,l),t(O,De),oe=!0},p(e,l){const H={};l&1&&(H.$$scope={dirty:l,ctx:e}),n.$set(H);const P={};l&1&&(P.$$scope={dirty:l,ctx:e}),I.$set(P);const J={};l&1&&(J.$$scope={dirty:l,ctx:e}),k.$set(J)},i(e){oe||(V(n.$$.fragment,e),V(I.$$.fragment,e),V(k.$$.fragment,e),oe=!0)},o(e){D(n.$$.fragment,e),D(I.$$.fragment,e),D(k.$$.fragment,e),oe=!1},d(e){j(n,e),e&&i(r),e&&i(o),j(I),e&&i(X),e&&i(y),e&&i(Y),e&&i(S),e&&i(ee),e&&i(c),j(k),e&&i(te),e&&i(M),e&&i(ne),e&&i(q),e&&i(ie),e&&i(O)}}}function ft(v){let n,r;return n=new it({props:{$$slots:{default:[dt]},$$scope:{ctx:v}}}),{c(){R(n.$$.fragment)},l(o){L(n.$$.fragment,o)},m(o,p){C(n,o,p),r=!0},p(o,p){const d={};p&1&&(d.$$scope={dirty:p,ctx:o}),n.$set(d)},i(o){r||(V(n.$$.fragment,o),r=!0)},o(o){D(n.$$.fragment,o),r=!1},d(o){j(n,o)}}}function mt(v){let n,r,o,p;return n=new at({props:{title:"Win32 let me draw",description:"Simplest code for drawing to a window in win32",keywords:"win32, windows, win32 bitmap, win32 draw to window, win32 gdi, win32 DBI"}}),o=new nt({props:{$$slots:{default:[ft]},$$scope:{ctx:v}}}),{c(){R(n.$$.fragment),r=w(),R(o.$$.fragment)},l(d){L(n.$$.fragment,d),r=g(d),L(o.$$.fragment,d)},m(d,b){C(n,d,b),u(d,r,b),C(o,d,b),p=!0},p(d,[b]){const z={};b&1&&(z.$$scope={dirty:b,ctx:d}),o.$set(z)},i(d){p||(V(n.$$.fragment,d),V(o.$$.fragment,d),p=!0)},o(d){D(n.$$.fragment,d),D(o.$$.fragment,d),p=!1},d(d){j(n,d),d&&i(r),j(o,d)}}}class wt extends Ye{constructor(n){super(),et(this,n,null,mt,tt,{})}}export{wt as default};
