

///----[console.table]------------

const rec1 = { name: 'shalom', age: 30, state: 'usa', single: false };
const rec2 = { name: 'yifat', age: 40, state: 'il', single: false };
const rec3 = { name: 'yaron', age: 46, state: 'il', single: false };

console.log("\n----[console.table({ rec1 });]----------------");
console.table({ rec1, rec2, rec3 });

console.log("\n----[console.table([rec1]);]----------------");
console.table([rec1, rec2, rec3]);


// ---[summary]------------
// 
//