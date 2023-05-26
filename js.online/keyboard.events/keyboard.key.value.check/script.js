document.addEventListener("keydown", function (event) {
    let output = document.getElementById('output');
    //output.innerText = "test";
    output.innerText = event.key;
});
