
console.log ("\u0041");  

let englishChar = "A";
let unicodeEscapeSequence = "\\u" + englishChar.charCodeAt(0).toString(16).toUpperCase();
console.log(unicodeEscapeSequence); // Output: \u0041

console.log("\n----[A =?= \u0041]----------------")
if ("A" === "\u0041") {
    console.log ("a === \u0041 === true");  
  }
  else {
      console.log (" else !== \u0041  === false");
  }

console.log("\n----[uppercase A-Z]----------------")
// uppercase A-Z
for (let i = 65; i <= 90; i++) { 
    let unicodeEscapeSequence = "\\u" + i.toString(16).toUpperCase();
    console.log(i + " " + unicodeEscapeSequence);
}

console.log("\n----[lowercase a-z]----------------")
// lowercase a-z
for (let i = 97; i <= 122; i++) {
    let unicodeEscapeSequence = "\\u" + i.toString(16).toUpperCase();
    console.log(i + " " + unicodeEscapeSequence);
}

