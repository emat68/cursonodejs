var http = require('http');
const fs = require('fs');
const path = require('path');
let util = require('util');
var connect = require('connect');

let directorio = __dirname;
let archivo = __filename;

function logit(req, res, next){
    util.log(util.format('Solicitud recibida: %s, %s', req.method, req.url));
    next();
}

function leerArchivos(req, res, next){
    let  fileurl;
    let filepath;
    var p_dir = req.url;
      //Declaro directorio de tipo _dirname
      //Declaro archivo de tipo _filename

      console.log(p_dir);
      //console.log("Llamada por directorio");
      fs.readdir(p_dir,(err, Files) => {
          Files.forEach((file) => {
              console.log(file);
              util.log(util.format('Archivos encontrados: %s', file));
          })
          
          if(err) return console.error(err);
         // console.log(Files.join(''));
      });
      next();
}

function salir(req, res, next) {
    req.pipe(res);
    console.log('echo!');
} 

var app = connect();
app.use(logit);
app.use(leerArchivos);
app.use(salir);
http.createServer(app).listen(5000);
