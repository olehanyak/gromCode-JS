let memory = 0;

function add(num) {
    return memory += num;
};

function decrease(num) {
    return memory -= num;
};

function reset() {
    return 0;
};

function getMemo(num) {
    return num;
};

console.log(add(4));
console.log(decrease(4));
console.log(reset(4));
console.log(getMemo(4));