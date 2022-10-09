
function create2dArray(a, b) {
    let arr = [];

    // create 2d
    for (let i = 0; i< a; i++) {
        for(let j = 0; j< b; j++) {
            arr[i] = [];
        }
    }

    // inserting elements to array
    for (let i = 0; i< a; i++) {
        for(let j = 0; j< b; j++) {
            arr[i][j] = j;
        }
    }
    return arr;
}

const x = 5;
const y = 10;
const result = create2dArray(x, y);
console.log(result);
