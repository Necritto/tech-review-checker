
```js
/**
    Дан следующий JavaScript-код, демонстрирующий попытку создания "классов" через прототипное наследование.
    Объясните, почему свойство speed у объекта car не изменяется на 100 после присваивания newCar.speed = 100,
    и как это исправить, чтобы каждое транспортное средство имело свою собственную изменяемую скорость, не влияя на другие объекты, унаследованные от Vehicle.
*/

function Vehicle(model) {
    this.model = model;
    this.speed = 50;
}

function Car(model) {
    this.model = model;
}

Car.prototype = Object.create(Vehicle.prototype);

const car = new Vehicle("Мотоцикл");
const newCar = new Car("Тесла");

newCar.speed = 100;

console.log(`Скорость car: ${car.speed}`); // Ожидаем 80
console.log(`Скорость newCar: ${newCar.speed}`); // Ожидаем 100
```

---

```js
/** Ответ */

function Vehicle(model, initialSpeed = 50) {
    this.model = model;
    this.speed = initialSpeed;
}

function Car(model, speed) {
    Vehicle.call(this, model, speed);
    this.model = model;
}

Car.prototype = Object.create(Vehicle.prototype);

const car = new Vehicle("Мотоцикл", 80);
const newCar = new Car("Тесла");

newCar.speed = 100;

console.log(`Скорость car: ${car.speed}`); // Ожидаем 80
console.log(`Скорость newCar: ${newCar.speed}`); // Ожидаем 100
```
