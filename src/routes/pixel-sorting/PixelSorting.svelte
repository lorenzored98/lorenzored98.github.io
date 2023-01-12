<script>
	import { onMount } from "svelte";
	import { randomIntInRange, gammaInv } from "$utils/math";
	import DemoContainer from "$lib/DemoContainer.svelte";
	import NumberRange from "$lib/NumberRange.svelte";
	import ImageSelect from "$lib/ImageSelect.svelte";

	let innerWidth = 0;
	let container;
	let canvas;
	let ctx;
	let w = 0;
	let h = 0;
	let rafId = 0;
	let img;
	let y = 0;
	// How many random pixels to get per pixel sampled
	// The higher the better the effect but slower
	let _samples = 50;
	const minSamples = 1;
	const maxSamples = 100;
	let _isRunning = false;
	let _src = "/images/ukiyo-e.webp";
	let imageData = null;
	let oklabData = null;

	onMount(() => {
		ctx = canvas.getContext("2d");
		container = document.getElementById("pixel-sorting-demo");
		innerWidth = Math.floor(window.innerWidth);

		function resize() {
			const iw = Math.floor(window.innerWidth);
			if (iw === innerWidth) {
				return;
			}

			innerWidth = iw;

			imageSize();
		}

		function imageSize() {
			_isRunning = false;

			const maxW = container.clientWidth;
			const maxH = window.innerHeight - window.innerHeight / 4;

			w = img.width;
			h = img.height;

			if (maxW > 0 && maxH > 0) {
				if (w > maxW) {
					const aspect = maxW / w;
					w *= aspect;
					h *= aspect;
				}

				if (h > maxH) {
					const aspect = maxH / h;
					w *= aspect;
					h *= aspect;
				}

				w = Math.floor(w);
				h = Math.floor(h);
			}

			canvas.width = w;
			canvas.height = h;
			canvas.style.width = `${w}px`;
			canvas.style.height = `${h}px`;

			setup();
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

	function setup() {
		_isRunning = false;
		window.cancelAnimationFrame(rafId);

		if (w === 0 || h === 0) return;

		ctx.clearRect(0, 0, w, h);
		ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, w, h);

		y = 0;

		imageData = ctx.getImageData(0, 0, w, h);
		oklabData = new Array(w * h * 4);

		const data = imageData.data;
		for (let i = 0; i < data.length; i += 4) {
			const [l, a, b] = oklab(data[i], data[i + 1], data[i + 2]);
			oklabData[i] = l;
			oklabData[i + 1] = a;
			oklabData[i + 2] = b;
			oklabData[i + 3] = -1;
		}
	}

	function start() {
		const startI = y * w * 4;

		if (startI === imageData.data.length) {
			setup();
		}
		_isRunning = true;
		main();
	}

	function pause() {
		_isRunning = false;
	}

	function main() {
		const data = imageData.data;
		const startI = y * w * 4;

		if (startI === imageData.data.length) {
			_isRunning = false;
			return;
		}

		if (_isRunning) {
			rafId = window.requestAnimationFrame(main);
		}

		for (let i = startI; i < startI + w * 4; i += 4) {
			// Get pixel matrix
			const matrix = [];

			const x = Math.floor((i / 4) % w);

			if (x > 0) {
				// TL
				if (y > 0) {
					const index = i - w * 4 - 4;
					if (data[index + 3] > 0) {
						matrix.push(
							oklabData[index],
							oklabData[index + 1],
							oklabData[index + 2]
						);
					}
				}
				// L
				const index = i - 4;
				if (data[index + 3] > 0) {
					matrix.push(
						oklabData[index],
						oklabData[index + 1],
						oklabData[index + 2]
					);
				}

				// // BL
				// if (y < h) {
				// 	const index = i + w * 4 - 4;
				// 	if (data[index + 3] > 0) {
				// 		matrix.push(
				// 			oklabData[index],
				// 			oklabData[index + 1],
				// 			oklabData[index + 2]
				// 		);
				// 	}
				// }
			}

			if (x < w) {
				// // TR
				// if (y > 0) {
				//   const index = i - w * 4 + 4;
				//   if (data[index + 3] > 0) {
				//     matrix.push(
				//       oklabData[index],
				//       oklabData[index + 1],
				//       oklabData[index + 2]
				//     );
				//   }
				// }
				// // R
				// const index = i + 4;
				// if (data[index + 3] > 0) {
				// 	matrix.push(
				// 		oklabData[index],
				// 		oklabData[index + 1],
				// 		oklabData[index + 2]
				// 	);
				// }
				// // BR
				// if (y < h) {
				// 	const index = i + w * 4 + 4;
				// 	if (data[index + 3] > 0) {
				// 		matrix.push(
				// 			oklabData[index],
				// 			oklabData[index + 1],
				// 			oklabData[index + 2]
				// 		);
				// 	}
				// }
			}

			if (y > 0) {
				// T
				const index = i - w * 4;
				if (data[index + 3] > 0) {
					matrix.push(
						oklabData[index],
						oklabData[index + 1],
						oklabData[index + 2]
					);
				}
			}

			// if (y < h) {
			// 	// B
			// 	const index = i + w * 4;
			// 	if (data[index + 3] > 0) {
			// 		matrix.push(
			// 			oklabData[index],
			// 			oklabData[index + 1],
			// 			oklabData[index + 2]
			// 		);
			// 	}
			// }

			// Get array of random N pixels not processed
			const pixels = [];
			const indices = new Array(_samples);

			for (let j = 0; j < _samples; j++) {
				const px = randomIntInRange(x, w);
				const py = randomIntInRange(y, h);
				const pIndex = (py * w + px) * 4;

				pixels.push(
					oklabData[pIndex],
					oklabData[pIndex + 1],
					oklabData[pIndex + 2]
				);
				indices[j] = pIndex;
			}

			let similarIndex = -1;
			let similarity = Number.POSITIVE_INFINITY;

			for (let j = 0; j < pixels.length; j += 3) {
				// Compute color diff against matrix (the lower it is the more similar)
				let s = 0;
				for (let k = 0; k < matrix.length; k += 3) {
					s += getColorDifference(
						pixels[j],
						matrix[k],
						pixels[j + 1],
						matrix[k + 1],
						pixels[j + 2],
						matrix[k + 2]
					);
				}

				// Divide the score by the number of matrix pixel
				s /= matrix.length / 3;

				if (s < similarity) {
					similarIndex = indices[j / 3];
					similarity = s;
				}
			}

			// Swap pixel with most similar one
			if (similarIndex > -1) {
				let temp = data[i];
				let temp1 = data[i + 1];
				let temp2 = data[i + 2];

				data[i] = data[similarIndex];
				data[i + 1] = data[similarIndex + 1];
				data[i + 2] = data[similarIndex + 2];

				data[similarIndex] = temp;
				data[similarIndex + 1] = temp1;
				data[similarIndex + 2] = temp2;

				temp = oklabData[i];
				temp1 = oklabData[i + 1];
				temp2 = oklabData[i + 2];

				oklabData[i] = oklabData[similarIndex];
				oklabData[i + 1] = oklabData[similarIndex + 1];
				oklabData[i + 2] = oklabData[similarIndex + 2];

				oklabData[similarIndex] = temp;
				oklabData[similarIndex + 1] = temp1;
				oklabData[similarIndex + 2] = temp2;
			}
		}

		ctx.putImageData(imageData, 0, 0);

		y++;
	}

	// https://bottosson.github.io/posts/oklab/
	function oklab(r, g, b) {
		r = gammaInv(r / 255);
		g = gammaInv(g / 255);
		b = gammaInv(b / 255);

		let l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b;
		let m = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b;
		let s = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b;

		l = Math.cbrt(l);
		m = Math.cbrt(m);
		s = Math.cbrt(s);

		return [
			0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
			1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
			0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
		];
	}

	function getColorDifference(l1, l2, a1, a2, b1, b2) {
		const l = l2 - l1;
		const a = a2 - a1;
		const b = b2 - b1;
		return Math.sqrt(l * l + a * a + b * b);
	}
</script>

<DemoContainer caption="Pixel Sorting" id="pixel-sorting-demo">
	<canvas bind:this={canvas} slot="canvas" />
	<fieldset slot="controls">
		<div class="demo-input-group">
			<label for="pixel-sorting-samples">Samples: ({_samples})</label>
			<NumberRange
				id="pixel-sorting-samples"
				bind:value={_samples}
				min={minSamples}
				max={maxSamples}
				onChange={null}
			/>
		</div>

		<div class="demo-input-group">
			<ImageSelect
				id="pixel-sorting-images"
				bind:value={_src}
				onChange={() => {
					img.src = _src;
					main();
				}}
			/>
		</div>

		<div class="demo-multi-input-group">
			<div class="demo-input-group">
				<button on:click={start} disabled={_isRunning}>Start</button>
			</div>
			<div class="demo-input-group">
				<button on:click={pause} disabled={!_isRunning}>Pause</button>
			</div>
			<div class="demo-input-group">
				<button on:click={setup}>Reset</button>
			</div>
		</div>
	</fieldset>
</DemoContainer>

<style>
	canvas {
		pointer-events: none;
	}

	.demo-multi-input-group {
		align-self: center;
	}
</style>
