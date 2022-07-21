function GetCurrentDateTime() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var hh = today.getHours();
    var mm = today.getMinutes();
    var ss = today.getSeconds();
    var ms = today.getMilliseconds();
    today = yyyy + '-' + mm + '-' + dd + " " + hh + ":" + mm + ":" + ss + ":" + ms;
    document.write(today);
}

GetCurrentDateTime();
