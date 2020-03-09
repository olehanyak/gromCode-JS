const getMaxAbsoluteNumber = arr => {
    let absoluteValue = arr;
    if (!Array.isArray(arr) || absoluteValue.length === 0)
        return null;
    absoluteValue.map(num => Math.abs(num));
    return Math.max(...absoluteValue);
}

const resultArr = [-22, 1, 44, 2020, 6, 78, 109, 1999];
// const resultArr = [];

console.log(getMaxAbsoluteNumber(resultArr));