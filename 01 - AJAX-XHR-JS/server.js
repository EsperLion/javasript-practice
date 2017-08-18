var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extedn: true}));


function User (name, surname, age) {
    this.name = name || 'no name';
    this.surname = surname || 'no surname';
    this.age = age || 0;
    this.id = User.index++;
};

User.index = 0;

var userList = [
    new User('John', 'Doe', 42),
    new User('Marge', 'Doe', 41),
    new User('Mike', 'Mouse', 18),
    new User('Liza', 'Care', 22)
];

app.get("/", function (req, res) {
    console.log("GET");
    res.json(userList);
});

app.post("/", function (req, res) {
    console.log("POST");
});

app.update("/", function (req, res) {
    console.log("UPDATE");
});

app.delete("/", function (req, res) {
    console.log("DELETE");
});

app.listen(3000, function () {
    console.log("server started!");
});