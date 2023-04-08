function isNumber(A, B) {

    var msg1 = "";
    var msg2 = "";
  
    console.log(`A ${A} :::: B ${B}`);
    if (typeof A === "number" || (!isNaN(A) && !isNaN(parseFloat(A)))) {
      console.log("A is a Number");
      msg1 = "A is a Number";
    }
    else {
      console.log("A is not a Number");
      msg1 = "A is not a Number";
    }
    
    if (typeof B === "number" || (!isNaN(B) && !isNaN(parseFloat(B)))) {
      console.log("B is a Number");
      msg2 = "B is a Number";
    }
    else {
      console.log("B is not a Number");
      msg2 = "B is not a Number";
    }
  
    return msg1 + "....." + msg2;
  }
  
  function isNumber2(A, output) {
    if (/^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/.test(A) ) {
      console.log("isnum ==> true");
      output.innerText = "isnum ==> true";
      return true;
    }
    else {
      console.log("isnum ==> false");
      output.innerText = "isnum ==> false";
      return false;
    }
  }