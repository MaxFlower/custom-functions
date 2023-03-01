function debounce(originFn, time) {
    let timeout;
    return function (...args) {
        let context = this;
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            clearTimeout(timeout)
            originFn.call(context, ...args);
        }, time);
    }
}

//
const method = () => console.log(new Date().getTime());

const invokeMethod = debounce(method, 10);
console.log(1);
invokeMethod();
console.log(2);
invokeMethod();
console.log(3);
invokeMethod();
console.log(4);
invokeMethod();
console.log(5);
invokeMethod();

// 1
// 2
// 3
// 4
// 5
// 1677649960461
