&nbsp;
&nbsp;
&nbsp;

```jsx
/**
    Дан пример React компонента.
    Исправьте все ошибки, которые видите
*/

function Timer() {
    const [seconds, setSeconds] = React.useState(0);
    const [running, setRunning] = React.useState(true);

    useEffect(() => {
        if (!running) {
            return;
        }

        const interval = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [running]);

    return (
        <div>
            <p>{seconds} секунд</p>
            <button onClick={() => setRunning((r) => !r)}>
                {running ? "Пауза" : "Продолжить"}
            </button>
        </div>
    );
}
```

&nbsp;
&nbsp;
&nbsp;

---

&nbsp;
&nbsp;
&nbsp;

```jsx
/** Ответ */

function Timer() {
    const [seconds, setSeconds] = React.useState(0);
    const [running, setRunning] = React.useState(true);
    const intervalRef = React.useRef(null);

    React.useEffect(() => {
        if (running && intervalRef.current === null) {
            intervalRef.current = setInterval(() => {
                setSeconds((prev) => prev + 1);
            }, 1000);
        }

        if (!running && intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        return () => {
            if (intervalRef.current !== null) {
                clearInterval(intervalRef.current);
            }
        };
    }, [running]);

    return (
        <div>
            <p>{seconds} секунд</p>
            <button onClick={() => setRunning((r) => !r)}>
                {running ? "Пауза" : "Продолжить"}
            </button>
        </div>
    );
}
```

&nbsp;
&nbsp;
&nbsp;
