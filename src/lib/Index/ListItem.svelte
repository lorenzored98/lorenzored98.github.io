<script>
	import { timestampToDate } from "../../utils/date";
	export let href;
	export let timestamp;
	export let type;

	const { date, datetime } = timestampToDate(timestamp);
</script>

<li>
	<a {href}>
		<h3>
			<slot />
		</h3>
	</a>
	<div>
		<time {datetime}><span>{date}</span></time><span class="dot">•</span
		><span class="type">{type}</span>
	</div>
</li>

<style>
	li {
		margin-bottom: 3rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.6rem;
		border-radius: 4px;
		padding: 0.2rem 0.4rem;
	}

	li:focus-within {
		outline: var(--outline);
	}

	li:focus-within a {
		color: black;
	}

	li:focus-within .dot {
		color: black;
	}

	a {
		outline: none;
		text-decoration: underline;
	}

	a:hover {
		color: black;
	}

	h3 {
		color: inherit;
	}

	.dot {
		color: var(--text-bold);
		margin: 0 0.4rem;
	}

	.type {
		font-size: 1.4rem;
		font-weight: 500;
	}
</style>
