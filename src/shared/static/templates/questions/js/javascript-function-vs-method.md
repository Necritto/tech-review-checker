# ❓ Разница между функцией и методом в JavaScript

---

## Определения

- **Функция** — это блок кода, который можно вызвать по имени, он может быть объявлен независимо и не связан с объектом.
  
  ```js
  function greet() {
    console.log("Hello");
  }
    ```

- **Метод** — это функция, которая является свойством объекта и вызывается через этот объект.

  ```js
  const obj = {
    greet() {
      console.log("Hello from method");
    }
  };
  ```

---

## Ключевые отличия

| Параметр           | Функция                             | Метод                                |
| ------------------ | ----------------------------------- | ------------------------------------ |
| Контекст вызова    | `this` зависит от вызова            | `this` ссылается на объект-владельца |
| Область применения | Может быть глобальной или локальной | Всегда принадлежит объекту           |
| Вызов              | `func()`                            | `obj.method()`                       |

---

## Особенности `this`

- В методе `this` обычно указывает на объект, которому принадлежит метод.
- В обычной функции `this` зависит от контекста вызова (например, глобальный объект или `undefined` в strict mode).
- Стрелочные функции не имеют собственного `this`.

---

## Итог

- Метод — это функция, связанная с объектом.
- Основное отличие — контекст `this` и способ вызова.
- Понимание разницы важно для правильного использования и управления контекстом в коде.

---
