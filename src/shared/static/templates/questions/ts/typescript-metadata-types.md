# ❓ Какие типы метаданных обычно сохраняют в TypeScript?

---

## 1. Типы, генерируемые автоматически TypeScript

Если в `tsconfig.json` включены флаги:

```json
{
  "experimentalDecorators": true,
  "emitDecoratorMetadata": true
}
```

TypeScript будет автоматически эмитировать следующие типы метаданных:

| Метаданные ключ     | Описание                                |
| ------------------- | --------------------------------------- |
| `design:type`       | Тип свойства                            |
| `design:paramtypes` | Типы параметров конструктора или метода |
| `design:returntype` | Тип возвращаемого значения метода       |

Пример:

```ts
class Example {
  @Decorator()
  name: string;

  @Decorator()
  greet(msg: string): number {
    return msg.length;
  }
}
```

TypeScript создаст метаданные:

```ts
Reflect.getMetadata('design:type', Example.prototype, 'name'); // String
Reflect.getMetadata('design:paramtypes', Example.prototype, 'greet'); // [String]
Reflect.getMetadata('design:returntype', Example.prototype, 'greet'); // Number
```

---

## 2. Кастомные метаданные

Можно сохранять свои собственные данные с произвольными ключами:

```ts
Reflect.defineMetadata('custom:validation', { required: true }, target, propertyKey);
```

Часто используются для:

* Валидации (`@IsEmail`, `@Required`)
* Маршалинга/сериализации (`@Expose`, `@Transform`)
* Роутинга (`@Route('GET', '/user')`)
* Dependency Injection (`@Inject`, `@Service`)
* Логирования, трекинга, аудита

---

## 3. Пример реального применения

```ts
function Required(target: any, propertyKey: string) {
  Reflect.defineMetadata('required', true, target, propertyKey);
}

function isRequired(target: any, propertyKey: string): boolean {
  return Reflect.getMetadata('required', target, propertyKey) === true;
}
```

---

## Итог

Сохраняемые метаданные делятся на:

* **Автоматически генерируемые** (`design:*`) — при помощи `emitDecoratorMetadata`.
* **Пользовательские (кастомные)** — для прикладной логики.

Они используются для валидации, DI, сериализации и построения декларативной логики поверх кода.

---
