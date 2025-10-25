
```js
/**
    Реализуйте полифилл для метода массива flat
*/

function flatPolyfill() {}

const nestedArray = [
    [1, 2, 3],
    [[4, 5, [6, [7]]]],
    [[[[[[[[8]]]]]]]],
    9,
    [[[10]]],
];

console.log(nestedArray.flatPolyfill(8)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

---

```js
/** Ответ */

Array.prototype.flatPolyfill = function (depth) {
    const flattened = [];

    function flatten(arr, currentDepth) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i]) && currentDepth < depth) {
                flatten(arr[i], currentDepth + 1);
            } else {
                flattened.push(arr[i]);
            }
        }
    }

    flatten(this, 0);

    return flattened;
};
```
