<script>
	export let caption;
	export let id = undefined;
</script>

<div class="demo-container" {id}>
	<figure>
		{#if caption}
			<figcaption>{caption}</figcaption>
		{/if}
		<slot name="canvas" />
	</figure>
	<slot name="controls" />
</div>

<style>
	div {
		margin: 2rem 0 3rem 0;
	}

	div {
		width: 100%;
		font-family: "JetBrainsMono";
	}

	figcaption {
		font-size: 1.4rem;
	}
</style>
