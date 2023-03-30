/* ----[fizzBuzz / fizz / buzz]------------*
*  * div 3 and 5 print "fizzBuzz"
*  * div 3 print "fizz"
*  * div 5 print "buzz"
*  * otherwise print the number
*/

var output = [];

function fnFizzBuzz(count) {

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
    console.table(output);
}

for (var i = 0; i < 17; i++) {
    fnFizzBuzz(i);
}

fizzbuzzPrint();