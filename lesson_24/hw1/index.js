

// const getDiff = (startDate, endDate) => {
//     const start = new Date(startDate);
//     const end = new Date(endDate);
//     const newDate = new Date(start - end);
//     console.log(start);
//     console.log(end);

//     let newDay = newDate.getDate();
//     let newHour = newDate.getHours();
//     let newMin = newDate.getMinutes();
//     let newSec = newDate.getSeconds();

//     console.log(`${newDay}d ${newHour}h ${newMin}m ${newSec}s`);
//     return `${newDay}d ${newHour}h ${newMin}m ${newSec}s`;
// };

// const startDate = new Date();
// const endDate = new Date(2010, 10, 10, 10, 10, 10);

// const myDate = getDiff(startDate, endDate);

// console.log(myDate);

// export { getDiff };
function getDiff(startDate, endDate) {

    const start = Math.floor(startDate.getTime() / (3600 * 24 * 1000));
    const end = Math.floor(endDate.getTime() / (3600 * 24 * 1000));

    const newDate = new Date(end - start);


    let newDay = newDate.getDate();
    let newHour = newDate.getHours();
    let newMin = newDate.getMinutes();
    let newSec = newDate.getSeconds();

    console.log(`${newDay}d ${newHour}h ${newMin}m ${newSec}s`);
    return `${newDay}d ${newHour}h ${newMin}m ${newSec}s`;
};

const startDate = new Date(2013, 11, 4, 0, 0, 0);
const endDate = new Date(2013, 13, 4, 1, 1, 1);

getDiff(startDate, endDate)

export { getDiff };