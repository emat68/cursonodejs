let util = require('util');
var connect = require('connect');
var http = require('http');


function logit(req, res, next){
    util.log(util.format('Solicitud recibida: %s, %s', req.method, req.url));
    next();
}

function echo(req, res, next) {
    req.pipe(res);
    console.log('echo!');
}

var app = connect();
app.use(logit);
app.use(echo);
http.createServer(app).listen(5000);
console.log("Servidor conectado puerto 5000");
