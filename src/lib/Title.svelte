<script>
	export let timestamp;
	import { timestampToDate } from "../utils/date";

	const { date, datetime } = timestampToDate(timestamp);
</script>

<div>
	<h1><slot /></h1>
	<time {datetime}>{date}</time>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-bottom: 3rem;
		width: 100%;
	}

	h1 {
		margin-bottom: 1rem;
	}
</style>
