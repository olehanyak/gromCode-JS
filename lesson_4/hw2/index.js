const m = 7;
const n = 42;
let result = 0;

for (let m = 7; m <= n; m++) {
    if (m % 2 === 0 && m % 4 === 0) {
        result += m;
    }
    else if (m % 3 === 0) {
        result -= m;
    }
    else if (m % 4 === 0) {
        result *= m;
    }
    else if (m % 5 === 0) {
        console.log(m);
    }
    else {
        continue;
    }
}

// console.log(result);