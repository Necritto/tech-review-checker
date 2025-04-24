import {fileURLToPath, URL} from 'url';
import {defineConfig} from 'vite';
import {sveltekit} from '@sveltejs/kit/vite';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
    plugins: [sveltekit(), svgLoader()],
    css: {
        devSourcemap: true,
    },
    server: {
        port: 3000,
        host: '0.0.0.0',
    },
    resolve: {
        alias: [
            {find: '@styles', replacement: fileURLToPath(new URL('./src/shared/styles', import.meta.url))},
        ],
    },
});
