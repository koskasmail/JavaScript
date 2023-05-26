document.addEventListener("keydown", function (event) {
    if (event.key === "+") {
        console.log("+++");
        document.getElementById('output').innerHTML = "+++";
    }
    else {
        console.log(event.key)
        document.getElementById('output').innerHTML = event.key;
    }
});
