

///----[groupCollapsed() ... group() ... groupEnd()]------------

console.groupCollapsed("All group Collapsed ");

console.info("TOP");

console.group("#1 - Group-Title");
console.info("01");
console.groupEnd();
console.log();

console.group("#2 - Group-Title");
    console.warn("01");
    console.error("02");
console.groupEnd();
console.log();

console.groupCollapsed("All group #3 Collapsed ");
console.group("#3 - Group-Title");
console.debug("01");
    console.group("#3.1 - Group-Title");
    console.warn("01.01");
        console.group("#3.2 - Group-Title");
        console.warn("01.02");
        console.groupEnd();
    console.groupEnd();
console.error("01.03");
console.groupEnd();
console.groupEnd();


// ---[summary]------------
// console.groupCollapsed("All group Collapsed ");
// // console.group("group-name"); 
// // ...
// // console.groupEnd("group-name");