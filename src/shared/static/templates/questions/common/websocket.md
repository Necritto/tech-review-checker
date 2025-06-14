### **Что такое WebSocket?**

**Определение:**  
WebSocket — это протокол двусторонней связи поверх TCP, обеспечивающий постоянное соединение между клиентом и сервером.

**Ключевые характеристики:**

- Полнодуплексная связь (одновременная передача в обе стороны)
- Низкая задержка (1-2 мс против 50-100 мс у HTTP)
- Эффективная передача бинарных данных
- Поддержка всеми современными браузерами

---

### **Принцип работы**

#### 1. Установка соединения (Handshake)

Клиент отправляет HTTP-запрос с заголовками:

```http
GET /chat HTTP/1.1
Host: example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
```

Сервер отвечает:

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

#### 2. Обмен данными

После handshake соединение переходит в режим WebSocket:

- Данные передаются в виде фреймов (не текстовых заголовков)
- Поддерживаются текстовые и бинарные сообщения
- Автоматическое управление потоком

#### 3. Закрытие соединения

Инициатива может исходить от любой стороны:

```javascript
socket.close(1000, "Normal closure");
```

---

### **Пример кода**

**Клиентская часть (JavaScript):**

```javascript
const socket = new WebSocket("wss://example.com/chat");

socket.onopen = () => {
    socket.send("Hello Server!");
};

socket.onmessage = (event) => {
    console.log("Received:", event.data);
};

socket.onerror = (error) => {
    console.error("Error:", error);
};
```

**Серверная часть (Node.js):**

```javascript
const WebSocket = require("ws");
const server = new WebSocket.Server({ port: 8080 });

server.on("connection", (socket) => {
    socket.on("message", (message) => {
        console.log("Received:", message);
        socket.send("Echo: " + message);
    });
});
```

---

### **Сравнение с HTTP**

| Параметр    | WebSocket            | HTTP/2               |
| ----------- | -------------------- | -------------------- |
| Соединение  | Постоянное           | Мультиплексированное |
| Задержка    | 1-2 мс               | 50+ мс               |
| Направление | Двустороннее         | Клиент → Сервер      |
| Заголовки   | Только при handshake | Для каждого запроса  |

---

### **Оптимизации производительности**

1. **Сжатие данных:**

    ```javascript
    new WebSocket("wss://example.com", {
        perMessageDeflate: true,
    });
    ```

2. **Бинарная передача:**

    ```javascript
    socket.send(new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f]));
    ```

3. **Поддержка прокси:**  
   Настройка заголовков `Sec-WebSocket-Protocol` для совместимости с корпоративными прокси.

---

### **Типичные сценарии использования**

- Чат-приложения (WhatsApp, Telegram)
- Многопользовательские игры
- Финансовые тикеры (бинанс, трейдинг)
- Совместное редактирование документов
- IoT устройства (умные дома)

---

### **Ограничения**

- Не подходит для статического контента
- Требует поддержки на стороне сервера
- Сложнее масштабируется, чем REST
- Нет встроенного механизма повторного соединения
