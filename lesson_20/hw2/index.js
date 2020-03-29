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
    constructor(id, name, sessionId, users) {
        super(id, name, sessionId, users);
        this._users = Object.freeze(users);
    }

    get users() {
        return this._users;
    }

    getUserNames() {
        return this._users.map(pers => pers._name);
    }

    getUserIds() {
        return this._users.map(pers => pers._id);
    }

    getUserNameById(id) {
        for (let user of this._users) {
            if (user.id === id) {
                return user.name;
            }
        }
    }
};

const usersArr = new User();

console.log(usersArr);

const getUsersData = new UserRepository(`${Math.random()}`, 'Leon', '12345', ['Lynn', 'Freddy', 'Mark', 'Spiderman']);

console.log(getUsersData);
console.log(getUsersData.getUserNames());
console.log(getUsersData.getUserIds());
console.log(getUsersData.getUserNameById());

export { User, UserRepository };