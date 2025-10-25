
```ts
/**
    Необходимо реализовать utility type, который сможет фильтровать переданный в него
    тип по определённым ключам из этого типа и делать все поля не обязательными
*/
interface Input {
    name: string;
    age: number;
    role: "test" | "ne-test";
}

type PartialFilter = {};

type Output1 = PartialFilter<Input, "age">;
/**
 * {
 *  name?: string;
 *  role?: 'test' | 'ne-test';
 * }
 */
type Output2 = PartialFilter<Input, "age" | "name">;
/**
 * {
 *  role?: 'test' | 'ne-test';
 * }
 */
type Output3 = PartialFilter<Input, "kek">;
/**
 * Error
 */
```

---

```ts
/** Ответ */

type PartialFilter<Type, Props extends keyof Type> = {
    [Property in keyof Type as Exclude<Property, Props>]+?: Type[Property];
};
```
