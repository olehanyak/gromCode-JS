const squareArray = numbers => {
    let squareNum = [];

    numbers.forEach(element => {
        // console.log(numbers)
        if (!Array.isArray(numbers)) {
            return null;
        }
        else if (element) {
            squareNum.push(element * element);
        }
    });
    return squareNum;
}

const squareNumbers = [2, 3, 4, 5, 6];

console.log(squareArray(squareNumbers));