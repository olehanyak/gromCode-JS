const sortDesc = numbers => {
  const copy = numbers.slice();
  copy.sort((a, b) => b - a);

  return copy;
}

const arr = [1, 3, 66, 7, 2];

console.log(sortDesc(arr));
console.log(arr);