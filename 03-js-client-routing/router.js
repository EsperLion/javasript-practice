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
    e.preventDefault();
}

function click2 (e, url) {
    e.preventDefault();
    debugger
    history.pushState({}, '', url);
    ajax(url);
}

window.onhashchange = function () {
    ajax();
};

function ajax (url) {
    // debugger
    var path = window.location.hash.split('').slice(1).join('');

    debugger
    var templateUrl = routes[path || url].template;

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
}

