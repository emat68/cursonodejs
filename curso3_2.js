//var funciones = require('./curso3');
'use strict';
//var cliente = require('./cliente');
var cliente3 = require("./cliente2.js")

var nn = new cliente3.cli45();
nn.setClienteValores("1","Ernesto","2019-09-22","Pepe Vila","187","La Reina","13");
nn.setClienteValores("1","Ernesto","2019-09-22","Pepe Vila","187","La Reina","13");
nn.setClienteValores("2","juan","2019-09-24","Pepe Vila","187","La Reina","13");
nn.setClienteValores("3","Pedro","2019-09-27","Pepe Vila","187","La Reina","13");


var nombrerecuperado = nn.getNombre();
// console.log(nn[1]);
 console.log(nombrerecuperado);

console.log(nn);



//let n1_cliente = new Cliente("1","Ernesto","2019-09-22","Pepe Vila","187","La Reina","13");
//let n2_cliente = new Cliente("1","juan","2019-09-24","Pepe Vila","187","La Reina","13");
//let n3_cliente = new Cliente("1","Pedro","2019-09-27","Pepe Vila","187","La Reina","13");
//arrclientes2.push(n1_cliente);
//arrclientes2.push(n2_cliente);
//arrclientes2.push(n3_cliente);

// var getnombres2 = function()
//   {
//     return arrclientes2;
// };
//var arreglo = cliente.b();
//var solonombres = cliente.c();
//console.log(arreglo);
//console.log(solonombres);

