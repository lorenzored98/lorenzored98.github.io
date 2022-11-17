<script>
	import IndexListItem from "$lib/Index/ListItem.svelte";
	import Socials from "$lib/Socials.svelte";
	import Seo from "$lib/Seo.svelte";
</script>

<Seo
	title="Lorenzo Pepe"
	description="Writing about javascript, WebGL, creative coding, fun stuff"
	keywords="LorenzoPepe, Javascript, Typescript, CreativeCoding, Generative, Canvas2D, ProcGen, Procedural, WebGL, WebGL2"
/>

<header>
	<Socials />
</header>
<main>
	<ol>
		<IndexListItem
			href="/quad-without-vertices"
			timestamp={1668709650}
			type="POST"
		>
			Quad Without Vertices
		</IndexListItem>

		<IndexListItem href="/lut" timestamp={1667670429} type="POST">
			LUT
		</IndexListItem>

		<IndexListItem
			href="/domain-warping-1"
			timestamp={1665824041}
			type="DEMO"
		>
			Domain Warping [1]
		</IndexListItem>

		<IndexListItem
			href="/github-pages-action"
			timestamp={1661509919}
			type="POST"
		>
			Github Pages Action
		</IndexListItem>

		<IndexListItem
			href="/chip8-interpreter"
			timestamp={1655577363}
			type="DEMO"
		>
			CHIP-8 Interpreter
		</IndexListItem>

		<IndexListItem
			href="/bilinear-image-resize"
			timestamp={1654056000}
			type="DEMO"
		>
			Bilinear Image Resize
		</IndexListItem>

		<IndexListItem
			href="/poisson-disk-sampling"
			timestamp={1653748371}
			type="POST"
		>
			Poisson Disk Sampling
		</IndexListItem>

		<IndexListItem
			href="/diamond-square"
			timestamp={1652500800}
			type="DEMO"
		>
			Diamond Square
		</IndexListItem>

		<IndexListItem
			href="/2d-midpoint-displacement"
			timestamp={1652500800}
			type="DEMO"
		>
			2D Midpoint Displacement
		</IndexListItem>

		<IndexListItem
			href="/octree-color-quantization"
			timestamp={1652328000}
			type="DEMO"
		>
			Octree Color Quantization
		</IndexListItem>

		<IndexListItem
			href="/quadtree-image-compression"
			timestamp={1652155200}
			type="DEMO"
		>
			Quadtree Image Compression
		</IndexListItem>

		<IndexListItem href="/pixel-sorting" timestamp={1651809600} type="DEMO">
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
		padding-bottom: 2rem;
	}

	ol {
		list-style-type: none;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		transform: translate(-0.4rem, 0);
	}
</style>
