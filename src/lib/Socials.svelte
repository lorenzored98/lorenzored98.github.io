<script>
	import BlankLink from "$lib/Shared/BlankLink.svelte";
</script>

<div class="container">
	<div>
		<BlankLink
			style="margin-right: 1rem;"
			href="mailto:lorenzopepedev@gmail.com"
		>
			lorenzopepedev@gmail.com
		</BlankLink>
	</div>
	<div>
		<BlankLink href="https://twitter.com/lorenzopepe98">Twitter</BlankLink>
		<BlankLink
			style="margin-left: 1rem;"
			href="https://github.com/lorenzored98">Github</BlankLink
		>
		<BlankLink
			style="margin-left: 1rem;"
			href="https://codesandbox.io/u/lorenzored98">Code</BlankLink
		>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
		padding: 2rem 0 1rem 0;
	}

	.container > div {
		margin-bottom: 1rem;
		font-size: 1.6rem;
	}
</style>
