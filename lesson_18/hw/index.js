const footballClub = {
    name: 'Liverpool',
    country: 'England',
    color: 'red',
    stadium: 'Enfield',
};

function saveCalls(allCalls) {

    // let calls = [];
    function withMemory() {
        withMemory.calls.bind([...arguments]);
        return allCalls.apply(this, arguments);
    }
    arg.calls = [];
    return arg;

};

export {
    saveCalls
};

// =============================================================