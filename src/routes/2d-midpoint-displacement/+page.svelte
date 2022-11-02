<script>
	import Title from "$lib/Title.svelte";
	import Subtitle from "$lib/Subtitle.svelte";
	import Section from "$lib/Section.svelte";
	import Main from "$lib/Main.svelte";
	import Footer from "$lib/Footer.svelte";
	import Seo from "$lib/Seo.svelte";
	import MidpointDisplacement from "./MidpointDisplacement.svelte";
</script>

<Seo
	title="2D Midpoint Displacement"
	description="Generate noise-like patterns"
	keywords="Noise, Javascript, Creative Coding, Algorithm"
/>

<Main>
	<Section>
		<Title timestamp={1652500800}>2D Midpoint Displacement</Title>
		<p>Exploring terrain generation algorithms.</p>
	</Section>

	<Section>
		<Subtitle id="demo">Demo</Subtitle>

		<p>
			I discovered this algorithm while researching procedural terrain
			generation . I'm assuming it's an outdated way of doing that, but,
			contrary to stacking gradient noises on top of each other, I
			actually understand what this does!
		</p>
		<p>
			Depth is how many times the space is subdivided and variation
			controls how much a random value can fluctuate.
		</p>
		<p>
			It makes sense to have variation going from -1 or 0 to 1. I
			originally did this using Canvas2D so it retained some of the
			quirks.
		</p>
		<MidpointDisplacement />
	</Section>
</Main>

<Footer />
