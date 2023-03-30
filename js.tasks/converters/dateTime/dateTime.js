
var dateTimeBasic = new Date();
var dd = dateTimeBasic.getDay();
var mm = dateTimeBasic.getMonth();
var yyyy = dateTimeBasic.getFullYear();
var h = dateTimeBasic.getHours();
var m = dateTimeBasic.getMinutes();
var s = dateTimeBasic.getSeconds();
var ms = dateTimeBasic.getMilliseconds();

var output = [];

// if hh < 0 add 0 .
dd = dd < 10 ? "0" + dd : dd;
mm = mm < 10 ? "0" + mm : mm;
yyyy = yyyy < 10 ? "0" + yyyy : yyyy;

h = h < 10 ? "0" + h : h;
m = m < 10 ? "0" + m : m;
s = s < 10 ? "0" + s : s;
ms = ms < 10 ? "0" + ms : ms;

output.push(dd);
output.push(mm);
output.push(yyyy);
output.push(h);
output.push(m);
output.push(s);
output.push(ms);

console.table(output);
