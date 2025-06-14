# ❓ Альтернативы контейнерным компонентам в современном React

---

## 1. Higher‑Order Components (HOC)

- Функция, принимающая компонент и возвращающая **новый компонент** с добавленной логикой.

```jsx
function withUserData(WrappedComponent) {
  return function WithUserData(props) {
    const [user, setUser] = useState(null);

    useEffect(() => {
      fetch('/api/user')
        .then(r => r.json())
        .then(setUser);
    }, []);

    return <WrappedComponent {...props} user={user} />;
  };
}

// Использование
const UserProfile = ({ user }) => <div>{user?.name}</div>;
export default withUserData(UserProfile);
```

### Плюсы HOC

- Чистая инкапсуляция логики.
- Переиспользуемость без изменения исходных компонентов.

### Минусы HOC

- Множественные вложения HOC → «HOC hell».
- Потеря имени компонента в DevTools (надо `hoist-non-react-statics`).

---

## 2. Render Props

- Компонент, который **принимает функцию‑рендер** через проп `children` или специальный проп, и вызывает её, передавая данные.

```jsx
function UserData({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/user').then(r => r.json()).then(setUser);
  }, []);

  return children(user);
}

// Использование
<UserData>
  {user => <div>{user?.name}</div>}
</UserData>
```

### Плюсы Render Props

- Гибкость: можно передать любую JSX‑логику.
- Явное управление, без лишних обёрток.

### Минусы Render Props

- Возможен «prop‑drilling» функции между уровнями.
- Синтаксис может выглядеть громоздко при сложных деревьях.

---

## 3. Custom Hooks

- Функции `use*`, которые инкапсулируют **повторно используемую логику** и возвращают данные/методы.

```jsx
function useUserData() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/user').then(r => r.json()).then(setUser);
  }, []);

  return user;
}

// Использование
function UserProfile() {
  const user = useUserData();
  return <div>{user?.name}</div>;
}
```

### Плюсы Custom Hooks

- Прозрачность: никаких обёрток вокруг JSX.
- Лёгкая композиция нескольких хуков.
- Полная поддержка TypeScript generics.

### Минусы Custom Hooks

- Только для функциональных компонентов.
- Логика вынесена, но запросы и эффекты всё равно в компоненте.

---

## 4. Сравнение

| Паттерн      | JSX‑обёртка  | Переиспользуемость логики | Читаемость               | Типизация            |
| ------------ | ------------ | ------------------------- | ------------------------ | -------------------- |
| HOC          | обёртка      | высокая                   | может усложнять          | через generics       |
| Render Props | функция‑проп | гибкая                    | вложенные функции        | явно через параметры |
| Custom Hooks | без обёрток  | универсальная             | компактно и декларативно | лучшая поддержка     |

---

## Итог

- **Custom Hooks** — наиболее «реактивный» и компактный способ вынести логику в функциональных компонентах.
- **Render Props** — хороший компромисс, когда нужен гибкий рендер‑контроль.
- **HOC** — подойдёт для обёртки компонентов старым кодом или библиотеками, но в новых проектах часто заменяются hooks.
