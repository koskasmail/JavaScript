var field1 =  document.getElementById("field1"); 
var field2 =  document.getElementById("field2"); 
var empty = document.getElementById("empty");
var sub2 = document.getElementById("sub2");
var output = document.getElementById("output");

empty.addEventListener("click", function() {
    console.log("empty");
    output.innerText = field1.value + " " +  field2.value;
    checkFiedls(field1.value, field2.value, output.value);
});

sub2.addEventListener("click", function() {
    console.log("sub2");
    output.innerText = "sub2";
});

function checkFiedls(field1, field2, output) {
  var output = "";

    if (field1.trim() === "") {
        console.log("Input is empty.");
        output.innerText = "Input is empty.";
      } else {
        console.log("Input is not empty.");
        output = field1;
      }  

      output.innerText = field1; 
}

