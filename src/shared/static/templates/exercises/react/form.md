
```jsx
/**
    Дан пример React компонента.
    Необходимо проанализировать компонент на наличие ошибок
*/

function TicketForm() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [type, setType] = React.useState("regular");
    const [privileges, setPrivileges] = React.useState([]);
    const [submittedData, setSubmittedData] = React.useState(null);
    const [error, setError] = React.useState("");

    const availablePrivileges = [
        "Backstage",
        "Free Drinks",
        "Meet & Greet",
        "Merch",
    ];

    const handleCheckboxChange = (e) => {
        const value = e.target.value;

        if (privileges.includes(value)) {
            setPrivileges(privileges.filter((p) => p !== value));
        } else {
            setPrivileges([...privileges, value]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.length < 2 || !email.includes("@")) {
            setError(
                "Имя должно быть не менее 2 символов, Email должен быть валидным"
            );

            return;
        }

        if (type === "vip" && privileges.length > 3) {
            setError("Нельзя выбрать больше 3 привилегий");

            return;
        }

        setError("");
        setSubmittedData({
            name,
            email,
            ticketType: type === "vip" ? "VIP" : "Regular",
            privileges: type === "vip" ? privileges : [],
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Имя:</label>
                <input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label>Тип билета:</label>
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="regular">Обычный</option>
                    <option value="vip">VIP</option>
                </select>
            </div>

            {type === "vip" && (
                <div>
                    <p>Выберите привилегии:</p>
                    {availablePrivileges.map((p) => (
                        <label key={p}>
                            <input
                                type="checkbox"
                                value={p}
                                checked={privileges.includes(p)}
                                onChange={handleCheckboxChange}
                            />
                            {p}
                        </label>
                    ))}
                </div>
            )}

            {error && <p style={{ color: "red" }}>{error}</p>}

            <button type="submit">Отправить</button>

            {submittedData && (
                <pre>{JSON.stringify(submittedData, null, 2)}</pre>
            )}
        </form>
    );
}
```

---

<!-- Проблемы в форме выше -->

| Проблема                                       | Пояснение                                                             |
| ---------------------------------------------- | --------------------------------------------------------------------- |
| Вся форма в одном компоненте                   | Плохо масштабируется. Нет отделения логики/рендеринга.                |
| Один `error` на всю форму                      | Невозможно показать ошибки по полям. Нет UX обратной связи при вводе. |
| Нет валидации в реальном времени               | Ошибки только на сабмите. UX страдает.                                |
| Невалидный email детектируется по `@`          | Это слишком наивная проверка.                                         |
| Нет контроля над макс. выбором привилегий в UI | Пользователь может выбрать больше 3 чекбоксов до сабмита.             |
| Ререндер всей формы при любом вводе            | Нет мемоизации, всё — контролируемые поля.                            |
| Нет тестируемости                              | Невозможно протестировать бизнес-логику отдельно от UI.               |
| Нет проверки на пустой email / whitespace      | Уязвимо к " " или пустым строкам.                                     |
