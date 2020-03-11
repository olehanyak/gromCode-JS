const getSum = arr => {
    if (!Array.isArray) return null;
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
}

const someArr = [25, 50, 125];

console.log(getSum(someArr));