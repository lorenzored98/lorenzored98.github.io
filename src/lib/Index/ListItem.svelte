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
	<time {datetime}>{date}</time>
	<a {href} rel="nofollow noreferral noopener"><h3><slot /></h3></a>
</li>

<style>
	li {
		margin-bottom: 2rem;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
	}

	time {
		flex-shrink: 0;
		padding: 0.3rem 0.2rem;
		background-color: var(--bg-accent-2);
	}

	h3 {
		margin-left: 2rem;
		padding: 0.1rem 0.6rem 0 0.6rem;
	}

	a:hover,
	a:focus {
		background-color: var(--bg-accent-2);
		outline: none;
	}

	@media screen and (min-width: 1px) {
		li {
		}
	}
</style>
