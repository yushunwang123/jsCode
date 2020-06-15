Array.prototype.myFilter = function (fn) {
    if (typeof fn !== 'function') {
        throw new TypeError(`${fn} is not a function`);
    }

    // 获取该数组
    const arr = this;
    // 获取该数组长度
    const len = this.length >>> 0;
    // 新建一个新的数组用于放置该内容
    const temp = [];

    // 对数组中每个值进行处理
    for (let i = 0; i < len; i++) {
        // 处理时注意this指向
        const result = fn.call(arguments[1], arr[i], i, arr);
        result && temp.push(arr[i]);
    }

    return temp;
}

const arr = [1,2,3,4];
console.log(arr.filter((value) => {
    return value > 2;
}));
console.log(arr.myFilter((value) => {
    return value > 2;
}));