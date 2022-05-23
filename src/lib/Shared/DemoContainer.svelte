<script>
	export let caption;
</script>

<figure class="demo-container">
	<figcaption>{caption}</figcaption>
	<slot />
</figure>

<style>
	figure {
		width: 100%;
		display: flex;
		flex-direction: column;
		margin: 1rem 0 0 0;
	}

	figcaption {
		font-size: 1.4rem;
	}
</style>
