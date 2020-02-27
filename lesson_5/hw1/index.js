function getSum(num1, num2) {
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        sum += i;
        console.log(sum);
        if (i % 2 === 0) {
            sum += i;
            console.log(sum);
            return sum;
        }
    }
}

getSum(1, 10);
