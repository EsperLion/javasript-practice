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

var resource = new RequestBuilder('http://localhost:3000/');

function getUsersList () {
    resource.get(function (data) {
        console.log(data);
    }, function (data) {
        console.log(data);
    });
};