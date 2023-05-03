<script>
	import BlankLink from "$lib/BlankLink.svelte";
	import Title from "$lib/Title.svelte";
	import Section from "$lib/Section.svelte";
	import Main from "$lib/Main.svelte";
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
		<Title timestamp={1654056000}>Bilinear image resize</Title>

		<p>
			Mostly followed a <BlankLink
				href="https://www.scratchapixel.com/lessons/mathematics-physics-for-computer-graphics/interpolation/bilinear-filtering"
				>scratchapixel tutorial</BlankLink
			>
		</p>
		<p>
			I'm not sure if this is what happens by default when using <var
				>ctx.drawImage()</var
			> and source and target sizes differ. The result looks similar.
		</p>
		<p>
			There are jagged edges when resizing because there is no
			antialiasing function applied.
		</p>
		<p>
			This demo could also upscale the image. Due to the layout of this
			page, I decided to cap it to a maximum value which is always smaller
			or equal to the original image.
		</p>
		<BilinearImageResize />
	</Section>
</Main>
