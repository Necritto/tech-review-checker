# ❓ Какой тег использовать для создания кнопки в HTML?

---

## 📌 Правильный тег для кнопки — `<button>`

- Тег `<button>` предназначен для создания интерактивных кнопок.
- Поддерживает разные типы кнопок через атрибут `type`:
  - `type="button"` — обычная кнопка, не отправляет форму.
  - `type="submit"` — отправляет форму.
  - `type="reset"` — сбрасывает форму.

---

## Почему не использовать другие теги?

- Использовать `<div>`, `<span>` или другие блочные/строчные элементы для кнопок **не рекомендуется**:
  - Они не имеют встроенной интерактивности.
  - Требуется дополнительный JavaScript для обработки кликов.
  - Нет автоматической поддержки клавиатурной навигации и доступности.

---

## Доступность

- `<button>` автоматически поддерживает фокус и обработку клавиш Enter/Space.
- Можно добавлять атрибуты ARIA для дополнительной доступности.

---

## Пример кнопки

```html
<button type="button">Нажми меня</button>
```

---
