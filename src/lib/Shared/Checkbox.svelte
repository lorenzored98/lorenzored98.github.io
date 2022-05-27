<script>
	export let checked;
	export let onChange;
	export let id;
</script>

<div class={checked ? "fill" : "nofill"}>
	<input {id} type="checkbox" bind:checked on:change={onChange} />
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class={checked ? "fill" : "nofill"}
		viewBox="0 0 512 512"
	>
		<title>Checkmark</title>
		<path
			fill="none"
			stroke-linecap="square"
			stroke-miterlimit="10"
			d="M416 128L192 384l-96-96"
		/>
	</svg>
</div>

<style>
	div {
		width: 3rem;
		height: 3rem;
		border: var(--border);
	}

	div:focus-within {
		outline: var(--outline);
	}

	svg {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		pointer-events: none;
		stroke-width: 3rem;
	}

	.fill {
		background-color: var(--bg-accent);
		stroke: var(--text-color);
	}

	.nofill {
		background-color: var(--bg-color);
		stroke: var(--bg-color);
	}

	input {
		width: 100%;
		height: 100%;
		opacity: 0;
	}
</style>
