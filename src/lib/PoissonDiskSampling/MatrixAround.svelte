<script>
	import Checkbox from "$lib/Shared/Checkbox.svelte";
	import { onMount } from "svelte";
	import { randomIntInRange } from "../../utils/math";

	const aspect = 0.5;
	let canvas;
	let ctx;
	let w = 0;
	let h = 0;
	let dpr = 1;

	const nPoints = 25;
	let pointR = 1;
	let points = [];

	let radius = 50;
	let corners = false;

	let pointerX = 0;
	let pointerY = 0;

	const TWO_PI = Math.PI * 2;
	const step = TWO_PI / 32;
	const n = 3;

	function setup() {
		points = [];

		pointR = Math.floor(Math.sqrt(w * h) / 120);
		for (let i = 0; i < nPoints; i++) {
			const x = randomIntInRange(0, w);
			const y = randomIntInRange(0, h);

			points.push(x, y);
		}
	}

	function visualize() {
		if (!ctx) return;

		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, w, h);

		ctx.fillStyle = "black";
		for (let i = 0; i < points.length; i += 2) {
			ctx.beginPath();
			ctx.arc(points[i], points[i + 1], pointR, 0, Math.PI * 2);
			ctx.fill();
		}

		const size = radius / Math.SQRT2;

		ctx.strokeStyle = "black";
		ctx.lineWidth = 1;
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

		const xIndex = Math.floor(pointerX / size);
		const yIndex = Math.floor(pointerY / size);

		// Could use a radial gradient here.
		ctx.fillStyle = "rgba(255, 0, 0, 0.5)";

		ctx.fillRect(xIndex * size, yIndex * size, size, size);
		ctx.fillRect(xIndex * size, (yIndex + 1) * size, size, size);
		ctx.fillRect(xIndex * size, (yIndex + 2) * size, size, size);
		ctx.fillRect(xIndex * size, (yIndex - 1) * size, size, size);
		ctx.fillRect(xIndex * size, (yIndex - 2) * size, size, size);

		ctx.fillRect((xIndex + 1) * size, yIndex * size, size, size);
		ctx.fillRect((xIndex + 1) * size, (yIndex + 1) * size, size, size);
		ctx.fillRect((xIndex + 1) * size, (yIndex + 2) * size, size, size);
		ctx.fillRect((xIndex + 1) * size, (yIndex - 1) * size, size, size);
		ctx.fillRect((xIndex + 1) * size, (yIndex - 2) * size, size, size);

		ctx.fillRect((xIndex + 2) * size, yIndex * size, size, size);
		ctx.fillRect((xIndex + 2) * size, (yIndex + 1) * size, size, size);
		ctx.fillRect((xIndex + 2) * size, (yIndex - 1) * size, size, size);

		ctx.fillRect((xIndex - 1) * size, yIndex * size, size, size);
		ctx.fillRect((xIndex - 1) * size, (yIndex + 1) * size, size, size);
		ctx.fillRect((xIndex - 1) * size, (yIndex + 2) * size, size, size);
		ctx.fillRect((xIndex - 1) * size, (yIndex - 1) * size, size, size);
		ctx.fillRect((xIndex - 1) * size, (yIndex - 2) * size, size, size);

		ctx.fillRect((xIndex - 2) * size, yIndex * size, size, size);
		ctx.fillRect((xIndex - 2) * size, (yIndex + 1) * size, size, size);
		ctx.fillRect((xIndex - 2) * size, (yIndex - 1) * size, size, size);

		if (corners) {
			ctx.fillRect((xIndex - 2) * size, (yIndex - 2) * size, size, size);
			ctx.fillRect((xIndex + 2) * size, (yIndex - 2) * size, size, size);
			ctx.fillRect((xIndex - 2) * size, (yIndex + 2) * size, size, size);
			ctx.fillRect((xIndex + 2) * size, (yIndex + 2) * size, size, size);
		}

		ctx.fillStyle = "black";
		ctx.beginPath();
		ctx.arc(
			xIndex * size + size / 2,
			yIndex * size + size / 2,
			2,
			0,
			Math.PI * 2
		);
		ctx.fill();

		ctx.beginPath();

		for (let angle = 0; angle < TWO_PI; angle += step) {
			const c = Math.cos(angle);
			const s = Math.sin(angle);

			const x =
				Math.pow(Math.abs(c), 2 / n) *
					(radius + size / 2) *
					Math.sign(c) +
				(xIndex * size + size / 2);
			const y =
				Math.pow(Math.abs(s), 2 / n) *
					(radius + size / 2) *
					Math.sign(s) +
				(yIndex * size + size / 2);

			if (angle === 0) {
				ctx.moveTo(x, y);
			} else {
				ctx.lineTo(x, y);
			}
		}

		ctx.closePath();
		ctx.stroke();
	}

	function main() {
		if (radius < 1 || Number.isNaN(radius)) {
			radius = 1;
		}
		setup();
		visualize();
	}

	onMount(() => {
		ctx = canvas.getContext("2d");

		function resize() {
			w = canvas.clientWidth;
			h = Math.floor(w * aspect);

			dpr = Math.min(window.devicePixelRatio, 2);

			canvas.style.height = h + "px";

			w *= dpr;
			h *= dpr;
			canvas.width = w;
			canvas.height = h;

			pointerX = w / 2;
			pointerY = h / 2;

			main();
		}

		window.addEventListener("resize", resize, { passive: true });

		resize();
		main();

		function pointerMove(e) {
			pointerX = Math.max(0, e.offsetX * dpr);
			pointerY = Math.max(0, e.offsetY * dpr);
			visualize();
		}

		canvas.addEventListener("pointermove", pointerMove);

		return () => {
			window.removeEventListener("resize", resize);
			canvas.removeEventListener("pointermove", pointerMove);
		};
	});
</script>

<div class="container">
	<canvas bind:this={canvas} />
	<fieldset>
		<div class="group">
			<label for="radius">Radius</label>
			<input
				id="radius"
				type="number"
				bind:value={radius}
				on:input={main}
				min={1}
				max={100}
			/>
		</div>
		<div class="group">
			<label for="corners">Corners</label>
			<Checkbox
				id="corners"
				bind:checked={corners}
				onChange={visualize}
			/>
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
			margin: 0 1rem 1rem 0;
		}
	}
</style>
