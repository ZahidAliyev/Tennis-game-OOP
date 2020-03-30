function onePlayerModeActions() {
  ball.Move();
  comp.move();
  //--------Does ball collide with Player or Computer ?
  let user = ball.x < canvasWidth / 2 ? player : comp;
  //---------If ball collide with User
  if (collision(ball, user)) {
    hit.play();
    let collidePoint =
      (ball.y - (user.y + user.height / 2)) / (user.height / 2);
    let angleRad = (collidePoint * Math.PI) / 3;

    let direction = ball.x < canvasWidth / 2 ? 1 : -1;

    ball.velocityX = ball.speed * Math.cos(angleRad) * direction;
    ball.velocityY = ball.speed * Math.sin(angleRad);

    ball.speed += 0.4;
  }
//--------------------------- GOAL
  if (ball.x - ball.radius < 0) {
    comp.score += 1;
    reset();
  } else if (ball.x + ball.radius > canvasWidth) {
    player.score += 1;
    reset();
  }
}
