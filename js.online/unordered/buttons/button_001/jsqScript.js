/***
 * js.jquery
 * created: __/__/____
 * updated: __/__/____
 */

var min = 0,
    max = 23;

$("#Up").click(function(){
  if($("#input").val() < max && $("#input").val() >= min )
    $("#input").val(Number($("#input").val()) + 1);  // increment
});

$("#Down").click(function(){
  if($("#input").val() <= max && $("#input").val() > min )
    $("#input").val(Number($("#input").val()) - 1);  // decrement
});