

console.log("----[integer Output]------------");
var i = 10;
console.log("number %i and number %d " , i , i+1);


console.log("----[float Output]------------");
var f = 10.10;
console.log("number %f and number %f " , i , i+0.01);


console.log("----[string Output]------------");
var s = "koskasmail"
console.log("github: %s " , s);


console.log("----[object Output]------------");
var myBank = {
    state: "israel",
    city: "tel aviv yaffo",
    street: "hamasger",
    streetNumber: 40
};

console.log("object output::: %o " ,myBank);
console.log("object output::: %O " ,myBank);

console.log("object output %o " ,myBank.city);
console.log("object output %O " ,myBank.city);

console.log("Multiple styles: %cred %corange", "color: red", "color: orange", "Additional unformatted message");
console.log(`%c----[ background: green, color: white ]------------`,`background: Green; color: #FFFFFF; padding: 5px`);
console.log("%c background: lightgreen -to- white ", "background: content-box radial-gradient(lightgreen, white)");
console.log("%c 1974" , "background: url('C:/007/') ");  // fix
