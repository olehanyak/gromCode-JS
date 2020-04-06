function calculator(a, b) {
    switch (this.operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '/':
            return a / b;
        case '*':
            return a * b;
        default:
            return NaN;
    }
};


/*
 * Ф-ция multiplier должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 2 числа и возвращать из произведение
 */
// ...your code here

const multiplier = calculator.bind(3, 3);

console.log(multiplier());
console.log(multiplier);


/*
 * Ф-ция summator должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 2 числа и возвращать из сумму
 */
// ...your code here

const summator = calculator.bind(5 * 5);
console.log(summator());

/*
 * Ф-ция twice должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 1 число и возвращать это число умноженное на 2
 */
// ...your code here

const twice = calculator.bind(4);
console.log(twice());

export { multiplier, summator, twice };