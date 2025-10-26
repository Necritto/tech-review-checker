
```js
/**
    Представлен пример webpack.config.js, который используется в React-проекте с микрофронтами.

    1. Найди все ошибки или слабые места в конфигурации обоих проектов.
    2. Что произойдёт при запуске host-app? Какого поведения стоит ожидать?
    3. Почему это может сломаться в проде?
    4. Что обязательно нужно учитывать при шаринге зависимостей вроде react?
*/

// host-app/webpack.config.js
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.jsx",
    mode: "development",
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "host",
            remotes: {
                remoteApp: "remoteApp@http://localhost:3001/remoteEntry.js",
            },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx"],
    },
};

// remote-app/webpack.config.js
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.jsx",
    mode: "development",
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "remoteApp",
            filename: "remoteEntry.js",
            exposes: {
                "./Widget": "./src/components/Widget",
            },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx"],
    },
};
```

---

| №   | Ошибка                                                          | Где     | Почему это проблема                                                                     |
| --- | --------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------- |
| 1   | Не указаны *shared* зависимости                                 | В обоих | Будут дублироваться разные версии React, может привести к багам и поломке контекста     |
| 2   | В обоих *publicPath: '/'*                                       | В обоих | Неверно в удалённом модуле — *publicPath* должен быть абсолютным URL в проде или *auto* |
| 3   | У *remoteApp* нет *library.type: 'var'*                         | remote  | Могут быть проблемы, если Webpack не поймёт глобальное имя                              |
| 4   | Нет *devServer* с *cors*, *headers* и *port*                    | remote  | Не сможет корректно загрузиться на хосте                                                |
| 5   | *HtmlWebpackPlugin* в remote — не нужен                         | remote  | Remote не рендерит HTML, это headless-бандл                                             |
| 6   | Нет fallback или error boundary при динамическом импорте модуля | host    | Плохой UX при ошибках загрузки remote-модуля                                            |
