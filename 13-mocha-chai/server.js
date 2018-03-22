var express = require("express"),
	bodyParser = require("body-parser");

var each = require('lodash-es/ma')


var app = express();

let users = [
	{
		name: 'German',
		age: 22
	},
	{
		name: 'Greg',
		age: 42
	},
	{
		name: 'Vasya',
		age: 26
	}
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extedn: true}));

app.get("/get-info", function (req, res) {
	res
		.status(200)
		.json(users);
});

app.post("/add-user", function (req, res) {
	users.push({
		name: 'Nastya',
		age: 22
	});
	res
		.status(200)
		.json(users);
});

function createServer() {
	return new Promise((resolve, reject) => {
		"use strict";
		app.listen(8089, function () {
			console.log("server started");
			resolve();
		});
	});
}

module.exports.create = createServer;
module.exports.app = app;

var express = require("express"),
	bodyParser = require("body-parser");

var each = require('lodash-es/ma')


var app = express();

let users = [
	{
		name: 'German',
		age: 22
	},
	{
		name: 'Greg',
		age: 42
	},
	{
		name: 'Vasya',
		age: 26
	}
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extedn: true}));

app.get("/get-info", function (req, res) {
	res
		.status(200)
		.json(users);
});

app.post("/add-user", function (req, res) {
	users.push({
		name: 'Nastya',
		age: 22
	});
	res
		.status(200)
		.json(users);
});

function createServer() {
	return new Promise((resolve, reject) => {
		"use strict";
		app.listen(8089, function () {
			console.log("server started");
			resolve();
		});
	});
}

module.exports.create = createServer;
module.exports.app = app;

var express = require("express"),
	bodyParser = require("body-parser");

var each = require('lodash-es/ma')


var app = express();

let users = [
	{
		name: 'German',
		age: 22
	},
	{
		name: 'Greg',
		age: 42
	},
	{
		name: 'Vasya',
		age: 26
	}
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extedn: true}));

app.get("/get-info", function (req, res) {
	res
		.status(200)
		.json(users);
});

app.post("/add-user", function (req, res) {
	users.push({
		name: 'Nastya',
		age: 22
	});
	res
		.status(200)
		.json(users);
});

function createServer() {
	return new Promise((resolve, reject) => {
		"use strict";
		app.listen(8089, function () {
			console.log("server started");
			resolve();
		});
	});
}

module.exports.create = createServer;
module.exports.app = app;