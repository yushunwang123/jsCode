function debounce(fn, wait, immediate) {
    let timer = null;
    return function(...args) {
        // 立即执行的功能(timer为空表示首次触发)
        if (immediate && !timer) {
            fn.apply(this, args);
        }
        // 有新的触发，则把定时器清空
        timer && clearTimeout(timer);
        // 重新计时
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, wait)
    }
}