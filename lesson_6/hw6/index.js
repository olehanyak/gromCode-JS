const nameClients = ["Nick", "Oscar", "Mark", "Kate"];

const clientBalance = [100, 200, 50, 1000];

function withDraw(clients, balances, client, amount) {
    let a = 0
    let b = 0
    for (let i = 0; i < clients.length; i++) {
        a += clients[i];
        console.log(clients[i]);
    }
    for (let k = 0; k < balances.length; k++) {
        b += balances[k];
        console.log(balances[k]);
    }
    if (a === client && b > amount) {
        return a -= amount;
    } 
    else {
        return -1;
    }
}

const clientsBalances = withDraw(nameClients, clientBalance);

console.log(clientsBalances);