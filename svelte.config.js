import adapter from "@sveltejs/adapter-static";
import process from "./processCodeComponent.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			default: true,
		},
	},
	preprocess: [process()],
};

export default config;
