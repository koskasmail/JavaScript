function isText(A, B, output) {

    var msg1 = "";
    var msg2 = "";
  
    console.log(`A ${A} :::: B ${B}`);
    if (typeof A === "string") {
      console.log("A is a Text");
      msg1 = "A is a Text.";
    }
    else {
      console.log("A is not a Text");
      msg1 = "A is not a Text.";
    }
    
    if (typeof B === "string") {
      console.log("B is a Text");
      msg2 = "B is a Text";
    }
    else {
      console.log("B is not a Text");
      msg2 = "B is not a Text";
    }
  
    output.innerText = msg1 + "....." + msg2;
  }