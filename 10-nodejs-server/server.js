var http = require("http");
var routes = require("./routes");
var router = require("./router");


routes.registerRoutes();

http.createServer(router.router).listen(8080);