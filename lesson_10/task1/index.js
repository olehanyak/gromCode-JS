const getFiniteNumbers = arr => arr
    .map(elem => Number.isFinite(elem));

const getFiniteNumbersV2 = arr => arr
    .map(elem => isFinite(elem));

const getNaN = arr => arr
    .map(elem => Number.isNaN(elem));

const getNaNV2 = arr => arr
    .map(elem => isNaN(elem));

const getIntegers = arr => arr
    .map(elem => Number.isInteger(elem));


const numberList = [77, '39', '45.9txt', Infinity, null, NaN, undefined];

console.log(getFiniteNumbers(numberList));
console.log(getFiniteNumbersV2(numberList));
console.log(getNaN(numberList));
console.log(getNaNV2(numberList));
console.log(getIntegers(numberList));