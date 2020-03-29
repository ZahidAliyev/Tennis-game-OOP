const canvas = document.querySelector("#tennis");
const context = canvas.getContext("2d");

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

//
window.onload = function() {
    function loop() {
        game();
        requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
    canvas.addEventListener("mousemove", movePaddle);
}
function game() {
    update();
    drawAll();
}
