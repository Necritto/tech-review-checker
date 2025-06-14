### **Сравнение директив предзагрузки**

#### **1. `<link rel="preload">`**

**Назначение:**  
Жёсткая предзагрузка критических ресурсов с высоким приоритетом.

**Механика:**

- Браузер _обязан_ загрузить ресурс
- Требует указания `as` (script, style, font и т.д.)
- Валидация типа ресурса (MIME-совместимость)

**Оптимально для:**

- Основных шрифтов
- Критических CSS/JS
- Изображений выше сгиба

```html
<link rel="preload" href="critical.js" as="script" />
```

---

#### **2. `<link rel="prefetch">`**

**Назначение:**  
Фоновая загрузка ресурсов для будущей навигации.

**Механика:**

- Низкий приоритет (IDLE)
- Кешируется в HTTP Cache
- Не блокирует основной поток

**Оптимально для:**

- Страниц следующего экрана
- Динамических импортов
- Ресурсов для A/B-тестов

```html
<link rel="prefetch" href="next-page.html" as="document" />
```

---

#### **3. `<link rel="preconnect">`**

**Назначение:**  
Установка раннего соединения с другим доменом.

**Механика:**

- DNS Lookup + TCP Handshake + TLS Negotiation
- Не загружает контент
- Экономит 100-500ms для кросс-доменных запросов

**Оптимально для:**

- CDN-ресурсов
- API-эндпоинтов
- Google Fonts/Analytics

```html
<link rel="preconnect" href="https://api.example.com" />
```

---

#### **4. `<link rel="prerender">`**

**Назначение:**  
Полный рендеринг страницы в фоне.

**Механика:**

- Загрузка всех ресурсов страницы
- Выполнение JavaScript
- Визуально скрытый рендеринг

**Оптимально для:**

- Гарантированного перехода (например, "Далее")
- Страниц с высокой конверсией

```html
<link rel="prerender" href="checkout.html" />
```

---

### **Сравнительная таблица**

| Характеристика  | preload       | prefetch      | preconnect     | prerender    |
| --------------- | ------------- | ------------- | -------------- | ------------ |
| **Приоритет**   | Highest       | Lowest        | Medium         | Highest      |
| **Сеть**        | Full download | Full download | Handshake only | Full render  |
| **Кеш**         | HTTP Cache    | HTTP Cache    | -              | Memory Cache |
| **Исполнение**  | -             | -             | -              | JS/DOM/CSS   |
| **Время жизни** | До `onload`   | 5 минут       | 10 секунд      | До перехода  |

---

### **Критические нюансы**

1. **`preload` для шрифтов:**  
   Требует `crossorigin` даже для своих доменов:

    ```html
    <link rel="preload" href="font.woff2" as="font" crossorigin />
    ```

2. **Порядок объявления:**

    ```html
    <!-- Сначала preconnect, потом preload -->
    <link rel="preconnect" href="https://cdn.example.com" />
    <link rel="preload" href="https://cdn.example.com/lib.js" as="script" />
    ```

3. **Ограничения `prerender`:**
    - Отключен в мобильных браузерах
    - Максимум 5 страниц в Chrome
