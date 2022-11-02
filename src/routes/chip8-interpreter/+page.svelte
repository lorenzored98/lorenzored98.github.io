<script>
	import Title from "$lib/Title.svelte";
	import Subtitle from "$lib/Subtitle.svelte";
	import Section from "$lib/Section.svelte";
	import Main from "$lib/Main.svelte";
	import Footer from "$lib/Footer.svelte";
	import Seo from "$lib/Seo.svelte";
	import CHIP8Interpreter from "./CHIP8Interpreter.svelte";
</script>

<Seo
	title="CHIP-8 Interpreter"
	description="Javascript CHIP-8 Interpreter"
	keywords="CHIP-8, Javascript, Emulator, Interpreter"
/>

<Main>
	<Section>
		<Title timestamp={1655577363}>CHIP-8 Interpreter</Title>
		<p>I wanted to code a NES emulator but here we are.</p>
	</Section>

	<Section>
		<Subtitle id="demo">Demo</Subtitle>
		<p>
			It's my first time coding an emulator/interpreter. I've heard that
			this is a very common starter project for people who want to try
			their hands at something more complex like a NES or a GBA maybe.
		</p>
		<p>Didn't implement audio.</p>
		<p>Breakout demo: use <var>q</var> and <var>e</var> to move.</p>
		<CHIP8Interpreter />
	</Section>
</Main>

<Footer />
