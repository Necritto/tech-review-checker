# 🔗 Что такое контекст (Context) в React?

---

## Определение

**Context** — механизм React, позволяющий **передавать данные глубоко вниз по дереву компонентов** без явной передачи через каждый уровень пропсов.  

- Создаётся вызовом `createContext(defaultValue)`.  
- Имеет объект со свойствами `Provider` и `Consumer` (или используется хук `useContext`).

---

## Основные API

### 1. `createContext(defaultValue)`

```js
import { createContext } from 'react';
export const ThemeContext = createContext('light');
```

- `defaultValue` — значение, используемое, если нет подходящего `<Provider>` выше.

### 2. `<Context.Provider value={...}>`

```jsx
<ThemeContext.Provider value={theme}>
  <App />
</ThemeContext.Provider>
```

- Оборачивает часть дерева и даёт всем потомкам доступ к `value`.
- При изменении `value` все потребители внутри провайдера перерендерятся.

### 3. `useContext(Context)`

```jsx
import { useContext } from 'react';

function Button() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Click</button>;
}
```

- Читает текущее значение контекста из ближайшего провайдера.

---

## Пример

```jsx
// contexts.js
export const AuthContext = createContext(null);

// App.jsx
function App() {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={user}>
      <Dashboard />
    </AuthContext.Provider>
  );
}

// Dashboard.jsx
function Dashboard() {
  const user = useContext(AuthContext);
  return <h1>Hello, {user?.name ?? 'Guest'}</h1>;
}
```

---

## Когда стоит и не стоит использовать

- **Используйте**, когда данные нужны **многим компонентам** на разных уровнях (тема, локализация, авторизация).
- **Не злоупотребляйте**, чтобы не усложнить переиспользование компонентов. Часто композиция или render props — более простой вариант.

---

## Итог

- Context избавляет от проп-дриллинга, предоставляя «глобальные» данные в рамках React-дерева.
- Создаётся через `createContext` → `Provider` → `useContext`/`Consumer`.
- Меняйте значение провайдера осознанно, чтобы избежать лишних ререндеров и усложнения архитектуры.
