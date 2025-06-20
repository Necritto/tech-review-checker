# ❓ Какие проблемы могут возникнуть при смешивании CommonJS и ES Modules?

---

## Основные проблемы

1. **Несовместимость синтаксисов экспорта/импорта:**  
   - CommonJS использует `module.exports` и `exports`, ES Modules — `export` и `export default`.  
   - При импорте CommonJS модуля в ESM часто получается объект с `default` свойством, что приводит к путанице.

2. **Различия в обработке named exports:**  
   - CommonJS не поддерживает named exports напрямую.  
   - При импорте CommonJS в ESM часто нужно обращаться через `default`, что усложняет код.

3. **Динамическая природа CommonJS:**  
   - CommonJS модули могут менять экспорт в рантайме, что затрудняет статический анализ в ESM.

4. **Проблемы с tree shaking:**  
   - Tree shaking работает эффективно только с ESM. CommonJS модули в бандле не подлежат оптимальному удалению неиспользуемого кода.

5. **Различия в поведении загрузки модулей:**  
   - ESM загружаются асинхронно и статически, CommonJS — синхронно и динамически. Это может вызвать неожиданные эффекты при взаимодействии.

---

## Примеры проблем

```js
// CommonJS module (cjs.js)
module.exports = {
  foo: () => 'foo',
};

// ESM importing CommonJS
import cjs from './cjs.js';
console.log(cjs.foo()); // Работает, но иногда требует cjs.default.foo()
```

---

## Итог

Смешивание CommonJS и ES Modules приводит к сложностям с импортом/экспортом, ухудшает возможности оптимизации и может вызывать ошибки времени выполнения. Рекомендуется придерживаться одного стандарта в проекте.

---
