<script>
	import IndexListItem from "$lib/Index/ListItem.svelte";
	import Footer from "$lib/Posts/Footer.svelte";
	import Seo from "$lib/Posts/Seo.svelte";
</script>

<Seo
	title="Lorenzo Pepe"
	description="Writing about javascript, creative coding, fun stuff"
	keywords="LorenzoPepe, Javascript, Typescript, CreativeCoding, Generative, ProcGen, Procedural"
/>

<main>
	<ol>
		<IndexListItem
			href="https://github.com/lorenzored98/CHIP8"
			timestamp={1655577363}
		>
			CHIP8 Interpreter
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
			2D Midpoint Displacement
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

<div class="fixed">
	<div class="wrapper"><Footer /></div>
</div>

<style>
	main {
		margin-bottom: 6rem;
		padding: 2rem;
	}

	ol {
		list-style-type: none;
	}

	.fixed {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--bg-color);
	}

	.wrapper {
		width: var(--layout-max-width);
		padding: 0 2rem;
	}
</style>
