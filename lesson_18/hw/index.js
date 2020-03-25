
function saveCalls(allCalls) {

    // let calls = [];
    return function withMemory() {
        withMemory.calls.bind([...arguments]);
        return allCalls.apply(this, arguments);
    }
    
};

export { saveCalls };

// =============================================================

