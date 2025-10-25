
```js
/**
    Дан следующий JavaScript-код.
    Объясните, почему объект user изменяется после вызова функции updateUserInfo, хотя ожидалось, что функция должна возвращать новый объект, не изменяя исходный.
    Предложите корректный способ изменения функции updateUserInfo, чтобы она работала корректно
*/

const user = {
    id: 1,
    name: "Alice",
    settings: {
        theme: "dark",
        notifications: true,
    },
    roles: ["admin", "editor"],
};

function updateUserInfo(userData, newSettings) {
    const updatedUser = { ...userData };
    updatedUser.settings = newSettings;
    updatedUser.roles.push("viewer");
    return updatedUser;
}

const newSettings = { theme: "light", notifications: false };
const updatedUser = updateUserInfo(user, newSettings);

console.log(user.settings === newSettings); // Ожидаем false
console.log(user.roles.includes("viewer")); // Ожидаем false
```

---

```js
/** Ответ */

const user = {
    id: 1,
    name: "Alice",
    settings: {
        theme: "dark",
        notifications: true,
    },
    roles: ["admin", "editor"],
};

function updateUserInfo(userData, newSettings) {
    return {
        ...userData,
        settings: { ...newSettings },
        roles: [...userData.roles, "viewer"],
    };
}

const newSettings = { theme: "light", notifications: false };
const updatedUser = updateUserInfo(user, newSettings);

console.log(user.settings === newSettings); // false (как и должно быть)
console.log(user.roles.includes("viewer")); // false (исходный user не изменен)
console.log(updatedUser.roles.includes("viewer")); // true (новый updatedUser изменен)
console.log(user.roles === updatedUser.roles); // false (массив roles скопирован)
```
