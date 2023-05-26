
document.addEventListener("keydown", function(event) {

    let output = document.getElementById('output');
    //output.innerText = "test";
    output.innerText = event.key;
});


// document.addEventListener("keydown", function(event) {=
//     let output = document.getElementById('output');
//     //output.innerText = "test";
//     output.innerText = event.key;
//     if (event.key === "+") {
//         plus();
//     }
//     if (event.key === "-") {
//         minus();
//     }
//     if (event.key === "Escape") {
//         count=0;
//         updateDispay();
//     }
//  // if (event.key === "F1") {
//     //     alert("F1");
    // }
// });


function handleFunctionKey(event) {
    if (event.key.startsWith("F")) {
        var keyNumber = event.key.slice(1);
        // Call your function here based on the function key number
        alert("F" + keyNumber + " key pressed!");
    }
}

function handleUppercaseAlphabetKey(event) {
    var keyCode = event.keyCode || event.which;
    var key = String.fromCharCode(keyCode);

    if (/^[A-Z]$/.test(key)) {
        // Call your function here based on the alphabetical key
        alert("UC - Alphabet key pressed: " + key);
    }
}

function handleLowercaseAlphabetKey(event) {
    var keyCode = event.keyCode || event.which;
    var key = String.fromCharCode(keyCode);

    if (/^[a-z]$/.test(key)) {
        // Call your function here based on the alphabetical key
        alert("lc - Alphabet key pressed: " + key);
    }
}

function handleNumericalKey(event) {
    var keyCode = event.keyCode || event.which;
    var key = String.fromCharCode(keyCode);

    if (/^[0-9]$/.test(key)) {
        // Call your function here based on the numerical key
        alert("Numerical key pressed: " + key);
    }
}
    

function handleSymbolKey(event) {
    var keyCode = event.keyCode || event.which;
    var key = String.fromCharCode(keyCode);

    // Check if the key is a symbol
    if (/^[!@#$%^&*()_+{}|:"<>?~`[\]\\;',./\-]$/.test(key)) {
        // Call your function here based on the symbol key
        alert("Symbol key pressed: " + key);
    }
}

// document.addEventListener("keydown", handleFunctionKey);
// document.addEventListener("keydown", handleLowercaseAlphabetKey);
// document.addEventListener("keydown", handleUppercaseAlphabetKey);
// document.addEventListener("keydown", handleNumericalKey);
// document.addEventListener("keydown", handleSymbolKey);
