var arrclientes = [];
function callobjetoCliente()
{

//Definicion de objetos dentro de objetos
var cliente= {
    idcliente: 1,
    nombre: "Ernesto",
    fechacreacion: "2019-09-20",
    direccion: {
        calle: "Pepe Viña",
        numero: "187",
        comuna: "La Reina",
        region: "metropolitana"
    }
}
arrclientes.push(cliente);

var cliente2= {
    idcliente: 2,
    nombre: "Jose",
    fechacreacion: "2019-09-21",
    direccion: {
        calle: "Pepe Viña",
        numero: "187",
        comuna: "La Reina",
        region: "metropolitana"
    }
}
arrclientes.push(cliente2);
var cliente3= {
    idcliente: 3,
    nombre: "Jhon",
    fechacreacion: "2019-09-22",
    direccion: {
        calle: "Pepe Viña",
        numero: "187",
        comuna: "La Reina",
        region: "metropolitana"
    }
}
arrclientes.push(cliente3);

};

var getnombres = function()
  {
    callobjetoCliente();
    return arrclientes;
};

var getsolonombre = function(){
    
    callobjetoCliente();
    arrclientes.map(function(cliente){
    console.log(cliente.nombre);
    });
      
};

module.exports = { 
    cli:arrclientes,
    b:getnombres,
    c:getsolonombre
}

// (function recorre1(){
//     callobjetoCliente();
//     var candidatos = [];
//     candidatos.push(arrclientes[0]);
   
//    //Esta función permite comparar dos variables, el resulatado lo deja en candidatos
//    //luego toma el siguiente registro de arrclientes y lo compara con el resultado
//    const primero = arrclientes.reduce(function(arrclientes,candidatos)
//    {return arrclientes.fechacreacion > candidatos.fechacreacion? arrclientes:candidatos
// }
//    );
//    //return("DDD");
//    console.log("Usuario mas Nuevo =>>");
//    console.log( primero);
   
 
//    const ultimo = arrclientes.reduce(function(arrclientes,candidatos)
//    {return arrclientes.fechacreacion < candidatos.fechacreacion? arrclientes:candidatos
// }
//    );
//    console.log("Usuario mas viejo =>>");
//    console.log( ultimo);
// })();

