# ❓ Как проверить, является ли значение массивом в JavaScript?

---

## Основной способ

- Используйте встроенный метод:

```js
Array.isArray(value)
```

- Возвращает `true`, если `value` — массив, иначе `false`.

---

## Альтернативные способы и их недостатки

1. Оператор `instanceof`:

```js
value instanceof Array
```

- Работает только если `value` и `Array` принадлежат одному контексту (например, один фрейм).

- В случае работы с объектами из разных окон/фреймов может возвращать `false`.

2. Проверка через `Object.prototype.toString`:

```js
Object.prototype.toString.call(value) === '[object Array]'
```

- Надёжно работает во всех случаях, но менее читаемо.

---

## Итог

- Для большинства задач используйте `Array.isArray()` — это современный и стандартный способ.

- Если необходима универсальная проверка в сложных окружениях — используйте `Object.prototype.toString.call()`.

---
