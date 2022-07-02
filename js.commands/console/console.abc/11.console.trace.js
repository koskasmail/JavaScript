

var intLuckyNumber = 10;

function funcOne() {
    function funcTwo() {
        console.trace(); //#1
    }
    funcTwo(); //#2
}
funcOne(); //#3

console.trace(intLuckyNumber);
