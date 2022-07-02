/*
** 05.console.log.js
**
*/

// Timer - 
// 100000 = 3.058ms
console.log('\n%c___A Timer___', 'color: red; font-weight: bold');

// define the time with a variable 'lp'
console.time('lp');

let i = 0;
while (i < 100000) {
    i++;
}

console.timeEnd('lp');