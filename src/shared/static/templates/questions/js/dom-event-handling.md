# ❓ Как добавить и удалить обработчик события на DOM-элемент?

---

## Добавление обработчика

```js
const element = document.getElementById('myButton');

function handleClick(event) {
  console.log('Clicked!', event);
}

element.addEventListener('click', handleClick);
```

* Метод `addEventListener` принимает тип события и функцию-обработчик.

* Обработчик можно добавлять несколько раз — они все будут вызваны.

---

## Удаление обработчика

```js
element.removeEventListener('click', handleClick);
```

* Для успешного удаления функция должна быть **той же самой**, что и при добавлении.

* Если при добавлении использовалась анонимная функция, удалить обработчик невозможно.

---

## Важные моменты

* Обработчики добавляются без замены существующих.

* Можно указать третий параметр — объект настроек (`capture`, `once`, `passive`).

---

## Итог

* Добавлять обработчик через `addEventListener(type, handler)`.

* Удалять через `removeEventListener(type, handler)`.

* Для удаления нужно иметь ссылку на ту же функцию.

---
