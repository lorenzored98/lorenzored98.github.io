<script>
	import Title from "$lib/Title.svelte";
	import Section from "$lib/Section.svelte";
	import Main from "$lib/Main.svelte";
	import Seo from "$lib/Seo.svelte";
	import BlankLink from "$lib/BlankLink.svelte";
</script>

<Seo
	title="Win32 let me draw"
	description="Simplest code for drawing to a window in win32"
	keywords="win32, windows, win32 bitmap, win32 draw to window, win32 gdi, win32 DBI"
/>

<Main>
	<Section>
		<Title timestamp={1683225504}>Win32 let me draw</Title>

		<p>
			Assuming you are using win32 to create a window and would like to
			call <var>give_me_a_buffer_to_draw_to()</var>, here's
			<BlankLink
				href="https://gist.github.com/lorenzored98/093f517abceccb2b952e289a04730a67"
				>some code</BlankLink
			> that does that.
		</p>
		<p>
			I've compiled it with <var>clang++ main.cpp -luser32 -lgdi32</var>,
			you can use your favorite compiler.
		</p>
		<p>
			The code is fairly straightforward, but I'd like to highlight some
			points:
		</p>
		<ul>
			<li>
				It repaints the bitmap every frame. The snippets I've seen from
				the Microsoft docs had a copy of the bitmap blitting code
				duplicated inside the <var>WM_PAINT</var> event. I didn't find any
				info as to why this is needed so I've decided to not do that.
			</li>
			<li>
				I wasn't sure how to handle minimizing a window so it just loops
				until it's not minimized.
			</li>
			<li>
				The <var>resizeBitmap()</var> function is quite overloaded and not
				properly named. It currently handles creating, deleting, and resizing
				(by deleting and recreating) the bitmap. It could be split into different
				functions.
			</li>
			<li>
				I've seen some code handling deleting the bitmap memory by
				getting the old handle from the return value of <var
					>SelectObject()</var
				>. It didn't work for me, so I store the bitmap's handle.
			</li>
			<li>
				One point of confusion was that I allocated the buffer memory
				myself leading to memory leaks and errors. <var
					>CreateDIBSection</var
				> handles allocating the memory by itself.
			</li>
			<li>
				I use <var>biBitCount = 32</var> even if I don't necessarily
				need the alpha byte. I just think the advantage of not having to
				align the width to the nearest <var>DWORD</var> is a nicer API.
				If you were concerned about memory and wanted to use 24 bits
				there is a simple formula for the alignment and some additional
				info on the <BlankLink
					href="https://learn.microsoft.com/en-us/windows/win32/api/wingdi/ns-wingdi-bitmapinfoheader#calculating-surface-stride"
					>documentation</BlankLink
				>.
			</li>
		</ul>

		<p>
			Since this post is quite short, I'm going to pad it out with the AI
			overlord (Chat GPT 3.5) thoughts on the code:
		</p>
		<blockquote>
			The code looks straightforward and relatively simple. It creates a
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
			to a buffer in Win32.
		</blockquote>

		<p>AI approved, I'm safe!</p>
	</Section>
</Main>
