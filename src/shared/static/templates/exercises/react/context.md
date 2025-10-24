
```jsx
/**
    Дан пример React компонента.
    Исправьте все ошибки, которые видите
*/
const ThemeContext = React.createContext();

function App() {
    const [theme, setTheme] = React.useState("light");

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme: () =>
                    setTheme(theme === "light" ? "dark" : "light"),
            }}
        >
            <ThemedButton />
        </ThemeContext.Provider>
    );
}
```

---

```jsx
/** Ответ */

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = React.useState("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    const value = React.useMemo(() => ({ theme, toggleTheme }), [theme]);

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = React.useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within ThemeProvider");
    }

    return context;
};

function App() {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeProvider>
            <ThemedButton />
        </ThemeProvider>
    );
}
```
