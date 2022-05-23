<script>
	export let href;
</script>

<a {href} rel="noopener noreferral nofollow" target="_blank">
	<slot />
</a>

<style>
	a {
		box-shadow: inset 0 -0.8rem 0 var(--bg-accent);
		font-size: 1.6rem;
	}

	a:hover,
	a:focus {
		box-shadow: inset 0 -2.2rem 0 var(--bg-accent);
	}
</style>
