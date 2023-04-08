function checkEmpty(field1, field2) {
  var msg1 = "";
  var msg2 = "";
  
  if (field1.trim() === "") {
    console.log("Input is empty.");
    msg1 = "field1:::Empty";
  } else {
    console.log("Input is not empty.");
    msg1 = " field1:::" + field1;
  }

  if (field2.trim() === "") {
    console.log("Input is empty");
    msg2 = "field2:::Empty.";
  } else {
    console.log("Input is not empty.");
    msg2 = " field2:::" + field2;
  }
  return msg1 + "....." + msg2;
}

function checkAllEmpty(field1, field2, output) {
  if ((field1.trim() === "") || (field2.trim() === "")) {
    console.log("Input is empty.");
    output.innerText = "Input is empty.";
    return false;
  } else {
    console.log("Input is OK.");
    output.innerText = "Input is OK.";
    return true;
  }
}

