<script>
	export let href;
	export let timestamp;

	const d = new Date(timestamp * 1000);

	const date = Intl.DateTimeFormat(undefined, {
		month: "long",
		day: "numeric",
	}).format(d);

	// YYYY-MM-DD https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time
	// Surprised to not see date.toDateString() as a valid option
	const datetime = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
</script>

<li>
	<time {datetime}><span>{date}</span></time>
	<a {href}><h3><span><slot /></span></h3></a>
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
</style>
