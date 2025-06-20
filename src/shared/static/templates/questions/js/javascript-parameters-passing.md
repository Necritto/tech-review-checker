# ❓ Как передаются параметры в функцию: по ссылке или по значению?

---

## Основное правило

- В JavaScript **все параметры передаются по значению**.

---

## Что это значит?

- Для **примитивных типов** (`number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`) в функцию копируется **значение**.

- Для **объектов** (включая массивы и функции) в функцию копируется **ссылка на объект**, то есть **значение — это ссылка**.

---

## Следствия

- Изменения свойств объекта внутри функции **видны снаружи**, потому что функция работает с той же ссылкой на объект.

- Присваивание параметру нового объекта или примитива внутри функции **не влияет** на переменную снаружи, так как копия ссылки/значения меняется локально.

---

## Примеры

```js
// Примитивы — копия значения
function changeValue(x) {
  x = 10;
}
let a = 5;
changeValue(a);
console.log(a); // 5 (не изменился)

// Объекты — копия ссылки
function changeObj(obj) {
  obj.prop = 'changed';     // Изменит объект снаружи
  obj = { prop: 'new' };    // Локальное присваивание новой ссылки — не влияет снаружи
}
const myObj = { prop: 'original' };
changeObj(myObj);
console.log(myObj.prop);    // 'changed'
```

---

## Итог

- Передача в функции — всегда **копия значения**.
- Для примитивов — копия самого значения.
- Для объектов — копия ссылки на объект.
- Изменение объекта внутри функции изменяет исходный объект, но переназначение параметра — нет.

---
