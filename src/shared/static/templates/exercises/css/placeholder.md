
```scss
/**
    Дан следующий SCSS-код.
    Объясните, почему стили font-size: 14px; для .header-title могут не применяться корректно на маленьких экранах, и как это исправить, чтобы адаптивный font-size работал
*/

%base-text {
    font-family: sans-serif;
    color: #333;
    font-size: 16px;
}

%responsive-text-rules {
    @media (max-width: 768px) {
        font-size: 14px;
    }
}

.header-title {
    @extend %base-text;
    font-weight: bold;
}
```

---

```scss
/** Ответ */

%base-text {
    font-family: sans-serif;
    color: #333;
    font-size: 16px;
}

%responsive-text-rules {
    @media (max-width: 768px) {
        font-size: 14px;
    }
}

.header-title {
    @extend %base-text;
    @extend %responsive-text-rules;
    font-weight: bold;
}
```
