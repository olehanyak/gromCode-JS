const pickProps = (obj, arr) => {
    let a = {};
    arr.forEach(elem => {
        a[elem] = elem;
    });
    return a;
}

const someArray = [17.1, 'John Doe'];

const someObject = {
    a: 'a',
    '17.1': '17.1',
    'John Doe': 'John Doe',
};

const newObj = pickProps(someObject, someArray);

console.log(newObj);