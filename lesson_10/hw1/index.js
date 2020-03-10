const getTotalPrice = arr => {
    let sum = 0;
    arr.forEach(element => {
        sum += element
    });
    return '$' + Math.floor(sum).toFixed(2);
}

const numbersArr = [12.544, 38.057, 20.993];

console.log(getTotalPrice(numbersArr));