const startNewDate = new Date();
const endNewDate = new Date(2020, 1, 10, 10, 10, 10);

const getDiff = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    console.log(new Date(startDate))
    console.log(new Date(endDate))

    // const getNewDate = new Date(end - start);
    const getNewDate = new Date(end.getMilliseconds() - start.getMilliseconds());
    console.log(getNewDate);

    let newDay = getNewDate.getDate();
    let newHour = getNewDate.getHours();
    let newMin = getNewDate.getMinutes();
    let newSec = getNewDate.getSeconds();

    console.log(`${newDay}d ${newHour}h ${newMin}m ${newSec}s`);
    return `${newDay}d ${newHour}h ${newMin}m ${newSec}s`;
};

const myDate = getDiff(startNewDate, endNewDate);

console.log(myDate);

export { getDiff };
