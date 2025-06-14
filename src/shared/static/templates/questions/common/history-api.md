# **Что такое History API?**

**Определение:**  
Набор методов браузера для управления историей навигации и URL без перезагрузки страницы.

**Ключевые методы:**

```javascript
history.pushState(state, title, url); // Добавляет запись в историю
history.replaceState(state, title, url); // Заменяет текущую запись
history.go(n); // Переход на n шагов вперёд/назад
history.back(); // Эквивалент history.go(-1)
```

---

## **Как это работает**

1. **Изменение URL без перезагрузки:**

    ```javascript
    // URL изменится на /new-page, но страница не перезагрузится
    history.pushState({ page: 1 }, "Title", "/new-page");
    ```

2. **Хранение состояния:**

    ```javascript
    // Сохраняем данные для текущего состояния
    history.replaceState({formData: {...}}, "", "");
    ```

3. **Обработка навигации:**

    ```javascript
    window.onpopstate = (event) => {
        console.log("State:", event.state); // Доступ к сохранённым данным
    };
    ```

---

## **Пример SPA-навигации**

```javascript
// Навигация между разделами
document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const page = e.target.dataset.page;
        history.pushState({ page }, `Page ${page}`, `/${page}`);
        loadContent(page); // AJAX-загрузка контента
    });
});

// Обработка кнопки "Назад"
window.onpopstate = (e) => {
    loadContent(e.state?.page || "home");
};
```

---

## **Особенности**

- **State-объект**: До 640кб данных (сериализуется в JSON)
- **Безопасность**: Только same-origin URL
- **События**: Срабатывает только для `pushState/replaceState`, но не при прямом изменении URL

---

## **Проблемы и решения**

**1. Потеря state при перезагрузке:**  
 Решение: Сохранять критичные данные в `sessionStorage`

**2. Мусор в истории:**

```javascript
// Оптимально для модальных окон:
modal.open(() => history.pushState(...));
modal.close(() => history.back());
```

**3. SSR-совместимость:**

```javascript
if (typeof window !== "undefined") {
    // Код с History API только на клиенте
}
```

---

## **Сравнение с Hash Routing**

| Критерий            | History API            | Hash (#)            |
| ------------------- | ---------------------- | ------------------- |
| Читаемость URL      | /real/path             | /#/fake-path        |
| SEO                 | Полная поддержка       | Требует доработок   |
| Серверная настройка | Необходим rewrite-rule | Работает из коробки |

---

## **Оптимизации**

1. **Предзагрузка:**

    ```html
    <link rel="prefetch" href="/next-page" as="document" />
    ```

2. **Анимации перехода:**

    ```css
    .page-transition {
        transition: opacity 0.3s;
    }
    ```

3. **Валидация state:**

    ```javascript
    try {
        JSON.parse(JSON.stringify(state));
    } catch {
        console.error("Недопустимый state");
    }
    ```
