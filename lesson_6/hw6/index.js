// const nameClients = ["Nick", "Oscar", "Mark", "Kate"];

// const clientBalance = [100, 200, 50, 1000];

function withdraw(clients, balances, client, amount) {
    for (let i = 0; i < clients.length; i++) {
        console.log(balances[i]);
        // console.log(client[i])
        if (clients[i] === client && balances[i] > amount) {
            return balances[i] -= amount;
        } else {
            return -1;
        }
    }
}

// const clientsBalances = withdraw(nameClients, clientBalance, nameClients, 1);

// console.log(clientsBalances);
