<script>
	import { lerp, mapRange } from "../utils/math";

	export let min = 0;
	export let max = 0;
	export let value = 0;
	export let step = 1;
	export let id;
	export let onChange;

	let style;

	// TODO: Lots of hardcoded values
	$: style = `transform: translate(-50%, -50%) scale(${
		lerp(200 - 17, 0, mapRange(min, max, 0, max, value) / max) / 200
	}, 1.01)`;
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
		/>
		<div class="gray-bg" {style} />
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

	.input-wrapper {
		display: flex;
	}

	.gray-bg {
		background-color: var(--border-color);
		height: 1rem;
		width: calc(200px - 0.4rem);
		position: absolute;
		top: 50%;
		left: 50%;
		transform-origin: right center;
		pointer-events: none;
	}

	.ranges {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0 0.2rem;
	}

	input[type="range"] {
		-webkit-appearance: none;
		appearance: none;
		background: transparent;
		cursor: pointer;
		width: 200px;
		border: none;
		padding: 0 0.2rem;
	}

	input[type="range"]::-webkit-slider-runnable-track {
		background: var(--bg-accent);
		height: 1rem;
	}

	input[type="range"]::-moz-range-track {
		background: var(--bg-accent);
		height: 1rem;
	}

	input[type="range"]::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		height: 1.8rem;
		width: 1.8rem;
		border: var(--border);
		border-radius: 0;
		background: white;
		transform: translate(0, -4px);
		border-radius: 4px;
	}

	input[type="range"]::-moz-range-thumb {
		height: 1.6rem;
		width: 1.6rem;
		border: var(--border);
		border-radius: 0;
		background: white;
		border-radius: 4px;
	}
</style>
