
const inputDate = new Date();
const day = inputDate.getDate().toString().padStart(2, '0');
const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
const year = inputDate.getFullYear().toString();
const hours = inputDate.getHours().toString().padStart(2, '0');
const minutes = inputDate.getMinutes().toString().padStart(2, '0');
const seconds = inputDate.getSeconds().toString().padStart(2, '0');
const milliseconds = inputDate.getMilliseconds().toString().padStart(3, '0');

const outputDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}:${milliseconds}`;

console.log(outputDate);