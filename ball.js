const ball = {
    x: canvasWidth/2,
    y: canvasHeight/2,
    radius: 10,
    color: "red",
    speed: 5,
    xDirection: Math.random() < 0.5 ? 1 : -1,
    yDirection: Math.random() < 0.5 ? 1 : -1,
    velocityX: 5 ,
    velocityY: 5 ,
    
    
    Move: function() {
        this.velocityX *= this.xDirection;
        this.velocityY *= this.yDirection;
        this.x += this.velocityX;
        this.y += this.velocityY;
        console.log(this.Direction);
    }
}