/*
** 02.destructuring.js
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


// dispaly data with alot of use of `animal` variable keyword.
function showAnimal(animal) {
    // // return a few property values - (without object destructuring)
    return `Animal #0 Data: ${animal.name}, ${animal.type}, ${animal.age}`;
    //return ':::Animal Data::: ' + animal.name + ' , ' + animal.type + ' , ' + animal.age ;
}


console.log('\n%c ___Show Animal Basic, property keyword ___', 'color: red; font-weight: bold');
console.log(showAnimal(animal));