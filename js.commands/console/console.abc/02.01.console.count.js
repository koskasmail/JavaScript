

///----[console.count()]------------

function sayHi() 
{
    console.count("bus"); 
    return "Hello";
}

sayHi();  //1
sayHi();  //2
sayHi();  //3
sayHi();  //4
console.countReset("bus"); //0
sayHi(); //1
sayHi(); //2
console.count("car"); //1
console.count("car"); //2

// Note: when no variable define, "default" will be the default
console.count(); //1
console.count(); //2


// ---[summary]------------
// console.count(); /// "default"
// console.countReset(); /// "default"
// console.count("bus"); //=1
// console.countReset("bus"); //=0
// console.count("car"); //=1
// console.countReset("car"); //=0
