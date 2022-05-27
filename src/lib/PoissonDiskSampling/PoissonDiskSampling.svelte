<script>
	import { onMount } from "svelte";
	import { randomIntInRange } from "../../utils/math";
	import Checkbox from "$lib/Shared/Checkbox.svelte";
	import DemoContainer from "$lib/Shared/DemoContainer.svelte";

	const aspect = 0.5;
	let canvas;
	let ctx;
	let w = 0;
	let h = 0;
	let dpr = 1;

	const minRadius = 10;
	const minSamples = 1;

	let _radius = 50;
	let _samples = 30;
	let showGrid = true;
	let showRadius = true;
	let corners = false;

	let points;

	let iterations = 0;

	function poisson() {
		const radius = Math.max(minRadius, Number(_radius));
		const samples = Math.max(minSamples, Number(_samples));

		const size = radius / Math.SQRT2;
		const gridW = Math.floor(w / size) + 1;
		const gridH = Math.floor(h / size) + 1;

		const rSquared = radius * radius;

		const radius2 = radius * 2;

		const points = new Array(gridW * gridH).fill(null);

		const active = [];

		const startPoint = [randomIntInRange(0, w), randomIntInRange(0, h)];
		const xIndex = Math.floor(startPoint[0] / size);
		const yIndex = Math.floor(startPoint[1] / size);
		const pointIndex = index2DTo1D(xIndex, yIndex, gridW);

		points[pointIndex] = startPoint;
		active.push(pointIndex);

		iterations = 0;

		while (active.length > 0) {
			const activeIndex = randomIntInRange(0, active.length - 1);
			const pointIndex = active[activeIndex];
			const point = points[pointIndex];

			let validPoint = null;

			for (let k = 0; k < samples; k++) {
				const r = radius + radius * Math.sqrt(Math.random());
				const theta = Math.random() * Math.PI * 2;

				const newPoint = [
					point[0] + r * Math.cos(theta),
					point[1] + r * Math.sin(theta),
				];

				newPoint[0] = Math.max(newPoint[0], 0);
				newPoint[0] = Math.min(newPoint[0], w);

				newPoint[1] = Math.max(newPoint[1], 0);
				newPoint[1] = Math.min(newPoint[1], h);

				const xIndex = Math.floor(newPoint[0] / size);
				const yIndex = Math.floor(newPoint[1] / size);

				let collides = false;

				/**
				 * I read that no matter where to point is we just need to look
				 * at the 5x5 grid around our cell.
				 * From my understanding it's not really a 5x5 as I can avoid checking
				 * the 4 corners since I only check if the distance is smaller than 2r not equal or greater.
				 */
				for (let i = 0; i < 25; i++) {
					if (i === 0 || i === 4 || i === 20 || i === 24) {
						if (!corners) {
							continue;
						}
					}

					iterations++;

					const xDiff = Math.floor((i % 5) - 2);
					const yDiff = Math.floor(i / 5 - 2);

					const newXIndex = xIndex + xDiff;
					const newYIndex = yIndex + yDiff;

					if (
						newXIndex > -1 &&
						newXIndex < gridW &&
						newYIndex > -1 &&
						newYIndex < gridH
					) {
						const newIndex = index2DTo1D(
							newXIndex,
							newYIndex,
							gridW
						);

						const p = points[newIndex];

						if (p !== null) {
							const a = p[0] - newPoint[0];
							const b = p[1] - newPoint[1];
							const dSquared = a * a + b * b;

							if (dSquared < rSquared) {
								collides = true;
								break;
							}
						}
					}
				}

				if (!collides) {
					validPoint = newPoint;
					break;
				}
			}

			if (validPoint) {
				const xIndex = Math.floor(validPoint[0] / size);
				const yIndex = Math.floor(validPoint[1] / size);
				const index = index2DTo1D(xIndex, yIndex, gridW);
				points[index] = validPoint;

				active.push(index);
			} else {
				active.splice(activeIndex, 1);
			}
		}

		return points.filter((p) => p !== null);
	}

	function visualize() {
		ctx.fillStyle = "white";
		ctx.strokeStyle = "black";
		ctx.fillRect(0, 0, w, h);

		const radius = Math.max(minRadius, Number(_radius));

		const size = radius / Math.SQRT2;

		if (showGrid) {
			for (let x = 0; x < w; x += size) {
				ctx.beginPath();
				ctx.moveTo(x, 0);
				ctx.lineTo(x, h);
				ctx.stroke();
			}

			for (let y = 0; y < h; y += size) {
				ctx.beginPath();
				ctx.moveTo(0, y);
				ctx.lineTo(w, y);
				ctx.stroke();
			}
		}

		for (let i = 0; i < points.length; i++) {
			const point = points[i];

			ctx.fillStyle = "black";
			ctx.beginPath();
			ctx.arc(point[0], point[1], size / 3, 0, Math.PI * 2);
			ctx.fill();

			if (showRadius) {
				ctx.fillStyle = "rgba(0,0,0,0.15)";
				ctx.beginPath();
				ctx.arc(point[0], point[1], radius, 0, Math.PI * 2);
				ctx.fill();
			}
		}
	}

	function main() {
		points = poisson();
		visualize();
	}

	function index2DTo1D(x, y, width) {
		return Math.floor(y * width + x);
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
		main();

		return () => {
			window.removeEventListener("resize", resize);
		};
	});
</script>

<DemoContainer caption="Poisson Disk Sampling">
	<canvas bind:this={canvas} />
	<fieldset>
		<div class="demo-input-group">
			<label for="poisson-radius">Radius</label>
			<input
				id="poisson-radius"
				type="number"
				bind:value={_radius}
				on:input={main}
				min={minRadius}
				max={100}
			/>
		</div>
		<div class="demo-input-group">
			<label for="poisson-samples">Samples</label>
			<input
				id="poisson-samples"
				type="number"
				bind:value={_samples}
				on:input={main}
				min={minSamples}
				max={50}
			/>
		</div>

		<div class="demo-input-group">
			<label for="poisson-corners">Corners</label>
			<Checkbox
				id="poisson-corners"
				bind:checked={corners}
				onChange={main}
			/>
		</div>

		<div class="demo-input-group">
			<label for="poisson-showgrid">Show Grid</label>
			<Checkbox
				id="poisson-showgrid"
				bind:checked={showGrid}
				onChange={visualize}
			/>
		</div>

		<div class="demo-input-group">
			<label for="poisson-showradius">Show Radius</label>
			<Checkbox
				id="poisson-showradius"
				bind:checked={showRadius}
				onChange={visualize}
			/>
		</div>

		<div class="demo-input-group">
			<button on:click={main}>Run</button>
		</div>

		<div class="demo-input-group">
			<span>Iterations: {iterations}</span>
		</div>
	</fieldset>
</DemoContainer>

<style>
	canvas {
		pointer-events: none;
	}
</style>
