const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create an array to hold the stars
const stars = [];

// Generate random stars
for (let i = 0; i < 100; i++) {
  const star = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 3 + 1,
    speed: Math.random() + 0.5
  };

  stars.push(star);
}

// Update and draw the stars
function updateStars() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = '#ffffff';

  for (let i = 0; i < stars.length; i++) {
    const star = stars[i];

    star.x += star.speed;

    if (star.x > canvas.width) {
      star.x = 0;
    }

    context.beginPath();
    context.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    context.fill();
  }

  requestAnimationFrame(updateStars);
}

updateStars();
