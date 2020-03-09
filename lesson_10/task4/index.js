const getMaxAbsoluteNumber = arr => {
    // let absoluteValue = arr
    if (!Array.isArray(arr) || arr.length === 0)
        return null
    let absoluteValue = arr
        .map(num => Math.abs(num))
    return Math.max(...absoluteValue)
};

const resultArr = [-777, 3, -1, 45, -20, -2020];
// const resultArr = [];

console.log(getMaxAbsoluteNumber(resultArr));