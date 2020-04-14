const requestUserData = userId => {
    const request = new Promise((resolve, reject) => {
        if (userId === 'broken') {
            setTimeout(() => {
                reject(new Error('User not found'));
            }, 5000);
        }
        else {
            setTimeout(() => {
                resolve({
                    name: 'Blake',
                    age: 44,
                    email: `${userId}`,
                    userId
                });
            }, 1000);
        }
    });
    return request;
};

requestUserData('broken')
    .then(data => console.log(data))
    .catch(error => console.log(error))
    .finally(() => console.log('finally'));

export { requestUserData };