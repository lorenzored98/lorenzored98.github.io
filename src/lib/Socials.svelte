<script>
	import BlankLink from "$lib/Shared/BlankLink.svelte";
</script>

<div class="container">
	<BlankLink href="mailto:lorenzopepedev@gmail.com">
		lorenzopepedev@gmail.com
	</BlankLink>
	<div>
		<BlankLink href="https://twitter.com/lorenzopepe98">Twitter</BlankLink>
		<BlankLink href="https://github.com/lorenzored98">Github</BlankLink>
		<BlankLink href="https://codesandbox.io/u/lorenzored98">Code</BlankLink>
	</div>
</div>

<style>
	.container {
		border-top: var(--border);
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
		padding: 2rem 0;
	}
</style>
