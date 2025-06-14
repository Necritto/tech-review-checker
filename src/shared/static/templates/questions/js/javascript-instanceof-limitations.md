# ❓ В каких случаях `instanceof` может дать ложный результат?

---

## Основные причины ложных результатов `instanceof`

### 1. Разные глобальные контексты (например, iframe или окна)

- Объекты, созданные в разных контекстах, имеют свои глобальные конструкторы.

- Например, `Array` из iframe и `Array` из основного окна — разные функции-конструкторы.

```js
const iframeArray = iframe.contentWindow.Array;
const arr = new iframeArray();

arr instanceof Array;            // false — разные контексты
arr instanceof iframe.contentWindow.Array; // true
```

---

### 2. Изменённая цепочка прототипов

- Если вручную изменить `prototype` объекта или его прототипную цепочку, `instanceof` может не сработать.

```js
const obj = {};
Object.setPrototypeOf(obj, null);

obj instanceof Object; // false, т.к. нет цепочки прототипов к Object.prototype
```

---

### 3. Проверка не объекта или примитива

- `instanceof` всегда возвращает `false` для примитивов (числа, строки, и т.п.).

---

### 4. Объекты с переопределённым Symbol.hasInstance

- Конструкторы могут определить метод `[Symbol.hasInstance]`, изменяя логику работы `instanceof`.

```js
class MyClass {
  static [Symbol.hasInstance](instance) {
    return false;
  }
}

const obj = new MyClass();
obj instanceof MyClass; // false из-за переопределения
```

---

## Итог

- `instanceof` надёжно работает при стандартной цепочке прототипов в одном контексте.

- Может давать ложные отрицательные при работе с несколькими глобальными окружениями.

- При необходимости универсальной проверки типа объектов используйте дополнительные методы (например, `Object.prototype.toString.call()`).

---
