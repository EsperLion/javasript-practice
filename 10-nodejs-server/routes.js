var fs = require("fs");

var router = require("./router");

function readFile (path, res) {
    fs.readFile(path, null, function (err, data) {
        if (err) {
            res.write('error');
        } else {
            res.write(data)
        }
        res.end();
    });
}

module.exports.registerRoutes = function () {
    router.route('/', function (res) {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        readFile('./index.html', res);
    });

    router.route('/login', function (res) {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        readFile('./login.html', res);
    });
};