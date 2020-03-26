ball.velocityX *= ball.xDirection;
ball.velocityY *= ball.yDirection;
function update() {

    ball.Move();
    drawAll();
}