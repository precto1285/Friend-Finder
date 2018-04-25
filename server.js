// Your `server.js` file should require the basic 
// npm packages we've used in class: `express`, `body-parser` and `path`.

const express = require('express');
const bodyParder = require('body-parser');
const path = require('path');

var app = express();
var port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "app/home.html"));
});

app.get("app/survey", function(req, res){
    res.sendFile(path.join(__dirname, "app/survey.html"));
});



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
