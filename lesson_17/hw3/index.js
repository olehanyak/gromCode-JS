const person = {
    firstName: 'John',
    lastName: 'Rambo',
    hobby: 'war',
};

function fun() {
    console.log(`Hello, mr. ${this.firstName} ${this.lastName}`);
}



export function bind(func, context) {
    let rest = Array.prototype.slice.call(arguments);
    return function() {
        let args = Array.prototype.slice.call(arguments);
        return func.apply(context, rest.concat(args));
    }
};

bind(fun, person)();