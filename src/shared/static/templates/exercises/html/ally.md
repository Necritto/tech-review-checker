
```html

<div>
  <a href="product.html">
    <img src="laptop.jpg" width="300">
  </a>

  <div>
    <a href="product.html">Ноутбук Apple MacBook Pro 16"</a>
  </div>

  <div>
    Мощный ноутбук с процессором M3 Pro, 18 ГБ оперативной памяти и SSD 512 ГБ
  </div>

  <div>
    <span>299 990 ₽</span>
  </div>

  <div>
    <button>Заказать</button>
  </div>
</div>

```

---

```html
<!-- Ответ -->

<article itemscope itemtype="https://schema.org/Product">
  <a
    href="product.html"
    aria-label="Перейти к товару: Ноутбук Apple MacBook Pro 16 дюймов"
  >
    <figure>
      <img
        src="laptop.jpg"
        alt="Ноутбук Apple MacBook Pro 16 дюймов, вид спереди на белом фоне"
        width="300"
        height="200"
        loading="lazy"
        itemprop="image"
      >
    </figure>
  </a>

  <div>
    <header>
      <h2 itemprop="name">
        <a href="product.html">Ноутбук Apple MacBook Pro 16"</a>
      </h2>
    </header>

    <p itemprop="description">
      Мощный ноутбук с процессором M3 Pro, 18 ГБ оперативной памяти и SSD 512 ГБ.
      Идеально подходит для профессиональной работы с графикой и видео.
    </p>

    <footer>
      <div
        itemprop="offers"
        itemscope
        itemtype="https://schema.org/Offer"
      >
        <data value="299990" itemprop="price">299 990</data>
        <span itemprop="priceCurrency" content="RUB">₽</span>
        <meta itemprop="availability" content="https://schema.org/InStock">
      </div>

      <button
        type="button"
        aria-label="Добавить в корзину Ноутбук Apple MacBook Pro 16 дюймов"
      >
        Заказать
      </button>
    </footer>
  </div>
</article>
```
