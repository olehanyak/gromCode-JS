
export const createArrayOfFunctions = (num) => {
    let newArr = [];
    if (typeof(num) !== 'number') return null;
    if (num === undefined ) return [];
    for (let i = 0; i < num; i++) {
        newArr[i] = function() {
            return i;
        };
    }
    return newArr;
}

// createArrayOfFunctions(9);
// console.log(createArrayOfFunctions(7));
