/*
** console.log.js
**
*/

const rec1 = {name: 'shalom', age: 30, state:'usa', single: false};
const rec2 = {name: 'yifat', age: 40, state:'il', single: false};
const rec3 = {name: 'yaron', age: 46, state:'il', single: false};


//example #0??
console.log('\n');
console.log('name: ' ,rec1.name , ' age: ' ,rec1.age , ' state: ' ,rec1.state , ' single: ' ,rec1.single );
console.log('name: ' ,rec2.name , ' age: ' ,rec2.age , ' state: ' ,rec2.state , ' single: ' ,rec2.single );
console.log('name: ' ,rec3.name , ' age: ' ,rec3.age , ' state: ' ,rec3.state , ' single: ' ,rec3.single );


// example #1: 
// dispay console log data without variable name
console.log('\n');
console.log(rec1);
console.log(rec2);
console.log(rec3);


// example #2: 
// computed property name
// dispay console log data with variable name
// add variable to an object.
console.log('\n',{rec1, rec2, rec3});


// example #3: 
// dispay console log data with variable name and 
// css style
console.log('\n%c___A Team List___', 'color: red; font-weight: bold; font-size: 20px;');
console.log({rec1, rec2, rec3});


// example #3: 
// dispay console log data with variable name and 
// css style
// table style
console.log('\n%c___A Team List Table___', 'color: red; font-weight: bold');
console.table([rec1, rec2, rec3]);

// example #4: time
console.log('\n%c___A Timer___', 'color: red; font-weight: bold');

// define the time with a variable 'lp'
console.time('lp');

let i = 0;
while (i < 100000) {
    i++;
}

console.timeEnd('lp');


// example #5: stack trace the code
// where the code have been called

console.log('\n\n%c___submit line___', 'color: red; font-weight: bold');

const submit = () => console.trace('submit the data from line');
submit();
submit();


function runWhere()  {
    var x = 0;
    for(x=0; x<5;x++) {
        console.log(x+1 );
    }

    console.trace('tace that');
}

runWhere();
runWhere();