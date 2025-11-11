
```js

const elements = document.querySelectorAll('div');
const content = elements.map(e => e.textContent);
console.log(content);

```

---

```js
/** Ответ */

const elements = document.querySelectorAll('div');
const content = Array.prototype.map.call(elements, e => e.textContent);
console.log(content);

```
