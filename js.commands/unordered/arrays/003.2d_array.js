
const rows = 10;
const columns = 10;

const myArray = Array.from(Array(rows), () => new Array(columns));


for (let i=0; i < myArray[0].length; i++) {
    for(let j=0; myA][0].length; j++) {
        myArray[i,j] = i + " " + j;
    }
}

console.error('#3');
console.log(myArray);
console.table([myArray]);
