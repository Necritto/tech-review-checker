
```js

function clickOnce() {}

clickOnce();

```

---

```js
/** Ответ */

function clickOnce() {
  const controller = new AbortController();

  document.addEventListener(
    'click',
    () => {
      console.log('click');
      controller.abort();
    },
    { signal: controller.signal }
  );
}

clickOnce();

```
