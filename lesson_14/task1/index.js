'use strict';

let message = 'Just learn it!';

const sendMessage = (name) => {
    const sender = 'Gromcode!';
    console.log(`${name}, ${message}. Your ${sender}`);
};

function setMessage(text) {
    message = text;
};

sendMessage('Ann');

setMessage('Good job');

sendMessage('Ann');