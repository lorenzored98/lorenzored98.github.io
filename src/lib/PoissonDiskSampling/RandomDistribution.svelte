<script>
	import { randomIntInRange } from "../../utils/math";
	import { onMount } from "svelte";

	const aspect = 0.5;
	let canvas;
	let ctx;
	let w = 0;
	let h = 0;
	let nPoints = 200;

	function main() {
		if (!ctx) return;

		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, w, h);

		const r = Math.floor(Math.sqrt(w * h) / 120);

		ctx.fillStyle = "black";
		for (let i = 0; i < nPoints; i++) {
			const x = randomIntInRange(0, w);
			const y = randomIntInRange(0, h);

			ctx.beginPath();
			ctx.arc(x, y, r, 0, Math.PI * 2);
			ctx.fill();
		}
	}

	onMount(() => {
		ctx = canvas.getContext("2d");

		function resize() {
			w = canvas.clientWidth;
			h = Math.floor(w * aspect);

			canvas.width = w;
			canvas.height = h;
			canvas.style.height = h + "px";

			main();
		}

		window.addEventListener("resize", resize, { passive: true });

		resize();
		main();

		return () => window.removeEventListener("resize", resize);
	});
</script>

<div class="container">
	<canvas bind:this={canvas} />
	<fieldset>
		<div class="group">
			<label for="points">N Points </label>
			<input
				id="points"
				type="number"
				bind:value={nPoints}
				on:input={main}
				min={0}
				max={5000}
			/>
		</div>
		<div class="group">
			<button on:click={main}>Run</button>
		</div>
	</fieldset>
</div>

<style>
	.container {
		width: 100%;
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr 100px;
	}

	canvas {
		width: 100%;
		border: 1px solid var(--text-color-light);
	}

	fieldset {
		flex-shrink: 0;
		margin: 0 0 0 1rem;
	}

	.group {
		margin: 0 0 1rem 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}

	input {
		width: 80px;
	}

	@media only screen and (max-width: 600px) {
		.container {
			display: flex;
			flex-direction: column;
		}

		fieldset {
			margin: 1rem 0 0 0;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: flex-end;
			flex-wrap: wrap;
		}

		.group {
			margin: 0 1rem 0 0;
		}
	}
</style>
