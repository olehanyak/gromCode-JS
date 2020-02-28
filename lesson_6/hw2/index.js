const mainArray = [1, 2, 3, 4, 5, 6];

function reverseArray(arr) {
    const [a, b, c, d, e, f] = arr;

    if (!Array.isArray(arr)) {
        return null;
    }

    return [f, e, d, c, b, a];
}

const getReverseArray = reverseArray(mainArray);

console.log(getReverseArray);