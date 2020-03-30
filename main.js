const canvas = document.querySelector("#tennis");
const context = canvas.getContext("2d");

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const winningScore = 3;

// Triggers
var menu = true;
var onePlayer = false;

//
window.onload = function() {
  function loop() {
    game();
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
  canvas.addEventListener("mousemove", movePaddle);
  canvas.addEventListener("mousedown", menuClick);
};
function game() {
  update();
  drawAll();
}
