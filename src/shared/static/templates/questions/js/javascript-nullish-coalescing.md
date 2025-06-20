# ❓ Что такое оператор нулевого слияния (`??`) в JavaScript?

---

## Определение

- Оператор нулевого слияния `??` возвращает **правый операнд**, если **левый операнд равен `null` или `undefined`**, иначе возвращает левый операнд.

---

## Синтаксис

```js
let result = value1 ?? value2;
```

- Если `value1` не `null` и не `undefined`, `result = value1`.
- Иначе, `result = value2`.

---

## Пример использования

```js
const foo = null ?? 'default';      // 'default'
const bar = undefined ?? 'default'; // 'default'
const baz = 0 ?? 42;                 // 0 (не `null`/`undefined`)
const qux = '' ?? 'fallback';        // '' (пустая строка считается значением)
```

---

## Отличия от логического ИЛИ (`||`)

- `||` возвращает правый операнд, если левый — ложное значение (`false`, `0`, `''`, `null`, `undefined`, `NaN`).
- `??` возвращает правый операнд **только если левый `null` или `undefined`**.

```js
0 || 42;  // 42 (потому что 0 — falsy)
0 ?? 42;  // 0  (потому что 0 не null/undefined)
```

---

## Особенности

- Оператор `??` часто используется для установки значений по умолчанию, когда `null` и `undefined` — единственные нежелательные значения.
- Не может использоваться вместе с операторами `&&` и `||` без явных скобок из-за приоритетов.

---

## Итог

- `??` — безопасный оператор для подстановки дефолтных значений, игнорирующий ложные, но валидные значения типа `0` или `''`.
- Отличается от `||` тем, что учитывает только `null` и `undefined` как "отсутствие значения".
- Полезен для явного контроля значения по умолчанию.

---
