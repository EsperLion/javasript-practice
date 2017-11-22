'use strict';

var routes = {
    home: {
        url: 'home',
        template: 'views/home.html'
    },
    blog: {
        url: 'blog',
        template: 'views/blog.html'
    }
};

function click (e) {
    e.preventDefault;
}

window.onhashchange = function () {
    // debugger
    var path = window.location.hash.split('').slice(1).join('');

    var templateUrl = routes[path].template;

    var xhr = new XMLHttpRequest();
    // debugger
    xhr.open('GET', 'http://localhost:8080/' + templateUrl, true);

    xhr.onload = function (data) {
        // debugger
        console.log(this);
        console.log(data);
        document.getElementById('root').innerHTML = this.responseText;
    };

    xhr.error = function (err) {
        debugger
    };

    xhr.send();

};