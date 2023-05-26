
debugger;
let count = 0;
let min = 0;
let max = 10;

let countDisplay = document.getElementById('count_display').innerHTML = count;
let count_minus = document.getElementById('count_minus');
let count_plus = document.getElementById('count_plus');

count_minus.onclick = minus;
count_plus.onclick = plus;

document.addEventListener("keydown", function(event) {
    if (event.key === "+") {
        plus();
    }

    if (event.key === "-") {
        minus();
    }

    if (event.key === "Escape") {
        count=0;
        updateDispay();
    }

 // if (event.key === "F1") {
    //     alert("F1");
    // }

});

function plus() {
    if (count < max )
        count++;
    updateDispay();
}

function minus() {
    if (count > min)
        count--;
    updateDispay();
}

function updateDispay() {
    // countDisplay.innerHTML = count;
    document.getElementById('count_display').innerHTML = count;
    console.error(count);
}

updateDispay();
