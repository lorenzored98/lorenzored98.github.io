<script>
	import { onMount } from "svelte";
	import DemoContainer from "$lib/DemoContainer.svelte";
	import NumberRange from "$lib/NumberRange.svelte";
	import { randomIntInRange } from "$utils/math";
	import { createShader, createProgram } from "$ut$utils
	import { debounce } from "$ut$utils";

	const aspect = 0.5;
	let canvas;
	let gl;
	let w = 0;
	let h = 0;
	let dpr = 1;

	let _depth = 8;
	const minDepth = 1;
	const maxDepth = 10;
	let _variation = 128;
	const minVariation = 1;
	const maxVariation = 256;
	let ARR_SIZE;

	let posLoc = -1;
	let colorLoc = -1;
	let vao;
	let vbo;
	let ebo;
	let program;
	let maxIndex;
	const F = Float32Array.BYTES_PER_ELEMENT;

	const vs = `#version 300 es
	in vec2 position;
	in float color;

	out float vColor;
	void main() {
		vColor = color;
		gl_Position = vec4(position, 0.0, 1.0);
	}
	`;

	const fs = `#version 300 es
	precision highp float;

	in float vColor;

	out vec4 outColor;
	void main() {
		outColor = vec4(vec3(vColor), 1.0);
	}
	`;

	onMount(() => {
		gl = canvas.getContext("webgl2");

		if (!gl) return;

		function resize() {
			dpr = Math.min(window.devicePixelRatio, 2);

			if (canvas.clientWidth * dpr === w) {
				return;
			}

			w = canvas.clientWidth;
			h = Math.floor(w * aspect);

			canvas.style.width = w + "px";
			canvas.style.height = h + "px";

			w *= dpr;
			h *= dpr;
			canvas.width = w;
			canvas.height = h;
		}

		window.addEventListener("resize", resize, { passive: true });

		resize();
		setup();
		main();

		return () => {
			window.removeEventListener("resize", resize);
		};
	});

	function setup() {
		const vert = createShader(gl, gl.VERTEX_SHADER, vs);
		const frag = createShader(gl, gl.FRAGMENT_SHADER, fs);
		program = createProgram(gl, { vert, frag });
		posLoc = gl.getAttribLocation(program, "position");
		colorLoc = gl.getAttribLocation(program, "color");

		vao = gl.createVertexArray();
		vbo = gl.createBuffer();
		ebo = gl.createBuffer();
	}

	// I converted this from a canvas2D demo to WebGL for this blog.
	// It would also make sense to just have randoms and variation going from 0 1 or -1 1
	// But I'm lazy
	function midpointDisplacement2D() {
		const heightMap = [];
		let size = 2 ** _depth;
		ARR_SIZE = size + 1;

		let variation = _variation;

		for (let i = 0; i < ARR_SIZE; i++) {
			const row = [];
			for (let j = 0; j < ARR_SIZE; j++) {
				row.push(0);
			}

			heightMap.push(row);
		}

		const startValue = randomIntInRange(0, 255);

		heightMap[0][0] = startValue;
		heightMap[0][size] = startValue;
		heightMap[size][0] = startValue;
		heightMap[size][size] = startValue;

		while (size > 1) {
			const halfSize = size / 2;

			// Set edges midpoint
			for (let y = 0; y < ARR_SIZE - 1; y += size) {
				for (let x = 0; x < ARR_SIZE - 1; x += size) {
					let n = heightMap[y][x] + heightMap[y][x + size];

					n /= 2;
					n += randomIntInRange(-variation, variation);
					heightMap[y][x + halfSize] = n;

					let e =
						heightMap[y][x + size] + heightMap[y + size][x + size];

					e /= 2;
					e += randomIntInRange(-variation, variation);
					heightMap[y + halfSize][x + size] = e;

					let s =
						heightMap[y + size][x + size] + heightMap[y + size][x];

					s /= 2;
					s += randomIntInRange(-variation, variation);
					heightMap[y + size][x + halfSize] = s;

					let w = heightMap[y][x] + heightMap[y + size][x];

					w /= 2;
					w += randomIntInRange(-variation, variation);
					heightMap[y + halfSize][x] = w;
				}
			}

			// Set center from midpoint values
			for (let y = 0; y < ARR_SIZE - 1; y += size) {
				for (let x = 0; x < ARR_SIZE - 1; x += size) {
					let center =
						heightMap[y][x + halfSize] +
						heightMap[y + halfSize][x + size] +
						heightMap[y + size][x + halfSize] +
						heightMap[y + halfSize][x];

					center /= 4;
					center += randomIntInRange(-variation, variation);

					heightMap[y + halfSize][x + halfSize] = center;
				}
			}

			size /= 2;
			variation = Math.max(variation / 2, 1);
		}

		return heightMap;
	}

	function main() {
		const heightMap = midpointDisplacement2D();

		const attrs = [];

		const s = 2 ** _depth;
		for (let y = 0; y < ARR_SIZE; y++) {
			for (let x = 0; x < ARR_SIZE; x++) {
				const value = heightMap[y][x] / 255;
				attrs.push((x / s) * 2 - 1, (1 - y / s) * 2 - 1, value);
			}
		}

		const quads = (2 ** _depth) ** 2;
		let indices = [];

		let q = 0;
		const row = ARR_SIZE;
		let x = 0;
		let y = 0;
		while (q < quads) {
			const i = x + y * row;
			const tl = i + 0;
			const tr = i + 1;
			const bl = i + row + 0;
			const br = i + row + 1;
			indices.push(bl, br, tl, br, tr, tl);
			q++;
			x++;
			if (x === s) {
				x = 0;
				y++;
			}
		}

		maxIndex = indices.length;

		gl.bindVertexArray(vao);
		gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(attrs), gl.STATIC_DRAW);

		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ebo);
		gl.bufferData(
			gl.ELEMENT_ARRAY_BUFFER,
			new Int32Array(indices),
			gl.STATIC_DRAW
		);
		gl.enableVertexAttribArray(posLoc);
		gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 3 * F, 0);
		gl.enableVertexAttribArray(colorLoc);
		gl.vertexAttribPointer(colorLoc, 1, gl.FLOAT, false, 3 * F, 2 * F);

		render();
	}

	const debouncedMain = debounce(main, 300);

	function render() {
		gl.viewport(0, 0, w, h);
		gl.clearColor(0.0, 0.0, 0.0, 1.0);
		gl.clear(gl.COLOR_BUFFER_BIT);

		gl.useProgram(program);
		gl.bindVertexArray(vao);

		gl.drawElements(gl.TRIANGLES, maxIndex, gl.UNSIGNED_INT, 0);
	}
</script>

<DemoContainer caption="2D Midpoint Displacement">
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
			<label for="variation">Variation: ({_variation})</label>
			<NumberRange
				id="variation"
				bind:value={_variation}
				min={minVariation}
				max={maxVariation}
				step={1}
				onChange={debouncedMain}
			/>
		</div>

		<div class="demo-input-group run">
			<button on:click={main}>Run</button>
		</div>
	</fieldset>
</DemoContainer>

<style>
	canvas {
		pointer-events: none;
	}

	.run {
		align-self: center;
	}
</style>
