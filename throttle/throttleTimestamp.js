// 时间戳版本
function throttle(fn, wait) {
    // 上一次执行时间
    let previous = 0;
    return function(...args) {
        // 当前时间
        let now = +new Date();
        if (now - previous > wait) {
            previous = now;
            fn.apply(this, args);
        }
    }
}