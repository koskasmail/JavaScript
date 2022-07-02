var html = "";
for (var a = 0; a < 15; a++) {
  html += '<div class="t-n t-n-' + (a + 1) + '"></div>';
}
$(".time-sec-0").html(html);
$(".time-sec-1").html(html);
$(".time-min-0").html(html);
$(".time-min-1").html(html);
$(".time-hour-0").html(html);
$(".time-hour-1").html(html);

var timehold = [
  [1, 2, 3, 4, 6, 7, 9, 10, 12, 13, 14, 15],
  [3, 6, 9, 12, 15],
  [1, 2, 3, 6, 7, 8, 9, 10, 13, 14, 15],
  [1, 2, 3, 6, 7, 8, 9, 12, 13, 14, 15],
  [1, 3, 4, 6, 7, 8, 9, 12, 15],
  [1, 2, 3, 4, 7, 8, 9, 12, 13, 14, 15],
  [1, 2, 3, 4, 7, 8, 9, 10, 12, 13, 14, 15],
  [1, 2, 3, 6, 9, 12, 15],
  [1, 2, 3, 4, 6, 7, 8, 9, 10, 12, 13, 14, 15],
  [1, 2, 3, 4, 6, 7, 8, 9, 12, 15]
];

var t = 0;
var timer = setInterval(function () {
  var dat = new Date();

  var sec = dat.getSeconds();
  var mins = dat.getMinutes();
  var hrs = dat.getHours();

  var spl1 = sec > 9 ? sec.toString().split("") : [0, sec];
  var spl2 = mins > 9 ? mins.toString().split("") : [0, mins];
  var spl3 = hrs > 9 ? hrs.toString().split("") : [0, hrs];
  // console.log(spl);
  var g0 = timehold[parseInt(spl1[1])];
  var g1 = timehold[parseInt(spl1[0])];

  var g2 = timehold[parseInt(spl2[1])];
  var g3 = timehold[parseInt(spl2[0])];

  var g4 = timehold[parseInt(spl3[1])];
  var g5 = timehold[parseInt(spl3[0])];
  var color = "#4f2994";
  $(".t-n").css("background", "#fff");
  g0.forEach(function (r) {
    $(".time-sec-0 .t-n-" + r).css("background", color);
  });

  g1.forEach(function (r) {
    $(".time-sec-1 .t-n-" + r).css("background", color);
  });

  g2.forEach(function (r) {
    $(".time-min-0 .t-n-" + r).css("background", color);
  });

  g3.forEach(function (r) {
    $(".time-min-1 .t-n-" + r).css("background", color);
  });

  g4.forEach(function (r) {
    $(".time-hour-0 .t-n-" + r).css("background", color);
  });
  g5.forEach(function (r) {
    $(".time-hour-1 .t-n-" + r).css("background", color);
  });
  $("span.column").toggleClass("blinker");
  // $('.t-n').css('transform','rotateY(180deg)')
  // clearInterval(timer);
}, 1000);
