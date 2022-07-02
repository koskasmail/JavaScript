
var bar = null;

// 'null' is also an object
console.warn('bug');
console.log(`bar == ${bar}`);
console.log('typeof bar === "object" ');
console.log('variable “bar” is it type of object: ' + (typeof bar === "object") );

console.warn('\nfix bug');
console.log('variable “bar” is it type of object: ' +  ((bar !== null) && (typeof bar === "object")) );
