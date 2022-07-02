
/*
** 04.destructuring.js
**
*/

/**
 * 'text name' -or- 'text name ' + animal.name
 * "text name" -or- "text name " + animal.name 
 * ` ${animal.name} `
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

// object destructuring
function showAnimal3({ name, type, age, legs}) {
    // return `:::Animal #3 Data::: name: ${animal.name}, type:${animal.type}, age:${animal.age}, legs:${animal.legs}`;
    return `:::Animal #3 Data::: name: ${name}, type:${type}, age:${age}, legs:${legs}`;

}



console.log('\n%c___Show Animal, copy object property to local variable___', 'color: red; font-weight: bold');
console.log( showAnimal3(animal) );