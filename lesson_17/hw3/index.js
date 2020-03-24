const person = {
    firstName: 'John',
    lastName: 'Rambo',
    hobby: 'war',
};

function fun() {
    console.log(`Hello, mr.${this.firstName} ${this.lastName}`);
};

function bind(func, context) {
    let rest = Array.prototype.slice.call(arguments);
    // console.log(rest)
    return function () {
        return func.apply(context, rest);
    }
};

bind(fun, person)();

export { bind };