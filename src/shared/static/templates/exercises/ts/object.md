
```ts
/**
    Дано: объект с любым количеством ключей
    Задача: Реализовать тип для констант valueN, который может иметь значение одного из ключей объекта target
*/
const targetObject = {
    a: 1,
    b: 2,
    c: 3,
};

type ValueType = any;

const value1: ValueType = 1; // Success
const value2: ValueType = 4; // Error
```

---

```ts
/** Ответ */

const targetObject = {
    a: 1,
    b: 2,
    c: 3,
} as const;

type ValueType = (typeof targetObject)[keyof typeof targetObject];
```
