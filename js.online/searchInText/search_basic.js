var field1 = document.getElementById("field1");
var field2 = document.getElementById("field2");
var empty = document.getElementById("empty");
var num = document.getElementById("num");
var text = document.getElementById("text");
var soutput = document.getElementById("output");

soutput.innerText = "............";


empty.addEventListener("click", function () {
  console.log("is empty()");
  soutput.innerText = field1.value + " " + field2.value;
  // soutput.innerText = checkEmpty(field1.value, field2.value);
  checkAllEmpty(field1.value, field2.value, soutput);
});

num.addEventListener("click", function () {
  console.log("is Number ");
  soutput.innerText = "is Number";
  soutput.innerText = isNumber(field1.value, field2.value);

  // isNumber(field1.value, soutput);
  // isNumber2(field1.value, soutput);
});

text.addEventListener("click", function () {
  console.log("is text ");
  //soutput.innerText = "is text";
  soutput.innerText = isText(field1.value, field2.value);
});

big.addEventListener("click", function () {
  console.log("is Big");
  soutput.innerText = "is Big";
  isBig(field1.value, field2.value, soutput);
});