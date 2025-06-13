&nbsp;
&nbsp;
&nbsp;

```js
/**
    Реализуйте функцию-логгер, которая работает следующим образом:

    принимает на вход любую функцию, например:

    function foo(a) {
        return a;
    }

    const logFoo = log(foo);

    и может логировать её вызовы

    logFoo('test'); // log: test
    logFoo.calledWith('test'); // log: true
    logFoo.calledWith('test123'); // log: false
    logFoo.returned('test'); // log: true
    logFoo.callCount(); // log: 1
*/

function foo(a) {
    return a;
}

const logFoo = log(foo);

logFoo("test"); // log: test
logFoo.calledWith("test"); // log: true
logFoo.calledWith("test123"); // log: false
logFoo.returned("test"); // log: true
logFoo.callCount(); // log: 1

function log(fn) {
    // implementation
}
```

&nbsp;
&nbsp;
&nbsp;

---

&nbsp;
&nbsp;
&nbsp;

```js
/** Ответ */

function log(fn) {
    const calls = [];

    return function wrapper(...args) {
        const result = fn(...args);
        calls.push({ args, result });

        console.log(...args);

        wrapper.calledWith = (...args) => {
            const isCalled = calls.some(
                (call) => call.args.toString() === args.toString()
            );
            console.log(isCalled);
        };

        wrapper.returned = (value) => {
            const result = calls.some((call) => call.result === value);
            console.log(result);
        };

        wrapper.callCount = () => {
            console.log(calls.length);
        };

        return result;
    };
}
```

&nbsp;
&nbsp;
&nbsp;
