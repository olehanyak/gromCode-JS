function User(name, age) {
    this.name = name;
    this.age = age;
};
User.prototype.sayHi = function () {
    console.log(`Hi, I am ${this.name}`);
}
User.prototype.requestNewPhoto = function () {
    console.log(`New photo request was sent for ${this.name}`);
}
User.prototype.setAge = function (age) {
    // console.log(this.age)
    // console.log(age)
    this.age = age;
    console.log(this.age)
    if (this.age >= 25) {
        console.log(`New photo request was sent for ${this.name}`);
        // this.age = age;
    }
    if (this.age < 0) {
        return false;
    }

    return this.age;

};

const user1 = new User('Olaf', 3);
const user2 = new User('Mark', 88);

console.log(user1)

// user1.sayHi()
user1.setAge()
// user1.requestNewPhoto()

export { User };

