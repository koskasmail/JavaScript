
const EnMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const currentDate = new Date();

var dd = currentDate.getDate();
var mm = currentDate.getMonth();
var yyyy = currentDate.getFullYear();
var output = [];

const formattedDate = `${dd} ${EnMonths[mm]} ${yyyy}`;

console.log(formattedDate); // Output: e.g. "30 March 2023"

dd = dd < 10 ? "0" + dd : dd;
yyyy = yyyy < 10 ? "0" + yyyy : yyyy;

output.push(dd);
output.push(mm + " ===> " + EnMonths[mm]);
output.push(EnMonths[mm]);
output.push(yyyy);


console.table(output);
