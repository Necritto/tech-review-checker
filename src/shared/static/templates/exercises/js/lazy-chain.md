Реализуйте функцию **lazyChain(initialValue)**, которая возвращает объект с методами для отложенных вычислений. Вычисления происходят только при вызове метода **.compute()**.

### Требования

- Методы **add(x)** и **multiply(x)** накапливают операции, но не выполняют их
- Метод **.compute()** последовательно применяет все накопленные операции к начальному значению и возвращает результат
- Вызовы методов можно чейнить (возвращают сам объект)
- Операции применяются в порядке вызова методов

```js
function lazyChain() {
    // Impl
}

// Кейс 1: Базовая цепочка
const result1 = lazyChain(5).add(3).multiply(2).compute();
console.log(result1); // 16

// Кейс 2: Только одна операция
const result2 = lazyChain(10).multiply(5).compute();
console.log(result2); // 50

// Кейс 3: Пустая цепочка
const result3 = lazyChain(42).compute();
console.log(result3); // 42

// Кейс 4: Без compute не вычисляет
console.log(lazyChain(5).add(3).multiply(2));

```

---

```js
/** Ответ */

function lazyChain(initial) {
  const operations = [];

  const chain = {
    add(x) {
      operations.push((val) => val + x);

      return this;
    },
    multiply(x) {
      operations.push((val) => val * x);

      return this;
    },
    compute() {
      return operations.reduce((value, fn) => fn(value), initial);
    },
  };

  return chain;
}
```
