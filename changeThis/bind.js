Function.prototype.bind1 = function (context, ...args) {
    if (typeof this !== 'function') {
        throw new TypeError('The bound object needs to be a function');
    }

    const self = this;
    const fNOP = function() {};
    const fBound = function(...fBoundArgs) {
        // 指定this
        // 当作为构造函数时，this 指向实例，此时 this instanceof fBound 结果为 true
        return self.apply(this instanceof fNOP ? this : context, [...args, ...fBoundArgs]);
    }

    //  修改返回函数的 prototype 为绑定函数的 prototype,为了避免直接修改this的原型，所以新建了一个fNOP函数作为中介
    if (this.prototype) {
        fNOP.prototype = this.prototype;
    }
    fBound.prototype = new fNOP();

    return fBound;
}

const obj1 = {
    name: 'lili'
};
const obj2 = {
    name: 'shunshun'
};
function obj3() {
    console.log(this)
    getName: () => {
        console.log(this.name);
    }
}

obj3.prototype = {
    getDescription() {
        console.log('test')
        console.log(this)
    }
}
// new obj3();
// const func1 = obj3.bind(obj1);
// (new func1()).getDescription()
// const newFunc1 = new func1();
// console.log(newFunc1.getName())

function f() {
    return this;
}

const g = f.bind1({ a: 1 });

g();  // {a:1}

const obj = new g;
// instanceof都为true
console.assert(obj instanceof f, 1);
console.assert(obj instanceof g, 2);

// Symbol.hasInstance
console.assert(f[Symbol.hasInstance](obj), 3);
console.assert(g[Symbol.hasInstance](obj), 4);

// f为constructor
console.assert(obj.constructor === f, 5);
console.assert(obj.constructor !== g, 6);

// f的prototype在obj的原型链上
console.assert(obj.__proto__ === f.prototype, 7, obj.__proto__, f.prototype);

// g的prototype为undefined
console.assert(g.prototype === undefined, 8, g.prototype);