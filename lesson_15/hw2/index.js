// let memory = [];


export function createLogger() {
    let memory = [];

    function warn(elem) {
        memory.push({
            message: elem,
            dateTime: new Date(),
            type: 'warn',
        });
    };

    function error(elem) {
        memory.push({
            message: elem,
            dateTime: new Date(),
            type: 'error',
        });
    };

    function log(elem) {
        memory.push({
            message: elem,
            dateTime: new Date(),
            type: 'log',
        });
    };

    function getRecords(type) {
        // console.log(type)
        // if (type !== undefined) {
        //     let result = memory.filter(el => el.type === type);
        //     return result;
        // }

        if (type !== undefined) {
            let result = memory.filter(el => el.type === type)
            .sort((a, b) => b.message - a.message);
            console.log(result)
            return result;
        } else {
            return memory.sort((a, b) => b.dateTime - a.dateTime);
        };
    };

    return {
        warn,
        error,
        log,
        getRecords,
    };
};

// const logger1 = createLogger();
// logger1.warn('warning');
// logger1.error('error!');
// logger1.log('Hello!');

// logger1.getRecords(memory[0].type);
// logger1.getRecords(memory[1].type);
// logger1.getRecords(memory[2].type);

// console.log(logger1)