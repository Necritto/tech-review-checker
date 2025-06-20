# ❓ Альтернативы enum в TypeScript

---

## 1. Union типов строк или чисел

```ts
type Direction = 'Up' | 'Down' | 'Left' | 'Right';

function move(dir: Direction) {
  // ...
}
```

* Простой и лёгкий способ задать фиксированный набор допустимых значений.
* Не компилируется в JavaScript-код — отсутствует runtime объект.
* Позволяет строгую типизацию и автодополнение в IDE.

---

## 2. Константные объекты с `as const`

```ts
const Status = {
  Success: 'SUCCESS',
  Error: 'ERROR',
  Loading: 'LOADING'
} as const;

type Status = typeof Status[keyof typeof Status];
```

* Создаёт объект с неизменяемыми значениями.
* Позволяет использовать значения как константы и типы одновременно.
* Не поддерживает обратное отображение (в отличие от числовых enum).

---

## 3. Использование `const enum`

```ts
const enum Colors {
  Red,
  Green,
  Blue
}
```

* Позволяет компилировать enum в инлайновые значения, уменьшая размер кода.
* Поддержка зависит от конфигурации TypeScript и сборщика.
* Может привести к ошибкам при несовместимом использовании с динамическим импортом.

---

## Итог

* Union типов и константные объекты с `as const` часто предпочтительнее за счёт простоты и лучшей поддержки современных инструментов.
* Enum полезен, когда требуется обратное отображение или совместимость с классическим JavaScript.
* Выбор зависит от требований проекта и предпочтений команды.

---
