function cloneDeep3(source) {
    if (!(typeof source === 'object' && source !== null)) {
        return source;
    }

    const root = Array.isArray(source) ? [] : {};
    // 定义一个栈
    const loopList = [{
        parent: root,
        key: undefined,
        data: source,
    }];

    while (loopList.length > 0) {
        // 深度优先
        const node = loopList.pop();
        const parent = node.parent;
        const key = node.key;
        const data = node.data;

        // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
        let res = parent;
        if (typeof key !== 'undefined') {
            res = parent[key] = Array.isArray(data) ? [] : {};
        }

        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                if (typeof data[key] === 'object' && data !== null) {
                    loopList.push({
                        parent: res,
                        key: key,
                        data: data[key],
                    });
                } else {
                    res[key] = data[key];
                }
            }
        }
    }

    return root;
}

const obj = {
    ww : '111',
    ee : [1, 2, 3],
    rr : {
        name: 'lili'
    }
}

console.log(cloneDeep3(obj));