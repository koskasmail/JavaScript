const text = "The quick brown {fox} jumps over the lazy {dog}.";

// Regular expression to match text inside curly braces
const regex = /{([^}]+)}/g; 

const matches = [];

let match;

while ((match = regex.exec(text)) !== null) {
  // Add the matched text to the array of matches
  matches.push(match[1]); 
}

console.log(matches); 


// Output: ["fox", "dog"]
