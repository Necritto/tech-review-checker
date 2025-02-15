import {type RouteRecordRaw} from 'vue-router';

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('@/pages/Questions.vue'),
    },
    {
        path: '/editor',
        component: () => import('@pages/Editor.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/',
    },
];
