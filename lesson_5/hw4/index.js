

function compareSums(a, b, c, d) {
    let sum1 = a + b;
    let sum2 = c + d;
    function sum(from, to) {
        if (from > to) {
            return true;
        }
        else {
            return false;
        }
    }
    sum(sum1, sum2);
}


compareSums(10, 3, 4, 1);

