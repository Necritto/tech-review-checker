&nbsp;
&nbsp;
&nbsp;

```ts
/**
    Дано: сложный многомерный массив
    Задача: реализовать корректный тип для типизации массива
*/
type ArrayType = any;

const test: ArrayType = [1, [2, [3]], [4, 5], [[[[[6]]]]]];
```

&nbsp;
&nbsp;
&nbsp;

---

&nbsp;
&nbsp;
&nbsp;

```ts
/** Ответ */

type ArrayType<T> = T | ArrayType<T>[];
```

&nbsp;
&nbsp;
&nbsp;
