
```js
/**
 * Задача: написать реализацию функции, которая только один раз пишет 'click' в консоль
 */
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
