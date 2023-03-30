/* ----[check Array ends With text]------------*/

var fileType = [".signed", ".pdf"];

console.log(fileType);

var stfilename = "texts.pdf";
var stname = "name.txt";

console.log(stfilename + 'end with ' + fileType[1] + ':::' +  stfilename.endsWith(fileType[1]) );