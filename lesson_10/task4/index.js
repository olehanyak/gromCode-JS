const getMaxAbsoluteNumber = arr => {
    let absoluteValue = arr;
    if (!Array.isArray(arr) || absoluteValue.length === 0)
    return null;
        arr.map(num => Math.abs(num));
    return Math.max(...absoluteValue);
}

const resultArr = [1, 44, 6, 78, 109];
// const resultArr = [];

console.log(getMaxAbsoluteNumber(resultArr));