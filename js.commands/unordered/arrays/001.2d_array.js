
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
