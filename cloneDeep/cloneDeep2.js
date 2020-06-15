// 递归版
function cloneDeep2(source) {
    // 如果输入的为基本类型，直接返回
    if (!(typeof source === 'object' && source !== null)) {
        return source;
    }

    // 判断输入的为数组函数对象，进行相应的构建
    const target = Array.isArray(source) ? [] : {};

    for (let key in source) {
        // 判断是否是自身属性
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            if (typeof source === 'object' && source !== null) {
                target[key] = cloneDeep2(source[key]);
            } else {
                target[key] = source[key];
            }
        }
    }

    return target;
}

const obj = {
    ww : '111',
    ee : [1, 2, 3],
    rr : {
        name: 'lili'
    }
}

console.log(cloneDeep2(obj));