
```ts
/**
    Дано: кортеж содержащий число, строку и неограниченное количество логических ключей
    Задача: корректно типизировать кортеж
*/

type TupleType = any;

const array: TupleType = [1, "String", true, false, true];
```

---

```ts
/** Ответ */

type TupleType = [number, string, ...boolean[]];
```
