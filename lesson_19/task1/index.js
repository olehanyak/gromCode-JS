const vehicle = {
    move() {
        console.log(`${this.name} is moving`);
    },
    stop() {
        console.log(`${this.name} stopped`);
    },
}

const ship = {
    name: 'Argo',
    hasWheels: false,
    startMachine() {
        console.log(`${this.name} lifting anchor up`);
        ship.move();
    },
    stopMachine() {
        ship.stop();
        console.log(`${this.name} lifting anchor down`);
    },
    __proto__: vehicle,
};

// ship.startMachine()

export {
    vehicle,
    ship
};