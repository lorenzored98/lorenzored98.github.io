<script>
	import Title from "$lib/Title.svelte";
	import Section from "$lib/Section.svelte";
	import Main from "$lib/Main.svelte";
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
		<Title timestamp={1652155200}>Quadtree image compression</Title>

		<p>
			I'm noticing seams at higher depths. I assume it's due to a rounding
			error somewhere.
		</p>
		<QuadtreeImageCompression />
	</Section>
</Main>
