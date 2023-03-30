window.onload = function () {
  let btnHit = document.getElementById("HitButton");
  btnHit.onclick = hit;
  
  /// canvas
  canvas = document.getElementById('canvas');
  context = canvas.getContext("2d");

  // draw a line
  context.moveTo(10,10);
  context.lineTo(100,50);
  context.stroke();
};

let health = 100;

console.log('health: ' + health);

function hit() {
  health = health / 2;

  if (health <= 1) {
    alert("Game Over");
  }
  else {
    console.log('health: ' + health);
  }
}
