
```html
<!--
    Представлен HTML-код формы.
    Найти и исправить ошибки доступности и семантики
-->

<div class="form-container">
    <div class="form-title">Регистрация</div>

    <div class="input-group">
        <div>Имя:</div>
        <input type="text" id="name" />
    </div>

    <div class="input-group">
        <div>Email address:</div>
        <input type="text" id="mail" />
    </div>

    <div class="input-group">
        <div>Пароль:</div>
        <input type="text" id="pass" />
    </div>

    <div class="checkbox">
        <input type="checkbox" id="terms" />
        <span>Согласен с условиями</span>
    </div>

    <div class="submit-btn" onclick="submitForm()">Зарегистрироваться</div>
</div>
```

---

```html
<!-- Ответ -->

<form class="form-container" aria-label="Форма регистрации">
    <h2 class="form-title">Регистрация</h2>

    <div class="input-group">
        <label for="name">Имя:</label>
        <input
            type="text"
            id="name"
            name="name"
            required
            aria-required="true"
            autocomplete="given-name"
        />
    </div>

    <div class="input-group">
        <label for="email">Email:</label>
        <input
            type="email"
            id="email"
            name="email"
            required
            aria-required="true"
            autocomplete="email"
            aria-describedby="email-hint"
        />
        <span id="email-hint" class="hint-text">Пример: user@example.com</span>
    </div>

    <div class="input-group">
        <label for="password">Пароль:</label>
        <input
            type="password"
            id="password"
            name="password"
            required
            aria-required="true"
            autocomplete="new-password"
            minlength="8"
            aria-describedby="password-hint"
        />
        <span id="password-hint" class="hint-text">Минимум 8 символов</span>
    </div>

    <fieldset class="checkbox-group">
        <legend id="terms-heading" class="visually-hidden">
            Условия соглашения
        </legend>
        <input
            type="checkbox"
            id="terms"
            name="terms"
            required
            aria-required="true"
        />
        <label for="terms">Согласен с <a href="/terms">условиями</a></label>
    </fieldset>

    <button type="submit" class="submit-btn">Зарегистрироваться</button>
</form>
```
