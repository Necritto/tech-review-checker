&nbsp;
&nbsp;
&nbsp;

```js
/**
    Дан следующий JavaScript-код, который имитирует загрузку данных из трёх источников с разной задержкой.
    Объясните, почему текущая реализация функции loadAllData() не обеспечивает последовательного выполнения запросов и как это проявляется в консоли.
    Реализуйте корректное решение, чтобы гарантировать, что data1 будет полностью загружена до начала загрузки data2, а data2 до начала data3.

    Задача со звёздочкой: реализуйте задачу хотя бы 2мя способами
*/

function fetchData(dataName, delay) {
    return new Promise((resolve) => {
        console.log(`Начинаю загрузку ${dataName}...`);
        setTimeout(() => {
            console.log(`Завершил загрузку ${dataName}.`);
            resolve(`${dataName}_loaded`);
        }, delay);
    });
}

async function loadAllData(delays) {
    const results = await Promise.all(
        delays.map((delay, index) => fetchData(`Data ${index + 1}}$`, delay))
    );
    console.log("Все данные загружены:", results);
}

console.log("Запуск процесса загрузки...");
loadAllData([500, 300, 700]);
console.log("Процесс загрузки инициирован.");
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

// С использованием цикла for...of
async function loadAllData(delays) {
    const results = [];

    for (let i = 0; i < delays.length; i++) {
        const result = await fetchData(`Data ${i + 1}`, delays[i]);
        results.push(result);
    }

    console.log("Все данные загружены:", results);
    return results;
}

// С использованием reduce
async function loadAllData(delays) {
    const results = await delays.reduce(async (prev, delay, index) => {
        const acc = await prev;
        const result = await fetchData(`Data ${index + 1}`, delay);
        return [...acc, result];
    }, Promise.resolve([]));

    console.log("Все данные загружены:", results);
    return results;
}

// Рекурсивный подход
async function loadAllData(delays, index = 0, results = []) {
    if (index >= delays.length) {
        console.log("Все данные загружены:", results);
        return results;
    }

    const result = await fetchData(`Data ${index + 1}`, delays[index]);
    results.push(result);

    return await loadAllData(delays, index + 1, results);
}
```

&nbsp;
&nbsp;
&nbsp;
