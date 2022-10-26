<script>
	export let caption;
</script>

<div class="demo-container">
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
		width: 100%;
		font-family: "JetBrainsMono";
	}

	figcaption {
		font-size: 1.4rem;
	}
</style>
