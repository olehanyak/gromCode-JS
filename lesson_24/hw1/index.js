

const getDiff = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const newDate = new Date(start - end);
    console.log(start);
    console.log(end);

    let newDay = newDate.getDate();
    let newHour = newDate.getHours();
    let newMin = newDate.getMinutes();
    let newSec = newDate.getSeconds();

    console.log(`${newDay}d ${newHour}h ${newMin}m ${newSec}s`);
    return `${newDay}d ${newHour}h ${newMin}m ${newSec}s`;
};

const startDate = new Date(2000, 10, 10, 10, 10);
const endDate = new Date(1982, 9, 10, 10, 10, 10);

const myDate = getDiff(startDate, endDate);

console.log(myDate);

// export { getDiff };