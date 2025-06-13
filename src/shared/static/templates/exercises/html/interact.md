&nbsp;
&nbsp;
&nbsp;

```html
<!--
    Представлен HTML-код формы.
    Найти и исправить ошибки семантики.

    NOTE: со стороны команды дизайна нет никаких требований по работе карточки товара
-->
<div class="card">
    <a href="javascript:void(0)" class="card-link">
        <img src="product.jpg" alt="Товар" />
        <div class="card-body">
            <span class="card-title">Название товара</span>
            <div class="price">1 999 ₽</div>
            <a href="#" class="btn-buy" onclick="buyProduct()">Купить</a>
        </div>
    </a>
</div>
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

<article class="card">
    <figure>
        <img
            src="product.jpg"
            alt="Фото товара: Название товара"
            loading="lazy"
        />
        <figcaption class="visually-hidden">Название товара</figcaption>
    </figure>

    <div class="card-body">
        <h3 class="card-title">Название товара</h3>
        <p class="price" aria-label="Цена: 1 999 рублей">1 999 ₽</p>
        <button type="button" class="btn-buy" onclick="buyProduct()">
            Купить
            <span class="visually-hidden"> товар "Название товара"</span>
        </button>
    </div>
</article>
```

&nbsp;
&nbsp;
&nbsp;
