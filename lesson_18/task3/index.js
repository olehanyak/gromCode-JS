export function sumOfSquare () {
    return [...arguments].map(elem => {
        return elem * elem;
    });
};

console.log(sumOfSquare(2, 3, 5, 10));

