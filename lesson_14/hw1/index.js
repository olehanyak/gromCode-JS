let memory = 0;

export function add(num) {
    return memory += num;
};

export function decrease(num) {
    return memory -= num;
};

export function reset() {
    return 0;
};

export function getMemo(num) {
    return num;
};

console.log(add(4));
console.log(decrease(4));
console.log(reset(4));
console.log(getMemo(4));