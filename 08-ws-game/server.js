var WebSocketServer = require('ws');

// подключенные клиенты
var clients = {};

var index = 0;

// WebSocket-сервер на порту 8081
var webSocketServer = new WebSocketServer.Server({
    port: 8081
});
webSocketServer.on('connection', function(ws) {

    var id = index++;
    clients[id] = {
        ws: ws,
        position: null
    };

    console.log("новое соединение " + id);

    ws.on('message', function(data) {

        console.log('получено сообщение ' + data);

        var tmp = JSON.parse(data);

        if (tmp.type === 'connection') {
            clients[id].position = tmp.position;
            clients[id].ws.send(JSON.stringify({
                type: 'connection',
                id: id
            }));
            for (var key in clients) {
                if (+key !== +id) {
                    clients[key].ws.send(JSON.stringify({
                        type: 'newPlayer',
                        info: {
                            id: id,
                            position: clients[id].position
                        }
                    }));
                    clients[id].ws.send(JSON.stringify({
                        type: 'newPlayer',
                        info: {
                            id: +key,
                            position: clients[key].position
                        }
                    }));
                }
            }
        } else if (tmp.type === 'updatePostById') {
            clients[id].position = tmp.position;
            for (var key in clients) {
                if (+key !== +id) {
                    clients[key].ws.send(JSON.stringify({
                        type: 'updatePostById',
                        info: {
                            id: id,
                            position: clients[id].position
                        }
                    }));
                }
            }
        }

    });

    ws.on('close', function() {
        console.log('соединение закрыто ' + id);
        delete clients[id];
    });

});