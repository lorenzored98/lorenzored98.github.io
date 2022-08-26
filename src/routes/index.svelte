<script>
	import IndexListItem from "$lib/Index/ListItem.svelte";
	import Socials from "$lib/Socials.svelte";
	import Seo from "$lib/Posts/Seo.svelte";
</script>

<Seo
	title="Lorenzo Pepe"
	description="Writing about javascript, creative coding, fun stuff"
	keywords="LorenzoPepe, Javascript, Typescript, CreativeCoding, Generative, ProcGen, Procedural"
/>

<header>
	<Socials />
</header>
<main>
	<ol>
		<IndexListItem href="/github-pages-action" timestamp={1661509919}>
			Github Pages Action
		</IndexListItem>
		<IndexListItem
			href="https://github.com/lorenzored98/CHIP8"
			timestamp={1655577363}
		>
			CHIP-8 Interpreter
		</IndexListItem>

		<IndexListItem
			href="https://codesandbox.io/s/bilinear-image-resize-5fqdw4"
			timestamp={1654056000}
		>
			Bilinear Image Resize
		</IndexListItem>

		<IndexListItem href="/poisson-disk-sampling" timestamp={1653748371}>
			Poisson Disk Sampling
		</IndexListItem>

		<IndexListItem
			href="https://codesandbox.io/s/diamond-square-izt6t9"
			timestamp={1652500800}
		>
			Diamond Square
		</IndexListItem>

		<IndexListItem
			href="https://codesandbox.io/s/2d-midpoint-displacement-oeeg7x"
			timestamp={1652500800}
		>
			Midpoint Displacement
		</IndexListItem>

		<IndexListItem
			href="https://codesandbox.io/s/octree-color-quantization-oxbgf3"
			timestamp={1652328000}
		>
			Octree Color Quantization
		</IndexListItem>
		<IndexListItem
			href="https://codesandbox.io/s/quadtree-image-compression-d769ee"
			timestamp={1652155200}
		>
			Quadtree Image Compression
		</IndexListItem>

		<IndexListItem
			href="https://codesandbox.io/s/kgolid-pixel-color-sorting-o5nroi"
			timestamp={1651809600}
		>
			Pixel Sorting
		</IndexListItem>
	</ol>
</main>

<style>
	header {
		width: 100%;
		border-bottom: var(--border);
		margin-bottom: 2rem;
	}
	main {
		padding: 2rem 0 2rem 0;
	}

	ol {
		list-style-type: none;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
</style>
