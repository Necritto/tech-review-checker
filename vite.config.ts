import {fileURLToPath, URL} from 'url';
import {defineConfig} from 'vite';
import {VitePWA} from 'vite-plugin-pwa';
import vue from '@vitejs/plugin-vue';

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
    plugins: [vue(), vitePwa],
    resolve: {
        alias: [
            {find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url))},
            {find: '@components', replacement: fileURLToPath(new URL('./src/components', import.meta.url))},
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
