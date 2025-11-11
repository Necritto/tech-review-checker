
```js

function extendedTypeof(value) {}

console.log(extendedTypeof([]) === 'array');
console.log(extendedTypeof({}) === 'object');
console.log(extendedTypeof(null) === 'null');
console.log(extendedTypeof(42) === 'number');
console.log(extendedTypeof(() => ({})) === 'function');
console.log(extendedTypeof(new Date()) === 'date');
console.log(extendedTypeof(Promise.resolve()) === 'promise');

```

---

```js
/** Ответ */

function extendedTypeof(value) {
  const objectTag = Object.prototype.toString.call(value);

  return objectTag.replace(/[\[\]\s]|object/g, '').toLowerCase();
}

```
