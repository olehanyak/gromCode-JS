const multiRound = num => [
    Math.floor(num),
    Math.round(num),
    Math.ceil(num),
    Math.trunc(num),
    // num.toFixed(2),
];

const numberArr = [14.2];

console.log(multiRound(numberArr));