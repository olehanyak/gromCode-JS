const squareArray = numbers => {
    if (!Array.isArray(numbers)) {
        return null;
    }
    const a = numbers.map(elem => elem * 2);
    return a;
}


const squareNumbers = [2, 3, 4, 5, 6];

console.log(squareArray(squareNumbers));

console.log(squareNumbers);