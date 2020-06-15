function Instanceof(left, right) {
    let leftVal = Object.getPrototypeOf(left);
    const rightVal = right.prototype;

    while (leftVal !== null) {
        if (leftVal === rightVal)
            return true;
        leftVal = Object.getPrototypeOf(leftVal);
    }
    return false;
}

// test
const arr1 = new Array(1,2);

console.log(Instanceof(arr1, Array));