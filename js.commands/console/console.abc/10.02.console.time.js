

// ----[console.time]------------

console.time("take_1");
console.info("Start take_1");
console.log("01.02");
console.warn("01.03");
console.error("01.04");
console.debug("01.05");
console.info("end take_1");
console.timeEnd("take_1");


console.time("take_2");
console.info("Start take_2");
console.log("02.02");
console.warn("02.03");
console.error("02.04");
console.debug("Sp End");
console.info("end take_2");
console.timeEnd("take_2");


// ---[summary]------------
// console.time("Take_1");
// ...
// console.timeEnd("Take_1");
// //----[tip]------------//
// //millisecond (ms) = second * 1000
// //second = millisecond (ms) / 1000