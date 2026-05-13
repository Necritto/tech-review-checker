```js
var _cache = [];

function process(arr) {
    if (arr) {
        if (Array.isArray(arr)) {
            if (arr.length > 0) {
                _cache.push({
                    ts: Date.now(),
                    len: arr.length
                });

                var out = [];

                for (var i = 0; i < arr.length; i++) {
                    var a = arr[i];
                    if (a) {
                        if (a.email) {
                            for (var j = i + 1; j < arr.length; j++) {
                                var b = arr[j];
                                if (b) {
                                    if (b.email) {
                                        if (a.email === b.email) {
                                            out.push(a.email);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                for (var k = 0; k < arr.length; k++) {
                    var x = arr[k];
                    if (x) {
                        if (x.isActive) {
                            x.processed = true;
                            if (x.role) {
                                if (x.role === 'admin') {
                                    console.log('Admin:', x.email);
                                } else {
                                    console.log('Regular:', x.email);
                                }
                            }
                        } else {
                            if (x.status) {
                                if (x.status === 'pending') {
                                    console.log('Pending:', x.email);
                                }
                            }
                        }
                    }
                }

                return out;
            }
        }
    }
    return [];
}

const testUsers1 = [
  { email: 'alice@test.com', isActive: true, role: 'admin', status: 'active' },
  { email: 'bob@test.com', isActive: false, role: 'user', status: 'pending' },
  { email: 'alice@test.com', isActive: true, role: 'regular', status: 'inactive' }
];

const cacheBefore1 = _cache.length;
const duplicates1 = process(testUsers1);
const cacheAfter1 = _cache.length;

console.log('Найденные дубликаты:', duplicates1);
console.log('Ожидалось: ["alice@test.com"]', JSON.stringify(duplicates1) === '["alice@test.com"]');

console.log('processed у первого:', testUsers1[0].processed);
console.log('Ожидалось: true', testUsers1[0].processed === true);

console.log('processed у второго:', testUsers1[1].processed);
console.log('Ожидалось: undefined (isActive: false)', testUsers1[1].processed === undefined);

console.log('Кэш увеличился на:', cacheAfter1 - cacheBefore1);
console.log('Ожидалось: 1', cacheAfter1 - cacheBefore1 === 1);
```

| № | Проблема | Описание | Рекомендация по улучшению |
|---|----------|----------|---------------------------|
| 1 | Утечка памяти | Глобальный массив *_cache* бесконечно растёт при каждом вызове *process()*, никогда не очищается. | Удалить глобальную переменную или использовать замыкание с ограничением размера. Если кэш нужен, добавить механизм очистки по таймеру/счётчику. |
| 2 | Неоптимальный алгоритм | Поиск дубликатов email через два вложенных цикла даёт сложность O(n²). | Заменить на проход с *Set*: собрать встреченные email, при повторе добавлять в результат. Снизить сложность до O(n). |
| 3 | Глубокая вложенность условий | До 7 уровней вложенных *if*, основная логика спрятана на 5–7 уровне. Сильно страдает читаемость. | Применить guard clauses (ранние *return*/*continue*), вынести проверки в отдельные функции, использовать *switch* или словари для ролей. |
| 4 | Плохие имена переменных | *_cache*, *arr*, *a*, *b*, *x*, *out*, *k* не несут смысловой нагрузки. | Дать осмысленные имена: *duplicateEmails*, *users*, *user*, *userCache* и т.д. |
| 5 | Побочные эффекты | Мутация переданных объектов (*x.processed = true*) изменяет состояние извне, что неожиданно для вызывающего кода. | Работать иммутабельно: создать новый массив объектов с полем *processed* или возвращать отдельно список обработанных ID. |
| 6 | Нет обработки краевых случаев | Нет проверок на *null*, не строку в поле *email*, нет проверки, что элемент массива – объект. Может вызвать ошибки или некорректную работу. | Добавить защитные проверки: *typeof user?.email === 'string'*, фильтровать некорректные элементы до основной логики. |
| 7 | Смешение ответственности | Функция одновременно ищет дубликаты, мутирует данные, логирует в консоль и пишет в глобальный кэш. | Разделить на отдельные функции: *findDuplicateEmails()*, *markProcessed()*, *logByRole()*. Кэширование вынести в специализированный сервис. |
