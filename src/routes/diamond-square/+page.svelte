<script>
	import BlankLink from "$lib/BlankLink.svelte";
	import Title from "$lib/Title.svelte";
	import Subtitle from "$lib/Subtitle.svelte";
	import Section from "$lib/Section.svelte";
	import Main from "$lib/Main.svelte";
	import Footer from "$lib/Footer.svelte";
	import Seo from "$lib/Seo.svelte";
	import DiamondSquare from "./DiamondSquare.svelte";
</script>

<Seo
	title="Diamond Square"
	description="Generate noise-like patterns using diamond square algorithm"
	keywords="Noise, Javascript, Creative Coding, Algorithm, Diamond Square"
/>

<Main>
	<Section>
		<Title timestamp={1652500800}>Diamond Square</Title>
		<p>Exploring terrain generation algorithms</p>
	</Section>

	<Section>
		<Subtitle id="details">Details</Subtitle>

		<p>
			From <BlankLink
				href="https://en.wikipedia.org/wiki/Diamond-square_algorithm"
				>Wikipedia</BlankLink
			>:
		</p>

		<blockquote
			cite="https://en.wikipedia.org/wiki/Diamond-square_algorithm"
		>
			<p>
				<strong>The diamond step</strong>: For each square in the array,
				set the midpoint of that square to be the average of the four
				corner points plus a random value.
			</p>
			<p>
				<strong>The square step</strong>: For each diamond in the array,
				set the midpoint of that diamond to be the average of the four
				corner points plus a random value.
			</p>
		</blockquote>

		<p>
			Depth is how many times the space is subdivided and variation
			controls how much a random value can fluctuate.
		</p>
		<DiamondSquare />
	</Section>
</Main>

<Footer />
