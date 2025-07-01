import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';
import Sonda from 'sonda/astro';

import svelte from '@astrojs/svelte';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    adapter: vercel(),
    integrations: [Sonda(), svelte()],
    vite: {
        build: {
            sourcemap: true
        },

        plugins: [tailwindcss()],
    },
});
