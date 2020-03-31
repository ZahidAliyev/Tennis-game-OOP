function keyPressTrigger(e, leftUpKey, leftDownKey, rightUpKey, rightDownKey, isPressed) {
    if(e.code === leftUpKey) {
        leftPlayerUpPressed = isPressed;
    };
    if(e.code === leftDownKey) {
        leftPlayerDownPressed = isPressed;
    };
    if(e.code === rightUpKey) {
        rightPlayerUpPressed = isPressed;
    };
    if(e.code === rightDownKey) {
        rightPlayerDownPressed = isPressed;
    };
}

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
function twoPlayerControlKeyDown(e) {
    if(localTwoPlayers) {
        console.log(e.code);
        keyPressTrigger(e, "KeyW", "KeyS", "Numpad8", "Numpad2", true);
    }
}

function twoPlayerControlKeyUp(e) {
    if(localTwoPlayers) {
        keyPressTrigger(e, "KeyW", "KeyS", "Numpad8", "Numpad2", false);

    }
}

function Pause(e) {
    if(e.code === "KeyP") {
        if(pause) {
            pause = false;
        } else {
            pause = true;
        }
        
    };
}

function menuClick(e) {
    if(menu) {
        // ONE PLAYER
        if (clickCoordinate(e, 10, 12, 4, 6, 3, 4)) {
            onePlayer = true;
            menu = false;
        };
        // 2 PLAYER LOCAL
        if (clickCoordinate(e, 10, 12, 4, 6, 4, 5)) {
            localTwoPlayers = true;
            menu = false;
            console.log("menuClick -> localTwoPlayers", localTwoPlayers)
            // menu = false;
        };

        //GO TO OPTIONS
        if(clickCoordinate(e, 10, 12, 4, 6, 6.5, 7)) {
            menu = false;
            options = true;
        }
    }
    // ------- G0 to Menu From Game Over
    if(gameOver) {
        if (clickCoordinate(e, 10, 12, 3.8, 6, 5, 6)) {
            menu = true;
            resetAll();
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

    if(pause) {
        if(clickCoordinate(e, 10, 12, 3.8, 8, 6, 7)) {
            menu = true;
            pause = false;
            onePlayer = false;
            localTwoPlayers = false;
        }
    }
}