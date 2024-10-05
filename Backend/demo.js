//write demo program to understand express.js
var express = require('express');
var app = express();
app.get('/', function (req, res) {
res.send('Jai Mata Di');
}
);
var server = app.listen(8081, function () {

console.log("App is running ")});