const canvas = document.querySelector("#tennis");
const context = canvas.getContext("2d");

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const winningScore = 1;

// Triggers
var menu = true;
var onePlayer = false;
var gameOver = false;
var computerWon = false;
var playerWon = false;
var options = false;
var musicTurnOn = false;

var lvl_1 = true;
var lvl_2 = false;
var lvl_3 = false;

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
