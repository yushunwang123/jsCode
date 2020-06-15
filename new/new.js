function New (Fn, ...arg) {
    // 一个新的对象被创建
    const result = {};
    // 该对象的__proto__属性指向该构造函数的原型
    if (Fn.prototype !== null) {
        Object.setPrototypeOf(result, Fn.prototype);
    }
    // 将执行上下文（this）绑定到新创建的对象中
    const returnResult = Fn.apply(result, arg);
    // 如果构造函数有返回值，那么这个返回值将取代第一步中新创建的对象。否则返回该对象
    if ((typeof returnResult === "object" || typeof returnResult === "function") && returnResult !== null) {
        return returnResult;
    }
    return result;
}


// 测试代码
function A() {
    this.arg = arguments;
    this.print = function() {
        console.log(this.arg);
    }
}
const obj = New (A, 1,2)

obj.print();