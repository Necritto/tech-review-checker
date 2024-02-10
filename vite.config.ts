import {defineConfig} from 'vite';
import {VitePWA} from 'vite-plugin-pwa';

const vitePwa = VitePWA({
    registerType: 'autoUpdate',
});

export default defineConfig({
    base: '',
    plugins: [vitePwa],
});
