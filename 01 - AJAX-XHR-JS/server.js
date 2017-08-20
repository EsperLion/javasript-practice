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
    console.log(req.body);
    userList.push(new User(req.body.name, req.body.surname, req.body.age));
    res.json(userList);
});

app.put("/", function (req, res) {
    for (var i = 0; i < userList.length; i++) {
        if (userList[i].id === req.body.id) {
            userList[i].name = req.body.name;
            userList[i].surname = req.body.surname;
            userList[i].age = req.body.age;
            break;
        }
    }

    res.json(userList);
});

app.delete("/", function (req, res) {
    console.log("DELETE");
});

app.listen(3000, function () {
    console.log("server started!");
});