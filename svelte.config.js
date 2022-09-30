import adapter from "@sveltejs/adapter-static";
import process from "./processCodeComponent.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// default options are shown
			pages: "build",
			assets: "build",
			fallback: null,
			precompress: false,
		}),
		prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			default: true,
		},
	},
	preprocess: [process()],
};

export default config;
