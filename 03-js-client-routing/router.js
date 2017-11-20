'use strict';

var router = (function () {


    function Router () {
        this.routes = {};
    }

    Router.prototype.addRoute = function (path, template) {
        if (!this.routes[path]) {
            this.routes[path] = {
                name: path,
                template: template
            };
        }
        return this;
    };

    Router.prototype.goTo = function (routeName, routeParams) {

        if (!this.routes[routeName]) {
            location.hash = '';
        }

    };


})();