function RequestBuilder (url) {
    this.resource = url;
    this.async = true;
};

RequestBuilder.prototype.response = function (data) {
    console.log(data);
    return {
        statusCode: data.status,
        statusText: data.statusText,
        data: JSON.parse(data.responseText),
        responseUrl: data.responseURL,
        headers: data.getAllResponseHeaders()
    };
};

RequestBuilder.prototype.get = function (success, error) {

    var xhr = new XMLHttpRequest();
    var self = this;

    xhr.open('GET', this.resource, this.async);

    xhr.onload = function () {
        success(self.response(this));
    };

    xhr.error = function () {
        error(self.response(this));
    };

    xhr.send();

};

RequestBuilder.prototype.post = function (data, success, error) {

    var xhr = new XMLHttpRequest();
    var self = this;

    xhr.open('POST', this.resource, this.async);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')

    xhr.onload = function () {
        success(self.response(this));
    };

    xhr.error = function () {
        error(self.response(this));
    };

    console.log(data);
    xhr.send(JSON.stringify(data));

};

RequestBuilder.prototype.put = function (data, success, error) {

    var xhr = new XMLHttpRequest();
    var self = this;

    xhr.open('PUT', this.resource, this.async);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')

    xhr.onload = function () {
        success(self.response(this));
    };

    xhr.error = function () {
        error(self.response(this));
    };

    console.log(data);
    xhr.send(JSON.stringify(data));

};


var resource = new RequestBuilder('http://localhost:3000/');

function getUsersList () {
    resource.get(function (data) {
        console.log(data);
    }, function (data) {
        console.log(data);
    });
};

function addNewUser () {
    resource.post({
            name: 'German',
            surname: 'Kushch',
            age: 22
        },
        function (data) {
            console.log(data);
        }, function (data) {
            console.log(data);
        });
};

function updateUser () {
    resource.put({
            name: 'Albert',
            surname: 'Einstein',
            age: 100,
            id: 2
        },
        function (data) {
            console.log(data);
        }, function (data) {
            console.log(data);
        });
};