<script>
	import BlankLink from "$lib/BlankLink.svelte";
	import Title from "$lib/Title.svelte";
	import Section from "$lib/Section.svelte";
	import Main from "$lib/Main.svelte";
	import Footer from "$lib/Footer.svelte";
	import Subtitle from "$lib/Subtitle.svelte";
	import Seo from "$lib/Seo.svelte";
</script>

<Seo
	title="Github Pages Action"
	description="Automatically deploy github pages static website with github actions"
	keywords="Github Pages, Github Actions, Github, Static Website, Deploy"
/>

<Main>
	<Section>
		<Title timestamp={1661509919}>Github Pages Action</Title>
		<p>
			A simple and minimal file for building your static Github pages
			website via Github actions.
		</p>
	</Section>

	<Section>
		<Subtitle id="naive-approach">The YAML File</Subtitle>

		<p>This file is intented to work with a node/npm based build step.</p>

		<code
			data-lang="yaml"
			data-code={`
name: Build And Deploy
on:
    push:
        branches: [main]
jobs:
    bd:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v3
            - uses: actions/setup-node@v3
              with:
                  node-version: 16
            - run: npm install
            - run: npm run build
            - uses: peaceiris/actions-gh-pages@v3
              if: \${{ github.ref == 'refs/heads/main' }}
              with:
                  github_token: \${{ secrets.GITHUB_TOKEN }}
                  publish_dir: ./build

        `}
		/>

		<p>
			If you can understand everything that's going on here is no need to
			keep reading, otherwise here's a short summary of what this file
			does:
		</p>

		<ul>
			<li>
				<var>bd</var> : Job name I chose, you can choose whatever you want.
			</li>
			<li>
				<var>actions/checkout@v3</var> : This is an official Github
				action. It will checkout our repository so that it can be used
				by the other steps. Here's the <BlankLink
					href="https://github.com/actions/checkout">repo</BlankLink
				>.
			</li>
			<li>
				<var>peaceiris/actions-gh-pages@v3</var> : This is an unofficial
				action that will allow us to deploy static files to the gh-pages
				branch. Here's the <BlankLink
					href="https://github.com/peaceiris/actions-gh-pages"
					>repo</BlankLink
				>.
			</li>
			<li>
				<var>if</var> : Checking that we are on main branch in this case.
				If you are on another branch, you can modify refs/heads/main or just
				remove the if condition.
			</li>
			<li>
				<var>github_token</var> : This is a token that created by the action
				to authenticate in the workflow.
			</li>
			<li>
				<var>publish_dir</var> : The directory that contains the static files
				after the build step. It takes a relative path from where your package.json
				is located.
			</li>
		</ul>

		<p>
			Most of the other syntax is self-explanatory and the
			<BlankLink
				href="https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions"
				>workflow syntax doc</BlankLink
			> does a much better job of explaining it.
		</p>

		<p>
			Create a <var>.github/workflows/[whatever].yaml</var>
			inside your repository, copy the content of this file,make the appropriate
			changes if your build step differs, and on the next push command your
			website will be automatically built and deployed.
		</p>
	</Section>
</Main>

<Footer />
