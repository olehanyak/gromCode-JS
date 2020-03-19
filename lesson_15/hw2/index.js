// let memory = [];

 export function createLogger() {
    let memory = [];

    function warn(elem) {
        memory.push({
            message: elem,
            dateTime: 1,
            type: 'warn',
        });
    };

    function error(elem) {
        memory.push({
            message: elem,
            dateTime: 6,
            type: 'error',
        });
    };

    function log(elem) {
        memory.push({
            message: elem,
            dateTime: 4,
            type: 'log',
        });
    };

    function getRecords(memo) {
        if (memo === undefined) {
            return memory;
        }
        if (memo) {
            let result = memo.sort((a, b) => b.dateTime - a.dateTime);
            console.log(result)
            return result;
        }
        if (memo.type === undefined) {
            return [];
        }
    };

    return {
        warn,
        error,
        log,
        getRecords,
    };
};

// console.log(memory)

// const logger1 = createLogger();
// logger1.warn('keep out!');
// logger1.error('error!');
// logger1.log('Hello!');

// logger1.getRecords(memory);
// console.log(logger1)