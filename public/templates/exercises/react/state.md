&nbsp;
&nbsp;
&nbsp;

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

&nbsp;
&nbsp;
&nbsp;

---

&nbsp;
&nbsp;
&nbsp;

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

&nbsp;
&nbsp;
&nbsp;
