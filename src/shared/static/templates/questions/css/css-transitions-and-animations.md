# ❓ Какие CSS-свойства используются для создания анимаций и плавных переходов?

---

## Основные свойства для плавных переходов (transitions)

- `transition-property` — указывает, какие свойства будут анимироваться.
- `transition-duration` — длительность перехода.
- `transition-timing-function` — функция тайминга (ускорение/замедление).
- `transition-delay` — задержка перед началом перехода.
- Сокращённое свойство: `transition` (например, `transition: all 0.3s ease-in-out 0s;`).

---

## Основные свойства для анимаций (animations)

- `animation-name` — имя анимации (ключевые кадры).
- `animation-duration` — длительность анимации.
- `animation-timing-function` — функция тайминга.
- `animation-delay` — задержка перед стартом.
- `animation-iteration-count` — количество повторений.
- `animation-direction` — направление анимации (например, обратное).
- `animation-fill-mode` — поведение после окончания.
- `animation-play-state` — состояние воспроизведения (pause/play).
- Сокращённое свойство: `animation` (например, `animation: slide 2s ease-in-out infinite;`).

---

## Свойства, часто анимируемые с помощью transitions и animations

- `opacity`
- `transform` (translate, rotate, scale)
- `color`, `background-color`
- `width`, `height`
- `margin`, `padding`
- `border-color`, `border-width`

---

## Итог

- Для **плавных переходов** используют `transition-*` свойства.
- Для **сложных анимаций** — `@keyframes` вместе с `animation-*` свойствами.

---
