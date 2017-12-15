var keyCodes = {
    arrowUp: 38,
    arrowDown: 40,
    arrowRight: 39,
    arrowLeft: 37
};

var fps = 60;
var speed = 32;

var posx = 0;
var posy = 0;

document.addEventListener("keydown", function (e) {

    var player = document.querySelector(".player.player--you");
    console.log(player.style.transform);
    if (keyCodes.arrowUp === e.keyCode) {
        console.log('Move up');
        player.style.transform = "translate(" + (--posy) + "px)";
    } else if (keyCodes.arrowDown === e.keyCode) {
        console.log('Move down');
        player.style.transform = "translate(" + (++posy) + "px)";
    }
    if (keyCodes.arrowRight === e.keyCode) {
        console.log('Move right');
        player.style.transform = "translate(" + (++posx) + "px)";
    } else if (keyCodes.arrowLeft === e.keyCode) {
        console.log('Move left');
        player.style.transform = "translate(" + (--posx) + "px)";
    }

});


