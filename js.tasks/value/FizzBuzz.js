var output = [];
var count = 1;

function fnFizzBuzz() {

    if (((count % 3) == 0) && ((count % 5) == 0)) {
        output.push("fizzBuzz");
    }

    else if (count % 3 == 0) {
        output.push("fizz");
    }
    else if (count % 5 == 0) {
        output.push("buzz")
    }
    else {
        output.push(count);
    }
    count++;
}

function fizzbuzzPrint() {
    console.log(output);
}

for (var i = 0; i < 16; i++) {
    fnFizzBuzz();
}

fizzbuzzPrint();