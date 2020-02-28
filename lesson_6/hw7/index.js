const mainArray = [5, 10, 50, 100, 1000];

function checker(arr) {
    let sumArr = 0;

    for (let i = 0; i < arr.length; i++) {
        sumArr += arr[i];

        if (sumArr > 1000) {
            return true;
        }
    }
    return sumArr;
}

const checkerArr = checker(mainArray);

console.log(checkerArr);