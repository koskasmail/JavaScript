
/*
** 06.destructuring.js
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

// pass 'animal' object
function showAnimal5(animal) {

    // set a variable that have the name of the properties in that object set equal to the object 
    // name = animal.name; type = animal.type; age = animal.age
    const {name, type, age} = animal;

    return `:::Animal #5 Data::: ' + ${name} + ' , ' + ${type} + ' , ' + ${age}` ;
}


console.log('\n%c___Show Animal, pass all object to local variable by name___', 'color: red; font-weight: bold');
console.log( showAnimal5(animal) );

