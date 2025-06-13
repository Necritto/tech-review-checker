&nbsp;
&nbsp;
&nbsp;

```html
<div class="container">
    <div class="parent-a">
        <div class="red-box">Красный</div>
    </div>
    <div class="parent-b">
        <div class="blue-box">Синий</div>
    </div>
</div>
```

```css
/* Вопрос: Почему .red-box (z-index: 100) не отображается поверх .blue-box (z-index: 10)? */

.container {
    position: relative;
}

.parent-a {
    position: absolute;
    z-index: 1;
}

.red-box {
    position: absolute;
    z-index: 100;
}

.parent-b {
    position: absolute;
    z-index: 10;
}

.blue-box {
    position: absolute;
    z-index: 10;
}
```

&nbsp;
&nbsp;
&nbsp;

---

&nbsp;
&nbsp;
&nbsp;

```css
/* Ответ */

.parent-a {
    position: absolute;
    z-index: 11; /** Поднять z-index для родительского контекста наложения */
}
```

&nbsp;
&nbsp;
&nbsp;
