// создать подключение
var socket = new WebSocket("ws://localhost:8081");


socket.onopen = function (event) {
    log('Socket connection opened');
    send({
        type: 'connection',
        position: playerInst
    });
};

socket.onclose = function (event) {
    log('Socket connection  closed');
};


socket.onmessage = function(event) {

    var data = JSON.parse(event.data);

    if (data.type === 'connection') {
        playerID = data.id;
    } else if (data.type === 'newPlayer') {
        // if (playerID !==)
        create(data.info.id, data.info.position);
    } else if (data.type === 'updatePostById') {
        update(data.info.id, data.info.position);
    }

};

socket.onerror = function(event) {
    log('Socket error occurred!');
};


function log (msg) {
    console.log(msg);
}

window.onload = function () {
    field = document.querySelector('.field');
};