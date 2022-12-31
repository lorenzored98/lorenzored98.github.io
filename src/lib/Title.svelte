<script>
	export let timestamp;
	import { timestampToDate } from "$utils/date";

	const { date, datetime } = timestampToDate(timestamp);
</script>

<div class="container">
	<div class="not_the_title">
		<a href="/">Back</a>
		<time {datetime}>{date}</time>
	</div>
	<h1><slot /></h1>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-bottom: 2rem;
		width: 100%;
	}

	.not_the_title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		margin-bottom: 2rem;
	}

	a {
		text-decoration: underline;
		color: var(--link);
		margin-right: 1rem;
	}

	a,
	time {
		font-size: 1.6rem;
	}

	a:hover,
	a:focus {
		color: var(--link-highlight);
	}
</style>
