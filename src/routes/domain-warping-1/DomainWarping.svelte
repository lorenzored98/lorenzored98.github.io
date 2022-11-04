<script>
	import { onMount } from "svelte";
	import DemoContainer from "$lib/DemoContainer.svelte";
	import NumberRange from "$lib/NumberRange.svelte";
	import {
		createShader,
		createProgram,
		createTexture,
		useTexture,
	} from "../../utils/gl";
	import vs from "./shader.vert?raw";
	import fs from "./shader.frag?raw";

	const aspect = 1;
	let canvas;
	let gl;
	let w = 0;
	let h = 0;
	let dpr = 1;

	let posLoc = -1;
	let uvLoc = -1;
	let vao;
	let vbo;
	let ebo;
	let program;
	const F = Float32Array.BYTES_PER_ELEMENT;

	let grad = { value: null, id: -1 };
	let uTime;
	let uGrad;
	let uPattern;
	let uPatternSize;
	let uPatternGrid;
	let uRepeat;
	let time = 0;

	let _pattern;

	const minPatternSize = 0.01;
	let _patternSize = 1.5;
	const maxPatternSize = 2.5;

	const minPatternGrid = 30;
	let _patternGrid = 75;
	const maxPatternGrid = 150;

	const minRepeat = 10;
	let _repeat = 100;
	const maxRepeat = 150;

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

			canvas.style.height = h + "px";

			w *= dpr;
			h *= dpr;
			canvas.width = w;
			canvas.height = h;
		}

		window.addEventListener("resize", resize, { passive: true });

		resize();
		setup();
		render();

		return () => {
			window.removeEventListener("resize", resize);
		};
	});

	function setup() {
		const vert = createShader(gl, gl.VERTEX_SHADER, vs);
		const frag = createShader(gl, gl.FRAGMENT_SHADER, fs);
		program = createProgram(gl, { vert, frag });
		posLoc = gl.getAttribLocation(program, "position");
		uvLoc = gl.getAttribLocation(program, "uv");

		uTime = gl.getUniformLocation(program, "uTime");
		uGrad = gl.getUniformLocation(program, "uGrad");
		uPattern = gl.getUniformLocation(program, "uPattern");
		uPatternSize = gl.getUniformLocation(program, "uPatternSize");
		uPatternGrid = gl.getUniformLocation(program, "uPatternGrid");
		uRepeat = gl.getUniformLocation(program, "uRepeat");

		vao = gl.createVertexArray();
		vbo = gl.createBuffer();
		ebo = gl.createBuffer();

		grad = createTexture(gl, {
			src: "/domain-warping1/grad.png",
			internalFormat: "rgb",
			target: "rgb",
		});

		const attributes = [
			-1, -1, 0, 0, 0, 1, -1, 0, 1, 0, -1, 1, 0, 0, 1, 1, 1, 0, 1, 1,
		];

		const indices = [0, 1, 2, 1, 3, 2];

		gl.bindVertexArray(vao);
		gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
		gl.bufferData(
			gl.ARRAY_BUFFER,
			new Float32Array(attributes),
			gl.STATIC_DRAW
		);

		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ebo);
		gl.bufferData(
			gl.ELEMENT_ARRAY_BUFFER,
			new Int32Array(indices),
			gl.STATIC_DRAW
		);
		gl.enableVertexAttribArray(posLoc);
		gl.vertexAttribPointer(posLoc, 3, gl.FLOAT, false, 5 * F, 0);
		gl.enableVertexAttribArray(uvLoc);
		gl.vertexAttribPointer(uvLoc, 2, gl.FLOAT, false, 5 * F, 3 * F);
	}

	function render(t = 0) {
		gl.viewport(0, 0, w, h);
		gl.clearColor(0.0, 0.0, 0.0, 1.0);
		gl.clear(gl.COLOR_BUFFER_BIT);

		time = t * 0.001;

		gl.useProgram(program);
		gl.bindVertexArray(vao);

		gl.uniform1f(uTime, time);
		gl.uniform1i(uPattern, _pattern);
		gl.uniform1f(uPatternSize, _patternSize);
		gl.uniform1f(uPatternGrid, _patternGrid);
		gl.uniform1f(uRepeat, _repeat);

		useTexture(gl, grad.value, grad.id);
		gl.uniform1i(uGrad, grad.id);

		gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_INT, 0);

		window.requestAnimationFrame(render);
	}
</script>

<DemoContainer caption="Domain Warping">
	<canvas bind:this={canvas} slot="canvas" />
	<fieldset slot="controls">
		<div class="demo-input-group">
			<label for="pattern">Pattern</label>
			<select id="pattern" bind:value={_pattern}>
				<option default value={0}>Box</option>
				<option value={1}>Circle</option>
			</select>
		</div>

		<div class="demo-input-group">
			<label for="pattern-size">Pattern Size: ({_patternSize})</label>
			<NumberRange
				id="pattern-size"
				bind:value={_patternSize}
				min={minPatternSize}
				max={maxPatternSize}
				step={0.01}
				onChange={null}
			/>
		</div>

		<div class="demo-input-group">
			<label for="pattern-grid">Pattern Grid: ({_patternGrid})</label>
			<NumberRange
				id="pattern-grid"
				bind:value={_patternGrid}
				min={minPatternGrid}
				max={maxPatternGrid}
				step={1}
				onChange={null}
			/>
		</div>

		<div class="demo-input-group">
			<label for="repeat">Repeat: ({_repeat})</label>
			<NumberRange
				id="repeat"
				bind:value={_repeat}
				min={minRepeat}
				max={maxRepeat}
				step={1}
				onChange={null}
			/>
		</div>
	</fieldset>
</DemoContainer>

<style>
	canvas {
		pointer-events: none;
	}
</style>
