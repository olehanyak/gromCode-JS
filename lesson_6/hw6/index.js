const nameClients = ["Nick", "Oscar", "Mark", "Kate"];

const clientBalance = [100, 200, 50, 1000];

function withdraw(clients, balances, client, amount) {
    
    for (let i = 0; i < clients.length; i++) {
        // a.push(clients[i]);
        console.log(clients[i]);
        // for (let k = 0; k < balances.length; k++) {
            // b.push(balances[k]);
            console.log(balances[i])
            console.log(amount[i])
            console.log(amount)
            if (clients[i] === client && balances[i] > amount) {
                return balances[i] -= amount;
            } 
            else if (balances < amount) {
                return -1;
            }
        
        // }
       
    }
  
}

const clientsBalances = withdraw(nameClients, clientBalance, nameClients, clientBalance);

console.log(clientsBalances);