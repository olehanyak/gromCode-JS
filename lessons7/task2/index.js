const sortDesc = numbers => {
    function compare(a, b) {
        if (a > b) {
            return 1;
        } else {
            return -1;
        }
    }
    numbers.sort(compare);
    return numbers;
}

const arr = [1, 3, 66, 7, 2];

console.log(sortDesc(arr));