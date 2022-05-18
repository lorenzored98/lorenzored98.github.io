<script>
	import IndexListItem from "$lib/Index/ListItem.svelte";
</script>

<main>
	<ol>
		<h2>2022</h2>
		<IndexListItem href="/poisson-disk-sampling" timestamp={1652888556}>
			Poisson Disk Sampling
		</IndexListItem>

		<IndexListItem href="/poisson-disk-sampling" timestamp={1652888556}>
			1231231231231231231231231
		</IndexListItem>

		<IndexListItem href="/poisson-disk-sampling" timestamp={1652888556}>
			Short
		</IndexListItem>

		<IndexListItem href="/poisson-disk-sampling" timestamp={1652888556}>
			Incredibly Long and useless text Incredibly Long and useless
			textIncredibly Long and useless text
		</IndexListItem>

		<IndexListItem href="/poisson-disk-sampling" timestamp={1652888556}>
			TEST123 1 1 ab cdee
		</IndexListItem>
	</ol>
</main>

<footer>
	<h3>Lorenzo Pepe</h3>

	<div>
		<a
			href="https://twitter.com/lorenzopepe98"
			rel="noopener noreferral nofollow"
			target="_blank"
		>
			Twitter
		</a>
		<a
			href="https://github.com/lorenzored98"
			rel="noopener noreferral nofollow"
			target="_blank"
		>
			Github
		</a>
		<a
			href="https://codesandbox.io/u/lorenzored98"
			rel="noopener noreferral nofollow"
			target="_blank"
		>
			Code
		</a>
	</div>
</footer>

<style>
	h2 {
		font-family: "Sanchez";
		margin-bottom: 1rem;
		font-size: 2.4rem;
	}

	ol {
		list-style-type: none;
	}

	footer {
		border-top: 1px solid black;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 0;
	}

	footer a {
		box-shadow: inset 0 -2px 0 red;
		transition: box-shadow 0.2s cubic-bezier(0.33, 0.66, 0.66, 1);
	}

	footer a:hover,
	a:focus {
		box-shadow: inset 0 -10px 0 orange;
	}
</style>
