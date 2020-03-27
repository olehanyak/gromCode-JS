class Order {
    constructor(price, city, type) {
        this.id = Math.random();
        this.price = price;
        this.dateCreated = new Date();
        this.isConfirmed = true;
        this.dateConfirmed = new Date();
        this.city = city;
        this.type = type;
    }

    checkPrice() {
        if (this.price < 1000) return false;
        if (this.price > 1000) return true;
    }
    confirmOrder() {
        if (this.isConfirmed === true) {
            return this.dateConfirmed = this.dateCreated;
        }
    }

    isValidType() {
        if (this.type === 'Buy' || this.type === 'Sell') {
            return true;
        } else {
            return false;
        }
    }
};

const newOrder = new Order(33, 'Lion', 'Sell');

console.log(newOrder)
console.log(newOrder.checkPrice());
console.log(newOrder.confirmOrder());
console.log(newOrder.isValidType());

export { Order };