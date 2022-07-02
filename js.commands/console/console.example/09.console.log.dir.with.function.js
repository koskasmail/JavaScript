/*
** 09.console.log.dir.with.function.js
**
*/

const rec1 = { name: 'shalom', age: 30, state: 'usa', single: false };
const rec2 = { name: 'yifat', age: 40, state: 'il', single: false };
const rec3 = { name: 'yaron', age: 46, state: 'il', single: false };

console.log("\n----[function]----------------");

function printIt(value) { 
    console.log(value);
}

printIt("print it");

//call function "print" with no parameters
console.log(printIt);

console.log("\n");
console.dir(printIt);





