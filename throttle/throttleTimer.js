function throttle(fn, wait) {
    let timer = null;
    return function(...args) {
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, args);
                timer = null;
            }, wait)
        }
    }
}