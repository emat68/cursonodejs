const fs = require('fs');
const path = require('path');

//let directorio = __dirname;
let directorio = 'c:/MINVU';

console.log(directorio);
console.log("Llamada por directorio");
fs.readdir(directorio,(err, Files) => {
    Files.forEach((file) => {
        console.log(file);
    })
    
    if(err) return console.error(err);
   // console.log(Files.join(''));
});


console.log("Llamada por archivo");
fs.readdir(directorio, (err, files) => {
    if(err) return console.error(err);
    	var r = [];
    	files.forEach((file) => {
    		s(file);
    		function s(file){
    			fs.stat(directorio + '/' + file, (err, stat) => {
    				if(err){console.error(err);return;}
    				if(stat.isDirectory())r.push({f:file, type: 'dir'});
    				else if(stat.isFile())r.push({f:file, type: 'file'});
    				else r.push(0);
    				if(r.length == files.length){
    					r.filter((m) => {return m;});
    					console.log(r);
    				}
    			});
    		}
    	});
    });


