var currentDate = '2022-12-05T16:43:21.840Z';
const inputDate = new Date(currentDate);
const day = inputDate.getDate().toString().padStart(2, '0');
const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
const year = inputDate.getFullYear().toString();
const hours = inputDate.getHours().toString().padStart(2, '0');
const minutes = inputDate.getMinutes().toString().padStart(2, '0');
const seconds = inputDate.getSeconds().toString().padStart(2, '0');
const milliseconds = inputDate.getMilliseconds().toString().padStart(3, '0');

const outputDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}:${milliseconds}`;
console.log("date time");
console.log(currentDate);

console.log("date time formatted");
console.log(outputDate); // output: 05/12/2022 16:43:21:840