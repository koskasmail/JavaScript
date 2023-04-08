function isText(field1, field2) {

    var msg1 = "";
    var msg2 = "";
  
    console.log(`field1 ${field1} :::: field1 ${field1}`);
    if (typeof field1 === "string") {
      console.log("field1 is a Text");
      msg1 = "field1 is a Text.";
    }
    else {
      console.log("field1 is not a Text");
      msg1 = "field1 is not a Text.";
    }
    
    if (typeof field2 === "string") {
      console.log("field2 is a Text");
      msg2 = "field2 is a Text";
    }
    else {
      console.log("field2 is not a Text");
      msg2 = "field2 is not a Text";
    }
  
    return msg1 + "....." + msg2;
  }