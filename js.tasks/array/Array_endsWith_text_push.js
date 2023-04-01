/* ----[check Array ends With text - with data pushed]------------*/

var stfilename = "name.txt";
var textEndsWith = []; 
textEndsWith.push(".signed");
textEndsWith.push(".pdf");

console.log('fileType in array: ' + textEndsWith);
console.log(stfilename + 'end with ' + textEndsWith[1] + ':::' +  stfilename.endsWith(textEndsWith[1]) );