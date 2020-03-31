function clickCoordinate(e, widthDivision, heightDivision, leftX, rightX, topY, bottomY) {
    return (e.offsetX >= (canvasWidth / widthDivision) * leftX &&
    e.offsetX <= (canvasWidth / widthDivision) * rightX &&
    e.offsetY >= (canvasHeight / heightDivision) * topY &&
    e.offsetY <= (canvasHeight / heightDivision) * bottomY)
}
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
        if (
            e.offsetX >= (canvasWidth / 10) * 4 &&
            e.offsetX <= (canvasWidth / 10) * 6 &&
            e.offsetY >= (canvasHeight / 12)* 3 &&
            e.offsetY <= (canvasHeight / 12)* 4
        ) {
            onePlayer = true;
            menu = false;
        };
        //GO TO OPTIONS
        if(clickCoordinate(e, 10, 12, 4, 6, 6.5, 7)) {
            menu = false;
            options = true;
        }
    }
    if(gameOver) {
        if (clickCoordinate(e, 10, 12, 3.8, 6, 5, 6)) {
            console.log("asdasd");
            menu = true;
            console.log("menuClick -> menu", menu)
            gameOver = false;
        };
    }
    // IN OPTIONS
    if(options) {
        // GO TO MENU
        if(clickCoordinate(e, 10, 12, 3.8, 6, 5.5, 6.5)) {
            menu = true;
            options = false;
        }
        // MUSIC ON OFF
        if(clickCoordinate(e, 10, 12, 3.8, 6, 3, 4.2)) {
            console.log("music");
            if(musicTurnOn) {
                musicTurnOn = false;
                console.log("menuClick -> musicTurnOn", musicTurnOn)
            } else {
                musicTurnOn = true;
                console.log("menuClick -> musicTurnOn", musicTurnOn)
            }
        }

        // SOUNDS
        if(clickCoordinate(e, 10, 12, 3.8, 6, 4.2, 5)) {
            console.log("sounds");
            if(soundsOn) {
                soundsOn = false;
            } else {
                soundsOn = true;
            }
        }

    }
}