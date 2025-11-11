
```js

class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NetworkError';
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

class AuthError extends Error {
  constructor(message) {
    super(message);
    this.name = 'AuthError';
  }
}

function throwError() {
  return new Promise((resolve, reject) => {
    const random = Math.random();

    if (random < 0.3) {
      reject(new NetworkError('Ошибка сети'));
    } else if (random < 0.5) {
      reject(new ValidationError('Ошибка валидации'));
    } else if (random < 0.7) {
      reject(new AuthError('Ошибка авторизации'));
    } else {
      reject(new Error('Необработанная ошибка'));
    }
  });
}

const refreshToken = () => console.log('Перезапрос данных');
const revalidation = () => console.log('Ревалидация');
const reauth = () => console.log('Повторная авторизация');

throwError();

```

---

```js
/** Ответ */

throwError()
  .catch(error => {
    if (error instanceof NetworkError) {
      console.error(error.message);
      return refreshToken();
    }

    throw error;
  })
  .catch(error => {
    if (error instanceof ValidationError) {
      console.error(error.message);
      return revalidation();
    }

    throw error;
  })
  .catch(error => {
    if (error instanceof AuthError) {
      console.error(error.message);
      return reauth();
    }

    throw error;
  })
  .catch(error => {
    console.error(error.message);
  });

```
