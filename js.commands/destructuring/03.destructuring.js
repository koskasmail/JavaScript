
/*
** 03.destructuring.js
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

// object destructuring - using some of the object properties
function showAnimal2({ name, type, age, legs}) {
    return ':::Animal #2 Data::: ' + name + ' , ' + type + ' , ' + age + ' , ' + legs ;
}



console.log('\n%c___Show Animal, copy object property to local variable___', 'color: red; font-weight: bold');
console.log( showAnimal2(animal) );