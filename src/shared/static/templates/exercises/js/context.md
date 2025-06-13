&nbsp;
&nbsp;
&nbsp;

```js
/**
    Дан следующий JavaScript-код.
    Объясните, почему вызов user.greet() приводит к ошибке при попытке доступа к this.name, и как это исправить, чтобы функция greet корректно выводила имя пользователя.
    Приведите 3 примера исправления.
*/

const user = {
    name: "Alex",
    age: 30,
    greet: function () {
        setTimeout(function () {
            console.log(`Привет, меня зовут ${this.name}.`);
        }, 100);
    },
};

user.greet();
```

&nbsp;
&nbsp;
&nbsp;

---

&nbsp;
&nbsp;
&nbsp;

```js
/** Ответ */

const user = {
    name: 'Alex',
    age: 30,
    greet: function() {
        setTimeout(() => {
            console.log(`Привет, меня зовут ${this.name}.`);
        }, 100);
    }
    // Или
    greet: function() {
        setTimeout(function() {
            console.log(`Привет, меня зовут ${this.name}.`);
        }.bind(this), 100);
    }
    // Или
    greet: function() {
        const that = this;
        setTimeout(function() {
            console.log(`Привет, меня зовут ${that.name}.`);
        }, 100);
    }
};

user.greet(); // Вывод: Привет, меня зовут Alex.
```

&nbsp;
&nbsp;
&nbsp;
