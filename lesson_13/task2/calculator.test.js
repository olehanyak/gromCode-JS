import getSum, { getSquareArray, getOddNumbers } from './calculator.js'

it ('should get squared numbers', () => {
    const result = getSquareArray([1, 2, 3, 4]);

    expect(result).toEqual([1, 4, 9, 16]);
});

it ('should keep odd numbers only', () => {
    const result = getOddNumbers([1, 2, 3, 4, 5]);

    expect(result).toEqual([1, 3, 5]);
});

it ('should get sum of numbers', () => {
    const result = getSum(9, 5);

    expect(result).toEqual(14);
});