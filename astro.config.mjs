import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import Sonda from 'sonda/astro';
import { resolve } from 'node:path';

import svelte from '@astrojs/svelte';

export default defineConfig({
    output: 'static',
    trailingSlash: 'never',
    adapter: vercel(),
    integrations: [Sonda(), svelte()],
    vite: {
        base: '/',
        build: {
            sourcemap: true,
            minify: true,
            minifyHTML: true,
            minifyCSS: true,
            minifyJS: true,
        },
        resolve: {
            alias: {
                "@shared": resolve("./src/shared"),
                "@entities": resolve("./src/entities"),
                "@features": resolve("./src/features"),
                "@widgets": resolve("./src/widgets"),
                "@pages": resolve("./src/pages"),
                "@app": resolve("./src/app"),
            }
        },
        server: {
            watch: {
                usePolling: true,
            }
        }
    },
});
