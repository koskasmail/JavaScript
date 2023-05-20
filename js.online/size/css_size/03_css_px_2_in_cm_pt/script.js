function convertPixels() {
    var pixelsInput = document.getElementById("pixels");
    var pixels = parseFloat(pixelsInput.value);

    if (!isNaN(pixels)) {
        var inches = pixels / 96;
        var centimeters = inches * 2.54;
        var points = pixels * 0.75;

        var result = document.getElementById("result");
        result.innerHTML = "Inches: " + inches.toFixed(2) + " (in) <br>" +
            "Centimeters: " + centimeters.toFixed(2) + " (cm) <br>" +
            "Points: " + points.toFixed(2) +" (pt)";
    } else {
        alert("Please enter a valid number of pixels.");
    }
}