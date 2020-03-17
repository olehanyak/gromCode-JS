const compareObjects = (obj1, obj2) => {
    let compareObj = Object.keys(obj1);
    let compareObj2 = Object.keys(obj2);
    // console.log(compareObj);
    // console.log(compareObj2);
    if (compareObj.length !== compareObj2.length) {
        return false;
    };

    let isEqual;

    for (let key of compareObj) {
        if (compareObj[key] !== compareObj2[key]) {
            isEqual = false;
        }
        isEqual = true;
    };
    return isEqual;
};

const user1 = {
    name: 'Diego',
    age: 33,
    country: 'Costa Rica',
};

const user2 = {
    name: 'Diego',
    age: 33,
    country: 'Costa Rica',
};

console.log(compareObjects(user1, user2));