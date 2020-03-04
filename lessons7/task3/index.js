const flatArray = arr => arr.reduce((acc, elem) => {
    return acc.concat(elem);
}, []);

const initArr = [1, 2, 3, [4, 5, 6]];

console.log(flatArray(initArr));

console.log(initArr);