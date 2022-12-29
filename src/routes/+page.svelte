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
			href="/rpg-equipment-requirements"
			timestamp={1671293489}
		>
			RPG Equipment Requirements
		</IndexListItem>

		<IndexListItem href="/quad-without-vertices" timestamp={1668709650}>
			Quad Without Vertices
		</IndexListItem>

		<IndexListItem href="/lut" timestamp={1667670429}>LUT</IndexListItem>

		<IndexListItem href="/domain-warping" timestamp={1665824041}>
			Domain Warping
		</IndexListItem>

		<IndexListItem href="/github-pages-action" timestamp={1661509919}>
			Github Pages Action
		</IndexListItem>

		<IndexListItem href="/chip8-interpreter" timestamp={1655577363}>
			CHIP-8 Interpreter
		</IndexListItem>

		<IndexListItem href="/bilinear-image-resize" timestamp={1654056000}>
			Bilinear Image Resize
		</IndexListItem>

		<IndexListItem href="/poisson-disk-sampling" timestamp={1653748371}>
			Poisson Disk Sampling
		</IndexListItem>

		<IndexListItem href="/diamond-square" timestamp={1652500800}>
			Diamond Square
		</IndexListItem>

		<IndexListItem href="/2d-midpoint-displacement" timestamp={1652500800}>
			2D Midpoint Displacement
		</IndexListItem>

		<IndexListItem href="/octree-color-quantization" timestamp={1652328000}>
			Octree Color Quantization
		</IndexListItem>

		<IndexListItem
			href="/quadtree-image-compression"
			timestamp={1652155200}
		>
			Quadtree Image Compression
		</IndexListItem>

		<IndexListItem href="/pixel-sorting" timestamp={1651809600}>
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
		width: 100%;
	}

	ol {
		list-style-type: none;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		transform: translate(-0.4rem, 0);
		width: calc(100% + 0.8rem);
	}
</style>
