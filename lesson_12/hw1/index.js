const reverseString = str => {
    if (str === !String) return null;
    return str.split("").reverse().join("");
}

console.log(reverseString('JavaScript'));