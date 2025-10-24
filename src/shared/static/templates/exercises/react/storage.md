
```jsx
/**
    Дан пример React компонента.
    Исправьте все ошибки, которые видите
*/

function TodoApp() {
    const [todos, setTodos] = React.useState([]);

    React.useEffect(() => {
        const stored = localStorage.getItem("todos");

        if (stored) {
            try {
                setTodos(JSON.parse(stored));
            } catch {
                setTodos([]);
            }
        }
    }, []);

    React.useEffect(() => {
        const handleStorage = () => {
            const stored = localStorage.getItem("todos");

            if (stored) {
                setTodos(JSON.parse(stored));
            }
        };

        window.addEventListener("storage", handleStorage);
    }, []);

    const addTodo = (text) => {
        const newTodos = [...todos, text];
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
    };

    const removeTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
    };

    return (
        <div>
            <button onClick={() => addTodo("test")}>Добавить</button>
            <ul>
                {todos.map((todo, i) => (
                    <li key={i}>
                        {todo}
                        <button onClick={() => removeTodo(i)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
```

---

```jsx
/** Ответ */

// todoStore.js
const STORAGE_KEY = "todos";

function readTodos() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);

        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
}

let listeners = [];

function notify() {
    listeners.forEach((cb) => cb());
}

window.addEventListener("storage", () => {
    notify();
});

export function subscribe(callback) {
    listeners.push(callback);

    return () => {
        listeners = listeners.filter((cb) => cb !== callback);
    };
}

export function getSnapshot() {
    return readTodos();
}

export function addTodo(text) {
    const todos = readTodos();
    const newTodos = [...todos, text];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newTodos));
    notify();
}

export function removeTodo(index) {
    const todos = readTodos();
    todos.splice(index, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    notify();
}

// TodoApp.jsx
function TodoApp() {
    const todos = React.useSyncExternalStore(subscribe, getSnapshot);
    const [input, setInput] = React.useState("");

    const handleAdd = () => {
        if (input.trim()) {
            addTodo(input.trim());
            setInput("");
        }
    };

    return (
        <div>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleAdd}>Добавить</button>
            <ul>
                {todos.map((todo, idx) => (
                    <li key={idx}>
                        {todo}
                        <button onClick={() => removeTodo(idx)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
```
