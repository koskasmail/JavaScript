var varUndefined;  // undefined //
var varNull = null;
var varBoolean = true;
var varText = "var can be used in all the program ";
let letText = "let can be used in code scope";
const constText = "const is a constants that never change";
const constpi = 3.14;  // const is a constants that never change.


var number = 33;

const alsoHuge = BigInt(9007199254740991);
const hugeString = BigInt("9007199254740991");
const hugeHex = BigInt("0x1fffffffffffff");
const hugeOctal = BigInt("0o377777777777777777");
const hugeBin = BigInt("0b11111111111111111111111111111111111111111111111111111");
// const ho = hugeOctal(10);

console.warn('JavaScript 7 different data types:');
console.warn('undefined, null, boolean, string, symbol, number, object. ');
console.log('01. variableNotDeclared ==> ' + typeof (variableNotDeclared));
console.log('02. varUndefined ==> ' + typeof (varUndefined) + ' ==> ' + varUndefined);
console.log('03. varNull ==> ' + typeof (varNull) + ' ==> ' + varNull);
console.log('04. varBoolean ==> ' + typeof (varBoolean) + ' ==> ' + varBoolean);
console.log('05. varText ==> ' + typeof (varText) + ' ==> ' + varText);
console.log('06. letText ==> ' + typeof (letText) + ' ==> ' + letText);
console.log('07. constText ==> ' + typeof (constText) + ' ==> ' + constText);
console.log('08. constpi ==> ' + typeof (constpi) + ' ==> ' + constpi);
console.log('09. number ==> ' + typeof (number) + ' ==> ' + number);

console.log('bigint');
console.log(`alsoHuge ==> ${typeof(alsoHuge)}`);
console.log(`hugeString ==> ${typeof(hugeString)}`);
console.log(`hugeHex ==> ${typeof(hugeHex)}`);
console.log(`hugeOctal ==> ${typeof(hugeOctal)}`);
console.log(`hugeBin ==> ${typeof(hugeBin)}`);

console.log();
console.log('bigint ?');
console.log('typeof alsoHuge === bigint ==> ');
console.log(typeof alsoHuge === 'bigint' );
console.log(typeof BigInt('1') === 'bigint');