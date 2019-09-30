
'use strict';
var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
var arrClientes = [];

emitter.on('incorporaRegistro', function addRegistros(arg1) {
        console.log(`Se incropora registro Args: ${arg1.nombre}`);
})

class Direccion{
    constructor(){
        this.calle = "";
        this.numero = "";
        this.comuna = "";
        this.region = "";
    }

    setDireccionValores(_calle,_numero,_comuna,_region){
        this.calle = _calle;
        this.numero = _numero;
        this.comuna = _comuna;
        this.region = _region;
    }
}

class Cliente extends Direccion{

    constructor()
    {   
        super();

        this.idcliente = "";
        this.nombre = "";
        this.fechacreacion = "";
        this.direccion = "";
    }

    setClienteValores(P_id,P_nombre,P_fecha,P_calle,P_numero,P_comuna,P_region)
    {   
        this.idcliente = P_id;
        this.nombre = P_nombre;
        this.fechacreacion = P_fecha;
        this.direccion = super.setDireccionValores(P_calle,P_numero ,P_comuna, P_region);

        arrClientes.push(this);
        //Busco el registro dentro del arreglo, para validar que se ingreso
        var found =  arrClientes.find(function(element) {
            if(element.idcliente == P_id){
                emitter.emit('incorporaRegistro',element); 
            }
          });
        
          //emitter.emit('incorporaRegistro',this);
    }
    getNombre(){
        return this.nombre;
    }
    getsolonombre(){
        arrClientes.map(function(cliente){
        //return cliente.nombre;
        console.log(cliente.nombre);
        })    
    }
}

module.exports = {
    cli45:Cliente,
    arrCli:arrClientes
}