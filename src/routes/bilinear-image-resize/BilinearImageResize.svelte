<script>
	import { onMount } from "svelte";
	import DemoContainer from "$lib/DemoContainer.svelte";
	import ImageSelect from "$lib/ImageSelect.svelte";
	import NumberRange from "$lib/NumberRange.svelte";
	import Checkbox from "$lib/Checkbox.svelte";
	import { lerp } from "$utils/math";

	let innerWidth = 0;
	let container;
	let canvas;
	let ctx;
	let offscreenCanvas;
	let offscreenCtx;
	let w = 0;
	let h = 0;
	let img;
	let rgba;
	let _src = "/images/ukiyo-e.webp";
	let aspect = 0;
	const minWidth = 1;
	let _width = 0;
	let maxWidth = 0;
	const minHeight = 1;
	let _height = 0;
	let maxHeight = 0;
	let _lockAspect = true;

	onMount(() => {
		ctx = canvas.getContext("2d");
		innerWidth = Math.floor(window.innerWidth);
		container = document.getElementById("container");

		offscreenCanvas = document.createElement("canvas");
		offscreenCtx = offscreenCanvas.getContext("2d");

		function resize() {
			const iw = Math.floor(window.innerWidth);
			if (iw === innerWidth) {
				return;
			}

			innerWidth = iw;

			imageSize();
		}

		function imageSize() {
			w = img.width;
			h = img.height;
			aspect = w / h;

			const maxW = container.clientWidth;
			const maxH = window.innerHeight - window.innerHeight / 4;

			_width = w;
			_height = h;

			if (maxW > 0 && maxH > 0) {
				if (_width > maxW) {
					const aspect = maxW / _width;
					_width *= aspect;
					_height *= aspect;
				}

				if (_height > maxH) {
					const aspect = maxH / _height;
					_width *= aspect;
					_height *= aspect;
				}

				_width = Math.floor(_width);
				_height = Math.floor(_height);
			}

			canvas.width = _width;
			canvas.height = _height;
			canvas.style.width = `${_width}px`;
			canvas.style.height = `${_height}px`;

			maxWidth = _width;
			maxHeight = _height;

			offscreenCanvas.width = w;
			offscreenCanvas.height = h;

			offscreenCtx.drawImage(img, 0, 0);
			rgba = offscreenCtx.getImageData(0, 0, w, h).data;

			main();
		}

		img = new Image();
		img.crossOrigin = "anonymous";

		img.onload = imageSize;

		img.src = _src;

		window.addEventListener("resize", resize, { passive: true });

		return () => {
			window.removeEventListener("resize", resize);
		};
	});

	function main() {
		ctx.clearRect(0, 0, w, h);

		const imageData = new ImageData(_width, _height);

		for (let i = 0; i < _width; i++) {
			for (let j = 0; j < _height; j++) {
				const x = (i / _width) * (w - 1);
				const y = (j / _height) * (h - 1);

				const gx = Math.floor(x);
				const gy = Math.floor(y);

				const i00 = get(gx, gy);
				const i10 = get(gx + 1, gy);
				const i01 = get(gx, gy + 1);
				const i11 = get(gx + 1, gy + 1);

				let rgb = [0, 0, 0];

				for (let k = 0; k <= 2; k++) {
					const c00 = i00 + k;
					const c10 = i10 + k;
					const c01 = i01 + k;
					const c11 = i11 + k;

					rgb[k] = blerp(
						rgba[c00],
						rgba[c10],
						rgba[c01],
						rgba[c11],
						x - gx,
						y - gy
					);
				}

				set(imageData, i, j, rgb);
			}
		}

		ctx.putImageData(imageData, 0, 0);
	}

	// Gets pixel color index from rgba array (original image pixelData);
	function get(x, y) {
		const i = Math.floor(x * 4 + y * w * 4);
		return i;
	}

	// Sets rgb inside new imageData pixels
	function set(imageData, x, y, rgb) {
		const i = Math.floor(x * 4 + y * _width * 4);

		imageData.data[i + 0] = rgb[0];
		imageData.data[i + 1] = rgb[1];
		imageData.data[i + 2] = rgb[2];

		// Just because I didnt initialize new imageData with alpha
		imageData.data[i + 3] = 255;
	}

	function blerp(c00, c01, c10, c11, tx, ty) {
		return lerp(lerp(c00, c10, tx), lerp(c01, c11, tx), ty);
	}

	// This is only for the demo controls
	function update(t) {
		if (_lockAspect) {
			if (t) {
				_height = Math.floor(_width / aspect);
				if (_height < minHeight) _height = minHeight;
			} else {
				_width = Math.floor(_height * aspect);
				if (_width < minWidth) _width = minWidth;
			}
		}

		main();
	}
</script>

<DemoContainer id="container" caption="Bilinear Image Resize">
	<canvas bind:this={canvas} slot="canvas" />
	<fieldset slot="controls">
		<div class="demo-input-group">
			<ImageSelect
				id="image-select"
				bind:value={_src}
				onChange={() => {
					img.src = _src;
					main();
				}}
			/>
		</div>

		<div class="demo-input-group">
			<label for="width">Width</label>
			<NumberRange
				id="width"
				bind:value={_width}
				min={minWidth}
				max={maxWidth}
				step={1}
				onChange={() => update(true)}
			/>
		</div>

		<div class="demo-input-group">
			<label for="height">Height</label>
			<NumberRange
				id="height"
				bind:value={_height}
				min={minHeight}
				max={maxHeight}
				step={1}
				onChange={() => update(false)}
			/>
		</div>

		<div class="demo-input-group">
			<label for="lock-aspect">Lock Aspect</label>
			<Checkbox
				id="lock-aspect"
				bind:checked={_lockAspect}
				onChange={update}
			/>
		</div>
	</fieldset>
</DemoContainer>

<style>
	canvas {
		pointer-events: none;
	}
</style>
