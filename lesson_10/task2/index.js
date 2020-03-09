const getParsedIntegers = arr => arr
    .map(elem => Number.parseInt(elem));

const getParsedIntegersV2 = arr => arr
    .map(elem => parseInt(elem));

const getParsedFloat = arr => arr
    .map(elem => Number.parseFloat(elem));

const getParsedFloatV2 = arr => arr
    .map(elem => parseFloat(elem));


const numberList = [77, '39', '45.9txt', Infinity, null, NaN, undefined];

console.log(getParsedIntegers(numberList));
console.log(getParsedIntegersV2(numberList));
console.log(getParsedFloat(numberList));
console.log(getParsedFloatV2(numberList));
