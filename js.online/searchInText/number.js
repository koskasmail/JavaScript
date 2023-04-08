function isNumber(field1, field2) {

    var msg1 = "";
    var msg2 = "";
  
    console.log(`field1 ${field1} :::: field1 ${field1}`);
    if (typeof field1 === "number" || (!isNaN(field1) && !isNaN(parseFloat(field1)))) {
      console.log("field1 is a Number");
      msg1 = "field1 is a Number";
    }
    else {
      console.log("field1 is not a Number");
      msg1 = "field1 is not a Number";
    }
    
    if (typeof field2 === "number" || (!isNaN(field2) && !isNaN(parseFloat(field2)))) {
      console.log("field2 is a Number");
      msg2 = "field2 is a Number";
    }
    else {
      console.log("field2 is not a Number");
      msg2 = "field2 is not a Number";
    }
  
    return msg1 + "....." + msg2;
  }
  
  function isNumber2(field1, output) {
    if (/^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/.test(field1) ) {
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