&nbsp;
&nbsp;
&nbsp;

```css
/*
    У вас есть CSS анимация, которая в данный момент вызывает проблемы с производительностью.
    Ваша задача — оптимизировать анимацию, используя только CSS, чтобы улучшить её плавность и эффективность.
*/

.box {
    width: 100px;
    height: 100px;
    background-color: blue;
    position: absolute;
    top: 50px;
    left: 50px;
    animation: moveBox 2s infinite, resizeBox 2s infinite;
}

@keyframes moveBox {
    0% {
        top: 50px;
        left: 50px;
    }
    25% {
        top: 50px;
        left: 200px;
    }
    50% {
        top: 200px;
        left: 200px;
    }
    75% {
        top: 200px;
        left: 50px;
    }
    100% {
        top: 50px;
        left: 50px;
    }
}

@keyframes resizeBox {
    0% {
        width: 100px;
        height: 100px;
    }
    50% {
        width: 150px;
        height: 150px;
    }
    100% {
        width: 100px;
        height: 100px;
    }
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

.box {
    width: 100px;
    height: 100px;
    background-color: blue;
    position: absolute;
    top: 50px;
    left: 50px;
    will-change: transform;
    animation: moveAndResizeBox 2s infinite;
}

@keyframes moveAndResizeBox {
    0% {
        transform: translate(50px, 50px) scale(1);
    }
    25% {
        transform: translate(200px, 50px) scale(1.25);
    }
    50% {
        transform: translate(200px, 200px) scale(1.5);
    }
    75% {
        transform: translate(50px, 200px) scale(1.25);
    }
    100% {
        transform: translate(50px, 50px) scale(1);
    }
}
```

&nbsp;
&nbsp;
&nbsp;
