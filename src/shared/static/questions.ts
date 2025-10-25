import type { Questions } from "@shared/types";

export default [
    {
        subject: "Общие вопросы",
        template: "common",
        questions: [
            {
                id: "cross-browser-compatibility",
                question: "Что такое кроссбраузерность?",
                tags: ["easy"],
            },
            {
                id: "document-flow",
                question: "Что такое поток документа?",
                tags: ["easy"],
            },
            {
                id: "storage-differences",
                question:
                    "Разница между cookie, sessionStorage и localStorage?",
                tags: ["easy"],
            },
            {
                id: "http",
                question: "Что такое HTTP?",
                tags: ["easy"],
            },
            {
                id: "http-vs-https",
                question: "Разница между HTTP и HTTPS?",
                tags: ["easy"],
            },
            {
                id: "rest",
                question: "Что такое REST и RESTful api?",
                tags: ["easy"],
            },
            {
                id: "websocket",
                question: "Что такое WebSocket? В чем принцип его работы?",
                tags: ["medium"],
            },
            {
                id: "history-api",
                question: "Что такое History API в браузере?",
                tags: ["medium"],
            },
            {
                id: "auth-concepts",
                question:
                    "Разница между идентификацией, аутентификацией, авторизацией?",
                tags: ["medium"],
            },
            {
                id: "http-methods",
                question: "Разница между PUT-, PATCH- и POST-запросами?",
                tags: ["medium"],
            },
            {
                id: "real-time-tech-comparison",
                question:
                    "Разница между Long-Polling, Websockets и Server-Sent Events?",
                tags: ["medium"],
            },
            {
                id: "long-polling-memory-leaks",
                question:
                    "Как избежать memory leak в Long-Polling при частых переподключениях?",
                tags: ["medium"],
            },
            {
                id: "resource-hints",
                question:
                    "Разница между preload, prefetch, preconnect и prerender?",
                tags: ["medium"],
            },
            {
                id: "rendering-pipeline",
                question: "Разница между layout, painting и compositing?",
                tags: ["medium"],
            },
            {
                id: "transform-layout-impact",
                question: "Почему transform не вызывает Layout?",
                tags: ["medium"],
            },
            {
                id: "pwa-definition",
                question: "Что такое Progressive Web Application (PWA)?",
                tags: ["medium"],
            },
            {
                id: "web-components",
                question: "Что такое Веб-компоненты?",
                tags: ["medium"],
            },
            {
                id: "content-security-policy",
                question: "Что такое Content Security Policy (CSP)?",
                tags: ["medium"],
            },
            {
                id: "cors",
                question: "Что такое CORS?",
                tags: ["medium"],
            },
            {
                id: "web-worker",
                question: "Что такое WebWorker?",
                tags: ["medium"],
            },
        ],
    },
    {
        subject: "OOP & FP",
        template: "oop-fp",
        questions: [
            {
                id: "oop-principles",
                question: "Что такое и какие основные принципы ООП?",
                tags: ["medium"],
            },
            {
                id: "composition-vs-inheritance",
                question: "Разница между композицией и наследованием?",
                tags: ["medium"],
            },
            {
                id: "solid-principles",
                question: "Что такое SOLID?",
                tags: ["medium"],
            },
            {
                id: "functional-programming",
                question: "Что такое функциональное программирование?",
                tags: ["medium"],
            },
            {
                id: "monads-in-js",
                question: "Что такое монадa и есть ли ей аналоги в JS?",
                tags: ["hard"],
            },
            {
                id: "functors-vs-monads",
                question: "В чем разница между монадами и функтороми?",
                tags: ["hard"],
            },
            {
                id: "imperative-vs-declarative",
                question:
                    "Разница между императивным и декларативным подходами программирования?",
                tags: ["medium"],
            },
        ],
    },
    {
        subject: "HTML",
        template: "html",
        questions: [
            {
                id: "doctype",
                question: "Что такое doctype? И для чего он используется?",
                tags: ["easy"],
            },
            {
                id: "validation-in-html",
                question:
                    "Что такое валидация? И какие типы проверок HTML документа вы знаете?",
                tags: ["medium"],
            },
            {
                id: "validation-impact-seo-accessibility",
                question: "Как валидация влияет на SEO и доступность сайта?",
                tags: ["medium"],
            },
            {
                id: "html-button-tag",
                question:
                    "Какой тэг использовать для того, что бы сверстать кнопку?",
                tags: ["easy"],
            },
            {
                id: "accessible-buttons",
                question:
                    "Как обеспечить доступность кнопки для пользователей с клавиатурой и экранными читалками?",
                tags: ["medium"],
            },
            {
                id: "aria-roles-button-vs-link",
                question:
                    "Чем отличаются роли button и link в контексте доступности?",
                tags: ["medium"],
            },
            {
                id: "html-semantics",
                question:
                    "Что такое семантика? Какие семантичные тэги вы знаете?",
                tags: ["medium"],
            },
            {
                id: "article-vs-section",
                question: "Чем отличается <article> от <section>?",
                tags: ["medium"],
            },
            {
                id: "article-inside-section",
                question:
                    "Можно ли вкладывать <article> внутри <section> и наоборот?",
                tags: ["medium"],
            },
            {
                id: "semantic-image-caption",
                question:
                    "Как семантически правильно сверстать картинку с подписью?",
                tags: ["easy"],
            },
            {
                id: "strong-em-vs-b-i",
                question: "Какая разница между тэгами <strong><em> и <b><i>?",
                tags: ["medium"],
            },
            {
                id: "html-input-types",
                question: "Типы <input> элементов в HTML?",
                tags: ["easy"],
            },
            {
                id: "inputmode-attribute",
                question: "Для чего используют атрибут inputmode?",
                tags: ["medium"],
            },
            {
                id: "data-attributes",
                question: "Для чего используют data-атрибуты?",
                tags: ["easy"],
            },
            {
                id: "css-data-attributes",
                question:
                    "Можно ли использовать data-атрибуты для стилизации через CSS?",
                tags: ["easy"],
            },
            {
                id: "script-async-defer",
                question:
                    "Разница между <script>, <script async> и <script defer>?",
                tags: ["medium"],
            },
            {
                id: "html-link-script-placement",
                question: `
                    Почему хорошей практикой считается располагать <link> для подключения CSS
                    стилей внутри тэга <head>, а <script> для подключения JS ставить перед закрывающимся тэгом </body>?
                `,
                tags: ["medium"],
            },
            {
                id: "render-blocking-resources",
                question:
                    "Что такое render-blocking ресурсы и как их минимизировать?",
                tags: ["medium"],
            },
            {
                id: "html-capture-attribute",
                question: "Для чего используется атрибут capture?",
                tags: ["medium"],
            },
            {
                id: "hide-element-no-css-js",
                question:
                    "Как можно скрыть элемент разметки не используя CSS и JS?",
                tags: ["easy"],
            },
        ],
    },
    {
        subject: "CSS",
        template: "css",
        questions: [
            {
                id: "css-injection-methods",
                question: "Варианты добавление CSS стилей на страницу?",
                tags: ["easy"],
            },
            {
                id: "css-performance-caching",
                question:
                    "Как влияет способ добавления стилей на производительность и кэширование?",
                tags: ["medium"],
            },
            {
                id: "inline-style",
                question:
                    "Что такое инлайновый стиль? Можно ли его переопределить?",
                tags: ["easy"],
            },
            {
                id: "css-positioning-types",
                question: "Типы позиционирования в CSS?",
                tags: ["easy"],
            },
            {
                id: "css-box-model",
                question: "Блочная модель CSS?",
                tags: ["easy"],
            },
            {
                id: "reset-vs-normalize",
                question: "Разница между Reset.css и Normalize.css?",
                tags: ["medium"],
            },
            {
                id: "vendor-prefixes",
                question:
                    "Что такое вендорные префиксы? И для чего они используются?",
                tags: ["easy"],
            },
            {
                id: "margin-collapsing",
                question: "Что такое схлопывание границ (margin collapsing)?",
                tags: ["easy"],
            },
            {
                id: "margin-vs-padding-collapsing",
                question:
                    "Чем схлопывание margin отличается от схлопывания padding??",
                tags: ["easy"],
            },
            {
                id: "css-transitions-and-animations",
                question:
                    "Какие CSS-свойства используются для создания анимаций и плавных переходов?",
                tags: ["easy"],
            },
            {
                id: "z-index-and-stacking-context",
                question:
                    "Что такое z-index? Как формируется контекст наложения?",
                tags: ["medium"],
            },
            {
                id: "local-vs-global-stacking-context",
                question:
                    "Чем отличается локальный и глобальный stacking context?",
                tags: ["medium"],
            },
            {
                id: "stacking-context-events-focus",
                question:
                    "Как влияют stacking context на события кликов и фокус?",
                tags: ["hard"],
            },
            {
                id: "css-global-keywords",
                question: "Глобальные ключевые слова в CSS?",
                tags: ["medium"],
            },
            {
                id: "css-feature-support",
                question:
                    "Как с помощью CSS определить, поддерживается ли свойство в браузере?",
                tags: ["medium"],
            },
        ],
    },
    {
        subject: "JS",
        template: "js",
        questions: [
            {
                id: "javascript-data-types",
                question: "Типы данных в JavaScript?",
                tags: ["easy"],
            },
            {
                id: "javascript-equality-operators",
                question:
                    "Разница между == и === (нестрогое/строгое равенство)?",
                tags: ["easy"],
            },
            {
                id: "object-is-vs-strict-equality",
                question: "В чем разница между Object.is() и ===?",
                tags: ["medium"],
            },
            {
                id: "js-var-let-const",
                question: "Разница между var, let и const?",
                tags: ["easy"],
            },
            {
                id: "javascript-strict-mode",
                question: "Что такое Strict mode в JavaScript?",
                tags: ["medium"],
            },
            {
                id: "javascript-rest-vs-spread",
                question: "Разница между Rest и Spread операторами?",
                tags: ["easy"],
            },
            {
                id: "javascript-rest-spread-limitations",
                question:
                    "Какие ограничения и особенности есть у rest и spread операторов?",
                tags: ["medium"],
            },
            {
                id: "javascript-spread-vs-objectassign",
                question: "В чём разница работы между spread и Object.assign?",
                tags: ["medium"],
            },
            {
                id: "javascript-destructuring",
                question: "Что такое деструктуризация?",
                tags: ["easy"],
            },
            {
                id: "javascript-function-vs-method",
                question: "Разница между функцией и методом?",
                tags: ["easy"],
            },
            {
                id: "javascript-property-descriptors",
                question: "Что такое дескрипторы свойств объектов?",
                tags: ["medium"],
            },
            {
                id: "javascript-accessor-properties",
                question: "Что такое свойства-аксессоры объектов?",
                tags: ["medium"],
            },
            {
                id: "javascript-nullish-coalescing",
                question: "Что такое оператор нулевого слияния (??)?",
                tags: ["easy"],
            },
            {
                id: "javascript-function-declaration-vs-expression",
                question:
                    "Разница между function declaration и function expression?",
                tags: ["easy"],
            },
            {
                id: "javascript-hoisting",
                question: "Что такое поднятие (Hoisting)?",
                tags: ["medium"],
            },
            {
                id: "javascript-closure",
                question: "Что такое замыкание (Closure)?",
                tags: ["medium"],
            },
            {
                id: "javascript-parameters-passing",
                question:
                    "Как передаются параметры в функцию: по ссылке или по значению?",
                tags: ["medium"],
            },
            {
                id: "recursion",
                question: "Что такое рекурсия?",
                tags: ["easy"],
            },
            {
                id: "tail-recursion-vs-regular",
                question:
                    "Что такое хвостовая рекурсия и как она отличается от обычной?",
                tags: ["medium"],
            },
            {
                id: "tail-recursion-optimization",
                question: "Как оптимизировать хвостовую рекурсию?",
                tags: ["hard"],
            },
            {
                id: "function-parameter-vs-argument",
                question: "Разница между параметром и аргументом функции?",
                tags: ["easy"],
            },
            {
                id: "javascript-this",
                question: "Что обозначает this в JavaScript?",
                tags: ["medium"],
            },
            {
                id: "javascript-scope",
                question: "Что такое область видимости (Scope)?",
                tags: ["easy"],
            },
            {
                id: "javascript-call-apply-bind",
                question: "Разница между .call(), .apply() и bind()?",
                tags: ["medium"],
            },
            {
                id: "javascript-bind-partial-application",
                question:
                    "Как работает частичное применение аргументов с .bind()?",
                tags: ["medium"],
            },
            {
                id: "partial-application-vs-currying",
                question:
                    "Чем частичное применение отличается от каррирования?",
                tags: ["medium"],
            },
            {
                id: "javascript-method-borrowing",
                question: "Что такое заимствование метода?",
                tags: ["medium"],
            },
            {
                id: "javascript-prototype",
                question: "Что такое прототип (Prototype) объекта?",
                tags: ["medium"],
            },
            {
                id: "javascript-proto-vs-prototype",
                question: "Чем отличается свойство __proto__ от prototype?",
                tags: ["medium"],
            },
            {
                id: "javascript-object-create-setprototypeof",
                question:
                    "Как работают методы Object.create() и Object.setPrototypeOf()?",
                tags: ["medium"],
            },
            {
                id: "javascript-setprototypeof-performance",
                question:
                    "Как влияет изменение прототипа через Object.setPrototypeOf() на производительность?",
                tags: ["medium"],
            },
            {
                id: "inheritance-type-in-js",
                question: "Какой тип наследования в JavaScript?",
                tags: ["medium"],
            },
            {
                id: "js-prototype-mechanism",
                question: "Как работает механизм прототипов в JavaScript?",
                tags: ["medium"],
            },
            {
                id: "javascript-boolean-coercion",
                question:
                    "Как превратить любой тип данных в булевый? Перечислите ложные значения в JS?",
                tags: ["easy"],
            },
            {
                id: "javascript-shallow-vs-deep-copy",
                question: `
                    Разница между глубокой (deep) и поверхностной (shallow) копиями объекта? Как сделать каждую из них?
                `,
                tags: ["medium"],
            },
            {
                id: "javascript-array-check",
                question: "Как проверить, является ли значение массивом?",
                tags: ["easy"],
            },
            {
                id: "javascript-typeof-vs-instanceof",
                question: "Разница между typeof и instanceof?",
                tags: ["medium"],
            },
            {
                id: "javascript-instanceof-limitations",
                question:
                    "В каких случаях instanceof может дать ложный результат?",
                tags: ["medium"],
            },
            {
                id: "immutability-in-js",
                question:
                    "Плюсы и минусы иммутабельности? Как достичь иммутабельности в JS?",
                tags: ["easy"],
            },
            {
                id: "javascript-set-vs-weakset",
                question: "Чем отличается Set от WeakSet?",
                tags: ["medium"],
            },
            {
                id: "javascript-garbage-collector",
                question: "Как работает сборщик мусора?",
                tags: ["medium"],
            },
            {
                id: "javascript-cyclic-references-garbage-collection",
                question: "Как циклические ссылки влияют на сборку мусора?",
                tags: ["medium"],
            },
            {
                id: "javascript-memory-leaks",
                question: "Как избежать утечек памяти в JS?",
                tags: ["medium"],
            },
            {
                id: "dom-event-handling",
                question:
                    "Как добавить и удалить обработчик события на DOM-элемент?",
                tags: ["easy"],
            },
            {
                id: "event-propagation",
                question:
                    "Что такое распространение события (Event Propagation)?",
                tags: ["medium"],
            },
            {
                id: "event-bubbling-vs-capturing",
                question:
                    "В чем разница между всплытием (bubbling) и захватом (capturing)?",
                tags: ["medium"],
            },
            {
                id: "event-delegation",
                question: "Что такое делегирование событий (Event Delegation)?",
                tags: ["medium"],
            },
            {
                id: "preventdefault-vs-stoppropagation",
                question:
                    "Разница между e.preventDefault() и e.stopPropagation()?",
                tags: ["easy"],
            },
            {
                id: "event-loop",
                question:
                    "Что такое цикл событий (event loop) и как он работает?",
                tags: ["hard"],
            },
            {
                id: "microtasks-vs-macrotasks",
                question: "Разница между микро и макрозадачами в event loop?",
                tags: ["hard"],
            },
            {
                id: "microtasks-ui-optimization",
                question:
                    "В каких случаях можно использовать микротаски для оптимизации UI?",
                tags: ["medium"],
            },
            {
                id: "infinite-microtasks",
                question:
                    "Что произойдет при бесконечном добавлении микротасков?",
                tags: ["hard"],
            },
            {
                id: "browser-protection-microtasks",
                question:
                    "Какие механизмы браузеры применяют для предотвращения блокировок из-за микротасков?",
                tags: ["hard"],
            },
            {
                id: "callback-hell",
                question:
                    "Что такое callback-функция? Что такое Callback Hell?",
                tags: ["medium"],
            },
            {
                id: "promises",
                question: "Что такое промисы (Promises)?",
                tags: ["medium"],
            },
            {
                id: "async-await",
                question: "Что такое async/await?",
                tags: ["medium"],
            },
            {
                id: "first-class-functions",
                question:
                    "Почему в JS функции называют объектами первого класса?",
                tags: ["medium"],
            },
            {
                id: "pseudo-array-arguments",
                question: "Что такое псевдомассив arguments?",
                tags: ["medium"],
            },
            {
                id: "host-vs-native-objects",
                question: "Разница между host-объектами и нативными объектами?",
                tags: ["medium"],
            },
            {
                id: "data-sharing-between-tabs",
                question:
                    "Каким образом можно обмениваться данными между вкладками браузера?",
                tags: ["medium"],
            },
            {
                id: "security-data-sharing-tabs",
                question:
                    "Как обеспечить безопасность при обмене данными между вкладками?",
                tags: ["medium"],
            },
            {
                id: "cross-origin-data-sharing",
                question:
                    "Каким образом можно обмениваться данными между вкладками браузера в рамках разных доменов?",
                tags: ["hard"],
            },
            {
                id: "es-modules",
                question: "Как работают es modules?",
                tags: ["medium"],
            },
            {
                id: "dependency-tree",
                question:
                    "Что такое дерево зависимостей (dependency tree) и как оно строится?",
                tags: ["medium"],
            },
            {
                id: "tree-shaking",
                question:
                    "Как работает tree shaking на основе дерева зависимостей?",
                tags: ["hard"],
            },
            {
                id: "tree-shaking-vs-deduplication",
                question: "Чем отличается tree shaking от дедупликации кода?",
                tags: ["hard"],
            },
            {
                id: "tree-shaking-commonjs-limitations",
                question: "Какие ограничения есть у tree shaking в CommonJS?",
                tags: ["hard"],
            },
            {
                id: "commonjs-esmodules-mixing-issues",
                question:
                    "Какие проблемы могут возникнуть при смешивании CommonJS и ES Modules?",
                tags: ["hard"],
            },
            {
                id: "esm-import-stages",
                question: "Какие бывают стадии импорта в esm?",
                tags: ["hard"],
            },
            {
                id: "esm-static-vs-dynamic-import",
                question:
                    "Чем отличаются статический и динамический импорт в ESM?",
                tags: ["hard"],
            },
        ],
    },
    {
        subject: "TypeScript",
        template: "ts",
        questions: [
            {
                id: "typescript-type-vs-interface",
                question:
                    "Разница между типом (type) и интерфейсом (interface)?",
                tags: ["medium"],
            },
            {
                id: "typescript-interface-declaration-merging",
                question: "Как ведёт себя декларативное слияние интерфейсов?",
                tags: ["medium"],
            },
            {
                id: "typescript-abstract-class-vs-interface",
                question:
                    "Разница между абстрактным классом (abstract class) и интерфейсом (interface)?",
                tags: ["medium"],
            },
            {
                id: "typescript-enum",
                question: "Что такое перечисление (enum)?",
                tags: ["easy"],
            },
            {
                id: "typescript-enum-alternatives",
                question: "Какие альтернативы enum есть в TypeScript?",
                tags: ["medium"],
            },
            {
                id: "typescript-union-vs-intersection",
                question:
                    "Разница между типами “Объединение” (|) и “Пересечение” (&)?",
                tags: ["medium"],
            },
            {
                id: "typescript-generics",
                question: "Что такое общие типы (generic) в TypeScript?",
                tags: ["medium"],
            },
            {
                id: "typescript-void-never-unknown",
                question: "Разница между типами void, never и unknown?",
                tags: ["medium"],
            },
            {
                id: "typescript-decorators",
                question: "Что такое декораторы?",
                tags: ["hard"],
            },
            {
                id: "typescript-decorators-reflect-metadata",
                question:
                    "Как декораторы взаимодействуют с метаданными (Reflect Metadata)?",
                tags: ["hard"],
            },
            {
                id: "typescript-metadata-types",
                question: "Какие типы метаданных обычно сохраняют?",
                tags: ["hard"],
            },
        ],
    },
    {
        subject: "REACT",
        template: "react",
        questions: [
            {
                id: "react-is-reactive",
                question: "Является ли React реактивным?",
                tags: ["medium"],
            },
            {
                id: "react-strict-mode",
                question: "Что такое строгий режим в React? Его преимущества?",
                tags: ["medium"],
            },
            {
                id: "state-vs-props",
                question: "Разница между состоянием(state) и пропсами(props)?",
                tags: ["easy"],
            },
            {
                id: "can-props-be-mutated",
                question: "Могут ли props быть изменены внутри компонента?",
                tags: ["easy"],
            },
            {
                id: "react-re-render-causes",
                question: "Какие существуют причины ререндера в React?",
                tags: ["medium"],
            },
            {
                id: "react-reconciliation-render",
                question:
                    "Что происходит при ререндере компонента на уровне reconciliation?",
                tags: ["hard"],
            },
            {
                id: "react-fiber-and-reconciliation",
                question: "Что такое fiber и как он связан с reconciliation?",
                tags: ["hard"],
            },
            {
                id: "react-cooperative-scheduling",
                question:
                    "Что такое cooperative scheduling и как это реализовано через Fiber?",
                tags: ["hard"],
            },
            {
                id: "react-startTransition-useDeferredValue",
                question:
                    "Как работают startTransition и useDeferredValue в контексте cooperative scheduling?",
                tags: ["hard"],
            },
            {
                id: "react-useTransition-startTransition",
                question: "Как связаны useTransition и startTransition?",
                tags: ["medium"],
            },
            {
                id: "react-startTransition-event-handlers",
                question:
                    "Можно ли использовать startTransition внутри обработчиков событий?",
                tags: ["medium"],
            },
            {
                id: "react-startTransition-user-experience",
                question:
                    "Как startTransition влияет на пользовательский опыт при быстром вводе?",
                tags: ["medium"],
            },
            {
                id: "react-useTransition-vs-startTransition",
                question:
                    "В каких случаях предпочтительнее использовать useTransition вместо startTransition?",
                tags: ["medium"],
            },
            {
                id: "react-fragment",
                question:
                    "Что такое фрагмент (Fragment)? Почему фрагмент лучше, чем div обёртка?",
                tags: ["easy"],
            },
            {
                id: "react-key",
                question: "Для чего нужен атрибут key?",
                tags: ["easy"],
            },
            {
                id: "react-list-no-keys",
                question: "Что произойдёт, если не указать ключи в списках?",
                tags: ["easy"],
            },
            {
                id: "react-component-vs-container",
                question: "Разница между компонентом и контейнером?",
                tags: ["medium"],
            },
            {
                id: "react-container-alternatives",
                question: `
                    Какие альтернативы контейнерам существуют в современном React (HOCs, Render Props, custom hooks)?
                `,
                tags: ["medium"],
            },
            {
                id: "react-portal",
                question: "Что такое портал (Portal)?",
                tags: ["easy"],
            },
            {
                id: "react-context",
                question: "Что такое контекст (Context)?",
                tags: ["easy"],
            },
            {
                id: "react-context-pitfalls",
                question:
                    "Подводные камни при частом использовании Context API?",
                tags: ["medium"],
            },
            {
                id: "react-synthetic-events",
                question: "Что такое синтетические события в React?",
                tags: ["medium"],
            },
            {
                id: "react-ref",
                question:
                    "Что такое React-ссылка (ref)? Почему не нужно использовать поиск DOM Node через document?",
                tags: ["medium"],
            },
            {
                id: "react-setstate-function",
                question: "Зачем в setState() нужно передавать функцию?",
                tags: ["medium"],
            },
            {
                id: "react-batching",
                question: "Что такое батчинг?",
                tags: ["medium"],
            },
            {
                id: "react-batching-limitations",
                question:
                    "Какие есть риски или ограничения у автоматического batching?",
                tags: ["medium"],
            },
            {
                id: "react-children",
                question:
                    "Что такое сhildren? В чём отличие между children, children() и Children?",
                tags: ["medium"],
            },
            {
                id: "react-render-html",
                question: "Как отрендерить HTML код в React-компоненте?",
                tags: ["easy"],
            },
        ],
    },
] satisfies Questions[];
