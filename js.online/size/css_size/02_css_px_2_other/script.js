function convertPixels() {
    var pixelsInput = document.getElementById("pixels");
    var pixels = parseFloat(pixelsInput.value);

    if (!isNaN(pixels)) {
        var em = pixels / 16;
        var ex = em / 2;
        var ch = pixels / 8;
        var vw = pixels / window.innerWidth * 100;
        var vh = pixels / window.innerHeight * 100;
        var vmin = Math.min(vw, vh);
        var vmax = Math.max(vw, vh);

        var result = document.getElementById("result");
        result.innerHTML = "Em: " + em.toFixed(2) + "<br>" +
            "Ex: " + ex.toFixed(2) + "<br>" +
            "Ch: " + ch.toFixed(2) + "<br>" +
            "Viewport Width (vw): " + vw.toFixed(2) + "%<br>" +
            "Viewport Height (vh): " + vh.toFixed(2) + "%<br>" +
            "Viewport Minimum (vmin): " + vmin.toFixed(2) + "%<br>" +
            "Viewport Maximum (vmax): " + vmax.toFixed(2) + "%";
    } else {
        alert("Please enter a valid number of pixels.");
    }
}

function convertPixels2() {
    var pixelsInput = document.getElementById("pixels");
    var pixels = parseFloat(pixelsInput.value);

    if (!isNaN(pixels)) {
        var em = pixels / 16;
        var ex = em / 2;
        var ch = pixels / 8;
        var vw = pixels / window.innerWidth * 100;
        var vh = pixels / window.innerHeight * 100;
        var vmin = Math.min(vw, vh);
        var vmax = Math.max(vw, vh);

        var result = document.getElementById("result");
        result.innerHTML = "<ul>"
            + "<li> Em: <i>" + em.toFixed(2) + "</i></li>"
            + "<li> Ex: <i>" + ex.toFixed(2) + "</i></li>"
            + "<li> Ch: <i>" + ch.toFixed(2) + "</i></li>"
            + "<li> Viewport Width (vw): <i>" + vw.toFixed(2) + "%</i></li>"
            + "<li> Viewport Height (vh): <i>" + vh.toFixed(2) + "%</i></li>"
            + "<li> Viewport Minimum (vmin): <i>" + vmin.toFixed(2) + "%</i></li>"
            + "<li> Viewport Maximum (vmax): <i>" + vmax.toFixed(2) + "%</i></li>"
            + "</ul>";
    } else {
        alert("Please enter a valid number of pixels.");
    }
}