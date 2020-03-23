
function drawRectangle(topX, topY, width, height, color) {
  context.fillStyle = color;
  context.fillRect(topX, topY, width, height);
  context.fill();
}
function drawAll() {
  drawRectangle(0,0, canvasWidth, canvasHeight, "black");
}