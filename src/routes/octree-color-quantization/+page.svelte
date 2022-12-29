<script>
	import Title from "$lib/Title.svelte";
	import Subtitle from "$lib/Subtitle.svelte";
	import Section from "$lib/Section.svelte";
	import Main from "$lib/Main.svelte";
	import Seo from "$lib/Seo.svelte";
	import OctreeColorQuantization from "./OctreeColorQuantization.svelte";
</script>

<Seo
	title="Octree Color Quantization"
	description="Using an octree to color quantize an image"
	keywords="Octree, Javascript, Image Processing, Quantization, Canvas2D"
/>

<Main>
	<Section>
		<Title timestamp={1652328000}>Octree Color Quantization</Title>

		<p>
			To get an idea of how this work. Imagine an Octree as an XYZ axes
			plot. We can insert an RGB color by using each channel as a
			position. The r channel is the x coordinate, g is y and b is z.
		</p>
		<p>
			Then you have to pick the smallest possible sub-cube that contains
			the number of colors specified in the <var>quantization</var> function.
		</p>
		<OctreeColorQuantization />
	</Section>
</Main>
