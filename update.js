ball.velocityX *= ball.xDirection;
ball.velocityY *= ball.yDirection;
function collision(b, u) {
    u.top = u.y;
    u.bottom = u.y + u.height;
    u.left = u.x;
    u.right = u.x + u.width;

    b.top = b.y - b.radius;
    b.bottom = b.y + b.radius;
    b.left = b.x - b.radius;
    b.right = b.x + b.radius;

    return b.right > u.left && b.top < u.bottom && b.left < u.right && b.bottom > u.top;
}
function reset() {
    ball.x = canvasWidth/2;
    ball.y = canvasHeight/2;
    ball.velocityX = - ball.velocityX;
    ball.speed = 5;
}
function update() {

    ball.Move();
    comp.move();
    //Does ball collide with Player or Computer ?
    let user = (ball.x < canvasWidth/2) ? player : comp;
    //If ball collide with User
    if(collision(ball, user)) {
        hit.play();
        let collidePoint = (ball.y - (user.y + user.height/2)) / (user.height/2);
        let angleRad = collidePoint * Math.PI/3;

        let direction = (ball.x < canvasWidth/2) ? 1 : -1;
        
        ball.velocityX = ball.speed * Math.cos(angleRad) * direction;
        ball.velocityY = ball.speed * Math.sin(angleRad);

        ball.speed += 0.5;
    }
    if(ball.x - ball.radius < 0) {
        comp.score += 1;
        reset();
    } else if(ball.x + ball.radius > canvasWidth) {
        player.score += 1;
        reset();
    }

}