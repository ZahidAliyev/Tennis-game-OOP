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
  computerLevel: 0.05 ,

  move: function() {

    if (this.y < 0) {
      this.y = 0;
    } else if (this.y + this.height > canvasHeight) {
      this.y = canvasHeight - this.height;
    } else {
      this.y += (ball.y - (this.y + this.height / 2)) * this.computerLevel;
      
    }
  }
};


