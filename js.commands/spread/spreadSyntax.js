// spreadSyntax.js

/***
 * object and arrays.
 **/ 

 const pikachu = {name: 'pikachu'};
 const stats = {hp:40, attack: 60, defense: 45};

// console.log(`${pikachu.name}\n${stats.hp}`);
// console.table({pikachu, stats})
console.log(pikachu, stats);

/***
 * assign a properties from 'stats' object/array to pikachu object/array
 */
pikachu['hp'] = stats.hp;
pikachu['attack'] = stats.attack;
pikachu['defense'] = stats.defense;

console.log(pikachu, stats);

    


