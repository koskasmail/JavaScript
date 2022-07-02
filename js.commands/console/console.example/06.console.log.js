/*
** 06.console.log.js
**
*/

// stack trace the code
// where the code have been called

console.log('\n\n%c___submit line___', 'color: red; font-weight: bold');

const submit = () => console.trace('submit the data from line' + showTime());
submit();
// submit();


function showTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ms = today.getMilliseconds();
    return "\n" + h + ":" + m + ":" + s + ":" + ms;
}

function runWhere() {
    // var x = 0;
    // for(x=0; x<5;x++) {
    //     console.log(x+1 );
    // }

    console.log(showTime());

    console.trace('tace that');

    console.log(showTime());

}

runWhere();
runWhere();