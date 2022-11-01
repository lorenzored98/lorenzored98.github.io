<script>
	import BlankLink from "$lib/BlankLink.svelte";
	import Title from "$lib/Title.svelte";
	import Subtitle from "$lib/Subtitle.svelte";
	import Section from "$lib/Section.svelte";
	import Main from "$lib/Main.svelte";
	import Footer from "$lib/Footer.svelte";
	import Seo from "$lib/Seo.svelte";
	import BilinearImageResize from "./BilinearImageResize.svelte";
</script>

<Seo
	title="Bilinear Image Resize"
	description="Resize image using javascript"
	keywords="Javascript, Image, Canvas, Canvas2D, Resize, Bilinear Interpolation"
/>

<Main>
	<Section>
		<Title timestamp={1654056000}>Bilinear Image Resize</Title>
		<p>123</p>
	</Section>

	<Section>
		<Subtitle id="details">Details</Subtitle>

		<p>
			Mostly followed a <BlankLink
				href="https://www.scratchapixel.com/lessons/mathematics-physics-for-computer-graphics/interpolation/bilinear-filtering"
				>scratchapixel tutorial</BlankLink
			>
		</p>
		<p>
			I'm not sure if this is by default what happens when using <var
				>ctx.drawImage()</var
			> and source and target sizes differs. The result looks similar though.
		</p>
		<p>
			There are jagged edges when resizing because there is no
			antialiasing function applied.
		</p>
		<p>
			The same code can also upscale an image, but for the sake of the
			demo I capped the value to a sensible max.
		</p>
	</Section>

	<BilinearImageResize />
</Main>

<Footer />
