&nbsp;
&nbsp;
&nbsp;

```html
<!--
    Представлен HTML-код страницы.
    Найти не менее 5 ошибок (семантика, доступность, валидность).
    Объясните, почему это проблема и как исправить
-->

<!DOCTYPE html>
<html lang="de">
    <head>
        <meta charset="UTF-8" />
    </head>
    <body>
        <div class="header">
            <span>Главная</span>
            <span>Каталог</span>
            <span>Корзина</span>
        </div>

        <div id="main-content">
            <h1>Популярные товары</h1>
            <div class="product">
                <img src="item1.jpg" />
                <h3>Смартфон X</h3>
                <figcaption>Цена: 20 000 ₽</figcaption>
                <div onclick="addToCart()">Купить</div>
            </div>
        </div>

        <div class="footer">
            <p>© 2024 Магазин</p>
            <p>Контакты: example@mail.com</p>
        </div>
    </body>
</html>
```

&nbsp;
&nbsp;
&nbsp;

---

&nbsp;
&nbsp;
&nbsp;

```html
<!-- Ответ -->

<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Интернет-магазин</title>
    </head>
    <body>
        <header class="header">
            <nav>
                <ul>
                    <li><a href="/">Главная</a></li>
                    <li><a href="/">Каталог</a></li>
                    <li><a href="/">Корзина</a></li>
                </ul>
            </nav>
        </header>

        <main>
            <article id="main-content">
                <h1>Популярные товары</h1>
                <div class="product">
                    <img src="item1.jpg" alt="" />
                    <h3>Смартфон X</h3>
                    <p>Цена: 20 000 ₽</p>
                    <button type="button" onclick="addToCart()">Купить</button>
                </div>
            </article>
        </main>

        <footer class="footer">
            <p>&copy; 2024 Магазин</p>
            <p>
                Контакты: <a href="mailto:example@mail.com">example@mail.com</a>
            </p>
        </footer>
    </body>
</html>
```

&nbsp;
&nbsp;
&nbsp;
