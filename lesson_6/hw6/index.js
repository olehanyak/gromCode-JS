const nameClients = ["Nick", "Oscar", "Mark", "Kate"];

const clientBalance = [100, 200, 50, 1000];

function withdraw(clients, balances, client, amount) {
    // let a = [];
    // let b = [];
    
    for (let i = 0; i < clients.length; i++) {
        // a.push(clients[i]);
        console.log(clients[i]);
        // for (let k = 0; k < balances.length; k++) {
            // b.push(balances[k]);
            console.log(amount);
            if (clients[i] === client && balances > amount) {
                return balances -= amount;
            } 
            else if (balances < amount) {
                return -1;
            }
        // }
       
    }
  
}

const clientsBalances = withdraw(nameClients, clientBalance);

console.log(clientsBalances);