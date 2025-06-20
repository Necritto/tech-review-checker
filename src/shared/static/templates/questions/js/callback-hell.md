# ❓ Что такое callback-функция? Что такое Callback Hell?

---

## Callback-функция

- **Callback (обратный вызов)** — это функция, переданная в другую функцию в качестве аргумента, которая вызывается после завершения какой-либо операции (обычно асинхронной).

- Позволяет продолжить выполнение кода после завершения операции (например, загрузки данных).

---

## Пример callback

```js
function fetchData(callback) {
  setTimeout(() => {
    callback('Данные загружены');
  }, 1000);
}

fetchData((result) => {
  console.log(result); // "Данные загружены"
});
```

---

## Callback Hell (Ад колбэков)

- Ситуация, когда колбэки вложены друг в друга многократно, образуя "пирамиду" или "лесенку" кода.

- Приводит к ухудшению читаемости, поддерживаемости и увеличению риска ошибок.

---

## Пример Callback Hell

```js
login(user, (err, userData) => {
  if (err) return handleError(err);
  getProfile(userData, (err, profile) => {
    if (err) return handleError(err);
    getPermissions(profile, (err, permissions) => {
      if (err) return handleError(err);
      // И так далее...
    });
  });
});
```

---

## Итог

- **Callback** — функция, вызываемая после завершения другой функции.

- **Callback Hell** — проблема с глубоко вложенными колбэками, затрудняющая чтение и сопровождение кода.

- Для решения проблемы используют Promises, async/await и другие методы упрощения асинхронного кода.

---
