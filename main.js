const canvas = document.querySelector("#tennis");
const context = canvas.getContext("2d");

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

//
window.onload = function() {
    function loop() {
        update();
        drawAll();
        requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
}
