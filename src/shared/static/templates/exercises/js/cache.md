&nbsp;
&nbsp;
&nbsp;

```js
/**
    Дан следующий JavaScript-код.
    Необходимо реализовать простой класс кэширования.
*/

class SimpleCache {
    // implement methods
}

const cache = new SimpleCache();

async function fetchTodos(todoId) {
    const cacheKey = `todo_${todoId}`;

    let todos = cache.get(cacheKey);

    if (todos) {
        console.log("Data retrieved from cache");

        return todos;
    }

    console.log("Fetching from API...");

    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/todos/${todoId}`
        );
        todos = await response.json();

        cache.set(cacheKey, todos, 1000);

        return todos;
    } catch (error) {
        console.error("Failed to fetch user data:", error);

        return null;
    }
}

console.log(fetchTodos(1));
console.log(fetchTodos(1));

setTimeout(() => {
    console.log(fetchTodos(1));
}, 2000);
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

class SimpleCache {
    constructor(defaultTTL = 0) {
        this.cache = new Map();
        this.defaultTTL = defaultTTL;
    }

    set(key, value, ttl = this.defaultTTL) {
        const expiresAt = Date.now() + ttl;

        this.cache.set(key, {
            value,
            expiresAt,
        });
    }

    get(key) {
        const item = this.cache.get(key);

        if (!item) {
            return null;
        }

        if (Date.now() > item.expiresAt) {
            this.delete(key);

            return null;
        }

        return item.value;
    }

    delete(key) {
        return this.cache.delete(key);
    }
}
```

&nbsp;
&nbsp;
&nbsp;
