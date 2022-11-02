<script>
	import BlankLink from "$lib/BlankLink.svelte";
	import Title from "$lib/Title.svelte";
	import Subtitle from "$lib/Subtitle.svelte";
	import Section from "$lib/Section.svelte";
	import Main from "$lib/Main.svelte";
	import Footer from "$lib/Footer.svelte";
	import Seo from "$lib/Seo.svelte";
	import QuadtreeImageCompression from "./QuadtreeImageCompression.svelte";
</script>

<Seo
	title="Quadtree Image Compression"
	description="Compress an image using a Quadtree"
	keywords="Javascript, Creative Coding, Quadtree, Image Compression, Image Processing"
/>

<Main>
	<Section>
		<Title timestamp={1652155200}>Quadtree Image Compression</Title>
		<p>Shades of 360p.</p>
	</Section>

	<Section>
		<Subtitle id="demo">Demo</Subtitle>

		<p>
			I'm noticing seams at higher depths. I assume it's due to a rounding
			error somewhere.
		</p>
		<QuadtreeImageCompression />
	</Section>
</Main>

<Footer />
