&nbsp;
&nbsp;
&nbsp;

```js
/**
    Дан следующий JavaScript-код.
    Объясните, почему попытка изменить значение свойства MAX_USERS или перечислить его в цикле for...in не приведёт к ожидаемому результату, а также почему свойство userCount ведёт себя необычно при попытке прямого присваивания.

    Ожидаемое поведение:

    MAX_USERS должен быть константой: неизменяемым, неперечислимым, ненастраиваемым.

    userCount должен быть "вычисляемым" свойством: при попытке присвоить ему значение, оно должно автоматически сохраняться в приватном _userCount и при чтении возвращать это значение, но быть видимым для внешнего доступа и изменяемым.
*/

const appConfig = {
    MAX_USERS: 100;
};

console.log('Попытка изменить MAX_USERS:');
appConfig.MAX_USERS = 50;
console.log(appConfig.MAX_USERS); // Ожидаем 100

console.log('Перечисление свойств appConfig:');
for (let key in appConfig) {
    console.log(key); // Вывод: (ничего)
}

// =========================================================

const userStats = {
    _userCount: 0 // "Приватное" свойство для хранения
};

Object.defineProperty(userStats, 'userCount', {
    value: userStats._userCount,
    writable: true,
    enumerable: true,
    configurable: true
});

console.log('Попытка изменить userCount:');
userStats.userCount = 5; // Ожидаем, что _userCount изменится на 5
console.log(userStats.userCount); // Ожидаем 5
console.log(userStats._userCount); // Ожидаем 5
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

const appConfig = {};

Object.defineProperty(appConfig, "MAX_USERS", {
    value: 100,
    writable: false, // Неизменяемое значение
    enumerable: false, // Неперечислимое
    configurable: false, // Ненастраиваемое (нельзя удалить или изменить дескрипторы)
});

console.log("Попытка изменить MAX_USERS (исправлено):");
appConfig.MAX_USERS = 50;
console.log(appConfig.MAX_USERS); // Вывод: 100

console.log("Перечисление свойств appConfig (исправлено):");
for (let key in appConfig) {
    console.log(key);
}

// =========================================================

const userStats = {
    _userCount: 0, // "Приватное" свойство для хранения
};

Object.defineProperty(userStats, "userCount", {
    get: function () {
        console.log("Чтение userCount");
        return this._userCount;
    },
    set: function (value) {
        console.log(`Запись userCount: ${value}`);
        if (typeof value === "number") {
            this._userCount = value;
        } else {
            console.error("Некорректное значение для userCount");
        }
    },
    enumerable: true,
    configurable: true,
});

console.log("\nПопытка изменить userCount (исправлено):");
userStats.userCount = 5;
console.log(userStats.userCount);
console.log(userStats._userCount);
```

&nbsp;
&nbsp;
&nbsp;
