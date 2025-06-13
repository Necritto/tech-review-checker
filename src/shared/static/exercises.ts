import type {Questions} from '@shared/types';

export default [
    {
        subject: 'HTML',
        template: 'html',
        questions: [
            {
                id: 'semantic',
                question: 'Задача на вёрстку и семантику',
                tags: [
                    'easy',
                ],
            },
            {
                id: 'ally',
                question: 'Доступная карточка товара',
                tags: [
                    'easy',
                ],
            },
            {
                id: 'form',
                question: 'Сломанная форма',
                tags: [
                    'easy',
                ],
            },
            {
                id: 'interact',
                question: 'Семантичная вложенность и корректные интерактивные элементы',
                tags: [
                    'easy',
                ],
            },
        ],
    },
    {
        subject: 'CSS',
        template: 'css',
        questions: [
            {
                id: 'cascade',
                question: 'Задача на каскадность и приоритеты селекторов в CSS',
                tags: [
                    'easy',
                ],
            },
            {
                id: 'animation',
                question: 'Оптимизация CSS анимации',
                tags: [
                    'easy',
                ],
            },
            {
                id: 'z-index',
                question: 'Задача на z-index',
                tags: [
                    'easy',
                ],
            },
            {
                id: 'correct-mixin',
                question: 'Корректная работа миксина',
                tags: [
                    'easy',
                ],
            },
            {
                id: 'mixin-work',
                question: 'Объяснение работы миксина',
                tags: [
                    'easy',
                ],
            },
            {
                id: 'placeholder',
                question: 'Понимание работы плейсхолдеров',
                tags: [
                    'easy',
                ],
            },
        ],
    },
    {
        subject: 'JavaScript',
        template: 'js',
        questions: [
            {
                id: 'immutable',
                question: 'Иммутабельность объектов',
                tags: [
                    'easy',
                ],
            },
            {
                id: 'context',
                question: 'Понимание контекста',
                tags: [
                    'easy',
                ],
            },
            {
                id: 'descriptors',
                question: 'Дескрипторы свойств объекта',
                tags: [
                    'easy',
                ],
            },
            {
                id: 'chaining',
                question: 'Чейнинг функций',
                tags: [
                    'easy',
                ],
            },
            {
                id: 'prototype',
                question: 'Прототипное наследование',
                tags: [
                    'easy',
                ],
            },
            {
                id: 'cache',
                question: 'Реализация кэша',
                tags: [
                    'easy',
                ],
            },
            {
                id: 'log',
                question: 'Логирующий декоратор',
                tags: [
                    'easy',
                ],
            },
            {
                id: 'event-loop',
                question: 'Event loop',
                tags: [
                    'easy',
                ],
            },
            {
                id: 'promises',
                question: 'Последовательное выполнение промисов',
                tags: [
                    'easy',
                ],
            },
            {
                id: 'flat',
                question: 'Array.flat полифилл',
                tags: [
                    'easy',
                ],
            },
        ],
    },
    {
        subject: 'TypeScript',
        template: 'ts',
        questions: [
            {
                id: 'tuple',
                question: 'Типизация бесконечного кортежа',
                tags: [
                    'easy',
                ],
            },
            {
                id: 'func',
                question: 'Типизация функции',
                tags: [
                    'easy',
                ],
            },
            {
                id: 'object',
                question: 'Типизация объекта',
                tags: [
                    'easy',
                ],
            },
            {
                id: 'array',
                question: 'Типизация многомерного массива',
                tags: [
                    'easy',
                ],
            },
            {
                id: 'util',
                question: 'Создание фильтрующего Utility Type',
                tags: [
                    'easy',
                ],
            },
            {
                id: 'void',
                question: 'Понимание работы void в контексте функций',
                tags: [
                    'easy',
                ],
            },
            {
                id: 'context',
                question: 'Потеря контекста',
                tags: [
                    'easy',
                ],
            },
        ],
    },
    {
        subject: 'React',
        template: 'react',
        questions: [
            {
                id: 'state',
                question: 'Вынесение стейта',
                tags: [
                    'easy',
                ],
            },
            {
                id: 'hooks',
                question: 'Работа с хуками',
                tags: [
                    'easy',
                ],
            },
            {
                id: 'context',
                question: 'Работа с контекстом',
                tags: [
                    'easy',
                ],
            },
            {
                id: 'api',
                question: 'Работа с внешним апи',
                tags: [
                    'easy',
                ],
            },
            {
                id: 'storage',
                question: 'Работа с localStorage и useSyncExternalStore',
                tags: [
                    'easy',
                ],
            },
            {
                id: 'form',
                question: 'Работа с формами',
                tags: [
                    'easy',
                ],
            },
            {
                id: 'input',
                question: 'Анализ компонента Input',
                tags: [
                    'easy',
                ],
            },
            {
                id: 'xss',
                question: 'Анализ уязвимостей в React-компоненте с отображением данных',
                tags: [
                    'easy',
                ],
            },
        ],
    },
    {
        subject: 'Redux',
        template: 'redux',
        questions: [
            {
                id: 'reducer',
                question: 'Анализ ошибок в Redux Toolkit reducer',
                tags: [
                    'easy',
                ],
            },
            {
                id: 'middleware',
                question: 'Анализ и исправление ошибок в кастомной Redux middleware с асинхронной логикой',
                tags: [
                    'easy',
                ],
            },
            {
                id: 'rtk',
                question: 'Анализ и исправление ошибок при использовании RTK Query для получения списка пользователей',
                tags: [
                    'easy',
                ],
            },
        ],
    },
    {
        subject: 'Общие задачи',
        template: 'common',
        questions: [
            {
                id: 'webpack',
                question: 'Найти ошибки в webpack-конфигурации React-проекта',
                tags: [
                    'easy',
                ],
            },
            {
                id: 'mf',
                question: 'Module Federation: найти ошибки в конфигурации',
                tags: [
                    'easy',
                ],
            },
            {
                id: 'docker',
                question: 'Неправильный Docker для React+Webpack',
                tags: [
                    'easy',
                ],
            },
            {
                id: 'cicd',
                question: 'Найти баги в простом GitLab CI конфиге для React',
                tags: [
                    'easy',
                ],
            },
        ],
    },
] satisfies Questions[];
