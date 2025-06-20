# **Теоретические основы memory leaks в Long-Polling**

## **1. Природа утечек памяти**

- **Неконтролируемое накопление запросов**:  
    Каждое новое подключение создаёт объекты Promise, обработчики и контексты выполнения, которые сохраняются до завершения запроса.

- **Замыкания и ссылочная целостность**:  
    Обработчики событий сохраняют лексическое окружение, включая ссылки на DOM-элементы и внешние переменные.

- **Таймеры как источники утечек**:  
    Неочищенные `setTimeout`/`setInterval` поддерживают ссылки на функции-колбэки.

## **2. Механизмы утечек**

**А. Цепочки ссылок**

- Незавершённые асинхронные операции создают граф зависимостей, недоступный для GC.

**Б. Накопление контекста**

- Каждый запрос сохраняет:
  - Параметры вызова
  - Локальные переменные
  - Ссылки на внешние объекты

**В. Проблемы Event Loop**

- Микротаски (then/catch/finally) накапливаются при частых переподключениях.

## **3. Теория предотвращения**

**Принципы:**

- **Слабая связанность**: Использование WeakMap/WeakSet для хранения ссылок.
- **Чистые функции**: Минимизация побочных эффектов в обработчиках.
- **Явное завершение**: Паттерн AbortController для прерывания запросов.

**Модель памяти:**

```
[Request] → [Handler] → [Closure]
   ↑            ↑            ↑
[Event Loop] ← [Promise] ← [Async Stack]
```

## **4. Влияние окружения**

**Браузер:**

- Максимальное количество параллельных подключений (6-8 на домен).
- Автоматическая очистка неактивных вкладок.

**Сервер:**

- Таймауты соединений (Keep-Alive).
- Ограничение максимального времени выполнения запроса.

---

## **Классификация утечек**

| Тип утечки      | Источник                 | Время обнаружения          |
| --------------- | ------------------------ | -------------------------- |
| **Ресурсная**   | Незавершённые запросы    | При переподключении        |
| **Контекстная** | Замыкания                | Через 5-10 итераций        |
| **Циклическая** | Взаимные ссылки объектов | Только через профилировщик |

---

## **Теоретические подходы к решению**

1. **Реактивное программирование**

    - Отказ от ручного управления подписками
    - Использование Observable-паттернов

2. **Изоляция контекста**

    - Sandbox-режим выполнения обработчиков
    - Ограничение времени жизни объектов

3. **Статический анализ**
    - Выявление потенциальных циклических ссылок
    - Контроль сложности замыканий

---

## **Связь с архитектурными паттернами**

- **CQRS**: Разделение потоков чтения/записи уменьшает нагрузку.
- **Event Sourcing**: Фиксация состояний вместо постоянных запросов.
- **Backpressure**: Ограничение частоты запросов на уровне API.
