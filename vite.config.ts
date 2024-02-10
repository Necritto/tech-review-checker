import {defineConfig} from 'vite';
import {VitePWA} from 'vite-plugin-pwa';

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
    plugins: [vitePwa],
});
