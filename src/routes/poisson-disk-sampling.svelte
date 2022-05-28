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
	import Seo from "$lib/Posts/Seo.svelte";
</script>

<Seo
	title="Poisson Disk sampling"
	description="Poisson Disk Sampling in javascript"
	keywords="PoissonDiskSampling, Javscript, CreativeCoding, Distribution, Random"
/>

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
			algorithm has a <var>O(n²)</var> running time, which means it grows exponentially
			for every new point. Play with the demo below and check out how easy
			it is to reach millions of iterations.
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

		<p>The algorithm is composed by three steps.</p>

		<p>
			The first step is dividing the space into a grid. The paper uses
			this grid to create an n-dimensional array to contain the points.
			I've decided to store them in a 1-dimensional array using their x
			and y coordinates to find their index.
		</p>

		<code
			data-lang="js"
			data-code={`
const side = radius / Math.SQRT2;
const gridW = Math.floor(width / side) + 1;
const gridH = Math.floor(height / side) + 1;

const points = new Array(gridW * gridH).fill(null);

const xIndex = Math.floor(point[0] / side);
const yIndex = Math.floor(point[1] / side);

const index = Math.floor(yIndex * gridW + xIndex);

points[index] = point;
			`}
		/>

		<p>
			The second step is choosing a random point inside the space and
			inserting it into our points array and into another array which the
			paper calls the "active list".
		</p>

		<p>
			The "active list" is an array that will help us keep track of which
			point we are using to generate other random points in its proximity.
			It works similarly to a <BlankLink
				href="https://en.wikipedia.org/wiki/Queue_(abstract_data_type)"
			>
				queue
			</BlankLink>, meaning the first point that goes in is also the first
			point processed.
		</p>

		<p>The last step is the actual algorithm.</p>

		<p>
			For each point inside the "active list," we are going to try
			n-times, where n is our sample variable, to create a random point
			that has a distance between <code
				data-lang="js"
				data-code={`r`}
				data-inline={true}
			/>
			and <code data-lang="js" data-code={`r*2`} data-inline={true} /> from
			our "active point".
		</p>

		<code
			data-lang="js"
			data-code={`
const r = radius + radius * Math.sqrt(Math.random());
const theta = Math.random() * Math.PI * 2;

const newPoint = [
	point[0] + r * Math.cos(theta),
	point[1] + r * Math.sin(theta),
];
			`}
		/>

		<p>
			To check if the new point collides, we need to find its cell index.
			Once we have that, we can check the 5x5 matrix around that cell with
			a simple for loop and a little bit of math.
		</p>

		<p>
			Using the Euclidean distance function, without squaring as it's an
			expensive function, we find if the points collide.
		</p>

		<code
			data-lang="js"
			data-code={`
const xIndex = Math.floor(newPoint[0] / side);
const yIndex = Math.floor(newPoint[1] / side);

/**
 * I read that no matter where to point is we just need to look
 * at the 5x5 grid around our cell.
 * From my understanding it's not really a 5x5 as I can avoid checking
 * the 4 corners
*/
for (let i = 0; i < 25; i++) {
	if (i === 0 || i === 4 || i === 20 || i === 24) {
		if (!corners) {
			continue;
		}
	}

	const xDiff = Math.floor((i % 5) - 2);
	const yDiff = Math.floor(i / 5 - 2);

	const newIndex = index2DTo1D(
		xIndex + xDiff,
		yIndex + yDiff,
		gridW
	);
	const pointToCheck = points[newIndex];

	if (pointToCheck !== null) {
		const a = pointToCheck[0] - newPoint[0];
		const b = pointToCheck[1] - newPoint[1];
		const dSquared = a * a + b * b;
		if (dSquared < rSquared) {
			collides = true;
			break;
		}
	}
}
			`}
		/>

		<p>
			If there is a valid new point, we add it to both the points array
			and the queue. If there isn't, we remove the current "active point"
			from the queue.
		</p>

		<p>
			Once the queue is empty the algorithm is finished. All that's left
			to do is looping through the points array and removing <code
				data-lang="js"
				data-code={`null`}
				data-inline={true}
			/> values since the algorithm does not guarantee that every cell has
			a point.
		</p>

		<PoissonDiskSampling />

		<p>
			The full code for my implementation of Poisson Disk Sampling is
			available <BlankLink
				href="https://github.com/lorenzored98/Blog/blob/main/src/lib/PoissonDiskSampling/PoissonDiskSampling.svelte#L27"
				>here</BlankLink
			>.
		</p>
	</Section>
</Main>

<Footer />
