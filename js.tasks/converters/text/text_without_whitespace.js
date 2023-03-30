const hr = '..................';
const greeting = '   Hello world!   ';

console.log('greeting length ==> ' + greeting.length );
console.log('\ncut Start white space');
console.log(hr);
console.log(greeting);
console.log(greeting.trimStart());

console.log('\ncut End white space');
console.log(hr);
console.log(greeting);
console.log(greeting.trimEnd());

console.log('\ncut All white space');
console.log(hr);
console.log(greeting);
console.log(greeting.trim());
