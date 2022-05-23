<script>
	import { onMount } from "svelte";
	import { randomIntInRange } from "../../utils/math";
	import DemoContainer from "$lib/Shared/DemoContainer.svelte";

	const aspect = 0.5;
	let canvas;
	let ctx;
	let dpr = 1;
	let w = 0;
	let h = 0;
	let nPoints = 200;

	let pointR = 1;

	function main() {
		if (!ctx) return;

		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, w, h);

		ctx.fillStyle = "black";
		for (let i = 0; i < nPoints; i++) {
			const x = randomIntInRange(0, w);
			const y = randomIntInRange(0, h);

			ctx.beginPath();
			ctx.arc(x, y, pointR, 0, Math.PI * 2);
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

			pointR = Math.floor(Math.sqrt(w * h) / 120);

			main();
		}

		window.addEventListener("resize", resize, { passive: true });

		resize();
		main();

		return () => window.removeEventListener("resize", resize);
	});
</script>

<DemoContainer caption="Random Distribution">
	<canvas bind:this={canvas} />
	<fieldset>
		<div class="demo-input-group">
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
		<div class="demo-input-group">
			<button on:click={main}>Run</button>
		</div>
	</fieldset>
</DemoContainer>

<style>
	canvas {
		pointer-events: none;
	}
</style>
