
```html
<div class="container">
    <div class="text" id="unique-text">Какого я цвета?</div>
</div>
```

1.1.

```css
.text {
    color: blue;
}
div {
    color: red;
}
#unique-text {
    color: green;
}
.container .text {
    color: purple;
}
div.text {
    color: orange !important;
}
```

1.2.

```css
/* Если убрать !important и добавить правила ниже */
:is(#unique-text, .container) .text {
    color: yellow;
}
```

---

<!-- Ответ -->

- 1.1 Текст будет оранжевым
- 1.2 Жёлтый
