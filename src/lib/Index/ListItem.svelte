<script>
	import { timestampToDate } from "$utils/date";
	export let href;
	export let timestamp;

	const { date, datetime } = timestampToDate(timestamp);
</script>

<li>
	<a {href}>
		<h2>
			<slot />
		</h2>
	</a>
	<time {datetime}>{date}</time>
</li>

<style>
	li {
		margin-bottom: 2rem;
		display: grid;
		grid-template-columns: 1fr 100px;
		grid-template-rows: 1fr;
		gap: 0.6rem;
		border-radius: var(--border-radius);
		padding: 0.2rem 0.4rem;
		width: 100%;
	}

	li:focus-within {
		outline: var(--outline);
		color: black;
	}

	li:hover {
		color: black;
	}

	time {
		justify-self: flex-end;
		margin-top: 0.85rem;
	}

	a {
		outline: none;
	}

	h2 {
		color: inherit;
	}
</style>
