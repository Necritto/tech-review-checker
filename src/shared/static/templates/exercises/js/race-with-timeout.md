Реализуйте функцию **raceWithTimeout(promise, timeout)**, которая принимает промис, число миллисекунд и текст ошибки. Функция должна вернуть новый промис, который:

- **Разрешается** значением исходного промиса, если он успел завершиться за *timeout* мс
- **Отклоняется** с ошибкой, если исходный промис не завершился за отведённое время

### Требования

1. Таймер должен срабатывать строго через *timeout* мс после вызова функции
2. Если исходный промис отклоняется (даже до таймаута) — возвращённый промис должен отклониться с той же ошибкой
3. Если исходный промис завершился после таймаута — это должно быть проигнорировано (не влиять на уже отклонённый промис)
4. Не должно быть утечек памяти (таймер должен быть очищен после завершения гонки)
5. Использовать в решении AbortController

```js
function raceWithTimeout(promise, timeout, errorMessage) {
    // Impl
}

// Кейс 1: Успех до таймаута
raceWithTimeout(
    Promise.resolve('Успех до таймаута'),
    100,
).then(console.log).catch(console.log);

// Кейс 2: Ошибка по таймауту
raceWithTimeout(
    new Promise(r => setTimeout(r, 200)),
    100,
    'Ошибка по таймауту',
).then(console.log).catch(e => console.log(e.message));

// Кейс 3: Ошибка исходного промиса
raceWithTimeout(
    Promise.reject('Ошибка исходного промиса'),
    1000,
).then(console.log).catch(console.log);

// Кейс 4: Таймаут 0 с синхронным промисом
raceWithTimeout(
    Promise.resolve('Таймаут 0 с синхронным промисом'),
    0,
).then(console.log).catch(console.log);

```

---

```js
/** Ответ */

function raceWithTimeout(promise, timeout, errorMessage = 'Timeout') {
  const abortController = new AbortController();

  const timeoutPromise = new Promise((_, reject) => {
    const timer = setTimeout(() => {
      abortController.abort();
      reject(new Error(errorMessage));
    }, timeout);

    abortController.signal.addEventListener('abort', () => clearTimeout(timer));
  });

  return Promise.race([promise, timeoutPromise]);
}

```
