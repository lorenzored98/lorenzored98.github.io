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
			Imagine an Octree as a XYZ axes plot in 3D space. We can insert a
			RGB color by using each the red, green, and blue channels as its
			coordinates.
		</p>
		<p>
			Then we pick the smallest possible sub-cube that contains the number
			of colors specified in the <var>quantization</var> function.
		</p>
		<OctreeColorQuantization />
	</Section>
</Main>
