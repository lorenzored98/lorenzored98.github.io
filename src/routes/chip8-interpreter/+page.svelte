<script>
	import Title from "$lib/Title.svelte";
	import Section from "$lib/Section.svelte";
	import Main from "$lib/Main.svelte";
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
		<Title timestamp={1655577363}>CHIP-8 interpreter</Title>
		<p>
			It's my first time coding an emulator/interpreter. I've heard that
			this is a very common starter project for people who want to try
			their hands at something more complex like a NES or a GBA.
		</p>
		<p>Didn't implement audio.</p>
		<p>Breakout demo: use <var>q</var> and <var>e</var> to move.</p>
		<CHIP8Interpreter />
	</Section>
</Main>
