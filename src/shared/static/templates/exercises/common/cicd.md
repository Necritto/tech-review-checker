&nbsp;
&nbsp;
&nbsp;

```yaml
stages:
    - install
    - lint
    - test_build

cache:
    paths:
        - node_modules/

install:
    stage: install
    image: node:latest
    script:
        - npm install
    only:
        - master

lint:
    stage: lint
    image: node:latest
    script:
        - npm run lint

test_build:
    stage: test_build
    image: node:latest
    script:
        - npm run test
        - npm run build
```

&nbsp;
&nbsp;
&nbsp;

---

&nbsp;
&nbsp;
&nbsp;

| №   | Ошибка/проблема                                                     | Почему это плохо                                                                                                                                                          |
| --- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `cache` без ключа (`key`)                                           | Без ключа кэш может конфликтовать между ветками и джобами, приводя к неожиданным результатам                                                                              |
| 2   | Использован образ `node:latest`                                     | Использование `latest` — плохая практика: возможны неожиданные обновления и несовместимости, лучше фиксировать версию (`node:22`)                                         |
| 3   | В job `install` стоит `only: master`, а остальные — без ограничений | Неочевидное поведение: зависимости установятся только при пуше в `master`, в других ветках не будет `node_modules`, что приведёт к ошибкам на этапе `lint` и `test_build` |
| 4   | Отсутствует переменная окружения `NODE_ENV`                         | Без неё сборка и тесты могут работать в неправильном режиме (dev вместо prod)                                                                                             |
| 5   | Нет `artifacts` между стадиями                                      | `node_modules` не сохраняются как артефакты — при запуске на разных раннерах придется каждый раз заново ставить зависимости, а кеш может не сработать                     |
| 6   | Отсутствует ограничение на ветки для стадий `lint` и `test_build`   | На ветках feature тоже запускается полный pipeline, что может быть излишним и увеличивает время CI                                                                        |

&nbsp;
&nbsp;
&nbsp;

```yaml
stages:
    - install
    - lint
    - test_build

variables:
    NODE_ENV: "development"

cache:
    key: ${CI_COMMIT_REF_SLUG}
    paths:
        - node_modules/

install:
    stage: install
    image: node:22
    script:
        - npm ci

lint:
    stage: lint
    image: node:22
    script:
        - npm run lint
    dependencies:
        - install

test_build:
    stage: test_build
    image: node:22
    variables:
        NODE_ENV: "production"
    script:
        - npm run test
        - npm run build
    dependencies:
        - install
    rules:
        - if: '$CI_COMMIT_BRANCH == "master"'
```

&nbsp;
&nbsp;
&nbsp;
