const player = {
  height: 100,
  x: 0,
  y: canvasHeight / 2 - 100 / 2,
  width: 10,
  color: "white",
  score: 0,
  mouseMove: function(e) {
    let rect = canvas.getBoundingClientRect();
    this.y = e.clientY - rect.top - this.height / 2;
  }
};

const comp = {
  height: 100,
  x: canvasWidth - 10,
  y: canvasHeight / 2 - 100 / 2,
  width: 10,
  color: "white",
  score: 0,
  computerLevel_1: 0.2,
  computerLevel_2: 0.4,
  computerLevel_3: 0.55,
  move: function() {
    if (this.y < 0) {
      this.y = 0;
    } else if (this.y + this.height > canvasHeight) {
      this.y = canvasHeight - this.height;
    } else {
      this.y += (ball.y - (this.y + this.height / 2)) * this.computerLevel_1;
    }
  }
};

function collision(b, u) {
  u.top = u.y;
  u.bottom = u.y + u.height;
  u.left = u.x;
  u.right = u.x + u.width;

  b.top = b.y - b.radius;
  b.bottom = b.y + b.radius;
  b.left = b.x - b.radius;
  b.right = b.x + b.radius;

  return (
    b.right > u.left && b.top < u.bottom && b.left < u.right && b.bottom > u.top
  );
}
