const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create an array to hold the snowflakes
const snowflakes = [];

// Generate random snowflakes
for (let i = 0; i < 100; i++) {
  const snowflake = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 3 + 1,
    speed: Math.random() * 3 + 1
  };

  snowflakes.push(snowflake);
}

// Update and draw the snowflakes
function updateSnowflakes() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = '#fff';

  for (let i = 0; i < snowflakes.length; i++) {
    const snowflake = snowflakes[i];

    snowflake.y += snowflake.speed;

    if (snowflake.y > canvas.height) {
      snowflake.y = -snowflake.radius;
      snowflake.x = Math.random() * canvas.width;
    }

    context.beginPath();
    context.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
    context.fill();
  }

  requestAnimationFrame(updateSnowflakes);
}

updateSnowflakes();
