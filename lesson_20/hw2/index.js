class User {
    constructor(id, name, sessionId) {
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    }
    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get sessionId() {
        return this._sessionId;
    }
};

class UserRepository extends User {
    constructor(users) {
        super(users);
        this.users = Object.freeze(users);
    }

    getUserNames() {
        return this._name;
    }

    getUserIds() {
        return this._id;
    }

    getUserNameById(){
        return this._sessionId;
    }
};

const usersArr = new User(`${Math.random()}`, 'eron', 'red', ['Lynn', 'Freddy', 'Mark', 'Spiderman']);

console.log(usersArr);

const getUsersData = new UserRepository('ooo');

console.log(getUsersData);

export { User, UserRepository };