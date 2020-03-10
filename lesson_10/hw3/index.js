const superRound = (num, len) => [
    Math.floor(num * len) / len,
    Math.round(num * len) / len,
    Math.ceil(num * len) / len,
    Math.trunc(num * len) / len,
    num.toFixed(len),
];

// const numberArr = [13.4, 5];

console.log(superRound(13.4, 7));