# ⚙️ Как работают `startTransition` и `useDeferredValue` в контексте cooperative scheduling

---

## 🔹 `startTransition`

`startTransition` — это API React для маркировки обновлений состояния как **низкоприоритетных** (transition updates).

```tsx
import { startTransition } from 'react';

startTransition(() => {
  setState(newValue);
});
```

### Что происходит

* Обновление внутри `startTransition` получает **низкий приоритет**.
* React планирует выполнение этого обновления как **фоновую задачу**.
* Приоритетнее идут пользовательские взаимодействия (высокий приоритет).
* Это позволяет интерфейсу оставаться отзывчивым и не блокировать ввод.

---

## 🔹 `useDeferredValue`

Хук `useDeferredValue` помогает **отложить** обновление значения, если оно слишком быстро меняется и вызывает дорогие ререндеры.

```tsx
const deferredValue = useDeferredValue(value);
```

### Механизм

* Значение `deferredValue` обновляется с задержкой по сравнению с `value`.
* Позволяет React выполнять обновления с более низким приоритетом.
* Помогает снизить нагрузку на рендеринг при быстрых изменениях, например, в поисковых строках.

---

## 🧩 В контексте cooperative scheduling

Оба механизма позволяют React:

* Делать обновления **приоритетными** или **фоновыми**
* Разбивать тяжелые задачи на части
* Не блокировать основной поток и ввод пользователя

`startTransition` задаёт приоритет на уровне обновления состояния, а `useDeferredValue` — помогает "плавно" обновлять отдельные значения внутри компонента.

---

## 📌 Кратко

| Механизм           | Что делает                                 | Когда использовать                         |
| ------------------ | ------------------------------------------ | ------------------------------------------ |
| `startTransition`  | Маркирует обновления как низкоприоритетные | При больших, не срочных изменениях UI      |
| `useDeferredValue` | Отодвигает обновление конкретного значения | Для плавного рендеринга при быстрых вводах |

---

## Пример использования

```tsx
function Search({ query }) {
  const deferredQuery = useDeferredValue(query);

  const results = useMemo(() => {
    return searchItems(deferredQuery); // дорогая функция поиска
  }, [deferredQuery]);

  return <ResultsList items={results} />;
}

// При вводе пользователя
startTransition(() => {
  setQuery(newInput);
});
```

---

## Итог

* `startTransition` и `useDeferredValue` — инструменты React для работы с приоритетами обновлений
* Они используют возможности Fiber и cooperative scheduling для плавности UI
* Позволяют улучшить отзывчивость, не блокируя интерфейс тяжелыми вычислениями

---
