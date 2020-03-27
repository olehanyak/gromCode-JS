class Wallet {
    constructor() {
        this._balance = 0;
    }
    getBalance() {
        return this._balance;
    }
    deposit(amount) {
        this._balance += amount;
    } 
    withDraw(amount) {
        if (amount > this._balance) {
            console.log('No enough funds');
            return;
        }
        this._balance -= amount;
    }
};

// const walletUser = new Wallet();

// console.log(walletUser.getBalance());
// walletUser.deposit(100);
// console.log(walletUser.getBalance());
// walletUser.withDraw(45);
// walletUser.withDraw(100);
// console.log(walletUser.getBalance());

export { Wallet };