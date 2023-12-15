<script>
	import { onMount } from "svelte";
	import DemoContainer from "$lib/DemoContainer.svelte";
	import NumberRange from "$lib/NumberRange.svelte";
	import {
		randomIntInRange,
		vec3,
		createModelMatrix,
		createViewMatrix,
		createPerspectiveProjectionMatrix,
		mat4,
	} from "$utils/math";
	import { createShader, createProgram } from "$utils/gl";
	import { planeGeometry } from "$utils/gl/plane";
	import { debounce } from "$utils/core";

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
	let maxIndex;

	const texMesh = {
		posLoc: -1,
		colorLoc: -1,
		vao: null,
		vbo: null,
		ebo: null,
		program: null,
	};

	const terrainMesh = {
		posLoc: -1,
		depthLoc: -1,
		vao: null,
		vbo: null,
		ebo: null,
		program: null,
		modelLoc: -1,
		viewLoc: -1,
		projectionLoc: -1,
	};

	const texVs = `#version 300 es
	in vec2 position;
	in float color;

	out float vColor;
	void main() {
		vColor = color;
		gl_Position = vec4(position, 0.0, 1.0);
	}
	`;

	const texFs = `#version 300 es
	precision highp float;

	in float vColor;

	out vec4 outColor;
	void main() {
		outColor = vec4(vec3(vColor), 1.0);
	}
	`;

	const terrainVs = `#version 300 es
	
	in vec3 position;
	in float depth;

	uniform mat4 model;
	uniform mat4 view;
	uniform mat4 projection;

	out vec3 vColor;
	void main() {
		vColor = vec3(depth);
		gl_Position = projection * view * model * vec4(position, 1.0);
	}
	`;

	const terrainFs = `#version 300 es
	
	precision highp float;

	in vec3 vColor;
	out vec4 outColor;

	void main() {
		outColor = vec4(vColor, 1.0);
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
		const texVert = createShader(gl, gl.VERTEX_SHADER, texVs);
		const texFrag = createShader(gl, gl.FRAGMENT_SHADER, texFs);
		texMesh.program = createProgram(gl, { vert: texVert, frag: texFrag });
		texMesh.posLoc = gl.getAttribLocation(texMesh.program, "position");
		texMesh.colorLoc = gl.getAttribLocation(texMesh.program, "color");
		texMesh.vao = gl.createVertexArray();
		texMesh.vbo = gl.createBuffer();
		texMesh.ebo = gl.createBuffer();

		const terrainVert = createShader(gl, gl.VERTEX_SHADER, terrainVs);
		const terrainFrag = createShader(gl, gl.FRAGMENT_SHADER, terrainFs);
		terrainMesh.program = createProgram(gl, {
			vert: terrainVert,
			frag: terrainFrag,
		});

		terrainMesh.posLoc = gl.getAttribLocation(
			terrainMesh.program,
			"position"
		);
		terrainMesh.depthLoc = gl.getAttribLocation(
			terrainMesh.program,
			"depth"
		);
		terrainMesh.vao = gl.createVertexArray();
		terrainMesh.vbo = gl.createBuffer();
		terrainMesh.ebo = gl.createBuffer();

		terrainMesh.modelLoc = gl.getUniformLocation(
			terrainMesh.program,
			"model"
		);
		terrainMesh.viewLoc = gl.getUniformLocation(
			terrainMesh.program,
			"view"
		);
		terrainMesh.projectionLoc = gl.getUniformLocation(
			terrainMesh.program,
			"projection"
		);
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
				attrs.push(x / s - 1, (1 - y / s) * 2 - 1, value);
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

		gl.bindVertexArray(texMesh.vao);
		gl.bindBuffer(gl.ARRAY_BUFFER, texMesh.vbo);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(attrs), gl.STATIC_DRAW);

		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, texMesh.ebo);
		gl.bufferData(
			gl.ELEMENT_ARRAY_BUFFER,
			new Int32Array(indices),
			gl.STATIC_DRAW
		);
		gl.enableVertexAttribArray(texMesh.posLoc);
		gl.vertexAttribPointer(texMesh.posLoc, 2, gl.FLOAT, false, 3 * 4, 0);
		gl.enableVertexAttribArray(texMesh.colorLoc);
		gl.vertexAttribPointer(
			texMesh.colorLoc,
			1,
			gl.FLOAT,
			false,
			3 * 4,
			2 * 4
		);

		const data = new Float32Array((s + 1) * (s + 1));

		for (let i = 0, j = 0; i < attrs.length; i += 3, j++) {
			data[j] = attrs[i + 2];
		}

		const terrainGeometry = planeGeometry(1, 1, s, s, [{ size: 1, data }]);

		// for (
		// 	let i = 0;
		// 	i < terrainGeometry.attributes.length;
		// 	i += terrainGeometry.stride
		// ) {
		// 	const attrs = terrainGeometry.attributes;

		// 	attrs[i] += 0.5;
		// 	attrs[i + 1] *= 2;
		// }

		gl.bindVertexArray(terrainMesh.vao);
		gl.bindBuffer(gl.ARRAY_BUFFER, terrainMesh.vbo);
		gl.bufferData(
			gl.ARRAY_BUFFER,
			terrainGeometry.attributes,
			gl.STATIC_DRAW
		);

		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, terrainMesh.ebo);
		gl.bufferData(
			gl.ELEMENT_ARRAY_BUFFER,
			terrainGeometry.indices,
			gl.STATIC_DRAW
		);

		gl.enableVertexAttribArray(terrainMesh.posLoc);
		gl.vertexAttribPointer(
			terrainMesh.posLoc,
			3,
			gl.FLOAT,
			false,
			terrainGeometry.stride * 4,
			0
		);
		gl.enableVertexAttribArray(terrainMesh.depthLoc);
		gl.vertexAttribPointer(
			terrainMesh.depthLoc,
			1,
			gl.FLOAT,
			false,
			terrainGeometry.stride * 4,
			8 * 4
		);

		render();
	}

	const debouncedMain = debounce(main, 300);

	const scale = vec3(1, 1, 1);
	const rotate = vec3(0, 0, 0);
	const translate = vec3(0, 0, 0);

	function render(t = 0) {
		gl.viewport(0, 0, w, h);
		gl.clearColor(1.0, 0.0, 0.0, 1.0);
		gl.clear(gl.COLOR_BUFFER_BIT);
		gl.clear(gl.DEPTH_BUFFER_BIT);

		// gl.useProgram(texMesh.program);
		// gl.bindVertexArray(texMesh.vao);
		// gl.drawElements(gl.TRIANGLES, maxIndex, gl.UNSIGNED_INT, 0);

		gl.useProgram(terrainMesh.program);
		gl.bindVertexArray(terrainMesh.vao);

		const time = t * 0.001;

		const cameraPos = vec3(0, 0, 3);
		const cameraTarget = vec3(0, 0, 0);
		const worldUp = vec3(0, 1, 0);

		const aspect = w / h;
		const vFov = 55;
		const near = 0.001;
		const far = 1000;

		const sin = Math.sin(time);
		const cos = Math.cos(time);

		// scale[0] = Math.abs(cos);
		// scale[1] = Math.abs(cos);
		// scale[2] = Math.abs(cos);
		// rotate[2] += 0.01;

		// translate[0] = sin;
		// translate[1] = cos;
		// translate[2] = sin;

		const model = createModelMatrix(scale, rotate, translate);
		const view = createViewMatrix(cameraPos, cameraTarget, worldUp);
		const projection = createPerspectiveProjectionMatrix(
			aspect,
			vFov,
			near,
			far
		);

		gl.uniformMatrix4fv(terrainMesh.modelLoc, false, model);
		gl.uniformMatrix4fv(terrainMesh.viewLoc, false, view);
		gl.uniformMatrix4fv(terrainMesh.projectionLoc, false, projection);

		gl.drawElements(gl.TRIANGLES, maxIndex, gl.UNSIGNED_INT, 0);

		window.requestAnimationFrame(render);
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
