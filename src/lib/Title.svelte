<script>
	export let timestamp;

	const d = new Date(timestamp * 1000);

	const date = Intl.DateTimeFormat("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	}).format(d);

	// YYYY-MM-DD https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time
	// Surprised to not see date.toDateString() as a valid option
	const datetime = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
</script>

<div>
	<h1><slot /></h1>
	<time {datetime}>{date}</time>
</div>

<style>
	div {
		display: flex;
		align-self: center;
		flex-direction: column;
		margin-bottom: 3rem;
	}

	h1 {
		margin-bottom: 1rem;
	}

	time {
		align-self: flex-end;
	}
</style>
