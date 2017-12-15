// создать подключение
var socket = new WebSocket("ws://localhost:8081");


socket.onopen = function (event) {
    log('Socket connection opened');
};

socket.onclose = function (event) {
    log('Socket connection  closed');
};


socket.onmessage = function(event) {
    log('Socket msg received!');
    // var incomingMessage = event.data;
};

socket.onerror = function(event) {
    log('Socket error occurred!');
};


function log (msg) {
    console.log(msg);
}