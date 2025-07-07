import {ClipboardList, Code, ChartColumnDecreasing} from "@lucide/svelte";

export const MENU_ROUTES = {
    MAIN: {
        path: '/',
        title: 'Теория',
        Icon: ClipboardList,
    },
    EXERCISES: {
        path: '/exercises',
        title: 'Практика',
        Icon: Code,
    },
    RESULTS: {
        path: '/results',
        title: 'Результаты',
        Icon: ChartColumnDecreasing,
    },
} as const;
