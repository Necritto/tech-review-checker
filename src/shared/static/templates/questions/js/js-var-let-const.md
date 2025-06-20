# ❓ Разница между `var`, `let` и `const` в JavaScript

---

## Область видимости

- `var` — функциональная область видимости (function scope).  
- `let` и `const` — блочная область видимости (block scope).

---

## Поднятие (hoisting)

- `var` — переменная поднимается (hoisted) и инициализируется значением `undefined`.  
- `let` и `const` — переменные поднимаются, но не инициализируются, находятся в **временной мёртвой зоне** (TDZ) до объявления.

---

## Изменяемость значения

- `var` и `let` — можно переопределять и изменять значение.  
- `const` — значение нельзя переопределять (константа), но если это объект или массив — можно изменять внутренние свойства/элементы.

---

## Пример

```js
console.log(a); // undefined (var поднимается)
var a = 1;

console.log(b); // ReferenceError (TDZ)
let b = 2;

const c = 3;
c = 4; // TypeError — нельзя изменить const

const obj = { x: 1 };
obj.x = 2; // Разрешено — изменяется свойство объекта
```

---

## Итог

| Ключевое слово | Область видимости | Hoisting                 | Изменяемость         |
| -------------- | ----------------- | ------------------------ | -------------------- |
| `var`          | Функциональная    | Инициализировано         | Можно менять         |
| `let`          | Блочная           | Неинициализировано (TDZ) | Можно менять         |
| `const`        | Блочная           | Неинициализировано (TDZ) | Нельзя менять ссылку |

- Рекомендуется использовать `let` и `const` для предотвращения багов, связанных с областью видимости и повторным объявлением.
- Используйте `const` по умолчанию, а `let` — если переменная изменяется.

---
