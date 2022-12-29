import adapter from "@sveltejs/adapter-static";
import process from "./processCodeComponent.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: "build",
			assets: "build",
			fallback: null,
			precompress: false,
			strict: true,
		}),
		alias: {
			"$utils/*": "./src/utils/*",
		},
	},
	preprocess: [process()],
};

export default config;
