const getSum = arr => {
    if (!Array.isArray) return null;
    arr.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    });
}





const someArr = [25, 50, 125];

console.log(getSum(someArr));