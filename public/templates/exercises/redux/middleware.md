&nbsp;
&nbsp;
&nbsp;

```js
/**
 * Дан пример redux middleware. Найти и исправить все ошибки.
 */
const exampleMiddleware = (store) => (next) => (action) => {
    if (action.type === "user/login") {
        fetch("/api/login", {
            method: "POST",
            body: JSON.stringify(action.payload),
        })
            .then((response) => response.json())
            .then((data) => {
                store.dispatch({ type: "user/loginSuccess", payload: data });
            });
    }

    if (action.type === "user/logout") {
        console.log("User logged out");
    }
};
```

&nbsp;
&nbsp;
&nbsp;

---

&nbsp;
&nbsp;
&nbsp;

| Ошибка                                                            | Объяснение                                                                                                                            | Как исправить                                                                                               |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **1. Асинхронный код без await и без try/catch**                  | Middleware не ждет завершения `fetch` и не обрабатывает ошибки, что ведёт к необработанным исключениям и несогласованности состояния. | Использовать `async/await` с `try/catch` или middleware для асинхронных действий (например, `redux-thunk`). |
| **2. Диспатчинг action внутри then без учёта последовательности** | Нет контроля над порядком выполнения, могут возникать гонки состояний.                                                                | Лучше вызывать async actions через thunk или RTK Query, или аккуратно синхронизировать.                     |
| **3. Не вызван next(action) для некоторых действий**              | Экшены не доходят до редьюсеров и других middleware, ломая поток Redux.                                                               | Всегда вызывать `next(action)`, чтобы обеспечить передачу экшена дальше.                                    |

&nbsp;
&nbsp;
&nbsp;

```js
/** Ответ */

const correctMiddleware = (store) => (next) => async (action) => {
    next(action);

    if (action.type === "user/login") {
        try {
            const response = await fetch("/api/login", {
                method: "POST",
                body: JSON.stringify(action.payload),
            });
            const data = await response.json();
            store.dispatch({ type: "user/loginSuccess", payload: data });
        } catch (error) {
            store.dispatch({ type: "user/loginFailure", error });
        }
    }
};
```

&nbsp;
&nbsp;
&nbsp;
