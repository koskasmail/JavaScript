

console.time("pageLoadTime");

console.info("Sp Start");
console.log("01.02");
console.warn("01.03");
console.error("01.04");
console.debug("01.05");
console.info("02.01");
console.log("02.02");
console.warn("02.03");
console.error("02.04");
console.debug("Sp End");

console.timeEnd("pageLoadTime");


// ---[summary]------------
// console.time("Take_1");
// ...
// console.timeEnd("Take_1");
// //----[tip]------------//
// //millisecond (ms) = second * 1000
// //second = millisecond (ms) / 1000