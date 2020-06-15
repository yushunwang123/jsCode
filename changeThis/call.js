Function.prototype.call1 = function(context, ...args) {
    // 获取第一个参数（注意第一个参数为null或undefined是，this指向window），构建对象
    context = context ? Object(context) : window;
    // 将对应函数传入该对象中
    context.fn = this;
    // 获取参数并执行相应函数
    let result = context.fn(...args);
    delete context.fn;
    return result;
}

const obj = {
    name : 'Linlili'
};

const myObj = {
    getName() {
        console.log(this.name);
    }
}

myObj.getName();
myObj.getName.call(obj);
myObj.getName.call1(obj);