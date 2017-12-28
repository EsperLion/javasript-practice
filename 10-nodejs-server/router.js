var fs = require("fs");
var url = require("url");

var routes = {};

module.exports.router = function (req, res) {

    var path = url.parse(req.url).path;
    console.log(path);
    if (routes[path] !== undefined) {
        routes[path](res)
    } else {
        res.write('huinya, davai po novoi');
        res.end();
    }
};


module.exports.route = function (path, callback) {
    routes[path] = callback;
};