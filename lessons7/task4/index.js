const getMessagesForBestStudents = (allStudents, failedStudents) => allStudents
.filter(name => !failedStudents.includes(name))
.map(name => 'Good job, ' + name);

const allStudents = ['Mike', 'Luke', 'Monica', 'Sam'];

const failedStudents = ['Mike', 'Monica'];

console.log(getMessagesForBestStudents(allStudents, failedStudents));