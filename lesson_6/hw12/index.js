const getSubArray = (arr, num) => {
    const a = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= num) {
            a.push(arr[i]);
        }
    }
    return a;
};

console.log(getSubArray([1, 2, 3, 4, 5, 6], 4));
