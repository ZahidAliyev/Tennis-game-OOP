ball.velocityX *= ball.xDirection;
ball.velocityY *= ball.yDirection;

function reset() {
  ball.x = canvasWidth / 2;
  ball.y = canvasHeight / 2;
  ball.velocityX = -ball.velocityX;
  ball.speed = getRandomIntInclusive(5, 9);
}
function update() {
  //-----------------------if one player True. 1 PLAYER MODE
    if(onePlayer) {
        onePlayerModeActions();
    }
  

}
