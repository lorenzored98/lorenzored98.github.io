<script>
	import BlankLink from "$lib/BlankLink.svelte";
	import Title from "$lib/Title.svelte";
	import Subtitle from "$lib/Subtitle.svelte";
	import Section from "$lib/Section.svelte";
	import Main from "$lib/Main.svelte";
	import Footer from "$lib/Footer.svelte";
	import Seo from "$lib/Seo.svelte";
	import DomainWarping from "./DomainWarping.svelte";
</script>

<Seo
	title="Domain Warping"
	description="Domain Warping experiments"
	keywords="Noise, Javascript, Creative Coding, Algorithm, WebGL2, Domain Warping, Shaders, GLSL"
/>

<Main>
	<Section>
		<Title timestamp={1652500800}>Domain Warping [1]</Title>
		<p>Noise exploration</p>
	</Section>

	<Section>
		<Subtitle id="details">Details</Subtitle>

		<p>
			Inigo Quilez's article on <BlankLink
				href="https://iquilezles.org/articles/warp/"
				>domain warping</BlankLink
			>.
		</p>
		<p>
			Original <BlankLink
				href="https://styly.cc/tips/unity-shader-domainwarping-dotpattern/"
				>Unity Demo</BlankLink
			>.
		</p>
		<p>
			Play around with controls, <var>Pattern Size</var> especially, can make
			this effect very different.
		</p>

		<DomainWarping />
	</Section>
</Main>

<Footer />
