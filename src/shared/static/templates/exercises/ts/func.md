&nbsp;
&nbsp;
&nbsp;

```ts
/**
    Дано: рандомный объект с любым количеством ключей и функция возвращения значения по ключу
    Задача: корректно типизировать функцию
*/

const target = { a: 1, b: 2, c: 3, d: 4 };

function getProp(obj, key) {
    return obj[key];
}

getProp(target, "a"); // Success
getProp(target, "z"); // Error
```

&nbsp;
&nbsp;
&nbsp;

---

&nbsp;
&nbsp;
&nbsp;

```ts
/** Ответ */

function getProp<T>(obj: T, key: keyof T) {
    return obj[key];
}
```

&nbsp;
&nbsp;
&nbsp;
