&nbsp;
&nbsp;
&nbsp;

```html
<!--
    Представлен HTML-код карточки товара.
    Найдти не менее 7 ошибок, связанных с:

    - Семантикой,
    - Доступностью (a11y),
    - Валидностью разметки.
-->

<div class="product-card">
    <img src="product.jpg" width="200" height="200" />
    <div class="title">Ультрабук SuperBook</div>
    <p class="price">85 000 ₽</p>
    <div class="discount">-15%</div>
    <div class="button" role="button" tabindex="0">В корзину</div>
    <div class="rating">★★★★☆ <span>(124 отзыва)</span></div>
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

<article class="product-card" itemscope itemtype="http://schema.org/Product">
    <figure class="product-image">
        <img
            src="product.jpg"
            alt="Ультрабук SuperBook, серебристый корпус на белом фоне"
            width="200"
            height="200"
            loading="lazy"
            itemprop="image"
        />
        <figcaption class="visually-hidden">
            Изображение товара Ультрабук SuperBook
        </figcaption>
    </figure>

    <h3 class="product-title" itemprop="name">Ультрабук SuperBook</h3>

    <div
        class="price-container"
        itemprop="offers"
        itemscope
        itemtype="http://schema.org/Offer"
    >
        <meta itemprop="priceCurrency" content="RUB" />
        <p class="price">
            <span class="visually-hidden">Цена: </span>
            <data itemprop="price" value="85000">85 000 ₽</data>
        </p>
        <div class="discount" aria-hidden="true">-15%</div>
        <span class="visually-hidden">Скидка 15%</span>
    </div>

    <button
        type="button"
        class="add-to-cart-button"
        aria-label="Добавить Ультрабук SuperBook в корзину"
    >
        В корзину
    </button>

    <div
        class="product-rating"
        itemprop="aggregateRating"
        itemscope
        itemtype="http://schema.org/AggregateRating"
    >
        <span class="visually-hidden">Рейтинг: </span>
        <span aria-hidden="true">★★★★☆</span>
        <meta itemprop="ratingValue" content="4" />
        <meta itemprop="bestRating" content="5" />
        <meta itemprop="ratingCount" content="124" />
        <span class="reviews-count">(124 отзыва)</span>
    </div>
</article>
```

&nbsp;
&nbsp;
&nbsp;
