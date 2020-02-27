function getSum(num1, num2) {
    let sum = 0;
    for (let i = num1; i < num2; i++) {
        
        if (sum % 2 === 0) {
            sum += i;  
            // console.log(sum);
        }
    }
}

getSum(2, 10);
getSum();