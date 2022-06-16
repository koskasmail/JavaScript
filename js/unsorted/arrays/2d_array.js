

// #3
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


// # 2
const rows = 10;
const columns = 10;

const myArray = new Array(rows);

for (let i=0; i < myArray.length; i++) {
    //myArray[i] = new Array(columns);
    myArray[i] = new Array('1','2','3','4','5','6','7','8','9','10');
}

console.error('#2');
console.log(myArray);
console.table([myArray]);

// #1
const rows = 10;
const columns = 10;

const myArray1 = [];

for (let i=0; i < rows; i++) {
    myArray1[i] = [];
    for(let j=0; j<columns; j++){
        myArray1[i][j] = i + ' ' + j;
    }
}

console.error('#1');
console.log(myArray1);
console.table([myArray1]);




