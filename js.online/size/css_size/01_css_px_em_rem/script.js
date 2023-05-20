document.getElementById("pxInput").addEventListener("input", function () {
    var pxValue = parseFloat(this.value);
    var emValue = pxValue / 16;    //// (1em = 16px)
    var remValue = pxValue / parseFloat(getComputedStyle(document.documentElement).fontSize); //// (1rem = font-size of root element)

    document.getElementById("emOutput").value = emValue.toFixed(2) + "em";
    document.getElementById("remOutput").value = remValue.toFixed(2) + "rem";
});