function convertTemperature() {
    var inputUnit = document.getElementById("inputUnit").value;
    var inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
    var outputUnit = document.getElementById("outputUnit").value;
    var convertedTemperature;

    if (inputUnit === "celsius") {
        if (outputUnit === "fahrenheit") {
            convertedTemperature = (inputTemperature * 9 / 5) + 32;
        } else if (outputUnit === "kelvin") {
            convertedTemperature = inputTemperature + 273.15;
        } else {
            convertedTemperature = inputTemperature; // No conversion needed
        }
    } else if (inputUnit === "fahrenheit") {
        if (outputUnit === "celsius") {
            convertedTemperature = (inputTemperature - 32) * 5 / 9;
        } else if (outputUnit === "kelvin") {
            convertedTemperature = (inputTemperature - 32) * 5 / 9 + 273.15;
        } else {
            convertedTemperature = inputTemperature; // No conversion needed
        }
    } else if (inputUnit === "kelvin") {
        if (outputUnit === "celsius") {
            convertedTemperature = inputTemperature - 273.15;
        } else if (outputUnit === "fahrenheit") {
            convertedTemperature = (inputTemperature - 273.15) * 9 / 5 + 32;
        } else {
            convertedTemperature = inputTemperature; // No conversion needed
        }
    }

    document.getElementById("outputTemperature").value = convertedTemperature.toFixed(2);
}