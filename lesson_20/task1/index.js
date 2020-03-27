class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static createEmpty() {
        return new User;
    }

    sayHi = function () {
        console.log(`Hi, I am ${this.name}`);
    };

    requestNewPhoto = function () {
        console.log(`New photo request was sent for ${this.name}`);
    };

    setAge = function (age) {
        this.age = age;
        // console.log(age);

        if (age < 0) {
            return false;
        }

        if (age >= 25) {
            console.log(`New photo request was sent for ${this.name}`);
            // this.age = age;
        }
        return age;
    };
};


const anotherUser1 = new User("Olaf", 3);
console.log(User.createEmpty());

// anotherUser1.sayHi()
// anotherUser1.setAge()
// anotherUser1.requestNewPhoto()

export {
    User
};