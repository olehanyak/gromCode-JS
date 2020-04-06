/* ===> 1 <=== */
const student = {
    name: 'Tom',
};

function sayName() {
    console.log(this.name);
}

// вызовите ф-цию sayName так, чтобы в консоль вывелось имя студента 
// ... your code here

const sayStudentName = sayName.bind(student);

sayStudentName();

// вызовите ф-цию sayName так, чтобы в консоль вывелось имя 'Bruce' (используйте другой объект)
// ... your code here

const student2 = {
    name: 'Bruce',
};

const sayBruceName = sayName.bind(student2);

sayBruceName();


/* ===> 2 <=== */
const company = {
    companyName: 'Microsoft'
};

function greeting(firstName, lastName) {
    console.log(`Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`);
}

// вызовите ф-цию greeting так, чтобы в консоль вывелось 
// 'Hello, Bob Marley. Welcome to the Microsoft'
// используйте объект company
// ... your code here

const sayBruceName = greeting.bind(company, 'Bob', 'Marley');

sayBruceName();


/* ===> 3 <=== */
const country = {
    countryName: 'Ukraine',
    capital: 'Kyiv'
};

function getPopulation(population) {
    console.log(`Population in ${this.countryName} is ${population}`)
    return `Population in ${this.countryName} is ${population}`;
}

// вызовите ф-цию getPopulation так, чтобы она вернула 
// 'Population in Ukraine is 43000'
// используйте объект country
// ... your code here

const getUkrainePopulation = getPopulation.bind(country, 43000);

getUkrainePopulation();

/* ===> 4 <=== */
const transaction = {
    amount: 1200,
    operation: 'sell',
    currency: 'USD',
    exchange: 'NYSE',
    printTransaction() {
        console.log(`${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`);
    }
}

const anotherTransaction = {
    amount: 400,
    operation: 'buy',
    currency: 'USD',
    exchange: 'NASDAQ',
};

// вызовите метод transaction.printTransaction так, чтобы в консоль вывелось
// '400 USD - buy on NASDAQ'
// используйте объект anotherTransaction как контекст
// ... your code here

const printSpecialTransaction = transaction.printTransaction.bind(anotherTransaction);

printSpecialTransaction();

export { sayStudentName, sayBruceName, getUkrainePopulation, printSpecialTransaction };
