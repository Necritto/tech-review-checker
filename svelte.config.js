import adapter from '@sveltejs/adapter-vercel';
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [vitePreprocess()],

    kit: {
        adapter: adapter(),
        alias: {
            app: './src/app',
            pages: './src/pages',
            widgets: './src/widgets',
            features: './src/features',
            entities: './src/entities',
            shared: './src/shared',
        },
        files: {
            routes: 'src/pages',
            assets: 'public',
        },
    },
};

export default config;
