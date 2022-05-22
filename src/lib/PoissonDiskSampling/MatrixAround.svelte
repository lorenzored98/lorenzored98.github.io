<script>
	import { onMount } from "svelte";
	import Checkbox from "../Shared/Checkbox.svelte";

	const aspect = 0.5;
	let canvas;
	let ctx;
	let w = 0;
	let h = 0;

	let radius = 50;
	let corners = false;

	let pointerX = Number.NEGATIVE_INFINITY;
	let pointerY = Number.NEGATIVE_INFINITY;

	function main() {
		if (!ctx) return;

		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, w, h);

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

		const TWO_PI = Math.PI * 2;
		const step = TWO_PI / 128;
		const n = 3;

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

		function pointerMove(e) {
			pointerX = Math.max(0, e.offsetX);
			pointerY = Math.max(0, e.offsetY);
			main();
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
				min={0}
				max={100}
			/>
		</div>
		<div class="group">
			<label for="radius">Corners</label>
			<Checkbox id="radius" bind:checked={corners} onChange={main} />
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
			margin: 0 1rem 0 0;
		}
	}
</style>
