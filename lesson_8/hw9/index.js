const compareObjects = (obj1, obj2) => {
    let compareObj = Object.keys(obj1);
    let compareObj2 = Object.keys(obj2);
    // console.log(compareObj);
    // console.log(compareObj2);
    if (compareObj.length !== compareObj2.length) {
        return false;
    };

    let isEqual = true;

    for (let key of compareObj) {
        // console.log(key);
        // console.log(obj2[key]);
        if (obj1[key] !== obj2[key]) {
            // console.log(key);
            console.log(compareObj2);
            return false;
        }
        // return true;
    }
    return isEqual;
};

const user1 = {
    name: "Diego",
    age: 33,
    country: "Costa Rica",
    // hobby: 'Tenis',
};

const user2 = {
    name: "Diego",
    age: 33,
    country: "Costa Rica",
};

console.log(compareObjects(user1, user2));
