<script>
	import BlankLink from "$lib/BlankLink.svelte";
	import Title from "$lib/Title.svelte";
	import Subtitle from "$lib/Subtitle.svelte";
	import Section from "$lib/Section.svelte";
	import Main from "$lib/Main.svelte";
	import Footer from "$lib/Footer.svelte";
	import Seo from "$lib/Seo.svelte";
	import LUT from "./LUT.svelte";
	import PostImage from "../../lib/PostImage.svelte";
</script>

<Seo
	title="LUT Shader"
	description="Color lookup table WebGL2"
	keywords="Javascript, WebGL, LUT, Filters, PostProcessing, Creative, Shaders"
/>

<Main>
	<Section>
		<Title timestamp={1667670429}>LUT Shader</Title>
		<p>
			It's easier to find .env secrets on Github than 5 LUT textures to
			use for a post...
		</p>
	</Section>

	<Section>
		<Subtitle id="how-it-works">How It Works</Subtitle>
		<p>
			This is a <strong>L</strong>ook<strong>u</strong>p
			<strong>T</strong>able texture.
		</p>
		<PostImage
			src="/lut/neutral.webp"
			width={1024}
			height={32}
			alt="Neutral LUT"
		/>
		<p>
			This is a <var>1024x32</var> texture. It's not the only possible representation
			or size. Often it can be represented as a "grid" instead of a "row" like
			the one above. This post deals with the "row" kind, and even though the
			shader to apply it might change between different representations, the
			concept behind it remains the same.
		</p>

		<p>
			For those familiar with shader programming, it's apparent that the
			first small quad is something like <var>vec3(uv, 0.0)</var>
			and the last quad is <var>vec3(uv, 1.0)</var>. This tells us that
			there is a blue channel progression (from left to right in this
			case).
		</p>

		<p>
			For those not familiar with shaders you can visualize it this way:
		</p>
		<ul>
			<li>
				Red (x) is a gradient that goes from left to right. Left being 0
				and right 1.
			</li>
			<li>
				Green (y) is a gradient that goes from bottom to top. Bottom
				being 0 and top 1.
			</li>
			<li>
				Blue (z) is a color that remains constant for a quad. It
				increases by some amount for every quad.
			</li>
		</ul>

		<p>
			Imagine recomposing a cube from this texture using the blue channel
			as its z-axis. We end up with a cube that stores the LUT colors. If
			we think about RGB as a position vector inside the newly created
			cube volume, we can find the LUT color that maps to the original
			image RGB color.
		</p>
		<p>
			To accurately represent each color we would need a gigantic
			256x256x256 LUT. This is not possible or simply not worth it in many
			cases. We can instead take advantage of <var>GL_LINEAR</var>
			and <var>mix()</var> to get away with a much smaller texture size.
		</p>
		<p>
			This specific texture is a neutral LUT. If we were to apply it (and
			you can do this in the demo below) to an image, there would be no
			difference.
		</p>
	</Section>

	<Section>
		<Subtitle id="texture-3d">Texture3D</Subtitle>
		<p>
			Using WebGL2 we have access to 3D textures. Using <var
				>texStorage3D()</var
			>
			and <var>texSubImage3D()</var> WebGL2 will construct the volume cube
			by for us. After that we need a simple shader that takes the
			original texture color and uses it to index the cube. There is a
			good
			<BlankLink href="https://stackoverflow.com/a/65161148"
				>stackoverflow answer</BlankLink
			>
			that outlines how to do this.
		</p>
	</Section>

	<Section>
		<Subtitle id="shader-lookup">Shader Lookup</Subtitle>
		<p>
			For those who have to support WebGL1, or for whatever reason don't
			want to use a 3D texture, there is a way of doing it inside a
			fragment shader.
		</p>

		<p>Here's the shader:</p>

		<code
			data-lang="hlsl"
			data-code={`
#version 300 es

precision highp float;

uniform vec2 uRes;
uniform sampler2D uTex;
uniform sampler2D uLUT;
uniform float uLUTSize;
uniform float uStrength;

out vec4 outColor;

void main() {
	vec2 uv = gl_FragCoord.xy / uRes;
	vec4 tex = texture(uTex, uv);

	tex.r = clamp(0.0, 1.0, tex.r);
	tex.g = clamp(0.0, 1.0, tex.g);
	tex.b = clamp(0.0, 1.0, tex.b);
	
	vec4 lut = texture(uLUT, uv);

	float maxSize = uLUTSize - 1.0;
	float maxCellCoord = 1.0 - (1.0 / uLUTSize);
	vec2 halfTexel = 0.5 / vec2(uLUTSize * uLUTSize, uLUTSize);

	float redOffset = halfTexel.x + tex.r * (maxCellCoord / uLUTSize);
	float greenOffset = halfTexel.y + tex.g * maxCellCoord;

	float blue = tex.b * maxSize;

	float leftCell = floor(blue);
	float rightCell = ceil(blue);

	vec2 left = vec2(
		leftCell / uLUTSize + redOffset,
		greenOffset
	);

	vec2 right = vec2(
		rightCell / uLUTSize + redOffset,
		greenOffset
	);

	vec3 color = mix(
		texture(uLUT, left).rgb,
		texture(uLUT, right).rgb,
		fract(blue)
	);

	color = mix(tex.rgb, color, uStrength);	

	outColor = vec4(color, tex.a);
}
			`}
		/>

		<ul>
			<li>
				This is often a post-processing effect, so it makes sense to
				make sure that the colors are in a 0 to 1 range to avoid
				artifacts.
			</li>

			<li>
				<var>maxCellCoord</var> is used for precision, to avoid getting out
				of a single cell bounds.
			</li>
			<li>
				<var>halfTexel</var> is used to sample at the center of a texel instead
				of the bottom-left origin.
			</li>
			<li>
				<var>redOffset</var> and <var>greenOffset</var> the position of r
				and g inside a single cell. To visualize what's happening keep in
				mind we are still working inside one of those small quads of the
				texture.
			</li>
			<li>
				<var>blue</var> is the "z" position. To get the value we
				multiply the texture blue channel with the maximum amount of
				cells <var>maxSize</var>. To get <var>maxSize</var> we removed
				one from <var>uLUTSize</var> to avoid going out of bounds when getting
				the cell to the right of the last one.
			</li>
			<li>
				We want to sample the value of two consecutive cells/quads. To
				get the left one, use <var>floor()</var>
				,and to get the right one, use <var>ceil()</var>.
			</li>
			<li>
				<var>left</var> and <var>right</var> are the coordinates at which
				we will sample the LUT color.
			</li>
			<li>
				We mix the result using the fractional part of <var>blue</var>.
				The bigger the fractional part, the closer we are to the right
				cell. The opposite is also true.
			</li>
			<li>
				You can ignore <var>uStrength</var>, it's a value that modulates
				how much of the LUT color to use in the final image.
			</li>
		</ul>
	</Section>

	<LUT />
</Main>

<Footer />
