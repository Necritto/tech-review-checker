
```js
/**
    Представлен пример webpack.config.js, который используется в React-проекте.
    Приложение должно поддерживать JSX, модули стилей и работать в development-режиме с hot reload.

    1. Найди все ошибки в конфигурации.
    2. Какие последствия эти ошибки могут вызвать при разработке?
    3. Как должна выглядеть корректная версия?
    4. Объясни, зачем нужен resolve.extensions и как он влияет на импорт.
    5. Объясни, почему historyApiFallback: true нужен в React SPA.
*/

const path = require("path");

module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".js"],
    },
    devServer: {
        static: "./dist",
        hot: true,
        historyApiFallback: true,
    },
};
```

---

| №   | Ошибка                                                           | Почему это критично                                                        |
| --- | ---------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 1   | `test: /\.jsx$/` — не включает `.js`                             | Компоненты могут быть с расширением `.js`, и не будут обрабатываться Babel |
| 2   | `resolve.extensions: ['.js']` — нет `.jsx`                       | Импорты без расширения `.jsx` будут падать                                 |
| 3   | Нет `ReactRefreshWebpackPlugin` и соответствующего Babel-плагина | `hot: true` не даст полноценный hot reload React-компонентов               |
| 4   | Нет `html-webpack-plugin` → отсутствие index.html                | Невозможно запустить SPA без ручной html-обвязки                           |
| 5   | Нет source maps (`devtool`)                                      | Невозможно удобно дебажить в dev-режиме                                    |
