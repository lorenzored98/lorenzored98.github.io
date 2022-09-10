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
		font-family: "JetBrainsMono";
	}

	figcaption {
		font-size: 1.4rem;
	}
</style>
