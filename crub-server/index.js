var express = require("express");
var cors = require("cors");
var mysql = require("mysql");
var bodyParser = require("body-parser");

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

var SELECTS = "SELECT * FROM users";
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "react"
});

connection.connect(function(err) {
  if (err) console.log(err);
});

//console.log(connection);

app.post("/Create", function(req, res) {
  const { array } = req.body;
  console.log(req.body);
  const { first_name, last_name, username } = req.body;
  var INSERT = `INSERT INTO users(first_name, last_name, username) VALUES('${first_name}','${last_name}','${username}')`;
  console.log(INSERT);
  connection.query(INSERT, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send("user added successfully");
    }
  });
});

app.post("/update", function(req, res) {
  const { id, first_name, last_name, username } = req.body;

  var UPDATE = `UPDATE users SET first_name='${first_name}',last_name='${last_name}', username="${username}" WHERE id='${id}'`;
  console.log(UPDATE);
  connection.query(UPDATE, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send("Task updated successfully");
    }
  });
});

app.get("/users/get", function(req, res) {
  const { id } = req.query;
  console.log(id);
  var GET = `SELECT * FROM users WHERE id='${id}'`;

  connection.query(GET, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json({
        data: result
      });
    }
  });
});

app.get("/delete", function(req, res) {
  const { id } = req.query;
  var DELETE = `DELETE FROM users WHERE id='${id}'`;
  connection.query(DELETE, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send("deleted successfully");
    }
  });
});

app.get("/", function(req, res) {
  connection.query(SELECTS, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json({
        data: result
      });
    }
  });
});

app.listen("4400", function() {
  console.log("Server listening on port 4400");
});
