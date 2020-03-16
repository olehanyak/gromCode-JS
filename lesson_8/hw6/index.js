const addPropertyV1 = (userData, userId) => {
    userData.Id = userId;
    return userData;
}

const addPropertyV2 = (userData, userId) => {
    const result = Object.assign(userData)
    return result;
}

const addPropertyV3 = (userData, userId) => {
    const result = Object.assign({}, userData)
    return result;
}

const addPropertyV4 = (userData, userId) => {
    const result = Object.assign({...userData}, )
    return result;
}

const user = {
    name: 'King',
};

console.log(addPropertyV1(user, '0987654321'))
console.log(addPropertyV2(user, '0987654321'))
console.log(addPropertyV3(user, '0987654321'))
console.log(addPropertyV4(user, '0987654321'))