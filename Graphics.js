function drawRectangle(topX, topY, width, height, color) {
  context.beginPath();
  context.fillStyle = color;
  context.fillRect(topX, topY, width, height);
  context.fill();
  context.closePath();
}
function drawCircle(x, y, radius, color) {
  context.beginPath();

  context.arc(x, y, radius, 0, Math.PI * 2, true);
  context.fillStyle = color;
  context.fill();
  context.closePath();
}
function drawText(text, x, y, color) {
  context.fillStyle = color;
  context.font = "60px fantasy";
  context.fillText(text, x, y);
}
function drawAll() {
  drawRectangle(0, 0, canvasWidth, canvasHeight, "black");
  drawRectangle(player.x, player.y, player.width, player.height, player.color);
  drawRectangle(comp.x, comp.y, comp.width, comp.height, comp.color);
  drawNet();

  drawText(player.score, canvasWidth / 4, canvasHeight / 6, "white");
  drawText(comp.score, (3 * canvasWidth) / 4, canvasHeight / 6, "white");
  drawCircle(ball.x, ball.y, ball.radius, ball.color);
}
