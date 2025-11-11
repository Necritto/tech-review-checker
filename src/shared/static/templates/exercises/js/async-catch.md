
```js

void (function test() {
  try {
    new Promise(() => {
      throw 42;
    });
  } catch (error) {
    console.log(error);
  }
})();

```

---

```js
/** Ответ */

void (async function test() {
  try {
    await new Promise(() => {
      throw 42;
    });
  } catch (error) {
    console.log(error);
  }
})();

/** Или */

void (function test() {
  new Promise(() => {
    throw 42;
  }).catch(console.log);
})();

```
