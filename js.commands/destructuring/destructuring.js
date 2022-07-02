/*
** ds.js
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

// example #0: dispaly data with alot of use of `animal` variable keyword.
function showAnimal0(animal) {
    return `Animal #0 Data: ${animal.name}, ${animal.type}, ${animal.age}`;
    //return ':::Animal Data::: ' + animal.name + ' , ' + animal.type + ' , ' + animal.age ;
}


// example #1: dispaly data with alot of use of 'animal' variable keyword.
function showAnimal1(animal) {
    return ':::Animal #1 Data::: ' + animal.name + ' , ' + animal.type + ' , ' + animal.age ;
}


// example #2: object destructuring
function showAnimal2({ name, type, age, legs}) {
    return ':::Animal #2 Data::: ' + name + ' , ' + type + ' , ' + age + ' , ' + legs ;
}


// example #3: object destructuring
function showAnimal3({ name, type, age, legs}) {
    // return `:::Animal #3 Data::: name: ${animal.name}, type:${animal.type}, age:${animal.age}, legs:${animal.legs}`;
    return `:::Animal #3 Data::: name: ${name}, type:${type}, age:${age}, legs:${legs}`;
}



// example #4: pass 'animal' object
function showAnimal4(animal) {

    // set a variable that have the name of the properties in that object set equal to the object 
    // name = animal.name; type = animal.type; age = animal.age
    const {name, type, age} = animal;

    return ':::Animal #4 Data::: ' + name + ' , ' + type + ' , ' + age ;
}


// example #5: pass 'animal' object
function showAnimal5(animal) {

    // set a variable that have the name of the properties in that object set equal to the object 
    // name = animal.name; type = animal.type; age = animal.age
    const {name, type, age} = animal;

    return `:::Animal #5 Data::: ' + ${name} + ' , ' + ${type} + ' , ' + ${age}` ;
}




// showAnimal0();
console.log('\n%c___Show Animal Basic, property keyword___', 'color: red; font-weight: bold');
console.log( showAnimal0(animal) );

// showAnimal1();
console.log('\n%c___Show Animal Basic, property keyword___', 'color: red; font-weight: bold');
console.log( showAnimal1(animal) );


// showAnimal2();
console.log('\n%c___Show Animal, copy object property to local variable___', 'color: red; font-weight: bold');
console.log( showAnimal2(animal) );


// showAnimal3();
console.log('\n%c___Show Animal, copy object property to local variable___', 'color: red; font-weight: bold');
console.log( showAnimal3(animal) );


// showAnimal4();
console.log('\n%c___Show Animal, pass all object to local variable by name___', 'color: red; font-weight: bold');
console.log( showAnimal4(animal) );


// showAnimal5();
console.log('\n%c___Show Animal, pass all object to local variable by name___', 'color: red; font-weight: bold');
console.log( showAnimal5(animal) );


// test zone
//
// console.table(animal);
// console.table( animal.name, animal.type, animal.age );
