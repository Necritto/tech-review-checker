# ❓ Как отрендерить HTML‑код в React‑компоненте?

---

## 1. `dangerouslySetInnerHTML`

React не позволяет напрямую вставлять строку с HTML, но предоставляет API:

```jsx
function HtmlRenderer({ html }) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
```

* Обязательное свойство — это объект вида `{ __html: yourHtmlString }`.
* Имя метода подчёркивает **риск XSS** при вставке непроверенного HTML.

---

## 2. Безопасность и очистка

* **Никогда** не вставляйте необработанный пользовательский ввод.
* Применяйте **сервисную** или **клиентскую** санитизацию (например, DOMPurify):

```js
import DOMPurify from 'dompurify';

function SafeHtml({ html }) {
  const clean = DOMPurify.sanitize(html);
  return <div dangerouslySetInnerHTML={{ __html: clean }} />;
}
```

---

## 3. Альтернативы: парсинг в JSX

Иногда удобнее конвертировать HTML‑строку в React‑элементы:

```bash
npm install html-react-parser
```

```jsx
import parse from 'html-react-parser';

function ParserHtml({ html }) {
  return <div>{parse(html)}</div>;
}
```

* Позволяет фильтровать узлы, добавлять пропсы и компоненты.
* Избегает низкоуровневого `dangerouslySetInnerHTML`.

---

## 4. Итог

* Для **быстрой** вставки HTML — используйте `dangerouslySetInnerHTML`.
* Для **безопасности** — всегда **санитизируйте** входящие строки.
* Для **гибкости** — конвертируйте HTML в JSX через парсер (например, `html-react-parser`).
* Не забывайте обрабатывать обновления: при изменении `html` React сам перерендерит контейнер и вставит новый контент.

---
