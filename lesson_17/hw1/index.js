const user = {
    firstName: "Roland",
    lastName: "Diskein",
    getFullName() {
        return (`${this.firstName} ${this.lastName}`);
        // console.log(`${this.firstName} ${this.lastName}`);
    },
    setFullName(getFullName) {
        console.log(user.firstName);
        user.firstName = this.firstName;
        user.lastName = this.lastName;
    }
};

user.getFullName();

user.setFullName();

export { user };


