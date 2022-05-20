<script>
	import IndexListItem from "$lib/Index/ListItem.svelte";
	import Socials from "$lib/Socials.svelte";
</script>

<main>
	<ol>
		<h2>2022</h2>
		<IndexListItem href="/poisson-disk-sampling" timestamp={1652960520}>
			Poisson Disk Sampling
		</IndexListItem>
	</ol>
</main>

<footer>
	<div class="wrapper"><Socials /></div>
</footer>

<style>
	/* TODO: 
		Eventually when I have enough links tab will be broken because it will be
		partially hidden by my footer. Easiest fix is to use js to manage it
		but try to find a way with css
	*/
	main {
		margin-bottom: 6rem;
	}

	h2 {
		font-family: "Sanchez";
		margin-bottom: 2rem;
	}

	ol {
		list-style-type: none;
	}

	footer {
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
