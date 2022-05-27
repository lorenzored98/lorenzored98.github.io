<script>
	import IndexListItem from "$lib/Index/ListItem.svelte";
	import Socials from "$lib/Socials.svelte";
	import Footer from "$lib/Posts/Footer.svelte";
</script>

<main>
	<ol>
		<h2>2022</h2>
		<IndexListItem href="/poisson-disk-sampling" timestamp={1652960520}>
			Poisson Disk Sampling
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

	h2 {
		font-family: "Rubik";
		margin-bottom: 2rem;
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
