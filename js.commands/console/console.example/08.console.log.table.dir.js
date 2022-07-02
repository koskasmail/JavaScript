/*
** 08.console.log.table.dir.js
**
*/

const rec1 = { name: 'shalom', age: 30, state: 'usa', single: false };
const rec2 = { name: 'yifat', age: 40, state: 'il', single: false };
const rec3 = { name: 'yaron', age: 46, state: 'il', single: false };


console.log("\n----[console.log]----------------");
console.log(rec1);
console.log(`Name: ${rec1.name}, Age: ${rec1.age} State: ${rec1.state}  Single: ${rec1.single}`);

console.log("\n----[console.table({ rec1 });]----------------");
console.table({ rec1 });

console.log("\n----[console.table([rec1]);]----------------");
console.table([rec1]);

console.log("\n----[console.dir]----------------");
console.dir({ rec1 });

console.log("\n----[console.dirxml]----------------");
console.dirxml( {rec1} );
