var fileType = [".signed", ".pdf"];

// var fileType = []; 
// fileType.push(".signed");
// fileType.push(".pdf");

console.log(fileType);

var stfilename = "texts.pdf";
var stname = "name.txt";

// var fileList = [];
// fileList.push(stfilename);
// fileList.push(stname);
// console.log(fileList);

// console.log(fileType);
console.log(stfilename + 'end with ' + fileType[1] + ':::' +  stfilename.endsWith(fileType[1]) );
// console.log('This is not ' + fileType[1] );