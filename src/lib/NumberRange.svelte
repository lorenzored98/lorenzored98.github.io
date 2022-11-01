<script>
	export let min = 0;
	export let max = 0;
	export let value = 0;
	export let step = 1;
	export let id;
	export let onChange;

	$: gradientValue = ((value - min) / (max - min)) * 100;
	$: style =
		"background: linear-gradient(to right, var(--link) 0%, var(--link) " +
		gradientValue +
		"%, var(--border-color) " +
		gradientValue +
		"%, var(--border-color) 100%)";
</script>

<div class="wrapper">
	<div class="input-wrapper">
		<input
			type="range"
			bind:value
			on:input={onChange}
			{id}
			{min}
			{max}
			{step}
			{style}
		/>
	</div>
	<div class="ranges">
		<span>{min}</span>
		<span>{max}</span>
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
	}

	.ranges {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0 0.2rem;
	}

	.input-wrapper {
		height: 3rem;
		display: flex;
		align-items: center;
		border-radius: var(--border-radius);
	}

	.input-wrapper:focus-within {
		outline: var(--outline);
	}

	input[type="range"] {
		-webkit-appearance: none;
		appearance: none;
		background: transparent;
		cursor: pointer;
		width: 200px;
		border: none;
		height: 1rem;
		outline: none;
	}

	input::-webkit-slider-runnable-track {
		height: 1rem;
	}

	input::-moz-range-track {
		height: 1rem;
	}

	input::-webkit-slider-thumb:hover,
	input::-moz-range-thumb:hover {
		border-color: var(--border-accent);
	}

	input::-webkit-slider-thumb {
		-webkit-appearance: none;
		transform: translate(0, -4px);
		height: 1.8rem;
		width: 1.8rem;
		border: var(--border);
		border-radius: var(--border-radius);
		background-color: white;
	}

	input::-moz-range-thumb {
		height: 1.6rem;
		width: 1.6rem;
		border: var(--border);
		border-radius: var(--border-radius);
		background-color: white;
	}
</style>
