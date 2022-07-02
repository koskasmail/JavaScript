
console.time("take_1");

console.info("Sp Start");
for (var i = 0; i < 10000; i++) 
{
  if (i % 222 == 0) 
    console.log(i);
}
console.info("Sp End");

console.timeEnd("take_1");


// ---[summary]------------
// console.time("Take_1");
// ...
// console.timeEnd("Take_1");
// //----[tip]------------//
// //millisecond (ms) = second * 1000
// //second = millisecond (ms) / 1000
