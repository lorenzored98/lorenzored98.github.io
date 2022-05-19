<script>
	import IndexListItem from "$lib/Index/ListItem.svelte";
	import BlankLink from "../lib/Index/BlankLink.svelte";
</script>

<main>
	<ol>
		<h2>2022</h2>
		<IndexListItem href="/poisson-disk-sampling" timestamp={1652960520}>
			Poisson Disk Sampling
		</IndexListItem>
	</ol>
</main>

<footer>
	<div class="wrapper">
		<div class="container">
			<BlankLink href="mailto:lorenzopepedev@gmail.com">
				lorenzopepedev@gmail.com
			</BlankLink>
			<div>
				<BlankLink href="https://twitter.com/lorenzopepe98">
					Twitter
				</BlankLink>
				<BlankLink href="https://github.com/lorenzored98">
					Github
				</BlankLink>
				<BlankLink href="https://codesandbox.io/u/lorenzored98">
					Code
				</BlankLink>
			</div>
		</div>
	</div>
</footer>

<style>
	/* TODO: 
		Eventually when I have enough links tab will be broken because it will be
		partially hidden by my footer. Easiest fix is to use js to manage it
		but try to find a way with css
	*/
	main {
		margin-bottom: 6rem;
	}

	h2 {
		font-family: "Sanchez";
		margin-bottom: 2rem;
		font-size: 2.4rem;
	}

	ol {
		list-style-type: none;
	}

	footer {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--bg-color);
	}

	.wrapper {
		width: var(--layout-max-width);
		padding: 0 2rem;
	}

	.container {
		border-top: 1px solid #b5b7cb;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
		padding: 2rem 0;

		flex-wrap: wrap;
	}
</style>
