Array.prototype.myMap = function(fn) {
    // 判断输入的第一个参数是不是函数
    if (typeof fn !== 'function') {
        throw new TypeError(fn + 'is not a function');
    }

    // 获取需要处理的数组内容
    const arr = this;
    const len = arr.length;
    // 新建一个空数组用于装载新的内容
    const temp = new Array(len);

    // 对数组中每个值进行处理
    for (let i = 0; i < len; i++) {
        // 获取第二个参数，改变this指向
        let result = fn.call(arguments[1], arr[i], i, arr);
        temp[i] = result;
    }
    // 返回新的结果
    return temp;
}

const arr = [1, 3, 5];
const arr1 = null;
const arr2 = undefined;

const arr3 = '12345'
console.log(arr.map(function(value) {
    return value * 2;
}))
console.log(arr.myMap(function(value) {
    return value * 2;
}))

console.log(Array.prototype.map.call(arr3, function(value) {
    return value * 2;
}))
console.log(Array.prototype.myMap.call(arr3, function(value) {
    return value * 2;
}))
