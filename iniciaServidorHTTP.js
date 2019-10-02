var http = require('http');

var server = http.createServer(function (request,Response) {
    console.log("solicitud iniciada");

    //Response
    Response.setHeader('Content-Type','text/html');
    //Response.writeHead(200,'Content-Type','text/html');
    //Respondo al cliente
    Response.write("Holaaa :) ");
    //Despliego lo que me estanenviando
    console.log(request.headers);
    Response.end();
});

server.listen(3000);
console.log("Servidor ejecutandose en http://localhost:3000")
