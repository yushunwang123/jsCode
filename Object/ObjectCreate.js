Object.ObjectCreate = (proto, propertiesObject)=> {
    // 对输入进行检测
    if (typeof proto !== 'object' && typeof proto !== 'function' && proto !== null) {
        throw new Error(`Object prototype may only be an Object or null:${proto}`);
    }
    // 新建一个对象
    const result = {};
    // 将该对象的原型设置为proto
    Object.setPrototypeOf(result, proto);
    // 将属性赋值给该对象
    Object.defineProperties(result, propertiesObject);
    // 返回该对象
    return result;
}

const newObj = Object.ObjectCreate({
    name : 'lili',
    age : 25
}, {
    sex : {
        value: 'woman',
        writable: true,
        enumerable : true,
        configurable : true
    }
});
console.log(newObj);