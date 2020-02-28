const arrayNumbers = [5, 7, 9, 16];

function getSum(arr) {
    let sum = 0;
    for (let i = 0; i < arrayNumbers.length; i++) {
        sum += arrayNumbers[i];
        console.log(sum);

        if (!Array.isArray(arr)) {
            return null;
        }
    }
    return sum;
}

getSum(arrayNumbers);