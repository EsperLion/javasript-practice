var otherPlayers = {};

var field = null;

function create (id, position) {
    otherPlayers[id] = position;
    var str = '<div class="player player--other" id="' + id + '">' + id + '</div>';
    field.innerHTML += str;
    otherPlayers[id].elem = document.getElementById(id);
    otherPlayers[id].elem.style.transform = "translate(" + (position.x) + "px, " + (position.y) + "px)";
}

function update (id, position) {
    otherPlayers[id].elem.style.transform = "translate(" + (position.x) + "px, " + (position.y) + "px)";
}
