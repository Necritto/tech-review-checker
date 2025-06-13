&nbsp;
&nbsp;
&nbsp;

```scss
/**
Дан следующий SCSS-код.
Объясните, почему он выдаст ошибку или не сработает, как ожидается.
Предложите минимальные изменения для его корректной работы
*/

@mixin add-padding($size) {
    .element {
        padding: $size + px;
    }
}

@include add-padding(20);
@include add-padding;
```

&nbsp;
&nbsp;
&nbsp;

---

&nbsp;
&nbsp;
&nbsp;

```scss
@mixin add-padding($size: 10) {
    .element {
        padding: #{$size}px;
    }
}
```
