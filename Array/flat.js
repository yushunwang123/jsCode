// 使用reduce和concat
Array.prototype.flat1 = function () {
    return this.reduce((acc, val) => acc.concat(val), []);
}

// 使用reduce + concat + isArray +recursivity
Array.prototype.flat2 = function (deep = 1) {
    const flatDeep = (arr, deep = 1) => {
        // return arr.reduce((acc, val) => Array.isArray(val) && deep > 0 ? [...acc, ...flatDeep(val, deep - 1)] : [...acc, val], []);
        return deep > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, deep - 1) : val), []) : arr.slice();
    }

    return flatDeep(this, deep);
}

// 使用forEach + concat + isArray +recursivity
// forEach 遍历数组会自动跳过空元素
Array.prototype.flat3 = function (deep = 1) {
    const result = [];
    (function flat(arr, deep) {
        arr.forEach((item) => {
            if (Array.isArray(item) && deep > 0) {
                flat(item, deep - 1);
            } else {
                result.push(item);
            }
        })
    })(this, deep);

    return result;
}

// 使用for of + concat + isArray +recursivity
// for of 遍历数组会自动跳过空元素
Array.prototype.flat4 = function (deep = 1) {
    const result = [];
    (function flat(arr, deep) {
        for(let item of arr) {
            if (Array.isArray(item) && deep > 0) {
                flat(item, deep - 1);
            } else {
                // 去除空元素，因为void 表达式返回的都是undefined，不适用undefined是因为undefined在局部变量会被重写
                item !== void 0 && result.push(item);
            }
        }
    })(this, deep);

    return result;
}

// 使用堆栈stack
Array.prototype.flat5 = function(deep = 1) {
    const stack = [...this];
    const result = [];
    while (stack.length > 0) {
        const next = stack.pop();
        if (Array.isArray(next)) {
            stack.push(...next);
        } else {
            result.push(next);
        }
    }

    // 反转恢复原来顺序
    return result.reverse();
}

const arr = [1, 2, [3, 4, [5, 6]]];
console.log(arr.flat1());
console.log(arr.flat2(2));
console.log(arr.flat3(3));
console.log(arr.flat4(Infinity));
console.log(arr.flat5());
