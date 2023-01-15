console.warn('Decimal - assignment operators');
console.log(numDecimal_1 + " + " + numDecimal_2 + " = " + (numDecimal_1 + numDecimal_2));
console.log(numDecimal_1 + " - " + numDecimal_2 + " = " + (numDecimal_1 - numDecimal_2));
console.log(numDecimal_1 + " * " + numDecimal_2 + " = " + (numDecimal_1 * numDecimal_2));
console.log(numDecimal_1 + " / " + numDecimal_2 + " = " + (numDecimal_1 / numDecimal_2));
console.log((numDecimal_1 + 1) + " % " + numDecimal_2 + " = " + ((numDecimal_1 + 1) % numDecimal_2));
console.log("num1 = num1 + 2 == " + (num1 = num1 + 2));
console.log("== " + (num1 += 2));

console.warn('assignment operators');
console.log("num1 -= 2 == " + (num1 -= 2));
console.log("num1 *= 2 == " + (num1 *= 2));
console.log("num1 /= 2 == " + (num1 /= 2));
console.log("num1 %= 2 == " + (num1 %= 2));