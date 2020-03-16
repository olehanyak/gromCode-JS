const getKeys = obj => {
    let keysArr = Object.keys(obj);
    let newArr = '';
    keysArr.forEach(elem => {
        newArr += elem + ' ';
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