function splitName(name) {
    var parts = name.split(' ');

    return ("fname::: ${parts[0]} lname::: ${parts[1]} );
}

console.log(splitName("your name") );
