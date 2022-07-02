// sc.js - 


/*
* "template literals" - 
* before “template literal” we used a "string concatenation".
* "template literals" is a mo
*/


/*
* "string concatenation" - 
* is collection of data and variable value and expression and other stuff.
* variable value + string + expression.
*/


const animal = {
    name: 'uri',
    type: 'dog',
    legs: 2,
    hands: 2,
    age: 60,
    single: true
}


// "string concatenation"
let text01 = '::: "string concatenation" -  Animal Data:::  name:' + animal.name + ', type:' + animal.type + ', age:' + animal.age ;
console.log(text01);

// "template literals"
let text02 = `::: "template literals" -  Animal Data:::  name:${animal.name}, type:${animal.type}, age:${animal.age} `;
console.log(text02);

// new line
console.log(`function template literals example`);

/**************************************************************************************************************/



/*** 
 * function  
 **/ 
const printAgeResult = printAge `the dog age is ${animal.age}`;

// print result
console.log(printAgeResult);

/**************************************************************************************************************/



/***
 * function template literals (templating)
 * string with pure functional 
 **/ 
function printAge(string, age) {

    const stAge = age > 8 ? 'old':'young';

    // return `${string[0]} is a ${age} years, he is "${stAge}"` ;
    return `${string} is a ${age} years, he is "${stAge}"` ;
}

console.log(printAge("jaron",3));

/**************************************************************************************************************/



/***
 * function concatenation
 */
function pringAgeConcatenationStyle(string, age) {

    const stAge = age > 8 ? 'old':'young';

    return "" + string + ""  + age + " year old, he is " +  stAge + "";
}

console.log("calling function normally \n" + pringAgeConcatenationStyle("the dog is ", 5) );

/**************************************************************************************************************/

