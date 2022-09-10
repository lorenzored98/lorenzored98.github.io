<script>
	export let href;
	export let style = undefined;
</script>

<a {style} {href} rel="noopener noreferral nofollow" target="_blank">
	<slot />
</a>

<style>
	a {
		box-shadow: inset 0 -0.8rem 0 var(--bg-accent);
		transition: box-shadow 0.2s cubic-bezier(0.33, 0.66, 0.66, 1);
		display: inline;
	}

	a:hover,
	a:focus {
		box-shadow: inset 0 -2.2rem 0 var(--bg-accent);
	}

	@media (prefers-reduced-motion) {
		a {
			transition: none;
		}
	}
</style>
