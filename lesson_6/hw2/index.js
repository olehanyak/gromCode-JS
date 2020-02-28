const mainArray = [1, 2, 3, 4, 5, 6];

function reverseArray(arr) {
    const reversed = arr.reverse();

    if (!Array.isArray(arr)) {
        return null;
    }
    return reversed;
}

const getReverseArray = reverseArray(mainArray);

console.log(getReverseArray);