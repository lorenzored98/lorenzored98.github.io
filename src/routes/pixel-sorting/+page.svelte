<script>
	import BlankLink from "$lib/BlankLink.svelte";
	import Title from "$lib/Title.svelte";
	import Subtitle from "$lib/Subtitle.svelte";
	import Section from "$lib/Section.svelte";
	import Main from "$lib/Main.svelte";
	import Footer from "$lib/Footer.svelte";
	import Seo from "$lib/Seo.svelte";
	import PixelSorting from "./PixelSorting.svelte";
</script>

<Seo
	title="Pixel Sorting"
	description="Sort image colors by similarity"
	keywords="Pixel Sorting, Color Sorting, Javascript"
/>

<Main>
	<Section>
		<Title timestamp={1651809600}>Pixel Sorting</Title>
		<p>
			Implementing <BlankLink href="https://twitter.com/kGolid"
				>Kjetil Golid</BlankLink
			> pixel/color sorting.
		</p>
	</Section>

	<Section>
		<Subtitle id="details">Details</Subtitle>

		<p>
			For every pixel in the image, compute the average color of the
			current pixel's surrounding pixels. Within a maximum number of
			tries, find a different non-processed pixel with the most similar
			color to the computed average and swap them.
		</p>

		<p>
			sRGB is not the best color space for a color difference function. In
			this demo, I converted the colors to <BlankLink
				href="https://bottosson.github.io/posts/oklab/">Oklab</BlankLink
			> which is much better suited.
		</p>

		<p>The orientation and result of this effect is a combination of:</p>
		<ul>
			<li>
				The algorithm processes pixels from top to bottom. This is not a
				requirement. I've seen vastly cooler versions, such as a radial
				one and a seemingly noise-based one.
			</li>
			<li>
				Which and how many of the 8 surrounding pixels are being used to
				compute the color difference. In this demo, I'm using the
				top-left, top, and left pixels.
			</li>
		</ul>
		<PixelSorting />
	</Section>
</Main>

<Footer />
