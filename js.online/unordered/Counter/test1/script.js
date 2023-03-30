
debugger;
let count = 0;

let countDisplay = document.getElementById('count_display').innerHTML = count;
let count_minus = document.getElementById('count_minus');
let count_plus = document.getElementById('count_plus');

count_minus.onclick = minus;
count_plus.onclick = plus;

// window.onload = function() {
//      updateDispay();
// }


function plus() {
    count++;
    updateDispay(countDisplay);
}

function minus() {
    count--;
    updateDispay(countDisplay);
}

function updateDispay() {
    // countDisplay.innerHTML = count;
    document.getElementById('count_display').innerHTML = count;
    console.error(count);
}

updateDispay();
