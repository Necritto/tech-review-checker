import {defineConfig} from 'vite';
import {sveltekit} from '@sveltejs/kit/vite';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
    base: '',
    plugins: [sveltekit(), svgLoader()],
    css: {
        devSourcemap: true,
    },
    server: {
        port: 3000,
        host: '0.0.0.0',
    },
});
