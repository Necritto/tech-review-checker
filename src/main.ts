import {createApp} from 'vue';
import {createPinia} from 'pinia';

import App from '@/App.vue';
import '@styles/main.scss';

import {router} from './router';

const store = createPinia();

createApp(App).use(store).use(router).mount('#app');
