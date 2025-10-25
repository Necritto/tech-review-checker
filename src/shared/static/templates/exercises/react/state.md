
```jsx
/**
    Дан пример React компонента.
    Оптимизируйте его, если необходимо
*/
function Component() {
    const [scroll, setScroll] = React.useState({});

    console.log(scroll);

    return (
        <div onScroll={setScroll}>
            <VerySlowComponent />
        </div>
    );
}
```

---

```jsx
/** Ответ */

function ComponentWithScroll({ children }) {
    const [scroll, setScroll] = React.useState({});

    console.log(scroll);

    return <div onScroll={setScroll}>{children}</div>;
}

function Component() {
    return (
        <ComponentWithScroll>
            <VerySlowComponent />
        </ComponentWithScroll>
    );
}
```
