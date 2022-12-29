<script>
	import BlankLink from "$lib/BlankLink.svelte";
	import Title from "$lib/Title.svelte";
	import Section from "$lib/Section.svelte";
	import Main from "$lib/Main.svelte";
	import Seo from "$lib/Seo.svelte";
</script>

<Seo
	title="Quad Without Vertices"
	description="WebGL Quad without vertices trick"
	keywords="Javascript, WebGL2, Gamedev, Shaders, GPU, Geometry, Instancing, Tricks, Triangle Strip"
/>

<Main>
	<Section>
		<Title timestamp={1668709650}>Quad Without Vertices</Title>
		<p>
			While researching for a tile-based monospaced font rendering I found
			this <BlankLink href="https://github.com/cmuratori/refterm"
				>GitHub repo</BlankLink
			> containing code similar to this:
		</p>

		<code
			data-lang="hlsl"
			data-code={`
vec2 pos = vec2(
	2.0 * (float(gl_VertexID & 1) - 0.5), 
	-(float(gl_VertexID >> 1) - 0.5) * 2.0
);
			`}
		/>

		<code
			data-lang="js"
			data-code={`
gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
		`}
		/>

		<p />
		<p>
			<var>gl_VertexID</var> is the zero-based integer index of the
			current vertex. If we think about the index as a 2 bit binary number
			we get
			<var>0 = 00</var> bottom-left, <var>1 = 01</var> top-left,
			<var>2 = 10</var>
			bottom-right,
			<var>3 = 11</var> top-right.
		</p>

		<p>
			A binary <var>AND</var> with 1 gives us the x position and a binary
			<var>RIGHT SHIFT</var> by 1 gives us the y position.
		</p>

		<code
			data-lang="text"
			data-code={`
2---3    0 = 00  |  00 & 01 = 0 (x)  |  00 >> 1 = 0 (y)
|\\  |    1 = 01  |  01 & 01 = 1 (x)  |  01 >> 1 = 0 (y)
| \\ |    2 = 10  |  10 & 01 = 0 (x)  |  10 >> 1 = 1 (y)
0---1    3 = 11  |  11 & 01 = 1 (x)  |  11 >> 1 = 1 (y)
	`}
		/>

		<p>
			By interpreting these values as an x and y offset we can position
			our vertices getting a quad that goes from 0 to 1 in the top-right
			quadrant.
		</p>

		<p>
			Using this together with <var>GL_TRIANGLE_STRIP</var> gives us two triangles.
			It doesn't work with other modes due to how WebGL / OpenGL handles creating
			the triangles.
		</p>

		<p>
			We can then make it fullscreen as the code above does by remapping
			the values to -1 to 1.
		</p>

		<p>
			The result of this operation, without remapping, produces the quad
			UV coordinates. The y coordinate is inverted, so we need to remap
			it.
		</p>

		<code
			data-lang="hlsl"
			data-code={`
vec2 uv = vec2(float(gl_VertexID & 1), 1.0 - float(gl_VertexID >> 1));
		`}
		/>
	</Section>
</Main>
