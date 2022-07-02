/*
** 01.destructuring.js
**
*/


// object with animal data
const animal = {
    name: 'uri',
    type: 'dog',
    legs: 2,
    hands: 2,
    age: 60,
    single: true
}


// string concatenation
// dispaly data with alot of use of 'animal' variable keyword.
function showAnimal1(animal) {
    // // return a few property values - string concatenation - (without object destructuring)
    return ':::Animal #1 Data::: ' + animal.name + ' , ' + animal.type + ' , ' + animal.age;
}


console.log('\n%c___string concatenation___', 'color: red; font-weight: bold; font-size: 20px;');
console.log('\n%c___Show Animal Basic, property keyword___', 'color: red; font-weight: bold');


console.log(showAnimal1(animal));

