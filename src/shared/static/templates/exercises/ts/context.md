
```ts
/** Объясните, почему этот код не вызывает ошибку компилятора, но ломается в runtime */
class Payment {
    private date = new Date();

    getDate() {
        return this.date;
    }

    getDateArrow = () => {
        return this.date;
    };
}

const payment = new Payment();

const user = {
    paymentDate: payment.getDate,
    paymentDateCorrect: payment.getDate.bind(payment),
    paymentDateArrow: payment.getDateArrow,
};

user.paymentDate(); // Error
user.paymentDateCorrect(); // Success
user.paymentDateArrow(); // Success
```

---

```ts
/** Ответ */

class Payment {
    private date = new Date();

    getDate(this: Payment) {
        return this.date;
    }

    getDateArrow = () => {
        return this.date;
    };
}
```
