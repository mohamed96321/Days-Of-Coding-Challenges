window.addEventListener('DOMContentLoaded', () => {
  const emotionBalls = document.querySelector('.emotion-balls-find-path');
  const numBalls = 20;
  const balls = [];

  for (let i = 0; i < numBalls; i++) {
    const ball = document.createElement('div');
    ball.classList.add('ball');
    ball.style.background = getRandomColor();
    ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
    ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
    ball.style.transform = `scale(${Math.random()})`;
    ball.style.width = `${Math.random()}em`;
    ball.style.height = ball.style.width;
    ball.style.animationDelay = `${Math.random() * 2}s`; // Add animation delay

    balls.push(ball);
    emotionBalls.appendChild(ball);
  }

  // Function to generate random color
  function getRandomColor() {
    const colors = ['#ff7f50', '#6495ed', '#ffa500', '#7fff00', '#e9967a'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // Function to animate the balls
  function animateBalls() {
    balls.forEach((ball) => {
      ball.style.transform = `translate(${Math.random() * 100}vw, ${
        Math.random() * 100
      }vh) scale(${Math.random()})`;
    });

    setTimeout(animateBalls, 10000); // Adjust animation duration
  }

  // Start the animation
  animateBalls();
});
