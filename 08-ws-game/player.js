var keyCodes = {
    arrowUp: 38,
    arrowDown: 40,
    arrowRight: 39,
    arrowLeft: 37
};

var keyPressed = {
    arrowUp: false,
    arrowDown: false,
    arrowRight: false,
    arrowLeft: false
};

var fps = 60;
var speed = 300;

var posx = 0;
var posy = 0;

document.addEventListener("keydown", function (e) {

    console.log('down', JSON.stringify(keyPressed));

    if (keyCodes.arrowUp === e.keyCode) {
        keyPressed.arrowUp = true;
    }
    if (keyCodes.arrowDown === e.keyCode) {
        keyPressed.arrowDown = true;
    }
    if (keyCodes.arrowRight === e.keyCode) {
        keyPressed.arrowRight = true;
    }
    if (keyCodes.arrowLeft === e.keyCode) {
        keyPressed.arrowLeft = true;
    }

});

document.addEventListener("keyup", function (e) {

    console.log('up', JSON.stringify(keyPressed));

    if (keyCodes.arrowUp === e.keyCode) {
        keyPressed.arrowUp = false;
    }
    if (keyCodes.arrowDown === e.keyCode) {
        keyPressed.arrowDown = false;
    }
    if (keyCodes.arrowRight === e.keyCode) {
        keyPressed.arrowRight = false;
    }
    if (keyCodes.arrowLeft === e.keyCode) {
        keyPressed.arrowLeft = false;
    }

});

setInterval(function () {

    var player = document.querySelector(".player.player--you");

    if (keyPressed.arrowUp) {
        posy = posy - speed / 60;
        player.style.transform = "translate(" + (posx) + "px, " + (posy) + "px)";
    }
    if (keyPressed.arrowDown) {
        posy = posy + speed / 60;
        player.style.transform = "translate(" + (posx) + "px, " + (posy) + "px)";
    }
    if (keyPressed.arrowRight) {
        posx = posx + speed / 60;
        player.style.transform = "translate(" + (posx) + "px, " + (posy) + "px)";
    }
    if (keyPressed.arrowLeft) {
        posx = posx - speed / 60;
        player.style.transform = "translate(" + (posx) + "px, " + (posy) + "px)";
    }
}, 10);



