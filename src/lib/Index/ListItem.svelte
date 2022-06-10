<script>
	export let href;
	export let timestamp;

	const d = new Date(timestamp * 1000);

	const date = Intl.DateTimeFormat("en-GB").format(d);

	// YYYY-MM-DD https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time
	// Surprised to not see date.toDateString() as a valid option
	const datetime = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

	const external = href[0] !== "/";
	const target = external ? "_blank" : undefined;
	const rel = external ? "noopener noreferral nofllow" : undefined;
</script>

<li>
	<time {datetime}><span>{date}</span></time>
	<a {href} {target} {rel}>
		<h3>
			<span><slot /></span>

			{#if external}
				<svg viewBox="0 0 100 100">
					<title>{href}</title>
					<path
						stroke-width={16}
						d="M 50 0 L 0 0 L 0 100 L 100 100 L 100 50"
					/>
					<path stroke-width={16} d="M 65 0 L 100 0 L 100 35" />
					<path stroke-width={10} d="M 50 50 L 100 0" />
				</svg>
			{/if}
		</h3>
	</a>
</li>

<style>
	li {
		margin-bottom: 2rem;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
		background-color: var(--bg-color);
	}

	li:focus-within {
		outline: var(--outline);
		background-color: var(--bg-accent);
	}

	li:hover {
		background-color: var(--bg-accent);
	}

	time,
	h3 {
		min-height: 3rem;
		padding: 0 0.4rem;
		display: flex;
		align-items: center;
	}

	time {
		flex-shrink: 0;
		background-color: var(--bg-accent);
	}

	h3 {
		margin-left: 2rem;
	}

	a {
		outline: none;
	}

	svg {
		width: 2rem;
		height: 2rem;
		margin-left: 1rem;
		flex-shrink: 0;
	}

	path {
		fill: none;
		stroke: var(--text-color);
		stroke-linejoin: miter;
	}
</style>
