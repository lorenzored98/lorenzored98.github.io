<script>
	import { onMount } from "svelte";
	import { randomIntInRange } from "$utils/math";
	import DemoContainer from "$lib/DemoContainer.svelte";
	import NumberRange from "$lib/NumberRange.svelte";

	const aspect = 0.5;
	let canvas;
	let ctx;
	let dpr = 1;
	let w = 0;
	let h = 0;

	const minRadius = 20;
	const minSamples = 1;

	let _radius = 50;
	let _samples = 30;

	let iterations = 0;

	function main() {
		const radius = Math.max(minRadius, Number(_radius));
		const samples = Math.max(minSamples, Number(_samples));
		const size = radius / Math.SQRT2;
		const nPoints = Math.floor((w / size) * (h / size));

		const points = [];

		iterations = 0;

		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, w, h);

		ctx.fillStyle = "black";

		for (let i = 0; i < nPoints; i++) {
			for (let j = samples; j > 0; j--) {
				const x = randomIntInRange(0, w);
				const y = randomIntInRange(0, h);

				let valid = true;
				for (let k = 0; k < points.length; k++) {
					iterations++;

					const point = points[k];

					const a = point[0] - x;
					const b = point[1] - y;

					const d = Math.sqrt(a * a + b * b);

					if (d < radius) {
						valid = false;
						break;
					}
				}

				if (valid) {
					points.push([x, y]);
					break;
				}
			}
		}

		for (let i = 0; i < points.length; i++) {
			ctx.beginPath();
			ctx.arc(points[i][0], points[i][1], size / 3, 0, Math.PI * 2);
			ctx.fill();
		}
	}

	onMount(() => {
		ctx = canvas.getContext("2d");

		function resize() {
			dpr = Math.min(window.devicePixelRatio, 2);

			if (canvas.clientWidth * dpr === w) {
				return;
			}

			w = canvas.clientWidth;
			h = Math.floor(w * aspect);

			canvas.style.height = h + "px";

			w *= dpr;
			h *= dpr;
			canvas.width = w;
			canvas.height = h;

			main();
		}

		window.addEventListener("resize", resize, { passive: true });

		resize();

		return () => window.removeEventListener("resize", resize);
	});
</script>

<DemoContainer caption="Naive Distribution">
	<canvas bind:this={canvas} slot="canvas" />
	<fieldset slot="controls">
		<div class="demo-input-group">
			<label for="naive-radius">Radius</label>
			<NumberRange
				id="naive-radius"
				bind:value={_radius}
				onChange={main}
				min={minRadius}
				max={100}
			/>
		</div>
		<div class="demo-input-group">
			<label for="naive-samples">Samples</label>
			<NumberRange
				id="naive-samples"
				bind:value={_samples}
				onChange={main}
				min={minSamples}
				max={30}
			/>
		</div>

		<div class="demo-input-group run">
			<button on:click={main}>Run</button>
			<span>Iterations: {iterations}</span>
		</div>
	</fieldset>
</DemoContainer>

<style>
	canvas {
		pointer-events: none;
	}

	.run {
		display: flex;
		flex-direction: row;
		align-items: center;
		align-self: center;
	}

	.run button {
		margin-right: 1rem;
	}
</style>
