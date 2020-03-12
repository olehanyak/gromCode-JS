const getSubArray = (arr, num) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= num) {
            result.push(arr[i]);
        }
    }
    return result;
};

console.log(getSubArray([1, 2, 3, 4, 5, 6], 2));
