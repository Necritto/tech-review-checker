# **Определение CORS**

Cross-Origin Resource Sharing (CORS) — механизм безопасности браузеров, разрешающий **кросс-доменные HTTP-запросы** при явном согласии сервера.

## **Основная задача:**

Контроль доступа к ресурсам между разными источниками (origin) с соблюдением политики Same-Origin Policy (SOP).

---

## **Ключевые компоненты**

### **1. Origin**

Определяется комбинацией:

- Протокол (`http`/`https`)
- Домен (`example.com`)
- Порт (`:8080`)

**Примеры разных origin:**

- `https://site.com` ≠ `http://site.com` (разный протокол)
- `https://api.site.com` ≠ `https://site.com` (разный поддомен)

### **2. Типы запросов**

- **Простые (Simple):**  
    Методы: `GET`, `POST`, `HEAD`  
    Заголовки: `Accept`, `Content-Type` (только `text/plain`, `multipart/form-data`, `application/x-www-form-urlencoded`)

- **Предварительные (Preflight):**  
    Триггерятся для «непростых» запросов (`PUT`, `DELETE`, кастомные заголовки).  
    Отправляют `OPTIONS`-запрос перед основным.

---

## **Как работает CORS**

### **1. Заголовки сервера**

```http
Access-Control-Allow-Origin: https://client.com
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Allow-Credentials: true  // Для кук и авторизации
Access-Control-Max-Age: 86400  // Кеширование preflight (в секундах)
```

### **2. Пример Preflight**

**Запрос:**

```http
OPTIONS /api/data HTTP/1.1
Origin: https://client.com
Access-Control-Request-Method: DELETE
Access-Control-Request-Headers: X-Custom-Header
```

**Ответ сервера:**

```http
HTTP/1.1 204 No Content
Access-Control-Allow-Origin: https://client.com
Access-Control-Allow-Methods: GET, POST, DELETE
Access-Control-Allow-Headers: X-Custom-Header
```

### **3. Ошибки CORS**

- `No 'Access-Control-Allow-Origin' header` — сервер не разрешил origin
- `Response to preflight doesn't pass check` — несоответствие методов/заголовков

---

## **Способы обхода (когда CORS нельзя настроить)**

1. **Прокси-сервер:**

    ```nginx
    location /api/ {
      proxy_pass https://target-server.com/;
    }
    ```

2. **JSONP (устаревший):**

    ```html
    <script src="https://api.com/data?callback=handleData"></script>
    ```

---

## **Сравнение с другими технологиями**

| Технология | Назначение                     | Браузерная поддержка |
| ---------- | ------------------------------ | -------------------- |
| **CORS**   | Контролируемый доступ к API    | Все современные      |
| **CSP**    | Защита от XSS                  | Все современные      |
| **CORB**   | Блокировка вредоносных ответов | Chrome/Firefox       |
