const getKeys = obj => {
    let keysArr = Object.keys(obj);
    const newArr = [];
    keysArr.forEach(elem => {
        newArr.push(elem);
    });
    return newArr;
};

const alien = {
    name: 'Alf',
    born: 'Melmak',
    age: 126,
    country: 'USA',
    'favorite food': 'cats',
};

console.log(getKeys(alien));