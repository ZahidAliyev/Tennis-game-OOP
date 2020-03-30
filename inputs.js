function movePaddle(e) {
    if(onePlayer) {
        player.mouseMove(e);
    }
    
}
function menuClick(e) {
    if(menu) {
        if (
            e.offsetX >= (canvasWidth / 10) * 4 &&
            e.offsetX <= (canvasWidth / 10) * 6 &&
            e.offsetY >= (canvasHeight / 12)* 3 &&
            e.offsetY <= (canvasHeight / 12)* 4
        ) {
            onePlayer = true;
            menu = false;
        };
    }
}