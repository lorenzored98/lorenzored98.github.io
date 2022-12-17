<script>
	export let href;
	export let style = undefined;
</script>

<a {style} {href} rel="noopener noreferrer nofollow" target="_blank">
	<slot />
</a>

<style>
	a {
		text-decoration: underline;
		color: var(--link);
	}

	a:hover,
	a:focus {
		color: var(--link-highlight);
	}
</style>
