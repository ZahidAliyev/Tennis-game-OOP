ball.velocityX *= ball.xDirection;
ball.velocityY *= ball.yDirection;

function resetInGame() {
  ball.x = canvasWidth / 2;
  ball.y = canvasHeight / 2;
  ball.velocityX = -ball.velocityX;
  ball.speed = getRandomIntInclusive(6, 9);
}
function resetAll() {
  comp.score = 0;
  player.score = 0;
  ball.speed = 7;
  lvlChange();

}
function update() {
  //-----------------------if one player True. 1 PLAYER MODE
    if(onePlayer) {
        onePlayerModeActions();
        onePlayerWinCondition();
    }
    musicTurnOnOff();
    soundsTurnOnOff();
  // -----------------------IF SOMEONE WON  

  

}
