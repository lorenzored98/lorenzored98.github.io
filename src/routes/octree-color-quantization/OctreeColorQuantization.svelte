<script>
	import { onMount } from "svelte";
	import DemoContainer from "$lib/DemoContainer.svelte";
	import ImageSelect from "$lib/ImageSelect.svelte";
	import NumberRange from "$lib/NumberRange.svelte";
	import { debounce } from "$utils/core";

	class Octree {
		constructor(center, size, depth = Number.POSITIVE_INFINITY) {
			this.node = new OctreeNode(center, size);
			this.depth = depth;
		}

		insert(point, node = this.node) {
			const isLeaf = node.children === null;

			if (isLeaf) {
				if (node.data) {
					if (
						node.data[0] === point[0] &&
						node.data[1] === point[1] &&
						node.data[2] === point[2]
					) {
						return;
					}

					const depth = this.getDepth(node);
					if (depth >= this.depth) return;

					const data = [...node.data];
					node.data = null;

					node.divide();

					const dataIndex = this.getIndex(node.center, data);
					node.children[dataIndex].data = data;

					this.insert(point, node);
				} else {
					node.data = point;
				}
			} else {
				const index = this.getIndex(node.center, point);
				this.insert(point, node.children[index]);
			}
		}

		getIndex(center, position) {
			// Indices, the idea is that each bit will represent where in the 2x2x2 subdivision
			// our position is. That way with only 3 checks we can cover 8 possible indices.
			// So we check if it's top or bottom, right or left, front or back.
			let index = 0;

			index |= center[1] > position[1] ? 0 : 4;
			index |= center[0] > position[0] ? 0 : 2;
			index |= center[2] > position[2] ? 0 : 1;

			return index;
		}

		getDepth(node) {
			let s = node.size;

			let d = 0;

			while (this.node.size > s) {
				s *= 2;
				d++;
			}

			return d;
		}

		dfs(cb, startNode = this.node) {
			const traverse = (node) => {
				cb(node);
				if (node.children) {
					node.children.forEach((n) => traverse(n));
				}
			};

			traverse(startNode);
		}
	}

	class OctreeNode {
		constructor(center, size) {
			this.center = center;
			this.size = size;
			this.children = null;
			this.data = null;
		}

		divide() {
			this.children = new Array(8);
			for (let i = 0; i < this.children.length; i++) {
				const newCenter = [...this.center];
				const d = this.size * 0.25;

				// Similarly to how we get the index, with a bitwise AND we can find out
				// where the cube goes using only 3 checks, top or bottom, right or left, front or back

				(i & 4) === 4 ? (newCenter[1] += d) : (newCenter[1] -= d);
				(i & 2) === 2 ? (newCenter[0] += d) : (newCenter[0] -= d);
				(i & 1) === 1 ? (newCenter[2] += d) : (newCenter[2] -= d);

				this.children[i] = new OctreeNode(newCenter, this.size * 0.5);
			}
		}
	}

	let innerWidth = 0;
	let container;
	let canvas;
	let ctx;
	let w = 0;
	let h = 0;
	let img;
	const minK = 1;
	let _k = 8;
	const maxK = 255;
	let _src = "/images/ukiyo-e.webp";
	let imageData;
	let rgba;
	let colorCubes = [];

	const size = 256;
	const depth = 8; // max depth is 8 anyway (8^8 , 256^3 colors);
	const c = size / 2;
	let octree;

	onMount(() => {
		ctx = canvas.getContext("2d");
		container = document.getElementById("octree-color-quantization-demo");
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
		octree = new Octree([c, c, c], size, depth);

		if (w === 0 || h === 0) return;

		ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, w, h);

		imageData = ctx.getImageData(0, 0, w, h);
		rgba = [...imageData.data];

		for (let i = 0; i < imageData.data.length; i += 4) {
			octree.insert([rgba[i], rgba[i + 1], rgba[i + 2]]);
		}

		colorCubes = [];

		setColorCubes();
		main();
	}

	function main() {
		const map = quantize(_k);

		const data = imageData.data;
		for (let i = 0; i < data.length; i += 4) {
			const s = colorToString(rgba[i], rgba[i + 1], rgba[i + 2]);

			const rgb = map[s];

			data[i] = rgb[0];
			data[i + 1] = rgb[1];
			data[i + 2] = rgb[2];
		}

		ctx.putImageData(imageData, 0, 0);
	}

	const debouncedMain = debounce(main, 100);

	// Get the k most populated cubes
	// And swap the colors for the average of the colors they contain
	// Converting rgb to lab is preferred for a better palette
	function setColorCubes() {
		octree.dfs((n) => {
			const colors = [];

			octree.dfs((n) => {
				if (n.data !== null) {
					colors.push(n.data[0], n.data[1], n.data[2]);
				}
			}, n);

			colorCubes.push(colors);
		});

		// Sort by size, bigger first
		colorCubes.sort((a, b) => {
			if (a.length > b.length) {
				return -1;
			} else if (b.length > a.length) {
				return 1;
			} else {
				return 0;
			}
		});
	}

	function quantize(k) {
		const map = {};

		for (let i = 0; i < k; i++) {
			const colors = colorCubes[i];

			let strings = [];

			let r = 0;
			let g = 0;
			let b = 0;

			for (let j = 0; j < colors.length; j += 3) {
				const s = colorToString(
					colors[j],
					colors[j + 1],
					colors[j + 2]
				);
				strings.push(s);

				r += colors[j];
				g += colors[j + 1];
				b += colors[j + 2];
			}

			const s = colors.length / 3;

			r /= s;
			g /= s;
			b /= s;

			const col = [r, g, b];

			for (let j = 0; j < strings.length; j++) {
				map[strings[j]] = col;
			}
		}

		return map;
	}

	function colorToString(r, g, b) {
		return r + "," + g + "," + b;
	}
</script>

<DemoContainer
	caption="Octree Color Quantization"
	id="octree-color-quantization-demo"
>
	<canvas bind:this={canvas} slot="canvas" />
	<fieldset slot="controls">
		<div class="demo-input-group">
			<label for="colors">Colors: ({_k})</label>
			<NumberRange
				id="colors"
				bind:value={_k}
				min={minK}
				max={maxK}
				step={1}
				onChange={debouncedMain}
			/>
		</div>

		<div class="demo-input-group">
			<ImageSelect
				id="image-select"
				bind:value={_src}
				onChange={() => {
					img.src = _src;
					setup();
				}}
			/>
		</div>
	</fieldset>
</DemoContainer>

<style>
	canvas {
		pointer-events: none;
	}
</style>
