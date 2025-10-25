
```jsx
/**
    Дан пример React компонента.
    Исправьте все ошибки, которые видите
*/

function UserList() {
    const [users, setUsers] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    return (
        <div>
            {loading ? (
                "Загрузка..."
            ) : (
                <ul>
                    {users.map((u) => (
                        <li key={u.id}>
                            {u.name} - {u.email}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
```

---

```jsx
/** Ответ */

function UserList() {
    const [users, setUsers] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const fetchUsers = React.useCallback(() => {
        setLoading(true);
        setError(null);

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Ошибка загрузки");
                }

                return res.json();
            })
            .then((data) => setUsers(data))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    React.useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return (
        <div>
            <button onClick={fetchUsers}>Обновить</button>
            {loading && <p>Загрузка...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {!loading && !error && (
                <ul>
                    {users.map((u) => (
                        <li key={u.id}>
                            {u.name} — {u.email}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
```
