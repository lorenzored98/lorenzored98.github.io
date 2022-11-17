<script>
	import { onMount } from "svelte";
	import DemoContainer from "$lib/DemoContainer.svelte";
	import { createShader, createProgram } from "$utils/gl";
	import vs from "./shader.vert?raw";
	import fs from "./shader.frag?raw";

	const aspect = 1;
	let canvas;
	let gl;
	let w = 0;
	let h = 0;
	let dpr = 1;

	let vao;
	let program;

	let time;
	let uTimeLoc;

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
		render();

		return () => {
			window.removeEventListener("resize", resize);
		};
	});

	function setup() {
		const vert = createShader(gl, gl.VERTEX_SHADER, vs);
		const frag = createShader(gl, gl.FRAGMENT_SHADER, fs);
		program = createProgram(gl, { vert, frag });

		uTimeLoc = gl.getUniformLocation(program, "uTime");

		vao = gl.createVertexArray();
	}

	function render(t = 0) {
		time = t * 0.001;
		gl.viewport(0, 0, w, h);
		gl.clearColor(0.0, 0.0, 0.0, 1.0);
		gl.clear(gl.COLOR_BUFFER_BIT);

		gl.useProgram(program);
		gl.bindVertexArray(vao);

		gl.uniform1f(uTimeLoc, time);

		gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

		window.requestAnimationFrame(render);
	}
</script>

<DemoContainer caption="Quads Without Vertices">
	<canvas bind:this={canvas} slot="canvas" />
</DemoContainer>

<style>
	canvas {
		pointer-events: none;
	}
</style>
