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
    speed: Math.random() + 0.5,
    angle: Math.random() * Math.PI * 2
  };

  stars.push(star);
}

// Update and draw the stars
function updateStars() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = '#ffffff';

  for (let i = 0; i < stars.length; i++) {
    const star = stars[i];

    const dx = Math.cos(star.angle);
    const dy = Math.sin(star.angle);

    star.x += dx * star.speed;
    star.y += dy * star.speed;

    if (star.x > canvas.width) {
      star.x = 0;
    }
    if (star.x < 0) {
      star.x = canvas.width;
    }
    if (star.y > canvas.height) {
      star.y = 0;
    }
    if (star.y < 0) {
      star.y = canvas.height;
    }

    context.beginPath();
    context.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    context.fill();
  }

  requestAnimationFrame(updateStars);
}

// Track mouse movement
canvas.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  for (let i = 0; i < stars.length; i++) {
    const star = stars[i];

    const dx = mouseX - star.x;
    const dy = mouseY - star.y;

    star.angle = Math.atan2(dy, dx);
  }
});

updateStars();
