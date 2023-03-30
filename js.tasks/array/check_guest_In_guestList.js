/* ----[search Text Inside Text]------------*/

var guestList = ["jaron", "hadar", "rami", "anat"];
var checkGuest;
checkGuest = "jaron";

var guestExist =  guestList.includes(checkGuest);

if (guestExist === true ) 
  console.log(checkGuest + ", Welcome.");
else
  console.log(checkGuest + ", go away.");