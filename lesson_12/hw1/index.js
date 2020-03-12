const reverseString = str => {
    if (str === '') return null;
    return str.split("").reverse().join("");
}

console.log(reverseString('JavaScript'));