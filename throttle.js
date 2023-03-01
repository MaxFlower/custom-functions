// Throttling or sometimes also called throttle function is a practice used to call a function after
// every millisecond or a particular interval of time only the first click is executed immediately.

function throttle(originFn, delay) {
    let lastTime = 0;
    let id = 0;
    return function (...args) {
        const context = this;
        id++;
        const now = new Date().getTime()
        if (now - lastTime < delay) {
            return;
        }
        console.log('call id: ', id)
        lastTime = now;
        originFn.call(context, ...args);
    }
}

const method = () => console.log(new Date().getTime());

const invokeMethod = throttle(method, 1);

for (let it = 1; it < 200; it++) {
    console.log('run ', it)
    invokeMethod()
}
// ...
// call id:  1
// 1677653816724
// ...
// call id:  5
// 1677653816725
// ...
// call id:  49
// 1677653816726
// ...
// call id:  133
// 1677653816727
// ...
