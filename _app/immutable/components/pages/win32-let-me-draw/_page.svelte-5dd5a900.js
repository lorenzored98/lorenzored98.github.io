import{S as Yt,i as te,s as ee,w as R,a as w,x as L,c as g,y as C,b as u,f as V,t as D,z as j,h as i,k as f,q as a,l as m,m as h,r as s,G as e}from"../../../chunks/index-fbdc19c0.js";import{M as ne,S as ie,T as oe}from"../../../chunks/Main-a1a4e12e.js";import{S as ae}from"../../../chunks/Seo-62a0eda8.js";import{B as Xt}from"../../../chunks/BlankLink-875203ee.js";function se(v){let n;return{c(){n=a("Win32 let me draw")},l(r){n=s(r,"Win32 let me draw")},m(r,o){u(r,n,o)},d(r){r&&i(n)}}}function re(v){let n;return{c(){n=a("some code")},l(r){n=s(r,"some code")},m(r,o){u(r,n,o)},d(r){r&&i(n)}}}function le(v){let n;return{c(){n=a("documentation")},l(r){n=s(r,"documentation")},m(r,o){u(r,n,o)},d(r){r&&i(n)}}}function de(v){let n,r,o,p,d,b,z,I,dt,X,y,ft,x,mt,ht,Y,S,ut,tt,c,T,ct,G,pt,wt,gt,N,$t,vt,A,_t,U,bt,It,yt,W,kt,Z,Et,Tt,At,B,Wt,K,Bt,Pt,zt,_,St,Q,Mt,qt,F,Ot,Rt,k,Lt,et,M,Ct,nt,q,Vt,it,O,Dt,ot;return n=new oe({props:{timestamp:1683225504,$$slots:{default:[se]},$$scope:{ctx:v}}}),I=new Xt({props:{href:"https://gist.github.com/lorenzored98/093f517abceccb2b952e289a04730a67",$$slots:{default:[re]},$$scope:{ctx:v}}}),k=new Xt({props:{href:"https://learn.microsoft.com/en-us/windows/win32/api/wingdi/ns-wingdi-bitmapinfoheader#calculating-surface-stride",$$slots:{default:[le]},$$scope:{ctx:v}}}),{c(){R(n.$$.fragment),r=w(),o=f("p"),p=a(`Assuming you are using win32 to create a window and would like to
			call `),d=f("var"),b=a("give_me_a_buffer_to_draw_to()"),z=a(`, here's
			`),R(I.$$.fragment),dt=a(" that does that."),X=w(),y=f("p"),ft=a("I've compiled it with "),x=f("var"),mt=a("clang++ main.cpp -luser32 -lgdi32"),ht=a(`,
			you can use your favorite compiler.`),Y=w(),S=f("p"),ut=a(`The code is fairly straightforward, but I'd like to highlight some
			points:`),tt=w(),c=f("ul"),T=f("li"),ct=a(`It repaints the bitmap every frame. The snippets I've seen from
				the Microsoft docs had a copy of the bitmap blitting code
				duplicated inside the `),G=f("var"),pt=a("WM_PAINT"),wt=a(` event. I didn't find any
				info as to why this is needed so I've decided to not do that.`),gt=w(),N=f("li"),$t=a(`I wasn't sure how to handle minimizing a window so it just loops
				until it's not minimized.`),vt=w(),A=f("li"),_t=a("The "),U=f("var"),bt=a("resizeBitmap()"),It=a(` function is quite overloaded and not
				properly named. It currently handles creating, deleting, and resizing
				(by deleting and recreating) the bitmap. It could be split into different
				functions.`),yt=w(),W=f("li"),kt=a(`I've seen some code handling deleting the bitmap memory by
				getting the old handle from the return value of `),Z=f("var"),Et=a("SelectObject()"),Tt=a(". It didn't work for me, so I store the bitmap's handle."),At=w(),B=f("li"),Wt=a(`One point of confusion was that I allocated the buffer memory
				myself leading to memory leaks and errors. `),K=f("var"),Bt=a("CreateDIBSection"),Pt=a(" handles allocating the memory by itself."),zt=w(),_=f("li"),St=a("I use "),Q=f("var"),Mt=a("biBitCount = 32"),qt=a(` even if I don't necessarily
				need the alpha byte. I just think the advantage of not having to
				align the width to the nearest `),F=f("var"),Ot=a("DWORD"),Rt=a(` is a nicer API.
				If you were concerned about memory and wanted to use 24 bits
				there is a simple formula for the alignment and some additional
				info on the `),R(k.$$.fragment),Lt=a("."),et=w(),M=f("p"),Ct=a(`Since this post is quite short, I'm going to pad it out with the AI
			overlord (Chat GPT 3.5) thoughts on the code:`),nt=w(),q=f("blockquote"),Vt=a(`The code looks straightforward and relatively simple. It creates a
			window using the Win32 API, registers a window class, and sets up a
			message loop to handle messages sent to the window. The code also
			defines a WinBuffer struct to hold information about the buffer used
			for drawing, and a function resizeBitmap to handle resizing of the
			window and the buffer. The function WindowProc handles messages sent
			to the window, including the WM_SIZE message that triggers a resize
			of the window and the buffer. The message loop in the wWinMain
			function uses PeekMessage to check for messages in the message
			queue, and if there are none, it updates the buffer with a simple
			gradient and draws it to the screen using BitBlt. Overall, the code
			looks like a good starting point for creating a window and drawing
			to a buffer in Win32.`),it=w(),O=f("p"),Dt=a("AI approved, I'm safe!")},l(t){L(n.$$.fragment,t),r=g(t),o=m(t,"P",{});var l=h(o);p=s(l,`Assuming you are using win32 to create a window and would like to
			call `),d=m(l,"VAR",{});var H=h(d);b=s(H,"give_me_a_buffer_to_draw_to()"),H.forEach(i),z=s(l,`, here's
			`),L(I.$$.fragment,l),dt=s(l," that does that."),l.forEach(i),X=g(t),y=m(t,"P",{});var P=h(y);ft=s(P,"I've compiled it with "),x=m(P,"VAR",{});var J=h(x);mt=s(J,"clang++ main.cpp -luser32 -lgdi32"),J.forEach(i),ht=s(P,`,
			you can use your favorite compiler.`),P.forEach(i),Y=g(t),S=m(t,"P",{});var jt=h(S);ut=s(jt,`The code is fairly straightforward, but I'd like to highlight some
			points:`),jt.forEach(i),tt=g(t),c=m(t,"UL",{});var $=h(c);T=m($,"LI",{});var at=h(T);ct=s(at,`It repaints the bitmap every frame. The snippets I've seen from
				the Microsoft docs had a copy of the bitmap blitting code
				duplicated inside the `),G=m(at,"VAR",{});var xt=h(G);pt=s(xt,"WM_PAINT"),xt.forEach(i),wt=s(at,` event. I didn't find any
				info as to why this is needed so I've decided to not do that.`),at.forEach(i),gt=g($),N=m($,"LI",{});var Gt=h(N);$t=s(Gt,`I wasn't sure how to handle minimizing a window so it just loops
				until it's not minimized.`),Gt.forEach(i),vt=g($),A=m($,"LI",{});var st=h(A);_t=s(st,"The "),U=m(st,"VAR",{});var Nt=h(U);bt=s(Nt,"resizeBitmap()"),Nt.forEach(i),It=s(st,` function is quite overloaded and not
				properly named. It currently handles creating, deleting, and resizing
				(by deleting and recreating) the bitmap. It could be split into different
				functions.`),st.forEach(i),yt=g($),W=m($,"LI",{});var rt=h(W);kt=s(rt,`I've seen some code handling deleting the bitmap memory by
				getting the old handle from the return value of `),Z=m(rt,"VAR",{});var Ut=h(Z);Et=s(Ut,"SelectObject()"),Ut.forEach(i),Tt=s(rt,". It didn't work for me, so I store the bitmap's handle."),rt.forEach(i),At=g($),B=m($,"LI",{});var lt=h(B);Wt=s(lt,`One point of confusion was that I allocated the buffer memory
				myself leading to memory leaks and errors. `),K=m(lt,"VAR",{});var Zt=h(K);Bt=s(Zt,"CreateDIBSection"),Zt.forEach(i),Pt=s(lt," handles allocating the memory by itself."),lt.forEach(i),zt=g($),_=m($,"LI",{});var E=h(_);St=s(E,"I use "),Q=m(E,"VAR",{});var Kt=h(Q);Mt=s(Kt,"biBitCount = 32"),Kt.forEach(i),qt=s(E,` even if I don't necessarily
				need the alpha byte. I just think the advantage of not having to
				align the width to the nearest `),F=m(E,"VAR",{});var Qt=h(F);Ot=s(Qt,"DWORD"),Qt.forEach(i),Rt=s(E,` is a nicer API.
				If you were concerned about memory and wanted to use 24 bits
				there is a simple formula for the alignment and some additional
				info on the `),L(k.$$.fragment,E),Lt=s(E,"."),E.forEach(i),$.forEach(i),et=g(t),M=m(t,"P",{});var Ft=h(M);Ct=s(Ft,`Since this post is quite short, I'm going to pad it out with the AI
			overlord (Chat GPT 3.5) thoughts on the code:`),Ft.forEach(i),nt=g(t),q=m(t,"BLOCKQUOTE",{});var Ht=h(q);Vt=s(Ht,`The code looks straightforward and relatively simple. It creates a
			window using the Win32 API, registers a window class, and sets up a
			message loop to handle messages sent to the window. The code also
			defines a WinBuffer struct to hold information about the buffer used
			for drawing, and a function resizeBitmap to handle resizing of the
			window and the buffer. The function WindowProc handles messages sent
			to the window, including the WM_SIZE message that triggers a resize
			of the window and the buffer. The message loop in the wWinMain
			function uses PeekMessage to check for messages in the message
			queue, and if there are none, it updates the buffer with a simple
			gradient and draws it to the screen using BitBlt. Overall, the code
			looks like a good starting point for creating a window and drawing
			to a buffer in Win32.`),Ht.forEach(i),it=g(t),O=m(t,"P",{});var Jt=h(O);Dt=s(Jt,"AI approved, I'm safe!"),Jt.forEach(i)},m(t,l){C(n,t,l),u(t,r,l),u(t,o,l),e(o,p),e(o,d),e(d,b),e(o,z),C(I,o,null),e(o,dt),u(t,X,l),u(t,y,l),e(y,ft),e(y,x),e(x,mt),e(y,ht),u(t,Y,l),u(t,S,l),e(S,ut),u(t,tt,l),u(t,c,l),e(c,T),e(T,ct),e(T,G),e(G,pt),e(T,wt),e(c,gt),e(c,N),e(N,$t),e(c,vt),e(c,A),e(A,_t),e(A,U),e(U,bt),e(A,It),e(c,yt),e(c,W),e(W,kt),e(W,Z),e(Z,Et),e(W,Tt),e(c,At),e(c,B),e(B,Wt),e(B,K),e(K,Bt),e(B,Pt),e(c,zt),e(c,_),e(_,St),e(_,Q),e(Q,Mt),e(_,qt),e(_,F),e(F,Ot),e(_,Rt),C(k,_,null),e(_,Lt),u(t,et,l),u(t,M,l),e(M,Ct),u(t,nt,l),u(t,q,l),e(q,Vt),u(t,it,l),u(t,O,l),e(O,Dt),ot=!0},p(t,l){const H={};l&1&&(H.$$scope={dirty:l,ctx:t}),n.$set(H);const P={};l&1&&(P.$$scope={dirty:l,ctx:t}),I.$set(P);const J={};l&1&&(J.$$scope={dirty:l,ctx:t}),k.$set(J)},i(t){ot||(V(n.$$.fragment,t),V(I.$$.fragment,t),V(k.$$.fragment,t),ot=!0)},o(t){D(n.$$.fragment,t),D(I.$$.fragment,t),D(k.$$.fragment,t),ot=!1},d(t){j(n,t),t&&i(r),t&&i(o),j(I),t&&i(X),t&&i(y),t&&i(Y),t&&i(S),t&&i(tt),t&&i(c),j(k),t&&i(et),t&&i(M),t&&i(nt),t&&i(q),t&&i(it),t&&i(O)}}}function fe(v){let n,r;return n=new ie({props:{$$slots:{default:[de]},$$scope:{ctx:v}}}),{c(){R(n.$$.fragment)},l(o){L(n.$$.fragment,o)},m(o,p){C(n,o,p),r=!0},p(o,p){const d={};p&1&&(d.$$scope={dirty:p,ctx:o}),n.$set(d)},i(o){r||(V(n.$$.fragment,o),r=!0)},o(o){D(n.$$.fragment,o),r=!1},d(o){j(n,o)}}}function me(v){let n,r,o,p;return n=new ae({props:{title:"Win32 let me draw",description:"Simplest code for drawing to a window in win32",keywords:"win32, windows, win32 bitmap, win32 draw to window, win32 gdi, win32 DBI"}}),o=new ne({props:{$$slots:{default:[fe]},$$scope:{ctx:v}}}),{c(){R(n.$$.fragment),r=w(),R(o.$$.fragment)},l(d){L(n.$$.fragment,d),r=g(d),L(o.$$.fragment,d)},m(d,b){C(n,d,b),u(d,r,b),C(o,d,b),p=!0},p(d,[b]){const z={};b&1&&(z.$$scope={dirty:b,ctx:d}),o.$set(z)},i(d){p||(V(n.$$.fragment,d),V(o.$$.fragment,d),p=!0)},o(d){D(n.$$.fragment,d),D(o.$$.fragment,d),p=!1},d(d){j(n,d),d&&i(r),j(o,d)}}}class we extends Yt{constructor(n){super(),te(this,n,null,me,ee,{})}}export{we as default};
