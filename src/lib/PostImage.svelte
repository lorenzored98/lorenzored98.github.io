<script>
	export let width;
	export let height;
	export let src;
	export let alt;
	export let loading = "lazy";
</script>

<div>
	<img {src} {width} {height} {alt} {loading} />
</div>

<style>
	div {
		width: 100%;
		overflow-y: none;
		overflow-x: auto;
		margin: 1rem 0 2rem 0;
	}
</style>
