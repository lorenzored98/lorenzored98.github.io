<script>
	import { onMount } from "svelte";
	import DemoContainer from "$lib/DemoContainer.svelte";
	import ImageSelect from "$lib/ImageSelect.svelte";
	import NumberRange from "$lib/NumberRange.svelte";
	import Checkbox from "$lib/Checkbox.svelte";
	import { debounce } from "../../utils/core";

	let innerWidth = 0;
	let container;
	let canvas;
	let ctx;
	let w = 0;
	let h = 0;
	let img;
	let rgba;
	let _src = "/images/starrynight.webp";
	const minDepth = 1;
	let _depth = 6;
	const maxDepth = 8;
	let _showBounds = true;
	const minColorDiff = 0.0;
	let _colorDiff = 0.1;
	const maxColorDiff = 0.3;

	class CompressionQuadtree {
		constructor(center, size, depth = Number.POSITIVE_INFINITY) {
			this.node = new QuadtreeNode(center, size);
			this.depth = depth;
		}

		insert(point, node = this.node) {
			const isLeaf = node.children === null;

			if (isLeaf) {
				if (node.data) {
					if (
						node.data[0] === point[0] &&
						node.data[1] === point[1]
					) {
						return;
					}

					const depth = this.getDepth(node);

					if (depth >= this.depth) {
						node.data.push(point[2], point[3], point[4]);
					} else {
						const data = [...node.data];
						node.data = null;

						node.divide();

						for (let i = 0; i < node.children.length; i++) {
							node.children[i].data = [...data];
						}

						this.insert(point, node);
					}
				} else {
					node.data = [point[2], point[3], point[4]];
				}
			} else {
				const index = this.getIndex(node.center, point);
				this.insert(point, node.children[index]);
			}
		}

		getIndex(center, position) {
			let index = 0;

			index |= center[0] > position[0] ? 0 : 1;
			index |= center[1] > position[1] ? 0 : 2;

			return index;
		}

		getDepth(node) {
			const maxS = this.node.size[0];
			let s = node.size[0];

			let d = 0;

			while (maxS > s) {
				s *= 2;
				d++;
			}

			return d;
		}
	}

	class QuadtreeNode {
		constructor(center, size) {
			this.center = center;
			this.size = size;
			this.children = null;
			this.data = null;
		}

		divide() {
			this.children = new Array(4);

			for (let i = 0; i < this.children.length; i++) {
				const newCenter = [...this.center];
				const dx = this.size[0] * 0.25;
				const dy = this.size[1] * 0.25;

				(i & 1) === 1 ? (newCenter[0] += dx) : (newCenter[0] -= dx);
				(i & 2) === 2 ? (newCenter[1] += dy) : (newCenter[1] -= dy);

				this.children[i] = new QuadtreeNode(newCenter, [
					this.size[0] * 0.5,
					this.size[1] * 0.5,
				]);
			}
		}
	}

	onMount(() => {
		ctx = canvas.getContext("2d");
		container = document.getElementById("quadtree-image-compression-demo");
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
		const canvas = document.createElement("canvas");
		const ctx = canvas.getContext("2d");

		canvas.width = w;
		canvas.height = h;

		if (w === 0 || h === 0) return;

		ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, w, h);

		rgba = ctx.getImageData(0, 0, w, h).data;

		main();
	}

	function main() {
		const quadtree = new CompressionQuadtree(
			[w / 2, h / 2],
			[w, h],
			_depth
		);

		const draw = (node) => {
			const { center, size } = node;

			if (_showBounds) {
				ctx.lineWidth = 1;
				ctx.strokeStyle = "black";
				ctx.fillStyle = "black";
				ctx.strokeRect(
					center[0] - size[0] / 2,
					center[1] - size[1] / 2,
					size[0],
					size[1]
				);
			}

			if (node.data) {
				let r = 0;
				let g = 0;
				let b = 0;
				for (let i = 0; i < node.data.length; i += 3) {
					r += node.data[i];
					g += node.data[i + 1];
					b += node.data[i + 2];
				}

				const n = node.data.length / 3;

				r /= n;
				g /= n;
				b /= n;

				const style = `rgb(${r},${g},${b})`;
				ctx.fillStyle = style;
				ctx.strokeStyle = style;

				ctx.fillRect(
					center[0] - size[0] / 2,
					center[1] - size[1] / 2,
					size[0],
					size[1]
				);
				ctx.strokeRect(
					center[0] - size[0] / 2,
					center[1] - size[1] / 2,
					size[0],
					size[1]
				);
			}

			if (node.children) {
				for (let i = 0; i < node.children.length; i++) {
					draw(node.children[i]);
				}
			}
		};

		for (let i = 0; i < rgba.length; i += 4) {
			const x = (i / 4) % w;
			const y = Math.floor(i / 4 / w);

			quadtree.insert([x, y, rgba[i], rgba[i + 1], rgba[i + 2]]);
		}

		const prune = (node, colorDiff) => {
			let parent = node;
			let pruneAgain = false;

			const traverse = (node, index = 0) => {
				if (node.children) {
					parent = node;
					node.children.forEach((n, i) => traverse(n, i));
				} else {
					// TODO:
					// Not sure why but I have to make this check
					// otherwise depending on depth and maxDiff it can fail?
					if (!parent.children) return;

					if (index !== 3) return;
					let r = 0;
					let g = 0;
					let b = 0;
					let len = 0;

					for (let i = 0; i < parent.children.length; i++) {
						const n = parent.children[i];

						const dataLen = n.data.length / 3;

						len += dataLen;

						let _r = 0;
						let _g = 0;
						let _b = 0;

						for (let j = 0; j < n.data.length; j += 3) {
							r += n.data[j];
							g += n.data[j + 1];
							b += n.data[j + 2];

							_r += n.data[j];
							_g += n.data[j + 1];
							_b += n.data[j + 2];
						}

						_r /= dataLen;
						_g /= dataLen;
						_b /= dataLen;

						n.data = [_r, _g, _b];
					}

					r /= len;
					g /= len;
					b /= len;

					let willPrune = true;

					for (let i = 0; i < parent.children.length; i++) {
						const data = parent.children[i].data;
						const diff = getColorDifference(
							r,
							data[0],
							g,
							data[1],
							b,
							data[2]
						);

						if (diff > colorDiff) {
							willPrune = false;
						}
					}

					if (willPrune) {
						pruneAgain = true;
						parent.children = null;
						parent.data = [r, g, b];
					}
				}
			};

			traverse(node);

			if (pruneAgain) {
				prune(node, colorDiff);
			}
		};

		prune(quadtree.node, _colorDiff);

		draw(quadtree.node);
	}

	// Would work better with something like oklab
	function getColorDifference(r1, r2, g1, g2, b1, b2) {
		const l = (r2 - r1) / 255;
		const a = (g2 - g1) / 255;
		const b = (b2 - b1) / 255;
		return Math.sqrt(l * l + a * a + b * b);
	}

	const debouncedMain = debounce(main, 200);
</script>

<DemoContainer
	caption="Quadtree Image Compression"
	id="quadtree-image-compression-demo"
>
	<canvas bind:this={canvas} slot="canvas" />
	<fieldset slot="controls">
		<div class="demo-input-group">
			<label for="depth">Depth: ({_depth})</label>
			<NumberRange
				id="depth"
				bind:value={_depth}
				min={minDepth}
				max={maxDepth}
				step={1}
				onChange={debouncedMain}
			/>
		</div>

		<div class="demo-input-group">
			<label for="colordifference">Color Diff: ({_colorDiff})</label>
			<NumberRange
				id="colordifference"
				bind:value={_colorDiff}
				min={minColorDiff}
				max={maxColorDiff}
				step={0.01}
				onChange={debouncedMain}
			/>
		</div>

		<div class="demo-input-group">
			<label for="showbounds">Show Bounds</label>
			<Checkbox
				id="showbounds"
				bind:checked={_showBounds}
				onChange={main}
			/>
		</div>

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
	</fieldset>
</DemoContainer>

<style>
	canvas {
		pointer-events: none;
	}
</style>
