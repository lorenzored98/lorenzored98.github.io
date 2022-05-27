<script>
	export let href;
</script>

<a {href} rel="noopener noreferral nofollow" target="_blank">
	<slot />
</a>

<style>
	a {
		box-shadow: inset 0 -0.8rem 0 var(--bg-accent);
		transition: box-shadow 0.2s cubic-bezier(0.33, 0.66, 0.66, 1);
		font-size: 1.6rem;
	}

	a:hover,
	a:focus {
		box-shadow: inset 0 -2.2rem 0 var(--bg-accent);
	}
</style>
