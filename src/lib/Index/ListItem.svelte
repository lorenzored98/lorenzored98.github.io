<script>
	export let href;
	export let timestamp;

	const d = new Date(timestamp * 1000);

	const date = Intl.DateTimeFormat(undefined, {
		month: "long",
		day: "numeric",
		year: "numeric",
	}).format(d);

	// YYYY-MM-DD https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time
	// Surprised to not see date.toDateString() as a valid option
	const datetime = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
</script>

<li>
	<h2><a {href} rel="nofollow noreferral noopener"><slot /></a></h2>
	<time {datetime}>{date}</time>
</li>

<style>
</style>
