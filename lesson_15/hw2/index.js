let memory = [];

const createLogger = () => {
// let memory = [];

    function warn(elem) {
        memory.push({
            message: elem,
            dateTime: 1,
            type: 'warn',
        });
    }

    function error(elem) {
        memory.push({
            message: elem,
            dateTime: 6,
            type: 'error',
        });
    }

    function log(elem) {
        memory.push({
            message: elem,
            dateTime: 4,
            type: 'log',
        });
    }

    const getRecords = (memo) => {
        // if (warn || error || log === '') {
            if (memo) {
            console.log(memo)
            return memo.sort((a, b) => a.dateTime - b.dateTime);
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

const logger1 = createLogger();
logger1.warn('keep out!');
logger1.error('error!');
logger1.log('Hello!');
logger1.getRecords(memory);