
var guestList = ["jaron", "hadar", "rami", "anat"];

//var checkGuest = prompt("enter your name: ");
var checkGuest;
// checkGuest = "eli";
checkGuest = "jaron";

var guestExist =  guestList.includes(checkGuest);

if (guestExist === true ) 
  console.log(checkGuest + ", Welcome.");
else
  console.log(checkGuest + ", go away.");


//console.log("guest exist:  " + guestExist);