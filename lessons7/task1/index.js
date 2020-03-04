const getSpecialNumbers = numbers => {
    let specialNumbers = [];
    numbers.forEach(element => {
        if (element % 3 === 0) {
            specialNumbers.push(element);
        }
    });
    return specialNumbers;
}

const newArr = [1, 3, 5, 6, 77, 150];

console.log(getSpecialNumbers(newArr));