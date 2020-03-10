const getRandomNumbers = (len, start, end) =>
   Array(len).fill().map(len => Math.floor(Math.random() * (start - end + 1) + end))
   // Array(len).map(len => Math.floor(Math.random() * (start - end + 1) + end))

console.log(getRandomNumbers(10, 1, 7));