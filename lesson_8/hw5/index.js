const getKeys = obj => {
    let keysArr = Object.keys(obj);
    return keysArr;
};

const alien = {
    name: 'Alf',
    born: 'Melmak',
    age: 126,
    country: 'USA',
    'favorite food': 'cats',
};

console.log(getKeys(alien));