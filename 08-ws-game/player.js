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

var playerInst = {
  x: 0,
  y: 0  
};

var playerID = null;

document.addEventListener("keydown", function (e) {


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
        playerInst.y = playerInst.y - speed / 60;
        player.style.transform = "translate(" + (playerInst.x) + "px, " + (playerInst.y) + "px)";
    }
    if (keyPressed.arrowDown) {
        playerInst.y = playerInst.y + speed / 60;
        player.style.transform = "translate(" + (playerInst.x) + "px, " + (playerInst.y) + "px)";
    }
    if (keyPressed.arrowRight) {
        playerInst.x = playerInst.x + speed / 60;
        player.style.transform = "translate(" + (playerInst.x) + "px, " + (playerInst.y) + "px)";
    }
    if (keyPressed.arrowLeft) {
        playerInst.x = playerInst.x - speed / 60;
        player.style.transform = "translate(" + (playerInst.x) + "px, " + (playerInst.y) + "px)";
    }
    if (keyPressed.arrowLeft || keyPressed.arrowRight || keyPressed.arrowDown || keyPressed.arrowUp) {
        send({
            type: 'updatePostById',
            position: playerInst
        });
    }
}, 10);


function send (position) {
    socket.send(JSON.stringify(position));
}




