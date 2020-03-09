const getMaxAbsoluteNumber = arr => {
    let absoluteValue = arr
        .map(num => Math.abs(num));
    return Math.max(...absoluteValue);
}

const resultArr = [1, 44, 6, 78, 109];

console.log(getMaxAbsoluteNumber(resultArr));