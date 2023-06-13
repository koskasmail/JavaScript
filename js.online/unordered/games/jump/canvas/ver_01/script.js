window.onload = function () {

  /// canvas
  canvas = document.getElementById('canvas');

  // context - draw area
  context = canvas.getContext("2d");

  // ///----[draw a line (test)]----///
  // context.moveTo(0, 0);
  // context.lineTo(600, 400);
  // context.stroke();

  // // draw a line
  // context.moveTo(10, 10);
  // context.lineTo(100, 50);
  // context.stroke();

  // // draw Rectangle
  // context.rect(50, 50, 100, 100);
  // context.stroke();

  // // draw Arc
  // var centerX = 120;
  // centerY = 120;
  // radius = 180;
  // startingAngle = 120;
  // endingAngle = 180;
  // counterclockwise = false;
  // context.arc(centerX, centerY, radius, startingAngle, endingAngle, counterclockwise);
  // context.stroke();

  // // draw Arc
  // context.arc(150, 150, 100, 0, 1 * Math.PI);
  // context.stroke();

  // // draw Circle
  // context.arc(300, 200, 100, 0, 2 * Math.PI);
  // context.stroke();


  // // draw rect + width = 10
  // context.rect(50, 50, 200, 150);
  // context.lineWidth = 10;
  // context.strokeStyle = "red";
  // context.stroke();


  // // Styles - fill color
  // context.rect(100, 100, 150, 150);

  // //context.fillStyle = "yellow";
  // context.fillStyle = "#ffffff"; ///white
  // // context.fillStyle = "#000000"; ///black
  // context.fill();
  // context.lineWidth = 10;
  // context.strokeStyle = "red";
  // context.stroke();


  // // // circle
  // context.arc(300, 200, 100, 0, 2 * Math.PI);

  // context.fillStyle = "#de4646";
  // context.fill();

  // context.lineWidth = 6;
  // context.strokeStyle = "#505050";
  // context.stroke();

  // draw two shape - beginPath()
  context.beginPath();
  context.rect(50, 50, 300, 200);
  context.fillStyle = "#1775b7";
  context.fill();

  context.beginPath();
  context.arc(300, 200, 100, 0, 2 * Math.PI);
  context.fillStyle = "#de4646";
  context.fill();
};
