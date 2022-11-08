<script>
	import { onMount } from "svelte";
	import DemoContainer from "$lib/DemoContainer.svelte";
	import NumberRange from "$lib/NumberRange.svelte";
	import {
		createShader,
		createProgram,
		createTexture,
		useTexture,
	} from "$utils/gl";
	import vs from "./shader.vert?raw";
	import fs from "./shader.frag?raw";

	let container;
	let canvas;
	let gl;
	let w = 0;
	let h = 0;
	let img;

	let lutImgW = 0;

	let posLoc = -1;
	let vao;
	let vbo;
	let ebo;
	let program;
	const F = Float32Array.BYTES_PER_ELEMENT;

	const LUTs = [
		{
			image: null,
			texture: { value: null, id: 0 },
			name: "Neutral",
			src: "/lut/neutral.webp",
		},
		{
			image: null,
			texture: { value: null, id: 0 },
			name: "Darken",
			src: "/lut/darken.webp",
		},
		{
			image: null,
			texture: { value: null, id: 0 },
			name: "Grayscale",
			src: "/lut/grayscale.webp",
		},
		{
			image: null,
			texture: { value: null, id: 0 },
			name: "Sepia",
			src: "/lut/sepia.webp",
		},
	];

	let tex = { value: null, id: 0 };

	let uRes;
	let uTex;
	let uLUT;
	let uLUTSize;
	let uStrength;

	let _lutValue = 0;
	$: lut = LUTs[_lutValue];
	let _strength = 1;

	onMount(() => {
		gl = canvas.getContext("webgl2");

		if (!gl) return;
		container = document.getElementById("lut-demo");

		function resize() {
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

			lutImgW = w;

			canvas.width = w;
			canvas.height = h;
			canvas.style.width = `${w}px`;
			canvas.style.height = `${h}px`;
		}

		img = new Image();
		img.crossOrigin = "anonymous";

		img.onload = () => {
			resize();

			loadLUTs().then(() => {
				setup();
				render();
			});
		};

		img.src = "/images/greatwave.webp";

		window.addEventListener("resize", resize, { passive: true });

		return () => {
			window.removeEventListener("resize", resize);
		};
	});

	function setup() {
		const vert = createShader(gl, gl.VERTEX_SHADER, vs);
		const frag = createShader(gl, gl.FRAGMENT_SHADER, fs);
		program = createProgram(gl, { vert, frag });
		posLoc = gl.getAttribLocation(program, "position");

		uRes = gl.getUniformLocation(program, "uRes");
		uTex = gl.getUniformLocation(program, "uTex");
		uLUT = gl.getUniformLocation(program, "uLUT");
		uLUTSize = gl.getUniformLocation(program, "uLUTSize");
		uStrength = gl.getUniformLocation(program, "uStrength");

		vao = gl.createVertexArray();
		vbo = gl.createBuffer();
		ebo = gl.createBuffer();

		tex = createTexture(gl, {
			src: img,
			internalFormat: "rgba",
			target: "rgba",
			flipY: true,
		});

		for (let i = 0; i < LUTs.length; i++) {
			LUTs[i].texture = createTexture(gl, {
				src: LUTs[i].image,
				internalFormat: "rgba",
				target: "rgba",
				minFilter: "LINEAR",
				magFilter: "LINEAR",
				flipY: true,
			});
		}

		const attributes = [-1, -1, 1, -1, -1, 1, 1, 1];

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
		gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 2 * F, 0);
	}

	function render() {
		gl.viewport(0, 0, w, h);
		gl.clearColor(0.0, 0.0, 0.0, 1.0);
		gl.clear(gl.COLOR_BUFFER_BIT);

		gl.useProgram(program);
		gl.bindVertexArray(vao);

		gl.uniform2f(uRes, w, h);
		gl.uniform1f(uStrength, _strength);
		gl.uniform1f(uLUTSize, 32);

		useTexture(gl, tex.value, tex.id);
		gl.uniform1i(uTex, tex.id);

		useTexture(gl, lut.texture.value, lut.texture.id);
		gl.uniform1i(uLUT, lut.texture.id);

		gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_INT, 0);

		window.requestAnimationFrame(render);
	}

	async function loadLUTs() {
		const promises = new Array(LUTs.length);
		for (let i = 0; i < LUTs.length; i++) {
			promises[i] = new Promise((resolve) => {
				const lut = LUTs[i];
				lut.image = new Image();
				lut.image.crossOrigin = "anonymous";
				lut.image.src = lut.src;
				lut.image.onload = () => {
					resolve(true);
				};
			});
		}

		return Promise.all(promises);
	}
</script>

<DemoContainer id="lut-demo" caption="LUT">
	<canvas bind:this={canvas} slot="canvas" />
	<fieldset slot="controls">
		<div class="demo-input-group lut">
			<img
				id="lut"
				src={lut.src}
				width={lutImgW}
				height={lutImgW / 32}
				alt="Look up table texture"
			/>
		</div>
		<div class="demo-input-group">
			<label for="texture">LUT Texture</label>
			<select id="texture" bind:value={_lutValue}>
				{#each LUTs as LUT, i}
					<option default={i === 0} value={i}>
						{LUT.name}
					</option>
				{/each}
			</select>
		</div>

		<div class="demo-input-group">
			<label for="strength">Strength</label>
			<NumberRange
				id="strength"
				bind:value={_strength}
				min={0}
				max={1}
				step={0.01}
				onChange={null}
			/>
		</div>
	</fieldset>
</DemoContainer>

<style>
	canvas {
		pointer-events: none;
	}

	.lut {
		width: 100%;
		padding: 0;
	}
</style>
