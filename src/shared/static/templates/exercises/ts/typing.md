```ts
function memoize(fn) {
  const cache = new Map();

  return function(...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key)!;
    }

    const result = fn(...args);
    cache.set(key, result);

    return result;
  };
}

// Должно работать с разными типами аргументов
const fn1 = (a: number, b: string) => `${a}-${b}`;
const m1 = memoize(fn1);
m1(1, 'x'); // Success
m1('x', 1); // Error

// Должен сохраняться возвращаемый тип
const fn2 = (x: number) => x * 2;
const m2 = memoize(fn2);
const double: number = m2(5); // Success

// Должен работать с функциями без аргументов
const fn3 = () => Date.now();
const m3 = memoize(fn3);
const time: number = m3(); // Success
```

```ts
// Ответ

function memoize<A extends any[], R>(
  fn: (...args: A) => R
): (...args: A) => R {
  const cache = new Map<string, R>();

  return function(...args: A): R {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key)!;
    }

    const result = fn(...args);
    cache.set(key, result);

    return result;
  };
}
```
