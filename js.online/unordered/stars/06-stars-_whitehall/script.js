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
    speed: Math.random() * 3 + 1
  };

  stars.push(star);
}

// Update and draw the stars
function updateStars() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = '#ffffff';

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  for (let i = 0; i < stars.length; i++) {
    const star = stars[i];

    const dx = centerX - star.x;
    const dy = centerY - star.y;

    const distance = Math.sqrt(dx * dx + dy * dy);

    const moveSpeed = star.speed * (1 / distance);

    star.x += dx * moveSpeed;
    star.y += dy * moveSpeed;

    if (star.x > canvas.width || star.x < 0 || star.y > canvas.height || star.y < 0) {
      star.x = Math.random() * canvas.width;
      star.y = Math.random() * canvas.height;
    }

    context.beginPath();
    context.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    context.fill();
  }

  requestAnimationFrame(updateStars);
}

updateStars();
