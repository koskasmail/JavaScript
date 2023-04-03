const text = "The quick brown ,{fox} jumps over the lazy ,{dog}.";

// Regular expression to match text inside curly braces that start with ",{"
const regex = /,{([^}]+)}/g; 

const matches = [];

let match;

// Add the matched text to the array of matches
while ((match = regex.exec(text)) !== null) {
  matches.push(match[1]); 
}

console.log(matches); 

// Output: ["fox", "dog"]
