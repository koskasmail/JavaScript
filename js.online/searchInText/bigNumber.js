function isBig(field1, field2, output) {

    var msg1 = "";
    var msg2 = "";
    var result = "" ;
    var a=0, b=0;

    console.log(`field1 ${field1} :::: field1 ${field1}`);

    if ( 
        (typeof field1 === "number" || (!isNaN(field1) && !isNaN(parseFloat(field1)))) 
    &&  (typeof field2 === "number" || (!isNaN(field2) && !isNaN(parseFloat(field2)))) 
    ) {
      a = field1;
      b = field2;
      console.log(`${a} ? ${b}`);

      if (a > b) {
        output.innerText = "a > b";
      }
      else if (b > a) {
        output.innerText = "a < b";
      }
      else {
        output.innerText = "a == b";
      }
    }
    else {
      console.log("A/B is not a Number");
      msg1 = "A/B is not a Number";
      output.innerText = msg1;
    }
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