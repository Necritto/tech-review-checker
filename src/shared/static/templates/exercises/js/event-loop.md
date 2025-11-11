
```js

function timeouts() {
  setTimeout(() => {
    console.log('1');
  }, 0);

  console.log('2');

  new Promise((resolve, reject) => {
    console.log('3');

    setTimeout(() => {
      console.log('4');
      resolve('5');
      reject('6');
      console.log('7');
    });
  })
    .finally(() => {
      console.log('8');

      return '9';
    })
    .then(console.log)
    .catch(console.log)
    .then(() => console.log('10'));

  console.log('11');

  setTimeout(() => {
    console.log('12');
  }, 0);
}

// timeouts();

```

> Ответ: 2 3 11 1 4 7 8 5 10 12
