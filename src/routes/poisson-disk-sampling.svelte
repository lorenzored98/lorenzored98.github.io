<script>
	import BlankLink from "$lib/Shared/BlankLink.svelte";
	import Title from "$lib/Posts/Title.svelte";
	import Section from "$lib/Posts/Section.svelte";
	import Main from "$lib/Posts/Main.svelte";
	import Footer from "$lib/Posts/Footer.svelte";
	import Subtitle from "$lib/Posts/Subtitle.svelte";
	import NaiveDistribution from "$lib/PoissonDiskSampling/NaiveDistribution.svelte";
	import MatrixAround from "$lib/PoissonDiskSampling/MatrixAround.svelte";
	import PoissonDiskSampling from "$lib/PoissonDiskSampling/PoissonDiskSampling.svelte";
</script>

<Main>
	<Section>
		<Title timestamp={1652960520}>Poisson Disk Sampling</Title>
		<p>
			Poisson Disk Sampling is an algorithm that guarantees that, for
			every point in an n-dimensional space, the distance between a point
			and every other point is not smaller than a given distance.
		</p>
	</Section>

	<Section>
		<Subtitle id="naive-approach">The Naive Approach</Subtitle>
		<p>
			At first glance, the problem doesn't seem worthy of a strange name
			like Poisson Disk Sampling, so let's try to solve it in the easiest
			possible way.
		</p>
		<p>
			We can use a random function to pick a point in space. If the
			distance between this point and every other point is greater than
			the minimum distance, we add it to our points. We then repeat this
			process for n-times until we have filled the space.
		</p>
		<p>
			If you need a small number of points, it may be worth considering
			this naive approach just for the sake of simplicity.
		</p>

		<p>
			The problem with our naive approach is that, for every new point,
			the algorithm becomes increasingly slower. In big O notation, our
			algorithm has a O(n²) running time, which means it grows
			exponentially for every new point. Play with the demo below and
			check out how easy it is to reach millions of iterations.
		</p>

		<NaiveDistribution />
	</Section>

	<Section>
		<Subtitle id="space-subdivision">Space Subdivision</Subtitle>

		<p>
			Visually, it's easy to see how to fix this. For every new point
			added, we should only check if there are points inside the circle
			created with the point as its center and the minimum distance as its
			radius.
		</p>
		<p>
			To do that, we are going to implement spatial partitioning. The name
			is scarier than what it actually is, which is just dividing the
			space into a grid to get a bunch of square cells that will hold our
			points.
		</p>
		<p>
			Doing this allows us to reduce the area we need to check to just a
			5x5 grid with the cell that holds our point as its center.
		</p>
		<p>
			The cell size is not chosen randomly, instead, we use the minimum
			distance between points as its diagonal so that each cell contains
			at most one point. We then obtain its side by dividing its diagonal
			by the square root of 2.
		</p>

		<MatrixAround />
	</Section>

	<Section>
		<Subtitle id="algorithm">The Algorithm</Subtitle>
		<p>
			There are many different ways to implement Poisson Disk Sampling.
			I've decided to implement the one described by Robert Bridson in his
			<BlankLink
				href="https://www.cs.ubc.ca/~rbridson/docs/bridson-siggraph07-poissondisk.pdf"
				>Fast Poisson Disk Sampling in Arbitrary Dimensions
			</BlankLink> paper, which, as far as I know, is also the most popular
			one.
		</p>

		<p />
		<p>
			Explain the code, the k retries, the active list, storing in a 1d
			array, why I've made things different from the paper
		</p>

		<PoissonDiskSampling />
	</Section>
</Main>

<Footer />
