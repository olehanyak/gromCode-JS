const startDate = new Date();
const endDate = new Date(2010, 10, 10, 10, 10, 10);

const getDiff = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    console.log(new Date(startDate))
    console.log(new Date(endDate))

    const newDate = new Date(start - end);
    // console.log(start);
    // console.log(end);

    let newDay = newDate.getDate();
    let newHour = newDate.getHours();
    let newMin = newDate.getMinutes();
    let newSec = newDate.getSeconds();

    console.log(`${newDay}d ${newHour}h ${newMin}m ${newSec}s`);
    return `${newDay}d ${newHour}h ${newMin}m ${newSec}s`;
};

const myDate = getDiff(startDate, endDate);

console.log(myDate);

export { getDiff };
