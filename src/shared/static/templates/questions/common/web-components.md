### **Определение Веб-компонентов**

Веб-компоненты — набор стандартов W3C для создания **переиспользуемых инкапсулированных HTML-элементов** без фреймворков.

#### **Ключевые технологии:**

1. **Custom Elements**
2. **Shadow DOM**
3. **HTML Templates**
4. **ES Modules** (для организации кода)

---

### **1. Custom Elements**

Позволяют создавать свои HTML-теги с реактивным поведением:

```javascript
class MyButton extends HTMLElement {
    constructor() {
        super();
        this.addEventListener("click", this.handleClick);
    }

    handleClick = () => {
        console.log("Custom button clicked!");
    };
}

// Регистрация элемента
customElements.define("my-button", MyButton);
```

**Использование:**

```html
<my-button>Click me</my-button>
```

---

### **2. Shadow DOM**

Создает изолированное DOM-поддерево для компонента:

```javascript
class MyComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = `
      <style>
        button { color: red; } /* Стили не "протекают" наружу */
      </style>
      <button><slot></slot></button>
    `;
    }
}
```

**Особенности:**

- Изоляция CSS/JavaScript
- Доступ через `element.shadowRoot`

---

### **3. HTML Templates**

Шаблоны для отложенного рендеринга:

```html
<template id="user-card">
    <div class="card">
        <h2><slot name="username"></slot></h2>
        <p><slot name="email"></slot></p>
    </div>
</template>
```

**Использование:**

```javascript
const template = document.getElementById("user-card");
const clone = template.content.cloneNode(true);
```

---

### **Преимущества**

- **Инкапсуляция:** Стили и логика не конфликтуют с основной страницей
- **Переносимость:** Работают в любом фреймворке (React, Vue и т.д.)
- **Стандарт:** Не требуют сборщиков или транспиляции

---

### **Ограничения**

- **SEO:** Shadow DOM изначально не индексируется (решается SSR)
- **Стилизация:** Глобальные темы требуют CSS-переменных или `::part()`
- **React:** Плохая интеграция с Synthetic Events

---

### **Пример комплексного компонента**

**1. Определение:**

```javascript
class RatingStars extends HTMLElement {
    static get observedAttributes() {
        return ["rating"];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (name === "rating") this.updateStars();
    }

    updateStars() {
        // Логика обновления UI
    }
}
```

**2. Использование:**

```html
<rating-stars rating="4"></rating-stars>
```

---

### **Сравнение с фреймворками**

| Критерий         | Веб-компоненты    | React/Vue            |
| ---------------- | ----------------- | -------------------- |
| **Инкапсуляция** | Shadow DOM        | CSS-in-JS/Scoped CSS |
| **Рендеринг**    | Браузерный        | Virtual DOM          |
| **Размер**       | ~0KB зависимостей | +Runtime             |
