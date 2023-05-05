<script>
  import BlankLink from "$lib/BlankLink.svelte";
  import Title from "$lib/Title.svelte";
  import Subtitle from "$lib/Subtitle.svelte";
  import Section from "$lib/Section.svelte";
  import Main from "$lib/Main.svelte";
  import Seo from "$lib/Seo.svelte";
</script>

<Seo
  title="Quad Without Vertex Buffer"
  description="WebGL Quad without vertex buffer trick"
  keywords="Javascript, WebGL2, Gamedev, Shaders, GPU, Geometry, Instancing, Tricks, Triangle Strip"
/>

<Main>
  <Section>
    <Title timestamp={1668709650}>Quad without vertex buffer</Title>
    <p>
      While I was looking through some code on GitHub, I found a <BlankLink
        href="https://github.com/cmuratori/refterm/blob/main/refterm.hlsl#L93"
        >repo</BlankLink
      >, that draws quads without having to populate a vertex buffer with data.
    </p>
    <p>
      The repo uses D3D11 and HLSL, so there are some small differences with the
      WebGL version of this post, but the core concept is the same.
    </p>
  </Section>
  <Section>
    <Subtitle id="arbitrary-sized">Arbitrary Sized</Subtitle>
    <p>
      The way to achieve a no-buffer quad is a combination of simple math, <var
        >gl_VertexID</var
      >
      and, <var>gl.TRIANGLE_STRIP</var>.
    </p>

    <p>
      In Javascript land the only thing that changes from a hello-triangle WebGL
      program is calling
      <var>gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)</var> in the draw function.
      Right now, interpret this as sending <var>4</var> nonexistent vertices to the
      vertex shader.
    </p>

    <p>
      Note that we don't even need to bind a <var>VAO</var> in WebGL. In OpenGL you
      do need to bind it, but you can just create an empty one, and it will work.
    </p>

    <p>
      <var>gl_VertexID</var> is the zero-based integer index of the current vertex
      that is being processed in the vertex shader. By interpreting the index as
      a 2-bit binary number we get:
    </p>
    <ul>
      <li>Index 0 = <var>0b00</var> = bottom-left</li>
      <li>Index 1 = <var>0b01</var> = bottom-right</li>
      <li>Index 2 = <var>0b10</var> = top-left</li>
      <li>Index 3 = <var>0b11</var> = top-right</li>
    </ul>

    <p>
      We can easily get the UV coordinates from this data by using a binary <var
        >AND</var
      >
      with <var>1</var> to compute the <var>u</var>
      and a
      <var>RIGHT SHIFT</var> by 1 to compute the <var>v</var>.
    </p>

    <code
      data-lang="text"
      data-code={`
2---3    0 = 00  | u = (00 & 01) = 0   |  v = (00 >> 1) = 0
|\\  |    1 = 01  | u = (01 & 01) = 1   |  v = (01 >> 1) = 0
| \\ |    2 = 10  | u = (10 & 01) = 0   |  v = (10 >> 1) = 1
0---1    3 = 11  | u = (11 & 01) = 1   |  v = (11 >> 1) = 1
`}
    />

    <p>
      Remapping the uv to a <var>[-1, 1]</var> range computes the 4 vertices of a
      fullscreen quad.
    </p>

    <code
      data-lang="hlsl"
      data-code={`
vec2 uv = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));
vec2 pos = uv * 2.0 - 1.0;
			`}
    />

    <p>
      <var>gl.TRIANGLE_STRIP</var> is the key to making this work. This triangle
      primitive will use vertices <var>[0, 1, 2]</var> and vertices
      <var>[1, 2, 3]</var> to draw the triangles.
    </p>

    <p>
      Vertices <var>[1, 2, 3]</var>
      do not respect the correct winding order, luckily
      <var>gl.TRIANGLE_STRIP</var>
      draw order will be reversed for every triangle beside the first, effectively
      drawing in this case <var>[2, 1, 3]</var>.
    </p>

    <p>
      Other modes do not follow the same rules and vertex order, so it won't
      work. Check out the
      <BlankLink href="https://www.khronos.org/opengl/wiki/Primitive"
        >triangle primitives</BlankLink
      > section on the wiki for more details.
    </p>

    <p>
      Note that this is a full-fledged quad, we can apply any transform we want
      to the newly created vertices. It also works with any number of quads,
      just make sure to use the right amount of vertices in <var
        >gl.drawArrays()</var
      >.
    </p>

    <p>
      Source code <BlankLink
        href="https://gist.github.com/lorenzored98/56dce409d510417042ccdc97c1f3f72a"
        >here</BlankLink
      >.
    </p>
  </Section>

  <Section>
    <Subtitle id="full-screen-only">Full screen only</Subtitle>
    <p>
      If we are only ever going to need a fullscreen quad, there is an even
      simpler version that uses only 3 vertices to create a big triangle and
      computes the uv coordinates so that they form a fullscreen quad.
    </p>
    <code
      data-lang="hlsl"
      data-code={`
vec2 uv = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1)) * 2.0;
vec2 pos = uv * 2.0 - 1.0;
		`}
    />

    <p>
      Since we only need 3 vertices for a triangle, it's not necessary to use <var
        >gl.TRIANGLE_STRIP</var
      >, the classic
      <var>gl.drawArrays(gl.TRIANGLES, 0, 3)</var> works.
    </p>

    <p>
      Source code <BlankLink
        href="https://gist.github.com/lorenzored98/7d7c4bc862f211da0a76954b4b3870eb"
        >here</BlankLink
      >.
    </p>
  </Section>
</Main>
