
```js
/**
    Дан следующий JavaScript-код.
    Объясните, почему вызов .add(5).multiply(2).getResult() приводит к ошибке и как это исправить, чтобы цепочка методов работала корректно, возвращая финальный результат вычислений
*/

const calc = {
    result: 0,
    add: function (value) {
        this.result += value;
    },
    multiply: function (value) {
        this.result *= value;
    },
    getResult: function () {
        return this.result;
    },
};

const finalResult = calc.add(5).multiply(2).getResult(); // Ошибка!
console.log(finalResult); // Ожидаем 10
```

---

```js
/** Ответ */

const calc = {
    result: 0,
    add: function (value) {
        this.result += value;
        return this;
    },
    multiply: function (value) {
        this.result *= value;
        return this;
    },
    getResult: function () {
        return this.result;
    },
};

const finalResult = calc.add(5).multiply(2).getResult();
console.log(finalResult); // Ожидаем 10
```
