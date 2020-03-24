'use strict';

const event = {
    guests: [
        { name: 'Tom', email: 'example@Server.com', age: 17 },
        { name: 'Bob', email: 'example@Server.com', age: 18 },
        { name: 'Sam', email: 'example@Server.com', age: 22 },
    ],
    message: "Welcome to the party!",
    getInvintations() {
        return this.guests
        .filter(({ age }) => age >= 18)
        .map(({ name, email }) => ({
            email: `${email} `,
            message: `Dear ${name}! ${this.message}`,
            email
        }));
    }
}

console.log(event.getInvintations());

export { event };