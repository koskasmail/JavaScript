
// one/1 object three/3 properties
const user = {
    age: 14,
    fname: "tea",
    pname: "ice",
    hobbies: ["sea", "basketball", "soccer", "tennis"],
    foods: [{type:"fruit", name:"apple"},
            {type:"fruit", name:"grapes"} 
           ],
    fnWelcome:()=> {
        console.error("Welcome, i am using Function inside Object");
    }
}

var ts = '&nbsp;&nbsp;&nbsp;'

user.fnWelcome();

document.write('<div>one/1 object three/3 properties</div>');
document.write('<div> private name:' + ts + '' + user.pname + '</div>');
document.write('<div> family name:' + ts + '' + user.fname+ '</div>');
document.write('<div> age:'  + ts + '' +  user.age + '</div>');

document.write('<br/><br/> <div>' + '---[hobbies]----' + '<ul>');
user.hobbies.forEach((hobby)=> {
    document.write('<li>' + ts + '' + hobby + '</li>');
});
document.write('</ul>' + '</div>');
document.write('<hr>');


document.write('<br/><br/> <div>' + '---[foods]----' + '<ul>');
user.foods.forEach((food)=> {
    document.write('<li>' + ts + '' + food.type + ' :: ' + ' ' + food.name + '</li>');
});
document.write('</ul>' + '</div>');
document.write('<hr>');


console.warn('<div>one/1 object, three/3 properties, one/1 array </div>');
console.log(user);
console.log(user.foods);
