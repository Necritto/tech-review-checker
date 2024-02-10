import {createApp} from 'vue';
import {createPinia} from 'pinia';

import App from '@/App.vue';
import '@styles/main.scss';

const store = createPinia();

createApp(App).use(store).mount('#app');
