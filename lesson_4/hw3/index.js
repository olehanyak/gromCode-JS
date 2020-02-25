let result = 0;

for (let i = 0; i <= 1000; i++) {
    if (i % 2 === 1) {
        console.log('Found');
    } else if (i * 5 > 5000) {
        console.log('Bigger');
    } else {
        console.log('Smaller or equal');
    }
}