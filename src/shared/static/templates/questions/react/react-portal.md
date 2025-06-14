# ❓ Что такое портал (Portal) в React?

---

## Определение

**Портал** — это способ **рендерить дочерний элемент** React-компонента **в другом месте DOM-дерева**, вне иерархии родительского компонента.

React‑портал создаётся функцией:

```js
import { createPortal } from 'react';

return createPortal(
  <ModalContent />,
  document.getElementById('modal-root')
);
```

---

## Почему это важно

* Позволяет обходить **ограничения CSS**, такие как `overflow: hidden` у родителя.
* Удобно для **модальных окон**, тултипов, выпадающих меню и других компонентов, которым нужно выходить за рамки родителя.
* Сохраняет **контекст React** (state, context, события) несмотря на то, что элемент в другом месте DOM.

---

## Как это работает

1. React рендерит виртуальный узел в **другом корне** DOM.
2. **События** (например, клики) **всплывают** через React-иерархию, а не через DOM-родителя.
3. Портал **не ломает** React‑context: дочерние компоненты получают контекст от места, где были объявлены.

---

## Пример использования

```jsx
// index.html:
// <div id="root"></div>
// <div id="modal-root"></div>

function Modal({ children }) {
  return createPortal(
    <div className="modal">{children}</div>,
    document.getElementById('modal-root')
  );
}

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      {open && (
        <Modal>
          <h2>Modal Title</h2>
          <button onClick={() => setOpen(false)}>Close</button>
        </Modal>
      )}
    </>
  );
}
```

---

## Итог

* **Портал** позволяет рендерить React-дерево вне текущего DOM-узла.
* Используется для модалей, тултипов, меню и любых элементов, которым нужен собственный контейнер.
* Сохраняет React-контекст и корректное всплытие событий, несмотря на удалённость в DOM.

---
