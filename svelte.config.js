import adapter from "@sveltejs/adapter-static";
import process from "./processCodeComponent.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// default options are shown
			pages: "build",
			assets: "build",
			fallback: "404.html",
			precompress: false,
		}),
	},
	preprocess: [process()],
};

export default config;
