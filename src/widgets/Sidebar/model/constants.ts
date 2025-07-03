import {ClipboardList, Code, ChartColumnDecreasing} from "@lucide/svelte";

export const MENU_ROUTES = [
    {
        path: '/',
        title: 'Теория',
        Icon: ClipboardList,
    },
    {
        path: '/exercises',
        title: 'Практика',
        Icon: Code,
    },
    {
        path: '/results',
        title: 'Результаты',
        Icon: ChartColumnDecreasing,
    },
];
