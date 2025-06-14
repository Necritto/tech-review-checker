# **Определение CSP**

Content Security Policy (CSP) — стандарт безопасности, позволяющий контролировать источники загрузки ресурсов на веб-странице через HTTP-заголовки или `<meta>`-теги.

## **Основная цель:**

Предотвращение XSS, clickjacking и других атак путём белого списка доверенных источников.

---

## **Ключевые директивы**

| Директива     | Пример значения                  | Описание                          |
| ------------- | -------------------------------- | --------------------------------- |
| `default-src` | `'self'`                         | Источники по умолчанию            |
| `script-src`  | `'self' https://trusted.cdn.com` | Разрешение скриптов               |
| `style-src`   | `'self' 'unsafe-inline'`         | Стили и CSS-инлайны               |
| `img-src`     | `*`                              | Источники изображений             |
| `connect-src` | `'self' api.example.com`         | API, WebSockets, EventSource      |
| `frame-src`   | `https://youtube.com`            | Встраиваемые фреймы               |
| `report-uri`  | `/csp-report`                    | Эндпоинт для отчетов о нарушениях |

---

## **Пример политики**

```http
Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'unsafe-eval' https://cdn.jsdelivr.net;
  style-src 'self' 'unsafe-inline';
  img-src * data:;
  report-uri /csp-violation-report;
```

---

## **Режимы работы**

1. **Блокирующий (enforce):**

    ```http
    Content-Security-Policy: default-src 'self'
    ```

2. **Отчётный (report-only):**

    ```http
    Content-Security-Policy-Report-Only: default-src 'self'; report-uri /report
    ```

---

## **Особенности**

- **`'nonce-<value>'`:** Разрешение инлайновых скриптов/стилей с одноразовым ключом:

    ```html
    <script nonce="abc123">
        alert("Allowed!");
    </script>
    ```

- **`'hash-<value>'`:** Разрешение по хешу контента:

    ```http
    script-src 'sha256-abc123...'
    ```

---

## **Ограничения**

- Не защищает от CSRF
- Сложность настройки для legacy-кода
- Ложные срабатывания на динамических ресурсах

---

## **Инструменты**

- **Генераторы CSP:** [Report URI](https://report-uri.com/)
- **Анализ:** Chrome DevTools → Security Tab
