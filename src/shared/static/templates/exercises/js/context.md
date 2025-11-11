
```js

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

---

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
