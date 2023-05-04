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
		<IndexListItem href="/win32-let-me-draw" timestamp={1683225504}>
			Win32 let me draw
		</IndexListItem>

		<IndexListItem href="/thoughts-on-rpg-equipment" timestamp={1672335496}>
			Thoughts on RPG equipment
		</IndexListItem>

		<IndexListItem
			href="/quad-without-vertex-buffer"
			timestamp={1668709650}
		>
			Quad without vertex buffer
		</IndexListItem>

		<IndexListItem href="/lut" timestamp={1667670429}>LUT</IndexListItem>

		<IndexListItem href="/domain-warping" timestamp={1665824041}>
			Domain warping
		</IndexListItem>

		<IndexListItem href="/github-pages-action" timestamp={1661509919}>
			GitHub Pages action
		</IndexListItem>

		<IndexListItem href="/chip8-interpreter" timestamp={1655577363}>
			CHIP-8 interpreter
		</IndexListItem>

		<IndexListItem href="/bilinear-image-resize" timestamp={1654056000}>
			Bilinear image resize
		</IndexListItem>

		<IndexListItem href="/poisson-disk-sampling" timestamp={1653748371}>
			Poisson disk sampling
		</IndexListItem>

		<IndexListItem href="/diamond-square" timestamp={1652500800}>
			Diamond-square
		</IndexListItem>

		<IndexListItem href="/2d-midpoint-displacement" timestamp={1652500800}>
			2D Midpoint displacement
		</IndexListItem>

		<IndexListItem href="/octree-color-quantization" timestamp={1652328000}>
			Octree color quantization
		</IndexListItem>

		<IndexListItem
			href="/quadtree-image-compression"
			timestamp={1652155200}
		>
			Quadtree image compression
		</IndexListItem>

		<IndexListItem href="/pixel-sorting" timestamp={1651809600}>
			Pixel sorting
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
