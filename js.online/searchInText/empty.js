function checkEmpty(A, B) {
  var msg1 = "";
  var msg2 = "";
  
  if (A.trim() === "") {
    console.log("Input is empty.");
    msg1 = "A:::Empty";
  } else {
    console.log("Input is not empty.");
    msg1 = " A:::" + A;
  }

  if (B.trim() === "") {
    console.log("Input is empty");
    msg2 = "B:::Empty.";
  } else {
    console.log("Input is not empty.");
    msg2 = " B:::" + B;
  }
  return msg1 + "....." + msg2;
}

function checkAllEmpty(A, B, output) {
  if ((A.trim() === "") || (B.trim() === "")) {
    console.log("Input is empty.");
    output.innerText = "Input is empty.";
    return false;
  } else {
    console.log("Input is OK.");
    output.innerText = "Input is OK.";
    return true;
  }
}

