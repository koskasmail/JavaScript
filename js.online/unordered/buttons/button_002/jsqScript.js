/***
 * js.jquery
 * created: __/__/____
 * updated: __/__/____
 */

///----[onload]------------///
var min = 0,
  max = 23;
///----[elements properties]------------///
$('#input').attr('disabled', 'disabled');

///----[up.click]------------///
$("#Up").click(function () {
  if ($("#input").val() < max && $("#input").val() >= min)
    $("#input").val(Number($("#input").val()) + 1);  // increment
});

///----[down.click]------------///
$("#Down").click(function () {
  if ($("#input").val() <= max && $("#input").val() > min)
    $("#input").val(Number($("#input").val()) - 1);  // decrement
});