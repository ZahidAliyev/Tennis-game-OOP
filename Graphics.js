
function drawRectangle(topX, topY, width, height, color) {
  context.fillStyle = color;
  context.fillRect(topX, topY, width, height);
  context.fill();
}
function drawCircle(x,y,radius, color) {
  context.beginPath();
  context.fillStyle = color;
  context.arc(x, y, radius, 0, Math.PI*2, true);
  context.fill();
  context.closePath();
}
function drawAll() {
  drawRectangle(0,0, canvasWidth, canvasHeight, "black");
  drawRectangle(player.x, player.y, player.width, player.height, player.color);
  drawRectangle(comp.x, comp.y, comp.width, comp.height, comp.color);
  drawNet();
}