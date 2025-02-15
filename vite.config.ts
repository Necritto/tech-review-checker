import {fileURLToPath, URL} from 'url';
import {defineConfig} from 'vite';
import {VitePWA} from 'vite-plugin-pwa';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';

const vitePwa = VitePWA({
    registerType: 'autoUpdate',
    manifest: {
        scope: '/',
        start_url: '/',
        name: 'Tech review checker',
        short_name: 'TR_Checker',
        description: 'App for convenient technical review',
        theme_color: '#ffffff',
        icons: [{
            src: 'assets/images/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
        },
        {
            src: 'assets/images/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
        }],
    },
});

export default defineConfig({
    base: '',
    plugins: [vue(), svgLoader(), vitePwa],
    resolve: {
        alias: [
            {find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url))},
            {find: '@pages', replacement: fileURLToPath(new URL('./src/pages', import.meta.url))},
            {find: '@components', replacement: fileURLToPath(new URL('./src/components', import.meta.url))},
            {find: '@styles', replacement: fileURLToPath(new URL('./src/assets/styles', import.meta.url))},
            {find: '@utils', replacement: fileURLToPath(new URL('./src/utils', import.meta.url))},
            {find: '@stores', replacement: fileURLToPath(new URL('./src/stores', import.meta.url))},
            {find: '@events', replacement: fileURLToPath(new URL('./src/events', import.meta.url))},
            {find: '@directives', replacement: fileURLToPath(new URL('./src/directives', import.meta.url))},
            {find: '@gtypes', replacement: fileURLToPath(new URL('./src/types', import.meta.url))},
        ],
    },
    css: {
        devSourcemap: true,
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/assets/styles/shared.scss";',
            },
        },
    },
});
