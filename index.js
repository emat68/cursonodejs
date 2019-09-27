
var express = require('express');
var app = express();

var cliente_1 = require('./cliente');

app.get('/', function (req, res) {
  res.send(cliente_1);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
  
});
