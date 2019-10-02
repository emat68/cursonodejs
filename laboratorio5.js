var http = require('http');
const fs = require('fs');
const path = require('path');

function  send404(response) {
  response.writeHeader(400,{'Content-Type':'text/html'});
  response.write('Error 404: Recurso no encontrado');
  response.end();
}

var server = http.createServer(function (req,res) {
    let  fileurl;
    let filepath;
        
      if ( req.url == '/') {
        filepath = path.resolve('./public/index.html');
      }else{
           fileurl = req.url;
           filepath = path.resolve('./public/' + fileurl);
      }
      

    fs.exists(filepath,function (exist){
       if (exist){
        res.writeHead(200,{'Content-Type':'text/html'});
        //fs.createReadStream('./public/index.html').pipe(res);
        fs.createReadStream(filepath).pipe(res);
    }else{
        send404(res);
    }
  });

});
server.listen(4000);

console.log("Servidor ejecutandose en http://localhost:4000")